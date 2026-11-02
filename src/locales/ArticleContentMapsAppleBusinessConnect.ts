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
      "Регистрация в Apple Maps Business Connect: зачем это нужно и как пройти процесс без лишней суеты",
    lead: [
      "Apple Maps Business Connect - официальный инструмент для управления карточкой компании в Apple Картах. Большинство предпринимателей привыкли думать в категориях Google и Яндекс, но у экосистемы Apple есть своя лояльная и часто платёжеспособная аудитория: владельцы iPhone, iPad, Mac, Apple Watch и водители с CarPlay. Для них встроенные Карты Apple - естественная точка поиска мест поблизости. В этой статье разберём, зачем регистрировать бизнес в Business Connect, чего ожидать от процесса и как пошагово пройти регистрацию.",
    ],
    sections: [
      {
        title: "Зачем регистрироваться в Apple Maps Business Connect",
        blocks: [
          {
            title: "1. Доступ к аудитории пользователей Apple",
            body: "Доля пользователей устройств Apple растёт из года в год. Эта аудитория активно пользуется встроенными сервисами, в том числе Картами. Если ваш бизнес не представлен в Apple Maps или представлен некорректно, вы теряете часть потенциальных клиентов, которые даже не дойдут до Google или Яндекса. Регистрация через Business Connect позволяет сделать карточку видимой и аккуратной именно для этой группы пользователей.",
          },
          {
            title: "2. Контроль над карточкой компании",
            body: "Без регистрации данные в Apple Картах часто подхватываются автоматически: из старых справочников, сайтов, сторонних источников. В таком режиме сложно поддерживать актуальность информации.",
          },
          {
            body: [
              "редактировать название, адрес, часы работы и телефоны;",
              "добавлять сайт и другие ссылки;",
              "загружать фотографии и логотипы;",
              "публиковать обновления и предложения;",
              "следить за статистикой просмотров и действий.",
            ],
          },
          {
            title: "3. Повышение доверия клиентов",
            body: "Наличие аккуратной карточки в Apple Картах - часть общей репутации. Для многих клиентов отсутствие компании в популярных картах выглядит как сигнал: «что‑то здесь не так». Когда же профиль заполнен, есть фото и понятное описание, бизнес воспринимается как более устойчивый и надёжный.",
          },
          {
            title: "4. Укрепление локального SEO",
            body: "Хотя Apple напрямую не «кормит» данными Google, единообразие информации (NAP - название, адрес, телефон) в разных экосистемах усиливает доверие поисковиков. Когда сайт, Google, Apple, соцсети и каталоги указывают одни и те же данные, локальное SEO работает стабильнее.",
          },
          {
            title: "5. Присутствие в CarPlay и навигации",
            body: "Водители, ищущие кафе, АЗС, медцентры или сервисы прямо из автомобиля, часто делают это через CarPlay. Корректно оформленная карточка в Apple Maps повышает шанс быть показанным в таких сценариях, когда решение принимается «на ходу».",
          },
        ],
      },
      {
        title: "Чего ожидать после регистрации",
        blocks: [
          {
            title: "1. Управляемая и обновляемая карточка",
            body: "После подтверждения вы получаете возможность быстро обновлять расписание, контакты, описание, фото. Это особенно важно, если график работы меняется, появляются новые услуги или акции.",
          },
          {
            title: "2. Дополнительные инструменты оформления",
            body: "В Business Connect доступны функции, которых нет у «автоматически созданных» карточек:",
          },
          {
            body: [
              "кнопки действий (звонок, сайт, бронирование);",
              "публикации с офферами и новостями;",
              "брендированные обложки и логотипы;",
              "расширенное описание.",
            ],
          },
          {
            title: "3. Более привлекательный внешний вид карточки",
            body: "Карточка, которой управляет владелец, выглядит структурировано и богато: аккуратные тексты, фото, логотип, кнопки действий. На фоне «пустых» профилей это заметное преимущество.",
          },
          {
            title: "4. Больше показов и базовая аналитика",
            body: "Apple не обещает автоматический рост позиций, но на практике подтверждённые и хорошо оформленные карточки получают больше показов и взаимодействий. В личном кабинете вы увидите простую аналитику: просмотры, нажатия на кнопки и другие действия пользователей.",
          },
        ],
      },
      {
        title:
          "Как проходит регистрация в Apple Maps Business Connect: пошагово",
        blocks: [
          {
            title: "Шаг 1. Подготовьте данные компании",
            body: "Перед стартом соберите в одном месте: корректное название бизнеса (как на сайте и вывеске), точный физический адрес, рабочий телефон, домен сайта, категорию бизнеса, часы работы, логотип и несколько качественных фото. Важно, чтобы эти данные совпадали с тем, что указано в Google, на сайте и в других справочниках - это снижает риск путаницы и ошибок.",
          },
          {
            title: "Шаг 2. Создайте отдельный Apple ID для бизнеса",
            body: "Для работы с Business Connect нужен Apple ID. Лучше не использовать личную учётную запись, а завести корпоративный аккаунт, доступ к которому можно при необходимости передать новому ответственному.",
          },
          {
            title: "Шаг 3. Зайдите в Apple Maps Business Connect",
            body: "После входа под Apple ID система предложит найти ваш бизнес по названию и адресу. Возможны два сценария: компания уже присутствует в Apple Картах - вы запрашиваете управление карточкой; компания не найдена - создаёте новый профиль.",
          },
          {
            title: "Шаг 4. Заполните профиль",
            body: "На этом этапе вы указываете: название бизнеса, адрес в формате, который запрашивает Apple, категории деятельности, телефон и сайт, часы работы и краткое описание. Описание лучше делать без лишнего «маркетингового шума»: кто вы, чем занимаетесь, для кого и в каком районе работаете.",
          },
          {
            title: "Шаг 5. Загрузите фото и логотип",
            body: "Добавьте логотип, фото фасада, интерьера, команды и, при необходимости, примеров работ. Это поможет карточке выглядеть аккуратно и сразу покажет, что бизнес real, а не «пустой маркер» на карте.",
          },
          {
            title: "Шаг 6. Подтвердите владение бизнесом",
            body: "Apple может предложить разные способы подтверждения: звонок, письмо, проверка по документам. Важно внимательно следовать инструкции, не менять данные в процессе и быть на связи, чтобы не затягивать проверку.",
          },
        ],
      },
      {
        title: "Типичные ошибки и как их избежать",
        blocks: [
          {
            title: "1. Несоответствие данных",
            body: "Если название, адрес или телефон в Apple Картах отличаются от сайта и Google, это создаёт путаницу и может вызвать дополнительные проверки. Лучше сразу привести все источники к единому стандарту.",
          },
          {
            title: "2. Пустой профиль после регистрации",
            body: "Получить доступ и ничего не заполнить - распространённая история. Карточка без фото, описания и актуального графика почти не даёт преимущества. Важно довести оформление до конца.",
          },
          {
            title: "3. Редкое обновление информации",
            body: "Если график работы меняется, но в Apple Картах об этом не написано, клиенты будут приезжать к закрытым дверям. Это прямой путь к негативу. Регистрация в Business Connect имеет смысл только если вы готовы поддерживать профиль в актуальном состоянии.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Регистрация в Apple Business Connect для белорусского бизнеса - это важный этап для локального бизнеса в Минске, Бресте, Гомеле и других городах Беларуси, который хочет быть видимым для белорусских пользователей iPhone и других устройств Apple. Правильно настроенный профиль помогает получать дополнительные обращения и улучшает общую видимость в картах.",
          },
          {
            body: "Регистрация в Apple Maps Business Connect - логичный шаг для любого локального бизнеса, который хочет быть видимым не только в Google и Яндексе, но и в экосистеме Apple. Это даёт контроль над карточкой, доступ к аудитории пользователей iPhone и CarPlay, улучшает общую цифровую консистентность и повышает доверие.",
          },
          {
            body: "Процесс регистрации несложен, если заранее подготовить данные и аккуратно пройти подтверждение. А дальше всё упирается в регулярность: чем внимательнее вы относитесь к карточке, тем больше она будет работать на вас как ещё один стабильный канал локальных клиентов.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Apple Maps Business Connect: why you should register and how to get through the process smoothly",
    lead: [
      "Apple Maps Business Connect is Apple’s official tool for managing your business listing in Apple Maps. Many owners think only in terms of Google, but Apple has a loyal (and often high-spending) audience: iPhone/iPad/Mac users and drivers using CarPlay. For them, Apple Maps is a natural “near me” discovery surface. In this guide, we’ll cover why Business Connect matters, what to expect, and how to register step by step.",
    ],
    sections: [
      {
        title: "Why register in Apple Maps Business Connect",
        blocks: [
          {
            title: "1. Access to Apple users",
            body: "The share of Apple device users is significant in many markets, and they actively rely on built-in services like Maps. If your business is missing from Apple Maps (or the information is wrong), you lose potential customers who may never reach your website-or even Google Maps. Business Connect helps make your listing visible, accurate, and trustworthy for this audience.",
          },
          {
            title: "2. Control over your listing",
            body: "Without registration, Apple Maps data is often pulled automatically from directories, websites, and third-party sources. That makes it hard to keep information current.",
          },
          {
            body: [
              "Edit your name, address, hours, and phone number;",
              "Add your website and other links;",
              "Upload photos and logos;",
              "Publish updates and offers;",
              "View basic insights (views and actions).",
            ],
          },
          {
            title: "3. More trust",
            body: "A clean, complete Apple Maps listing is part of your overall reputation. For many customers, not being present in major map apps is a red flag. A filled-out profile with photos and clear information makes your business look more reliable.",
          },
          {
            title: "4. Stronger local SEO consistency",
            body: "Apple doesn’t directly “feed” Google ranking systems, but consistent NAP (name, address, phone) across ecosystems helps search engines trust your data. When your website, Google, Apple, social profiles, and directories match, local SEO tends to perform more reliably.",
          },
          {
            title: "5. CarPlay and navigation use cases",
            body: "Drivers often look for places on the go using CarPlay. A properly managed Apple Maps listing improves your chances of appearing in these high-intent moments.",
          },
        ],
      },
      {
        title: "What to expect after registration",
        blocks: [
          {
            title: "1. A manageable, updatable listing",
            body: "After verification, you can quickly update hours, contacts, description, and photos-especially useful when schedules change or you launch new services and promotions.",
          },
          {
            title: "2. Additional presentation tools",
            body: "Business Connect includes features not available for automatically generated listings:",
          },
          {
            body: [
              "Action buttons (call, website, booking);",
              "Posts with offers and news;",
              "Branded covers and logos;",
              "Extended descriptions.",
            ],
          },
          {
            title: "3. A better-looking profile",
            body: "Owner-managed listings look more structured: better copy, photos, logo, and action buttons. Against “empty” profiles, that’s a real advantage.",
          },
          {
            title: "4. More impressions + basic analytics",
            body: "Apple doesn’t guarantee ranking boosts, but in practice, verified and well-designed listings often receive more views and interactions. You’ll also get simple analytics in the dashboard.",
          },
        ],
      },
      {
        title:
          "How Apple Maps Business Connect registration works (step by step)",
        blocks: [
          {
            title: "Step 1. Prepare your business data",
            body: "Before you start, gather: your official business name (matching signage and website), a precise physical address, a working phone number, website domain, business category, hours, a logo, and several high-quality photos. Make sure this information matches your website and other listings to reduce verification friction.",
          },
          {
            title: "Step 2. Create a dedicated Apple ID",
            body: "Business Connect requires an Apple ID. It’s best to use a company-owned account rather than a personal one, so access can be transferred if your team changes.",
          },
          {
            title: "Step 3. Sign in and find your business",
            body: "After signing in, Apple will ask you to search for your business by name and address. Two scenarios are common: your business already exists and you request access; or it’s not found and you create a new listing.",
          },
          {
            title: "Step 4. Fill out the profile",
            body: "You’ll add: business name, address in Apple’s format, categories, phone and website, hours, and a short description. Keep it factual: who you are, what you do, and where you serve.",
          },
          {
            title: "Step 5. Upload photos and logo",
            body: "Add your logo and photos (storefront, interior, team, and examples of work). Visuals make the listing look real and trustworthy.",
          },
          {
            title: "Step 6. Verify ownership",
            body: "Apple may verify via phone call, mail, or documentation. Follow instructions carefully, avoid changing core details mid-process, and stay reachable to keep the review moving.",
          },
        ],
      },
      {
        title: "Common mistakes (and how to avoid them)",
        blocks: [
          {
            title: "1. Inconsistent business data",
            body: "If your name/address/phone in Apple Maps differs from your website and Google Business Profile, it creates confusion and can trigger extra checks. Standardize your NAP across all platforms.",
          },
          {
            title: "2. Leaving the profile empty",
            body: "Gaining access but not finishing the setup is common. A listing without photos, description, and accurate hours provides little benefit. Complete it properly.",
          },
          {
            title: "3. Rare updates",
            body: "If your hours change but Apple Maps isn’t updated, customers arrive at closed doors-leading to negative experiences. Business Connect only makes sense if you keep the profile current.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Registering in Apple Maps Business Connect is a practical step for any local business that wants to be visible not only on Google Maps but also in the Apple ecosystem. A well-managed profile adds control, improves trust, and can generate additional local leads.",
          },
          {
            body: "The process is straightforward if you prepare your data and complete verification carefully. After that, results depend on consistency: the more actively you maintain your listing, the more it works as a stable channel for local customers.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "Apple Maps Business Connect: למה כדאי להירשם ואיך לעבור את התהליך בצורה חלקה",
    lead: [
      "Apple Maps Business Connect הוא הכלי הרשמי של Apple לניהול כרטיס העסק ב‑Apple Maps. בעלי עסקים רבים חושבים בעיקר על Google, אבל ל‑Apple יש קהל נאמן ולעיתים קרובות בעל כוח קנייה גבוה: משתמשי iPhone/iPad/Mac ונהגים עם CarPlay. עבורם Apple Maps היא נקודת חיפוש טבעית למקומות “קרובים אליי”. במדריך הזה נסביר למה זה חשוב, למה לצפות ואיך להירשם שלב‑אחר‑שלב.",
    ],
    sections: [
      {
        title: "למה להירשם ל‑Apple Maps Business Connect",
        blocks: [
          {
            title: "1. גישה לקהל משתמשי Apple",
            body: "בישראל יש נתח משמעותי של משתמשי Apple, והם משתמשים הרבה בשירותים מובנים כמו מפות. אם העסק לא מופיע ב‑Apple Maps או שמופיע בצורה לא נכונה, אתם מפסידים לקוחות שלא בהכרח יגיעו ל‑Google או ל‑Waze. Business Connect מאפשר להפוך את הכרטיס למדויק, נגיש ואמין לקהל הזה.",
          },
          {
            title: "2. שליטה בכרטיס העסק",
            body: "בלי הרשמה, הנתונים ב‑Apple Maps נאספים לעיתים ממקורות חיצוניים (אתרים, ספריות, אינדקסים) וקשה לשמור אותם מעודכנים.",
          },
          {
            body: [
              "לערוך שם/כתובת/שעות/טלפון;",
              "להוסיף אתר וקישורים נוספים;",
              "להעלות תמונות ולוגו;",
              "לפרסם עדכונים ומבצעים;",
              "לראות נתוני צפיות ופעולות.",
            ],
          },
          {
            title: "3. יותר אמון",
            body: "כרטיס נקי ומלא ב‑Apple Maps הוא חלק מהמוניטין שלכם. עבור לקוחות רבים היעדר נוכחות באפליקציות מפות מרכזיות נראה כמו סימן אזהרה. פרופיל מלא עם תמונות ומידע ברור נראה יציב ואמין יותר.",
          },
          {
            title: "4. עקביות SEO מקומי",
            body: "Apple לא “מזינה” ישירות את Google, אבל עקביות NAP (שם, כתובת, טלפון) בין מערכות עוזרת לאמינות הנתונים. כאשר האתר, Google, Apple, רשתות חברתיות וספריות מציגים אותם פרטים-ה‑SEO המקומי לרוב יציב יותר.",
          },
          {
            title: "5. CarPlay וניווט",
            body: "נהגים מחפשים מקומות בזמן אמת דרך CarPlay ולעיתים גם דרך Waze. כרטיס מנוהל היטב ב‑Apple Maps משפר את הסיכוי להופיע בדיוק ברגעים האלה.",
          },
        ],
      },
      {
        title: "למה לצפות אחרי ההרשמה",
        blocks: [
          {
            title: "1. כרטיס שניתן לעדכן",
            body: "אחרי אימות, תוכלו לעדכן במהירות שעות פעילות, פרטי קשר, תיאור ותמונות-חשוב במיוחד כשיש שינויי שעות, שירותים חדשים או מבצעים.",
          },
          {
            title: "2. כלים נוספים להצגה",
            body: "Business Connect כולל יכולות שלא קיימות בכרטיסים שנוצרו אוטומטית:",
          },
          {
            body: [
              "כפתורי פעולה (שיחה, אתר, הזמנה);",
              "פוסטים עם הצעות וחדשות;",
              "מיתוג (לוגו/תמונת כיסוי);",
              "תיאור מורחב.",
            ],
          },
          {
            title: "3. מראה מקצועי יותר",
            body: "כרטיס שמנוהל על‑ידי בעל העסק נראה מסודר ומלא יותר: טקסט טוב, תמונות, לוגו וכפתורי פעולה. זה יתרון מול פרופילים “ריקים”.",
          },
          {
            title: "4. יותר חשיפות + אנליטיקה בסיסית",
            body: "Apple לא מבטיחה קפיצה בדירוג, אבל בפועל כרטיסים מאומתים ומלאים מקבלים יותר צפיות ואינטראקציות. בממשק תראו אנליטיקה בסיסית של צפיות ופעולות.",
          },
        ],
      },
      {
        title: "איך נרשמים (שלב‑אחר‑שלב)",
        blocks: [
          {
            title: "שלב 1. להכין את נתוני העסק",
            body: "לפני שמתחילים אספו: שם רשמי, כתובת מדויקת, טלפון פעיל, אתר, קטגוריה, שעות פעילות, לוגו ותמונות איכותיות. חשוב שהנתונים יהיו עקביים גם באתר וגם בכרטיסים אחרים כדי להפחית בעיות אימות.",
          },
          {
            title: "שלב 2. ליצור Apple ID ייעודי",
            body: "Business Connect דורש Apple ID. עדיף להשתמש בחשבון עסקי ולא אישי, כדי שאפשר יהיה להעביר גישה בעת הצורך.",
          },
          {
            title: "שלב 3. להיכנס ולחפש את העסק",
            body: "אחרי כניסה, המערכת תבקש לחפש את העסק לפי שם וכתובת. בדרך כלל או שהעסק כבר קיים ומבקשים שליטה, או שלא נמצא ויוצרים כרטיס חדש.",
          },
          {
            title: "שלב 4. למלא את הפרופיל",
            body: "ממלאים: שם העסק, כתובת לפי פורמט Apple, קטגוריות, טלפון ואתר, שעות פעילות ותיאור קצר. מומלץ להיות ענייניים: מי אתם, מה אתם עושים והיכן אתם פועלים.",
          },
          {
            title: "שלב 5. להעלות תמונות ולוגו",
            body: "הוסיפו לוגו ותמונות (חזית, פנים, צוות, דוגמאות עבודה). זה מעלה אמון ומשפר את הנראות.",
          },
          {
            title: "שלב 6. לאמת בעלות",
            body: "Apple יכולה לאמת דרך שיחה, דואר או מסמכים. עקבו אחרי ההוראות, הימנעו משינויים באמצע התהליך והיו זמינים כדי לא לעכב את האימות.",
          },
        ],
      },
      {
        title: "שגיאות נפוצות",
        blocks: [
          {
            title: "1. חוסר עקביות בנתונים",
            body: "כאשר שם/כתובת/טלפון ב‑Apple שונים מהאתר ומ‑Google, זה עלול לגרום לבלבול ולבדיקות נוספות. עדיף לאחד NAP בכל מקום.",
          },
          {
            title: "2. להשאיר את הכרטיס ריק",
            body: "לקבל גישה ולא להשלים את המידע זה נפוץ. כרטיס בלי תמונות, תיאור ושעות מדויקות כמעט לא נותן ערך. חשוב להשלים את ההגדרה.",
          },
          {
            title: "3. עדכונים נדירים",
            body: "אם שעות משתנות ולא מעדכנים, לקוחות מגיעים כשהעסק סגור-וזה גורם לחוויות שליליות. Business Connect משתלם רק אם שומרים על הכרטיס עדכני.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "הרשמה ל‑Apple Maps Business Connect היא צעד הגיוני לכל עסק מקומי שרוצה להיות נוכח לא רק ב‑Google אלא גם באקוסיסטם של Apple. כרטיס מנוהל היטב נותן שליטה, מחזק אמון ויכול לייצר פניות נוספות.",
          },
          {
            body: "התהליך לא מורכב אם מכינים נתונים מראש ועוברים אימות בצורה מסודרת. לאחר מכן הכול תלוי בעקביות: ככל שמתחזקים את הכרטיס באופן פעיל יותר-כך הוא יעבוד יותר כערוץ יציב ללקוחות מקומיים.",
          },
        ],
      },
    ],
  },
};

export default content;
