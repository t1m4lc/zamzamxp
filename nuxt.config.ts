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
      routes: ["/sitemap.xml"],
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
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
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
        disallow: ["/api/contact"],
      },
    ],
  },

  sitemap: {
    enabled: true,
    xsl: false,
    autoLastmod: true,
    discoverImages: false,
    sources: ["/api/__sitemap__/urls"],
    urls: async () => [
      { loc: "/", changefreq: "weekly", priority: 1.0 },
      { loc: "/about", changefreq: "monthly", priority: 0.8 },
      { loc: "/contact", changefreq: "monthly", priority: 0.8 },
      { loc: "/destinations", changefreq: "weekly", priority: 0.9 },
      { loc: "/terms", changefreq: "yearly", priority: 0.3 },
      { loc: "/privacy", changefreq: "yearly", priority: 0.3 },
    ],
    exclude: [
      "/api/**",
      "/_vercel/**",
      "/__og-image__/**",
      "/images/**",
      "/**/*.{png,jpg,jpeg,gif,webp,svg,ico}",
      "/**/_payload.json",
    ],
    defaults: {
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
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
    resendApiKey: process.env.RESEND_API_KEY,
  },

  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: "G-DB0652H3G7",
  },

  i18n: {
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      { code: "en", name: "English", file: "en.json", flag: "🇬🇧" },
      { code: "nl", name: "Nederlands", file: "nl.json", flag: "🇳🇱" },
      { code: "fr", name: "Français", file: "fr.json", flag: "🇫🇷" },
    ],
  },
});
