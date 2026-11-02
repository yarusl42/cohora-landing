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
    title: "Публикация новостей компании и анонсов локальных событий",
    lead: [
      "Регулярные новости и анонсы локальных событий - инструмент укрепления доверия к бренду, повышения узнаваемости и поддержки локального SEO. Такой контент помогает бизнесу выглядеть «живым»: показывает развитие компании, участие в жизни города и заботу о своей аудитории.",
    ],
    sections: [
      {
        title: "Зачем публиковать новости и локальные анонсы",
        blocks: [
          {
            title: "1. Повышение доверия и «живой» образ бренда",
            body: "Свежий раздел «Новости» создаёт ощущение, что компания работает и развивается. Отсутствие обновлений годами, наоборот, вызывает сомнения: бизнес ли вообще активен.",
          },
          {
            title: "2. Усиление локального SEO",
            body: "Новости и анонсы расширяют семантику, по которой сайт появляется в поиске, помогают индексироваться по локальным запросам и повышают общий авторитет ресурса.",
          },
          {
            title: "3. Привлечение новой аудитории",
            body: "Интересные новости попадают в рекомендации, соцсети, локальные паблики и рассылки. Это даёт дополнительный бесплатный трафик от людей, которые раньше могли не знать о компании.",
          },
          {
            title: "4. Улучшение коммуникации с клиентами",
            body: "Через новости удобно сообщать об изменении графика, новых услугах, акциях, открытии филиалов, обновлении оборудования, партнёрствах. Это повышает прозрачность - важный фактор доверия.",
          },
          {
            title: "5. Участие в жизни города",
            body: "Анонсы событий связывают бренд с городом и сообществом. Для Беларуси полезно упоминать конкретные локации и контекст: Минск, Брест, Гомель; районы Минска; площадки и события, которые узнаёт местная аудитория.",
          },
        ],
      },
      {
        title: "Чего ожидать от регулярной публикации новостей",
        blocks: [
          {
            title: "1. Постепенный рост органического трафика",
            body: "Каждая новость - новая точка входа. Через 2–4 месяца регулярных публикаций появляются дополнительные запросы, растёт количество показов и глубина просмотра.",
          },
          {
            title: "2. Увеличение упоминаний бренда",
            body: "Полезные новости репостят в соцсетях, мессенджерах и на локальных площадках. Увеличивается количество упоминаний без прямых рекламных затрат.",
          },
          {
            title: "3. Рост вовлечённости и возвратов",
            body: "Люди чаще возвращаются на сайты, где регулярно появляется новый контент. Увеличивается время на сайте и повторные визиты.",
          },
          {
            title: "4. Улучшение репутации",
            body: "Активный бренд, который делится новостями и участием в жизни города, воспринимается лучше, чем «молчащий» бизнес.",
          },
          {
            title: "5. Рост конверсий",
            body: "Постоянный контакт через новости повышает доверие и облегчает решение обратиться именно к вам.",
          },
        ],
      },
      {
        title: "Как организовать публикацию: пошаговая схема",
        blocks: [
          {
            title: "Шаг 1. Определите форматы контента",
            body: [
              "новости компании (новый сервис, награды, расширение);",
              "анонсы акций и спецпредложений;",
              "участие в выставках/фестивалях/форумах;",
              "репортажи о прошедших мероприятиях;",
              "социальные и благотворительные проекты.",
            ],
          },
          {
            title: "Шаг 2. Составьте контент‑план",
            body: "Запланируйте новости на 1–3 месяца вперёд: закрепите регулярность (например, 1–2 новости в неделю), распределите темы и отметьте ключевые даты - праздники, мероприятия, сезонные пики спроса.",
          },
          {
            title: "Шаг 3. Пишите коротко, ясно и по делу",
            body: "Новость должна отвечать на три вопроса: что произошло, почему это важно и что делать дальше. Избегайте «воды» и сложных конструкций.",
          },
          {
            title: "Шаг 4. Добавляйте локальный контекст",
            body: "Упоминайте город/район, партнёров, площадки и события. Это усиливает локальное SEO и делает контент ближе аудитории.",
          },
          {
            title: "Шаг 5. Используйте визуал и ссылки",
            body: "Добавляйте фото, афиши, скриншоты, логотипы партнёров. Ставьте ссылки на релевантные страницы (услуги, формы записи, акции), чтобы направлять читателя к целевому действию.",
          },
          {
            title: "Шаг 6. Распространяйте новости",
            body: "Дублируйте анонсы в соцсетях, рассылках, локальных чатах и пабликах. Это усилит эффект и привлечёт больше аудитории на сайт.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Новости и анонсы делают сайт живым, усиливают доверие к бренду, поддерживают локальное SEO и помогают привлекать новых клиентов. При регулярной работе новостной раздел становится важной опорой маркетинговой стратегии.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Company news and local event announcements",
    lead: [
      "Regular company updates and local event announcements are a practical way to build trust, strengthen brand awareness, and support local SEO. This type of content signals that your business is active and invested in the community.",
    ],
    sections: [
      {
        title: "Why publish news and local updates",
        blocks: [
          {
            title: "1. Trust and a ‘live’ brand impression",
            body: "A fresh News section makes your business feel active. A site that hasn’t been updated in years can raise doubts.",
          },
          {
            title: "2. Local SEO support",
            body: "News expands the topics you rank for, improves indexing, and can strengthen topical authority over time.",
          },
          {
            title: "3. New audience reach",
            body: "Useful updates can earn shares in social media, community groups, and newsletters-bringing in free traffic from people who didn’t know you before.",
          },
          {
            title: "4. Better customer communication",
            body: "Use posts to announce holiday hours, new services, promotions, renovations, new locations, and partnerships.",
          },
          {
            title: "5. Community connection",
            body: "Local context makes content tangible. In the U.S., referencing a neighborhood (e.g., Downtown, Midtown), a local venue, or a community event helps customers relate-and supports local relevance.",
          },
        ],
      },
      {
        title: "What to expect from consistent posting",
        blocks: [
          {
            title: "1. Gradual organic traffic growth",
            body: "Each post becomes a new entry point. After 2–4 months of consistent publishing, you typically see broader keyword coverage and more impressions.",
          },
          {
            title: "2. More brand mentions",
            body: "Good updates get reshared and referenced, increasing share of voice without direct ad spend.",
          },
          {
            title: "3. Higher engagement and return visits",
            body: "Sites with fresh content see more repeat visits and longer session time.",
          },
          {
            title: "4. Reputation lift",
            body: "A transparent, active brand tends to be perceived more positively.",
          },
          {
            title: "5. Better conversions",
            body: "Repeated exposure to your updates can increase trust and make customers more likely to choose you.",
          },
        ],
      },
      {
        title: "A simple publishing workflow",
        blocks: [
          {
            title: "Step 1. Pick content formats",
            body: [
              "company updates (new services, awards, expansions);",
              "promotions and special offers;",
              "event participation;",
              "post-event recaps;",
              "community and charity initiatives.",
            ],
          },
          {
            title: "Step 2. Build a 1–3 month calendar",
            body: "Set a cadence (e.g., 1–2 posts per week), map topics, and note key seasonal dates.",
          },
          {
            title: "Step 3. Write clearly",
            body: "Answer: what happened, why it matters, and what to do next.",
          },
          {
            title: "Step 4. Add local context",
            body: "Mention service areas, neighborhoods, partners, and local venues when relevant.",
          },
          {
            title: "Step 5. Use visuals and internal links",
            body: "Add photos/posters/screenshots, and link to services, booking pages, and offers.",
          },
          {
            title: "Step 6. Distribute",
            body: "Repurpose posts for social, email, and local community groups.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Company news and local updates keep your site fresh, build trust, support local SEO, and help attract customers over time.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "חדשות חברה והכרזות על אירועים מקומיים",
    lead: [
      "פרסום עדכונים שוטפים ואירועים מקומיים מחזק אמון, מגביר מודעות למותג ותומך ב‑SEO מקומי. זה משדר שהעסק פעיל ומעורב בקהילה.",
    ],
    sections: [
      {
        title: "למה לפרסם חדשות ועדכונים",
        blocks: [
          {
            title: "1. אמון ותדמית פעילה",
            body: "מדור חדשות מעודכן משדר שהעסק חי ומתפתח.",
          },
          {
            title: "2. תמיכה ב‑SEO מקומי",
            body: "תוכן חדש מרחיב נושאים ומסייע לאינדוקס לאורך זמן.",
          },
          {
            title: "3. תקשורת עם לקוחות",
            body: "אפשר לעדכן שעות, שירותים חדשים, מבצעים ושיתופי פעולה.",
          },
        ],
      },
      {
        title: "תהליך פשוט",
        blocks: [
          {
            title: "שלב 1. לבחור פורמטים",
            body: "עדכוני חברה, מבצעים, אירועים, סיכומי אירועים ופעילות קהילתית.",
          },
          {
            title: "שלב 2. לקבוע תדירות",
            body: "לרוב 1–2 פוסטים בשבוע ותכנון לחודש‑שלושה קדימה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "עדכונים שוטפים מחזקים אמון ותורמים לנראות לאורך זמן.",
          },
        ],
      },
    ],
  },
};

export default content;
