// Example page translations for three locales: by (Russian), il (Hebrew), en (English)
export default {
  by: {
    "example.title": "Пример текста (BY)",
    "example.note":
      "Демонстрация поддоменного i18n: by → /primer, il → /primer, en → /primer",
  },
  il: {
    "example.title": "טקסט לדוגמה (IL)",
    "example.note":
      "הדגמת i18n לפי תת־דומיין: by → /primer, il → /primer, en → /primer",
  },
  en: {
    "example.title": "Example text (EN)",
    "example.note":
      "Subdomain i18n demo: by → /primer, il → /primer, en → /primer",
  },
} as const;
