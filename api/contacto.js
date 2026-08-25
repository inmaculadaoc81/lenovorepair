// api/contacto.js
// Vercel Serverless Function: recibe el formulario de contacto de index.html
// y envía un email vía SMTP usando nodemailer.
//
// GET  /api/contacto  -> diagnóstico: indica (true/false) qué variables de
//                        entorno SMTP están configuradas, sin revelar sus valores.
// POST /api/contacto  -> envía el email con los datos del formulario.

const nodemailer = require('nodemailer');

const REQUIRED_ENV_VARS = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_SECURE',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_EMAIL',
];

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return cachedTransporter;
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const status = {};
    REQUIRED_ENV_VARS.forEach((key) => {
      status[key] = Boolean(process.env[key] && String(process.env[key]).trim());
    });
    res.status(200).json(status);
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).json({ ok: false, code: 'METHOD_NOT_ALLOWED' });
    return;
  }

  const missingEnv = REQUIRED_ENV_VARS.filter(
    (key) => !process.env[key] || !String(process.env[key]).trim()
  );
  if (missingEnv.length) {
    console.error('Faltan variables de entorno SMTP:', missingEnv.join(', '));
    res.status(500).json({ ok: false, code: 'SERVER_NOT_CONFIGURED' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (err) {
      res.status(400).json({ ok: false, code: 'INVALID_JSON' });
      return;
    }
  }
  body = body || {};

  const nombre = String(body.nombre || '').trim();
  const telefono = String(body.telefono || '').trim();
  const email = String(body.email || '').trim();
  const equipo = String(body.equipo || '').trim();
  const mensaje = String(body.mensaje || '').trim();

  if (!nombre || !telefono || !email || !equipo || !mensaje) {
    res.status(400).json({ ok: false, code: 'MISSING_FIELDS' });
    return;
  }
  if (!isValidEmail(email)) {
    res.status(400).json({ ok: false, code: 'INVALID_EMAIL' });
    return;
  }
  const MAX_LEN = 3000;
  if ([nombre, telefono, email, equipo, mensaje].some((v) => v.length > MAX_LEN)) {
    res.status(400).json({ ok: false, code: 'FIELD_TOO_LONG' });
    return;
  }

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"LenovoRepair" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nueva consulta web · ${nombre}`,
      text:
        `Nombre: ${nombre}\n` +
        `Teléfono: ${telefono}\n` +
        `Email: ${email}\n` +
        `Modelo Lenovo: ${equipo}\n\n` +
        `Mensaje:\n${mensaje}`,
      html:
        `<p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>` +
        `<p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p><strong>Modelo Lenovo:</strong> ${escapeHtml(equipo)}</p>` +
        `<p><strong>Mensaje:</strong><br>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>`,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error enviando el correo de contacto:', err);
    res.status(502).json({ ok: false, code: 'SEND_FAILED' });
  }
};
