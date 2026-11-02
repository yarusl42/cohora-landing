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
      "Создание страниц городов для геозависимых запросов: как захватывать региональный спрос",
    lead: [
      "Страницы «городов» - ключевой инструмент для бизнеса, который работает в нескольких регионах или оказывает услуги с привязкой к географии. Вместо одного обобщённого лендинга вы создаёте отдельные страницы под каждый город, усиливая релевантность, доверие и конверсию именно в нужных локациях.",
    ],
    sections: [
      {
        title: "Зачем нужны страницы городов",
        blocks: [
          {
            title: "1. Локальные запросы доминируют",
            body: "Всё больше пользователей ищут услуги с указанием города или даже района. Примеры: «ремонт смартфонов Брест», «маникюр Минск восток», «вывоз мусора Гродно», «психолог Витебск онлайн», «сантехник Могилёв», «электрик Гомель срочно».",
          },
          {
            body: "Google и Яндекс показывают разные результаты в зависимости от региона пользователя. Если у сайта нет отдельной страницы под конкретный город, шанс попасть в локальную выдачу заметно снижается.",
          },
          {
            title: "2. Повышение релевантности и доверия",
            body: "Страница, адаптированная под город (районы, особенности, примеры работ, адреса и контакты) воспринимается как «своя». Клиент видит, что бизнес реально работает в регионе, и охотнее обращается.",
          },
          {
            title: "3. Расширение семантики и трафика",
            body: "Каждая городская страница добавляет десятки и сотни запросов: «[услуга] + город», «[услуга] цена + город», «[услуга] недорого + город», «[услуга] отзывы + город», «лучший [услуга] в городе».",
          },
          {
            body: "Чем больше городов покрыто отдельными страницами, тем шире охват и стабильнее общий трафик.",
          },
          {
            title: "4. Рост конверсии",
            body: "Городские страницы - не просто «текст с названием города». Это полноценные лендинги под конкретную локацию. Конверсия с таких страниц нередко в 1.5–3 раза выше, чем с универсальных разделов без геопривязки.",
          },
        ],
      },
      {
        title: "Чего ожидать от создания страниц городов",
        blocks: [
          {
            title: "1. Быстрый рост позиций в регионах",
            body: "Во многих городах конкуренция ниже, чем в столице. Поэтому грамотно оформленные городские страницы могут выходить в топ по части запросов уже через 1–4 недели после индексации.",
          },
          {
            title: "2. Увеличение числа обращений",
            body: "После добавления страниц городов часто наблюдается: +20–40% трафика из регионов, +15–50% лидов, +30–70% обращений через карты (при правильной интеграции). Иногда рекламный бюджет можно даже снизить.",
          },
          {
            title: "3. Более стабильная SEO‑структура",
            body: "Когда сайт покрывает несколько городов, он конкурирует с локальными сайтами в каждом регионе. Это делает общую структуру устойчивее к изменениям алгоритмов и конкурентной среде.",
          },
          {
            title: "4. Необходимость регулярного обновления",
            body: "Чтобы страницы работали на максимум, важно периодически добавлять кейсы, обновлять фото, вставлять свежие отзывы и актуализировать цены/условия. Живые страницы ранжируются и конвертируют лучше.",
          },
        ],
      },
      {
        title: "Как правильно создавать страницы городов",
        blocks: [
          {
            title: "1. Выбор городов",
            body: "Стартовать стоит с городов, где уже есть спрос и потенциал: областные центры, крупные города с плотной аудиторией, ближайшие города к вашему региону, а также города с высоким спросом по данным инструментов аналитики запросов.",
          },
          {
            title: "2. Структура идеальной страницы города",
            body: "Хорошо работающая страница города обычно включает: H1 с городом и УТП (например: «Ремонт ноутбуков в Бресте - гарантия до 12 месяцев»), описание услуги и районов обслуживания, преимущества и логистику, блок цен (хотя бы ориентировочно), отзывы из города, фото и кейсы с привязкой к локациям, карту/зону обслуживания, FAQ и удобные контакты.",
          },
          {
            title: "3. Уникальность и локализация",
            body: "Недостаточно просто заменить название города в шаблоне. Для каждой страницы важно менять формулировки и акценты, упоминать местные районы/улицы/ориентиры, добавлять боли аудитории, использовать уникальные кейсы и отзывы.",
          },
          {
            title: "4. Связь с картами и контактами",
            body: "Городские страницы хорошо работают в связке с карточками в Google Maps, Яндекс Картах и 2ГИС. Логично указывать адреса филиалов, ссылки на карты, единый телефон или локальные номера, а также график работы по городу.",
          },
        ],
      },
      {
        title: "Типичные ошибки",
        blocks: [
          {
            title: "1. Шаблонные тексты без реальной уникализации",
            body: "Копирование одной структуры и замена только названия города - частая ошибка. Это даёт слабый эффект и может привести к фильтрам за дублирование.",
          },
          {
            title: "2. Отсутствие геопривязки в контенте",
            body: "Если городская страница почти не отличается от главной и не содержит районов, улиц и особенностей, её ценность для локального SEO минимальна.",
          },
          {
            title: "3. Игнорирование обновления",
            body: "Брошенные страницы со старыми ценами и без живого контента постепенно теряют позиции. Даже несколько обновлений в квартал заметно улучшают картину.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Страницы городов для геозависимых запросов - один из самых эффективных способов расширить локальное присутствие и получать целевой трафик из регионов. При грамотной структуре, уникальном контенте и регулярных обновлениях они усиливают видимость, повышают доверие и конверсию и помогают масштабировать бизнес.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "City pages for location-based queries: how to capture local demand across multiple markets",
    lead: [
      "City pages are a core strategy for businesses that serve multiple locations or want to expand into new markets. Instead of one generic landing page, you create dedicated pages per city to increase relevance, trust, and conversion in each area.",
    ],
    sections: [
      {
        title: "Why city pages matter",
        blocks: [
          {
            title: "1. Local intent queries are everywhere",
            body: "More and more searches include a city or neighborhood. Examples in the U.S.: “phone repair Phoenix,” “nail salon Midtown Atlanta,” “junk removal Tampa,” “therapist Seattle online,” “plumber Columbus,” “emergency electrician Dallas.”",
          },
          {
            body: "Google shows different results depending on the user’s location. If you don’t have a dedicated page for a city, it’s harder to compete for those queries.",
          },
          {
            title: "2. Higher relevance and trust",
            body: "A city-specific page that mentions service areas, local context, examples, and contact details feels real. Users are more likely to convert when they believe you truly serve their city.",
          },
          {
            title: "3. Expanded keyword footprint",
            body: "Each city page can rank for dozens or hundreds of variations: “service + city,” “service cost + city,” “best service in city,” and many more.",
          },
          {
            title: "4. Better conversions",
            body: "A city page is more than a keyword swap. It’s a tailored local landing page. Conversion rates are often 1.5–3x higher than generic pages.",
          },
        ],
      },
      {
        title: "What to expect when you add city pages",
        blocks: [
          {
            title: "1. Faster wins in less competitive markets",
            body: "In many mid-size markets competition is lower than in major metros. Well-structured city pages can start ranking within weeks after indexing.",
          },
          {
            title: "2. More leads",
            body: "It’s common to see more regional traffic and more qualified inquiries. With proper integration, city pages can also support Maps-driven actions (calls, direction requests).",
          },
          {
            title: "3. A more resilient SEO structure",
            body: "Multi-city coverage distributes traffic across markets and reduces risk when competition or rankings shift in any one area.",
          },
          {
            title: "4. Ongoing updates are required",
            body: "City pages perform best when you periodically refresh photos, pricing assumptions, case studies, and reviews. Live pages rank and convert better.",
          },
        ],
      },
      {
        title: "How to build city pages correctly",
        blocks: [
          {
            title: "1. Choose the right cities",
            body: "Start with markets where there’s demand and realistic service coverage: nearby cities, cities with higher search demand, and markets where you can actually fulfill the service.",
          },
          {
            title: "2. The ideal city page structure",
            body: "A strong city page typically includes: an H1 with city + value proposition, a service overview with neighborhood coverage, logistics/response time, a price range block, local reviews or proof, local photos/case studies, service area map (or explanation), an FAQ, and clear CTAs.",
          },
          {
            title: "3. Make pages truly unique",
            body: "Don’t just swap city names. Adjust wording and focus, include local neighborhoods and service areas, add city-specific proof, and avoid cookie-cutter duplication.",
          },
          {
            title: "4. Connect pages to your local presence",
            body: "City pages work best when they align with your Google Business Profile(s). Include consistent NAP, correct hours, location/service area details, and clear ways to contact you.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "1. Templated duplicate pages",
            body: "Copy-pasting the same page and changing only the city name leads to weak performance and can cause duplication issues.",
          },
          {
            title: "2. No local detail",
            body: "If the city page looks identical to the homepage and has no real neighborhood/service area context, it won’t help much.",
          },
          {
            title: "3. Never updating",
            body: "Old, stale pages slowly lose rankings. Even a few updates per quarter can make a difference.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "City pages are one of the most effective ways to expand local visibility across multiple markets. With the right structure, unique content, and regular updates, they increase rankings, trust, and leads-and become the foundation of a multi-location SEO strategy.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "עמודי עיר לשאילתות תלויות-מיקום: איך לתפוס ביקוש מקומי בכמה אזורים",
    lead: [
      "עמודי עיר הם כלי מרכזי לעסק שמשרת כמה אזורים או רוצה להתרחב לשווקים חדשים. במקום עמוד כללי אחד, יוצרים עמודים ייעודיים לכל עיר כדי להעלות רלוונטיות, אמון והמרות בכל אזור.",
    ],
    sections: [
      {
        title: "למה עמודי עיר חשובים",
        blocks: [
          {
            title: "1. שאילתות מקומיות שולטות",
            body: "יותר ויותר חיפושים כוללים עיר או שכונה. דוגמאות בישראל: “תיקון טלפונים באר שבע”, “מניקור תל אביב”, “הובלות חיפה”, “פסיכולוג אונליין ירושלים”, “אינסטלטור ראשון לציון”, “חשמלאי דחוף פתח תקווה”.",
          },
          {
            body: "גוגל מציג תוצאות שונות לפי מיקום המשתמש. בלי עמוד ייעודי לעיר, קשה יותר להתחרות על הביטויים האלה.",
          },
          {
            title: "2. יותר רלוונטיות ואמון",
            body: "עמוד שמותאם לעיר (אזורים, הקשר, דוגמאות ודרכי קשר) מרגיש אמיתי. אנשים פונים יותר כשברור שאתם באמת נותנים שירות בעיר.",
          },
          {
            title: "3. הרחבת כיסוי מילות מפתח",
            body: "כל עמוד עיר יכול לדרג עשרות וריאציות: “שירות + עיר”, “מחיר + עיר”, “הכי טוב בעיר” ועוד.",
          },
          {
            title: "4. שיפור המרות",
            body: "עמוד עיר הוא לא רק החלפת שם עיר. זה דף נחיתה מקומי. לעיתים ההמרה גבוהה פי 1.5–3 מעמודים כלליים.",
          },
        ],
      },
      {
        title: "למה לצפות אחרי הוספת עמודי עיר",
        blocks: [
          {
            title: "1. הצלחות מהירות בערים פחות תחרותיות",
            body: "בערים מסוימות התחרות נמוכה יותר. עמודים בנויים היטב יכולים להתחיל להופיע תוך שבועות מהאינדוקס.",
          },
          {
            title: "2. יותר פניות",
            body: "בדרך כלל רואים עלייה בתנועה ובפניות מאזורי שירות חדשים. כשמחברים נכון לכרטיסי מפות, זה תומך גם בשיחות ובניווט.",
          },
          {
            title: "3. מבנה SEO יציב יותר",
            body: "כיסוי כמה ערים מפזר סיכונים ומקטין תלות בעיר אחת בלבד.",
          },
          {
            title: "4. צריך לעדכן",
            body: "עמודי עיר עובדים טוב יותר כשמעדכנים מדי פעם תמונות, הנחות מחיר, דוגמאות וביקורות.",
          },
        ],
      },
      {
        title: "איך לבנות עמודי עיר נכון",
        blocks: [
          {
            title: "1. לבחור את הערים הנכונות",
            body: "להתחיל בערים שיש בהן ביקוש וכיסוי שירות אמיתי: ערים קרובות, ערים עם חיפושים גבוהים, ואזורים שבהם אתם באמת יכולים לספק שירות.",
          },
          {
            title: "2. מבנה עמוד עיר אידיאלי",
            body: "עמוד טוב כולל: H1 עם עיר וערך, תיאור שירות ואזורים/שכונות, לוגיסטיקה וזמני תגובה, טווח מחירים, הוכחות מקומיות, תמונות/מקרים, מפת אזור שירות (או הסבר), FAQ ו‑CTA ברור.",
          },
          {
            title: "3. ייחוד אמיתי",
            body: "לא רק להחליף שם עיר. לשנות ניסוח ודגש, להוסיף שכונות/אזורים, והוכחות מהעיר.",
          },
          {
            title: "4. קשר לכרטיס במפות ולפרטי קשר",
            body: "עמודי עיר עובדים הכי טוב כשהם תואמים לכרטיס העסק בגוגל: NAP עקבי, שעות נכונות, אזור שירות וקישורי קשר ברורים.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            title: "1. תבניות כפולות",
            body: "העתקה של אותו עמוד והחלפת שם העיר בלבד מובילה לתוצאות חלשות ועלולה ליצור בעיות כפילות.",
          },
          {
            title: "2. אין פרטים מקומיים",
            body: "אם עמוד העיר נראה כמו דף הבית ואין בו אזורים/שכונות/הקשר - הערך ל‑SEO מקומי נמוך.",
          },
          {
            title: "3. לא מעדכנים",
            body: "עמודים ישנים מאבדים דירוג. גם כמה עדכונים ברבעון יכולים לשפר.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "עמודי עיר הם דרך יעילה להרחיב נראות מקומית בכמה אזורים. עם מבנה נכון, תוכן ייחודי ועדכונים, הם מעלים דירוגים, אמון ופניות והופכים לבסיס אסטרטגיית SEO מרובת מיקומים.",
          },
        ],
      },
    ],
  },
};

export default content;
