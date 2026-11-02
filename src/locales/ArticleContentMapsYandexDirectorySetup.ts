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
      "Настройка карточки в картах «под ключ»: что включает и чего ожидать",
    lead: [
      "Настройка карточки в картографических сервисах «под ключ» - это комплексная оптимизация профиля бизнеса для максимальной видимости и конверсии из Google Maps, 2ГИС, Apple Maps и других площадок в Минске и других городах Беларуси.",
      "Просто «быть на карте» мало: сырая карточка редко приносит заявки и иногда даже вредит, если там устаревшие данные, слабые фото или игнорируются отзывы. Ниже - понятный сценарий, как привести карточку в рабочее состояние.",
    ],
    sections: [
      {
        title: "Зачем настраивать карточку «под ключ»",
        blocks: [
          {
            title: "1. Карточка уже есть, но не работает",
            body: "У многих компаний карточка в картах уже создана, но заполнена частично. Если непонятно, чем вы занимаетесь, нет нормальных фото и отзывов, а контакты устарели - карточка почти не помогает продажам.",
          },
          {
            title: "2. Конкуренты уже приводят карточки в порядок",
            body: "Когда клиент сравнивает варианты на карте, он смотрит не только на адрес, но и на то, как бизнес выглядит: фото, рейтинг, ответы на отзывы, актуальность данных.",
          },
          {
            title: "3. Ошибки в карточке могут привести к проблемам",
            body: "Неверное название, спам ключевыми словами, дубликаты, странные категории и подозрительные отзывы повышают риск ограничений и снижают доверие.",
          },
        ],
      },
      {
        title: "Чего ожидать от настройки",
        blocks: [
          {
            body: [
              "Больше качественных показов по релевантным запросам.",
              "Лучшая конверсия просмотра в действие (звонок/маршрут/переход на сайт).",
              "Меньше риска блокировок из-за нарушений оформления.",
              "База для дальнейшей работы: отзывы, обновления, новые фото.",
            ],
          },
        ],
      },
      {
        title: "Как выглядит настройка «под ключ»",
        blocks: [
          {
            title: "Шаг 1. Аудит текущей карточки и ситуации",
            body: "Сначала проверяем: есть ли карточка и нет ли дублей; корректны ли название/адрес/телефон/сайт/время работы; какие категории выбраны; есть ли фото; сколько отзывов и как на них отвечают; как вы выглядите на фоне конкурентов по району.",
          },
          {
            title: "Шаг 2. Приведение в порядок базовых данных (NAP)",
            body: "Название без спама, адрес в едином формате, актуальный телефон и часы работы. Важно, чтобы NAP совпадал на сайте, в Google, 2ГИС, Apple Maps и каталогах.",
          },
          {
            title: "Шаг 3. Категории и описание",
            body: "Выбираем точную основную категорию, добавляем несколько релевантных дополнительных и пишем описание человеческим языком: кто вы, что делаете, для кого и в чём сильны.",
          },
          {
            title: "Шаг 4. Фото и визуальная часть",
            body: "Добавляем реальные фото фасада/входа, интерьера, команды, процессов и результатов. Визуал повышает доверие и кликабельность.",
          },
          {
            title: "Шаг 5. Проверка связки с сайтом и другими площадками",
            body: "Сверяем данные с сайтом и другими каталогами, устраняем противоречия. Проверяем, что сайт доступен и выглядит корректно на мобильных.",
          },
          {
            title: "Шаг 6. План по отзывам и работе с ними",
            body: "Настраиваем регулярный сбор честных отзывов, правила ответов (позитив/нейтральные/негатив), и фиксируем, какие методы недопустимы, чтобы не получить санкции.",
          },
        ],
      },
      {
        title: "Типичные ожидания и ошибки",
        blocks: [
          {
            body: [
              "Ожидание: «настроим карточку - и завтра посыпятся звонки». Реальность: рост обычно постепенный.",
              "Ожидание: «можно раз сделать и забыть». Реальность: без обновлений и отзывов карточка деградирует.",
              "Ожидание: «накрутим отзывы - и всё решится». Реальность: риск санкций и потери доверия выше выгоды.",
            ],
          },
        ],
      },
      {
        title: "Выводы",
        blocks: [
          {
            body: "Настройка карточки «под ключ» - это не магия, а аккуратная работа с данными, визуалом и репутацией. Ухоженная карточка становится стабильной точкой входа: людям проще понять, что вы за бизнес, и выбрать вас на карте.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Map listing setup (done-for-you): what it includes and what to expect",
    lead: [
      "A done-for-you map listing setup is a full optimization of your local presence across platforms like Google Maps, Apple Maps, and major U.S. directories. The goal is simple: more visibility and more high-intent actions (calls, direction requests, website clicks).",
      "Just ‘being on the map’ isn’t enough. Incomplete listings with weak photos, outdated hours, or unmanaged reviews usually underperform-and can even hurt trust.",
    ],
    sections: [
      {
        title: "Why a done-for-you listing setup matters",
        blocks: [
          {
            title: "1. Your listing exists, but doesn’t convert",
            body: "Many businesses already have a listing, but it’s half-filled. If it’s unclear what you do, photos look poor, and reviews go unanswered, the listing rarely drives real leads.",
          },
          {
            title: "2. Competitors are investing in their listings",
            body: "Customers compare options inside Maps. They look at photos, rating, review responses, and whether information feels current.",
          },
          {
            title: "3. Mistakes can create friction",
            body: "Keyword-stuffed names, duplicates, wrong categories, or suspicious reviews can reduce visibility and trust.",
          },
        ],
      },
      {
        title: "What you can expect",
        blocks: [
          {
            body: [
              "More qualified impressions for relevant searches.",
              "Higher conversion from views to actions.",
              "Lower risk of listing issues caused by policy violations.",
              "A clean foundation for ongoing work (reviews, updates, new photos).",
            ],
          },
        ],
      },
      {
        title: "What a full setup typically includes",
        blocks: [
          {
            title: "Step 1. Audit",
            body: "Check for duplicates, accuracy of name/address/phone/hours/website, category choices, photo quality, review volume and responses, and how you compare to nearby competitors.",
          },
          {
            title: "Step 2. Fix core business data (NAP)",
            body: "Use a consistent Name/Address/Phone across your website, Google Business Profile, Apple Maps (often via Apple Business Connect), and key directories.",
          },
          {
            title: "Step 3. Categories + description",
            body: "Pick a precise primary category, add a few relevant secondary ones, and write a clear customer-focused description.",
          },
          {
            title: "Step 4. Photos",
            body: "Upload real, high-quality photos: storefront, interior, team, services in action, results. Strong visuals increase engagement.",
          },
          {
            title: "Step 5. Align with your website and other sources",
            body: "Remove contradictions across platforms, ensure the site is accessible, and verify the mobile experience.",
          },
          {
            title: "Step 6. Reviews workflow",
            body: "Create a repeatable process to collect honest reviews and respond consistently (including negative reviews) without violating platform policies.",
          },
        ],
      },
      {
        title: "Common expectations and mistakes",
        blocks: [
          {
            body: [
              "Expectation: ‘We’ll set it up and calls will spike tomorrow.’ Reality: results usually ramp up.",
              "Expectation: ‘Set it once and forget it.’ Reality: listings need upkeep.",
              "Expectation: ‘Let’s fake reviews.’ Reality: it’s risky and can backfire.",
            ],
          },
        ],
      },
      {
        title: "Takeaways",
        blocks: [
          {
            body: "A full listing setup isn’t magic-it’s disciplined work on data accuracy, visuals, and reputation. A clean listing becomes a reliable local entry point and helps customers choose you with confidence.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "הקמה מלאה של כרטיס במפות: מה זה כולל ולמה לצפות",
    lead: [
      "הקמה מלאה של כרטיס במפות היא אופטימיזציה מקיפה של הנוכחות המקומית: פרטים, קטגוריות, תמונות וביקורות כדי לקבל יותר חשיפות ויותר פעולות.",
      "רק ‘להופיע במפה’ לא מספיק. כרטיס לא מלא, תמונות חלשות או מידע לא מעודכן פוגעים באמון ובביצועים.",
    ],
    sections: [
      {
        title: "למה כדאי לעשות הקמה מלאה",
        blocks: [
          {
            title: "1. הכרטיס קיים אבל לא עובד",
            body: "אם לא ברור מה אתם עושים, אין תמונות טובות או שאין מענה לביקורות - הכרטיס לא ימיר כמו שצריך.",
          },
          {
            title: "2. מתחרים משקיעים בכרטיסים שלהם",
            body: "לקוחות משווים לפי תמונות, דירוג, תגובות לביקורות ועדכניות המידע.",
          },
        ],
      },
      {
        title: "מה זה כולל",
        blocks: [
          {
            title: "שלב 1. בדיקה (Audit)",
            body: "כפילויות, דיוק פרטים, קטגוריות, תמונות, ביקורות והשוואה למתחרים.",
          },
          {
            title: "שלב 2. עקביות פרטי העסק",
            body: "ליישר שם/כתובת/טלפון מול האתר והכרטיסים במפות.",
          },
          {
            title: "שלב 3. תמונות וביקורות",
            body: "להוסיף תמונות אמיתיות ולבנות תהליך קבוע לביקורות ומענה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "הקמה מלאה היא עבודה מסודרת על נתונים, ויזואל ומוניטין. כשהכרטיס נראה אמין ומעודכן - קל יותר ללקוחות לבחור בכם.",
          },
        ],
      },
    ],
  },
};

export default content;
