export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  sections: ArticleSection[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "SEO-копирайтинг: создание релевантного контента, который ранжируется и продаёт",
    lead: [
      "Современное SEO давно перестало быть набором ключевых слов в тексте. Поисковые системы оценивают полезность, глубину раскрытия темы, экспертность, структуру, поведение пользователей и соответствие намерению запроса. SEO-копирайтинг - это создание текстов, которые одновременно помогают пользователю, соответствуют алгоритмам и приносят бизнесу деньги.",
    ],
    sections: [
      {
        title: "Что такое SEO-копирайтинг",
        blocks: [
          {
            body: "SEO-копирайтинг - это создание оптимизированных текстов, которые решают задачу пользователя, подходят под требования поисковых алгоритмов и работают на конверсию. Это баланс между «писать для людей» и «учитывать роботов», основанный на аналитике запросов и конкурентной среды.",
          },
          {
            title: "Ключевые задачи SEO-текста",
            body: [
              "ответить на вопрос или закрыть потребность пользователя;",
              "быть релевантным поисковому запросу и интенту;",
              "помочь странице попасть в ТОП по целевым ключам;",
              "стимулировать целевое действие: заявку, звонок, заказ, запись.",
            ],
          },
        ],
      },
      {
        title: "Зачем бизнесу нужен SEO-копирайтинг",
        blocks: [
          {
            title: "1. Продвижение в поиске",
            body: "Поисковые системы ранжируют страницы по тому, насколько хорошо текст отвечает на запрос. Важно, чтобы материал был полным, структурированным, экспертным и полезным. Без этого страница не сможет стабильно находиться в ТОП, даже при наличии ссылок и технической оптимизации.",
          },
          {
            title: "2. Рост органического трафика",
            body: "Каждая оптимизированная страница - новая точка входа трафика: статьи, инструкции, страницы услуг, коммерческие описания, FAQ. Чем больше качественных текстов по нужным темам, тем больше пользователей приходит из поиска без рекламы.",
          },
          {
            title: "3. Улучшение поведенческих показателей",
            body: "Хороший текст удерживает внимание, снижает показатель отказов, увеличивает время на странице и стимулирует переходы по сайту. Эти сигналы алгоритмы используют как показатель качества, что помогает странице расти в выдаче.",
          },
          {
            title: "4. Рост продаж и заявок",
            body: "SEO-копирайтинг включает не только ключевые слова, но и офферы, работу с болями и выгодами, триггеры доверия, правильные призывы к действию. Такой текст работает как «онлайн-менеджер»: объясняет, снимает сомнения и подводит к целевому действию.",
          },
          {
            title: "5. Формирование экспертности (E‑E‑A‑T)",
            body: "Google и другие поисковые системы оценивают опыт, экспертность, авторитетность и надёжность. Тексты, которые демонстрируют реальный опыт, ссылаются на источники, содержат полезные данные и оформлены структурировано, усиливают репутацию сайта и помогают ранжироваться в конкурентных нишах.",
          },
        ],
      },
      {
        title: "Чего ожидать от профессионального SEO-копирайтинга",
        blocks: [
          {
            title: "Рост позиций по ключевым запросам",
            body: "Оптимизированные тексты помогают страницам подниматься выше по целевым запросам, захватывать новые вариации и хвосты запросов, усиливать видимость сайта в целом.",
          },
          {
            title: "Увеличение трафика и конверсий",
            body: "Каждый качественный текст - это не только новый трафик, но и дополнительные обращения. Правильная подача информации и чёткие призывы к действию повышают конверсию из поисковых запросов в звонки, заявки и заказы.",
          },
          {
            title: "Улучшение индексации и структуры",
            body: "При продуманном подходе SEO-копирайтинг помогает выстроить логичную структуру сайта: кластеры страниц, внутреннюю перелинковку, навигацию. Это ускоряет индексацию и облегчает работу поисковым роботам.",
          },
        ],
      },
      {
        title: "Как создаётся SEO-текст: пошаговый процесс",
        blocks: [
          {
            title: "Шаг 1. Анализ ниши и конкурентов",
            body: "Сначала изучаются страницы конкурентов в ТОПе: темы, глубина раскрытия, структура, наличие блоков с отзывами, FAQ, преимуществами. Это помогает понять минимальный уровень качества, который нужно превзойти, чтобы обогнать их в выдаче.",
          },
          {
            title: "Шаг 2. Подбор ключевых запросов",
            body: "Определяются основной запрос, дополнительные ключевые слова, связанные фразы и вопросы из подсказок. Для белорусского рынка важно учитывать локальные запросы с городами (Минск, Гомель, Брест, Витебск), районами и особенности местного поиска. Важно учитывать не только частотность, но и намерение пользователя: информационное, коммерческое или смешанное.",
          },
          {
            title: "Шаг 3. Определение интента",
            body: "Понимание того, что именно хочет получить пользователь (ответ, сравнение, инструкцию, предложение услуги), позволяет выстроить правильную логику текста, подобрать формат (обзор, чек‑лист, лендинг, руководство) и расставить акценты.",
          },
          {
            title: "Шаг 4. Создание структуры текста",
            body: "Составляется скелет материала: заголовки H1–H3, блоки, списки, таблицы, выделения. Структура должна быть логичной, отражать ключевые вопросы пользователя и помогать алгоритмам понимать, о чём страница.",
          },
          {
            title: "Шаг 5. Написание черновика с упором на пользу",
            body: "На этом этапе важно раскрыть тему максимально полно, приводя примеры, сценарии, инструкции, ошибки и практические советы. Ключевые фразы вписываются естественно, без переспама и искусственных конструкций.",
          },
          {
            title: "Шаг 6. SEO-редактирование и доработка",
            body: "После написания текст проверяется на уникальность, читабельность, плотность ключей, корректность заголовков и метатегов. Добавляются внутренние ссылки на релевантные разделы сайта, уточняются офферы и призывы к действию.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "SEO-копирайтинг - это фундамент долгосрочного продвижения. Качественные тексты помогают сайту занимать высокие позиции, приводить стабильный поток целевых посетителей и превращать их в клиентов. При системной работе над контентом сайт постепенно становится сильным информационным и коммерческим ресурсом в своей нише.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "SEO copywriting: creating content that ranks and converts",
    lead: [
      "Modern SEO is no longer about stuffing keywords into text. Search engines evaluate usefulness, depth, expertise, structure, user behavior, and intent match. SEO copywriting is the craft of writing content that helps users, aligns with ranking systems, and drives revenue.",
    ],
    sections: [
      {
        title: "What is SEO copywriting?",
        blocks: [
          {
            body: "SEO copywriting is the creation of optimized content that solves the user’s task, matches search intent, and supports conversions. It’s a balance between writing for people and structuring content so search engines can understand it-based on keyword research and competitive analysis.",
          },
          {
            title: "Core goals of an SEO text",
            body: [
              "Answer a question or satisfy a user need;",
              "Match the query and intent;",
              "Help a page rank for target keywords;",
              "Drive a desired action: a call, a form submission, a purchase, a booking.",
            ],
          },
        ],
      },
      {
        title: "Why businesses need SEO copywriting",
        blocks: [
          {
            title: "1. Better search rankings",
            body: "Search engines rank pages by how well the content answers the query. To compete, content should be complete, structured, and genuinely helpful. Without that, a page struggles to hold top positions even with technical SEO and links.",
          },
          {
            title: "2. More organic traffic",
            body: "Every optimized page becomes a new entry point: articles, how-tos, service pages, commercial descriptions, FAQs. The more high-quality pages you publish, the more traffic you can earn without additional ad spend.",
          },
          {
            title: "3. Stronger behavioral signals",
            body: "Good content keeps attention, lowers bounce rate, increases time on page, and encourages deeper navigation. These signals often correlate with improved search performance.",
          },
          {
            title: "4. More leads and sales",
            body: "SEO copywriting isn’t just keywords-it’s offers, pain points, benefits, trust triggers, and clear CTAs. A strong page acts like an online salesperson: it explains, reduces doubts, and moves the user toward action.",
          },
          {
            title: "5. Demonstrating E‑E‑A‑T",
            body: "Google and other engines evaluate Experience, Expertise, Authoritativeness, and Trust. Content that reflects real-world experience, references credible sources, and is well-structured strengthens site reputation and ranking potential.",
          },
        ],
      },
      {
        title: "What to expect from professional SEO copywriting",
        blocks: [
          {
            title: "Higher rankings for target queries",
            body: "Optimized content helps pages move up for primary keywords, capture variations and long-tail queries, and improve overall site visibility.",
          },
          {
            title: "More traffic and higher conversion",
            body: "Each strong page can bring new traffic-and additional leads. Clear information and strong CTAs increase the chance that search visitors turn into calls, forms, and purchases.",
          },
          {
            title: "Improved indexation and structure",
            body: "With a thoughtful approach, SEO copywriting supports site architecture: topic clusters, internal linking, and navigation. That helps crawling and indexation and improves understanding of the site.",
          },
        ],
      },
      {
        title: "How an SEO text is created (step-by-step)",
        blocks: [
          {
            title: "Step 1. Analyze the niche and top competitors",
            body: "Start by reviewing pages ranking at the top: coverage depth, structure, inclusion of reviews, FAQs, and benefit sections. This reveals the baseline you need to meet-and exceed.",
          },
          {
            title: "Step 2. Keyword research",
            body: "Define the primary query, secondary keywords, related phrases, and common questions. Focus not only on volume but on intent: informational, commercial, or mixed.",
          },
          {
            title: "Step 3. Intent mapping",
            body: "Understanding what the user wants (an answer, a comparison, instructions, or a service provider) helps choose the right format and flow.",
          },
          {
            title: "Step 4. Build a clear structure",
            body: "Create an outline: H1–H3 headings, blocks, lists, tables, highlights. A good structure mirrors user questions and helps search engines understand the topic.",
          },
          {
            title: "Step 5. Draft for usefulness",
            body: "Write with practical examples, scenarios, mistakes, and actionable advice. Add keywords naturally-avoid stuffing or awkward phrasing.",
          },
          {
            title: "Step 6. SEO editing and iteration",
            body: "Review readability, heading hierarchy, metadata alignment, and internal linking. Refine offers and CTAs based on conversion goals.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "SEO copywriting is the foundation of long-term growth. Strong content helps your site rank higher, attract a steady flow of qualified visitors, and convert them into customers. With consistent work, your website becomes a powerful informational and commercial asset in your market.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "קופירייטינג SEO: יצירת תוכן רלוונטי שמדורג וגם מוכר",
    lead: [
      "SEO מודרני כבר לא מסתכם במילות מפתח בתוך טקסט. מנועי חיפוש בוחנים תועלת, עומק, מומחיות, מבנה, התנהגות משתמשים והתאמה לכוונת החיפוש. קופירייטינג SEO הוא יצירת תוכן שעוזר למשתמש, מתאים לאלגוריתמים, ומביא תוצאות עסקיות.",
    ],
    sections: [
      {
        title: "מה זה קופירייטינג SEO",
        blocks: [
          {
            body: "קופירייטינג SEO הוא כתיבת טקסטים מותאמים שמפתרים צורך של המשתמש, מתאימים לכוונת החיפוש, ותומכים בהמרות. זה איזון בין כתיבה לבני אדם לבין מבנה שמאפשר למנועי חיפוש להבין את התוכן-על בסיס מחקר מילות מפתח וניתוח מתחרים.",
          },
          {
            title: "מטרות מרכזיות של טקסט SEO",
            body: [
              "לענות על שאלה או צורך;",
              "להיות רלוונטי לביטוי ולכוונה;",
              "לעזור לעמוד לדרג בביטויי מטרה;",
              "להוביל לפעולה: שיחה, טופס, רכישה, הזמנה.",
            ],
          },
        ],
      },
      {
        title: "למה לעסק צריך קופירייטינג SEO",
        blocks: [
          {
            title: "1. קידום בחיפוש",
            body: "מנועי חיפוש מדרגים לפי איכות התשובה לשאילתה. תוכן צריך להיות מלא, מובנה ושימושי. בלי זה, קשה להחזיק טופ גם עם SEO טכני וקישורים.",
          },
          {
            title: "2. צמיחת תנועה אורגנית",
            body: "כל עמוד איכותי הוא נקודת כניסה חדשה: מאמרים, מדריכים, עמודי שירות ו‑FAQ. יותר תוכן איכותי = יותר תנועה בלי להגדיל תקציב.",
          },
          {
            title: "3. שיפור מדדי התנהגות",
            body: "טקסט טוב מגדיל זמן באתר, מפחית נטישה ומוביל לעוד צפיות. זה תומך בביצועי SEO ומחזק אמון.",
          },
          {
            title: "4. יותר לידים ומכירות",
            body: "זה לא רק מילות מפתח-זה הצעה, יתרונות, טריגרים של אמון ו‑CTA ברור. עמוד טוב מסביר, מוריד ספקות ומוביל לפעולה.",
          },
          {
            title: "5. הצגת E‑E‑A‑T",
            body: "Google מעריכה ניסיון, מומחיות, סמכות ואמינות. תוכן שמציג ניסיון אמיתי, מתייחס למקורות ומובנה היטב מחזק מוניטין וסיכויי דירוג.",
          },
        ],
      },
      {
        title: "מה לצפות מקופירייטינג SEO מקצועי",
        blocks: [
          {
            title: "עלייה בדירוגים",
            body: "טקסטים מותאמים עוזרים לעלות בביטויים ראשיים, לתפוס וריאציות וזנב ארוך, ולשפר נראות כללית.",
          },
          {
            title: "יותר תנועה והמרות",
            body: "עמוד טוב מביא תנועה וגם פניות. מידע ברור ו‑CTA חד מעלים את הסיכוי שמשתמשי חיפוש יהפכו ללקוחות.",
          },
          {
            title: "מבנה ואינדוקס טובים יותר",
            body: "כתיבה נכונה עוזרת לבנות אשכולות תוכן, קישורים פנימיים וניווט-וכך מקלה על סריקה והבנה של האתר.",
          },
        ],
      },
      {
        title: "איך יוצרים טקסט SEO (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. ניתוח נישה ומתחרים",
            body: "מנתחים עמודים שמדורגים בטופ: עומק כיסוי, מבנה, FAQ, ביקורות ויתרונות. כך מבינים את הרף המינימלי שצריך לעבור.",
          },
          {
            title: "שלב 2. מחקר מילות מפתח",
            body: "מגדירים ביטוי ראשי, מילות מפתח נוספות, ביטויים קשורים ושאלות נפוצות. חשוב להתמקד גם בכוונה: מידעית, מסחרית או מעורבת.",
          },
          {
            title: "שלב 3. זיהוי כוונת חיפוש",
            body: "הבנה מה המשתמש רוצה (תשובה, השוואה, מדריך, ספק שירות) קובעת את הפורמט והזרימה.",
          },
          {
            title: "שלב 4. בניית מבנה ברור",
            body: "יוצרים שלד: כותרות H1–H3, בלוקים, רשימות וטבלאות. מבנה טוב עונה לשאלות ומסייע למנועי חיפוש להבין את הנושא.",
          },
          {
            title: "שלב 5. כתיבה עם דגש על תועלת",
            body: "כותבים עם דוגמאות, סיטואציות, טעויות נפוצות וטיפים פרקטיים. לשלב מילות מפתח בצורה טבעית.",
          },
          {
            title: "שלב 6. עריכה ושיפור",
            body: "בודקים קריאות, היררכיית כותרות, התאמה למטא, וקישורים פנימיים. משפרים הצעות ו‑CTA לפי מטרות המרה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "קופירייטינג SEO הוא בסיס לצמיחה לטווח ארוך. תוכן איכותי עוזר לדרג, להביא תנועה איכותית ולהמיר אותה ללקוחות. בעבודה עקבית, האתר הופך לנכס מידע ומכירה חזק בנישה.",
          },
        ],
      },
    ],
  },
};

export default content;
