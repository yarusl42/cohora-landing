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
      "Оптимизация мета‑тегов (Title, Description): зачем это нужно, чего ожидать и как правильно делать для максимального SEO‑эффекта",
    lead: [
      "Мета‑теги - это одно из основных орудий SEO, которое помогает поисковым системам понять, о чём страница, и пользователям - принять решение о переходе по ссылке.",
      "Многие владельцы сайтов либо вообще не заполняют мета‑теги, либо делают это формально: копируют один текст на все страницы или пишут слишком общие описания.",
      "Правильно настроенные мета‑теги могут заметно повысить кликабельность ссылок в поиске и помочь сайту лучше ранжироваться.",
    ],
    sections: [
      {
        title: "Зачем оптимизировать Title и Description",
        blocks: [
          {
            title: "1. Влияние на позиции",
            body: "Title - один из ключевых факторов ранжирования. Слишком короткий, длинный, нерелевантный или без ключевых слов заголовок снижает шансы попасть в топ. Хорошо составленный Title помогает поисковику лучше понять тему страницы и усиливает её релевантность по целевым запросам.",
          },
          {
            title: "2. Влияние на CTR и поведение",
            body: "Совокупность Title + Description формирует сниппет в выдаче и напрямую влияет на CTR. CTR - сигнал качества: если по вашему результату кликают чаще, чем по конкурентам, поисковики воспринимают его как более подходящий и со временем повышают позиции.",
          },
          {
            title: "3. Выделение среди конкурентов",
            body: "Большинство сайтов используют скучные или автоматически сгенерированные мета‑теги. Уникальный, продуманный сниппет помогает выделиться, даже если позиции пока не идеальны.",
          },
          {
            title: "4. Рост органической конверсии",
            body: "Хороший Title/Description - это мини‑продажа: вы обозначаете выгоду, снимаете часть возражений и подталкиваете к клику. Даже без роста позиций можно увеличить количество целевого трафика только за счёт улучшения CTR.",
          },
        ],
      },
      {
        title: "Чего ожидать после оптимизации мета‑тегов",
        blocks: [
          {
            body: [
              "Рост CTR на позициях 3–10 на 20–150% при замене скучных/авто‑Title на проработанные.",
              "Постепенный рост позиций за счёт более высокого CTR и лучшей релевантности.",
              "Увеличение органического трафика: от +10–50% для локальных услуг до +50–300% при массовой оптимизации контент‑проектов.",
              "Более целевая аудитория и улучшение поведенческих метрик (меньше отказов, больше времени на сайте).",
            ],
          },
        ],
      },
      {
        title: "Алгоритм оптимизации Title и Description",
        blocks: [
          {
            title: "Шаг 1. Определите основной ключевой запрос",
            body: "Для каждой страницы нужен главный запрос, который лучше всего описывает её суть: услуга, категория, статья или регион. Он ляжет в основу Title и частично - в Description.",
          },
          {
            title: "Шаг 2. Подберите уточнения",
            body: "Для коммерческих страниц это могут быть «цены», «выезд», «гарантия», «круглосуточно»; для контента - «что это», «как выбрать», «пошаговое руководство». Эти уточнения делают сниппет более полезным и кликабельным.",
          },
          {
            title: "Шаг 3. Составьте Title по правилам SEO",
            body: "Рекомендуемая длина - до ~60 символов (оптимально 45–55), с включением главного ключа и одного‑двух уточнений. Title должен быть уникальным, конкретным и по возможности продающим, а не просто «категория | сайт».",
          },
          {
            title: "Шаг 4. Напишите Description, который дополняет Title",
            body: "Описание - место для выгоды, конкретики и мягкого призыва к действию. Длина - 120–160 символов (важнее смысл, чем точные цифры). Используйте естественный язык, добавьте часть ключей, но не превращайте Description в «список фраз».",
          },
        ],
      },
      {
        title: "Формулы и примеры для разных типов страниц",
        blocks: [
          {
            title: "Услуги",
            body: [
              "Формула Title: [Услуга] в [городе/районе] - [ключевое преимущество/уточнение].",
              "Пример: «Ремонт холодильников в Минске - выезд мастера за 30 минут».",
            ],
          },
          {
            title: "Контент/статьи",
            body: [
              "Формула Title: [Тема] - [что это/как выбрать/пошаговое руководство].",
              "Пример: «Оптимизация мета‑тегов Title и Description - полное руководство для локального SEO».",
            ],
          },
          {
            title: "Категории товаров",
            body: "Формула Title: Купить [товар] в [городе] - [цены/доставка/официальный дилер].",
          },
        ],
      },
      {
        title: "Практические советы и типичные ошибки",
        blocks: [
          {
            title: "Советы",
            body: [
              "Думайте о сниппете как о мини‑объявлении: кому вы, что предлагаете и почему кликать нужно именно по вам.",
              "Используйте главный ключ в начале Title, если это выглядит естественно.",
              "Делайте Description конкретным: цифры, сроки, выгоды, формат работы.",
              "Проводите A/B‑тестирование мета‑тегов на страницах с большим трафиком.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Дублирование одинаковых Title/Description на десятках страниц.",
              "Переспам ключевыми словами и нечитаемые заголовки.",
              "Слишком общие фразы: «Главная», «Услуги компании», «Каталог товаров».",
              "Авто‑генерация сниппетов без ручной доработки для важных страниц.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Как часто пересматривать мета‑теги?",
            body: "Минимум раз в 6–12 месяцев, а также при значимых изменениях контента, услуг, цен или позиционирования. Для страниц с большим трафиком имеет смысл тестировать варианты чаще.",
          },
          {
            title: "Нужно ли оптимизировать все страницы?",
            body: "В приоритете - главная, ключевые услуги/категории, региональные страницы и лид‑магниты. Для второстепенных страниц можно использовать более простые шаблоны.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleMetaTagsChecklist",
    steps: [
      {
        id: "meta-tags-checklist",
        title: "",
        description: "",
        items: [
          "Определите главный запрос и уточнения для каждой важной страницы.",
          "Составьте уникальный Title (до ~60 символов) с ключом и ценностью.",
          "Напишите конкретный Description с выгодой и мягким CTA.",
          "Избегайте дубликатов и спама ключевыми словами.",
          "Отслеживайте CTR и трафик, тестируйте и улучшайте сниппеты.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Meta tag optimization (Title & Description): why it matters and how to do it right",
    lead: [
      "Meta tags help search engines understand a page and help users decide whether to click. Many sites either leave meta tags empty or treat them as a formality (copying the same text everywhere).",
      "Well-written Titles and Descriptions can significantly improve click-through rate and support better rankings.",
    ],
    sections: [
      {
        title: "Why optimize Title and Description",
        blocks: [
          {
            title: "1. Ranking impact",
            body: "Title is one of the strongest on-page ranking signals. If it’s too short, too long, irrelevant, or missing key terms, it hurts relevance.",
          },
          {
            title: "2. CTR and behavior",
            body: "Title + Description form your snippet. Higher CTR can be interpreted as a quality signal and may support better performance over time.",
          },
          {
            title: "3. Stand out from competitors",
            body: "Many listings look generic or auto-generated. A clear, specific snippet can win clicks even if your ranking isn’t #1 yet.",
          },
          {
            title: "4. Higher organic conversion",
            body: "A great snippet is a mini sales pitch: highlight value, reduce doubts, and add a soft CTA.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "20–150% CTR lift for positions 3–10 when replacing weak snippets.",
              "Gradual ranking gains due to improved relevance and engagement.",
              "Organic traffic growth (often +10–50% for local service pages).",
              "More qualified traffic and improved on-site behavior.",
            ],
          },
        ],
      },
      {
        title: "A practical workflow",
        blocks: [
          {
            title: "Step 1. Define the primary query",
            body: "Every important page needs one main query that best describes it (service, category, article, location).",
          },
          {
            title: "Step 2. Add qualifiers",
            body: "For service pages: pricing, same-day, warranty, free estimate. For content: ‘what it is’, ‘how to choose’, ‘step-by-step’.",
          },
          {
            title: "Step 3. Write an SEO-friendly Title",
            body: "Aim for ~45–60 characters when possible. Include the primary term and one qualifier. Keep it specific and human.",
          },
          {
            title: "Step 4. Write a complementary Description",
            body: "Use 120–160 characters as a guideline. Add benefits and clarity, include keywords naturally, and add a soft CTA.",
          },
        ],
      },
      {
        title: "Formulas and examples",
        blocks: [
          {
            title: "Services",
            body: [
              "Title formula: [Service] in [City] - [benefit/qualifier].",
              "Example: “Refrigerator repair in Minneapolis - same-day service”.",
            ],
          },
          {
            title: "Articles",
            body: [
              "Title formula: [Topic] - [what it is/how to/step-by-step].",
              "Example: “Title and meta description optimization - practical guide”.",
            ],
          },
          {
            title: "Product categories",
            body: "Title formula: Buy [Product] in [City] - [pricing/shipping/authorized dealer].",
          },
        ],
      },
      {
        title: "Tips and mistakes",
        blocks: [
          {
            title: "Tips",
            body: [
              "Treat the snippet like an ad: who it’s for, what you offer, and why click.",
              "Put the main keyword early when natural.",
              "Make Descriptions specific (numbers, timelines, benefits).",
              "Test variations on high-traffic pages.",
            ],
          },
          {
            title: "Mistakes",
            body: [
              "Duplicate Titles/Descriptions across many pages.",
              "Keyword stuffing.",
              "Generic labels like “Home”, “Services”, “Catalog”.",
              "Fully auto-generated snippets for important pages.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you review meta tags?",
            body: "At least every 6–12 months, and after meaningful changes to services, pricing, or positioning. For high-traffic pages, test more often.",
          },
          {
            title: "Do you need to optimize every page?",
            body: "Prioritize your homepage, key service/category pages, location pages, and high-intent content. Use simple templates for lower-priority pages.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleMetaTagsChecklist",
    steps: [
      {
        id: "meta-tags-checklist",
        title: "",
        description: "",
        items: [
          "Identify the primary query + qualifiers for each important page.",
          "Write a unique Title (~45–60 chars) with keyword + value.",
          "Write a specific Description with benefits and a soft CTA.",
          "Avoid duplicates and keyword stuffing.",
          "Track CTR and iterate.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "אופטימיזציה למטא תגיות (Title, Description): למה זה חשוב ואיך עושים נכון",
    lead: [
      "מטא תגיות עוזרות למנוע חיפוש להבין עמוד ולמשתמש להחליט אם להקליק. הרבה אתרים לא ממלאים מטא תגיות או מעתיקים אותו טקסט לכל העמודים.",
      "Title ו‑Description טובים יכולים לשפר CTR ולעזור לרלוונטיות.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "1. השפעה על דירוג",
            body: "Title הוא סיגנל חזק. טייטל לא רלוונטי או חסר מילות מפתח פוגע.",
          },
          {
            title: "2. CTR",
            body: "הסניפט משפיע על הקלקות. יותר הקלקות יכולה לשפר ביצועים לאורך זמן.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleMetaTagsChecklist",
    steps: [
      {
        id: "meta-tags-checklist",
        title: "",
        description: "",
        items: [
          "להגדיר ביטוי ראשי לכל עמוד.",
          "לכתוב Title ייחודי עם ערך.",
          "לכתוב Description ברור עם תועלת ו‑CTA עדין.",
          "להימנע מכפילויות וספאם.",
          "לעקוב אחרי CTR ולשפר.",
        ],
      },
    ],
  },
};

export default content;
