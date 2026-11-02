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
      "Локальное SEO для салонов красоты: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Локальное SEO - один из самых эффективных каналов привлечения клиентов для салонов красоты, парикмахерских, барбершопов, студий маникюра, косметологических центров и СПА.",
      "Люди ищут услуги по геолокации, и задача салона - быть в числе первых вариантов на картах и в поиске.",
    ],
    sections: [
      {
        title: "Зачем салону красоты нужно локальное SEO",
        blocks: [
          {
            title: "1. Клиенты ищут услуги рядом с собой",
            body: "Запросы «маникюр рядом», «парикмахерская Партизанский район», «барбершоп возле метро Немига» активируют локальную выдачу. Без оптимизации салон просто не будет показан, даже если находится в соседнем доме.",
          },
          {
            title: "2. Усиление локального ранжирования",
            body: "Google и Яндекс учитывают точность адреса, NAP‑данные, категории салона, отзывы, рейтинг, фото работ и активность карточки. В конкурентной бьюти‑нише это решающий фактор видимости.",
          },
          {
            title: "3. Репутация и доверие",
            body: "Клиенты оценивают салон по отзывам, рейтингу, фотографиям до/после, описанию услуг и уровню мастеров. Локальное SEO помогает правильно упаковать эту информацию и выделиться среди конкурентов.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO для салона красоты",
        blocks: [
          {
            body: [
              "Рост позиций по запросам «маникюр рядом», «салон красоты Центральный район», «барбершоп недалеко».",
              "Чаще появление в Google Maps и Яндекс.Картах в блоках «Лучшие салоны рядом».",
              "Увеличение звонков, онлайн‑записей и обращений в мессенджеры.",
              "Рост рейтинга и количества положительных отзывов.",
              "Снижение зависимости от платной рекламы при сохранении потока клиентов.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая стратегия локального SEO для салонов красоты",
        blocks: [
          {
            title: "Шаг 1. Оптимизация сайта салона",
            body: "Сайт должен быть быстрым, современным и удобным для записи с мобильного. Для каждой услуги (маникюр, педикюр, окрашивание, стрижки, косметология, СПА и т.д.) полезно сделать отдельную информативную страницу с описанием, этапами, ценами и фото работ.",
          },
          {
            title: "Шаг 2. Страницы мастеров",
            body: "Поисковые системы и клиенты любят детальную информацию о специалистах: фото, опыт, специализация, сертификаты, примеры работ и отзывы. Это повышает доверие и увеличивает количество записей к конкретным мастерам.",
          },
          {
            title: "Шаг 3. Локальные данные и филиалы",
            body: "Для сетей важно создать отдельные страницы под каждый филиал с адресом, картой, фотографиями салона, описанием района, маршрутом и контактами. NAP‑данные должны совпадать со всеми внешними площадками.",
          },
        ],
      },
      {
        title: "Карточки в картах и отзывы",
        blocks: [
          {
            body: [
              "Заполните карточки в Google Maps и Яндекс.Картах: адрес, график, услуги, фото салона и работ.",
              "Стимулируйте клиентов оставлять отзывы после процедур.",
              "Отвечайте на отзывы, демонстрируя внимание и профессионализм.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для салонов красоты",
        blocks: [
          {
            title: "Когда появятся результаты?",
            body: "Как правило, при активной работе с сайтом, карточками и отзывами первые заметные изменения видны в течение 4–8 недель, устойчивый рост записей - за 3–6 месяцев.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoBeautySalonsChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "local-seo-beauty-salons-checklist",
          title: "",
          description: "",
          items: [
            "Оптимизируйте сайт и создайте страницы для основных услуг.",
            "Сделайте подробные страницы мастеров.",
            "Создайте локальные страницы для филиалов (если есть).",
            "Заполните карточки в картах и обновляйте их.",
            "Собирайте и обрабатывайте отзывы, отслеживайте рост записей.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for beauty salons: why it matters, what to expect, and how to do it",
    lead: [
      "Local SEO is one of the most effective channels for beauty salons, hair salons, barbershops, nail studios, med spas, and spas.",
      "People search by location, and your goal is to show up near the top in local search and Maps when they’re ready to book.",
    ],
    sections: [
      {
        title: "Why a beauty salon needs local SEO",
        blocks: [
          {
            title: "1. Clients search for services nearby",
            body: "Queries like “nails near me”, “barber near me”, or “hair salon in Midtown” trigger local results. Without local optimization, your salon may not show up-even if it’s right around the corner.",
          },
          {
            title: "2. Local ranking signals matter",
            body: "Google evaluates address accuracy, NAP consistency, categories, reviews, ratings, photos/portfolio, and listing activity. In competitive beauty markets, these signals often decide who gets booked.",
          },
          {
            title: "3. Reputation and trust",
            body: "Clients choose based on reviews, ratings, before/after photos, service descriptions, and stylist expertise. Local SEO helps you present this clearly and stand out.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Higher visibility for searches like “nail salon near me”, “beauty salon Downtown”, or “barbershop close by”.",
              "More appearances in Google Maps and Apple Maps-and more actions (calls, directions, bookings).",
              "More calls, online bookings, and messages.",
              "Growth in rating and review volume.",
              "Less dependence on paid ads while keeping a steady flow of clients.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy",
        blocks: [
          {
            title: "Step 1. Optimize the salon website",
            body: "Your website should be fast, modern, and easy to book from mobile. Create dedicated pages for each service (manicure, pedicure, color, haircuts, skincare, spa, etc.) with descriptions, pricing, process, and portfolio photos.",
          },
          {
            title: "Step 2. Stylist pages",
            body: "Clients and search engines love detailed practitioner pages: photos, experience, specialties, certifications, portfolio, and reviews. It builds trust and increases bookings for specific stylists.",
          },
          {
            title: "Step 3. Location pages for multi-location salons",
            body: "If you have multiple locations, create a page per location with address, map, photos, local area description, directions, and contacts. Keep your NAP consistent across all platforms.",
          },
        ],
      },
      {
        title: "Listings and reviews",
        blocks: [
          {
            body: [
              "Fully complete your Google Business Profile. Make sure your salon is also correct on Apple Maps, Bing Places, and key local platforms (where relevant).",
              "Encourage clients to leave reviews after appointments.",
              "Reply to reviews to show attentiveness and professionalism.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "With consistent work on your site, listings, and reviews, you’ll often see meaningful changes within 4–8 weeks. More stable booking growth typically takes 3–6 months.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoBeautySalonsChecklist",
      title: "Checklist",
      steps: [
        {
          id: "local-seo-beauty-salons-checklist",
          title: "",
          description: "",
          items: [
            "Optimize your site and create pages for your core services.",
            "Build detailed stylist pages.",
            "Create local pages for each location (if you have multiple).",
            "Complete your Maps listings and keep them updated.",
            "Collect and manage reviews, and track booking growth.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "SEO מקומי לסלוני יופי: למה זה חשוב, למה לצפות ואיך עושים את זה",
    lead: [
      "SEO מקומי הוא אחד הערוצים היעילים ביותר לסלוני יופי, מספרות, ברברשופ, סטודיו לציפורניים, קוסמטיקה וספא.",
      "אנשים מחפשים לפי מיקום, והמטרה היא להופיע גבוה בתוצאות המקומיות ובמפות ברגע שהם רוצים להזמין תור.",
    ],
    sections: [
      {
        title: "למה סלון יופי צריך SEO מקומי",
        blocks: [
          {
            title: "1. לקוחות מחפשים שירותים “קרוב אליי”",
            body: "חיפושים כמו “מניקור קרוב אליי”, “מספרה בתל אביב”, או “ברברשופ ליד תחנת רכבת” מפעילים תוצאות מקומיות. בלי אופטימיזציה מקומית ייתכן שלא תופיעו-גם אם אתם ממש ליד.",
          },
          {
            title: "2. אותות דירוג מקומיים",
            body: "Google מתחשבת בדיוק כתובת, עקביות NAP, קטגוריות, ביקורות ודירוגים, תמונות ותיק עבודות, ופעילות בכרטיס העסק. בנישה תחרותית זה מה שמכריע.",
          },
          {
            title: "3. מוניטין ואמון",
            body: "לקוחות בוחרים לפי ביקורות, דירוג, תמונות לפני/אחרי, תיאור שירותים ורמת בעלי המקצוע. SEO מקומי עוזר להציג את זה בצורה ברורה ולהבליט אתכם.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר חשיפה לחיפושים כמו “סטודיו לציפורניים קרוב אליי”, “סלון יופי מרכז תל אביב”, “ברברשופ ברמת גן”.",
              "יותר הופעות ב‑Google Maps וב‑Waze (וגם ב‑Apple Maps) ויותר פעולות: שיחות, ניווט, הזמנות.",
              "יותר שיחות, הזמנות אונליין ופניות בהודעות.",
              "עלייה בדירוג ובכמות הביקורות.",
              "פחות תלות בפרסום ממומן תוך שמירה על זרם לקוחות יציב.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד",
        blocks: [
          {
            title: "שלב 1. לשפר את אתר הסלון",
            body: "האתר צריך להיות מהיר ונוח להזמנה במובייל. ליצור עמודים לשירותים מרכזיים (מניקור, פדיקור, צבע, תספורות, קוסמטיקה, ספא וכו’) עם תיאור, מחיר, תהליך ותיק עבודות.",
          },
          {
            title: "שלב 2. עמודים למעצבים/ות ומטפלים/ות",
            body: "עמודי צוות מפורטים עם תמונות, ניסיון, התמחות, תעודות, תיק עבודות וביקורות-בונים אמון ומגדילים הזמנות למטפל/ת ספציפי/ת.",
          },
          {
            title: "שלב 3. דפי סניפים",
            body: "אם יש לכם כמה סניפים, צרו דף לכל סניף עם כתובת, מפה, תמונות, תיאור אזור, הוראות הגעה ופרטי קשר. חשוב לשמור על עקביות NAP בכל הפלטפורמות.",
          },
        ],
      },
      {
        title: "כרטיסים במפות וביקורות",
        blocks: [
          {
            body: [
              "למלא בצורה מלאה את Google Business Profile, ולוודא נוכחות נכונה גם ב‑Waze וב‑Apple Maps. במקרים מסוימים בישראל כדאי גם להופיע במדריכים מקומיים (כמו Easy או d.co.il) בהתאם לרלוונטיות.",
              "לעודד לקוחות להשאיר ביקורות אחרי טיפול.",
              "להגיב לביקורות כדי להראות מקצועיות ואכפתיות.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "כאשר עובדים באופן עקבי על האתר, הכרטיסים והביקורות, לרוב רואים שיפור תוך 4–8 שבועות. צמיחה יציבה בהזמנות בדרך כלל לוקחת 3–6 חודשים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoBeautySalonsChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "local-seo-beauty-salons-checklist",
          title: "",
          description: "",
          items: [
            "לאופטימיזציה של האתר וליצור עמודים לשירותים מרכזיים.",
            "לבנות עמודי צוות מפורטים.",
            "ליצור דפים מקומיים לסניפים (אם יש).",
            "למלא ולעדכן כרטיסים במפות.",
            "לאסוף ולנהל ביקורות ולעקוב אחרי עלייה בהזמנות.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
