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
      "Посты и акции в Google Business Profile: зачем они нужны и как делать их по‑деловому",
    lead: [
      "Публикации и акции в Google Business Profile для белорусского бизнеса - это мощный инструмент для привлечения местных клиентов из Минска, Бреста, Гомеля и других городов Беларуси и повышения видимости в локальном поиске. Правильно оформленные посты помогают удерживать внимание, сообщать о новостях и акциях и стимулировать обращения.",
      "Большинство бизнесов либо вообще не знают про эту возможность, либо используют её формально: публикуют что‑то раз в полгода и забывают. А между тем, правильная стратегия постов может заметно повысить видимость в картах, увеличить клики на сайт и даже напрямую привести к звонкам и заявкам.",
    ],
    sections: [
      {
        title: "Зачем бизнесу использовать посты и акции в Google",
        blocks: [
          {
            title: "1. Усиление локального SEO",
            body: "Google учитывает активность карточки при ранжировании. Регулярные посты - сигнал, что бизнес живой, обновляется и общается с клиентами. Каждый пост добавляет немного контента и увеличивает время взаимодействия пользователя с карточкой. В сумме это помогает подниматься выше по локальным запросам.",
          },
          {
            title: "2. Повышение доверия клиентов",
            body: "Когда клиент видит, что компания публикует новости, акции и полезные советы, создаётся ощущение стабильности и прозрачности. На фоне «заброшенных» карточек активность выглядит как признак живого бизнеса.",
          },
          {
            title: "3. Больше действий с карточки",
            body: "В постах можно добавлять кнопки: «Позвонить», «Записаться», «Перейти на сайт», «Забронировать» и т.д. Каждый пост - это дополнительный шанс, что человек сделает конкретное действие.",
          },
          {
            title: "4. Коммуникация изменений",
            body: "Посты - удобный способ сообщить о временных или постоянных изменениях: новом графике, переезде, ремонте, запуске услуг, сезонных предложениях. Клиент получает актуальную информацию прямо в поиске.",
          },
          {
            title: "5. Контроль над тем, что видит пользователь",
            body: "Если вы не публикуете посты, Google чаще показывает в карточке контент, добавленный пользователями: случайные фото, вопросы и т.п. Регулярные посты помогают вам формировать повестку - какие сообщения клиент видит в первую очередь.",
          },
        ],
      },
      {
        title: "Чего ожидать от регулярных публикаций",
        blocks: [
          {
            body: "При публикации 1–2 постов в неделю в течение 1–3 месяцев бизнес обычно видит:",
          },
          {
            body: [
              "Увеличение количества целевых действий (звонков, переходов на сайт, записей).",
              "Лёгкое улучшение позиций по локальным запросам.",
              "Рост уровня доверия к бренду.",
              "Меньше повторяющихся вопросов от клиентов.",
            ],
          },
          {
            body: "Это не «волшебная кнопка» мгновенного роста, а способ постепенно усиливать остальные усилия в локальном маркетинге.",
          },
        ],
      },
      {
        title: "Какие бывают типы постов в Google Business Profile",
        blocks: [
          {
            title: "1. Объявления (Update)",
            body: "Формат для новостей и изменений: новые услуги, смена расписания, появление сертификатов или нового оборудования. Подходит для коротких, фактических сообщений.",
          },
          {
            title: "2. Специальные предложения (Offers)",
            body: "Один из самых конверсионных форматов: скидки, промокоды, сезонные распродажи и ограниченные по времени предложения. Важно чётко указывать условия, сроки и добавлять понятную кнопку действия.",
          },
          {
            title: "3. События (Events)",
            body: "Подходит для анонсов вебинаров, офлайн‑мероприятий, мастер‑классов, дней открытых дверей и распродаж в конкретные даты. Позволяет указать время начала и окончания события.",
          },
          {
            title: "4. Посты с товарами или услугами",
            body: "Формат для акцента на конкретных товарах или услугах с ценой и ссылкой. Хорошо работает там, где важно «показать лицом»: блюда, процедуры, конкретные виды ремонта.",
          },
        ],
      },
      {
        title: "Как правильно оформлять посты: структура и содержание",
        blocks: [
          {
            title: "1. Чёткая цель каждого поста",
            body: "Перед публикацией определите цель: звонок, запись, переход на сайт, информирование о новой услуге. Пост без цели обычно превращается в информационный шум.",
          },
          {
            title: "2. Структура, которая работает",
            body: [
              "Понятный заголовок.",
              "1–3 абзаца текста без канцелярита.",
              "Качественное изображение.",
              "Чёткий призыв к действию.",
              "CTA‑кнопка, которая соответствует цели поста.",
            ],
          },
          {
            title: "3. Понятный язык и локальный контекст",
            body: "Пишите так, как говорите с клиентом вживую. Учитывайте локальный контекст (район, город, особенности аудитории) - это помогает быть ближе и понятнее.",
          },
        ],
      },
      {
        title: "Типичные ошибки при работе с постами",
        blocks: [
          {
            title: "1. Публиковать хаотично и без плана",
            body: "Посты «от случая к случаю» редко дают эффект. Лучше иметь простой план: 1–2 поста в неделю с понятными целями.",
          },
          {
            title: "2. Дублировать сайт один в один",
            body: "Посты - не копия сайта. Не вставляйте длинные полотна текста: люди читают их в беглом режиме.",
          },
          {
            title: "3. Забывать про визуал",
            body: "Посты без фото или с некачественными изображениями проигрывают в CTR. Лучше иметь несколько нормальных фото под разные типы публикаций.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Посты и акции в Google Business Profile - это не «обязательный ритуал», а инструмент, который помогает чаще напоминать о себе, усиливать карточку в поиске и приводить конкретные заявки. Достаточно коротких, понятных и регулярных публикаций с чёткой целью и нормальным визуалом.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Posts and offers in Google Business Profile: why they matter and how to do them professionally",
    lead: [
      "Posts in your Google Business Profile are an underrated lever for local visibility and conversion in the U.S. They help you stay active, communicate updates and offers, and give nearby searchers more reasons to call, visit, or click.",
      "Most businesses either don’t use posts at all, or publish something once every few months. A simple, consistent posting strategy can improve trust, increase listing actions, and support your local SEO efforts.",
    ],
    sections: [
      {
        title: "Why use posts and offers",
        blocks: [
          {
            title: "1. Supports local SEO",
            body: "Google considers profile activity as a quality signal. Regular posts indicate the business is active and updated, and can increase engagement with your listing.",
          },
          {
            title: "2. Builds customer trust",
            body: "When customers see fresh updates, offers, and useful information, the business feels more legitimate and transparent compared to abandoned listings.",
          },
          {
            title: "3. Drives more actions",
            body: "Posts can include CTAs like Call, Book, Learn more, or Website. Each post is another chance to turn a view into an action.",
          },
          {
            title: "4. Communicates changes",
            body: "Use posts to announce changes: hours updates, relocations, renovations, new services, seasonal offers, or limited-time deals.",
          },
          {
            title: "5. Controls what users see first",
            body: "If you don’t publish, Google may surface user-generated photos and questions by default. Posting helps you shape the narrative.",
          },
        ],
      },
      {
        title: "What to expect from consistent posting",
        blocks: [
          {
            body: "With 1–2 posts per week for 1–3 months, you’ll typically see:",
          },
          {
            body: [
              "More listing actions (calls, website clicks, bookings).",
              "Slight improvement in local query visibility.",
              "Higher brand trust.",
              "Fewer repeated customer questions.",
            ],
          },
          {
            body: "It’s not an instant-growth button-more like a compounding support system for local marketing.",
          },
        ],
      },
      {
        title: "Common post types",
        blocks: [
          {
            title: "1. Updates",
            body: "Use for news: new services, schedule changes, certifications, or new equipment.",
          },
          {
            title: "2. Offers",
            body: "Discounts, promo codes, seasonal deals, limited-time offers. Make conditions clear and use a strong CTA.",
          },
          {
            title: "3. Events",
            body: "Webinars, workshops, open days, sales events-anything tied to specific dates.",
          },
          {
            title: "4. Product/service highlights",
            body: "Feature a specific product or service with a price and a link. Great for restaurants, clinics, and repair services.",
          },
        ],
      },
      {
        title: "How to write posts that work",
        blocks: [
          {
            title: "1. Define a clear goal",
            body: "Before posting, decide what action you want: call, booking, website visit, or awareness. No-goal posts become noise.",
          },
          {
            title: "2. Use a simple structure",
            body: [
              "Clear headline.",
              "1–3 short paragraphs.",
              "High-quality image.",
              "Clear CTA.",
              "A button that matches the goal.",
            ],
          },
          {
            title: "3. Plain language + local context",
            body: "Write like you speak to customers. If relevant, mention a neighborhood or service area (for example, Downtown, Midtown, or a specific suburb) to make it feel local and concrete.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "1. Posting randomly",
            body: "Inconsistent posting rarely produces results. Keep a simple schedule: 1–2 posts per week.",
          },
          {
            title: "2. Copying your website",
            body: "Posts are not blog articles. Avoid long text walls-people scan quickly in Maps.",
          },
          {
            title: "3. Ignoring visuals",
            body: "Posts without strong images typically underperform. Prepare a small set of decent visuals for different post types.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Google Business Profile posts help you stay visible, build trust, and drive real actions. You don’t need complex content-short, consistent updates with clear goals and good visuals are enough.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "פוסטים ומבצעים ב‑Google Business Profile: למה זה חשוב ואיך לעשות את זה נכון",
    lead: [
      "פוסטים בכרטיס Google Business Profile הם כלי חזק אך לעיתים מוזנח לשיפור נראות מקומית והמרה. הם עוזרים לשמור על הכרטיס פעיל, להעביר עדכונים ומבצעים, ולתת ללקוחות עוד סיבות להתקשר או להזמין.",
      "הרבה עסקים מפרסמים פעם בכמה חודשים או לא מפרסמים בכלל. אסטרטגיה פשוטה ועקבית יכולה לחזק אמון, להגדיל פעולות בכרטיס ולתמוך ב‑SEO המקומי.",
    ],
    sections: [
      {
        title: "למה להשתמש בפוסטים ומבצעים",
        blocks: [
          {
            title: "1. תמיכה ב‑SEO מקומי",
            body: "Google מתייחסת לפעילות בכרטיס כסיגנל איכות. פוסטים קבועים מצביעים שהעסק פעיל ומעודכן ויכולים להגדיל מעורבות.",
          },
          {
            title: "2. יותר אמון",
            body: "כשהלקוח רואה עדכונים ומבצעים טריים, העסק נראה יציב ושקוף יותר בהשוואה לכרטיסים נטושים.",
          },
          {
            title: "3. יותר פעולות",
            body: "אפשר להוסיף כפתורי פעולה כמו שיחה, הזמנה או מעבר לאתר. כל פוסט הוא עוד הזדמנות להפוך צפייה לפעולה.",
          },
          {
            title: "4. תקשורת שינויים",
            body: "להודיע על שינוי שעות, מעבר מקום, שיפוץ, שירותים חדשים, מבצעים עונתיים או דילים לזמן מוגבל.",
          },
          {
            title: "5. שליטה במה שהלקוח רואה",
            body: "בלי פוסטים, Google עשויה להדגיש תכנים של משתמשים (תמונות/שאלות). פוסטים עוזרים לכם לקבוע סדר עדיפויות.",
          },
        ],
      },
      {
        title: "למה לצפות מפרסום עקבי",
        blocks: [
          {
            body: "עם 1–2 פוסטים בשבוע במשך 1–3 חודשים בדרך כלל רואים:",
          },
          {
            body: [
              "יותר פעולות בכרטיס (שיחות, קליקים, הזמנות).",
              "שיפור קל בנראות לחיפושים מקומיים.",
              "יותר אמון במותג.",
              "פחות שאלות חוזרות.",
            ],
          },
          {
            body: "זה לא כפתור קסם-זה כלי שמחזק את המערכת לאורך זמן.",
          },
        ],
      },
      {
        title: "סוגי פוסטים נפוצים",
        blocks: [
          {
            title: "1. עדכונים",
            body: "חדשות: שירותים חדשים, שינויי שעות, תעודות, ציוד חדש.",
          },
          {
            title: "2. מבצעים",
            body: "הנחות, קופונים, מבצעים עונתיים ודילים לזמן מוגבל. חשוב להגדיר תנאים ו‑CTA ברור.",
          },
          {
            title: "3. אירועים",
            body: "וובינרים, סדנאות, ימים פתוחים, אירועי מכירה-כל דבר עם תאריך.",
          },
          {
            title: "4. הדגשת מוצר/שירות",
            body: "להציג שירות או מוצר ספציפי עם מחיר וקישור. מתאים למסעדות, קליניקות ותיקונים.",
          },
        ],
      },
      {
        title: "איך לכתוב פוסט שעובד",
        blocks: [
          {
            title: "1. מטרה ברורה",
            body: "להחליט מראש מה רוצים שהלקוח יעשה: להתקשר, להזמין, להיכנס לאתר או רק להבין עדכון.",
          },
          {
            title: "2. מבנה פשוט",
            body: [
              "כותרת ברורה.",
              "1–3 פסקאות קצרות.",
              "תמונה איכותית.",
              "CTA ברור.",
              "כפתור שמתאים למטרה.",
            ],
          },
          {
            title: "3. שפה פשוטה והקשר מקומי",
            body: "לכתוב כמו שמדברים עם לקוח. אם מתאים, להזכיר שכונה/אזור שירות כדי לחזק תחושה מקומית.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            title: "1. פרסום בלי שגרה",
            body: "פרסום לא עקבי כמעט לא עובד. עדיף שגרה פשוטה של 1–2 פוסטים בשבוע.",
          },
          {
            title: "2. להעתיק את האתר",
            body: "פוסטים הם לא מאמרים. לא צריך טקסט ארוך-במפות קוראים מהר.",
          },
          {
            title: "3. להזניח ויזואל",
            body: "פוסטים בלי תמונות טובות נוטים לבצע פחות טוב. שווה להכין סט בסיסי של תמונות.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "פוסטים ב‑Google Business Profile עוזרים להישאר נראים, לבנות אמון ולהניע פעולות. לא חייבים תוכן מורכב-עדכונים קצרים, עקביים ועם מטרה ברורה מספיקים.",
          },
        ],
      },
    ],
  },
};

export default content;
