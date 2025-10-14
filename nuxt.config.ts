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
  ],

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
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    // Private keys - only available server-side
    smtpPass: process.env.SMTP_PASS,
  },
});
