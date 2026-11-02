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
    title: "Кластеризация ключевых запросов: полное руководство",
    lead: [
      "Кластеризация ключевых слов - это процесс группировки семантически связанных запросов в одну группу для создания одной страницы, которая будет оптимизирована под все эти запросы.",
      "Это одно из основных направлений современного SEO, которое помогает строить эффективную структуру сайта и создавать контент, который отвечает на множество связанных запросов одновременно.",
    ],
    sections: [
      {
        title: "Что такое кластеризация ключевых запросов",
        blocks: [
          {
            body: "Кластеризация - это группировка ключевых фраз по смыслу, поисковому намерению и типу будущей страницы. Каждый кластер превращается в отдельную страницу или группу страниц, которая максимально точно отвечает на запросы пользователей.",
          },
        ],
      },
      {
        title: "Зачем нужна кластеризация",
        blocks: [
          {
            title: "1. Формирование структуры сайта",
            body: "На основе кластеров выстраиваются разделы, подкатегории, страницы услуг, статьи и FAQ. Сайт перестаёт быть «лоскутным» и получает логичную, масштабируемую структуру.",
          },
          {
            title: "2. Повышение релевантности страниц",
            body: "Одна страница - один чёткий кластер запросов. Такой документ проще продвинуть в топ, он получает более целевой трафик и лучше конвертирует посетителей.",
          },
          {
            title: "3. Избежание каннибализации",
            body: "Без кластеризации несколько страниц могут конкурировать за один и тот же запрос. В результате позиции «скачут», а трафик размазывается. Правильная группировка запросов исключает эту проблему.",
          },
          {
            title: "4. Карта контента и рост конверсии",
            body: "Каждый кластер = будущая страница или статья. Появляется понятный контент‑план, а страницы, заточенные под конкретный интент, лучше конвертируют посетителей в клиентов.",
          },
        ],
      },
      {
        title: "Что даёт услуга кластеризации",
        blocks: [
          {
            body: [
              "Набор чётких кластеров ключевых запросов.",
              "Черновой вариант структуры сайта.",
              "Карту интентов (коммерческий, информационный, локальный, навигационный).",
              "Список приоритетных страниц под создание и доработку.",
              "Рекомендации для копирайтера по каждому кластеру.",
            ],
          },
        ],
      },
      {
        title: "Как выполняется кластеризация на практике",
        blocks: [
          {
            title: "Шаг 1. Подготовка семантики",
            body: "Берётся уже собранное семантическое ядро: очищенные, отфильтрованные запросы по нише, географии и продукту.",
          },
          {
            title: "Шаг 2. Анализ выдачи (SERP)",
            body: "Для ключевых запросов анализируется поисковая выдача: какие типы страниц ранжируются, коммерческий или информационный интент, локальная привязка и структура конкурирующих документов.",
          },
          {
            title: "Шаг 3. Группировка запросов по смыслу и интенту",
            body: "Запросы объединяются в кластеры, где совпадают тема, тип страницы и поисковое намерение. Разделяются коммерческие, информационные, локальные, брендовые и навигационные группы.",
          },
          {
            title: "Шаг 4. Формирование структуры сайта",
            body: "На основании кластеров проектируется структура: главные разделы, подкатегории, страницы услуг, информационный раздел и FAQ.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Когда делать кластеризацию?",
            body: "Сразу после сбора и очистки семантического ядра и перед активной разработкой структуры и контента. При значительных изменениях ассортимента и ниши кластеризацию стоит пересматривать.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleKeywordClusteringChecklist",
    steps: [
      {
        id: "keyword-clustering-checklist",
        title: "",
        description: "",
        items: [
          "Подготовьте очищенное семантическое ядро.",
          "Проанализируйте SERP для ключевых запросов.",
          "Разделите запросы по интентам и смысловым группам.",
          "Сформируйте структуру сайта на основе кластеров.",
          "Создайте ТЗ для копирайтера по ключевым кластерам.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Keyword clustering: a practical guide",
    lead: [
      "Keyword clustering is the process of grouping semantically related queries so you can build one page that targets the entire group.",
      "It’s a core part of modern SEO because it helps you design a clean site structure and create content that matches multiple closely related searches.",
    ],
    sections: [
      {
        title: "What keyword clustering is",
        blocks: [
          {
            body: "Clustering groups keywords by meaning, search intent, and the correct page type. Each cluster becomes a dedicated page (or a small group of pages) that best answers the user’s intent.",
          },
        ],
      },
      {
        title: "Why it matters",
        blocks: [
          {
            title: "1. Better site structure",
            body: "Clusters turn into categories, service pages, blog topics, and FAQs. Instead of a patchwork site, you get a scalable structure.",
          },
          {
            title: "2. Higher relevance",
            body: "One page → one clear cluster. It’s easier to rank and usually converts better.",
          },
          {
            title: "3. Less cannibalization",
            body: "Without clustering, multiple pages may compete for the same query, causing unstable rankings and diluted traffic.",
          },
          {
            title: "4. Content roadmap",
            body: "Each cluster becomes a planned page or article-creating a clear content map aligned with intent.",
          },
        ],
      },
      {
        title: "What you get from a clustering project",
        blocks: [
          {
            body: [
              "A list of clean keyword clusters.",
              "A draft site structure.",
              "Intent map (commercial, informational, local, navigational).",
              "A priority list of pages to build or improve.",
              "Writer guidelines per cluster.",
            ],
          },
        ],
      },
      {
        title: "How clustering is done (step by step)",
        blocks: [
          {
            title: "Step 1. Prepare your keyword set",
            body: "Start with a cleaned and filtered keyword list aligned with your niche, geo, and product/service offering.",
          },
          {
            title: "Step 2. SERP analysis",
            body: "Check what ranks: page types, intent, local pack presence, and competitor structure.",
          },
          {
            title: "Step 3. Group by meaning and intent",
            body: "Combine queries when topic + page type + intent match. Split clusters into commercial, informational, local, brand, and navigational groups.",
          },
          {
            title: "Step 4. Build site architecture",
            body: "Use clusters to design sections, subcategories, service pages, blog topics, and FAQs.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "When should you do clustering?",
            body: "Right after keyword research and cleanup-before you build the structure and content. Revisit clustering after major changes to offering or focus.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleKeywordClusteringChecklist",
    steps: [
      {
        id: "keyword-clustering-checklist",
        title: "",
        description: "",
        items: [
          "Prepare a cleaned keyword list.",
          "Review SERPs for core queries.",
          "Group by intent and meaning.",
          "Design site structure based on clusters.",
          "Create content briefs for key clusters.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "קלאסטרינג של מילות מפתח: מדריך פרקטי",
    lead: [
      "קלאסטרינג הוא תהליך של קיבוץ שאילתות דומות כך שאפשר לבנות עמוד אחד שמכסה את כולן.",
      "זה בסיס ל‑SEO מודרני כי הוא מייצר מבנה אתר ברור ותוכן שמותאם לכוונת חיפוש.",
    ],
    sections: [
      {
        title: "מה זה קלאסטרינג",
        blocks: [
          {
            body: "מקבצים שאילתות לפי משמעות, כוונה וסוג עמוד נכון. כל קלאסטר הופך לעמוד ייעודי שמענה על הכוונה.",
          },
        ],
      },
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "1. מבנה אתר",
            body: "קלאסטרים הופכים לקטגוריות, שירותים, מאמרים ו‑FAQ - מבנה שניתן להרחבה.",
          },
          {
            title: "2. רלוונטיות",
            body: "עמוד אחד לכוונה אחת - קל יותר לקדם וממיר טוב יותר.",
          },
          {
            title: "3. הימנעות מקניבליזציה",
            body: "בלי קלאסטרינג, עמודים מתחרים על אותו ביטוי והדירוגים לא יציבים.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "מתי לעשות קלאסטרינג?",
            body: "מיד אחרי מחקר מילות מפתח וניקוי הרשימה, לפני בניית מבנה ותוכן.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleKeywordClusteringChecklist",
    steps: [
      {
        id: "keyword-clustering-checklist",
        title: "",
        description: "",
        items: [
          "להכין רשימת מילות מפתח נקייה.",
          "לנתח SERP לביטויים מרכזיים.",
          "לחלק לפי כוונה ומשמעות.",
          "לבנות מבנה אתר לפי קלאסטרים.",
          "להכין בריפים לתוכן לקלאסטרים חשובים.",
        ],
      },
    ],
  },
};

export default content;
