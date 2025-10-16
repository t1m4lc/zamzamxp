export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.$i18n as any;

  if (!i18n) return;

  // Restore locale from localStorage on app load
  if (import.meta.client) {
    const savedLocale = localStorage.getItem("user-locale");
    if (savedLocale && ["en", "fr", "nl"].includes(savedLocale)) {
      i18n.locale.value = savedLocale;
    }
  }

  // Watch for locale changes and persist to localStorage
  watch(
    () => i18n.locale.value,
    (newLocale) => {
      if (import.meta.client) {
        document.documentElement.setAttribute("lang", newLocale);
        localStorage.setItem("user-locale", newLocale);

        // Update content-language meta tag for SEO
        let metaTag = document.querySelector(
          'meta[http-equiv="content-language"]'
        );
        if (!metaTag) {
          metaTag = document.createElement("meta");
          metaTag.setAttribute("http-equiv", "content-language");
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute("content", newLocale);
      }
    },
    { immediate: true }
  );
});
