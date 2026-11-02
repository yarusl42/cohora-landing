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
      "Анализ поведенческих факторов на сайте: зачем это нужно, чего ожидать и как правильно провести исследование",
    lead: [
      "Анализ поведенческих факторов на сайте белорусского бизнеса - это комплексная оценка того, как пользователи из Минска, Бреста, Гомеля и других городов Беларуси взаимодействуют с вашим сайтом. Правильно проведённый анализ помогает выявить проблемы в пользовательском опыте и улучшить позиции в Google и Яндексе.",
      "Анализ поведения пользователей на сайте - это один из ключевых инструментов для понимания того, как работает ваш сайт и как его можно улучшить. Многие собственники бизнеса смотрят только на количество посетителей, но это лишь верхушка айсберга. Гораздо важнее понять, как люди взаимодействуют с контентом, где у них возникают сложности и какие элементы приводят к целевым действиям.",
      "Поведенческие факторы - один из ключевых элементов SEO для локального бизнеса. Они помогают понять, насколько сайт полезен и удобен, соответствует ли он намерению пользователя и где именно посетители теряются на пути к целевому действию. Грамотный аудит поведенческих данных повышает конверсию, укрепляет позиции в поиске и улучшает качество клиентского опыта.",
    ],
    sections: [
      {
        title: "Зачем нужен анализ поведенческих факторов",
        blocks: [
          {
            title: "1. Понять реальный пользовательский опыт",
            body: "Поведение показывает, читают ли контент, замечают ли кнопки, заполняют ли формы, кликают ли по номеру телефона, смотрят ли страницы филиалов и как далеко скроллят. Если сайт неудобный, медленный или перегружен, это мгновенно отражается в цифрах: роста отказов, краткого времени на странице и низкой вовлечённости.",
          },
          {
            title: "2. Улучшить позиции в поиске",
            body: "Поисковики учитывают, насколько быстро пользователи покидают страницу, возвращаются ли к выдаче, сколько внутренних страниц просматривают и насколько долго остаются. Если страница решает задачу - она удерживает пользователя, растёт CTR и конверсия, а вместе с этим укрепляются позиции.",
          },
          {
            title: "3. Повысить конверсию в звонки и заявки",
            body: "Анализ помогает выявить узкие места: где теряются пользователи, какие формы слишком сложные, какие призывы к действию не замечают, какие блоки вызывают сомнение. Часто достаточно изменить порядок блоков, усилить доказательства или сократить форму, чтобы увеличить количество заявок в 1.5–3 раза.",
          },
          {
            title: "4. Оптимизировать мобильный опыт",
            body: "Более 70% локального трафика идёт со смартфонов. Медленная загрузка, неудобные кнопки, «прыгающая» вёрстка - всё это видно в поведении: высокий процент отказов, низкое время на странице и минимум взаимодействий. Аудит подсказывает, какие улучшения дадут быстрый эффект на мобильных.",
          },
          {
            title: "5. Сопоставить страницу и намерение запроса",
            body: "Иногда проблема не в дизайне, а в несоответствии ожиданиям: слишком общий текст, нет цен или фото, нет ответа на ключевой вопрос. Поведенческие данные помогают понять, каких блоков и конкретики не хватает.",
          },
        ],
      },
      {
        title: "Что вы получите после анализа",
        blocks: [
          {
            title: "1. Полный отчёт о поведении пользователей",
            body: "В отчёте - среднее время на сайте, глубина просмотра, процент отказов, кликабельность кнопок и ссылок, популярные маршруты по сайту и поведение мобильных пользователей. Это наглядная картина слабых мест и точек роста.",
          },
          {
            title: "2. Тепловые карты и карты скроллинга",
            body: "Тепловые карты показывают, куда кликают, где пытаются нажать, но элемент не кликабелен, до какого места докручивают страницу и какие блоки игнорируют. Это лучший инструмент для улучшения посадочных страниц и главной.",
          },
          {
            title: "3. Анализ конверсионных путей",
            body: "Вы увидите, на каком шаге пользователи уходят, почему не завершают действие, какие страницы удерживают внимание. Дальше - точечные правки форм, кнопок и призывов к действию.",
          },
          {
            title: "4. Сравнение по источникам трафика",
            body: "Часто пользователи из контекста ведут себя активнее, а из органики - осторожнее; соцсети дают много трафика, но мало конверсий. Сравнение позволяет корректнее распределять маркетинговый бюджет.",
          },
          {
            title: "5. Список конкретных рекомендаций",
            body: "Пошаговый план: какие блоки переместить, какие элементы добавить, что изменить в мобильной версии, какие страницы расширить, а какие - объединить.",
          },
        ],
      },
      {
        title: "Какие поведенческие метрики важны",
        blocks: [
          {
            title: "Показатель отказов",
            body: "Высокий bounce rate сигнализирует, что страница не отвечает на запрос или мешает восприятию: медленная, перегруженная, без понятного первого экрана. Важно не «гнаться» за цифрой, а смотреть контекст запросов.",
          },
          {
            title: "Время на сайте и глубина просмотра",
            body: "Чем дольше и глубже взаимодействие, тем выше вероятность, что контент попадает в ожидания. Но для страниц ответа (FAQ, справка) короткое время может быть нормой - если пользователь быстро находит решение.",
          },
          {
            title: "CTR в выдаче",
            body: "Низкий CTR в поиске указывает на проблемы с title/description или нерелевантность сниппета. Тестируйте формулировки, добавляйте конкретику: район, услуга, цена‑от, особенности, выгоды.",
          },
        ],
      },
      {
        title: "Как провести анализ: пошаговый план",
        blocks: [
          {
            title: "Шаг 1. Сформулируйте цели",
            body: "Определите, что важно для бизнеса: звонки, заявки, запись, переход на страницу филиала, просмотр портфолио. Это задаст метрики успеха и поможет выбрать инструменты.",
          },
          {
            title: "Шаг 2. Подготовьте аналитику",
            body: "Убедитесь, что корректно настроены цели/события (звонок, клик по WhatsApp/Telegram, отправка формы), подключены карты кликов/скролла и данные по источникам трафика. Добавьте разметку UTM на ключевые ссылки.",
          },
          {
            title: "Шаг 3. Соберите аудит на выборке страниц",
            body: "Начните с главной, 3–5 ключевых посадочных и страницы контактов/филиалов. Сопоставьте поведение мобильных и десктопных пользователей, оцените первые экраны и скорость загрузки.",
          },
          {
            title: "Шаг 4. Проработайте гипотезы и быстрые правки",
            body: "Составьте список гипотез и приоритизируйте по влиянию/сложности: усилить первый экран, упростить форму, переместить CTA выше, добавить социальные доказательства (отзывы, кейсы), уточнить цены.",
          },
          {
            title: "Шаг 5. Тестирование и измерение",
            body: "Внедрите изменения поэтапно, фиксируйте дату/объём, сравнивайте метрики «до/после» минимум 2–4 недели. Если есть трафик - используйте A/B‑тесты. Сохраняйте журнал изменений.",
          },
        ],
      },
      {
        title: "Типичные ошибки и как их избежать",
        blocks: [
          {
            body: [
              "Пытаться продвинуть одну главную страницу по всем запросам одновременно.",
              "Копировать одинаковый текст для десятков районов без реальной уникальности.",
              "Игнорировать уже работающие запросы в статистике и не развивать их.",
              "Продвигать нерелевантные запросы, которые не приводят к заявкам.",
              "Делать разовые резкие переделки вместо аккуратной и регулярной итерации.",
            ],
          },
        ],
      },
      {
        title: "FAQ: короткие ответы на частые вопросы",
        blocks: [
          {
            title: "Сколько длится аудит?",
            body: "Базовый аудит типового сайта занимает 3–7 рабочих дней с подготовкой рекомендаций и приоритизацией правок.",
          },
          {
            title: "Когда будет эффект?",
            body: "Быстрые улучшения (рост CTR, снижение отказов, рост кликов по CTA) видны в течение 2–4 недель после внедрения правок, при достаточном объёме трафика.",
          },
          {
            title: "Нужен ли разработчик?",
            body: "Часть правок (тексты, порядок блоков, заголовки) можно внедрить без разработчика. Технические улучшения скорости, адаптивности и форм лучше делать с ним.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "ניתוח גורמים התנהגותיים באתר: למה זה חשוב, למה לצפות ואיך לבצע בדיקה נכון",
    lead: [
      "ניתוח גורמים התנהגותיים באתר של עסק בישראל הוא הערכה של האופן שבו משתמשים מתל אביב, חיפה, ירושלים ואזורים נוספים מתקשרים עם האתר שלכם. בדיקה נכונה מאפשרת לזהות בעיות בחוויית משתמש ולשפר ביצועים בחיפוש בגוגל.",
      "ניתוח התנהגות משתמשים הוא כלי מרכזי להבין מה עובד באתר ומה לא. הרבה בעלי עסקים מסתכלים רק על מספר הכניסות, אבל זה רק חלק קטן מהתמונה. חשוב יותר להבין איך אנשים צורכים תוכן, איפה הם נתקעים ומה מוביל לפעולה.",
      'גורמים התנהגותיים הם חלק חשוב מ‑SEO מקומי. הם מראים עד כמה האתר שימושי ונוח, האם הוא תואם את כוונת המשתמש, ובאיזה שלב אנשים "נופלים" בדרך לפעולה. ניתוח נכון משפר המרות, מחזק אמון ומשפר את איכות החוויה.',
    ],
    sections: [
      {
        title: "למה לבצע ניתוח גורמים התנהגותיים",
        blocks: [
          {
            title: "1. להבין את חוויית המשתמש בפועל",
            body: "ההתנהגות מראה האם קוראים תוכן, האם שמים לב לכפתורים, האם ממלאים טפסים, האם לוחצים להתקשר/לוואטסאפ, ועד כמה גוללים. אתר איטי או עמוס משתקף מיד: נטישה גבוהה, זמן קצר בעמוד ומעורבות נמוכה.",
          },
          {
            title: "2. לשפר ביצועים בחיפוש",
            body: "גוגל מתייחס לאותות כמו חזרה לתוצאות, מעורבות בעמוד, צפייה בעמודים נוספים וזמן שהייה. כשעמוד עונה בדיוק על השאלה - המשתמש נשאר, ה‑CTR וההמרות עולים, ובהתאם גם החשיפה.",
          },
          {
            title: "3. להעלות המרות לשיחות ולפניות",
            body: "הניתוח חושף צווארי בקבוק: איפה משתמשים נעלמים, אילו טפסים מסובכים, איזה CTA לא בולט ואילו בלוקים יוצרים ספק. לעיתים שינוי סדר, חיזוק הוכחות או קיצור טופס מספיקים כדי להעלות פניות פי 1.5–3.",
          },
          {
            title: "4. לשפר חוויית מובייל",
            body: 'רוב התנועה המקומית מגיעה ממובייל. טעינה איטית, כפתורים לא נוחים או פריסת עמוד "קופצת" מתבטאים בנטישה גבוהה ומעט אינטראקציות. ניתוח התנהגות מסמן אילו שיפורים יתנו אפקט מהיר.',
          },
          {
            title: "5. להתאים את העמוד לכוונת החיפוש",
            body: "לפעמים הבעיה אינה עיצוב אלא חוסר התאמה לציפייה: טקסט כללי מדי, אין מחיר/תמונות, אין תשובה לשאלה המרכזית. נתוני התנהגות מראים אילו בלוקים חסרים.",
          },
        ],
      },
      {
        title: "מה תקבלו אחרי הניתוח",
        blocks: [
          {
            title: "1. דוח מלא על התנהגות משתמשים",
            body: "זמן ממוצע באתר, עומק צפייה, שיעור נטישה, קליקים על כפתורים וקישורים, מסלולי ניווט פופולריים והתנהגות במובייל - תמונת מצב ברורה של נקודות חולשה וצמיחה.",
          },
          {
            title: "2. מפות חום ומפות גלילה",
            body: "מפות חום מראות איפה לוחצים, איפה מנסים ללחוץ ולא ניתן, עד לאן גוללים ואילו אזורים מתעלמים מהם. זה כלי מעולה לשיפור דפי נחיתה והדף הראשי.",
          },
          {
            title: "3. ניתוח מסלולי המרה",
            body: "תראו באיזה שלב משתמשים נוטשים, למה לא משלימים פעולה ואילו עמודים מחזיקים תשומת לב. לאחר מכן מבצעים תיקונים ממוקדים לטפסים, כפתורים ו‑CTA.",
          },
          {
            title: "4. השוואה לפי מקורות תנועה",
            body: "לעיתים תנועה ממודעות מתנהגת אחרת מתנועה אורגנית; רשתות חברתיות יכולות להביא הרבה תנועה עם מעט המרות. ההשוואה עוזרת להקצות תקציב בצורה מדויקת.",
          },
          {
            title: "5. רשימת המלצות אופרטיבית",
            body: "תוכנית פעולה: אילו בלוקים להזיז, אילו אלמנטים להוסיף, מה לשנות במובייל, אילו עמודים להרחיב ואילו לאחד.",
          },
        ],
      },
      {
        title: "אילו מדדים חשובים",
        blocks: [
          {
            title: "שיעור נטישה",
            body: "Bounce גבוה יכול להעיד שהעמוד לא עונה על הבקשה או שקשה לצרוך אותו: איטי, עמוס, בלי מסר ברור במסך הראשון. חשוב להסתכל על ההקשר ולא רק על מספר.",
          },
          {
            title: "זמן באתר ועומק צפייה",
            body: "ככל שהאינטראקציה עמוקה יותר, כך הסיכוי שהעמוד מתאים לציפייה גבוה יותר. עם זאת, בעמודי תשובה (FAQ/עזרה) זמן קצר יכול להיות תקין אם המשתמש מצא מהר.",
          },
          {
            title: "CTR בתוצאות",
            body: "CTR נמוך מצביע על בעיה בכותרת/תיאור או חוסר רלוונטיות. כדאי להוסיף ספציפיות: עיר/אזור, שירות, מחיר החל מ‑, יתרונות.",
          },
        ],
      },
      {
        title: "איך לבצע ניתוח: תוכנית צעד‑אחר‑צעד",
        blocks: [
          {
            title: "שלב 1. הגדירו מטרות",
            body: "החליטו מה חשוב: שיחות, לידים, קביעת תור, כניסה לעמוד סניף או צפייה בעבודות. זה יקבע את מדדי ההצלחה ואת הכלים.",
          },
          {
            title: "שלב 2. הכינו אנליטיקה",
            body: "וודאו שאירועים מוגדרים נכון (שיחה, קליק לוואטסאפ/טלגרם, שליחת טופס), מחוברות מפות חום/גלילה ויש נתוני מקורות. הוסיפו UTM לקישורים חשובים.",
          },
          {
            title: "שלב 3. בדקו דוגמת עמודים",
            body: "התחילו מהדף הראשי, 3–5 דפי נחיתה מרכזיים ודף יצירת קשר/סניפים. השוו מובייל מול דסקטופ ובדקו מסכים ראשונים ומהירות.",
          },
          {
            title: "שלב 4. בנו השערות ותיקונים מהירים",
            body: "רשמו השערות ותעדפו לפי השפעה/מאמץ: לחזק מסך ראשון, לקצר טופס, להעלות CTA למעלה, להוסיף הוכחות (ביקורות/קייסים), לדייק מחירים.",
          },
          {
            title: "שלב 5. בדיקה ומדידה",
            body: 'יישמו שינויים בהדרגה, תעדו תאריך והיקף, והשוו "לפני/אחרי" לפחות 2–4 שבועות. אם יש מספיק תנועה - בצעו A/B. שמרו יומן שינויים.',
          },
        ],
      },
      {
        title: "טעויות נפוצות ואיך להימנע",
        blocks: [
          {
            body: [
              "לנסות לקדם רק את דף הבית לכל השאילתות.",
              "להעתיק אותו טקסט לעשרות שכונות בלי ייחוד אמיתי.",
              "להתעלם משאילתות שכבר מביאות תנועה ולא לפתח אותן.",
              "לקדם שאילתות לא רלוונטיות שלא מביאות לידים.",
              "לעשות שינוי חד פעם אחת במקום איטרציה עקבית.",
            ],
          },
        ],
      },
      {
        title: "FAQ: תשובות קצרות",
        blocks: [
          {
            title: "כמה זמן לוקח האודיט?",
            body: "בדיקה בסיסית לאתר טיפוסי אורכת לרוב 3–7 ימי עבודה כולל המלצות ותיעדוף.",
          },
          {
            title: "מתי רואים אפקט?",
            body: "שיפורים מהירים (CTR, ירידה בנטישה, יותר קליקים על CTA) נראים לרוב תוך 2–4 שבועות אחרי הטמעה - אם יש מספיק תנועה.",
          },
          {
            title: "צריך מפתח?",
            body: "חלק מהשינויים (טקסטים, סדר בלוקים, כותרות) אפשר בלי מפתח. שיפורי מהירות, רספונסיביות וטפסים עדיף לבצע עם מפתח.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Behavioral analytics for your website: why it matters, what to expect, and how to do it right",
    lead: [
      "Behavioral analytics for a U.S. business website is a structured review of how users in your service area (for example, Austin, Miami, or New York City) interact with your site. When done correctly, it helps uncover UX friction and improve performance in Google (and other discovery channels).",
      "User behavior analysis is one of the most practical tools to understand how your website actually works and how to improve it. Many business owners look only at traffic volume - but that’s just the surface. What matters is how people engage with content, where they struggle, and what drives conversions.",
      "Behavioral factors are a key part of SEO for local businesses. They help you see whether your site is genuinely useful, whether it matches search intent, and where visitors drop off on the way to an action. A solid behavioral audit improves conversion rate, strengthens search visibility, and upgrades customer experience.",
    ],
    sections: [
      {
        title: "Why behavioral analytics matters",
        blocks: [
          {
            title: "1. Understand the real user experience",
            body: "Behavior data shows whether people read content, notice buttons, complete forms, click-to-call, open location/contact pages, and how far they scroll. If the site is slow, confusing, or overloaded, it shows immediately: higher bounce rates, short time-on-page, and low engagement.",
          },
          {
            title: "2. Improve search performance",
            body: "Search engines look at signals like pogo-sticking (returning to results), engagement, depth of navigation, and time spent. If a page solves the user’s problem, users stay longer, CTR and conversions rise - and rankings tend to stabilize.",
          },
          {
            title: "3. Increase conversions (calls and leads)",
            body: "Analytics helps you find bottlenecks: where users drop, which forms are too complex, which CTAs are ignored, and which sections trigger doubt. Often, reordering blocks, strengthening proof, or shortening a form can raise leads by 1.5–3x.",
          },
          {
            title: "4. Optimize the mobile experience",
            body: "A large share of local traffic comes from phones. Slow load, tiny buttons, or layout shifts show up as high bounce and low interaction. A behavioral audit highlights changes that deliver fast mobile wins.",
          },
          {
            title: "5. Match the page to search intent",
            body: "Sometimes the issue isn’t design - it’s expectation mismatch: too generic copy, missing pricing/photos, or no direct answer to the key question. Behavior data makes these gaps visible.",
          },
        ],
      },
      {
        title: "What you get after the analysis",
        blocks: [
          {
            title: "1. A complete behavior report",
            body: "Average time on site, depth of visit, bounce rate, clicks on buttons/links, popular navigation paths, and mobile behavior. You get a clear picture of weak spots and growth opportunities.",
          },
          {
            title: "2. Heatmaps and scroll maps",
            body: "Heatmaps show where users click, where they try to click but can’t, how far they scroll, and which blocks are ignored. This is one of the best tools for improving landing pages and your homepage.",
          },
          {
            title: "3. Conversion path analysis",
            body: "You’ll see where users leave the funnel, why they don’t complete an action, and which pages hold attention. From there you get targeted fixes for forms, buttons, and CTAs.",
          },
          {
            title: "4. Source-based comparison",
            body: "Paid traffic can behave differently from organic; social can bring volume but low conversion. Comparing sources helps you allocate budget more accurately.",
          },
          {
            title: "5. A concrete recommendation list",
            body: "A step-by-step plan: what to move, what to add, what to change on mobile, which pages to expand, and which to merge.",
          },
        ],
      },
      {
        title: "Key behavioral metrics to track",
        blocks: [
          {
            title: "Bounce rate",
            body: "A high bounce rate can signal that the page doesn’t satisfy the query - or that it’s hard to consume (slow, cluttered, unclear above the fold). Don’t chase a single number; evaluate it by query intent and page type.",
          },
          {
            title: "Time on site and depth",
            body: "Longer and deeper engagement usually means content matches expectations. But for quick-answer pages (FAQ/help), short time can be normal if users find the answer fast.",
          },
          {
            title: "CTR from search results",
            body: "Low CTR often points to title/description issues or an unconvincing snippet. Test messaging and add specifics: neighborhood, service, price-from, differentiators, and benefits.",
          },
        ],
      },
      {
        title: "How to run the analysis: step-by-step",
        blocks: [
          {
            title: "Step 1. Define goals",
            body: "Decide what matters: calls, form leads, booking, clicking to a location page, viewing a portfolio. This sets success metrics and helps you choose tools.",
          },
          {
            title: "Step 2. Prepare analytics tracking",
            body: "Make sure events are configured (call, click-to-WhatsApp/Telegram, form submit), heatmaps/scroll tracking are enabled, and traffic sources are available. Add UTM tags to key links.",
          },
          {
            title: "Step 3. Audit a sample of pages",
            body: "Start with the homepage, 3–5 key landing pages, and your contact/location page. Compare mobile vs desktop behavior and evaluate above-the-fold clarity and load speed.",
          },
          {
            title: "Step 4. Create hypotheses and quick fixes",
            body: "List hypotheses and prioritize by impact vs effort: improve the first screen, simplify the form, move CTAs higher, add proof (reviews/case studies), clarify pricing.",
          },
          {
            title: "Step 5. Test and measure",
            body: "Ship changes in increments, document dates and scope, and compare before/after for at least 2–4 weeks. If you have enough traffic, run A/B tests. Keep a change log.",
          },
        ],
      },
      {
        title: "Common mistakes (and how to avoid them)",
        blocks: [
          {
            body: [
              "Trying to rank only the homepage for every query.",
              "Copying the same text across dozens of neighborhood pages with no real uniqueness.",
              "Ignoring queries that already work and not building on them.",
              "Targeting irrelevant queries that don’t convert into leads.",
              "Doing one big redesign instead of steady iteration.",
            ],
          },
        ],
      },
      {
        title: "FAQ: quick answers",
        blocks: [
          {
            title: "How long does the audit take?",
            body: "A baseline audit for a typical site usually takes 3–7 business days, including recommendations and prioritization.",
          },
          {
            title: "When should I expect impact?",
            body: "Fast improvements (higher CTR, lower bounce, more CTA clicks) often appear within 2–4 weeks after changes are implemented - assuming enough traffic volume.",
          },
          {
            title: "Do I need a developer?",
            body: "Some improvements (copy, block order, headings) can be done without a developer. Speed, responsiveness, and form-level changes are usually best done with one.",
          },
        ],
      },
    ],
  },
};

export default content;
