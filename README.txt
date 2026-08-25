LENOVOTECH / THINKCENTRE — DESPLIEGUE EN VERCEL

Dominio:
https://thinkcentre.es/

Google Analytics:
G-J5ECPSYT2D

Variables SMTP compartidas necesarias en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[tu contraseña SMTP configurada en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

IMPORTANTE:
- El correo no aparece visible en la web. Solo se utiliza en /api/contacto.
- Tras añadir o modificar variables, haz Redeploy.
- Para comprobar las variables, abre /api/contacto. Deben aparecer en true.
- El formulario se queda en la página y envía mediante fetch().
- Se han incluido los tres CTA del hero, Google Business/Maps, Cal.com, YouTube,
  Google Analytics, diagnóstico gratuito y botones flotantes separados.

CHATBOT:
Se incluye la interfaz visual y las posiciones/z-index consolidadas:
ventana > botón del bot > WhatsApp.
Para conectar el chatbot al flujo n8n real hace falta insertar el webhook/configuración
del flujo n8n que utilices en producción.
