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
      "Аудит отзывов о компании: зачем он нужен, что ожидать и как его правильно проводить",
    lead: [
      "Отзывы - один из ключевых факторов выбора клиента. Репутация в интернете напрямую влияет на количество заявок, звонков, посещаемость офлайн‑точек и продажи.",
      "Аудит отзывов - это системный анализ того, где и что говорят о бизнесе, как компания отвечает на обратную связь и как репутация влияет на конверсию и локальную видимость.",
    ],
    sections: [
      {
        title: "Зачем нужен аудит отзывов",
        blocks: [
          {
            title: "1. Понять реальную репутацию",
            body: "Отзывы расползлись по разным площадкам: Google Maps, 2ГИС, соцсети, отраслевые сайты и агрегаторы. Аудит собирает всё в единую картину: где вы сильнее, где провисаете и как это влияет на решение клиента.",
          },
          {
            title: "2. Найти системные слабые места сервиса",
            body: "Повторяющиеся претензии показывают, где ломается клиентский путь: ожидание, цены, компетенции, запись, гарантия, чистота, коммуникация. Это честная обратная связь, которую сложно получить из рекламных каналов.",
          },
          {
            title: "3. Усилить положительные сигналы",
            body: "Важно не только «наличие» отзывов, а их свежесть, частота, качество, распределение по площадкам и видимость в выдаче. Аудит показывает, как превратить лояльный опыт клиентов в стабильный поток доверия.",
          },
          {
            title: "4. Влиять на локальное SEO",
            body: "Google и другие платформы учитывают рейтинг, количество и темп поступления отзывов, ответы компании и полноту карточек. Репутационный блок - важная часть локального ранжирования и CTR карточек в картах.",
          },
          {
            title: "5. Управлять кризисами",
            body: "Всплески негатива без реакции превращаются в лавину. Аудит помогает выявлять причины, выстраивать процесс ответов и корректировать коммуникацию до того, как проблема станет публичной повесткой.",
          },
        ],
      },
      {
        title: "Что входит в полный аудит отзывов",
        blocks: [
          {
            title: "1. Карта площадок и приоритеты",
            body: "Google Maps, 2ГИС, соцсети, отраслевые сайты, агрегаторы, форумы и локальные ресурсы. Для каждой площадки задаются вес и приоритет.",
          },
          {
            title: "2. Общее количество и динамика",
            body: "Сколько отзывов всего и за 3/6/12 месяцев, темп появления, периоды спада/роста. Свежесть - важнейший фактор доверия и ранжирования.",
          },
          {
            title: "3. Средний рейтинг и устойчивость",
            body: "Из чего складывается рейтинг, отличия по площадкам, аномалии и резкие просадки. Где «болит» сильнее и что исправлять в первую очередь.",
          },
          {
            title: "4. Тональность и темы",
            body: "Доли позитивных/нейтральных/негативных отзывов, токсичность, подозрительные публикации. Тематический разбор: качество, ожидание, цены, компетенции, чистота, гарантия, доставка, коммуникации.",
          },
          {
            title: "5. Анализ содержания",
            body: "Что именно хвалят или критикуют, какие формулировки работают, каких доказательств не хватает, какие обещания вызывают завышенные ожидания.",
          },
          {
            title: "6. Работа с отзывами",
            body: "Доля ответов, скорость реакции, корректность коммуникации, закрытие конфликтов и возвраты, шаблоны ответов, которые снижают эскалацию. Также - видимость ответов.",
          },
        ],
      },
      {
        title: "Как провести аудит: пошаговый план",
        blocks: [
          {
            title: "Шаг 1. Соберите площадки и выгрузите данные",
            body: "Составьте список площадок и соберите отзывы за 12–24 месяца. Зафиксируйте ссылки, даты, оценки, темы и наличие ответа компании. Сведите всё в таблицу для анализа.",
          },
          {
            title: "Шаг 2. Проанализируйте динамику и рейтинг",
            body: "Постройте графики по месяцам: количество отзывов, распределение тональности, средний рейтинг. Найдите периоды «штормов» и провалов и выясните причины (события, изменения процессов, сезонность).",
          },
          {
            title: "Шаг 3. Разберите темы и корневые причины",
            body: "Разметьте отзывы по темам и выделите повторяющиеся причины негатива. Сформируйте список корневых проблем и предложите изменения в процессах: регламент записи, SLA на ответы, стандарты сервиса, обучение персонала.",
          },
          {
            title: "Шаг 4. Оцените качество ответов",
            body: "Проверьте долю ответов, скорость реакции, тон и полезность. Шаблоны‑отписки вредят. Подготовьте набор сценариев: признание ошибки, компенсация, уточнение деталей, перевод в личную коммуникацию.",
          },
          {
            title: "Шаг 5. Сформируйте план сбора новых отзывов",
            body: "Настройте регулярный этичный сбор: QR‑коды на стойках, ссылки в пост‑сервисных сообщениях, напоминания в мессенджерах, карточки благодарности. Делайте акцент на отзывах с текстом и, по возможности, с фото.",
          },
          {
            title: "Шаг 6. Включите мониторинг и отчётность",
            body: "Фиксируйте ежемесячные метрики: количество и доли тональностей, средний рейтинг, долю ответов, скорость реакции, темы негатива, источники отзывов. Сравнивайте с конкурентами и корректируйте стратегию.",
          },
        ],
      },
      {
        title: "Практические примеры и типичные ошибки",
        blocks: [
          {
            title: "Пример 1. «Тишина» вместо ответов",
            body: "Компания не отвечала на отзывы месяцами - рейтинг стагнировал. Внедрение регламента ответов (до 48 часов), сценариев коммуникации и сбора свежих отзывов дало рост среднего рейтинга и CTR карточек в картах.",
          },
          {
            title: "Пример 2. Локальные провалы сервиса",
            body: "Негатив шёл из одного филиала из‑за очередей и путаницы со временем записи. Перераспределение потоков, обновление графика и дополнительный персонал устранили первопричину и снизили волну негатива.",
          },
          {
            title: "Типичные ошибки",
            body: [
              "Игнорирование площадок помимо Google (2ГИС, отраслевые ресурсы, соцсети).",
              "Редкие массовые всплески отзывов вместо регулярного и естественного потока.",
              "Шаблонные ответы без персонализации и фактов.",
              "Конфликтные формулировки в публичных ответах.",
              "Отсутствие связи между репутацией и процессами сервиса - «чинят текстами», а не причины.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Как часто делать аудит?",
            body: "Раз в 3–6 месяцев, а также после изменений в продукте/сервисе, при запуске новых филиалов, после кризисов или заметных скачков в рейтингах.",
          },
          {
            title: "Когда ждать эффект?",
            body: "Быстрые сдвиги (рост доли ответов, снижение негатива, увеличение CTR) заметны в течение 2–4 недель. Устойчивый рост рейтинга и конверсии требует регулярности в горизонте 1–3 месяцев.",
          },
          {
            title: "Можно ли просить отзывы?",
            body: "Да, этично и ненавязчиво: после успешного контакта, с чёткими инструкциями и удобной ссылкой. Нельзя стимулировать фальшивую активность - это нарушает правила платформ и бьёт по доверию.",
          },
        ],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleReviewsAuditChecklist",
    steps: [
      {
        id: "reviews-audit-checklist",
        title: "",
        description: "",
        items: [
          "Соберите все площадки и выгрузите отзывы за 12–24 мес.",
          "Постройте динамику: количество, тональность, рейтинг по месяцам.",
          "Выделите повторяющиеся темы и корневые причины негатива.",
          "Проверьте долю и качество ответов, скорость реакции и шаблоны.",
          "Настройте регулярный этичный сбор свежих отзывов.",
          "Включите ежемесячный мониторинг и сравнение с конкурентами.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Review audit for your business: why it matters, what to expect, and how to do it right",
    lead: [
      "Reviews directly impact trust, calls, bookings, and in-person visits. A review audit helps you understand what customers say, where they say it, and how your responses affect conversion and local visibility.",
      "This is a practical framework for auditing reviews across platforms and turning findings into measurable improvements.",
    ],
    sections: [
      {
        title: "Why you need a review audit",
        blocks: [
          {
            title: "1. Understand your real reputation",
            body: "Your feedback is spread across platforms: Google, Yelp, industry directories, and social media. An audit consolidates everything so you can see what’s working and what’s hurting conversion.",
          },
          {
            title: "2. Find systemic service issues",
            body: "Recurring complaints show where the customer journey breaks: wait time, pricing, communication, scheduling, quality, cleanliness, and follow-up.",
          },
          {
            title: "3. Strengthen positive signals",
            body: "It’s not just having reviews-it’s recency, frequency, quality, distribution across platforms, and how your listing shows up in search.",
          },
          {
            title: "4. Support local SEO",
            body: "Google uses engagement signals like review volume, velocity, ratings, owner replies, and profile completeness. Reviews impact local pack CTR and conversion.",
          },
          {
            title: "5. Manage reputation risks",
            body: "Spikes in negative feedback can snowball. Auditing helps you spot causes early and build a response process before issues escalate.",
          },
        ],
      },
      {
        title: "What a full review audit should include",
        blocks: [
          {
            title: "1. Platform map and priorities",
            body: "Google Business Profile, Apple Maps listings, Bing Places, Yelp, Facebook, industry directories, forums, and local communities. Assign weight and priority per channel.",
          },
          {
            title: "2. Volume and trends",
            body: "Total review count and 3/6/12 month trend, review velocity, and gaps. Recency is a major trust signal.",
          },
          {
            title: "3. Rating stability",
            body: "What drives your average rating, differences by platform, sudden drops, and anomalies. Identify the biggest pain areas first.",
          },
          {
            title: "4. Sentiment and themes",
            body: "Share of positive/neutral/negative reviews, toxicity, suspicious patterns. Break down topics like quality, wait time, pricing, communication, scheduling, delivery, etc.",
          },
          {
            title: "5. Response performance",
            body: "Response rate, response time, tone, usefulness, and whether your team is closing loops. Copy-paste replies can make things worse.",
          },
        ],
      },
      {
        title: "How to run the audit (step by step)",
        blocks: [
          {
            title: "Step 1. Collect platforms and export reviews",
            body: "List your platforms and pull reviews for the last 12–24 months. Capture links, dates, rating, themes, and whether you replied. Put everything into a spreadsheet.",
          },
          {
            title: "Step 2. Analyze rating and trend",
            body: "Chart monthly review volume, sentiment mix, and average rating. Identify ‘storm’ periods and tie them to operational changes or seasonality.",
          },
          {
            title: "Step 3. Identify root causes",
            body: "Tag reviews by theme and quantify recurring problems. Translate insights into process fixes: SLAs, training, service standards, and quality control.",
          },
          {
            title: "Step 4. Improve reply quality",
            body: "Audit your responses: speed, tone, and helpfulness. Create scenarios for key cases (apology + fix, clarification, compensation, move to private channel).",
          },
          {
            title: "Step 5. Build an ethical review generation plan",
            body: "Add a steady review request flow: QR codes, post-service texts/emails, thank-you cards, and simple instructions. Focus on written feedback and (when relevant) photos.",
          },
          {
            title: "Step 6. Set monitoring and reporting",
            body: "Track monthly: review volume, sentiment share, average rating, response rate, response time, themes, and source channels. Compare to competitors and adjust.",
          },
        ],
      },
      {
        title: "Examples and common mistakes",
        blocks: [
          {
            title: "Example 1: no replies",
            body: "A business ignored reviews for months and stagnated. Adding a response SLA (24–48 hours), templates, and a steady review flow improved rating and profile CTR.",
          },
          {
            title: "Example 2: one location drives negativity",
            body: "Negative reviews clustered around one branch due to long waits and scheduling issues. Fixing staffing and process flow reduced complaints at the root.",
          },
          {
            title: "Common mistakes",
            body: [
              "Focusing only on one platform and ignoring Yelp/social/industry directories.",
              "Rare ‘bursts’ of reviews instead of a steady flow.",
              "Template replies with no personalization or facts.",
              "Public arguments and defensive tone.",
              "Trying to ‘fix reputation with words’ instead of fixing operations.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you audit?",
            body: "Every 3–6 months, and after major operational changes, launches, or reputation spikes.",
          },
          {
            title: "When will you see impact?",
            body: "Quick wins can show in 2–4 weeks. More stable rating and conversion improvements usually take 1–3 months of consistent work.",
          },
          {
            title: "Can you ask for reviews?",
            body: "Yes-politely and ethically after a successful interaction. Never offer incentives or pressure customers.",
          },
        ],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleReviewsAuditChecklist",
    steps: [
      {
        id: "reviews-audit-checklist",
        title: "",
        description: "",
        items: [
          "List all platforms and export 12–24 months of reviews.",
          "Chart monthly volume, sentiment, and rating.",
          "Identify recurring themes and root causes.",
          "Audit reply rate, response time, and templates.",
          "Set up an ethical review request flow.",
          "Add monthly monitoring and competitor comparison.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "ביקורת ביקורות לעסק: למה זה חשוב ואיך עושים נכון",
    lead: [
      "ביקורות משפיעות על אמון, שיחות, הזמנות והגעה. ביקורת ביקורות עוזרת להבין מה כותבים עליכם, איפה, ואיך תגובות העסק משפיעות על החלטה ונראות מקומית.",
      "להלן מסגרת עבודה פרקטית לבדיקת הביקורות והפיכת ממצאים לשיפור.",
    ],
    sections: [
      {
        title: "למה צריך ביקורת ביקורות",
        blocks: [
          {
            title: "1. להבין את המוניטין האמיתי",
            body: "המשוב מפוזר בין פלטפורמות. ביקורת מרכזת את הכל לתמונה אחת: מה עובד ומה פוגע בהמרה.",
          },
          {
            title: "2. למצוא בעיות שירות שחוזרות",
            body: "תלונות חוזרות חושפות נקודות שבירה במסע הלקוח: זמני המתנה, תמחור, תקשורת, תיאום, איכות.",
          },
          {
            title: "3. לחזק סיגנלים חיוביים",
            body: "חשובה הטריות, התדירות והאיכות-לא רק הכמות.",
          },
          {
            title: "4. לתמוך ב‑Local SEO",
            body: "Google מתחשבת בדירוג, קצב ביקורות, תגובות בעל העסק ושלמות הכרטיס.",
          },
        ],
      },
      {
        title: "איך לבצע (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. איסוף פלטפורמות ונתונים",
            body: "לאסוף ביקורות 12–24 חודשים, כולל תאריך, דירוג, נושא והאם הייתה תגובה.",
          },
          {
            title: "שלב 2. ניתוח מגמות ודירוג",
            body: "להציג גרפים חודשיים של כמות, טון ודירוג ממוצע, ולזהות תקופות חריגות.",
          },
          {
            title: "שלב 3. זיהוי סיבות שורש",
            body: "לסווג לפי נושאים ולבחור בעיות שחוזרות כדי לתקן תהליך ולא רק טקסט.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "כל כמה זמן לעשות?",
            body: "כל 3–6 חודשים, וגם אחרי שינויים משמעותיים או משבר.",
          },
        ],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleReviewsAuditChecklist",
    steps: [
      {
        id: "reviews-audit-checklist",
        title: "",
        description: "",
        items: [
          "לאסוף את כל הפלטפורמות ולייצא ביקורות ל‑12–24 חודשים.",
          "לבנות מגמות: כמות, טון ודירוג.",
          "לזהות נושאים חוזרים וסיבות שורש.",
          "לבדוק אחוז תגובות וזמני תגובה.",
          "להגדיר תהליך אתי לאיסוף ביקורות.",
          "להוסיף ניטור חודשי והשוואה למתחרים.",
        ],
      },
    ],
  },
};

export default content;
