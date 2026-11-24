

BLOG (/blog):
- Los artículos NO viven en este repositorio: los genera y publica el agente
  SEO de Kelatos (Agentes V2 → organización «LenovoRepair Valladolid», clave
  lenovorepair; la organización «servicio_tecnico_lenovo» es la de thinkcentre.es)
  y se leen en vivo de la API pública de Kelatos, sin token:
  https://db.affirmatechnology.com/kelatos-api/publico/blog?org=lenovorepair
- api/blog.js + lib/blog.js generan /blog y /blog/<slug> en el servidor
  (copian de index.html los estilos, la cabecera con su menú móvil, el pie y el banner de cookies).
- api/sitemap.js genera /sitemap.xml (se eliminó el sitemap.xml estático).
- Estilos propios del blog en assets/blog.css. Enlace «Blog» en el menú
  (escritorio y móvil) y en el pie. La redirección general a la home excluye /blog.
