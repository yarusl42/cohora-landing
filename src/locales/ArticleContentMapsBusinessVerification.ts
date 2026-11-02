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
      "Верификация карточек бизнеса: зачем это нужно, чего ожидать и как пройти процесс правильно",
    lead: [
      "Верификация карточек белорусского бизнеса - это обязательный этап для получения полного контроля над профилем в Google Business Profile, Яндекс.Бизнесе, 2ГИС и других картографических сервисах в Минске, Бресте, Гомеле и других городах Беларуси. Без верификации вы не сможете изменять информацию, отвечать на отзывы и полноценно управлять присутствием в картах.",
    ],
    sections: [
      {
        title: "Зачем вообще нужна верификация карточек",
        blocks: [
          {
            title: "1. Подтверждение подлинности компании",
            body: "Главная идея верификации проста: платформа (Google, Яндекс, Apple, 2ГИС, Bing и другие) хочет убедиться, что вы действительно представляете тот самый бизнес по указанному адресу, а не пытаетесь перехватить чужую карточку или создать фейковую точку. Пока этого не произошло, система относится к данным настороженно. Без подтверждения ваши данные могут отображаться с ошибками, «правиться» алгоритмами или пользователями. Адрес, телефон, сайт, режим работы - всё это может быть изменено без вашего участия. Верификация фиксирует: да, вот есть реальная компания, вот её официальный представитель, ему можно доверять управление карточкой.",
          },
          {
            title: "2. Защита от дезинформации и мошенников",
            body: "Неверифицированные карточки - удобная мишень: туда легко добавить ложную информацию.",
          },
          {
            body: [
              "Поменять телефон на номер конкурента или колл‑центра посредников.",
              "Указать неправильный график работы.",
              "Подменить сайт на мошеннический.",
              "Изменить адрес так, что люди просто не смогут до вас доехать.",
            ],
          },
          {
            body: "Иногда это делается злонамеренно, иногда - случайно, но результат один: клиент разочаровывается, а вы узнаёте об этом только из гневных отзывов. Подтверждённая карточка гораздо меньше подвержена таким историям: у владельца есть право быстро отклонять неверные правки и отстаивать корректные данные.",
          },
          {
            title: "3. Плюс к ранжированию в локальном поиске",
            body: "Подтверждённая карточка с понятным владельцем, актуальными данными и активностью (фото, посты, отзывы) для алгоритмов выглядит надёжнее, чем «серый» профиль. В итоге подтверждённые карточки чаще оказываются выше в результатах поиска, в топ‑3 локальной выдачи и в рекомендациях «рядом с вами».",
          },
          {
            title: "4. Доверие клиентов",
            body: "Оформленный профиль с логотипом, фото, понятным описанием и пометкой о подтверждении воспринимается как официальный источник. Пустая карточка - как что‑то ненадёжное и заброшенное. В условиях выбора из нескольких вариантов верификация - простой способ быть на шаг впереди.",
          },
          {
            title: "5. Полноценное управление карточкой",
            body: "После верификации вы получаете полный набор инструментов: редактирование адреса/телефона/графика, загрузка логотипа и фото, создание постов и акций, подключение ссылок (сайт, запись, доставка, меню), просмотр статистики (показы, клики, звонки, запросы). Для локального SEO это критично: без подтверждения карточка остаётся чем‑то «чужим» и полууправляемым.",
          },
        ],
      },
      {
        title: "Чего ожидать после верификации",
        blocks: [
          {
            title: "1. Карточка становится по‑настоящему управляемой",
            body: "После подтверждения вы можете править данные, когда это нужно бизнесу, а не когда случайно сработает алгоритм. Это особенно важно, если у вас часто меняются акции и предложения, есть сезонные изменения графика работы или появляются новые услуги. Любое обновление владельцем - сигнал платформе, что карточка живая.",
          },
          {
            title: "2. Повышается доверие платформы",
            body: "Верифицированным карточкам алгоритмы «доверяют» больше: реже вносят автоматические правки и с меньшей вероятностью ограничивают показы. Это не гарантия от любых блокировок, но заметное снижение рисков.",
          },
          {
            title: "3. Карточка становится богаче визуально",
            body: "После подтверждения часто открываются дополнительные блоки: логотип и обложка, фото интерьера/команды/продукции, кнопки действий (звонок, маршрут, сайт, запись, меню), атрибуты (парковка, Wi‑Fi, способы оплаты и т.п.). В результате карточка выглядит как полноценная мини‑страница компании.",
          },
          {
            title: "4. Появляется нормальная аналитика",
            body: "Подтверждённый владелец получает доступ к статистике: сколько людей видит карточку, по каким запросам, сколько кликает на сайт, звонит, строит маршрут. Это позволяет оценить ценность локального поиска и принимать решения на цифрах.",
          },
        ],
      },
      {
        title: "Где обычно нужна верификация",
        blocks: [
          {
            body: "У среднего локального бизнеса есть минимум 3–5 площадок, где желательно пройти подтверждение:",
          },
          {
            body: [
              "Google Business Profile - главный источник локального трафика во многих странах.",
              "Яндекс Бизнес - критично для Беларуси и части СНГ (Яндекс Карты, Поиск, Навигатор).",
              "Apple Maps Business Connect - важно для аудитории iPhone и пользователей CarPlay.",
              "2ГИС - сильный игрок в некоторых городах и отраслях (медицина, ремонт, услуги).",
              "Локальные каталоги и справочники - городские порталы, отраслевые сайты, каталоги торговых центров.",
            ],
          },
          {
            body: "Везде логика одна: платформа хочет увидеть, что бизнес реальный и у него есть человек, который отвечает за данные.",
          },
        ],
      },
      {
        title: "Как проходит процесс верификации: общая схема",
        blocks: [
          {
            title: "Этап 1. Подготовка данных",
            body: "Перед тем как нажимать кнопки «подтвердить», стоит собрать всё в одном месте: официальное название бизнеса, юридический и фактический адрес, телефон для клиентов, сайт и соцсети, категорию, график, логотип и 5–10 фотографий, а также документы (договор аренды, регистрационные бумаги, счета), которые могут потребоваться. Важно, чтобы данные совпадали с сайтом и другими справочниками - несостыковки NAP часто создают проблемы.",
          },
          {
            title: "Этап 2. Выбор способа подтверждения",
            body: "Разные платформы используют разные методы: письмо с кодом, звонок/SMS, письмо на e‑mail с доменом, видеоподтверждение, загрузка документов. В 2024–2025 годах всё чаще встречается вариант с видео: так платформа получает максимум доказательств за один раз.",
          },
          {
            title: "Этап 3. Прохождение проверки",
            body: "Вы подтверждаете, что реально существуете по указанному адресу и управляете бизнесом. Следуйте инструкциям и не пытайтесь «переиграть» систему - это обычно приводит к задержкам и дополнительным проверкам.",
          },
          {
            title: "Этап 4. Настройка карточки после верификации",
            body: "После получения статуса подтверждённой карточки нужно заполнить профиль максимально полно, добавить фото и логотип, настроить атрибуты, привести NAP к единому виду во всех карточках и подготовить план работы с отзывами. Верификация - только старт, а не финиш.",
          },
        ],
      },
      {
        title: "Типичные ошибки и как их избежать",
        blocks: [
          {
            title: "Ошибка 1. Несостыковки в названии и адресе",
            body: "Когда в одном месте вы «ООО Ромашка», в другом «Ромашка салон красоты», а на вывеске третье название, платформа сомневается, что это один бизнес. Приведите название к единому виду и придерживайтесь его во всех карточках.",
          },
          {
            title: "Ошибка 2. Попытка обмануть систему",
            body: "Выдуманные адреса, «виртуальные» офисы без реального присутствия, поддельные документы - всё это повышает риск блокировок и потери доверия. Безопаснее честно показать реальную ситуацию.",
          },
          {
            title: "Ошибка 3. Оставить всё как есть после подтверждения",
            body: "Получили подтверждение и забыли про карточку на полгода: данные устарели, отзывы без ответов, фото нет. Подтверждение - только первый шаг к системной работе с локальным поиском.",
          },
          {
            title: "Ошибка 4. Игнорировать локальные площадки",
            body: "Фокус только на Google или только на Яндексе не всегда правильный. В некоторых городах активно используют 2ГИС, Apple Maps или городские порталы. Если вы там не подтверждены - вы теряете часть аудитории.",
          },
        ],
      },
      {
        title: "Краткий итог",
        blocks: [
          {
            body: "Верификация карточек бизнеса - это база для нормального локального присутствия. Она подтверждает подлинность компании, защищает от дезинформации, помогает лучше ранжироваться в картах и делает карточку сильнее для клиентов.",
          },
          {
            body: "Процесс может занять от нескольких дней до пары недель и потребовать документов, фото и иногда видео. Но взамен вы получаете управляемую и доверенную платформами и людьми точку входа, через которую приходят клиенты из локального поиска.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Verifying business listings: why it matters, what to expect, and how to do it correctly",
    lead: [
      "Listing verification is a required step if you want full control over your profile in Google Business Profile, Apple Maps, Bing Places, and other map platforms. Without verification, you usually can’t edit key information, reply to reviews, or properly manage your visibility on Maps.",
    ],
    sections: [
      {
        title: "Why verification matters",
        blocks: [
          {
            title: "1. Proving you are the real business",
            body: "The main idea is simple: a platform (Google, Apple, Bing, etc.) wants to confirm you represent the business at that address-not a fake listing or someone trying to hijack a profile. Until verification happens, platforms treat the data with caution. Unverified listings may be edited by algorithms or users, and errors can appear in your address, phone, hours, or website. Verification establishes a clear owner who can be trusted to manage the listing.",
          },
          {
            title: "2. Protection from misinformation and fraud",
            body: "Unverified listings are easy targets. Bad edits can harm customers and your revenue.",
          },
          {
            body: [
              "Replacing your phone number with a competitor’s number or a reseller call center.",
              "Setting incorrect business hours.",
              "Swapping your website link to a phishing site.",
              "Changing the address so customers can’t find you.",
            ],
          },
          {
            body: "Sometimes this is malicious, sometimes accidental, but the result is the same: customers get frustrated and you find out too late. Verified owners can reject incorrect edits and restore accurate information faster.",
          },
          {
            title: "3. Better local rankings",
            body: "Verified, well-maintained listings (photos, posts, reviews) look more trustworthy to algorithms. As a result, they are more likely to show higher for relevant queries and appear in highly visible local results.",
          },
          {
            title: "4. Customer trust",
            body: "A complete, verified profile with photos and clear info feels official. An empty, unverified listing feels abandoned. In competitive local categories, verification is a simple way to stay ahead.",
          },
          {
            title: "5. Full listing management",
            body: "After verification, you typically unlock editing, photo uploads, posts/offers, action links (website, booking, menu), and analytics (views, clicks, calls, direction requests).",
          },
        ],
      },
      {
        title: "What to expect after verification",
        blocks: [
          {
            title: "1. Your listing becomes truly manageable",
            body: "You can update details when your business needs it-especially if you run promotions, change seasonal hours, or add new services. Owner updates also signal activity to the platform.",
          },
          {
            title: "2. Platforms trust you more",
            body: "Verified listings are less likely to be auto-edited and may face fewer visibility limitations. It’s not a guarantee, but it reduces risk.",
          },
          {
            title: "3. Richer listing features",
            body: "Verification often unlocks more profile elements: logo/cover, photos, action buttons, and attributes (parking, Wi‑Fi, accessibility, payments).",
          },
          {
            title: "4. Real analytics",
            body: "You’ll get insights: how many people saw your listing, which queries they used, and what actions they took (calls, website clicks, directions).",
          },
        ],
      },
      {
        title: "Where verification is usually needed",
        blocks: [
          {
            body: "Most local businesses should verify at least 2–4 platforms:",
          },
          {
            body: [
              "Google Business Profile (Google Maps).",
              "Apple Maps Business Connect.",
              "Bing Places.",
              "Local directories/citations relevant to your city and industry.",
            ],
          },
          {
            body: "The logic is the same: platforms want proof your business is real and that someone is responsible for the data.",
          },
        ],
      },
      {
        title: "How verification works (general workflow)",
        blocks: [
          {
            title: "Stage 1. Prepare your data",
            body: "Gather your official name, physical address, customer phone, website and key social profiles, primary category, hours, logo and photos, and any documents you may need (lease, utility bills, registration). Keep everything consistent across platforms-NAP mismatches often cause issues.",
          },
          {
            title: "Stage 2. Choose a verification method",
            body: "Platforms use different methods: postcard, phone/SMS, email (sometimes on the domain), video verification, or documentation uploads.",
          },
          {
            title: "Stage 3. Complete the review",
            body: "Follow instructions carefully. Attempts to game the process usually lead to delays, rejections, or extra checks.",
          },
          {
            title: "Stage 4. Optimize after verification",
            body: "Once verified, complete every field, add photos and attributes, standardize your NAP everywhere, and plan a review management routine. Verification is the start-not the finish.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "Mistake 1. Inconsistent name/address",
            body: "If your business name and address vary between platforms (or signage), platforms may doubt it’s the same entity. Standardize your public-facing name and stick to it.",
          },
          {
            title: "Mistake 2. Trying to trick the system",
            body: "Fake addresses, virtual offices without real presence, or forged documents can lead to suspensions. It’s safer to be transparent and work with your real situation.",
          },
          {
            title: "Mistake 3. Stopping after verification",
            body: "Getting verified and then ignoring the listing for months leads to outdated info, unanswered reviews, and poor conversion. Verification is only the first step.",
          },
          {
            title: "Mistake 4. Ignoring local platforms",
            body: "Only focusing on Google can be shortsighted. Depending on your market, Apple Maps, Bing, and local directories may matter for discovery.",
          },
        ],
      },
      {
        title: "Short summary",
        blocks: [
          {
            body: "Verification is not busywork-it’s the foundation of healthy local visibility. It proves authenticity, protects customers from misinformation, and unlocks full listing management.",
          },
          {
            body: "The process can take days to weeks and may require photos, documents, or video. In exchange, you gain a trusted, manageable entry point that can drive leads from local search.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "אימות כרטיסי עסק במפות: למה זה חשוב, למה לצפות ואיך לעשות את זה נכון",
    lead: [
      "אימות כרטיס עסק הוא שלב הכרחי כדי לקבל שליטה מלאה על הפרופיל ב‑Google Business Profile, Apple Maps Business Connect, ובפלטפורמות מפות נוספות. בלי אימות לרוב לא תוכלו לערוך פרטים, להגיב לביקורות או לנהל נראות מקומית בצורה מלאה.",
    ],
    sections: [
      {
        title: "למה אימות חשוב",
        blocks: [
          {
            title: "1. הוכחה שאתם העסק האמיתי",
            body: "הרעיון פשוט: הפלטפורמה רוצה לוודא שאתם באמת מייצגים את העסק בכתובת הזו-ולא כרטיס מזויף או ניסיון להשתלט על כרטיס של מישהו אחר. לפני אימות, המידע יכול להשתנות בגלל אלגוריתמים או משתמשים, ולהופיע עם שגיאות בשעות/טלפון/כתובת/אתר. אימות יוצר בעלות ברורה שניתן לסמוך עליה.",
          },
          {
            title: "2. הגנה מפני מידע שגוי והונאות",
            body: "כרטיסים לא מאומתים הם יעד קל לשינויים מזיקים.",
          },
          {
            body: [
              "להחליף טלפון למספר של מתחרה או מוקד של מתווך.",
              "לקבוע שעות פעילות לא נכונות.",
              "להחליף קישור לאתר להונאה.",
              "לשנות כתובת כך שלקוחות לא יצליחו להגיע.",
            ],
          },
          {
            body: "לפעמים זה זדוני ולפעמים בטעות-התוצאה זהה: לקוחות מתאכזבים ואתם מגלים מאוחר מדי. לאחר אימות, קל יותר לדחות שינויים לא נכונים ולהחזיר מידע מדויק.",
          },
          {
            title: "3. שיפור דירוג מקומי",
            body: "כרטיס מאומת ומתוחזק (תמונות, פוסטים, ביקורות) נראה אמין יותר לאלגוריתמים ולכן עשוי להופיע גבוה יותר בתוצאות המקומיות.",
          },
          {
            title: "4. אמון לקוחות",
            body: "פרופיל מלא ומאומת נראה רשמי ואמין. כרטיס ריק ולא מאומת נראה נטוש. בתחומים תחרותיים, אימות הוא יתרון פשוט.",
          },
          {
            title: "5. ניהול מלא של הכרטיס",
            body: "אחרי אימות בדרך כלל נפתחות אפשרויות עריכה, העלאת תמונות, פרסומים, קישורי פעולה (אתר/הזמנה/תפריט) ואנליטיקה (צפיות, קליקים, שיחות, ניווט).",
          },
        ],
      },
      {
        title: "למה לצפות אחרי האימות",
        blocks: [
          {
            title: "1. הכרטיס הופך לנשלט באמת",
            body: "תוכלו לעדכן פרטים כשצריך-מבצעים, שינויי שעות עונתיים או שירותים חדשים. עדכונים של בעל העסק הם גם איתות לפלטפורמה שהכרטיס פעיל.",
          },
          {
            title: "2. יותר אמון מצד הפלטפורמה",
            body: "כרטיסים מאומתים נוטים לקבל פחות שינויים אוטומטיים ולעיתים פחות מגבלות נראות. אין הבטחה, אבל הסיכון קטן.",
          },
          {
            title: "3. יותר אפשרויות עיצוב",
            body: "לעיתים נפתחים אלמנטים נוספים: לוגו/כיסוי, גלריית תמונות, כפתורי פעולה ומאפיינים (חניה, Wi‑Fi, נגישות, תשלום).",
          },
          {
            title: "4. אנליטיקה אמיתית",
            body: "תקבלו נתונים: כמה ראו את הכרטיס, באילו חיפושים, ומה עשו (שיחות, קליקים לאתר, ניווט).",
          },
        ],
      },
      {
        title: "איפה בדרך כלל צריך אימות",
        blocks: [
          {
            body: "רוב העסקים המקומיים צריכים לאמת לפחות 2–4 פלטפורמות:",
          },
          {
            body: [
              "Google Business Profile (Google Maps).",
              "Apple Maps Business Connect.",
              "פלטפורמות מפות נוספות לפי ענף/עיר (ולעיתים גם Waze).",
              "ספריות מקומיות ואזכורים.",
            ],
          },
          {
            body: "העיקרון זהה: הפלטפורמה רוצה הוכחה שהעסק אמיתי ושיש מי שאחראי על הנתונים.",
          },
        ],
      },
      {
        title: "איך נראה תהליך האימות (תמונה כללית)",
        blocks: [
          {
            title: "שלב 1. הכנת נתונים",
            body: "אספו שם רשמי, כתובת, טלפון ללקוחות, אתר ורשתות, קטגוריה, שעות, לוגו ותמונות, ולעיתים מסמכים (חוזה שכירות, חשבונות, רישום). שמרו על עקביות NAP בכל מקום.",
          },
          {
            title: "שלב 2. בחירת שיטת אימות",
            body: "השיטות משתנות: גלויה, טלפון/SMS, אימייל, אימות וידאו, העלאת מסמכים.",
          },
          {
            title: "שלב 3. ביצוע הבדיקה",
            body: "עקבו אחרי ההוראות. ניסיון “לעקוף” את המערכת לרוב יגרום לעיכובים או בדיקות נוספות.",
          },
          {
            title: "שלב 4. אופטימיזציה אחרי אימות",
            body: "אחרי אימות, מלאו את כל השדות, הוסיפו תמונות ומאפיינים, איחדו NAP בכל הפלטפורמות ובנו תהליך לניהול ביקורות. האימות הוא התחלה.",
          },
        ],
      },
      {
        title: "שגיאות נפוצות",
        blocks: [
          {
            title: "שגיאה 1. חוסר עקביות בשם/כתובת",
            body: "אם שם העסק והכתובת משתנים בין מקורות שונים, הפלטפורמה עלולה להטיל ספק. עדיף לאחד שם ציבורי ולהיצמד אליו.",
          },
          {
            title: "שגיאה 2. ניסיון לרמות",
            body: "כתובות מזויפות או מסמכים לא אמיתיים עלולים לגרום לחסימות. עדיף שקיפות.",
          },
          {
            title: "שגיאה 3. לעצור אחרי האימות",
            body: "אימות בלי תחזוקה גורם למידע לא מעודכן וביקורות ללא מענה. זה רק הצעד הראשון.",
          },
          {
            title: "שגיאה 4. להתעלם מפלטפורמות מקומיות",
            body: "לפעמים Waze/Apple Maps או ספריות מקומיות משפיעות על חיפוש. אל תתמקדו רק בפלטפורמה אחת.",
          },
        ],
      },
      {
        title: "סיכום קצר",
        blocks: [
          {
            body: "אימות הוא לא בירוקרטיה מיותרת-זו התשתית לנראות מקומית בריאה: הוא מוכיח אמינות, מגן מפני מידע שגוי ופותח ניהול מלא.",
          },
          {
            body: "התהליך יכול לקחת ימים עד שבועות ולעיתים דורש תמונות/מסמכים/וידאו. בתמורה מקבלים נקודת כניסה אמינה שניתן לנהל ושיכולה לייצר פניות מחיפוש מקומי.",
          },
        ],
      },
    ],
  },
};

export default content;
