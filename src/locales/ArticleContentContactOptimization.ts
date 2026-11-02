export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type HowToStep = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  sections: ArticleSection[];
  checklist: {
    storageKey: string;
    title: string;
    steps: readonly HowToStep[];
  };
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Оптимизация контактов и схемы проезда на сайте: зачем это нужно и как правильно сделать",
    lead: [
      "Страница контактов - одна из ключевых страниц сайта, особенно для локального бизнеса. Здесь пользователь решает, позвонить ли вам, построить маршрут или закрыть сайт. Грамотно оформленные контакты и схема проезда дают рост звонков, визитов, доверия и улучшают локальное SEO.",
    ],
    sections: [
      {
        title: "1. Зачем оптимизировать контакты и схему проезда",
        blocks: [
          {
            title: "1.1. Упрощение пути клиента",
            body: "Посетители страницы контактов находятся на последнем шаге перед обращением: они уже готовы позвонить, записаться или приехать. Любое лишнее трение - отсутствие понятного телефона, сложная схема, нет кнопки маршрута - уменьшает конверсию. Чем проще путь, тем больше обращений.",
          },
          {
            title: "1.2. Увеличение числа обращений",
            body: "Кликабельные телефоны, удобные кнопки «Позвонить» и «Написать», понятная схема проезда и кнопка «Построить маршрут» дают прирост звонков и визитов без дополнительных рекламных вложений.",
          },
          {
            title: "1.3. Вклад в локальное SEO",
            body: "Страница контактов влияет на локальное ранжирование, соответствие карточкам в картах и NAP‑консистентность (Name, Address, Phone). Совпадение данных на сайте, в Google/Яндекс и каталогах усиливает позиции по геозависимым запросам.",
          },
          {
            title: "1.4. Повышение доверия и восприятия бренда",
            body: "Расширенная контактная страница с фото входа, схемой проезда, картами, парковкой, ссылками на соцсети и формой связи создаёт впечатление серьёзного и заботливого бизнеса.",
          },
        ],
      },
      {
        title: "2. Чего ожидать после оптимизации",
        blocks: [
          {
            body: [
              "Рост числа звонков за счёт кликабельных телефонов и заметных CTA.",
              "Больше офлайн‑визитов при понятной схеме проезда и кнопках маршрута.",
              "Улучшение пользовательского опыта: меньше отказов и путаницы.",
              "Более быстрая индексация актуальных данных о компании в поиске и картах.",
            ],
          },
        ],
      },
      {
        title: "3. Как правильно оптимизировать страницу контактов",
        blocks: [
          {
            title: "3.1. Кликабельные телефоны и мессенджеры",
            body: "Телефон должен быть не просто текстом, а ссылкой tel:+375… и/или кнопкой «Позвонить». Для белорусского рынка важны быстрые ссылки на Telegram, Viber, WhatsApp. Разместите их в верхней части страницы и продублируйте в футере.",
          },
          {
            title: "3.2. Единый формат NAP",
            body: "Имя компании, адрес и телефон оформляйте в одном и том же формате на сайте, в картах и каталогах. Это укрепляет NAP‑сигналы и помогает локальному SEO.",
          },
          {
            title: "3.3. Интерактивная карта (Google/Яндекс)",
            body: "Используйте интерактивную карту с точным пином и проверенными координатами. Для Беларуси часто удобнее Яндекс.Карты, дополнительно можно добавить Google Maps для части аудитории.",
          },
          {
            title: "3.4. Кнопка «Построить маршрут»",
            body: "Добавьте явные кнопки «Маршрут в Google Maps» и «Маршрут в Яндекс.Картах». Это снижает барьеры для визита и увеличивает количество поездок по адресу.",
          },
          {
            title: "3.5. Схема проезда и фото входа",
            body: "Если вход сложный (дворы, этажи, бизнес‑центр), добавьте короткую текстовую схему и несколько фото: фасад, вход, ресепшен, парковка. Это уменьшит звонки «я вас ищу» и повысит комфорт.",
          },
        ],
      },
      {
        title: "4. Дополнительные элементы на странице контактов",
        blocks: [
          {
            body: [
              "Часы работы (включая праздники/особые дни).",
              "Ссылки на соцсети и мессенджеры.",
              "Форма обратной связи с минимальным числом полей.",
              "Информация о парковке и доступности (лифты, пандусы).",
              "Отдельные контакты по отделам (продажи, поддержка, бухгалтерия) - при необходимости.",
            ],
          },
        ],
      },
      {
        title: "5. Типичные ошибки",
        blocks: [
          {
            body: [
              "Мелкий или «спрятанный» телефон, отсутствие кликабельности.",
              "Неактуальный адрес или телефон, отличающийся от данных в картах.",
              "Статичное изображение карты вместо интерактивной.",
              "Отсутствие кнопок маршрута и фото входа.",
              "Слишком много лишней информации, мешающей найти главное.",
            ],
          },
        ],
      },
      {
        title: "6. FAQ",
        blocks: [
          {
            title: "Как часто обновлять страницу контактов?",
            body: "Всякий раз при изменении адреса, телефона, графика работы или схемы проезда. Дополнительно имеет смысл пересматривать страницу раз в 6–12 месяцев под новые сценарии: появление филиалов, новые мессенджеры, изменения в навигации.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleContactsDirectionsChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "contacts-directions-checklist",
          title: "",
          description: "",
          items: [
            "Сделайте телефоны и мессенджеры кликабельными и заметными.",
            "Выведите NAP в едином формате и синхронизируйте с картами.",
            "Добавьте интерактивную карту и кнопки маршрута.",
            "Покажите фото входа и упростите путь до двери.",
            "Уберите лишнее, оставив главное: как связаться и как доехать.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Contact & directions optimization: why it matters and how to do it right",
    lead: [
      "Your contact page is one of the highest-intent pages on the site. For a local U.S. business, this is where users decide to call, get directions, or leave. Clean contact info and frictionless directions increase calls, visits, trust, and improve local SEO signals.",
    ],
    sections: [
      {
        title: "1. Why optimize contact info and directions",
        blocks: [
          {
            title: "1.1. Reduce friction at the moment of decision",
            body: "Visitors on the contact page are ready to act. Missing phone links, confusing directions, or no navigation buttons directly reduce conversions.",
          },
          {
            title: "1.2. Increase calls and visits without extra ad spend",
            body: "Tap-to-call, clear CTAs, and a straightforward directions flow can materially increase calls and in-person visits.",
          },
          {
            title: "1.3. Support local SEO",
            body: "The contact page reinforces NAP consistency (Name, Address, Phone). Matching data between your site and Google Business Profile helps local visibility.",
          },
          {
            title: "1.4. Build trust",
            body: "Entrance photos, parking notes, clear hours, and social links make the business feel real and reduce uncertainty.",
          },
        ],
      },
      {
        title: "2. What you should expect after optimization",
        blocks: [
          {
            body: [
              "More calls due to prominent tap-to-call CTAs.",
              "More in-person visits thanks to clear directions buttons.",
              "Better UX with fewer drop-offs.",
              "Faster and more consistent understanding of your business info across search and Maps.",
            ],
          },
        ],
      },
      {
        title: "3. How to optimize the contact page",
        blocks: [
          {
            title: "3.1. Clickable phone and messaging",
            body: "Use a real tel: link (tel:+1…) and a visible ‘Call’ button. Add SMS or WhatsApp links if they’re part of your customer flow.",
          },
          {
            title: "3.2. Standardize NAP formatting",
            body: "Keep business name, address formatting (suite, unit), and phone consistent across the site, Google Business Profile, and directories.",
          },
          {
            title: "3.3. Interactive map",
            body: "Embed an interactive map with an accurate pin. For U.S. audiences, Google Maps is usually the primary option; you can also link to Apple Maps.",
          },
          {
            title: "3.4. Clear ‘Get directions’ buttons",
            body: "Add obvious buttons like ‘Directions in Google Maps’ and ‘Directions in Apple Maps’. This removes friction for both Android and iPhone users.",
          },
          {
            title: "3.5. Entrance photos and short arrival instructions",
            body: "If the entrance is not obvious (plazas, multi-tenant buildings), add a short note and 2–4 photos: exterior, entrance, lobby, parking.",
          },
        ],
      },
      {
        title: "4. Helpful extra elements",
        blocks: [
          {
            body: [
              "Business hours (including holiday hours).",
              "Social links and messaging links.",
              "A short contact form (few fields).",
              "Parking and accessibility notes.",
              "Department-specific contacts (if relevant).",
            ],
          },
        ],
      },
      {
        title: "5. Common mistakes",
        blocks: [
          {
            body: [
              "Hidden phone number or not clickable.",
              "Address/phone not matching your Maps profile.",
              "Static map image instead of interactive.",
              "No directions buttons or entrance photos.",
              "Too much clutter hiding the essentials.",
            ],
          },
        ],
      },
      {
        title: "6. FAQ",
        blocks: [
          {
            title: "How often should you update the contact page?",
            body: "Any time your address, phone, hours, or directions change. Also review it every 6–12 months as your customer flow evolves.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleContactsDirectionsChecklist",
      title: "Checklist",
      steps: [
        {
          id: "contacts-directions-checklist",
          title: "",
          description: "",
          items: [
            "Make phones and messaging links clickable and visible.",
            "Standardize NAP and match it to your Maps profiles.",
            "Add an interactive map and clear directions buttons.",
            "Add entrance photos and simplify arrival steps.",
            "Remove clutter-keep only what helps users contact you or navigate.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "אופטימיזציית קשר וניווט: למה זה חשוב ואיך עושים נכון",
    lead: [
      "עמוד ‘צור קשר’ הוא אחד העמודים עם הכוונה הגבוהה ביותר באתר. לעסק מקומי בישראל זה המקום שבו המשתמש מחליט להתקשר, לקבל ניווט או להשאיר פנייה. עמוד ברור עם ניווט פשוט מעלה פניות, ביקורים ואמון וגם תומך ב‑SEO מקומי.",
    ],
    sections: [
      {
        title: "1. למה לבצע אופטימיזציה לעמוד קשר וניווט",
        blocks: [
          {
            title: "1.1. להוריד חיכוך ברגע ההחלטה",
            body: "מי שמגיע לעמוד קשר כבר מוכן לפעול. טלפון לא לחיץ, הסבר הגעה מסובך או היעדר כפתור ניווט מורידים המרות.",
          },
          {
            title: "1.2. יותר פניות בלי להגדיל תקציב",
            body: "כפתור התקשרות ברור, CTA בולט וכפתור ניווט פשוט יכולים להעלות שיחות וביקורים.",
          },
          {
            title: "1.3. תמיכה ב‑SEO מקומי",
            body: "עמוד קשר מחזק עקביות NAP (שם, כתובת, טלפון). התאמה בין האתר לכרטיס העסק בגוגל תומכת בנראות מקומית.",
          },
          {
            title: "1.4. יותר אמון",
            body: "תמונות כניסה, מידע על חניה, שעות ברורות וקישורים לרשתות חברתיות מפחיתים אי‑ודאות.",
          },
        ],
      },
      {
        title: "2. למה לצפות אחרי האופטימיזציה",
        blocks: [
          {
            body: [
              "יותר שיחות בזכות טלפון לחיץ ו‑CTA ברור.",
              "יותר ביקורים בזכות כפתורי ניווט.",
              "חוויית משתמש טובה יותר ופחות נטישות.",
              "מידע עקבי יותר בין האתר למפות.",
            ],
          },
        ],
      },
      {
        title: "3. איך לבצע אופטימיזציה לעמוד קשר",
        blocks: [
          {
            title: "3.1. טלפון לחיץ והודעות",
            body: "להוסיף קישור tel:+972… וכפתור ‘התקשר’. בישראל לרוב עובדים גם עם WhatsApp; אם זה חלק מהתהליך שלכם-קישור ברור עוזר.",
          },
          {
            title: "3.2. עקביות NAP",
            body: "שם עסק, כתובת וטלפון צריכים להיות באותו פורמט באתר, בכרטיס העסק ובספריות.",
          },
          {
            title: "3.3. מפה אינטראקטיבית",
            body: "להטמיע מפה עם סיכה מדויקת. עבור ישראל, Google Maps הוא ברירת מחדל; אפשר להוסיף גם קישור ל‑Waze למשתמשים שנוסעים.",
          },
          {
            title: "3.4. כפתור ‘ניווט’ ברור",
            body: "להוסיף כפתורים כמו ‘ניווט בגוגל מפות’ ו‑‘ניווט ב‑Waze’. זה מוריד חסמים ומעלה הגעה.",
          },
          {
            title: "3.5. תמונות כניסה והנחיות הגעה קצרות",
            body: "אם הכניסה לא ברורה (קניון/בניין משרדים), להוסיף הסבר קצר וכמה תמונות: חזית, כניסה, לובי, חניה.",
          },
        ],
      },
      {
        title: "4. אלמנטים נוספים שכדאי להוסיף",
        blocks: [
          {
            body: [
              "שעות פעילות (כולל חגים/ימים מיוחדים).",
              "קישורים לרשתות חברתיות ולהודעות.",
              "טופס קצר עם מעט שדות.",
              "מידע חניה ונגישות.",
              "אנשי קשר לפי מחלקות (אם צריך).",
            ],
          },
        ],
      },
      {
        title: "5. טעויות נפוצות",
        blocks: [
          {
            body: [
              "טלפון קטן/מוסתר או לא לחיץ.",
              "כתובת/טלפון שונים מהנתונים במפות.",
              "תמונה סטטית במקום מפה אינטראקטיבית.",
              "אין כפתורי ניווט או תמונות כניסה.",
              "יותר מדי מידע שמסתיר את העיקר.",
            ],
          },
        ],
      },
      {
        title: "6. שאלות נפוצות",
        blocks: [
          {
            title: "כל כמה זמן לעדכן את עמוד הקשר?",
            body: "בכל שינוי כתובת/טלפון/שעות/הגעה. בנוסף, כדאי לבדוק אחת ל‑6–12 חודשים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleContactsDirectionsChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "contacts-directions-checklist",
          title: "",
          description: "",
          items: [
            "להפוך טלפונים וקישורי הודעה ללחיצים ובולטים.",
            "ליישר NAP ולהתאים לכרטיסים במפות.",
            "להוסיף מפה אינטראקטיבית וכפתורי ניווט.",
            "להוסיף תמונות כניסה ולהפוך הגעה לפשוטה.",
            "להסיר עומס ולהשאיר רק מה שעוזר ליצור קשר או להגיע.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
