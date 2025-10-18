// Application Constants
export const APP_CONFIG = {
  company: {
    name: "Zamzam Experience",
    email: "timothyalcaide+zamzamxp@gmail.com",
    whatsapp: "+33767503066",
    bookingFormUrl: "https://tally.so/r/mBP6K5",
  },

  smtp: {
    host: "webhost.dynadot.com",
    port: 587,
    user: "hello@updates.zamzamxp.com",
  },

  contact: {
    responseTime: "Within 24 hours",
    location: "Montpellier, France",
    languages: "English & French",
  },

  // Group discounts by activity type
  groupDiscounts: {
    trekking: [
      {
        people: 1,
        discount: 0,
        label: "Private (1 person)",
        isPrivate: true,
      },
      {
        people: 2,
        discount: 0,
        label: "2 people",
        isPrivate: false,
      },
      { people: 3, discount: 5, label: "3 people", isPrivate: false },
      { people: 4, discount: 10, label: "4+ people", isPrivate: false },
    ],
    surfing: [
      { people: 1, discount: 0, label: "1 person", isPrivate: false },
      { people: 2, discount: 5, label: "2 people", isPrivate: false },
      { people: 3, discount: 10, label: "3+ people", isPrivate: false },
    ],
    paragliding: [
      { people: 1, discount: 0, label: "1 person", isPrivate: false },
      { people: 2, discount: 5, label: "2+ people", isPrivate: false },
    ],
    default: [
      { people: 1, discount: 0, label: "1 person", isPrivate: false },
      { people: 2, discount: 5, label: "2 people", isPrivate: false },
      { people: 3, discount: 10, label: "3+ people", isPrivate: false },
    ],
  },
} as const;
