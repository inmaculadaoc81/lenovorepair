// Datos públicos de la web usados por el SEO (metadatos, sitemap, datos estructurados).
// Solo contiene lo que ya aparece publicado en la propia web.

export const SITE_URL = "https://chipfix.es";
export const SITE_NAME = "ChipFix";
export const SITE_TITLE = "ChipFix | Automatización de procesos con n8n e IA";
export const SITE_DESCRIPTION = "ChipFix diseña e implementa automatizaciones con n8n e inteligencia artificial para empresas: menos tareas repetitivas, más tiempo para vender.";

export const BUSINESS = {
  name: SITE_NAME,
  url: SITE_URL,
  email: "soporte@automatizacionesn8n.com",
  telephone: "+34606806376",
  address: {
    streetAddress: "Calle Blasco de Garay 63",
    addressLocality: "Madrid",
    addressRegion: "Madrid",
    addressCountry: "ES",
  },
} as const;

/** URL absoluta a partir de una ruta relativa. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
