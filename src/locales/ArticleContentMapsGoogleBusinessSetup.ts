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
    title: "Настройка карточки Google Мой Бизнес «под ключ»",
    lead: [
      "Настройка карточки Google Мой Бизнес «под ключ» для белорусского бизнеса - это комплексный подход к оптимизации профиля для максимальной видимости в локальном поиске в Минске, Бресте, Гомеле и других городах Беларуси. Правильно настроенная карточка помогает получать больше показов в Google Картах, кликов по контактам и переходов на сайт от местных клиентов.",
      "Если регистрацию профиля в Google Мой Бизнес ещё можно сделать «по инструкции», то грамотная настройка карточки «под ключ» - это уже отдельная задача. Здесь важно не просто заполнить поля, а сделать так, чтобы карточка действительно приводила клиентов и не вызывала проблем с модерацией. Ниже - разбор, зачем это вообще нужно, чего от такой работы ожидать и как выглядит процесс.",
    ],
    sections: [
      {
        title: "Зачем настраивать карточку «под ключ», если она уже есть",
        blocks: [
          {
            title: "1. «Сырая» карточка почти не работает",
            body: "Во многих нишах профиль в Google уже есть: кто‑то когда‑то заполнил основные поля, добавил пару фото - и на этом всё. Такая карточка формально существует, но по ней мало кликают и звонят, она плохо конвертирует просмотр в обращение, а поиску сложно понять, кому и по каким запросам вас показывать.",
          },
          {
            title: "2. Конкуренты дорабатывают карточки и отзывы",
            body: "В конкурентных городах и нишах клиенты всё чаще выбирают между несколькими карточками в локальной выдаче. Выигрывает не тот, кто «просто есть», а тот, у кого понятное описание и услуги, живые фотографии, адекватное количество отзывов и ответы владельца, актуальные часы работы и контакты.",
          },
          {
            title: "3. Риски ошибок и блокировок",
            body: "Неверное название с «набиванием» ключевых слов, дубли карточек, странные категории, массовые подозрительные отзывы - всё это может привести к проблемам с модерацией вплоть до блокировки профиля. Настройка «под ключ» - про то, чтобы сделать всё аккуратно и по правилам.",
          },
        ],
      },
      {
        title: "Чего ожидать от настройки карточки",
        blocks: [
          {
            body: "Даже идеально настроенная карточка не даёт мгновенного взрывного роста. Настройка - фундамент, на котором потом строится регулярная работа.",
          },
          {
            body: [
              "Улучшение качества показов: вас чаще видят те, кому вы реально подходите.",
              "Рост конверсии из просмотра в звонок, маршрут или переход на сайт.",
              "Снижение риска блокировок и проблем с модерацией.",
              "Удобная точка входа для дальнейшей работы с отзывами и локальным SEO.",
            ],
          },
        ],
      },
      {
        title: "Как выглядит настройка Google Мой Бизнес «под ключ»",
        blocks: [
          {
            body: "Конкретный набор шагов может отличаться по нишам, но общий скелет работы примерно такой.",
          },
          {
            title: "Шаг 1. Аудит текущей карточки",
            body: "Сначала смотрим, что у вас уже есть: нет ли дубликатов профиля, как заполнены название/категория/адрес/телефон/часы работы, какие есть фото и насколько они живые, сколько отзывов и есть ли ответы владельца, как карточка выглядит на фоне ближайших конкурентов.",
          },
          {
            title: "Шаг 2. Корректировка базовых данных",
            body: "Приводим в порядок основы: аккуратное название без «спама», корректный адрес и зона обслуживания, актуальные телефоны и сайт, точный график работы, правильно выбранная основная и дополнительные категории.",
          },
          {
            title: "Шаг 3. Проработка описания и услуг",
            body: "Описание и блок услуг помогают поиску понять, чем вы занимаетесь, а клиенту - быстро сориентироваться. Пишем понятное описание без «воды» и перебора ключей; добавляем услуги/товары с нормальными названиями и краткими пояснениями; выстраиваем логику основных направлений и отличий.",
          },
          {
            title: "Шаг 4. Фотографии и визуальная часть",
            body: "Подбираются и загружаются фото, которые помогают продать услугу: фасад и вход, интерьер, команда и процесс (где уместно), результаты до/после или примеры работ.",
          },
          {
            title: "Шаг 5. Настройка ссылок и связки с сайтом",
            body: "Важно, чтобы карточка и сайт не противоречили друг другу: единые NAP‑данные, ссылка на релевантную страницу, при необходимости базовая локальная оптимизация сайта.",
          },
          {
            title: "Шаг 6. План по отзывам и работе с ними",
            body: "Готовится схема регулярного сбора отзывов, настраиваются живые шаблоны ответов, обозначаются правила реакции на негатив.",
          },
        ],
      },
      {
        title: "Типичные ожидания и реальность",
        blocks: [
          {
            body: [
              "Ожидание: «после настройки завтра посыплются звонки»; реальность: результаты видны в течение недель и месяцев.",
              "Ожидание: «можно раз настроить и забыть»; реальность: нужна регулярная работа.",
              "Ожидание: «достаточно накрутить отзывы»; реальность: риск блокировки выше потенциальной выгоды.",
            ],
          },
        ],
      },
      {
        title: "Выводы",
        blocks: [
          {
            body: "Настройка карточки Google Мой Бизнес «под ключ» - это про то, чтобы сделать профиль понятным, аккуратным и полезным и для клиентов, и для поисковых алгоритмов. Это не замена сайту или рекламе, а важный элемент системы локального маркетинга. При грамотной настройке и последующей регулярной работе карточка становится стабильным источником обращений от людей, которые уже ищут вашу услугу поблизости.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Google Business Profile setup done-for-you",
    lead: [
      "A done-for-you Google Business Profile setup is a comprehensive optimization process designed to maximize visibility and conversion in local search. A well-configured profile can increase Maps impressions, calls, and website clicks.",
      "While registering a profile is relatively straightforward, a proper “done-for-you” setup is a different job: it’s not just filling fields, but making sure the profile generates customers and stays safe from moderation issues. Here’s why it matters and what the process looks like.",
    ],
    sections: [
      {
        title: "Why do a full setup if the profile already exists",
        blocks: [
          {
            title: "1. A ‘raw’ profile barely works",
            body: "In many categories, a profile exists because someone filled basic fields and uploaded a few photos. It may technically exist, but it gets few actions, converts poorly, and doesn’t communicate relevance to search.",
          },
          {
            title: "2. Competitors optimize listings and reviews",
            body: "In competitive markets, people compare several listings. The winner is not the one who simply exists, but the one with clear services, strong photos, enough reviews, owner responses, and accurate hours.",
          },
          {
            title: "3. Risk management (mistakes and suspensions)",
            body: "Keyword stuffing in the name, duplicates, wrong categories, and suspicious reviews can lead to moderation issues or even suspensions. A proper setup is about doing everything cleanly and within guidelines.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: "Even a perfectly optimized profile won’t create instant explosive growth. Setup is the foundation for consistent ongoing work.",
          },
          {
            body: [
              "Better impression quality: you’ll be shown to more relevant searchers.",
              "Higher conversion from views into calls, directions, or website clicks.",
              "Lower risk of suspensions and moderation issues.",
              "A clean base for ongoing review and local SEO work.",
            ],
          },
        ],
      },
      {
        title: "What a done-for-you setup includes",
        blocks: [
          {
            body: "Exact steps vary by category, but the general structure is similar.",
          },
          {
            title: "Step 1. Audit the current profile",
            body: "Check duplicates, name/category/address/phone/hours accuracy, photo quality, review volume and responses, and how the listing compares to competitors.",
          },
          {
            title: "Step 2. Fix the basics",
            body: "Standardize the business name (no spam), confirm address/service area, update phones and website, set accurate hours, and choose correct primary/secondary categories.",
          },
          {
            title: "Step 3. Improve description and services",
            body: "Write a clear human description, add services/products with clean names and short explanations, and structure the value proposition.",
          },
          {
            title: "Step 4. Photos and visuals",
            body: "Upload photos that actually sell: exterior/entrance, interior, team/process (where appropriate), before/after or examples.",
          },
          {
            title: "Step 5. Links and website alignment",
            body: "Ensure consistent NAP, link to a relevant landing page, and improve basic local signals on the website if needed.",
          },
          {
            title: "Step 6. Review plan",
            body: "Set up a repeatable way to request reviews, prepare response templates, and define how to handle negative feedback.",
          },
        ],
      },
      {
        title: "Expectations vs reality",
        blocks: [
          {
            body: [
              "Expectation: calls start tomorrow; reality: results build over weeks and months.",
              "Expectation: set once and forget; reality: profiles need regular updates.",
              "Expectation: fake reviews solve it; reality: suspension risk is higher than the upside.",
            ],
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "A done-for-you Google Business Profile setup makes the listing clear, compliant, and useful for customers and algorithms. It won’t replace a website or ads, but it’s a critical part of a local marketing system. With proper setup and ongoing maintenance, the profile becomes a stable source of local leads.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: 'הקמה מלאה של Google Business Profile ("Done‑for‑you")',
    lead: [
      "הקמה מלאה של Google Business Profile היא תהליך אופטימיזציה מקיף שנועד למקסם נראות והמרה בחיפוש מקומי. כרטיס שמוגדר היטב יכול להגדיל חשיפות במפות, שיחות וקליקים לאתר.",
      "למרות שהרשמה בסיסית יחסית פשוטה, הקמה ‘Done‑for‑you’ היא עבודה אחרת: לא רק למלא שדות, אלא לוודא שהכרטיס מביא לקוחות ושומר על תאימות לכללים. הנה למה זה חשוב ואיך נראה התהליך.",
    ],
    sections: [
      {
        title: "למה צריך הקמה מלאה אם הכרטיס כבר קיים",
        blocks: [
          {
            title: "1. כרטיס ‘גולמי’ כמעט לא עובד",
            body: "לעיתים הכרטיס קיים כי מישהו מילא פרטים בסיסיים והעלה כמה תמונות. הוא קיים, אבל יש מעט פעולות, ההמרה נמוכה, ול‑Google קשה להבין רלוונטיות.",
          },
          {
            title: "2. מתחרים משדרגים כרטיסים וביקורות",
            body: "בשווקים תחרותיים לקוחות משווים כמה כרטיסים. מנצח מי שיש לו שירותים ברורים, תמונות חזקות, מספיק ביקורות ותגובות, ושעות עדכניות.",
          },
          {
            title: "3. סיכונים (טעויות וחסימות)",
            body: "דחיסת מילות מפתח בשם, כפילויות, קטגוריות לא נכונות וביקורות חשודות עלולים לגרום לבעיות מודרציה ואף חסימות. הקמה מלאה נועדה לעשות הכול בצורה נקייה ובהתאם לכללים.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: "גם כרטיס מושלם לא ייצור צמיחה מיידית. ההקמה היא בסיס לעבודה שוטפת.",
          },
          {
            body: [
              "יותר חשיפות איכותיות לקהל מתאים.",
              "שיפור המרה מצפיות לשיחות/ניווטים/קליקים לאתר.",
              "ירידה בסיכון לחסימות ובעיות מודרציה.",
              "בסיס נקי להמשך עבודה על ביקורות ו‑SEO מקומי.",
            ],
          },
        ],
      },
      {
        title: "מה כולל תהליך Done‑for‑you",
        blocks: [
          {
            body: "השלבים משתנים לפי תחום, אבל המבנה הכללי דומה.",
          },
          {
            title: "שלב 1. בדיקת הכרטיס הקיים",
            body: "בדיקת כפילויות, דיוק שם/קטגוריה/כתובת/טלפון/שעות, איכות תמונות, כמות ביקורות ותגובות, והשוואה למתחרים.",
          },
          {
            title: "שלב 2. תיקון הבסיס",
            body: "אחידות שם בלי ‘ספאם’, כתובת/אזור שירות, טלפונים ואתר, שעות מדויקות, קטגוריה ראשית ומשניות נכונות.",
          },
          {
            title: "שלב 3. תיאור ושירותים",
            body: "כתיבת תיאור ברור, הוספת שירותים/מוצרים עם שמות נקיים והסברים קצרים, וסידור הצעת הערך.",
          },
          {
            title: "שלב 4. תמונות",
            body: "העלאת תמונות שמוכרות: חזית/כניסה, פנים, צוות/תהליך, דוגמאות עבודה או לפני/אחרי.",
          },
          {
            title: "שלב 5. קישורים ותאימות לאתר",
            body: "NAP עקבי, קישור לעמוד רלוונטי, ושיפור אותות מקומיים בסיסיים באתר אם צריך.",
          },
          {
            title: "שלב 6. תוכנית לביקורות",
            body: "בניית תהליך קבוע לבקשת ביקורות, הכנת תבניות תגובה והגדרת כללים לטיפול בשלילי.",
          },
        ],
      },
      {
        title: "ציפיות מול מציאות",
        blocks: [
          {
            body: [
              "ציפייה: מחר יגיעו שיחות; מציאות: תוצאות נבנות לאורך שבועות וחודשים.",
              "ציפייה: להגדיר פעם אחת ולשכוח; מציאות: צריך עדכונים קבועים.",
              "ציפייה: ביקורות מזויפות יפתרו הכול; מציאות: סיכון חסימה גבוה מהתועלת.",
            ],
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "הקמה מלאה של Google Business Profile הופכת את הכרטיס לברור, תקין ושימושי ללקוחות ול‑Google. זה לא מחליף אתר או פרסום, אבל זה חלק קריטי במערכת שיווק מקומית. עם הקמה טובה ותחזוקה שוטפת, הכרטיס יכול להפוך לערוץ יציב לפניות מקומיות.",
          },
        ],
      },
    ],
  },
};

export default content;
