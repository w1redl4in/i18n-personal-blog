module.exports = {
    "locales": ["pt", "en", "es"],
    "defaultLocale": ["pt"],
    "pages": {
        "*": ["common"]
      },
      "loadLocaleFrom": (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
}