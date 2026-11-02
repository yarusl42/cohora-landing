export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type HowToStepContent = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  sections: ArticleSection[];
  checklistTitle: string;
  howToStorageKey: string;
  steps: readonly HowToStepContent[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Повышение количества отзывов в Яндекс: зачем это нужно, чего ожидать и как это делать правильно",
    lead: [
      "Отзывы в Яндексе - ключевой фактор доверия, конверсии и локальной видимости на Яндекс.Картах и в Поиске. Для Беларуси и соседних рынков это часто критичная площадка.",
      "Ниже - почему важно активно собирать отзывы, каких результатов ждать и как построить надёжную стратегию.",
    ],
    sections: [
      {
        title: "Зачем повышать количество отзывов",
        blocks: [
          {
            title: "1. Рост доверия к бизнесу",
            body: "Больше свежих отзывов - выше доверие и ощущение стабильности. Компания с 200 отзывами и рейтингом 4.6 выглядит надёжнее, чем 5.0 с 8 отзывами.",
          },
          {
            title: "2. Повышение позиций на Яндекс.Картах",
            body: "Яндекс учитывает частоту, количество и качество отзывов, реакцию владельца и смысл текста. «Живая» карточка чаще попадает в ТОП по локальным запросам.",
          },
          {
            title: "3. Улучшение конверсии",
            body: "Пользователь быстрее принимает решение, если видит много свежих содержательных отзывов и ответы владельца.",
          },
          {
            title: "4. Защита рейтинга",
            body: "Единичный негатив сильнее бьёт по маленькой выборке, но почти не влияет на большой массив отзывов.",
          },
          {
            title: "5. Обратная связь для сервиса",
            body: "Чем больше отзывов, тем лучше видно, что нравится клиентам и где повторяются проблемы. Это помогает приоритизировать улучшения.",
          },
        ],
      },
      {
        title: "Чего ожидать после роста количества отзывов",
        blocks: [
          {
            body: [
              "Более стабильного и объективного рейтинга.",
              "Больше показов карточки и выходов в ТОП по локальным запросам.",
              "Рост кликов «Позвонить», «Маршрут», «Запись», «Сайт».",
              "Рост продаж за счёт social proof.",
              "Появление некоторой доли негатива - это нормально при росте объёма.",
            ],
          },
        ],
      },
      {
        title: "Эффективные методы получения отзывов",
        blocks: [
          {
            title: "1. Личная просьба после услуги",
            body: "Самый результативный подход: искренне, без давления, с коротким объяснением важности отзыва. Дайте ссылку на форму Яндекса.",
          },
          {
            title: "2. Короткая ссылка и QR‑код",
            body: "Сгенерируйте короткий URL на форму отзыва и разместите QR‑код на стойке, в чеке и на визитках. Важно вести сразу к форме.",
          },
          {
            title: "3. SMS‑напоминание",
            body: "SMS обычно читают лучше всего. Часто хорошо работает сообщение через 10–60 минут после визита.",
          },
          {
            title: "4. Email‑напоминание",
            body: "Для CRM базы можно отправлять в тот же вечер или на следующий день. Ненавязчивый тон и понятная кнопка важнее «красивого маркетинга».",
          },
          {
            title: "5. Пост‑сервисные точки",
            body: "Карточки «Оцените нас» с QR‑кодом в зоне выхода/на документах - простая и эффективная механика.",
          },
          {
            title: "6. Страница «Оставить отзыв» на сайте",
            body: "Сделайте страницу с кнопкой «Оставить отзыв в Яндекс» и отслеживайте переходы по UTM.",
          },
        ],
      },
      {
        title: "Чего нельзя делать",
        blocks: [
          {
            body: [
              "Покупать/стимулировать отзывы - нарушение правил и удар по доверию.",
              "Публиковать отзывы «от себя» - риски санкций и удалений.",
              "Просить отзыв до оказания услуги.",
              "Спамить напоминаниями и игнорировать отписку.",
            ],
          },
        ],
      },
      {
        title: "Стратегия на долгую дистанцию",
        blocks: [
          {
            body: [
              "Определите точки запроса отзыва (на кассе/после визита/в сообщениях).",
              "Создайте короткую ссылку и QR‑код на форму Яндекса.",
              "Подготовьте скрипты (личная просьба, SMS, Email) и дизайн носителей.",
              "Запустите тайминги и лимиты касаний.",
              "Назначьте ответственных за ответы владельца и мониторинг.",
              "Отслеживайте переходы, долю оставивших, рейтинг и тональность.",
              "Ежемесячно корректируйте сценарии по данным.",
            ],
          },
        ],
      },
      {
        title: "Комбо с другими практиками",
        blocks: [
          {
            body: [
              "Ответы на отзывы: выше конверсия и лояльность.",
              "Q&A и онлайн‑запись: удобство карточки → больше действий.",
              "Фото/категории/услуги: релевантность и доверие выше.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Когда ждать эффект?",
            body: "Первые сдвиги часто видны за 2–4 недели. Устойчивый результат - 1–3 месяца при регулярной работе.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [
          {
            body: "",
          },
        ],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleYandexReviewsChecklist",
    steps: [
      {
        id: "yandex-reviews-checklist",
        title: "",
        description: "",
        items: [
          "Сделайте короткую ссылку/QR на форму Яндекс‑отзыва.",
          "Просите лично + отправляйте SMS/Email с корректным таймингом.",
          "Не стимулируйте материально; соблюдайте правила.",
          "Отвечайте на отзывы и анализируйте тональности.",
          "Поддерживайте карточку фото/услугами/Q&A/записью - это усиливает конверсию.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Getting more reviews on Google (and key U.S. platforms): why it matters and how to do it right",
    lead: [
      "In the U.S., Google reviews are one of the strongest trust and conversion drivers for local businesses. Depending on your category, platforms like Yelp can also matter a lot.",
      "Below is a practical system to grow review volume ethically, improve conversion, and protect your rating.",
    ],
    sections: [
      {
        title: "Why more reviews help",
        blocks: [
          {
            title: "1. Higher trust",
            body: "Fresh review volume signals consistency. A business with 200 reviews at 4.6 often looks more trustworthy than a perfect 5.0 with 8 reviews.",
          },
          {
            title: "2. Better local visibility",
            body: "Review volume, recency, and owner replies are key engagement signals in Google Business Profile.",
          },
          {
            title: "3. Higher conversion",
            body: "More real feedback reduces hesitation and increases calls, direction requests, and bookings.",
          },
          {
            title: "4. Rating resilience",
            body: "A larger review base reduces the impact of isolated negative reviews.",
          },
          {
            title: "5. Service feedback",
            body: "Reviews help you spot recurring issues and prioritize fixes.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "A more stable rating.",
              "More Google profile actions (calls, clicks, directions).",
              "More bookings and leads from local search.",
              "Some negative feedback will appear-handle it professionally.",
            ],
          },
        ],
      },
      {
        title: "Methods that work (ethically)",
        blocks: [
          {
            title: "1. Ask in person right after service",
            body: "A polite ask with a clear reason is the highest-converting channel.",
          },
          {
            title: "2. Use a short link + QR code",
            body: "Create a branded short URL to your review hub page and place a QR code at checkout and on receipts.",
          },
          {
            title: "3. Text follow-ups",
            body: "Texts often convert best. Send within 10–60 minutes or later the same day depending on your customer journey.",
          },
          {
            title: "4. Email follow-ups",
            body: "Email can work well for CRM lists. Keep it short and include one clear button.",
          },
          {
            title: "5. A “Leave a review” page on your site",
            body: "Add a page that links to Google and other key platforms (for example Yelp, depending on your industry).",
          },
        ],
      },
      {
        title: "What not to do",
        blocks: [
          {
            body: [
              "Don’t offer incentives (gift cards, discounts) for reviews.",
              "Don’t write reviews for yourself.",
              "Don’t spam reminders-respect opt-outs.",
              "Don’t ask before service is delivered.",
            ],
          },
        ],
      },
      {
        title: "Long-term system",
        blocks: [
          {
            body: [
              "Define when to ask (checkout, after appointment, post-delivery).",
              "Build a review hub link (Google + any important industry platform).",
              "Create staff scripts and message templates.",
              "Set timing rules and touch limits.",
              "Assign ownership for monitoring and replies.",
              "Track clicks, review conversion, rating, and sentiment.",
              "Iterate monthly based on data.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "When will you see impact?",
            body: "Early movement often shows in 2–4 weeks. More stable results typically take 1–3 months.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [
          {
            body: "",
          },
        ],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleYandexReviewsChecklist",
    steps: [
      {
        id: "yandex-reviews-checklist",
        title: "",
        description: "",
        items: [
          "Create a branded short link/QR code for reviews.",
          "Ask in person + send text/email follow-ups with good timing.",
          "Never offer incentives; follow platform rules.",
          "Reply to reviews and track themes.",
          "Keep your profile strong with photos, services, Q&A, and booking.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "איך להגדיל ביקורות ב‑Google לעסק מקומי: למה זה חשוב ואיך עושים נכון",
    lead: [
      "בישראל, ביקורות ב‑Google הן גורם אמון מרכזי לעסקים מקומיים ומשפיעות על החלטת לקוח ועל כמות פניות.",
      "להלן תהליך פרקטי לבניית זרימת ביקורות בצורה אתית, ולשיפור המרה.",
    ],
    sections: [
      {
        title: "למה יותר ביקורות עוזרות",
        blocks: [
          {
            title: "1. יותר אמון",
            body: "כמות ביקורות עדכניות משדרת יציבות. דירוג טוב עם הרבה ביקורות נתפס חזק יותר ממעט ביקורות מושלמות.",
          },
          {
            title: "2. נראות מקומית",
            body: "Google מתחשבת בכמות, טריות ותגובות של העסק כביטוי למעורבות.",
          },
          {
            title: "3. יותר פניות",
            body: "יותר ביקורות אמיתיות מפחיתות ספק ומגדילות שיחות/הודעות/הזמנות.",
          },
        ],
      },
      {
        title: "מה לא לעשות",
        blocks: [
          {
            body: [
              "לא לתת תמריצים עבור ביקורות.",
              "לא לכתוב ביקורות לעצמכם.",
              "לא להציף בתזכורות ולכבד opt-out.",
            ],
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [
          {
            body: "",
          },
        ],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleYandexReviewsChecklist",
    steps: [
      {
        id: "yandex-reviews-checklist",
        title: "",
        description: "",
        items: [
          "ליצור לינק ממותג/QR לביקורות.",
          "לבקש פנים‑אל‑פנים + לשלוח SMS/אימייל בתזמון נכון.",
          "לא לתת תמריצים; לשמור על הכללים.",
          "להגיב לביקורות ולנתח נושאים.",
          "לחזק את הכרטיס עם תמונות, שירותים, Q&A ואפשרויות יצירת קשר.",
        ],
      },
    ],
  },
};

export default content;
