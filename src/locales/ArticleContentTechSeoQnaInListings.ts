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
    title: "Настройка Q&A (Вопросы и ответы) в карточках: полное руководство",
    lead: [
      "Раздел Q&A в карточках компании - один из самых недооценённых инструментов локального SEO. Правильно настроенные вопросы и ответы помогают быстрее снять возражения клиентов, уменьшают нагрузку на поддержку, повышают конверсию и улучшают позиции в локальной выдаче.",
      "Ниже - зачем нужен Q&A, каких результатов ждать и как правильно всё настроить.",
    ],
    sections: [
      {
        title: "Зачем нужен раздел Q&A",
        blocks: [
          {
            title: "1. Повышение доверия клиентов",
            body: "Готовые ответы на частые вопросы (режим работы, цены, запись, парковка) создают впечатление открытости и прозрачности. Это снижает сомнения и увеличивает вероятность выбора именно вас в картах.",
          },
          {
            title: "2. Снижение нагрузки на звонки и переписки",
            body: "Q&A закрывает повторяющиеся вопросы заранее: меньше однотипных звонков и чатов, выше эффективность команды.",
          },
          {
            title: "3. Рост конверсий и улучшение поведенческих факторов",
            body: "Пользователь, получивший ответы прямо в выдаче, быстрее принимает решение. Это улучшает поведенческие метрики карточки, что помогает росту позиций в локальном поиске.",
          },
          {
            title: "4. Защита от провокаций и ложных вопросов",
            body: "Если раздел пуст, недоброжелатели могут задавать вводящие в заблуждение вопросы. Заполнив Q&A заранее, вы задаёте контекст и снижаете репутационные риски.",
          },
        ],
      },
      {
        title: "Чего ожидать от правильно настроенного Q&A",
        blocks: [
          {
            body: [
              "Больше кликов «Позвонить», «Сайт», «Маршрут» и больше обращений из карт.",
              "Лучшее качество лидов: клиенты приходят подготовленными.",
              "Меньше негативных отзывов из‑за непонимания условий (запись, возвраты, предоплата и т.п.).",
            ],
          },
        ],
      },
      {
        title: "Как правильно настроить Q&A: пошагово",
        blocks: [
          {
            title: "Шаг 1. Соберите список часто задаваемых вопросов",
            body: "Возьмите реальные вопросы из звонков, переписок, отзывов, чатов и соцсетей. Разбейте по категориям: базовые (адрес/часы/запись), цены, условия и процесс, ограничения, дополнительные услуги.",
          },
          {
            title: "Шаг 2. Сформулируйте вопросы сами",
            body: "Это нормальная практика. Пишите естественные, короткие и точные формулировки - как будто их задал клиент. Избегайте маркетинговых штампов. Пример: плохо - «Правда ли, что у вас лучшие цены?» хорошо - «Сколько стоит услуга?»",
          },
          {
            title: "Шаг 3. Давайте структурированные ответы",
            body: "Давайте конкретику (да/нет/стоимость/срок), пишите короткими абзацами, добавляйте полезные детали и ссылки при необходимости. Пример: «Да, принимаем срочные заказы. Обычно от 2 до 24 часов - зависит от объёма. Позвоните заранее, чтобы подтвердить возможность на сегодня».",
          },
          {
            title: "Шаг 4. Оптимизация под SEO (без спама)",
            body: [
              "Естественно используйте ключевые слова: «ремонт айфонов», «маникюр в Минске», «эвакуатор 24/7».",
              "Упоминайте район/город, если это звучит нормально для живой речи.",
              "Добавляйте короткие CTA: «Записаться онлайн», «Позвонить», «Посмотреть цены».",
            ],
          },
          {
            title: "Шаг 5. Регулярное обновление и модерация",
            body: "Добавляйте новые вопросы по мере появления, корректируйте ответы и следите за пользовательскими вопросами, чтобы не оставлять их без внимания.",
          },
        ],
      },
      {
        title: "Шаблоны вопросов по категориям",
        blocks: [
          {
            title: "Базовые",
            body: [
              "Где вы находитесь и как к вам добраться?",
              "Какие у вас часы работы? Работаете ли по выходным?",
              "Как записаться онлайн? Есть ли запись через мессенджеры?",
            ],
          },
          {
            title: "Цены",
            body: [
              "Сколько стоит услуга X? Есть ли «цена от»?",
              "Есть ли бесплатная первичная консультация?",
              "Принимаете ли предоплату/какие способы оплаты доступны?",
            ],
          },
          {
            title: "Условия и процесс",
            body: [
              "Сколько занимает процедура? Можно ли срочно?",
              "Какие документы/подготовка нужны для услуги?",
              "Как устроена гарантия/возврат?",
            ],
          },
          {
            title: "Ограничения и доступность",
            body: [
              "Есть ли парковка/доступность для колясок?",
              "Работаете ли с детьми/иностранными гражданами?",
              "Принимаете ли животных/сопровождающих?",
            ],
          },
          {
            title: "Дополнительные услуги",
            body: [
              "Делаете ли вы выезд/доставку/ночные заказы?",
              "Можно ли оформить заказ полностью онлайн?",
              "Есть ли скидки для постоянных клиентов?",
            ],
          },
        ],
      },
      {
        title: "Ошибки и лучшие практики",
        blocks: [
          {
            title: "Ошибки",
            body: [
              "Пустой раздел Q&A - его заполняют пользователи без вашего участия.",
              "Маркетинговые заявления и «простыни» из ключей вместо конкретики.",
              "Отсутствие модерации и обновлений - устаревшие ответы подрывают доверие.",
            ],
          },
          {
            title: "Лучшие практики",
            body: [
              "Заполните 10–20 ключевых вопросов на старте во всех активных карточках.",
              "Поддерживайте единый тон: вежливо, по делу, без лишнего маркетинга.",
              "Добавляйте CTA и ссылки там, где это помогает действию.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Можно ли задавать вопросы от имени компании?",
            body: "Да, это распространённая практика: вы задаёте вопросы, которые действительно помогают клиенту, и отвечаете на них прозрачно.",
          },
          {
            title: "Когда ждать эффект?",
            body: "Обычно в течение 1–3 месяцев растёт число взаимодействий и обращений из карт при условии регулярной модерации и актуальности ответов.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleQnaInListingsChecklist",
    steps: [
      {
        id: "qna-in-listings-checklist",
        title: "",
        description: "",
        items: [
          "Соберите реальные вопросы по каналам поддержки.",
          "Сформулируйте 10–20 ключевых вопросов и структурированные ответы.",
          "Добавьте естественные ключи и упоминания района/города, где уместно.",
          "Модерируйте новые вопросы и обновляйте ответы ежемесячно.",
          "Добавляйте краткие CTA: «Записаться онлайн», «Позвонить», «Посмотреть цены».",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Q&A in business listings: a practical guide",
    lead: [
      "The Q&A section in a business listing is one of the most underestimated local SEO tools. Well-written questions and answers reduce objections, lighten support workload, improve conversion, and support local visibility.",
      "Below is why Q&A matters, what to expect, and how to set it up correctly.",
    ],
    sections: [
      {
        title: "Why Q&A matters",
        blocks: [
          {
            title: "1. Higher trust",
            body: "Clear answers about hours, pricing, booking, and parking make the business feel transparent-reducing hesitation and increasing selection in Maps.",
          },
          {
            title: "2. Lower support load",
            body: "Q&A addresses repeated questions upfront: fewer calls and chats, more efficient operations.",
          },
          {
            title: "3. Better conversion",
            body: "When users get answers right in the listing, they decide faster-improving engagement signals.",
          },
          {
            title: "4. Protection from misleading questions",
            body: "If Q&A is empty, random users can set the tone. Pre-filling the section reduces reputation risk.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "More clicks on Call/Website/Directions.",
              "Better lead quality (customers come prepared).",
              "Fewer negative reviews caused by misunderstanding.",
            ],
          },
        ],
      },
      {
        title: "How to set up Q&A (step by step)",
        blocks: [
          {
            title: "Step 1. Collect real questions",
            body: "Pull questions from calls, chats, reviews, and social messages. Group them: basics, pricing, process, limitations, extras.",
          },
          {
            title: "Step 2. Write the questions yourself",
            body: "That’s normal. Keep them short and realistic. Avoid marketing phrasing.",
          },
          {
            title: "Step 3. Write structured answers",
            body: "Be specific: yes/no, price range, timeline. Use short paragraphs. Add links when useful.",
          },
          {
            title: "Step 4. Add SEO naturally",
            body: [
              "Use keywords naturally (service + city) when it fits.",
              "Mention neighborhoods or service areas only when natural.",
              "Add short CTAs (Book online, Call, View pricing).",
            ],
          },
          {
            title: "Step 5. Moderate and update",
            body: "Keep the section fresh: update answers, reply to new questions, and remove outdated info.",
          },
        ],
      },
      {
        title: "Question templates",
        blocks: [
          {
            title: "Basics",
            body: [
              "Where are you located and how do I get there?",
              "What are your hours? Are you open on weekends?",
              "How do I book? Do you accept messages?",
            ],
          },
          {
            title: "Pricing",
            body: [
              "How much does service X cost?",
              "Do you offer a free initial consultation?",
              "What payment methods do you accept?",
            ],
          },
        ],
      },
      {
        title: "Mistakes and best practices",
        blocks: [
          {
            title: "Mistakes",
            body: [
              "Leaving Q&A empty.",
              "Keyword-stuffed ‘marketing essays’ instead of clear answers.",
              "No moderation-outdated answers reduce trust.",
            ],
          },
          {
            title: "Best practices",
            body: [
              "Pre-fill 10–20 key questions per listing.",
              "Keep tone consistent and human.",
              "Add CTAs and links only when they help the next step.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Can the business ask questions on its own listing?",
            body: "Yes. It’s common to add questions that genuinely help customers, then answer transparently.",
          },
          {
            title: "When will you see results?",
            body: "Often within 1–3 months, assuming you keep it updated and respond consistently.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleQnaInListingsChecklist",
    steps: [
      {
        id: "qna-in-listings-checklist",
        title: "",
        description: "",
        items: [
          "Collect real support questions.",
          "Write 10–20 core questions with structured answers.",
          "Add natural keywords and (when relevant) city/area mentions.",
          "Moderate new questions and refresh answers monthly.",
          "Add short CTAs: Book online, Call, View pricing.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "שאלות ותשובות (Q&A) בכרטיס העסק: מדריך מעשי",
    lead: [
      "אזור ה‑Q&A בכרטיס העסק הוא כלי חזק ל‑Local SEO. שאלות ותשובות טובות מורידות התנגדויות, מפחיתות עומס על תמיכה ומגדילות פניות.",
      "להלן למה זה חשוב ואיך להגדיר נכון.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "1. יותר אמון",
            body: "תשובות ברורות על שעות, מחירים ותהליך גורמות לעסק להיראות שקוף.",
          },
          {
            title: "2. יותר המרות",
            body: "כשלקוח מקבל תשובה במפות, הוא מחליט מהר יותר.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleQnaInListingsChecklist",
    steps: [
      {
        id: "qna-in-listings-checklist",
        title: "",
        description: "",
        items: [
          "לאסוף שאלות אמיתיות מהתמיכה.",
          "לנסח 10–20 שאלות מרכזיות ותשובות מסודרות.",
          "להוסיף מילות מפתח ואזכור אזור/עיר כשזה טבעי.",
          "למתן שאלות ולעדכן תשובות באופן חודשי.",
          "להוסיף CTA קצר: הזמנה אונליין / שיחה / מחירים.",
        ],
      },
    ],
  },
};

export default content;
