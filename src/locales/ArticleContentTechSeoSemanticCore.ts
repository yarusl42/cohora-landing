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
      "Что такое семантическое ядро (Keyword Research) и его сбор: полное руководство для бизнеса",
    lead: [
      "Семантическое ядро - это основа любой SEO‑стратегии, которая определяет, какие страницы создавать, какой контент писать и как строить структуру сайта.",
      "Многие собственники сайтов либо вообще не собирают семантику, либо делают это поверхностно: набросают несколько очевидных слов и на этом останавливаются.",
      "Правильно собранное семантическое ядро может в разы увеличить трафик и количество клиентов.",
    ],
    sections: [
      {
        title: "Что такое семантическое ядро",
        blocks: [
          {
            body: "Семантическое ядро - это база ключевых фраз, которые описывают тематику сайта и реальные поисковые намерения аудитории. В неё входят высоко‑, средне‑ и низкочастотные запросы, коммерческие и информационные фразы, локальные, брендовые и смежные запросы, а также запросы, по которым уже получают трафик ваши конкуренты.",
          },
        ],
      },
      {
        title: "Зачем бизнесу нужно семантическое ядро",
        blocks: [
          {
            title: "1. Построение правильной структуры сайта",
            body: "Ядро помогает понять, какие разделы, подкатегории, страницы услуг, информационные материалы и FAQ нужны на сайте. Без него структура создаётся «на глаз», что почти всегда ведёт к потере трафика.",
          },
          {
            title: "2. Увеличение количества точек входа",
            body: "Каждая группа запросов может стать отдельной посадочной страницей. Правильно собранное ядро позволяет охватить больше поисковых намерений и увеличить трафик в 2–5 раз.",
          },
          {
            title: "3. Снижение конкуренции",
            body: "Помимо ВЧ‑запросов ядро включает большое количество низкочастотных и уточняющих фраз, по которым проще продвигаться и которые часто приносят самых «тёплых» клиентов.",
          },
          {
            title: "4. Основа для контент‑плана",
            body: "Семантика показывает, «о чём писать» и «какие страницы нужны»: инструкции, обзоры, ответы на частые вопросы, сравнительные материалы и др.",
          },
        ],
      },
      {
        title: "Что даёт сбор семантического ядра",
        blocks: [
          {
            body: [
              "Полную базу ключевых слов под нишу и географию.",
              "Кластеризацию (группировку запросов по смыслу).",
              "Проект структуры сайта на основе кластеров.",
              "Подробный контент‑план для блога и информационных страниц.",
              "Приоритизацию страниц по скорости и силе эффекта.",
              "Аналитику конкурентных запросов и точек роста.",
            ],
          },
        ],
      },
      {
        title: "Как происходит сбор семантического ядра",
        blocks: [
          {
            title: "Шаг 1. Анализ ниши и продукта",
            body: "Изучаются тип бизнеса, продукты/услуги, география, сезонность и конкуренты. Это даёт понимание, какие темы и запросы будут ключевыми.",
          },
          {
            title: "Шаг 2. Сбор исходных запросов",
            body: "Используются идеи заказчика, поисковые подсказки, данные конкурентов и базовые инструменты (генераторы ключевых слов, подсказки Google/Яндекс и др.), чтобы собрать «скелет» семантики.",
          },
          {
            title: "Шаг 3. Расширение семантики",
            body: "Подбираются синонимы, уточнения, вопросы, локальные формулировки и смежные темы. Для белорусского рынка важно включать запросы с городами (Минск, Гомель, Брест, Витебск, Могилёв, Гродно) и районами.",
          },
          {
            title: "Шаг 4. Очистка и фильтрация",
            body: "Нерелевантные и «шумные» запросы удаляются, остаются только фразы, которые соответствуют бизнесу и приносят ценную аудиторию.",
          },
        ],
      },
      {
        title: "Кластеризация и структура сайта",
        blocks: [
          {
            title: "Группировка запросов",
            body: "Запросы объединяются в кластеры по смыслу: услуги, категории, информационные темы, FAQ, локальные и брендовые запросы. Каждый кластер = потенциальная страница или группа страниц.",
          },
          {
            title: "Построение структуры",
            body: "На базе кластеров формируется карта сайта: главная, разделы, подкатегории, карточки услуг/товаров, блог. Прописывается внутренняя иерархия и перелинковка.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Как часто обновлять ядро?",
            body: "Обычно ядро пересматривают раз в 6–12 месяцев или при изменениях ассортимента, географии и стратегии. Также стоит периодически добавлять новые запросы на основе фактической аналитики.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleSemanticCoreChecklist",
    steps: [
      {
        id: "semantic-core-checklist",
        title: "",
        description: "",
        items: [
          "Проанализируйте нишу, продукт и конкурентов.",
          "Соберите исходные запросы и расширьте их.",
          "Отфильтруйте нерелевантные фразы.",
          "Разбейте запросы на кластеры и постройте структуру сайта.",
          "Создайте контент‑план и регулярно дополняйте ядро новыми данными.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Semantic core (keyword research): a practical guide for businesses",
    lead: [
      "A semantic core (keyword set) is the foundation of an SEO strategy: it determines what pages to build, what content to write, and how to structure the site.",
      "Many businesses either skip keyword research or do it superficially. A well-built keyword set can multiply traffic and leads.",
    ],
    sections: [
      {
        title: "What a semantic core is",
        blocks: [
          {
            body: "It’s a structured list of keywords that reflect real search intent: high/medium/long-tail queries, commercial and informational terms, local and brand queries, and competitor-driven opportunities.",
          },
        ],
      },
      {
        title: "Why it matters",
        blocks: [
          {
            title: "1. Better site structure",
            body: "Keyword research shows which service pages, categories, and FAQs your site needs.",
          },
          {
            title: "2. More entry points",
            body: "Each cluster can become a landing page. A strong keyword set helps cover more intents and grow traffic.",
          },
          {
            title: "3. Less competition via long-tail",
            body: "Long-tail queries are often easier to rank and bring high-intent customers.",
          },
          {
            title: "4. Content roadmap",
            body: "It tells you what to publish: guides, comparisons, FAQs, and more.",
          },
        ],
      },
      {
        title: "What you get",
        blocks: [
          {
            body: [
              "A full keyword database for your niche and service area.",
              "Keyword clustering by intent.",
              "Draft site architecture.",
              "A content plan.",
              "Priority list of pages to build.",
              "Competitor keyword insights.",
            ],
          },
        ],
      },
      {
        title: "How keyword research is done",
        blocks: [
          {
            title: "Step 1. Analyze the business and competitors",
            body: "Define services, geo, seasonality, and the competitive landscape.",
          },
          {
            title: "Step 2. Collect seed keywords",
            body: "Use internal knowledge, search suggestions, competitor pages, and keyword tools.",
          },
          {
            title: "Step 3. Expand the list",
            body: "Add synonyms, modifiers, questions, and location variations (cities/neighborhoods) based on where you actually serve.",
          },
          {
            title: "Step 4. Clean and filter",
            body: "Remove irrelevant queries and keep only what matches the business and intent.",
          },
        ],
      },
      {
        title: "Clustering and site structure",
        blocks: [
          {
            title: "Grouping",
            body: "Group queries into clusters: services, categories, informational topics, FAQs, local pages, and brand queries.",
          },
          {
            title: "Architecture",
            body: "Use clusters to build a sitemap and internal linking plan.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you update the keyword set?",
            body: "Typically every 6–12 months, and whenever your offerings or service area changes. Add new terms from real analytics regularly.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleSemanticCoreChecklist",
    steps: [
      {
        id: "semantic-core-checklist",
        title: "",
        description: "",
        items: [
          "Analyze niche, offering, and competitors.",
          "Collect seed keywords and expand.",
          "Filter irrelevant terms.",
          "Cluster by intent and design site structure.",
          "Build a content plan and keep updating.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "ליבת מילות מפתח (Keyword Research): מדריך לעסקים",
    lead: [
      "ליבת מילות מפתח היא הבסיס ל‑SEO: היא קובעת אילו עמודים לבנות ואיזה תוכן לכתוב.",
      "מחקר מילות מפתח נכון יכול להגדיל תנועה ולידים בצורה משמעותית.",
    ],
    sections: [
      {
        title: "מה זה ליבה סמנטית",
        blocks: [
          {
            body: "זוהי רשימה מסודרת של שאילתות לפי כוונה: מסחרי, מידע, מקומי ועוד.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleSemanticCoreChecklist",
    steps: [
      {
        id: "semantic-core-checklist",
        title: "",
        description: "",
        items: [
          "לנתח נישה, שירותים ומתחרים.",
          "לאסוף ביטויים בסיסיים ולהרחיב.",
          "לסנן ביטויים לא רלוונטיים.",
          "לקבץ לפי כוונה ולבנות מבנה אתר.",
          "לבנות תוכנית תוכן ולעדכן באופן קבוע.",
        ],
      },
    ],
  },
};

export default content;
