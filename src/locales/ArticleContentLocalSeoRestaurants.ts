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
      "Локальное SEO для ресторанов и кафе: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Локальное SEO - один из самых мощных инструментов продвижения ресторанов, кафе, кофеен и баров. Гости почти всегда ищут, где поесть, поблизости, а поисковые системы показывают ближайшие и самые качественные заведения. Если локальная оптимизация не настроена, вы теряете десятки гостей каждый день.",
    ],
    sections: [
      {
        title: "Зачем ресторану или кафе нужно локальное SEO",
        blocks: [
          {
            title: "1. Большинство гостей ищут заведения поблизости",
            body: "Запросы вроде «где поесть рядом», «кофейня недалеко», «пицца возле метро Немига» активируют локальную выдачу. Если заведение не оптимизировано, оно не появится в списке, даже если находится в нескольких минутах ходьбы.",
          },
          {
            title: "2. Усиление локального ранжирования в Google и Яндексе",
            body: "Алгоритмы учитывают точное местоположение, NAP‑данные, отзывы, рейтинг, фото блюд и интерьера, активность карточки и упоминания на городских порталах. В конкурентной нише общепита это ключевой фактор успеха.",
          },
          {
            title: "3. Рост доверия и привлекательности",
            body: "Оптимизированная карточка и сайт с рейтингом, отзывами, фото блюд, описаниями кухни и актуальной информацией формируют доверие и увеличивают количество бронирований и реальных посещений.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO для ресторанного бизнеса",
        blocks: [
          {
            body: [
              "Рост позиций по запросам «кофейня Центральный район», «пицца возле метро Немига», «кафе рядом».",
              "Увеличение видимости в Google Maps и Яндекс.Картах.",
              "Больше звонков и бронирований столиков.",
              "Увеличение реальных посещений и среднего чека.",
              "Снижение зависимости от платной рекламы.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая стратегия локального SEO для ресторанов и кафе",
        blocks: [
          {
            title: "Шаг 1. Оптимизация сайта заведения",
            body: "Сайт должен быть быстрым, адаптивным и удобным с мобильных. Важно создать отдельные страницы для ключевых разделов меню (завтраки, бизнес‑ланчи, пицца, стейки, десерты и т.п.) с фото блюд, описаниями и ценами.",
          },
          {
            title: "Шаг 2. Страница о заведении",
            body: "Опишите кухню, концепцию, интерьер, особенности заведения и опыт шеф‑повара. Это усиливает бренд и помогает гостям понять, подходит ли им формат.",
          },
          {
            title: "Шаг 3. Локальные сигналы и данные",
            body: "Убедитесь, что на сайте и в карточках единые NAP‑данные, указан район, ориентиры (метро, ТЦ). Для Минска важно указывать станции метро (Немига, Каштановая, Октябрьская), торговые центры (ТЦ Столица, Галерея Минск), информацию о парковке и расписании.",
          },
        ],
      },
      {
        title: "Карточки в картах и отзывы гостей",
        blocks: [
          {
            body: [
              "Заполните карточки в Google Maps и Яндекс.Картах: фото блюд, интерьера, меню, бара.",
              "Укажите актуальное меню, расписание, спецпредложения и форматы (доставка, навынос, бронирование).",
              "Поощряйте гостей оставлять честные отзывы и оперативно им отвечайте.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для ресторанов",
        blocks: [
          {
            title: "Когда ждать результат?",
            body: "Первые сдвиги по позициям и бронированиям обычно заметны в течение 4–8 недель, устойчивый рост посещаемости - за 3–6 месяцев при регулярной работе с сайтом, картами и отзывами.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoRestaurantsChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "local-seo-restaurants-checklist",
          title: "",
          description: "",
          items: [
            "Оптимизируйте сайт под мобильный трафик.",
            "Создайте структурированные страницы меню и разделов.",
            "Обновите и заполните карточки в картах.",
            "Собирайте и обрабатывайте отзывы гостей.",
            "Отслеживайте звонки, бронирования и позиции по локальным запросам.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for restaurants and cafes: why it matters, what to expect, and how to do it",
    lead: [
      "Local SEO is one of the most effective ways to grow a restaurant, cafe, or coffee shop. Guests search for places to eat nearby, and search engines surface the closest and best-rated options. If you’re not optimized for local discovery, you lose high-intent customers every day.",
    ],
    sections: [
      {
        title: "Why restaurants need local SEO",
        blocks: [
          {
            title: "1. Most guests search by proximity",
            body: "Queries like “food near me”, “coffee shop nearby”, or “pizza near downtown” trigger local results. If your restaurant isn’t optimized, it won’t appear-even if it’s only a few minutes away.",
          },
          {
            title: "2. Local ranking factors matter a lot",
            body: "Algorithms consider precise location, NAP consistency, reviews, ratings, menu and interior photos, listing activity, and mentions on local websites. In a competitive niche like dining, these signals often decide who wins.",
          },
          {
            title: "3. Trust and attractiveness drive bookings",
            body: "A well-optimized listing and website-rating, reviews, food photos, cuisine descriptions, and up-to-date details-build trust and increase reservations and walk-ins.",
          },
        ],
      },
      {
        title: "What to expect from local SEO for restaurants",
        blocks: [
          {
            body: [
              "Better rankings for searches like “coffee shop in [neighborhood]”, “pizza near downtown”, and “cafe near me”.",
              "More visibility in Google Maps and the local pack (top 3).",
              "More calls and reservation requests.",
              "More real visits and higher average ticket.",
              "Less dependency on paid ads.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy for restaurants",
        blocks: [
          {
            title: "Step 1. Optimize your restaurant website",
            body: "Your site must be fast, mobile-friendly, and easy to navigate. Create structured pages for key menu categories (breakfast, lunch specials, pizza, steaks, desserts, etc.) with photos, descriptions, and prices.",
          },
          {
            title: "Step 2. Build a strong “About” page",
            body: "Describe the cuisine, concept, interior, signature dishes, and chef experience. This strengthens branding and helps guests quickly decide if you’re the right fit.",
          },
          {
            title: "Step 3. Add clear local signals and data",
            body: "Make sure your NAP is consistent across the website and listings. Mention neighborhood and recognizable landmarks (parking, transit stops, malls) and keep hours and contact details accurate.",
          },
        ],
      },
      {
        title: "Maps listings and guest reviews",
        blocks: [
          {
            body: [
              "Fully complete your Google Business Profile: menu, photos of dishes and interior, and key attributes.",
              "Keep your menu, hours, special offers, and service formats updated (delivery, takeout, reservations).",
              "Encourage honest reviews and reply quickly and professionally.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "Early improvements in rankings and bookings often appear within 4–8 weeks. More stable growth typically takes 3–6 months with consistent work on the site, listings, and reviews.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoRestaurantsChecklist",
      title: "Checklist",
      steps: [
        {
          id: "local-seo-restaurants-checklist",
          title: "",
          description: "",
          items: [
            "Optimize your site for mobile traffic.",
            "Create structured pages for menu categories and key sections.",
            "Update and fully complete your Maps listing.",
            "Collect and manage guest reviews.",
            "Track calls, reservations, and rankings for local queries.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "SEO מקומי למסעדות ובתי קפה: למה זה חשוב, למה לצפות ואיך עושים את זה",
    lead: [
      "SEO מקומי הוא אחד הכלים החזקים ביותר לקידום מסעדות, בתי קפה ובר-קפה. אורחים מחפשים כמעט תמיד איפה לאכול לידם, ומנועי החיפוש מציגים את המקומות הקרובים והמדורגים ביותר. בלי אופטימיזציה מקומית אתם מפסידים לקוחות חמים כל יום.",
    ],
    sections: [
      {
        title: "למה מסעדה צריכה SEO מקומי",
        blocks: [
          {
            title: "1. רוב האורחים מחפשים לפי קרבה",
            body: "חיפושים כמו “אוכל קרוב אליי”, “בית קפה ליד”, או “פיצה בדיזנגוף” מפעילים תוצאות מקומיות. אם העסק לא מאופטם, הוא לא יופיע-even אם הוא במרחק כמה דקות.",
          },
          {
            title: "2. גורמי דירוג מקומיים קריטיים",
            body: "אלגוריתמים מתחשבים במיקום מדויק, עקביות NAP, ביקורות ודירוגים, תמונות מנות והאווירה, פעילות בכרטיס העסק, ואזכורים באתרים מקומיים. בענף תחרותי כמו מסעדנות זה גורם מכריע.",
          },
          {
            title: "3. אמון מייצר הזמנות",
            body: "כרטיס עסק מאופטם ואתר עם דירוג, ביקורות, תמונות מנות, תיאור המטבח ומידע עדכני-בונים אמון ומגדילים הזמנות ושיחות.",
          },
        ],
      },
      {
        title: "למה לצפות מ‑SEO מקומי למסעדות",
        blocks: [
          {
            body: [
              "שיפור נראות לחיפושים כמו “בית קפה ב[שכונה]”, “פיצה במרכז העיר”, “מסעדה קרובה אליי”.",
              "יותר חשיפה ב‑Google Maps וגם ב‑Waze (וגם ב‑Apple Maps).",
              "יותר שיחות והזמנות מקום.",
              "יותר ביקורים בפועל ועלייה בסל הממוצע.",
              "פחות תלות בפרסום ממומן.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד ל‑SEO מקומי למסעדות",
        blocks: [
          {
            title: "שלב 1. אופטימיזציה לאתר המסעדה",
            body: "האתר צריך להיות מהיר ונוח במובייל. מומלץ ליצור עמודים מסודרים לקטגוריות תפריט מרכזיות (ארוחת בוקר, עסקיות, פיצה, בשרים, קינוחים וכו’) עם תמונות, תיאורים ומחירים.",
          },
          {
            title: "שלב 2. עמוד אודות חזק",
            body: "תארו את סוג המטבח, הקונספט, האווירה, המנות הבולטות וניסיון השף. זה מחזק את המותג ועוזר לאורחים להבין אם המקום מתאים להם.",
          },
          {
            title: "שלב 3. נתוני מיקום ואיתותים מקומיים",
            body: "ודאו ששם/כתובת/טלפון (NAP) עקביים באתר ובכרטיסים. ציינו שכונה ונקודות ציון מוכרות (חניה, תחבורה ציבורית, קניונים) ושמרו על שעות ופרטי קשר מעודכנים.",
          },
        ],
      },
      {
        title: "כרטיסים במפות וביקורות אורחים",
        blocks: [
          {
            body: [
              "למלא את Google Business Profile בצורה מלאה: תפריט, תמונות מנות והאווירה, ותכונות רלוונטיות.",
              "לעדכן תפריט, שעות, מבצעים ופורמטים (משלוח, טייקאווי, הזמנות).",
              "לעודד ביקורות ולהגיב מהר ובצורה מקצועית.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "שיפורים ראשונים בדירוגים ובהזמנות לרוב נראים תוך 4–8 שבועות. צמיחה יציבה יותר בדרך כלל לוקחת 3–6 חודשים עם עבודה עקבית על האתר, הכרטיסים והביקורות.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoRestaurantsChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "local-seo-restaurants-checklist",
          title: "",
          description: "",
          items: [
            "לאופטימיזציה של האתר למובייל.",
            "ליצור עמודים מסודרים לקטגוריות תפריט מרכזיות.",
            "לעדכן ולמלא את כרטיס העסק במפות.",
            "לאסוף ולנהל ביקורות אורחים.",
            "לעקוב אחרי שיחות, הזמנות ודירוגים לחיפושים מקומיים.",
          ],
        },
      ],
    },
  },
};

export default content;
