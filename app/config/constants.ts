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

  // Group discounts by activity type
  groupDiscounts: {
    trekking: [
      { people: 1, discount: 0, label: "1 person" },
      { people: 2, discount: 5, label: "2 people" },
      { people: 3, discount: 10, label: "3-5 people", maxPeople: 5 },
      { people: 6, discount: 15, label: "6+ people" },
    ],
    surfing: [
      { people: 1, discount: 0, label: "1 person" },
      { people: 2, discount: 5, label: "2 people" },
      { people: 3, discount: 10, label: "3+ people" },
    ],
    paragliding: [
      { people: 1, discount: 0, label: "1 person" },
      { people: 2, discount: 5, label: "2+ people" },
    ],
    default: [
      { people: 1, discount: 0, label: "1 person" },
      { people: 2, discount: 5, label: "2 people" },
      { people: 3, discount: 10, label: "3+ people" },
    ],
  },
} as const;
