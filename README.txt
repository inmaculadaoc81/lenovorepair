LENOVOREPAIR — DESPLIEGUE EN VERCEL

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 4/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola LenovoRepair!" en el CTA del hero y en el botón
  flotante.
- BUG REAL — mismo bug que en el repo hermano LenovoTech (comparten
  plantilla): el menú móvil (#mobileMenu) no tenía ningún listener
  que lo cerrara al pulsar un enlace. Añadido el mismo script.
- Verificado: los dos iconos con width/height fijos en el hero son
  cuadrados en proporción, sin deformación.
- Verificado: el H1 en móvil ya está en 48px.
- BUG REAL — mismo bug que en LenovoTech: botones del hero (.cta) con
  border-radius de 15px y sin oscurecimiento en hover. Aumentado a
  border-radius:999px; añadido filter:brightness(.88) en
  whatsapp/pickup y fondo #07111e sólido en el botón de teléfono al
  pasar el ratón (el mismo tono oscuro de cabecera/footer de esta
  marca), conservando el efecto de elevación ya existente.

Rebrand a partir de la plantilla "LenovoTech ThinkCentre" (Madrid), adaptada a la
marca LenovoRepair (Valladolid) según instrucción del cliente.

Dominio:
https://chipfix.es/
(CONFIRMADO por el cliente. Corregido en canonical, og:url y JSON-LD —
antes apuntaban a thinkcentre.es, el dominio de la plantilla de origen,
LenovoTech Madrid. Este repositorio no tiene robots.txt ni sitemap.xml
propios, así que no hay más archivos que actualizar.)

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
G-GJ0SK2QYSW (código nuevo y propio de LenovoRepair Valladolid,
proporcionado por el cliente; no reutiliza el de la web de Madrid).

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
Ya en español y con el borde blanco estándar del botón; no requerían
cambios.

HISTORIAL: el repositorio era multipágina (15 páginas /modelos/ de
series Lenovo y varias páginas /servicios/) y se convirtió a one-page;
esas páginas fueron eliminadas en commits anteriores. Como ya no
existen en el sitemap actual, se ha añadido middleware.mjs para
redirigir (301) cualquier URL antigua a la home, evitando 404 en
enlaces indexados o backlinks antiguos. Excluye /api/* y cualquier
ruta con extensión de archivo. Se añadió "@vercel/functions": "^2.0.3"
a package.json como dependencia de esta función.

REVISIÓN ADICIONAL (esta pasada):
- H1 reescrito, corto, directo y totalmente afirmativo (sin
  interrogación ni condicionales, incluye la marca) — el anterior
  tenía 18 palabras: "Tu Lenovo no funciona. Cuidamos tus archivos y
  lo reparamos." En su momento NO se aumentó el tamaño de fuente por
  la decisión previa documentada de reducirlo un 50% (commits
  "Reducir tamaño del H1 un 50%" y "ajusta tamaño del H1").

REVISIÓN ADICIONAL (a petición del cliente — el título se veía
demasiado pequeño en móvil y escritorio):
- H1 aumentado al estándar de la familia: clamp(25-41px) →
  clamp(46-74px) en escritorio, 26px → 48px en móvil (≤600px). Esto
  sustituye la reducción del 50% aplicada anteriormente.
- .phone-pill: el texto largo ("Atención Telefónica 24 horas 365
  días") deformaba la píldora del menú. Acortado a solo el número
  (mismo número, +34 918 29 06 56, sin cambios) y añadido
  white-space:nowrap como salvaguarda. El botón grande .cta.phone del
  hero conserva su texto completo.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "no funciona" usada en varios repos.
  Reescrito con síntoma específico y distinto del de LenovoTech
  (repo hermano de Madrid): "Tu Lenovo no carga o va muy lento. Lo
  arreglamos." (10 palabras).
- BUG REAL — dos textos decorativos gigantes sin reducción de tamaño
  en móvil/tablet: ".problems:after" ("LENOVO", 180px) y
  ".data-art:before" ("DATOS", 115px), mismo bug ya corregido en
  LenovoTech (este repo comparte plantilla). Añadida reducción en
  tablet (100px/75px) y móvil (56px/46px). El de "LENOVOREPAIR" ya se
  ocultaba en móvil, no se ha tocado.
- BUG REAL — ninguno de los dos botones CTA del hero (WhatsApp ni
  teléfono) tenía icono. Añadidos ambos (verificado con cuidado el
  cierre de las etiquetas </a>).
- BUG REAL — el formulario no tenía ninguna casilla de consentimiento
  de política de privacidad. Añadida, con enlace a
  https://kelatos.com/privacy-policy/ en azul y subrayado.
- Añadida franja de aviso de servicio técnico independiente debajo
  del menú (no existía).
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Verificado: schema.org ya usaba correctamente el teléfono de la
  caja de información; formulario correctamente conectado a
  /api/contacto.
