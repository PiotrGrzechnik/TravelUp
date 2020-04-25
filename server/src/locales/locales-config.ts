const i18nextConfig = {
  debug: false,
  backend: {
    loadPath: "src/locales/translations/{{lng}}.json",
  },
  fallbackLng: "en",
  preload: ["en", "es"],
  saveMissing: true,
};

export { i18nextConfig };
