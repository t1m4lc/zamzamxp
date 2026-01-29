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
        "/blog/annapurna-circuit-trek-complete-guide-2026",
        "/blog/top-5-trekking-destinations-nepal",
        "/blog/everest-base-camp-trek-complete-guide-2026",
        "/blog/langtang-valley-trek-beginner-guide",
        "/blog/annapurna-vs-everest-base-camp-comparison",
        "/blog/what-to-pack-trekking-nepal-checklist",
        "/blog/best-time-trek-nepal-month-guide",
        "/blog/nepal-trekking-permits-explained-guide",
        "/blog/paragliding-pokhara-ultimate-guide",
        "/blog/first-time-morocco-complete-guide",
        "/blog/sidi-kaouki-vs-essaouira-surf-comparison",
        "/blog/manaslu-circuit-trek-complete-guide",
        "/blog/altitude-sickness-prevention-treatment-guide",
        "/blog/why-trek-local-guide-nepal",
        // French (fr)
        "/blog/surf-essaouira-guide-complet",
        "/blog/guide-complet-2026-trek-tours-des-annapurnas",
        "/blog/top-5-destinations-randonnee-nepal",
        "/blog/guide-complet-2026-trek-camp-base-everest",
        "/blog/trek-vallee-langtang-guide-debutants",
        "/blog/annapurna-vs-camp-base-everest-comparaison",
        "/blog/que-mettre-sac-trekking-nepal-liste",
        "/blog/meilleure-periode-trek-nepal-guide-mensuel",
        "/blog/permis-trekking-nepal-guide-complet",
        "/blog/parapente-pokhara-guide-ultime",
        "/blog/premiere-fois-maroc-guide-complet",
        "/blog/sidi-kaouki-vs-essaouira-comparatif-surf",
        "/blog/trek-circuit-manaslu-guide-complet",
        "/blog/mal-altitude-prevention-traitement-guide",
        "/blog/pourquoi-trek-guide-local-nepal",
        // Spanish (es)
        "/blog/guia-surf-essaouira-completa",
        "/blog/guia-completa-2026-trek-circuito-annapurnas",
        "/blog/top-5-destinos-senderismo-nepal",
        "/blog/guia-completa-2026-trek-campo-base-everest",
        "/blog/trek-valle-langtang-guia-principiantes",
        "/blog/annapurna-vs-campo-base-everest-comparacion",
        "/blog/que-llevar-trekking-nepal-lista-completa",
        "/blog/mejor-epoca-trekking-nepal-guia-mensual",
        "/blog/permisos-trekking-nepal-guia-completa",
        "/blog/parapente-pokhara-guia-definitiva",
        "/blog/primera-vez-marruecos-guia-completa",
        "/blog/sidi-kaouki-vs-essaouira-comparativa-surf",
        "/blog/trek-circuito-manaslu-guia-completa",
        "/blog/mal-altura-prevencion-tratamiento-guia",
        "/blog/por-que-trek-guia-local-nepal",
        // Dutch (nl)
        "/blog/surfen-essaouira-complete-gids",
        "/blog/annapurna-circuit-trek-complete-gids-2026",
        "/blog/top-5-trekking-bestemmingen-nepal",
        "/blog/everest-base-camp-trek-complete-gids-2026",
        "/blog/langtang-valley-trek-beginners-gids",
        "/blog/annapurna-vs-everest-base-camp-vergelijking",
        "/blog/wat-meenemen-trekking-nepal-paklijst",
        "/blog/beste-tijd-trekken-nepal-maand-gids",
        "/blog/nepal-trekking-vergunningen-uitgelegd-gids",
        "/blog/paragliding-pokhara-ultieme-gids",
        "/blog/eerste-keer-marokko-complete-gids",
        "/blog/sidi-kaouki-vs-essaouira-surf-vergelijking",
        "/blog/manaslu-circuit-trek-complete-gids",
        "/blog/hoogteziekte-preventie-behandeling-gids",
        "/blog/waarom-trekken-lokale-gids-nepal",
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
