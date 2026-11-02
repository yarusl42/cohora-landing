export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type HowToStep = {
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
  checklist: {
    storageKey: string;
    title: string;
    steps: readonly HowToStep[];
  };
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Локальное SEO для стоматологий: зачем это нужно, чего ожидать и как правильно делать",
    lead: [
      "Локальное SEO для стоматологий - один из самых мощных способов привлечения пациентов в конкретном городе или районе.",
      "Люди ищут стоматологов рядом с собой, ориентируясь на карты, отзывы и локальный поиск. Задача клиники - быть заметной в этой выдаче и вызывать доверие.",
    ],
    sections: [
      {
        title: "Зачем стоматологии нужно локальное SEO",
        blocks: [
          {
            title: "1. Пациенты ищут услуги рядом",
            body: "Запросы «стоматология рядом», «зубной врач возле меня», «чистка зубов Минск» формируют локальную выдачу. Если клиника не представлена в картах и локальном поиске, пациенты уходят к конкурентам.",
          },
          {
            title: "2. Поток клиентов без постоянной рекламы",
            body: "Контекстная реклама дорожает, а локальное SEO работает круглосуточно и даёт органический трафик. Хорошо настроенная стратегия снижает зависимость от платных каналов и формирует стабильный поток пациентов.",
          },
          {
            title: "3. Повышение доверия к клинике",
            body: "Для пациента важно видеть, что клиника реальная, с отзывами, понятным списком услуг и удобным расположением. Локальное SEO помогает выстроить это представление - от карточки в картах до сайта.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO для стоматологии",
        blocks: [
          {
            body: [
              "Рост позиций по локальным запросам («стоматология + город», «детская стоматология + район», «имплантация зубов + город»).",
              "Увеличение кликов в картах, просмотров маршрута и переходов на сайт.",
              "Больше звонков и онлайн‑записей на приём.",
              "Естественный рост количества отзывов и упоминаний клиники.",
              "Укрепление бренда и доверия у пациентов.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая локальная SEO‑стратегия для стоматологий",
        blocks: [
          {
            title: "Шаг 1. Карточки в картах (Google Maps, Яндекс Карты)",
            body: "Создайте и оптимизируйте карточки: название (бренд + услуга + город), точный адрес, часы работы, телефоны, ссылки на сайт и соцсети, фотографии клиники, кабинетов, персонала и оборудования, список услуг и категории.",
          },
          {
            title: "Шаг 2. Работа с отзывами",
            body: "Для стоматологий отзывы - критически важны. Используйте QR‑коды, сообщения после приёма и персональные просьбы, чтобы собирать честные отзывы. Отвечайте на все комментарии - особенно на негативные - вежливо и по сути.",
          },
          {
            title: "Шаг 3. Оптимизация сайта под локальные запросы",
            body: "Сайт должен быть быстрым, безопасным и удобным. Для каждой ключевой услуги (терапия, ортодонтия, имплантация, детская стоматология и т.д.) создаются отдельные страницы с описанием, показаниями, ценами, фотографиями и FAQ.",
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для стоматологий",
        blocks: [
          {
            title: "Когда появятся результаты?",
            body: "Первые сдвиги по позициям и количеству обращений обычно заметны через 1–2 месяца, устойчивый рост - в течение 3–6 месяцев при регулярной работе с сайтом, карточками и отзывами.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoDentalChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "local-seo-dental-checklist",
          title: "",
          description: "",
          items: [
            "Создайте и полностью заполните карточки клиники в картах.",
            "Настройте системный сбор отзывов и отвечайте на них.",
            "Оптимизируйте сайт под локальные ключевые запросы и услуги.",
            "Отслеживайте звонки, записи и позиции по локальным запросам.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for dental clinics: why it matters, what to expect, and how to do it right",
    lead: [
      "Local SEO is one of the strongest ways for dental clinics to attract new patients in a specific city or neighborhood.",
      "People look for dentists nearby and choose based on Maps visibility, reviews, and trust signals. Your goal is to be present where the decision happens.",
    ],
    sections: [
      {
        title: "Why a dental clinic needs local SEO",
        blocks: [
          {
            title: "1. Patients search for care nearby",
            body: "Queries like “dentist near me”, “teeth cleaning in Chicago”, or “pediatric dentist in Queens” create local results. If your clinic isn’t visible in Maps and local search, patients go to competitors.",
          },
          {
            title: "2. A steady flow without constant ad spend",
            body: "Ads get more expensive over time, while local SEO works 24/7 and brings organic leads. A strong local strategy reduces reliance on paid channels and helps build predictable demand.",
          },
          {
            title: "3. More trust",
            body: "Patients want to see a real clinic with strong reviews, clear services, and convenient location. Local SEO helps you build that perception-from your listing to your website.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Higher visibility for queries like “dentist + city”, “pediatric dentist + neighborhood”, “dental implants + city”.",
              "More actions from Maps: calls, direction requests, website visits.",
              "More phone calls and online appointment requests.",
              "Natural growth in reviews and local mentions.",
              "Stronger brand trust with patients.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy for dentists",
        blocks: [
          {
            title: "Step 1. Maps listings (Google Business Profile)",
            body: "Create and optimize your listing: clinic name, accurate address, hours, phone, website, photos of the clinic/team, services and categories. Make sure the info is consistent everywhere.",
          },
          {
            title: "Step 2. Reviews",
            body: "Reviews are critical in healthcare. Use QR codes, post-visit messages, and clear prompts to collect honest reviews. Reply to every review-especially negative ones-professionally and with specifics.",
          },
          {
            title: "Step 3. Local intent website optimization",
            body: "Your site should be fast, secure, and easy to use. Create separate pages for key services (general dentistry, orthodontics, implants, pediatric dentistry, etc.) with pricing signals, FAQs, and trust content.",
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "Initial changes in local visibility often show within 1–2 months. More stable growth typically takes 3–6 months with consistent work on listings, the website, and reviews.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoDentalChecklist",
      title: "Checklist",
      steps: [
        {
          id: "local-seo-dental-checklist",
          title: "",
          description: "",
          items: [
            "Create and fully complete your clinic’s Maps listing.",
            "Set up a consistent review collection process and respond to reviews.",
            "Optimize your website for local intent keywords and core services.",
            "Track calls, appointment requests, and local keyword visibility.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "SEO מקומי למרפאות שיניים: למה זה חשוב, למה לצפות ואיך עושים את זה נכון",
    lead: [
      "SEO מקומי הוא אחת הדרכים החזקות ביותר להביא מטופלים חדשים למרפאת שיניים בעיר או בשכונה ספציפית.",
      "אנשים מחפשים “רופא שיניים קרוב אליי” ומחליטים לפי נראות במפות, ביקורות ואמון. המטרה היא להיות שם כשההחלטה מתקבלת.",
    ],
    sections: [
      {
        title: "למה מרפאת שיניים צריכה SEO מקומי",
        blocks: [
          {
            title: "1. מטופלים מחפשים טיפול ליד הבית",
            body: "חיפושים כמו “רופא שיניים קרוב אליי”, “ניקוי שיניים תל אביב”, או “רופא שיניים לילדים בחיפה” יוצרים תוצאות מקומיות. אם המרפאה לא מופיעה במפות ובחיפוש המקומי-מטופלים עוברים למתחרים.",
          },
          {
            title: "2. זרם פניות בלי תלות תמידית בפרסום",
            body: "פרסום ממומן מתייקר, בעוד ש‑SEO מקומי עובד 24/7 ומביא פניות אורגניות. אסטרטגיה טובה מפחיתה תלות בערוצים בתשלום ויוצרת ביקוש יציב.",
          },
          {
            title: "3. יותר אמון",
            body: "מטופלים רוצים לראות מרפאה אמיתית עם ביקורות חזקות, שירותים ברורים ומיקום נוח. SEO מקומי עוזר לבנות את התמונה הזו-from הכרטיס במפות ועד האתר.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר חשיפה לחיפושים כמו “מרפאת שיניים + עיר/שכונה”, “יישור שיניים + אזור”, “שתלים + עיר”.",
              "יותר פעולות מהמפות: שיחות, בקשות ניווט, כניסות לאתר.",
              "יותר שיחות ובקשות לקביעת תור אונליין.",
              "עלייה טבעית בכמות הביקורות ואזכורים מקומיים.",
              "חיזוק מותג ואמון בקרב מטופלים.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד למרפאות שיניים",
        blocks: [
          {
            title: "שלב 1. כרטיסים במפות",
            body: "למלא בצורה מלאה את Google Business Profile: שם, כתובת מדויקת, שעות פעילות, טלפון, אתר, תמונות מרפאה/צוות, שירותים וקטגוריות. בישראל חשוב גם לוודא נוכחות נכונה ב‑Waze וב‑Apple Maps, ובמידת הצורך במדריכים מקומיים (כמו d.co.il או Easy).",
          },
          {
            title: "שלב 2. ביקורות",
            body: "ביקורות קריטיות בתחום הבריאות. להשתמש ב‑QR, הודעות אחרי טיפול, והנחיה ברורה כדי לאסוף ביקורות אמיתיות. חשוב להגיב לכל ביקורת-במיוחד שליליות-באופן מקצועי וענייני.",
          },
          {
            title: "שלב 3. אופטימיזציה באתר לחיפוש מקומי",
            body: "האתר צריך להיות מהיר, מאובטח ונוח. ליצור עמודים לשירותים מרכזיים (סתימות/טיפולי שורש, אורתודונטיה, שתלים, רפואת שיניים לילדים וכו’) עם מידע ברור, שאלות נפוצות ותכנים בוני אמון.",
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "שיפורים ראשוניים בנראות המקומית לרוב נראים תוך 1–2 חודשים. צמיחה יציבה בדרך כלל לוקחת 3–6 חודשים כאשר עובדים באופן עקבי על כרטיסים, אתר וביקורות.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoDentalChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "local-seo-dental-checklist",
          title: "",
          description: "",
          items: [
            "ליצור ולמלא בצורה מלאה את כרטיס המרפאה במפות.",
            "להקים תהליך קבוע לאיסוף ביקורות ולהגיב לביקורות.",
            "לאופטימיזציה של האתר לביטויי חיפוש מקומיים ולשירותים מרכזיים.",
            "לעקוב אחרי שיחות, בקשות לקביעת תור ונראות בביטויים מקומיים.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
