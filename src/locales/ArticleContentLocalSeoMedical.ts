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
      "Локальное SEO для медицинских клиник: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Локальное SEO - один из ключевых каналов привлечения пациентов. Люди ищут клиники и врачей через поисковые системы и карты.",
      "Хорошо оптимизированная клиника получает стабильный поток обращений и повышает доверие без постоянных затрат на рекламу.",
    ],
    sections: [
      {
        title: "Зачем медицинской клинике нужно локальное SEO",
        blocks: [
          {
            title: "1. Пациенты выбирают клиники по геолокации",
            body: "Запросы «стоматология рядом», «клиника возле меня», «сдать анализы Минск» напрямую завязаны на местоположении пациента. Поисковые системы показывают ближайшие и наиболее авторитетные клиники. Без локальной оптимизации медцентр просто не появляется в выдаче.",
          },
          {
            title: "2. Усиление локального ранжирования",
            body: "Google и Яндекс учитывают адрес, отзывы, рейтинг, локальные цитирования, качество карточки в картах и NAP‑данные. В конкурентной медицинской нише это критично для успеха.",
          },
          {
            title: "3. Доверие и репутация",
            body: "Пациенты обращают внимание на рейтинг, актуальность информации, фото, описание услуг и отзывы. Локальное SEO помогает выстроить образ компетентной и безопасной клиники.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO для клиники",
        blocks: [
          {
            body: [
              "Рост позиций по локальным медицинским запросам.",
              "Увеличение видимости в Google Maps и Яндекс.Картах.",
              "Больше звонков и онлайн‑записей на приём.",
              "Укрепление репутации клиники и доверия пациентов.",
              "Снижение зависимости от платной рекламы.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая локальная SEO‑стратегия для медклиник",
        blocks: [
          {
            title: "Шаг 1. Оптимизация сайта клиники",
            body: "Сайт должен быть быстрым, безопасным (HTTPS), адаптивным и удобным. Для каждого направления создаются отдельные страницы услуг: УЗИ, анализы, терапия, стоматология, дерматология и т.д., с описанием, показаниями, ценами и FAQ.",
          },
          {
            title: "Шаг 2. Разделы по врачам",
            body: "Для каждого специалиста - отдельная страница/карточка с фото, образованием, стажем, сертификатами и специализацией. Это повышает доверие и упрощает выбор врача.",
          },
          {
            title: "Шаг 3. Локальные страницы филиалов",
            body: "При наличии нескольких филиалов важно сделать отдельные локальные страницы с адресом, картой, фото фасада, парковки, расписанием и особенностями расположения.",
          },
        ],
      },
      {
        title: "Карточки клиники в картах и отзывы",
        blocks: [
          {
            body: [
              "Заполните карточки в Google Maps и Яндекс.Картах: адрес, телефон, режим работы, категории, услуги.",
              "Добавьте качественные фото кабинетов, оборудования, ресепшена и фасада.",
              "Стимулируйте пациентов оставлять честные отзывы и оперативно на них отвечайте.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для медклиник",
        blocks: [
          {
            title: "Когда появятся результаты?",
            body: "При активной работе с сайтом, карточками и отзывами первые заметные изменения обычно появляются через 4–8 недель, устойчивый рост потока пациентов - в горизонте 3–6 месяцев.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoMedClinicsChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "local-seo-med-clinics-checklist",
          title: "",
          description: "",
          items: [
            "Оптимизируйте сайт клиники и разделы по услугам.",
            "Создайте структурированные страницы врачей.",
            "Разделите филиалы на отдельные локальные страницы.",
            "Заполните карточки в картах и регулярно обновляйте данные.",
            "Собирайте и обрабатывайте отзывы, отслеживайте звонки и записи.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for medical clinics: why it matters, what to expect, and how to do it",
    lead: [
      "Local SEO is one of the key channels for attracting new patients. People search for clinics and providers through search engines and Maps.",
      "A well-optimized clinic earns a steady flow of calls and appointment requests while building trust without constant ad spend.",
    ],
    sections: [
      {
        title: "Why a medical clinic needs local SEO",
        blocks: [
          {
            title: "1. Patients choose clinics by proximity",
            body: "Queries like “urgent care near me”, “clinic near me”, or “lab tests in Seattle” depend heavily on location. Search engines show nearby and reputable options first. Without local optimization, your clinic may not appear in those results.",
          },
          {
            title: "2. Local ranking factors matter",
            body: "Google weighs address accuracy, reviews, ratings, local citations, listing completeness, and NAP consistency. In competitive healthcare markets, these details are critical.",
          },
          {
            title: "3. Trust and reputation",
            body: "Patients look at ratings, updated information, photos, service descriptions, and reviews. Local SEO helps build the perception of a competent and safe clinic.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Higher visibility for local healthcare searches.",
              "More presence in Google Maps and more actions (calls, directions, website visits).",
              "More calls and online appointment requests.",
              "A stronger reputation and patient trust.",
              "Less dependence on paid ads over time.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy for clinics",
        blocks: [
          {
            title: "Step 1. Optimize the clinic website",
            body: "Your site should be fast, secure (HTTPS), mobile-friendly, and easy to navigate. Create service pages for each specialty (primary care, imaging, labs, dermatology, dentistry, etc.) with clear descriptions, pricing signals, and FAQs.",
          },
          {
            title: "Step 2. Provider pages",
            body: "Create structured doctor/provider pages with photos, education, credentials, specialties, and experience. This builds trust and helps patients choose the right provider.",
          },
          {
            title: "Step 3. Location pages for multiple clinics",
            body: "If you have multiple locations, build separate local pages with address, map, exterior/parking photos, hours, and location details.",
          },
        ],
      },
      {
        title: "Listings and reviews",
        blocks: [
          {
            body: [
              "Complete your Google Business Profile: address, phone, hours, categories, and services.",
              "Add high-quality photos of the clinic, waiting area, equipment, and exterior.",
              "Encourage patients to leave honest reviews and respond quickly and professionally.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "With consistent work on the website, listings, and reviews, noticeable improvements often appear within 4–8 weeks. More stable growth typically takes 3–6 months.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoMedClinicsChecklist",
      title: "Checklist",
      steps: [
        {
          id: "local-seo-med-clinics-checklist",
          title: "",
          description: "",
          items: [
            "Optimize the clinic website and service sections.",
            "Create structured provider pages.",
            "Split locations into separate local pages.",
            "Complete and regularly update your Maps listing.",
            "Collect reviews and track calls and appointment requests.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "SEO מקומי למרפאות רפואיות: למה זה חשוב, למה לצפות ואיך עושים את זה",
    lead: [
      "SEO מקומי הוא אחד הערוצים המרכזיים להבאת מטופלים חדשים. אנשים מחפשים מרפאות ורופאים דרך מנועי חיפוש ומפות.",
      "מרפאה מאופטמת היטב מקבלת זרם יציב של שיחות ובקשות לתורים ובונה אמון בלי תלות קבועה בפרסום.",
    ],
    sections: [
      {
        title: "למה מרפאה צריכה SEO מקומי",
        blocks: [
          {
            title: "1. מטופלים בוחרים לפי קרבה",
            body: "חיפושים כמו “מרפאה קרוב אליי”, “מוקד רפואה דחופה קרוב”, או “בדיקות דם בתל אביב” תלויים מאוד במיקום. Google מציגה קודם אפשרויות קרובות ומוערכות. בלי אופטימיזציה מקומית, המרפאה עלולה לא להופיע.",
          },
          {
            title: "2. אותות דירוג מקומיים",
            body: "Google מתחשבת בדיוק כתובת, ביקורות ודירוגים, אזכורים מקומיים, שלמות הכרטיס ועקביות NAP. בשוק תחרותי זה קריטי.",
          },
          {
            title: "3. אמון ומוניטין",
            body: "מטופלים מסתכלים על דירוג, עדכניות מידע, תמונות, תיאור שירותים וביקורות. SEO מקומי עוזר לבנות תחושה של מרפאה מקצועית ובטוחה.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר נראות לחיפושים רפואיים מקומיים.",
              "יותר פעולות מהמפות: שיחות, ניווט, כניסות לאתר.",
              "יותר שיחות ובקשות לקביעת תור אונליין.",
              "חיזוק מוניטין ואמון מטופלים.",
              "פחות תלות בפרסום ממומן לאורך זמן.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד למרפאות",
        blocks: [
          {
            title: "שלב 1. אופטימיזציה לאתר המרפאה",
            body: "האתר צריך להיות מהיר, מאובטח (HTTPS) ונוח במובייל. ליצור עמודי שירות לכל תחום (רפואת משפחה, הדמיה, מעבדה, דרמטולוגיה, רפואת שיניים ועוד) עם מידע ברור, שאלות נפוצות וסימני מחיר.",
          },
          {
            title: "שלב 2. עמודי רופאים/מטפלים",
            body: "לבנות עמודים מסודרים לרופאים עם תמונות, השכלה, ניסיון, תעודות והתמחויות. זה בונה אמון ועוזר למטופלים לבחור.",
          },
          {
            title: "שלב 3. דפי סניפים",
            body: "אם יש כמה סניפים, ליצור דפים נפרדים עם כתובת, מפה, תמונות חזית/חניה, שעות פעילות ופרטי מיקום.",
          },
        ],
      },
      {
        title: "כרטיסים במפות וביקורות",
        blocks: [
          {
            body: [
              "למלא בצורה מלאה את Google Business Profile, ולוודא נוכחות נכונה גם ב‑Waze וב‑Apple Maps.",
              "להוסיף תמונות איכותיות של המרפאה, אזור המתנה, ציוד וחזית.",
              "לעודד מטופלים להשאיר ביקורות ולהגיב בצורה מקצועית ומהירה.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "עם עבודה עקבית על האתר, הכרטיסים והביקורות, לרוב רואים שיפור תוך 4–8 שבועות. צמיחה יציבה בדרך כלל לוקחת 3–6 חודשים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoMedClinicsChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "local-seo-med-clinics-checklist",
          title: "",
          description: "",
          items: [
            "לאופטימיזציה של אתר המרפאה ושל דפי שירות.",
            "ליצור עמודים מובנים לרופאים/מטפלים.",
            "לפצל סניפים לדפים מקומיים נפרדים.",
            "למלא ולעדכן כרטיסים במפות.",
            "לאסוף ביקורות ולעקוב אחרי שיחות ותורים.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
