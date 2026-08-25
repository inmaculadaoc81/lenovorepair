LENOVOREPAIR — DESPLIEGUE EN VERCEL

Rebrand a partir de la plantilla "LenovoTech ThinkCentre" (Madrid), adaptada a la
marca LenovoRepair (Valladolid) según instrucción del cliente.

Dominio:
https://thinkcentre.es/
PENDIENTE DE CONFIRMAR: el canonical, og:url, JSON-LD "url" y el enlace de Cal.com/
mapa siguen apuntando al dominio original de la plantilla porque no se ha indicado
el dominio real de LenovoRepair. Actualizar en cuanto se confirme.

Logo e icono:
Se han sustituido por los archivos proporcionados por el cliente:
- assets/logo-lenovorepair.png (logo completo con ®)
- assets/favicon-lenovorepair.png (icono, favicon)
Se han eliminado los archivos antiguos de la plantilla Madrid
(logo/ico -servico-tecnico-...-lenovo-madrid.jpg/.ico).
Ambas imágenes tienen fondo opaco #07111e (azul marino oscuro, muestreado con
PIL en las 4 esquinas de cada imagen). Por eso la cabecera y el pie de página
se han pintado exactamente de ese mismo color (#07111e), para que el logo
quede integrado sin recuadro visible. El rojo de acento (#e2231a) ya coincidía
con el rojo del logo (#e31b23), así que no se ha tocado.

Color:
- Cabecera y pie: #07111e (antes blanco translúcido con blur)
- Secciones oscuras (problemas, datos, recogida, youtube): #111 → #07111e,
  para mantener consistencia tonal con la nueva cabecera.
- --ink (color de texto general del cuerpo) se ha dejado en #111, sin tocar,
  ya que es el color de texto y no un fondo de marca.

Textos:
- Título H1 nuevo: "Tu portátil Lenovo tiene un problema. Nosotros nos
  encargamos de devolvértelo reparado, con tus archivos intactos y sin
  sorpresas."
- Title, meta description, og:title y og:description actualizados a
  LenovoRepair / Valladolid.
- "Atención en Madrid" → "Atención en Valladolid".
- Pie de página: "LenovoTech | ThinkCentre | Servicio Técnico Lenovo · Madrid"
  → "LenovoRepair · Servicio Técnico Lenovo · Valladolid".
- Título del asistente del chat: "Hola!" → "LenovoRepair".
- JSON-LD: name → "LenovoRepair | Servicio Técnico Lenovo",
  addressLocality/areaServed → "Valladolid".

Dirección:
No se ha proporcionado una dirección física en Valladolid. Se ha eliminado
la dirección de Madrid (C. Joaquín María López, 26) y el bloque de
referencia (Metro/aparcamiento), sustituyéndolos por una fila genérica:
"Zona de servicio: Valladolid capital y alrededores". No se ha inventado
ninguna dirección nueva.

Enlaces y teléfonos (mantenidos sin cambios, según instrucción del cliente):
- WhatsApp: https://api.whatsapp.com/send?phone=34649970128
- Teléfono: tel:+34918290656
- Recogida (Redsys): https://sis.redsys.es/tiendaWeb/item/NDk4OzI%3D
- Google Maps / reseñas: https://maps.app.goo.gl/jhFVft6AcvbF5AAf7
- YouTube: https://www.youtube.com/channel/UCaxAqLD9Mk5gvzqoDedlWSA
- iframe embed de Google Maps (src): SIN CAMBIOS. Sigue apuntando a la
  ubicación y ficha de Google Business de Madrid (coordenadas y nombre
  "LenovoTech | ThinkCentre"). Solo se ha actualizado el atributo "title"
  (texto cosmético) a "LenovoRepair Valladolid". Si se dispone de una ficha
  de Google Business real en Valladolid, sustituir el src del iframe y el
  enlace de reseñas más adelante.

Google Analytics:
Se ha eliminado por completo el bloque gtag.js (ID G-J5ECPSYT2D), ya que
pertenece a la propiedad de analítica de la web Madrid (thinkcentre.es) y
no debe seguir registrando tráfico de LenovoRepair. Pendiente: añadir un
nuevo ID de Google Analytics de Valladolid cuando el cliente lo facilite.

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
- El remitente del email de contacto (api/contacto.js) se ha actualizado a
  "LenovoRepair".

CHATBOT:
Se incluye la interfaz visual y las posiciones/z-index consolidadas:
ventana > botón del bot > WhatsApp. El webhook de n8n ya está configurado
(el mismo flujo compartido usado en el resto de las webs de la familia).
