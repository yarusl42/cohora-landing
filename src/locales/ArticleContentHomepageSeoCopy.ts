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
      "Написание SEO‑текстов для главной страницы: зачем это нужно, чего ожидать и как правильно делать",
    lead: [
      "Главная страница - один из самых важных элементов сайта для пользователей и поисковых систем. Именно она формирует первое впечатление, объясняет, чем вы занимаетесь, и помогает поисковым роботам понять тематику ресурса. Грамотно написанный SEO‑текст усиливает видимость по ключевым запросам, улучшает поведение пользователей и увеличивает число обращений.",
    ],
    sections: [
      {
        title: "Зачем нужен SEO‑текст на главной странице",
        blocks: [
          {
            title: "1. Главная - самый сильный URL сайта",
            body: "Главная обычно имеет наибольший вес: на неё ведёт больше всего внутренних ссылок, она индексируется одной из первых и чаще всего участвует в выдаче по общим и брендовым запросам. Поэтому именно здесь логично усиливать базовые ключевые темы.",
          },
          {
            title: "2. Поисковикам нужно понять, о чём сайт",
            body: "Если на главной мало осмысленного текста, алгоритмам сложнее определить тематику: страдает релевантность по общим запросам, ниже доверие к сайту, медленнее выстраивается семантическая карта. SEO‑текст отвечает на вопросы: кто вы, что делаете, где работаете, кому помогаете и почему вам можно доверять.",
          },
          {
            title: "3. Влияние на конверсию",
            body: "Это не «полотно ключевых слов», а продающее объяснение: что за услуга, какую выгоду получает клиент, в чём экспертность и опыт. Хороший текст повышает время на сайте, глубину просмотра и количество целевых действий.",
          },
          {
            title: "4. Значение для локального SEO",
            body: "Для локального бизнеса важно корректно упомянуть географию: город, районы, страну и особенности работы в регионе. Для бизнеса в Беларуси логично упоминать Минск, Гомель, Брест, Витебск, Могилёв, Гродно, а также районы столицы. Это помогает ранжироваться по широким геозапросам («услуга + Минск», «услуга + Беларусь»).",
          },
        ],
      },
      {
        title: "Чего ожидать от SEO‑текста на главной",
        blocks: [
          {
            body: [
              "Рост позиций по основным запросам и +15–40% трафика в горизонте 4–10 недель (при правильной оптимизации).",
              "Улучшение поведенческих метрик: время на странице, глубина просмотра, клики по важным ссылкам.",
              "Рост конверсий: больше заявок, звонков, сообщений и переходов в соцсети.",
              "Укрепление SEO‑архитектуры: главная становится «узлом», связывающим услуги, категории, города и блог.",
            ],
          },
        ],
      },
      {
        title: "Как подготовиться к написанию текста",
        blocks: [
          {
            title: "1. Определите цель текста",
            body: "Ответьте: кто ваша целевая аудитория, что человек должен понять за первые 10 секунд, какое действие вы ждёте (позвонить, оставить заявку, записаться), какие ценности хотите донести и где вы работаете географически. Всё это влияет на тон, структуру и выбор ключевых слов.",
          },
          {
            title: "2. Соберите семантику",
            body: "Нужны высокочастотные и среднечастотные запросы по услугам, брендовая семантика, геозависимые ключи, коммерческие запросы («цена», «заказать», «услуги»). Ключи должны органично вписываться в текст, без переспама и «телеграфного» стиля.",
          },
          {
            title: "3. Продумайте структуру блока",
            body: "SEO‑текст на главной - это не один сплошной абзац. Нужна чёткая логика блоков и заголовков, которая совпадает с задачами маркетинга и SEO.",
          },
        ],
      },
      {
        title: "Рекомендуемая структура SEO‑текста на главной",
        blocks: [
          {
            title: "Блок 1. Короткое УТП над фолдом",
            body: "Кто вы, что делаете и почему вам можно доверять - в 1–2 фразах. Часто это заголовок и подзаголовок рядом с кнопкой CTA.",
          },
          {
            title: "Блок 2. Основное описание компании",
            body: "Расскажите о деятельности, опыте, ключевых услугах и отличиях от конкурентов. Здесь важно больше смысла, меньше воды.",
          },
          {
            title: "Блок 3. Перечень услуг/направлений",
            body: "Список основных услуг или направлений с короткими описаниями и ссылками на соответствующие страницы.",
          },
          {
            title: "Блок 4. Преимущества и ценности",
            body: "Чем вы отличаетесь: опыт, гарантии, подход, география, скорость. Лучше - в виде структурированного списка.",
          },
          {
            title: "Блок 5. Социальное доказательство",
            body: "Отзывы, кейсы, цифры, логотипы клиентов - всё, что подтверждает вашу компетентность и результативность.",
          },
          {
            title: "Блок 6. География и локальность",
            body: "Уточните города, районы и особенности локального сервиса. Для белорусского бизнеса полезно упомянуть районы Минска (например: Центральный, Советский, Партизанский, Фрунзенский, Ленинский, Октябрьский, Заводской, Московский, Первомайский), а также областные центры и специфику работы в Беларуси.",
          },
          {
            title: "Блок 7. Призыв к действию",
            body: "Чёткий CTA: позвонить, оставить заявку, получить консультацию, записаться - с понятной выгодой и минимумом трения.",
          },
        ],
      },
      {
        title: "Практические советы по написанию текста",
        blocks: [
          {
            body: [
              "Пишите живым языком, избегайте канцеляризмов и штампов.",
              "Разбивайте текст на короткие абзацы, используйте подзаголовки и списки.",
              "Включайте ключевые слова естественно, без «простыней» из фраз.",
              "Добавляйте конкретику: цифры, сроки, форматы работы, типы клиентов.",
              "Следите, чтобы текст не дублировал дословно другие страницы.",
            ],
          },
        ],
      },
      {
        title: "Типичные ошибки",
        blocks: [
          {
            body: [
              "Переспам ключевыми словами и нечитаемые абзацы.",
              "Полное отсутствие структуры - сплошной текстовый «кирпич».",
              "Фокус только на поисковиках и игнорирование реальных людей.",
              "Отсутствие чёткого предложения и призыва к действию.",
              "Несоответствие текста реальным услугам и позиционированию.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Какой оптимальный объём текста?",
            body: "Для главной страницы обычно достаточно 2000–4000 знаков, если дизайн не предполагает больших полотен текста. Главное - смысл и структура, а не «добивание объёма» любой ценой.",
          },
          {
            title: "Как часто обновлять текст?",
            body: "Пересматривайте раз в 6–12 месяцев или при изменении услуг/позиционирования. Мелкие правки (цифры, кейсы, города) можно вносить по мере изменений.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleHomepageSeoTextsChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "homepage-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "Определите цель и аудиторию главной страницы.",
            "Соберите ключевые запросы: общие, коммерческие, локальные.",
            "Постройте структуру блоков (кто вы → что делаете → зачем вам доверять → CTA).",
            "Напишите текст живым языком с естественными ключами и конкретикой.",
            "Проверьте соответствие дизайну и измеряйте результат по трафику и конверсиям.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Homepage SEO copy: why it matters, what to expect, and how to write it right",
    lead: [
      "Your homepage is one of the most important pages for both users and search engines. It shapes first impressions, explains what you do, and helps Google understand your site’s topic and service area. Well-written homepage copy can improve visibility, user engagement, and conversions-without turning the page into keyword clutter.",
    ],
    sections: [
      {
        title: "Why homepage SEO copy matters",
        blocks: [
          {
            title: "1. The homepage is often your strongest URL",
            body: "The homepage typically has the most internal links and authority. It’s indexed early and can rank for broad, brand, and category-level queries-making it the right place to reinforce your core topics.",
          },
          {
            title: "2. Search engines need context",
            body: "If your homepage has little meaningful text, algorithms have a harder time understanding what you do. Good homepage copy answers: who you are, what you provide, where you operate, and why customers should trust you.",
          },
          {
            title: "3. Conversion impact",
            body: "Homepage copy shouldn’t be a keyword dump. It’s a clear, persuasive explanation of the offer: what the service is, the customer benefit, proof of expertise, and the next step.",
          },
          {
            title: "4. Local SEO relevance",
            body: "For local businesses, it’s important to mention your service area naturally-city, neighborhoods, and region. In the U.S., that might include neighborhoods, suburbs, ZIP codes, and well-known landmarks.",
          },
        ],
      },
      {
        title: "What you should expect",
        blocks: [
          {
            body: [
              "Improved rankings for core queries and measurable traffic lift over 4–10 weeks (depending on competition and overall SEO).",
              "Better engagement: time on page, scroll depth, and clicks to key pages.",
              "More conversions: calls, form submissions, and messages.",
              "Stronger site architecture: the homepage becomes a hub connecting services, locations, and content.",
            ],
          },
        ],
      },
      {
        title: "How to prepare before writing",
        blocks: [
          {
            title: "1. Define the goal",
            body: "Clarify: who the page is for, what they should understand in the first 10 seconds, what action you want (call, request a quote, book), what values you want to communicate, and what locations you serve.",
          },
          {
            title: "2. Build your keyword set",
            body: "Include service keywords (head + mid-tail), branded terms, local modifiers, and commercial intent terms (pricing, quote, near me). The key is natural usage-no stuffing.",
          },
          {
            title: "3. Outline the block structure",
            body: "Homepage SEO copy should match your marketing structure, not be one long paragraph. Use clear sections that align with user intent.",
          },
        ],
      },
      {
        title: "A recommended homepage copy structure",
        blocks: [
          {
            title: "Block 1. A short value proposition above the fold",
            body: "In 1–2 sentences: who you are, what you do, and why you’re trusted. Often paired with a clear CTA.",
          },
          {
            title: "Block 2. Core company/service description",
            body: "Explain what you do, your experience, and what makes you different. Prioritize substance over filler.",
          },
          {
            title: "Block 3. Service list",
            body: "List key services with short explanations and links.",
          },
          {
            title: "Block 4. Benefits and differentiators",
            body: "Highlight your differentiators: speed, warranties, certifications, approach, and coverage.",
          },
          {
            title: "Block 5. Social proof",
            body: "Reviews, case studies, metrics, client logos-anything that proves results.",
          },
          {
            title: "Block 6. Geography and local relevance",
            body: "List where you serve and any local specifics. For U.S. audiences, mentioning key neighborhoods, suburbs, and ZIP code areas can help match local intent.",
          },
          {
            title: "Block 7. A clear call to action",
            body: "A direct CTA: call, request a quote, schedule a consultation-paired with a simple, low-friction next step.",
          },
        ],
      },
      {
        title: "Practical writing tips",
        blocks: [
          {
            body: [
              "Write in plain language-avoid corporate clichés.",
              "Use short paragraphs, headings, and lists.",
              "Include keywords naturally-no “keyword walls.”",
              "Add specifics: timelines, numbers, service formats, customer types.",
              "Avoid copying text from other pages.",
            ],
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Keyword stuffing and unreadable paragraphs.",
              "No structure-one giant block of text.",
              "Writing for bots instead of real people.",
              "No clear offer and no CTA.",
              "Mismatch with your actual services and positioning.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "What’s a good word count?",
            body: "For many homepages, ~300–700 words is enough when the design already communicates the main points. Prioritize clarity and structure over length.",
          },
          {
            title: "How often should you update it?",
            body: "Review every 6–12 months or whenever your services, positioning, or locations change. Update numbers, new case studies, and coverage as needed.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleHomepageSeoTextsChecklist",
      title: "Checklist",
      steps: [
        {
          id: "homepage-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "Define the homepage goal and target audience.",
            "Collect core, commercial, and local keywords.",
            "Outline the sections (who you are → what you do → proof → CTA).",
            "Write in natural language with specific details.",
            "Validate the copy against design and measure impact via traffic and conversions.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "טקסט SEO לעמוד הבית: למה זה חשוב, למה לצפות ואיך לכתוב נכון",
    lead: [
      "עמוד הבית הוא אחד העמודים החשובים ביותר למשתמשים ולמנועי חיפוש. הוא יוצר רושם ראשוני, מסביר במה אתם עוסקים ועוזר לגוגל להבין את נושא האתר ואת אזור השירות. טקסט טוב בעמוד הבית יכול לשפר נראות, מעורבות והמרות-בלי להפוך את העמוד ל‘דחיסת מילות מפתח’.",
    ],
    sections: [
      {
        title: "למה חשוב טקסט SEO בעמוד הבית",
        blocks: [
          {
            title: "1. עמוד הבית הוא לרוב ה‑URL החזק ביותר",
            body: "לעמוד הבית בדרך כלל יש הכי הרבה קישורים פנימיים וסמכות. הוא נסרק מוקדם ויכול להופיע בביטויים כלליים וממותגים-לכן זה מקום נכון לחזק נושאים מרכזיים.",
          },
          {
            title: "2. למנועי חיפוש צריך הקשר",
            body: "כשאין בעמוד הבית טקסט משמעותי, קשה יותר להבין מה אתם מציעים. טקסט טוב עונה על: מי אתם, מה אתם עושים, איפה אתם נותנים שירות ולמה כדאי לסמוך עליכם.",
          },
          {
            title: "3. השפעה על המרות",
            body: "זה לא אמור להיות ‘טקסט של מילות מפתח’, אלא הסבר ברור ומשכנע על ההצעה-עם הוכחות ומסלול פעולה פשוט.",
          },
          {
            title: "4. רלוונטיות ל‑SEO מקומי",
            body: "לעסק מקומי חשוב להזכיר בצורה טבעית את אזור השירות: עיר, שכונות, אזורי תעסוקה ונקודות ציון. בישראל אפשר לציין שכונות, ערים סמוכות ואזורים מוכרים-בלי להעמיס.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "שיפור נראות בביטויים מרכזיים ועלייה בתנועה בטווח של 4–10 שבועות (תלוי תחרות ו‑SEO כללי).",
              "שיפור מעורבות: זמן בעמוד, גלילה, והקלקות לעמודים חשובים.",
              "יותר המרות: שיחות, טפסים והודעות.",
              "חיזוק מבנה האתר: עמוד הבית הופך ‘צומת’ שמחבר שירותים, אזורים ותוכן.",
            ],
          },
        ],
      },
      {
        title: "איך להתכונן לפני כתיבה",
        blocks: [
          {
            title: "1. להגדיר מטרה",
            body: "להגדיר למי העמוד מיועד, מה צריך להיות ברור תוך 10 שניות, איזה פעולה אתם רוצים (שיחה/בקשת הצעת מחיר/קביעת ייעוץ), ואיזה אזורים אתם מכסים.",
          },
          {
            title: "2. לאסוף מילות מפתח",
            body: "לכלול ביטויי שירות (כלליים ובינוניים), מותג, ביטויים מקומיים וביטויי כוונה מסחרית (מחיר, הזמנה, קרוב אליי). לשלב בצורה טבעית.",
          },
          {
            title: "3. לבנות מבנה בלוקים",
            body: "לא לכתוב פסקה אחת ארוכה. לבנות מבנה שמתאים לשיווק ולכוונת המשתמש.",
          },
        ],
      },
      {
        title: "מבנה מומלץ לטקסט בעמוד הבית",
        blocks: [
          {
            title: "בלוק 1. הצעת ערך קצרה מעל ה‑fold",
            body: "1–2 משפטים שמבהירים מי אתם, מה אתם עושים ולמה לסמוך עליכם-לרוב לצד CTA ברור.",
          },
          {
            title: "בלוק 2. תיאור פעילות ושירותים",
            body: "לתאר ניסיון, התמחות ומה מבדל אתכם.",
          },
          {
            title: "בלוק 3. רשימת שירותים",
            body: "רשימת שירותים מרכזיים עם קישורים.",
          },
          {
            title: "בלוק 4. יתרונות וערכים",
            body: "להציג מבדלים כמו אחריות, ניסיון, מהירות, כיסוי אזורי ושיטה.",
          },
          {
            title: "בלוק 5. הוכחות חברתיות",
            body: "ביקורות, קייסים, מספרים ולוגואים-מה שמוכיח תוצאה.",
          },
          {
            title: "בלוק 6. גאוגרפיה ולוקאליות",
            body: "להבהיר אזורי שירות (עיר/שכונות/אזורי תעסוקה) בצורה טבעית.",
          },
          {
            title: "בלוק 7. CTA ברור",
            body: "להניע לפעולה בצורה פשוטה: שיחה, טופס קצר, או קביעת ייעוץ.",
          },
        ],
      },
      {
        title: "טיפים לכתיבה",
        blocks: [
          {
            body: [
              "לכתוב פשוט וברור.",
              "להשתמש בכותרות ורשימות.",
              "לשלב ביטויים בצורה טבעית.",
              "להוסיף נתונים: זמנים, מספרים ודוגמאות.",
              "לא להעתיק טקסט מעמודים אחרים.",
            ],
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: [
              "דחיסת מילות מפתח וטקסט לא קריא.",
              "חוסר מבנה.",
              "כתיבה למנועי חיפוש במקום לאנשים.",
              "אין הצעה ברורה ואין CTA.",
              "אי התאמה לשירותים בפועל.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "מה אורך מומלץ?",
            body: "באתרים רבים מספיקים כמה מאות מילים, במיוחד אם העיצוב כבר מעביר את המסר. העיקר הוא בהירות ומבנה.",
          },
          {
            title: "כל כמה זמן לעדכן?",
            body: "מומלץ לבדוק אחת ל‑6–12 חודשים או כשמשתנים שירותים/מיקומים/מסרים. לעדכן מספרים וקייסים לפי הצורך.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleHomepageSeoTextsChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "homepage-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "להגדיר מטרה וקהל יעד לעמוד הבית.",
            "לאסוף ביטויי חיפוש כלליים, מסחריים ומקומיים.",
            "לבנות מבנה (מי אתם → מה אתם עושים → הוכחות → CTA).",
            "לכתוב בצורה טבעית עם פרטים ספציפיים.",
            "להתאים לעיצוב ולמדוד תוצאות לפי תנועה והמרות.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
