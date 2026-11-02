export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  checklistTitle: string;
  checklistItems: string[];
  sections: ArticleSection[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Добавление интерактивной карты на сайт: зачем это нужно, чего ожидать и как сделать правильно",
    lead: [
      "Интерактивная карта на сайте белорусского бизнеса помогает клиентам быстрее понять локацию, построить маршрут и повышает доверие.",
      "Это также поддерживает локальное SEO через поведенческие факторы и согласованность NAP (название, адрес, телефон).",
    ],
    checklistTitle: "Чек‑лист",
    checklistItems: [
      "Выберите тип интеграции: iframe, API или виджет CMS.",
      "Проверьте адрес/координаты, масштаб и мобильное отображение.",
      "Разместите карту рядом с контактами и добавьте кнопки маршрута.",
      "Синхронизируйте NAP с карточками в картах и каталогах.",
      "Отслеживайте изменения в поведении пользователей и конверсии.",
    ],
    sections: [
      {
        title: "Зачем добавлять интерактивную карту на сайт",
        blocks: [
          {
            title: "1. Доверие",
            body: "Карта даёт визуальное подтверждение адреса и позволяет в один клик открыть навигацию.",
          },
          {
            title: "2. Удобство",
            body: "Пользователь может открыть маршрут в Google Maps, Apple Maps или 2ГИС и быстрее принять решение.",
          },
          {
            title: "3. Локальное SEO",
            body: "Карта усиливает страницу через взаимодействие и согласованность NAP‑данных.",
          },
        ],
      },
      {
        title: "Чего ожидать",
        blocks: [
          {
            body: [
              "Больше звонков/заявок и визитов.",
              "Больше кликов по маршрутам.",
              "Выше доверие к компании.",
            ],
          },
        ],
      },
      {
        title: "Варианты внедрения",
        blocks: [
          {
            title: "1. Iframe‑встраивание",
            body: "Быстро: «Поделиться» → «Встроить». Минус - меньше гибкости и аналитики.",
          },
          {
            title: "2. API карт",
            body: "Google Maps JS API, Mapbox и решения на OpenStreetMap дают больше кастомизации и сценариев.",
          },
          {
            title: "3. Виджеты CMS",
            body: "В WordPress/Webflow и др. есть блоки карт - важно проверить координаты и мобильную верстку.",
          },
        ],
      },
      {
        title: "Типичные ошибки",
        blocks: [
          {
            body: [
              "Неверная точка/старый адрес.",
              "Карта спрятана и без кнопок маршрута.",
              "Несовпадение адреса на сайте и в карточках.",
              "Тяжёлые скрипты и медленная загрузка.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Повлияет ли карта на SEO напрямую?",
            body: "Скорее косвенно: через поведение пользователей и NAP‑согласованность. Основной эффект - удобство и конверсия.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Adding an interactive map to your website: why it matters and how to do it right",
    lead: [
      "For U.S. local businesses, an embedded map reduces friction and can increase calls and visits.",
      "It can also support local SEO indirectly via engagement and consistent NAP (name, address, phone).",
    ],
    checklistTitle: "Checklist",
    checklistItems: [
      "Pick an integration type: iframe, API, or CMS widget.",
      "Verify address/coordinates, zoom, and mobile layout.",
      "Place it near contact info and add direction buttons.",
      "Keep NAP consistent with your listings and directories.",
      "Measure impact on behavior and conversions.",
    ],
    sections: [
      {
        title: "Why add an interactive map",
        blocks: [
          {
            title: "1. Trust",
            body: "A map visually confirms your location and makes navigation one-click.",
          },
          {
            title: "2. Better UX",
            body: "Customers can quickly open directions in Google Maps or Apple Maps and reduce uncertainty.",
          },
          {
            title: "3. Local SEO support",
            body: "Indirect benefits come from engagement signals and NAP consistency.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "More calls/leads and in-person visits.",
              "More direction clicks.",
              "Higher perceived legitimacy.",
            ],
          },
        ],
      },
      {
        title: "Implementation options",
        blocks: [
          {
            title: "1. Iframe embed",
            body: "Fast: Share → Embed. Trade-off: limited customization and analytics.",
          },
          {
            title: "2. Map APIs",
            body: "Google Maps JS API, Mapbox, and OpenStreetMap tooling enable custom pins, multi-locations, and routing.",
          },
          {
            title: "3. CMS widgets",
            body: "WordPress/Webflow widgets are common-double-check coordinates and mobile behavior.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Wrong pin or outdated address.",
              "No clear ‘Get directions’ CTA.",
              "NAP mismatch between site and listings.",
              "Slow pages from heavy scripts.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Does a map directly improve SEO?",
            body: "Usually indirectly. The biggest upside is conversion and trust.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "הטמעת מפה אינטראקטיבית באתר: למה זה חשוב ואיך לעשות נכון",
    lead: [
      "מפה אינטראקטיבית באתר מקלה על לקוחות למצוא אתכם ומגדילה אמון.",
      "היא גם יכולה לתמוך בעקביות פרטי העסק (שם/כתובת/טלפון) ובמעורבות בדף.",
    ],
    checklistTitle: "צ׳ק־ליסט",
    checklistItems: [
      "לבחור סוג הטמעה: iframe, API או וידג׳ט CMS.",
      "לוודא כתובת/קואורדינטות, זום ותצוגה במובייל.",
      "למקם ליד יצירת קשר ולהוסיף כפתורי ניווט.",
      "לשמור עקביות NAP מול כרטיסים וספריות.",
      "לעקוב אחרי השפעה על המרות.",
    ],
    sections: [
      {
        title: "למה להוסיף מפה",
        blocks: [
          {
            title: "1. אמון",
            body: "מפה מאשרת ויזואלית את המיקום ומאפשרת ניווט בלחיצה.",
          },
          {
            title: "2. חוויית משתמש",
            body: "אפשר לפתוח ניווט ב‑Google Maps או Apple Maps מהר ובקלות.",
          },
          {
            title: "3. תמיכה ב‑SEO מקומי",
            body: "לרוב בעקיפין דרך עקביות ונתונים ומעורבות.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: [
              "נקודה לא נכונה או כתובת ישנה.",
              "אין כפתור ניווט ברור.",
              "חוסר עקביות בפרטי העסק.",
              "דף כבד ואיטי.",
            ],
          },
        ],
      },
    ],
  },
};

export default content;
