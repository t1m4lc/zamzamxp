// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: false },

  ssr: true,

  nitro: {
    preset: "vercel-static",
    prerender: {
      failOnError: false,
    },
  },

  modules: [
    "shadcn-nuxt",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "motion-v/nuxt",
    "nuxt-gtag",
    "@nuxtjs/seo",
  ],

  icon: {
    serverBundle: {
      collections: ["lucide"], // Using lucide-vue-next directly, no iconify collections needed
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://zamzamxp.com",
    name: "Zamzam Experience",
    description:
      "Discover authentic adventure experiences with passionate local guides. Fair prices, sustainable tourism. Explore trekking, paragliding, and more with Zamzam Experience.",
    defaultLocale: "en",
  },

  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Zamzam Experience",
      url: "https://zamzamxp.com",
      logo: "https://zamzamxp.com/logo.png",
      sameAs: [
        // Add your social media profiles here when available
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33767503066",
        contactType: "Customer Service",
        email: "hello@zamzamxp.com",
        availableLanguage: ["English", "French"],
      },
    },
  },

  robots: {
    // Allow all by default, but can be configured per environment
    groups: [
      {
        userAgent: ["*"],
        allow: ["/"],
        disallow: ["/api/"],
      },
    ],
  },

  sitemap: {
    strictNuxtContentPaths: true,
    // Automatically generate sitemap from routes and content
  },

  ogImage: {
    enabled: true,
    // Will use default OG images from public folder if available
    fonts: ["Inter:400", "Inter:700"],
  },

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  css: ["~/assets/css/tailwind.css"],

  image: {
    provider: "vercel",
    quality: 85,
    format: ["webp", "jpg"],
    screens: {
      xxs: 10,
      xs: 160,
      sm: 320,
      md: 640,
      lg: 768,
      xl: 1024,
      xxl: 1280,
      xxxl: 1536,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["lucide-vue-next"],
    },
  },

  runtimeConfig: {
    // Private keys - only available server-side
    smtpPass: process.env.SMTP_PASS,
  },

  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: "G-DB0652H3G7",
  },
});
