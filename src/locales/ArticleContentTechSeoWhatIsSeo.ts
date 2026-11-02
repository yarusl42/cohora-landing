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
    title: "Что такое SEO‑оптимизация? Полное руководство для новичков",
    lead: [
      "SEO‑оптимизация - это системная работа над сайтом: контентом, структурой, техническим состоянием и ссылками. Цель - сделать сайт видимым в поиске и получать стабильный бесплатный трафик от людей, которым действительно нужны ваши услуги или товары.",
    ],
    sections: [
      {
        title: "Зачем бизнесу нужно SEO",
        blocks: [
          {
            title: "1. Бесплатный органический трафик",
            body: "В отличие от рекламы, которая работает только пока вы платите, SEO даёт долгосрочный поток посетителей. Оптимизированные страницы занимают позиции в топе и ежедневно приводят целевой трафик без дополнительных затрат за клик.",
          },
          {
            title: "2. Долгосрочный результат",
            body: "Хорошая статья может выйти в топ через несколько месяцев и приносить десятки посещений в день в течение лет. Это инвестиция в актив, который окупается многократно.",
          },
          {
            title: "3. Доверие к бренду",
            body: "Пользователи воспринимают сайты из топа как более надёжные и качественные. Наличие сайта в верхних позициях усиливает бренд и увеличивает конверсию в заявки и продажи.",
          },
          {
            title: "4. Улучшение самого сайта",
            body: "SEO включает работу над скоростью, удобством, структурой и контентом. В результате сайт становится более понятным и приятным для посетителей, а это напрямую влияет на прибыль.",
          },
        ],
      },
      {
        title: "Как работает SEO: три основных направления",
        blocks: [
          {
            title: "1. Внутренняя оптимизация (On‑page SEO)",
            body: "Это всё, что делается на самом сайте: подбор ключевых слов, написание полезного контента, настройка заголовков и мета‑тегов, структура страниц, внутренняя перелинковка, оптимизация изображений. Задача - сделать страницы понятными для поисковика и полезными для людей.",
          },
          {
            title: "2. Внешняя оптимизация (Off‑page SEO)",
            body: "Внешние факторы: ссылки с других сайтов, упоминания бренда, отзывы, социальные сигналы. Чем больше качественных рекомендаций, тем выше авторитет сайта в глазах поисковых систем.",
          },
          {
            title: "3. Техническое SEO",
            body: "Скорость загрузки, мобильная адаптивность, корректная индексация, отсутствие ошибок сервера, карта сайта и robots.txt - всё это техническая основа. Без неё даже лучший контент будет ранжироваться хуже.",
          },
        ],
      },
      {
        title: "Каких результатов можно ожидать от SEO",
        blocks: [
          {
            body: [
              "Через 1–2 месяца - подготовка, исправление ошибок, первые улучшения по низкочастотным запросам.",
              "Через 3–5 месяцев - заметный рост трафика и заявок, расширение семантики.",
              "Через 6–12 месяцев - выход ключевых страниц в топ‑10, рост органики на 50–200% и больше.",
              "Дальше - накопительный эффект: чем дольше идёт работа, тем сильнее позиции и бренд.",
            ],
          },
        ],
      },
      {
        title: "С чего начать SEO самостоятельно",
        blocks: [
          {
            title: "1. Техническая проверка",
            body: "Убедитесь, что сайт быстро загружается, корректно работает на мобильных, не выдаёт массовых ошибок и правильно индексируется.",
          },
          {
            title: "2. Семантическое ядро",
            body: "Соберите список ключевых запросов, по которым клиенты могут искать ваши услуги, и разложите их по разделам и страницам.",
          },
          {
            title: "3. Оптимизация ключевых страниц",
            body: "Проработайте главную, основные услуги/категории и контактную страницу: заголовки, текст, мета‑теги, структуру, внутренние ссылки.",
          },
          {
            title: "4. Контент‑маркетинг",
            body: "Запустите блог или раздел статей, где будете отвечать на вопросы клиентов, разбирать кейсы и давать полезные инструкции.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Когда ждать первых результатов?",
            body: "В среднем первые заметные изменения видны через 2–3 месяца, устойчивый рост - в течение 6–12 месяцев. В конкурентных нишах срок может быть дольше.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleSeoBasicsChecklist",
    steps: [
      {
        id: "seo-basics-checklist",
        title: "",
        description: "",
        items: [
          "Проверьте техническое состояние сайта.",
          "Соберите базовое семантическое ядро.",
          "Оптимизируйте ключевые страницы (главная, услуги, контакты).",
          "Начните регулярно публиковать полезный контент.",
          "Отслеживайте трафик, позиции и заявки, корректируйте стратегию.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "What is SEO? A practical beginner’s guide",
    lead: [
      "SEO (search engine optimization) is a system of improvements to your website-content, structure, technical health, and authority-so it becomes more visible in search and brings consistent free traffic from people who need your services or products.",
    ],
    sections: [
      {
        title: "Why businesses invest in SEO",
        blocks: [
          {
            title: "1. Free organic traffic",
            body: "Unlike ads that stop the moment you stop paying, SEO can build a long-term flow of visitors. Strong pages can rank and deliver qualified traffic every day without paying per click.",
          },
          {
            title: "2. Compounding returns",
            body: "A helpful article can start ranking in a few months and generate traffic for years. SEO is an investment that compounds.",
          },
          {
            title: "3. Brand trust",
            body: "People often trust top results more. Consistent visibility strengthens your brand and can increase leads and sales.",
          },
          {
            title: "4. A better website overall",
            body: "SEO pushes you to improve speed, usability, structure, and clarity-making your site easier to use and more profitable.",
          },
        ],
      },
      {
        title: "How SEO works: three core areas",
        blocks: [
          {
            title: "1. On-page SEO",
            body: "Everything you do on the site: keyword research, helpful content, titles/meta descriptions, page structure, internal linking, and image optimization. The goal is to make pages understandable for search engines and genuinely useful for users.",
          },
          {
            title: "2. Off-page SEO",
            body: "Signals outside your site: links, brand mentions, reviews, and other trust signals. High-quality references improve authority.",
          },
          {
            title: "3. Technical SEO",
            body: "Site speed, mobile usability, clean indexing, server stability, sitemaps, and robots.txt form the technical foundation. Without it, even great content can underperform.",
          },
        ],
      },
      {
        title: "What results to expect from SEO",
        blocks: [
          {
            body: [
              "Month 1–2: setup, fixing issues, and first wins on low-competition queries.",
              "Month 3–5: noticeable traffic and lead growth, broader keyword coverage.",
              "Month 6–12: key pages reaching top 10 and meaningful organic growth.",
              "After that: compounding effect as your site earns more trust and coverage.",
            ],
          },
        ],
      },
      {
        title: "How to start doing SEO yourself",
        blocks: [
          {
            title: "1. Technical basics",
            body: "Make sure the site loads fast, works well on mobile, doesn’t have widespread errors, and can be indexed properly.",
          },
          {
            title: "2. Keyword research",
            body: "Build a list of queries customers use to find your services, and map them to pages.",
          },
          {
            title: "3. Optimize key pages",
            body: "Start with your homepage, core service pages, and contact page: headings, copy, metadata, structure, and internal links.",
          },
          {
            title: "4. Publish helpful content",
            body: "Create a blog or resource section to answer customer questions, share case studies, and publish step-by-step guides.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "When will I see results?",
            body: "Typically you’ll see early changes in 2–3 months, with stronger and more stable growth in 6–12 months. Competitive niches can take longer.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleSeoBasicsChecklist",
    steps: [
      {
        id: "seo-basics-checklist",
        title: "",
        description: "",
        items: [
          "Check the technical health of your website.",
          "Build a basic keyword list for your services.",
          "Optimize key pages (home, services, contact).",
          "Publish helpful content consistently.",
          "Track traffic, rankings, and leads-and adjust your approach.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "מה זה SEO? מדריך פרקטי למתחילים",
    lead: [
      "SEO (אופטימיזציה למנועי חיפוש) היא עבודה שיטתית על האתר - תוכן, מבנה, מצב טכני וסמכות - כדי להגדיל נראות בחיפוש ולהביא תנועה אורגנית לאורך זמן.",
    ],
    sections: [
      {
        title: "למה לעסק צריך SEO",
        blocks: [
          {
            title: "1. תנועה אורגנית ללא תשלום",
            body: "בניגוד לפרסום שעובד רק כל עוד משלמים, SEO יכול לייצר זרם לקוחות לאורך זמן דרך חיפוש.",
          },
          {
            title: "2. תוצאה מצטברת",
            body: "מאמר טוב יכול להתחיל להביא תנועה אחרי כמה חודשים ולהמשיך שנים. זו השקעה שמצטברת.",
          },
          {
            title: "3. אמון במותג",
            body: "גולשים נוטים לסמוך יותר על תוצאות עליונות. נראות עקבית מחזקת מותג ומגדילה פניות.",
          },
          {
            title: "4. אתר טוב יותר",
            body: "SEO משפר מהירות, נוחות, מבנה ובהירות - וזה משפיע ישירות על ביצועים עסקיים.",
          },
        ],
      },
      {
        title: "איך SEO עובד: 3 תחומים מרכזיים",
        blocks: [
          {
            title: "1. On‑page SEO",
            body: "כל מה שקורה באתר: מחקר מילות מפתח, תוכן שימושי, כותרות ומטא, מבנה עמודים, קישורים פנימיים ואופטימיזציה לתמונות.",
          },
          {
            title: "2. Off‑page SEO",
            body: "גורמים מחוץ לאתר: קישורים, אזכורים, ביקורות וסיגנלי אמון.",
          },
          {
            title: "3. SEO טכני",
            body: "מהירות, מובייל, אינדוקס תקין, שגיאות שרת, sitemap ו‑robots.txt. בלי בסיס טכני גם תוכן טוב יכול להיפגע.",
          },
        ],
      },
      {
        title: "למה לצפות מתהליך SEO",
        blocks: [
          {
            body: [
              "חודש 1–2: הכנה, תיקון תקלות והתקדמות ראשונית.",
              "חודש 3–5: יותר תנועה ופניות, הרחבת כיסוי ביטויים.",
              "חודש 6–12: עמודים מרכזיים מגיעים לטופ‑10 וגידול אורגני משמעותי.",
            ],
          },
        ],
      },
      {
        title: "איך להתחיל לבד",
        blocks: [
          {
            title: "1. טכני",
            body: "לוודא שהאתר מהיר, מותאם למובייל, ללא שגיאות נפוצות, ומאונדקס נכון.",
          },
          {
            title: "2. מילות מפתח",
            body: "לבנות רשימת ביטויים שלקוחות משתמשים בהם ולמפות לעמודים.",
          },
          {
            title: "3. עמודים חשובים",
            body: "להתחיל מהעמוד הראשי, עמודי שירות, ועמוד יצירת קשר: כותרות, טקסט, מטא, ומבנה.",
          },
          {
            title: "4. תוכן שימושי",
            body: "לפתח תוכן שעונה על שאלות נפוצות ומדריכים פרקטיים.",
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "בדרך כלל רואים סימנים ראשונים אחרי 2–3 חודשים, וצמיחה יציבה יותר אחרי 6–12 חודשים. בנישות תחרותיות זה עשוי לקחת יותר זמן.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleSeoBasicsChecklist",
    steps: [
      {
        id: "seo-basics-checklist",
        title: "",
        description: "",
        items: [
          "לבדוק מצב טכני של האתר.",
          "לבנות רשימת מילות מפתח בסיסית.",
          "לאופטם עמודים מרכזיים (בית/שירותים/יצירת קשר).",
          "לפרסם תוכן שימושי באופן קבוע.",
          "לעקוב אחרי תנועה, דירוגים ופניות ולשפר.",
        ],
      },
    ],
  },
};

export default content;
