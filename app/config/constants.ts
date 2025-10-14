// Application Constants
export const APP_CONFIG = {
  company: {
    name: "Zamzam Experience",
    email: "hello@zamzamxp.com",
    whatsapp: "+33767503066",
  },

  smtp: {
    host: "webhost.dynadot.com",
    port: 587,
    user: "hello@zamzamxp.com",
  },

  contact: {
    responseTime: "Within 24 hours",
    location: "Montpellier, France",
    languages: "English & French",
  },
} as const;
