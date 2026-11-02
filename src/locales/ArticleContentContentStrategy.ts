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
      "Написание статей про жизнь и услуги в вашем городе: зачем это нужно и как делать правильно",
    lead: [
      "Городские статьи - мощный инструмент локального продвижения. Они усиливают локальное SEO, привлекают поисковый трафик и повышают доверие к бизнесу, показывая, что вы хорошо знаете свой город, его инфраструктуру и потребности жителей.",
    ],
    sections: [
      {
        title: "Зачем писать статьи про жизнь и услуги в городе",
        blocks: [
          {
            title: "1. Усиление локального SEO",
            body: "Поисковики любят сайты, которые регулярно публикуют полезный локальный контент. Материалы про районы, инфраструктуру, заведения и услуги помогают занять больше позиций в поиске и укрепляют привязку сайта к региону.",
          },
          {
            title: "2. Привлечение органического трафика",
            body: "Люди ищут, где поесть, куда сходить, как выбрать услугу, что посмотреть в городе. Каждая статья - новая точка входа из поиска по таким запросам.",
          },
          {
            title: "3. Усиление доверия к бизнесу",
            body: "Когда компания пишет о своём городе, она демонстрирует, что «своя» для местных жителей, хорошо понимает контекст и может быть полезна не только как продавец, но и как эксперт и проводник.",
          },
        ],
      },
      {
        title: "Чего ожидать от городских статей",
        blocks: [
          {
            body: [
              "Постепенный, но стабильный рост поискового трафика в течение 3–6 месяцев.",
              "Рост показов и кликов по локальным запросам.",
              "Укрепление узнаваемости бренда как «локального эксперта».",
              "Повышение конверсий за счёт доверия к полезному контенту.",
              "Расширение охвата разных аудиторий: жителей, переехавших, туристов.",
            ],
          },
        ],
      },
      {
        title: "Как писать статьи про город: общая стратегия",
        blocks: [
          {
            title: "Шаг 1. Определите темы и запросы",
            body: "Исходите из того, что реально ищут люди: районы, инфраструктура, школы, детские сады, кафе, услуги, транспорт, цены и т.д. Для Беларуси актуальны темы про районы Минска (Центральный, Советский, Партизанский), областные центры (Гомель, Брест, Витебск, Могилёв, Гродно), метро и микрорайоны. Используйте поисковые подсказки и аналитику запросов, чтобы подобрать темы.",
          },
          {
            title: "Шаг 2. Свяжите темы с вашими услугами",
            body: "В каждом материале аккуратно и естественно подводите к тому, как ваш бизнес может помочь: не прямой рекламой, а через кейсы, примеры и советы.",
          },
          {
            title: "Шаг 3. Структурируйте статьи",
            body: "Используйте подзаголовки, списки, блоки «что важно знать», карты, подборки мест, примеры маршрутов и локальные советы.",
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по городскому контенту",
        blocks: [
          {
            title: "Как часто публиковать статьи?",
            body: "Оптимально - 2–4 материала в месяц с прицелом на долгосрочный рост. Важно поддерживать регулярность и обновлять старые статьи при изменении информации.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleCityContentStrategyChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "city-content-strategy-checklist",
          title: "",
          description: "",
          items: [
            "Определите темы и запросы, важные для жителей и гостей города.",
            "Пишите полезные, практичные материалы с локальным уклоном.",
            "Аккуратно связывайте контент с вашими услугами.",
            "Следите за трафиком и вовлечённостью, обновляйте удачные статьи.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "City-focused articles: why they matter for local SEO and how to do it right",
    lead: [
      "City-focused content is a strong local marketing asset. It supports local SEO, brings in organic traffic, and builds trust by showing you understand the city, its neighborhoods, and what people actually need.",
    ],
    sections: [
      {
        title: "Why write articles about life and services in your city",
        blocks: [
          {
            title: "1. Stronger local SEO",
            body: "Search engines reward sites that publish useful, location-relevant content. Posts about neighborhoods, local infrastructure, and local service decisions help you rank for more queries and reinforce geographic relevance.",
          },
          {
            title: "2. More organic traffic",
            body: "People search for where to eat, what to do, and how to choose a service in their area. Each article becomes a new entry point from search.",
          },
          {
            title: "3. More trust in your brand",
            body: "When a business writes about the city, it feels local and credible. You become more than a vendor-you become a helpful guide and an expert.",
          },
        ],
      },
      {
        title: "What to expect from city-focused content",
        blocks: [
          {
            body: [
              "Gradual but steady growth in organic traffic over 3–6 months.",
              "More impressions and clicks for local queries.",
              "Stronger brand recognition as a local expert.",
              "Higher conversion rates due to trust built through helpful content.",
              "Broader reach: locals, new residents, and visitors.",
            ],
          },
        ],
      },
      {
        title: "How to write city articles: a simple strategy",
        blocks: [
          {
            title: "Step 1. Pick topics people actually search",
            body: "Start with real intent: neighborhoods, schools, parks, transit, prices, local venues, and service decisions. For the U.S., think in terms of neighborhoods, “near me” areas, ZIP codes, and landmarks. Use search suggestions and query data to validate topics.",
          },
          {
            title: "Step 2. Connect topics to your services (naturally)",
            body: "In each post, connect the topic to how you can help-through examples, checklists, and local case studies, not aggressive sales copy.",
          },
          {
            title: "Step 3. Make articles scannable and practical",
            body: "Use headings, lists, ‘what to know’ blocks, maps/directions, local picks, and short itineraries. Practical structure improves engagement.",
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "How often should you publish?",
            body: "A realistic pace is 2–4 posts per month for compounding growth. Consistency matters more than volume. Refresh older posts as information changes.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleCityContentStrategyChecklist",
      title: "Checklist",
      steps: [
        {
          id: "city-content-strategy-checklist",
          title: "",
          description: "",
          items: [
            "Identify topics and queries that matter to locals and visitors.",
            "Write practical, genuinely helpful content with a local angle.",
            "Connect content to your services naturally (examples, cases, tips).",
            "Track traffic/engagement and update the posts that perform best.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "מאמרים עירוניים: למה זה חשוב ל‑SEO מקומי ואיך עושים את זה נכון",
    lead: [
      "תוכן עירוני הוא נכס חזק לקידום מקומי. הוא תומך ב‑SEO מקומי, מביא תנועה אורגנית ובונה אמון-כי הוא מראה שאתם מכירים את העיר, השכונות והצרכים של התושבים.",
    ],
    sections: [
      {
        title: "למה לכתוב מאמרים על החיים והשירותים בעיר",
        blocks: [
          {
            title: "1. חיזוק SEO מקומי",
            body: "מנועי חיפוש אוהבים אתרים שמפרסמים תוכן מקומי מועיל באופן קבוע. מאמרים על שכונות, תשתיות, מקומות ושירותים מחזקים רלוונטיות גאוגרפית ועוזרים לתפוס יותר ביטויים.",
          },
          {
            title: "2. יותר תנועה אורגנית",
            body: "אנשים מחפשים איפה לאכול, לאן לצאת, איך לבחור שירות ומה כדאי לדעת באזור. כל מאמר הוא נקודת כניסה נוספת מהחיפוש.",
          },
          {
            title: "3. יותר אמון",
            body: "כשעסק כותב על העיר-הוא נתפס מקומי, מבין הקשר ויכול להיות גם מקור ידע ולא רק ספק.",
          },
        ],
      },
      {
        title: "למה לצפות מתוכן עירוני",
        blocks: [
          {
            body: [
              "צמיחה הדרגתית אך יציבה בתנועה לאורך 3–6 חודשים.",
              "יותר חשיפות והקלקות על ביטויים מקומיים.",
              "חיזוק מותג כ‘מומחה מקומי’.",
              "שיפור המרות בזכות אמון שנבנה מתוכן מועיל.",
              "הרחבת קהלים: תושבים, מי שעבר לעיר ותיירים.",
            ],
          },
        ],
      },
      {
        title: "איך לכתוב מאמרים על העיר: אסטרטגיה פשוטה",
        blocks: [
          {
            title: "שלב 1. לבחור נושאים שאנשים באמת מחפשים",
            body: "להתבסס על כוונה אמיתית: שכונות, תחבורה, בתי ספר, פארקים, מחירים, מקומות בילוי ושירותים. בישראל זה יכול לכלול שכונות, אזורי תעסוקה, תחנות מרכזיות ונקודות ציון. להשתמש בהשלמות חיפוש ובנתוני חיפושים כדי לבחור נושאים.",
          },
          {
            title: "שלב 2. לקשר לשירותים בצורה טבעית",
            body: "בכל מאמר לקשר בעדינות איך אתם יכולים לעזור-דרך דוגמאות, טיפים וקייסים-not דרך פרסום אגרסיבי.",
          },
          {
            title: "שלב 3. לבנות מבנה קריא ומעשי",
            body: "להשתמש בכותרות, רשימות, בלוקים של ‘מה חשוב לדעת’, מפות/הגעה, המלצות מקומיות ומסלולים קצרים.",
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "כל כמה זמן לפרסם?",
            body: "קצב ריאלי הוא 2–4 מאמרים בחודש לצמיחה מצטברת. עקביות חשובה יותר מכמות. חשוב גם לעדכן מאמרים ישנים כשהמידע משתנה.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleCityContentStrategyChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "city-content-strategy-checklist",
          title: "",
          description: "",
          items: [
            "להגדיר נושאים וביטויים שחשובים לתושבים ולמבקרים.",
            "לכתוב תוכן פרקטי ומועיל עם זווית מקומית.",
            "לקשר את התוכן לשירותים בצורה טבעית (דוגמאות/קייסים/טיפים).",
            "לעקוב אחרי תנועה ומעורבות ולעדכן את המאמרים שמצליחים.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
