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
      "Локальное SEO для юридических фирм: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Локальное SEO - один из самых сильных каналов привлечения клиентов для юристов, адвокатов и нотариусов. Люди ищут правовую помощь по геолокации.",
      "Важно, чтобы ваша фирма была видна в этот момент: в картах, локальной выдаче и отзывах.",
    ],
    sections: [
      {
        title: "Зачем юридической фирме нужно локальное SEO",
        blocks: [
          {
            title: "1. Клиенты ищут юристов локально и быстро",
            body: "Запросы вроде «юрист рядом», «адвокат Минск», «помощь при ДТП недалеко» показывают, что людям нужен специалист поблизости и как можно скорее. Локальное SEO помогает вашей фирме оказаться среди первых вариантов.",
          },
          {
            title: "2. Высокая конкуренция требует видимости",
            body: "Рынок юридических услуг перегрет: десятки фирм и частных специалистов в каждом городе. Без локальной оптимизации даже сильная команда остаётся невидимой среди конкурентов.",
          },
          {
            title: "3. Репутация и доверие",
            body: "Клиенты обращают внимание на отзывы, рейтинг, реальные кейсы, опыт юристов, фото офиса и ответы на вопросы. Локальное SEO помогает выстроить цифровую репутацию, которая конвертирует посетителей в обращения.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO юридической фирмы",
        blocks: [
          {
            body: [
              "Рост позиций по локальным запросам («адвокат + город», «юрист по наследству + район» и т.д.).",
              "Увеличение видимости в Google Maps и Яндекс.Картах.",
              "Больше звонков и заявок через сайт, формы и мессенджеры.",
              "Укрепление бренда и доверия на локальном рынке.",
              "Снижение затрат на платную рекламу при сохранении потока лидов.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая стратегия локального SEO для юрфирм",
        blocks: [
          {
            title: "Шаг 1. Оптимизация сайта юридической компании",
            body: "Сайт должен быть быстрым, удобным и структурированным. Важно создать отдельные страницы для ключевых направлений: семейное право, наследство, уголовные дела, ДТП, трудовые споры, банкротство и т.д., с описанием, примерами ситуаций, этапами работы и FAQ.",
          },
          {
            title: "Шаг 2. Локальные страницы районов и филиалов",
            body: "Если фирма работает в нескольких районах или имеет несколько офисов, создаются локальные страницы по принципу «юрист + район» с адресом, картой, описанием и контактами.",
          },
          {
            title: "Шаг 3. Страницы специалистов",
            body: "Для каждого юриста полезно иметь отдельную страницу с фото, образованием, стажем, специализацией, кейсами и отзывами клиентов. Это усиливает доверие и даёт поисковикам больше структурированной информации.",
          },
        ],
      },
      {
        title: "Карточки в картах и отзывы",
        blocks: [
          {
            body: [
              "Заполните карточки в Google Maps и Яндекс.Картах: адрес, график, телефоны, сайт, список услуг, фото офиса и команды.",
              "Собирайте честные отзывы и оперативно на них отвечайте.",
              "Используйте вопросы и ответы в карточках, если они доступны.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для юрфирм",
        blocks: [
          {
            title: "Когда появятся результаты?",
            body: "Как правило, первые изменения по позициям и обращениям заметны через 2–3 месяца, устойчивый рост - за 4–8 месяцев при регулярной работе с сайтом, карточками и отзывами.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoLegalFirmsChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "local-seo-legal-firms-checklist",
          title: "",
          description: "",
          items: [
            "Оптимизируйте сайт и создайте страницы услуг.",
            "Сделайте локальные страницы по районам и филиалам.",
            "Создайте подробные страницы юристов.",
            "Заполните и поддерживайте карточки в картах.",
            "Собирайте отзывы и отслеживайте рост звонков и заявок.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for law firms: why it matters, what to expect, and how to do it",
    lead: [
      "Local SEO is one of the strongest acquisition channels for attorneys and law firms. People search for legal help based on location and urgency.",
      "You need to be visible at that moment-in Maps results, local listings, and reviews.",
    ],
    sections: [
      {
        title: "Why a law firm needs local SEO",
        blocks: [
          {
            title: "1. Clients search locally-and fast",
            body: "Queries like “lawyer near me”, “car accident attorney in Dallas”, or “immigration lawyer nearby” show strong intent. Local SEO helps your firm appear among the top options when someone needs help quickly.",
          },
          {
            title: "2. Competition is intense",
            body: "Legal markets are crowded. Without local optimization, even a strong team can remain invisible next to competitors with better listings and reputation signals.",
          },
          {
            title: "3. Reputation and trust",
            body: "Clients evaluate reviews, ratings, proven experience, attorney profiles, office photos, and answers to questions. Local SEO helps you build a digital reputation that converts searchers into calls and consultations.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Higher visibility for searches like “attorney + city”, “estate lawyer + neighborhood”, etc.",
              "More presence in Google Maps and more actions (calls, directions, website clicks).",
              "More calls and leads via website forms and messaging.",
              "Stronger local brand trust.",
              "Less dependence on paid ads while maintaining lead flow.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy for law firms",
        blocks: [
          {
            title: "Step 1. Optimize the law firm website",
            body: "Your site should be fast, structured, and easy to navigate. Create dedicated pages for core practice areas (family law, DUI, personal injury, immigration, bankruptcy, employment disputes, etc.) with clear explanations, case examples, process steps, and FAQs.",
          },
          {
            title: "Step 2. Location and neighborhood pages",
            body: "If you serve multiple areas or have multiple offices, create location pages like “lawyer + neighborhood/city” with address, map, and contact info.",
          },
          {
            title: "Step 3. Attorney profiles",
            body: "Build strong attorney pages with photos, education, experience, specialties, case highlights, and client reviews. This increases trust and gives search engines more structured information.",
          },
        ],
      },
      {
        title: "Listings and reviews",
        blocks: [
          {
            body: [
              "Complete your Google Business Profile: address, hours, phone, website, services, and office/team photos.",
              "Collect honest reviews and respond quickly.",
              "Use Q&A features on your listing where available.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "Early improvements can show in 2–3 months. More stable growth typically takes 4–8 months with consistent work on the website, listings, and reviews.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoLegalFirmsChecklist",
      title: "Checklist",
      steps: [
        {
          id: "local-seo-legal-firms-checklist",
          title: "",
          description: "",
          items: [
            "Optimize your site and build service/practice-area pages.",
            "Create local pages for neighborhoods and office locations.",
            "Build detailed attorney profile pages.",
            "Complete and maintain your Maps listing.",
            "Collect reviews and track call/lead growth.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "SEO מקומי למשרדי עורכי דין: למה זה חשוב, למה לצפות ואיך עושים את זה",
    lead: [
      "SEO מקומי הוא אחד הערוצים החזקים ביותר להבאת לקוחות למשרד עורכי דין. אנשים מחפשים עזרה משפטית לפי מיקום ולעיתים גם בדחיפות.",
      "חשוב להופיע בדיוק ברגע הזה-במפות, בתוצאות מקומיות ובביקורות.",
    ],
    sections: [
      {
        title: "למה משרד עורכי דין צריך SEO מקומי",
        blocks: [
          {
            title: "1. לקוחות מחפשים מקומית ומהר",
            body: "חיפושים כמו “עורך דין קרוב אליי”, “עורך דין תאונת דרכים בתל אביב”, או “עורך דין הגירה ליד הבית” מצביעים על כוונה גבוהה. SEO מקומי עוזר להופיע בין האפשרויות הראשונות.",
          },
          {
            title: "2. תחרות גבוהה",
            body: "השוק המשפטי תחרותי מאוד. בלי אופטימיזציה מקומית, גם משרד חזק יכול להישאר לא נראה ליד מתחרים עם כרטיסים וביקורות טובים יותר.",
          },
          {
            title: "3. מוניטין ואמון",
            body: "לקוחות בודקים ביקורות, דירוג, ניסיון, פרופילים של עורכי הדין, תמונות משרד ותשובות לשאלות. SEO מקומי עוזר לבנות מוניטין דיגיטלי שממיר לחיוג ופגישות ייעוץ.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר נראות לחיפושים כמו “עורך דין + עיר”, “עורך דין ירושה + שכונה” וכד’.",
              "יותר נוכחות ב‑Google Maps וב‑Waze (וגם ב‑Apple Maps) ויותר פעולות: שיחות, ניווט, כניסות לאתר.",
              "יותר שיחות ולידים דרך האתר.",
              "חיזוק מותג ואמון מקומי.",
              "פחות תלות בפרסום ממומן תוך שמירה על זרם פניות.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד למשרדי עורכי דין",
        blocks: [
          {
            title: "שלב 1. אופטימיזציה לאתר",
            body: "האתר צריך להיות מהיר ומסודר. ליצור עמודים לתחומי עיסוק מרכזיים (דיני משפחה, תאונות דרכים, נזיקין, הגירה, פשיטת רגל, סכסוכי עבודה וכו’) עם הסברים, דוגמאות, שלבי טיפול ו‑FAQ.",
          },
          {
            title: "שלב 2. דפי אזורים/שכונות",
            body: "אם אתם נותנים שירות בכמה אזורים או יש כמה סניפים, ליצור דפים בסגנון “עורך דין + עיר/שכונה” עם כתובת, מפה ופרטי קשר.",
          },
          {
            title: "שלב 3. פרופילים של עורכי דין",
            body: "לבנות עמודים חזקים לעורכי הדין עם תמונה, השכלה, ניסיון, התמחות, הישגים וביקורות. זה מעלה אמון ומוסיף מידע מובנה למנועי חיפוש.",
          },
        ],
      },
      {
        title: "כרטיסים במפות וביקורות",
        blocks: [
          {
            body: [
              "למלא את Google Business Profile: כתובת, שעות, טלפון, אתר, שירותים ותמונות משרד/צוות.",
              "לאסוף ביקורות אמיתיות ולהגיב במהירות.",
              "להשתמש בשאלות ותשובות בכרטיס העסק, אם זה זמין.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "שיפורים ראשוניים יכולים להופיע תוך 2–3 חודשים. צמיחה יציבה בדרך כלל לוקחת 4–8 חודשים כאשר עובדים באופן עקבי על האתר, הכרטיסים והביקורות.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoLegalFirmsChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "local-seo-legal-firms-checklist",
          title: "",
          description: "",
          items: [
            "לאופטימיזציה של האתר וליצור עמודי שירות.",
            "ליצור דפים מקומיים לאזורים/שכונות ולסניפים.",
            "לבנות עמודי פרופיל מפורטים לעורכי דין.",
            "למלא ולתחזק כרטיס במפות.",
            "לאסוף ביקורות ולעקוב אחרי צמיחת שיחות ולידים.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
