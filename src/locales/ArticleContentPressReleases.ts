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
      "Размещение пресс-релизов в местных СМИ: как усилить бренд и локальное SEO",
    lead: [
      "Размещение пресс-релизов в белорусских местных СМИ и новостных порталах Минска, Бреста, Гомеля и других городов - это одна из наиболее эффективных стратегий локального продвижения в Беларуси.",
      "Правильно подготовленные и размещённые пресс-релизы помогают укрепить локальные сигналы, получить качественные ссылки и повысить узнаваемость бренда среди местных клиентов.",
    ],
    sections: [
      {
        title: "Зачем размещать пресс-релизы в местных СМИ",
        blocks: [
          {
            title: "1. Повышение доверия к бренду",
            body: "Локальные СМИ обладают высоким уровнем доверия у жителей региона: их читают, к ним прислушиваются, с их помощью проверяют информацию. Когда ваша компания появляется в новостях рядом с важными городскими событиями, это создаёт ощущение серьёзности и надёжности.",
          },
          {
            title: "2. Укрепление локального присутствия",
            body: "Публикации о вашей компании показывают, что бизнес активно участвует в жизни города: открывает филиалы, создаёт рабочие места, поддерживает мероприятия, запускает социальные проекты. Это усиливает лояльность местной аудитории и помогает формировать образ «своей» компании.",
          },
          {
            title: "3. Дополнительный вклад в локальное SEO",
            body: "Ссылки и упоминания в местных медиа усиливают региональное SEO: поисковые системы видят, что бизнес фигурирует в локальных источниках, и охотнее продвигают его по геозапросам. Для брендов, ориентированных на конкретный город, это особенно ценно.",
          },
          {
            title: "4. Профессиональная подача новостей",
            body: "Пресс-релиз в СМИ выглядит более официально и структурированно, чем обычный пост в соцсетях: заголовок, лид, основная часть, цитаты, факты. Такой формат повышает ценность информации и её воспринимаемую значимость.",
          },
          {
            title: "5. Выход на аудиторию вне ваших каналов",
            body: "Не все потенциальные клиенты подписаны на ваши соцсети или заходят на сайт. Многие узнают новости исключительно из местных порталов и Telegram‑каналов СМИ. Пресс-релизы помогают достучаться до этой аудитории без прямых рекламных расходов.",
          },
        ],
      },
      {
        title: "Чего ожидать от публикаций пресс-релизов",
        blocks: [
          {
            title: "Рост посещаемости сайта",
            body: "После выхода заметной новости часть читателей перейдёт на сайт, чтобы узнать подробности, посмотреть услуги, найти контакты. Особенно хорошо работают релизы о запуске новых продуктов, открытии филиалов или участии в значимых мероприятиях.",
          },
          {
            title: "Увеличение количества обращений",
            body: "Часть клиентов приходит именно «из статьи»: они увидели новость, запомнили компанию и обратились спустя дни или недели. Эффект может быть как быстрым, так и накопительным - всё зависит от инфоповода и охвата.",
          },
          {
            title: "Рост узнаваемости бренда",
            body: "Каждая публикация добавляет вашему имени веса. Через несколько месяцев вы можете услышать: «Мы уже где-то про вас читали». Это важный элемент долгосрочного развития бренда.",
          },
          {
            title: "Улучшение репутации",
            body: "Регулярные новости о социальных проектах, достижениях, участии в жизни города создают образ открытой и ответственной компании, с которой приятно иметь дело.",
          },
          {
            title: "Повышение SEO-показателей",
            body: "Ссылки и упоминания с локальных медиа улучшают ссылочный профиль и усиливают региональное SEO. Для поисковиков это сигнал, что бизнес реален, значим и обсуждается в инфополе.",
          },
        ],
      },
      {
        title: "Как подготовить и разместить пресс-релиз в местных СМИ",
        blocks: [
          {
            title: "1. Определите сильный инфоповод",
            body: "Медиа публикуют только то, что интересно их аудитории. Хорошими инфоповодами могут быть:",
          },
          {
            body: [
              "открытие нового филиала или точки;",
              "запуск уникальной услуги или продукта;",
              "участие в значимом городском мероприятии;",
              "социальный или благотворительный проект;",
              "получение награды, сертификата, статуса.",
            ],
          },
          {
            title: "2. Подготовьте структуру пресс-релиза",
            body: "Классический пресс-релиз включает:",
          },
          {
            body: [
              "яркий заголовок;",
              "лид - 1–2 предложения, кратко объясняющие суть новости;",
              "основной текст: что произошло, кто участвует, для кого это важно;",
              "цитаты руководителей или экспертов;",
              "справку о компании (who we are);",
              "контакты для связи с пресс‑службой.",
            ],
          },
          {
            title: "3. Адаптируйте тон под локальные медиа",
            body: "Для городских порталов и газет важно избегать откровенно рекламного тона. Пресс-релиз должен быть новостным: рассказывать о событии, его значении для города и жителей, а не только о выгодах компании.",
          },
          {
            title: "4. Подготовьте визуальные материалы",
            body: "Фото мероприятия, офиса, команды, продукта или благотворительной активности повышают шансы на публикацию и делают материал более заметным в ленте новостей.",
          },
          {
            title: "5. Выберите и соберите список СМИ",
            body: "Составьте базу локальных медиа:",
          },
          {
            body: [
              "городские новостные порталы;",
              "онлайн‑версии газет и журналов;",
              "информационные агентства;",
              "популярные городские Telegram‑каналы СМИ.",
            ],
          },
          {
            body: "Найдите контакты редакторов или форм для отправки пресс‑релизов.",
          },
          {
            title: "6. Отправьте релиз и будьте на связи",
            body: "Отправляя релиз, кратко поясните, почему новость может быть интересна читателям. После отправки будьте готовы оперативно отвечать на уточняющие вопросы, предоставлять дополнительные комментарии и материалы.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Размещение пресс-релизов в местных СМИ - это сочетание PR и SEO-инструмента. Оно помогает одновременно укреплять бренд, получать качественные ссылки и упоминания, расширять охват аудитории и усиливать позиции в локальном поиске. При грамотной работе с инфоповодами и текстами публикации в медиа становятся важной частью стратегии продвижения локального бизнеса.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Press releases in local media: how to strengthen brand and local SEO",
    lead: [
      "Publishing press releases in local media and city news portals can be a powerful local marketing tactic.",
      "Well-written releases can strengthen local signals, earn high-quality mentions/links, and increase brand awareness among local customers.",
    ],
    sections: [
      {
        title: "Why publish press releases in local media",
        blocks: [
          {
            title: "1. Higher brand trust",
            body: "Local media often carries strong trust in the community. When your company appears next to important city events, it signals legitimacy and reliability.",
          },
          {
            title: "2. Stronger local presence",
            body: "Media mentions show you’re active in the city: opening locations, creating jobs, supporting events, or launching social projects. This builds loyalty and positions you as a ‘local’ brand.",
          },
          {
            title: "3. Contribution to local SEO",
            body: "Mentions and links in local media reinforce regional relevance. Search engines see your business discussed in local sources and may surface it more often for geo-intent queries.",
          },
          {
            title: "4. Professional news format",
            body: "A press release is more structured than a social post: headline, lead, body, quotes, and facts. This improves perceived value and credibility.",
          },
          {
            title: "5. Reach outside your owned channels",
            body: "Not all customers follow your social accounts or visit your site regularly. Many discover news via local portals and media channels. Press releases help you reach that audience without pure ad spend.",
          },
        ],
      },
      {
        title: "What to expect from press releases",
        blocks: [
          {
            title: "More website visits",
            body: "After a noticeable news story, some readers will visit your site to learn more, check services, and find contacts. Releases about new products, new locations, or participation in events often perform best.",
          },
          {
            title: "More inquiries",
            body: "Some customers come directly from the article, while others remember the brand and reach out days or weeks later. The effect can be immediate or cumulative depending on the topic and reach.",
          },
          {
            title: "Higher brand awareness",
            body: "Each publication adds weight to your name. Over time you may hear: “We’ve read about you somewhere.” This supports long-term brand growth.",
          },
          {
            title: "Better reputation",
            body: "Regular stories about social initiatives, achievements, and city involvement build the image of an open and responsible company.",
          },
          {
            title: "SEO uplift",
            body: "Local media mentions can strengthen your link profile and regional relevance. For search engines, it’s a signal the business is real and discussed in the local ecosystem.",
          },
        ],
      },
      {
        title: "How to prepare and publish a local press release",
        blocks: [
          {
            title: "1. Pick a strong news angle",
            body: "Media publishes what’s interesting to readers. Good angles include:",
          },
          {
            body: [
              "opening a new location;",
              "launching a unique service or product;",
              "participating in a major local event;",
              "a social or charity initiative;",
              "receiving an award or certification.",
            ],
          },
          {
            title: "2. Build a clear structure",
            body: "A classic press release includes:",
          },
          {
            body: [
              "a strong headline;",
              "a short lead (1–2 sentences);",
              "the main story: what happened, who is involved, why it matters;",
              "quotes from founders/experts;",
              "a short company boilerplate;",
              "press contact details.",
            ],
          },
          {
            title: "3. Match the tone to local media",
            body: "Avoid overly promotional language. Make it news-focused: explain what happened and why it matters to local residents.",
          },
          {
            title: "4. Prepare visuals",
            body: "Photos from the event, office, team, product, or charity activity increase publication odds and make the story more visible in feeds.",
          },
          {
            title: "5. Build a media list",
            body: "Create a local media database:",
          },
          {
            body: [
              "city news portals;",
              "online versions of newspapers and magazines;",
              "local agencies;",
              "popular local Telegram channels / community media (where relevant).",
            ],
          },
          {
            body: "Find editor contacts or submission forms.",
          },
          {
            title: "6. Send and stay responsive",
            body: "When sending, briefly explain why the story matters. Be ready to answer questions quickly and provide extra comments and materials.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "Local press releases combine PR and SEO. They help strengthen brand trust, earn quality mentions, expand reach, and support local visibility. With strong news angles and good writing, media publications become a meaningful part of local growth.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "פרסום הודעות לעיתונות במדיה מקומית: איך לחזק מותג ו‑SEO מקומי",
    lead: [
      "פרסום הודעות לעיתונות באתרי חדשות מקומיים ובפורטלים עירוניים יכול להיות כלי חזק לשיווק מקומי.",
      "הודעות כתובות היטב מחזקות אותות מקומיים, מייצרות אזכורים/קישורים איכותיים ומעלות מודעות למותג בקרב קהל מקומי.",
    ],
    sections: [
      {
        title: "למה לפרסם הודעות לעיתונות במדיה מקומית",
        blocks: [
          {
            title: "1. יותר אמון במותג",
            body: "מדיה מקומית נתפסת לרוב כאמינה בקהילה. כשהעסק מופיע לצד חדשות עירוניות, זה משדר רצינות ואמינות.",
          },
          {
            title: "2. חיזוק נוכחות מקומית",
            body: "אזכורים בתקשורת מראים שאתם פעילים בעיר: פתיחת סניפים, יצירת מקומות עבודה, תמיכה באירועים או פרויקטים חברתיים. זה מייצר נאמנות וממצב אתכם כמותג ‘מקומי’.",
          },
          {
            title: "3. תרומה ל‑SEO מקומי",
            body: "אזכורים וקישורים במדיה מקומית מחזקים רלוונטיות אזורית. Google רואה שהעסק מדובר במקורות מקומיים ועשוי להציג אותו יותר בחיפושים עם כוונה מקומית.",
          },
          {
            title: "4. פורמט חדשות מקצועי",
            body: "הודעה לעיתונות בנויה יותר מפוסט: כותרת, פתיח, גוף, ציטוטים ועובדות. זה מעלה את הערך הנתפס.",
          },
          {
            title: "5. חשיפה מעבר לערוצים שלכם",
            body: "לא כל הלקוחות עוקבים אחריכם ברשתות או נכנסים לאתר. רבים צורכים חדשות דרך פורטלים מקומיים וערוצי מדיה. הודעות לעיתונות מאפשרות להגיע לקהל הזה.",
          },
        ],
      },
      {
        title: "למה לצפות מפרסום הודעות לעיתונות",
        blocks: [
          {
            title: "יותר ביקורים באתר",
            body: "אחרי כתבה בולטת חלק מהקוראים יבקרו באתר כדי ללמוד יותר ולמצוא פרטי קשר. הודעות על שירות חדש, פתיחת סניף או השתתפות באירוע לרוב עובדות טוב.",
          },
          {
            title: "יותר פניות",
            body: "חלק מהלקוחות מגיעים מיד מהכתבה, אחרים זוכרים את המותג ופונים אחרי ימים או שבועות. ההשפעה יכולה להיות מיידית או מצטברת.",
          },
          {
            title: "יותר מודעות למותג",
            body: "כל פרסום מוסיף ‘משקל’ לשם. עם הזמן אפשר לשמוע: ‘קראנו עליכם איפשהו’.",
          },
          {
            title: "שיפור מוניטין",
            body: "סיפורים על פרויקטים חברתיים, הישגים ומעורבות בעיר בונים תדמית של חברה פתוחה ואחראית.",
          },
          {
            title: "חיזוק SEO",
            body: "אזכורים מקומיים יכולים לשפר פרופיל קישורים ולחזק רלוונטיות אזורית. זה מסמן למנועי חיפוש שהעסק אמיתי ונוכח באקו-סיסטם המקומי.",
          },
        ],
      },
      {
        title: "איך להכין ולפרסם הודעה לעיתונות במדיה מקומית",
        blocks: [
          {
            title: "1. לבחור זווית חדשותית חזקה",
            body: "מדיה מפרסמת מה שמעניין את הקוראים. זוויות טובות כוללות:",
          },
          {
            body: [
              "פתיחת סניף חדש;",
              "השקת שירות או מוצר ייחודי;",
              "השתתפות באירוע מקומי גדול;",
              "יוזמה חברתית/התנדבותית;",
              "קבלת פרס או הסמכה.",
            ],
          },
          {
            title: "2. לבנות מבנה ברור",
            body: "מבנה קלאסי כולל:",
          },
          {
            body: [
              "כותרת חזקה;",
              "פתיח קצר;",
              "גוף: מה קרה, מי מעורב ולמה זה חשוב;",
              "ציטוטים;",
              "פסקת ‘אודות החברה’;",
              "פרטי קשר לעיתונות.",
            ],
          },
          {
            title: "3. להתאים את הטון למדיה מקומית",
            body: "להימנע מסגנון פרסומי מדי. להציג את זה כחדשות עם משמעות לתושבים.",
          },
          {
            title: "4. להכין חומרים ויזואליים",
            body: "תמונות מהאירוע/משרד/צוות/מוצר מעלות סיכוי לפרסום ומבליטות את התוכן בפיד.",
          },
          {
            title: "5. לבנות רשימת מדיה",
            body: "לבנות מאגר מדיה מקומי:",
          },
          {
            body: [
              "פורטלים חדשותיים עירוניים;",
              "גרסאות אונליין של עיתונים ומגזינים;",
              "סוכנויות מקומיות;",
              "ערוצי טלגרם עירוניים פופולריים (כשזה רלוונטי).",
            ],
          },
          {
            body: "למצוא פרטי קשר של עורכים או טפסי שליחה.",
          },
          {
            title: "6. לשלוח ולהיות זמינים",
            body: "בעת שליחה להסביר בקצרה למה זה מעניין. להיות זמינים לשאלות ולהשלמות.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "הודעות לעיתונות במדיה מקומית משלבות PR ו‑SEO. הן מחזקות אמון, יוצרות אזכורים איכותיים, מרחיבות חשיפה ותומכות בנראות מקומית. עם זוויות חזקות וכתיבה טובה-זה הופך לחלק חשוב מצמיחה מקומית.",
          },
        ],
      },
    ],
  },
};

export default content;
