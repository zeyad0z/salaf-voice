// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Almarai: [300, 400, 700, 800],
    },
    display: "swap",
  },
  ui: {
    theme: {
      default: "light", // make light mode default
    },
  },
});
