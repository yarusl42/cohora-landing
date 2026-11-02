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
      "Продвижение в картах: зачем это нужно и как выстроить работающую стратегию",
    lead: [
      "Продвижение в картографических сервисах - это системная работа над карточкой и репутацией, чтобы белорусский локальный бизнес получал больше показов, звонков и маршрутов из Google Maps, 2ГИС, Apple Maps и других площадок.",
      "Для клиентов карты - это быстрый способ выбрать компанию «рядом». Если карточка оформлена слабо, вы проигрываете конкурентам ещё до того, как человек зайдёт на сайт.",
    ],
    sections: [
      {
        title: "Почему продвижение в картах так важно",
        blocks: [
          {
            title: "1. Пользователь приходит с явным намерением купить",
            body: "Локальный поиск - это запрос «здесь и сейчас». Человек ищет решение поблизости и выбирает из 3–7 вариантов на карте.",
          },
          {
            title: "2. Карты - источник трафика с высоким доверием",
            body: "Карточка в картах показывает рейтинг, фото, отзывы, часы работы и контакты. Для пользователя это быстрая проверка, что бизнес реальный.",
          },
          {
            title: "3. Результаты обычно быстрее, чем у SEO сайта",
            body: "Сайт может расти месяцами, а улучшения карточки дают эффект быстрее: растут показы, клики, звонки и маршруты.",
          },
          {
            title: "4. Локальная выдача формируется карточками",
            body: "В локальном поиске карта и карточки часто важнее классической выдачи. Хорошо оптимизированная карточка способна обгонять конкурентов с сильными сайтами.",
          },
          {
            title: "5. Много способов выделиться",
            body: "Рейтинг, отзывы, качественные фото, посты/обновления, точные атрибуты и услуги напрямую влияют на выбор пользователя.",
          },
        ],
      },
      {
        title: "Чего ожидать от грамотного продвижения",
        blocks: [
          {
            title: "1. Рост числа показов",
            body: "Оптимизированная карточка чаще появляется по релевантным запросам и в нужных районах.",
          },
          {
            title: "2. Увеличение количества звонков",
            body: "Пользователи часто звонят прямо из карточки. После оптимизации количество звонков заметно растёт.",
          },
          {
            title: "3. Больше переходов на сайт",
            body: "Аккуратная карточка с фото и описанием повышает вероятность перехода на сайт и записи онлайн.",
          },
          {
            title: "4. Рост количества маршрутов",
            body: "Запросы маршрута - прямой индикатор готовности приехать. Их рост обычно означает рост визитов.",
          },
          {
            title: "5. Укрепление доверия к бренду",
            body: "Активные отзывы и ответы владельца, фото и понятная информация формируют образ надёжной компании.",
          },
        ],
      },
      {
        title: "Пошаговая стратегия продвижения в картах",
        blocks: [
          {
            title: "1. Создайте карточку или подтвердите существующую",
            body: "Сначала получите доступ к управлению карточкой в ключевых сервисах (Google Business Profile, 2ГИС и др.). Без этого дальнейшая оптимизация невозможна.",
          },
          {
            title: "2. Заполните ключевую информацию на 100%",
            body: [
              "название;",
              "адрес;",
              "время работы;",
              "телефон;",
              "сайт и e‑mail;",
              "категории и подкатегории;",
              "описание бизнеса;",
              "услуги и цены (если есть);",
              "атрибуты (парковка, оплата картой, Wi‑Fi и т.д.).",
            ],
          },
          {
            title: "3. Оптимизируйте название и категории",
            body: "Название должно быть реальным брендом без набивки ключевых слов, а категории - максимально точными. Это влияет и на показы, и на доверие.",
          },
          {
            title: "4. Сделайте понятное описание",
            body: "Коротко и по делу: кто вы, чем занимаетесь, в каком районе/городе работаете, что важно клиенту знать. Ключевые фразы - естественно, без переспама.",
          },
          {
            title: "5. Добавьте качественные фотографии",
            body: "Фото фасада/входа, интерьера, команды и результатов повышают кликабельность и помогают пользователю быстрее принять решение.",
          },
          {
            title: "6. Системно работайте с отзывами",
            body: "Регулярно просите честные отзывы, отвечайте на каждый (особенно на негатив) и следите за стабильностью рейтинга.",
          },
          {
            title: "7. Публикуйте обновления",
            body: "Новости, акции и важные изменения повышают активность карточки и дают пользователю повод выбрать вас прямо в картах.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Продвижение в картах - один из самых быстрых способов получить локальных клиентов. Системная работа с карточкой (данные, фото, отзывы, активность) помогает чаще попадать в выдачу и превращать показы в звонки и визиты.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Maps marketing: why it matters and how to build a strategy that actually works",
    lead: [
      "For U.S. local businesses, maps marketing is a system: listing quality, reviews, photos, and consistent business data across platforms like Google Maps, Apple Maps, and major local directories.",
      "Customers often choose from a short list directly inside Maps. If your listing looks incomplete or outdated, you lose before they ever visit your website.",
    ],
    sections: [
      {
        title: "Why maps marketing matters",
        blocks: [
          {
            title: "1. High-intent searches",
            body: "Local searches are ‘right now’ decisions. People compare nearby options and pick quickly.",
          },
          {
            title: "2. Maps listings are a trust layer",
            body: "Listings show ratings, photos, reviews, hours, location, and contact info-an instant legitimacy check.",
          },
          {
            title: "3. Faster feedback loop than SEO",
            body: "Web SEO can take months. Listing improvements often translate into more actions sooner.",
          },
          {
            title: "4. Local results are listing-driven",
            body: "In many categories, the local pack and map results matter more than the traditional organic results.",
          },
          {
            title: "5. Many levers to stand out",
            body: "Reviews, photos, attributes, services, and regular updates can change how often you show up and how often you get chosen.",
          },
        ],
      },
      {
        title: "What you can expect",
        blocks: [
          {
            title: "1. More impressions",
            body: "A complete and relevant listing shows up more often for the right searches.",
          },
          {
            title: "2. More calls",
            body: "Many customers call directly from the listing. Better visibility usually means more calls.",
          },
          {
            title: "3. More website clicks",
            body: "Strong photos and clear descriptions increase the chance someone clicks through to your website.",
          },
          {
            title: "4. More direction requests",
            body: "Direction requests are a strong indicator of visit intent.",
          },
          {
            title: "5. Stronger brand trust",
            body: "Active review management and accurate info create a reliable brand impression.",
          },
        ],
      },
      {
        title: "Step-by-step strategy",
        blocks: [
          {
            title: "1. Claim your listings",
            body: "Get access to manage your Google Business Profile and ensure your Apple Maps presence is correct (often via Apple Business Connect).",
          },
          {
            title: "2. Fill out core info (100%)",
            body: [
              "business name;",
              "address;",
              "hours;",
              "phone;",
              "website;",
              "categories;",
              "description;",
              "services/products and pricing (if applicable);",
              "attributes (parking, Wi‑Fi, accessibility, etc.).",
            ],
          },
          {
            title: "3. Optimize name and categories",
            body: "Use a real business name (no keyword stuffing) and pick accurate categories. This impacts visibility and trust.",
          },
          {
            title: "4. Write a clear description",
            body: "Explain what you do, who it’s for, and the areas you serve. Use keywords naturally.",
          },
          {
            title: "5. Upload strong photos",
            body: "Storefront/entrance, interior, team, and results photos increase engagement and conversion.",
          },
          {
            title: "6. Build and respond to reviews",
            body: "Ask for honest reviews consistently, respond to all reviews, and handle negative feedback professionally.",
          },
          {
            title: "7. Post updates",
            body: "Updates, offers, and announcements keep your listing active and can improve actions.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Maps marketing works best as a process: accurate data, strong visuals, review management, and steady updates. Done well, it becomes one of the most predictable local customer channels.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "שיווק במפות: למה זה חשוב ואיך לבנות אסטרטגיה שעובדת",
    lead: [
      "שיווק במפות הוא תהליך: איכות הכרטיס, ביקורות, תמונות ועקביות פרטי העסק בפלטפורמות כמו Google Maps ו‑Apple Maps.",
      "לקוחות בוחרים לעיתים מתוך כמה תוצאות במפות. כרטיס לא מעודכן או חלש מפסיד לפני שהלקוח מגיע לאתר.",
    ],
    sections: [
      {
        title: "למה שיווק במפות חשוב",
        blocks: [
          {
            title: "1. חיפושים עם כוונה גבוהה",
            body: "חיפוש מקומי הוא החלטה של ‘עכשיו’. אנשים משווים אפשרויות קרובות ובוחרים מהר.",
          },
          {
            title: "2. כרטיס במפות בונה אמון",
            body: "הכרטיס מציג דירוג, תמונות, ביקורות, שעות ופרטי קשר - בדיקת אמינות מהירה.",
          },
          {
            title: "3. תוצאות לעיתים מהירות יותר מ‑SEO",
            body: "קידום אתר יכול לקחת זמן. שיפור הכרטיס במפות יכול להביא יותר פעולות מוקדם יותר.",
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד",
        blocks: [
          {
            title: "1. לוודא בעלות וניהול",
            body: "לקבל גישה לניהול הכרטיס ולוודא שהפרטים נכונים.",
          },
          {
            title: "2. להשלים פרטים",
            body: "שם, כתובת, שעות, טלפון, אתר, קטגוריות, תיאור, שירותים/מוצרים ותמונות.",
          },
          {
            title: "3. לעבוד עם ביקורות",
            body: "לבקש ביקורות אמיתיות, להגיב לכולן ולטפל בשלילי בצורה מקצועית.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "כשעובדים בצורה עקבית על נתונים, תמונות וביקורות - המפות הופכות לערוץ יציב של לקוחות מקומיים.",
          },
        ],
      },
    ],
  },
};

export default content;
