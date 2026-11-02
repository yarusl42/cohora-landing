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
      "Регистрация бизнеса в Google Мой Бизнес: зачем это нужно и как сделать всё правильно",
    lead: [
      "Если у вас локальный бизнес в Минске, Бресте, Гомеле или другом городе Беларуси - салон, студия, мастерская, кабинет врача, сервис на выезд - профиль в Google Мой Бизнес (Google Business Profile) часто даёт больше клиентов, чем сам сайт. Ниже - честное объяснение, зачем он нужен белорусскому бизнесу, чего от него ожидать и как пройти регистрацию шаг за шагом.",
    ],
    sections: [
      {
        title: "Зачем регистрировать бизнес в Google Мой Бизнес",
        blocks: [
          {
            title: "1. Клиенты ищут «рядом со мной»",
            body: "Всё больше белорусов ищут услуги не по сайтам, а прямо в картах: «маникюр Минск», «стоматолог Брест», «автомойка Гомель». Если у вас нет подтверждённого профиля в Google Картах, вы просто не участвуете в этой выдаче, даже если у конкурентов не лучший сервис.",
          },
          {
            title: "2. Профиль в картах - это мини‑лендинг",
            body: "Человек видит сразу: рейтинг, отзывы, фото, время работы, как добраться, удобна ли ему локация. Часто этого достаточно, чтобы он выбрал вас, даже не заходя на сайт. Хорошо оформленный профиль реально заменяет первый контакт с менеджером.",
          },
          {
            title: "3. Дополнительный канал заявок",
            body: "Профиль в Google Мой Бизнес - это ещё один «вход» для клиентов: звонки по номеру из карточки, переходы на сайт, запросы маршрута, сообщения. При этом вы не платите за клики как в рекламе - вы платите только своим временем на настройку и регулярное ведение.",
          },
          {
            title: "4. Доверие через отзывы и фото",
            body: "Отзывы, реальные фотографии, ответы владельца на вопросы - всё это формирует доверие к бизнесу. Для многих ниш (косметология, стоматология, ремонт, образование) наличие живых отзывов в картах - уже не плюс, а минимум.",
          },
        ],
      },
      {
        title: "Чего ожидать от профиля в картах",
        blocks: [
          {
            body: "Важно сразу трезво понимать, что профиль в Google Мой Бизнес - это не «волшебная кнопка». Лучше заранее задать себе правильные ожидания.",
          },
          {
            body: [
              "Не мгновенный поток лидов: после регистрации и верификации нужно время, чтобы профиль «созрел».",
              "Зависимость от конкуренции: при сильных конкурентах придётся работать над качеством карточки и репутацией.",
              "Связка с сайтом: профиль обычно работает лучше, когда у него есть поддержка сайта.",
              "Нужна регулярность: новые фото, ответы на отзывы, обновления часов работы, иногда посты и акции.",
            ],
          },
        ],
      },
      {
        title: "Как зарегистрировать бизнес в Google Мой Бизнес: пошагово",
        blocks: [
          {
            body: "Ниже - базовый алгоритм, по которому может пройти большинство локальных бизнесов. У отдельных ниш могут быть свои нюансы, но общий скелет остаётся таким же.",
          },
          {
            title: "Шаг 1. Подготовьте базовые данные",
            body: "Перед началом соберите всё в одном месте: официальное название компании (как на вывеске и в документах), адрес или зону обслуживания (если вы работаете на выезде), рабочий телефон для клиентов, сайт (если есть) и соцсети, часы работы по дням недели, несколько хороших фотографий помещения, команды, процесса или результата.",
          },
          {
            title: "Шаг 2. Создайте или найдите профиль",
            body: "Перейдите в Google и введите запрос «Google Business Profile» или откройте business.google.com. Нажмите «Управлять/Manage now» и войдите под рабочей почтой, к которой у вас есть постоянный доступ. Затем введите название компании. Возможны варианты: профиль уже существует (создали клиенты/подрядчик) или профиль не найден (создаёте новый). Если профиль «уже есть», важно не создавать дубль, а запросить доступ и подтвердить, что вы - владелец.",
          },
          {
            title: "Шаг 3. Выберите категорию и заполняйте карточку",
            body: "Категория - один из ключевых параметров. Выберите основную категорию (например, «Салон красоты», «Стоматология») и при необходимости добавьте дополнительные. Затем заполните поля: адрес/зона обслуживания, телефон и сайт, часы работы, список услуг/товаров (по возможности), атрибуты (парковка, доступность, способы оплаты и т.п.).",
          },
          {
            title: "Шаг 4. Верификация бизнеса",
            body: "Чтобы профиль начал полноценно показываться, его нужно подтвердить. Конкретный способ (письмо, звонок, SMS, видео или фото) Google показывает в интерфейсе после заполнения данных. Важно следовать инструкциям и не менять ключевые данные в процессе.",
          },
          {
            title: "Шаг 5. Добавьте фото и описание",
            body: "После верификации уделите время визуальной части: загрузите реальные фото фасада, интерьера, команды, процесса и результата; избегайте стоковых картинок; напишите понятное описание - кто вы, чем занимаетесь, для кого ваш сервис и чем вы отличаетесь от ближайших конкурентов.",
          },
          {
            title: "Шаг 6. Попросите первых клиентов оставить отзывы",
            body: "Без отзывов работать сложнее. Начните с небольшого, но регулярного сбора: отправьте ссылку на профиль 5–10 лояльным клиентам; попросите описать, какую услугу получили и что понравилось; отвечайте на каждый отзыв от имени бизнеса.",
          },
        ],
      },
      {
        title: "Типичные ошибки при регистрации и ведении профиля",
        blocks: [
          {
            body: [
              "Искусственное «набивание» ключевых слов в названии компании - нарушает правила и может привести к блокировке.",
              "Создание дублей профиля вместо работы с уже существующей карточкой.",
              "Несоответствие адреса и телефона на сайте и в профиле.",
              "Полное отсутствие ответов на отзывы - особенно на негативные.",
              "Редкое обновление информации: старые часы работы, неактуальные услуги.",
              "Надежда на то, что «заполнил один раз и забыл» - без регулярности профиль проигрывает более активным конкурентам.",
            ],
          },
        ],
      },
      {
        title: "Краткий итог",
        blocks: [
          {
            body: "Регистрация в Google Мой Бизнес - базовый шаг для любого локального бизнеса, который хочет быть видимым в картах и поиске. Она не заменяет сайт и рекламу, но даёт отдельный устойчивый канал клиентов, если карточку правильно оформить и регулярно вести.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Registering a business on Google Maps (Google Business Profile): why it matters and how to do it right",
    lead: [
      "For most local businesses, a Google Business Profile can drive more calls and visits than the website itself. This guide explains why it matters, what to expect, and how to register step by step.",
    ],
    sections: [
      {
        title: "Why register your business",
        blocks: [
          {
            title: "1. Customers search ‘near me’",
            body: "More and more people search directly on Maps for services near them. Without a verified profile, you won’t be visible in key local results.",
          },
          {
            title: "2. Your profile is a mini landing page",
            body: "Customers see rating, reviews, photos, hours, and directions at a glance. Often that’s enough to choose you without visiting the website.",
          },
          {
            title: "3. An additional lead channel",
            body: "The profile generates calls, website clicks, direction requests, and messages. You pay with time and consistency-not per click like ads.",
          },
          {
            title: "4. Trust via reviews and photos",
            body: "Reviews, real photos, and owner responses build trust. In many industries, an active review presence is now the minimum.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: "A Google Business Profile is not a magic button. Set the right expectations.",
          },
          {
            body: [
              "Not instant lead volume: it takes time for a profile to mature.",
              "Competition matters: strong competitors require ongoing improvements.",
              "A website helps: profiles typically convert better with a solid website behind them.",
              "Consistency is required: photos, review replies, hours updates, and sometimes posts.",
            ],
          },
        ],
      },
      {
        title: "How to register (step by step)",
        blocks: [
          {
            body: "Below is a basic workflow most local businesses can follow.",
          },
          {
            title: "Step 1. Prepare your core data",
            body: "Gather: official business name, address (or service area), customer phone, website and social links, hours, and a set of real photos.",
          },
          {
            title: "Step 2. Create or find the profile",
            body: "Go to business.google.com, click Manage now, and sign in with an email you control long-term. Search for your business name. If it already exists, request access instead of creating a duplicate.",
          },
          {
            title: "Step 3. Choose category and fill the profile",
            body: "Pick the most accurate primary category and add secondary ones if needed. Fill out address/service area, phone, website, hours, services/products, and attributes.",
          },
          {
            title: "Step 4. Verify the business",
            body: "Google will offer a verification method (postcard, phone/SMS, video, photo, or other). Follow instructions and avoid changing core business details during verification.",
          },
          {
            title: "Step 5. Add photos and description",
            body: "Upload real photos (exterior, interior, team, work/results), avoid stock images, and write a clear description: who you are, what you do, who you serve, and what makes you different.",
          },
          {
            title: "Step 6. Get your first reviews",
            body: "Start by asking 5–10 loyal customers for a review. Encourage short specifics and reply to every review.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Keyword stuffing in the business name (violates guidelines and can lead to suspension).",
              "Creating duplicates instead of requesting access.",
              "NAP mismatch between the website and the profile.",
              "Not replying to reviews (especially negative ones).",
              "Rare updates: outdated hours and services.",
              "Register once and forget: inactive profiles lose to active competitors.",
            ],
          },
        ],
      },
      {
        title: "Short summary",
        blocks: [
          {
            body: "Registering a Google Business Profile is a foundational step for local visibility. It won’t replace your website or ads, but it can become a stable lead channel if you set it up correctly and maintain it.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "רישום עסק ב‑Google Business Profile: למה זה חשוב ואיך עושים את זה נכון",
    lead: [
      "לעסק מקומי, כרטיס ב‑Google Business Profile יכול להביא יותר שיחות וביקורים מאשר האתר עצמו. במדריך הזה נסביר למה זה חשוב, למה לצפות ואיך לבצע רישום שלב‑אחר‑שלב.",
    ],
    sections: [
      {
        title: "למה להירשם",
        blocks: [
          {
            title: "1. לקוחות מחפשים “קרוב אליי”",
            body: "יותר ויותר אנשים מחפשים שירותים ישירות במפות. בלי כרטיס מאומת, אתם פחות נראים בתוצאות מקומיות חשובות.",
          },
          {
            title: "2. הכרטיס הוא מיני‑דף נחיתה",
            body: "הלקוח רואה דירוג, ביקורות, תמונות, שעות וניווט במבט אחד-ולעיתים זה מספיק כדי לבחור בכם בלי להיכנס לאתר.",
          },
          {
            title: "3. ערוץ לידים נוסף",
            body: "הכרטיס מייצר שיחות, קליקים לאתר, בקשות ניווט והודעות. העלות היא זמן והתמדה-not תשלום לכל קליק.",
          },
          {
            title: "4. אמון דרך ביקורות ותמונות",
            body: "ביקורות, תמונות אמיתיות ותגובות בעל העסק בונים אמון. בהרבה תחומים זו כבר דרישה בסיסית.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: "Google Business Profile הוא לא כפתור קסם. חשוב להגדיר ציפיות נכונות.",
          },
          {
            body: [
              "לא לידים מיידיים: לוקח זמן שהכרטיס ‘יתבגר’.",
              "התחרות משפיעה: מול מתחרים חזקים צריך עבודה מתמשכת.",
              "אתר עוזר: כרטיסים לרוב ממירים טוב יותר עם אתר תומך.",
              "צריך עקביות: תמונות, תגובות לביקורות, עדכון שעות ולפעמים פוסטים.",
            ],
          },
        ],
      },
      {
        title: "איך להירשם (שלב‑אחר‑שלב)",
        blocks: [
          {
            body: "זה תהליך בסיסי שמתאים לרוב העסקים המקומיים.",
          },
          {
            title: "שלב 1. להכין נתונים",
            body: "לאסוף: שם רשמי, כתובת (או אזור שירות), טלפון, אתר וקישורים חברתיים, שעות ותמונות אמיתיות.",
          },
          {
            title: "שלב 2. ליצור או למצוא כרטיס",
            body: "להיכנס ל‑business.google.com, ללחוץ Manage now ולהתחבר עם אימייל שיש לכם אליו גישה לטווח ארוך. לחפש את שם העסק. אם כבר קיים-לבקש גישה ולא ליצור כפילות.",
          },
          {
            title: "שלב 3. לבחור קטגוריה ולמלא פרטים",
            body: "לבחור קטגוריה ראשית מדויקת ולהוסיף משניות לפי צורך. למלא כתובת/אזור שירות, טלפון, אתר, שעות, שירותים/מוצרים ומאפיינים.",
          },
          {
            title: "שלב 4. אימות",
            body: "Google תציע שיטת אימות (גלויה/טלפון/SMS/וידאו/צילום). לעקוב אחרי ההוראות ולהימנע משינויים בפרטים מרכזיים במהלך האימות.",
          },
          {
            title: "שלב 5. להוסיף תמונות ותיאור",
            body: "להעלות תמונות אמיתיות (חזית, פנים, צוות, דוגמאות עבודה), להימנע מתמונות סטוק ולכתוב תיאור ברור.",
          },
          {
            title: "שלב 6. לקבל ביקורות ראשונות",
            body: "לבקש מ‑5–10 לקוחות נאמנים ביקורת, לעודד פירוט קצר ולהגיב לכל ביקורת.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: [
              "דחיסת מילות מפתח בשם העסק (עלול להוביל להשעיה).",
              "יצירת כרטיסים כפולים במקום בקשת גישה.",
              "אי‑התאמה של NAP בין האתר לכרטיס.",
              "לא להגיב לביקורות-במיוחד לשליליות.",
              "עדכונים נדירים: שעות ושירותים לא עדכניים.",
              "להירשם פעם אחת ולשכוח: כרטיס לא פעיל מפסיד למתחרים פעילים.",
            ],
          },
        ],
      },
      {
        title: "סיכום קצר",
        blocks: [
          {
            body: "רישום כרטיס ב‑Google Business Profile הוא צעד בסיסי לנראות מקומית. זה לא מחליף אתר או פרסום, אבל זה יכול להפוך לערוץ לידים יציב אם מקימים ומתחזקים נכון.",
          },
        ],
      },
    ],
  },
};

export default content;
