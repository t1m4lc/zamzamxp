// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: false },

  ssr: true,

  experimental: {
    componentIslands: true,
    viewTransition: true,
  },

  nitro: {
    preset: "vercel-static",
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        "/sitemap.xml",
        "/robots.txt",
        "/",
        "/about",
        "/contact",
        "/destinations",
        "/blog",
        "/terms",
        "/privacy",
        "/thanks",
        "/llms.txt",
        // Blog posts - all locales (each locale has its own slug)
        // English (en)
        "/blog/surfing-essaouira-complete-guide",
        "/blog/annapurna-circuit-trek-complete-guide-2025",
        "/blog/top-5-trekking-destinations-nepal",
        // French (fr)
        "/blog/surf-essaouira-guide-complet",
        "/blog/guide-complet-2025-trek-tours-des-annapurnas",
        "/blog/top-5-destinations-randonnee-nepal",
        // Spanish (es)
        "/blog/guia-surf-essaouira-completa",
        "/blog/guia-completa-2025-trek-circuito-annapurnas",
        "/blog/top-5-destinos-senderismo-nepal",
        // Dutch (nl)
        "/blog/surfen-essaouira-complete-gids",
        "/blog/annapurna-circuit-trek-complete-gids-2025",
        "/blog/top-5-trekking-bestemmingen-nepal",
      ],
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
    indexable: true,
    trailingSlash: false,
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
        email: "timothyalcaide+zamzamxp@gmail.com",
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
        disallow: ["/api/", "/_nuxt/", "/_vercel/", "/__og-image__/"],
      },
      {
        userAgent: ["Bingbot", "msnbot", "BingPreview"],
        allow: ["/"],
        disallow: ["/api/", "/_nuxt/", "/_vercel/", "/__og-image__/"],
      },
    ],
    sitemap: ["https://zamzamxp.com/sitemap.xml"],
  },

  sitemap: {
    enabled: true,
    xsl: false,
    autoLastmod: true,
    discoverImages: true,
    strictNuxtContentPaths: true,
    // Use multiple sources for better organization
    sources: [
      "/api/__sitemap__/activities",
      "/api/__sitemap__/blog",
      "/api/__sitemap__/countries",
    ],
    exclude: [
      "/api/**",
      "/_vercel/**",
      "/__og-image__/**",
      "/images/**",
      "/_nuxt/**",
      "/**/*.{png,jpg,jpeg,gif,webp,svg,ico,wasm,js,css,json}",
      "/**/_payload.json",
    ],
    defaults: {
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    // Static pages - canonical URLs only (no locale prefixes with no_prefix strategy)
    urls: [
      {
        loc: "/",
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 1.0,
      },
      {
        loc: "/about",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/contact",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/destinations",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.9,
      },
      {
        loc: "/terms",
        lastmod: new Date().toISOString(),
        changefreq: "yearly",
        priority: 0.3,
      },
      {
        loc: "/privacy",
        lastmod: new Date().toISOString(),
        changefreq: "yearly",
        priority: 0.3,
      },
    ],
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
    presets: {
      hero: {
        modifiers: {
          format: "webp",
          quality: 90,
          width: 1920,
          height: 1080,
        },
      },
      card: {
        modifiers: {
          format: "webp",
          quality: 80,
          width: 800,
          height: 600,
        },
      },
      avatar: {
        modifiers: {
          format: "webp",
          quality: 85,
          width: 400,
          height: 400,
        },
      },
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
      redirectOn: "no prefix",
    },
    locales: [
      { code: "en", name: "English", file: "en.json", flag: "🇬🇧" },
      { code: "nl", name: "Nederlands", file: "nl.json", flag: "🇳🇱" },
      { code: "fr", name: "Français", file: "fr.json", flag: "🇫🇷" },
      { code: "es", name: "Español", file: "es.json", flag: "🇪🇸" },
    ],
  },
});
