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
    title: "Создание и оптимизация страницы «Контакты» для локального бизнеса",
    lead: [
      "Страница «Контакты» - одна из ключевых страниц любого сайта, особенно если речь о локальном бизнесе. Это точка доверия, подтверждение того, что компания реальна и доступна, а также важный фактор ранжирования в локальном SEO. Грамотно оформленные контакты напрямую влияют на количество звонков, заявок и визитов в офлайн‑точки.",
    ],
    sections: [
      {
        title: "Зачем нужна сильная страница «Контакты»",
        blocks: [
          {
            title: "1. Повышение доверия пользователей",
            body: "Один из первых вопросов у посетителя: кто стоит за этим бизнесом и как связаться? Если контакты прозрачны, детализированы и выглядят профессионально, доверие растёт. Если контакты спрятаны или выглядят сомнительно - пользователь уходит.",
          },
          {
            title: "2. Рост количества звонков и заявок",
            body: "«Контакты» - одна из главных точек конверсии. Правильное размещение телефона, кнопок связи, карты и формы обратной связи может увеличить число обращений в разы.",
          },
          {
            body: [
              "телефон вверху страницы + кликабельность = рост звонков на 20–40%;",
              "удобная форма обратной связи = +10–25% заявок;",
              "кнопка «Позвонить» для мобильных = +15–30% обращений.",
            ],
          },
          {
            title: "3. Влияние на локальное SEO",
            body: "Поисковики уделяют особое внимание адресу, телефону, режиму работы, карте и NAP‑данным (Name–Address–Phone). Хорошая страница контактов помогает Google и Яндексу корректно понять, где находится бизнес и для какого региона он релевантен. Это улучшает позиции в локальной выдаче и видимость в Local Pack.",
          },
          {
            title: "4. Соответствие требованиям E‑E‑A‑T",
            body: "E‑E‑A‑T (опыт, экспертность, авторитетность, надёжность) подразумевает, что за сайтом стоит реальная организация. Подробная страница контактов - сильный сигнал поисковикам, что бизнес существует.",
          },
          {
            title: "5. Улучшение пользовательского опыта",
            body: "Для пользователя страница контактов - быстрый способ узнать адрес, задать вопрос, приехать в офис/точку выдачи или записаться на услугу. Чем понятнее и быстрее страница, тем меньше отказов.",
          },
        ],
      },
      {
        title: "Чего ожидать после оптимизации страницы «Контакты»",
        blocks: [
          {
            title: "1. Рост обращений",
            body: "Удобная контактная страница почти всегда увеличивает число звонков и заявок. Это особенно заметно в услугах, ремонте, медицине, ресторанах, магазинах и локальных сервисах.",
          },
          {
            title: "2. Улучшение конверсии",
            body: "«Контакты» - финальный шаг в воронке. После оптимизации обычно растут обращения, снижаются отказы и повышается общее доверие к бренду.",
          },
          {
            title: "3. Лучшее локальное ранжирование",
            body: "Адрес, координаты, телефон и часы работы помогают сайту чаще попадать в локальную выдачу и блоки с картами - это критично для офлайн‑трафика.",
          },
        ],
      },
      {
        title: "Как создать и оптимизировать страницу «Контакты»",
        blocks: [
          {
            title: "1. Структурируйте контактную информацию",
            body: "В базовый блок страницы стоит включить: название компании, адрес (или несколько), телефон (кликабельный), email, режим работы, ссылки на соцсети и мессенджеры, реквизиты (если нужно). Для Беларуси популярны Telegram, Viber, WhatsApp. Разбивайте информацию на логические блоки, чтобы её легко было просканировать взглядом.",
          },
          {
            title: "2. Добавьте интерактивную карту",
            body: "Карта - один из важнейших элементов. Подойдут Google Maps, Яндекс Карты и 2ГИС. Карта должна быть кликабельной и с возможностью построить маршрут, с точным указанием локации.",
          },
          {
            title: "3. Добавьте форму обратной связи",
            body: "Не все хотят звонить - кому-то удобнее написать. Форма должна быть простой: имя, телефон или email, сообщение, при необходимости - файл. Чем меньше полей, тем выше конверсия.",
          },
          {
            title: "4. Добавьте быстрые способы связи",
            body: "Пользователи активно пользуются мессенджерами. Разместите кнопки: «Написать в WhatsApp», «Написать в Telegram», Viber, VK и другие каналы, которые вы реально используете.",
          },
          {
            title: "5. Укажите юридическую информацию (при необходимости)",
            body: "Для интернет‑магазинов, B2B и регулируемых сфер важно указать реквизиты: УНП, юридический адрес, данные для возврата и т.п. Это повышает доверие и помогает соответствовать требованиям площадок и законодательства.",
          },
          {
            title: "6. Используйте микроразметку",
            body: "Для страницы контактов полезны типы Schema.org LocalBusiness, Organization и PostalAddress. Через них можно структурировать адрес, телефон, название, координаты и график работы - это усилит локальное SEO.",
          },
        ],
      },
      {
        title: "Практические советы и типичные ошибки",
        blocks: [
          {
            title: "1. Прячут контакты",
            body: "Контакты мелким шрифтом внизу или только в футере - частая ошибка. «Контакты» должны быть доступны из шапки и содержать заметные элементы связи.",
          },
          {
            title: "2. Некликабельные телефоны и адреса",
            body: "На мобильных телефон должен звонить по нажатию, а адрес - открывать карту. Иначе вы усложняете путь пользователю.",
          },
          {
            title: "3. Отсутствие карты и схемы проезда",
            body: "Просто текст «мы находимся по адресу…» хуже работает, чем карта с пином и маршрутом. Для сложных локаций добавьте фото входа и короткое описание пути.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Страница «Контакты» - полноценный инструмент продаж, доверия и локального SEO. При грамотной структуре она увеличивает звонки и заявки, улучшает локальное ранжирование, усиливает доверие к бренду и делает взаимодействие с компанией проще.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "How to build a strong ‘Contact’ page for a local business",
    lead: [
      "For a U.S. local business, the Contact page is a high-intent destination. It’s a trust checkpoint that proves the business is real and reachable-and it’s a practical driver of calls, form submissions, and in-person visits. A well-structured contact page also supports local SEO through consistent NAP signals.",
    ],
    sections: [
      {
        title: "Why a strong Contact page matters",
        blocks: [
          {
            title: "1. Trust and legitimacy",
            body: "One of the first questions users ask is: who is behind this business and how do I reach them? Clear, detailed contact information increases trust. Hidden or vague contact details increase exits.",
          },
          {
            title: "2. More calls and leads",
            body: "Contact pages are conversion pages. The placement of the phone number, contact buttons, map, and form can significantly lift inquiries.",
          },
          {
            body: [
              "phone at the top + tap-to-call = more calls;",
              "a short, clear form = more leads;",
              "a visible ‘Call’ button on mobile reduces friction.",
            ],
          },
          {
            title: "3. Local SEO support",
            body: "Search engines pay attention to address, phone, hours, map embeds, and NAP consistency. A strong contact page helps Google understand your service area and can improve local visibility.",
          },
          {
            title: "4. E‑E‑A‑T signals",
            body: "A detailed contact page is a strong signal that a real organization exists behind the website.",
          },
          {
            title: "5. Better user experience",
            body: "Users come to the contact page to get an address, ask a question, find the location, or book a service. A clear page reduces drop-offs.",
          },
        ],
      },
      {
        title: "What to expect after optimization",
        blocks: [
          {
            title: "1. More inquiries",
            body: "A better contact page typically increases calls and form submissions, especially in service industries.",
          },
          {
            title: "2. Higher conversion rates",
            body: "Because contact is the final funnel step, small UX improvements often produce measurable lifts.",
          },
          {
            title: "3. Better local visibility",
            body: "Accurate address, phone, coordinates, and hours help reinforce local search understanding and support Maps-related visibility.",
          },
        ],
      },
      {
        title: "How to build and optimize your Contact page",
        blocks: [
          {
            title: "1. Structure your contact information",
            body: "Include: business name, address (or multiple), phone (clickable), email, business hours, social links, and messaging links if used. Group information into scannable blocks.",
          },
          {
            title: "2. Add an interactive map",
            body: "For U.S. users, Google Maps is the default. Also consider linking to Apple Maps for iPhone users. The map should open directions and show a precise pin.",
          },
          {
            title: "3. Add a short contact form",
            body: "Not everyone wants to call. Keep the form minimal: name, phone or email, and message. Fewer fields = higher completion.",
          },
          {
            title: "4. Add fast messaging options",
            body: "If your customers use messaging, add clear buttons (SMS, WhatsApp, etc.).",
          },
          {
            title: "5. Add legal/business info when needed",
            body: "For eCommerce, B2B, or regulated industries, include legal entity details and return/support information to improve trust and compliance.",
          },
          {
            title: "6. Use structured data",
            body: "Schema.org types like LocalBusiness, Organization, and PostalAddress help structure name, phone, address, coordinates, and hours.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "1. Hiding contact info",
            body: "Putting contacts only in the footer or at the bottom is a common mistake. The contact page should be accessible from the header and have visible CTAs.",
          },
          {
            title: "2. Non-clickable phone and address",
            body: "On mobile, phone numbers must be tap-to-call and addresses should open maps.",
          },
          {
            title: "3. No map or directions",
            body: "A plain text address converts worse than an interactive map with directions. For complex locations, add entrance photos and short arrival instructions.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "A Contact page is not a formality-it’s a conversion and trust asset. With the right structure it increases calls and leads, supports local SEO, and makes it easier for customers to choose you.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "איך לבנות עמוד ‘צור קשר’ חזק לעסק מקומי",
    lead: [
      "לעסק מקומי בישראל, עמוד ‘צור קשר’ הוא עמוד עם כוונה גבוהה. הוא נקודת אמון שמוכיחה שהעסק אמיתי ונגיש, והוא גם מנוע לפניות-שיחות, טפסים וביקורים. עמוד קשר בנוי נכון תומך ב‑SEO מקומי באמצעות עקביות NAP.",
    ],
    sections: [
      {
        title: "למה עמוד קשר חזק חשוב",
        blocks: [
          {
            title: "1. אמון",
            body: "המשתמש רוצה להבין מי עומד מאחורי העסק ואיך ליצור קשר. מידע ברור ומפורט מעלה אמון; מידע מוסתר גורם לנטישה.",
          },
          {
            title: "2. יותר פניות",
            body: "עמוד קשר הוא עמוד המרה. מיקום הטלפון, כפתורי קשר, מפה וטופס משפיעים ישירות על מספר הפניות.",
          },
          {
            title: "3. תמיכה ב‑SEO מקומי",
            body: "גוגל מסתכל על כתובת, טלפון, שעות ומפה ועקביות NAP. עמוד קשר איכותי עוזר לגוגל להבין את אזור השירות ולחזק נראות.",
          },
          {
            title: "4. אותות E‑E‑A‑T",
            body: "עמוד קשר מפורט הוא אות לכך שיש ארגון אמיתי מאחורי האתר.",
          },
          {
            title: "5. חוויית משתמש",
            body: "משתמשים מגיעים כדי למצוא כתובת, לשאול שאלה או לקבוע תור. עמוד ברור מפחית חיכוך.",
          },
        ],
      },
      {
        title: "מה צפוי אחרי אופטימיזציה",
        blocks: [
          {
            title: "1. יותר פניות",
            body: "בדרך כלל רואים עלייה בשיחות ובטפסים, במיוחד בתחומי שירות.",
          },
          {
            title: "2. שיפור המרה",
            body: "כיוון שזה שלב סופי במשפך, שינויים קטנים ב‑UX יכולים לתת שיפור מורגש.",
          },
          {
            title: "3. נראות מקומית טובה יותר",
            body: "כתובת/טלפון/שעות/קואורדינטות מחזקים הבנה מקומית ותומכים גם במפות.",
          },
        ],
      },
      {
        title: "איך לבנות ולשפר עמוד צור קשר",
        blocks: [
          {
            title: "1. לארגן את פרטי הקשר",
            body: "לכלול: שם העסק, כתובת (או כמה), טלפון לחיץ, אימייל, שעות, קישורים לרשתות חברתיות וקישורי הודעה אם משתמשים בהם. לחלק לבלוקים ברורים.",
          },
          {
            title: "2. מפה אינטראקטיבית",
            body: "בישראל Google Maps הוא ברירת מחדל, וכדאי להוסיף גם קישור ל‑Waze למי שנוסע. מפה צריכה סיכה מדויקת ויכולת ניווט.",
          },
          {
            title: "3. טופס קצר",
            body: "לא כולם רוצים להתקשר. טופס מינימלי: שם, טלפון או אימייל, הודעה.",
          },
          {
            title: "4. דרכי קשר מהירות",
            body: "כפתורי WhatsApp/הודעות/ערוצים רלוונטיים מעלים פניות במובייל.",
          },
          {
            title: "5. מידע משפטי כשצריך",
            body: "לחנות אונליין/‏B2B/תחומים מוסדרים כדאי להוסיף פרטי חברה ומדיניות בסיסית כדי לשפר אמון.",
          },
          {
            title: "6. Structured data",
            body: "Schema.org LocalBusiness / Organization / PostalAddress עוזרים להציג בצורה מסודרת שם, טלפון, כתובת ושעות.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            title: "1. להסתיר את הפרטים",
            body: "להחביא פרטים בפוטר זו טעות. עמוד קשר צריך להיות נגיש מהתפריט ובעל כפתורים בולטים.",
          },
          {
            title: "2. טלפון/כתובת לא לחיצים",
            body: "במובייל טלפון חייב להיות לחיץ וכתובת צריכה לפתוח מפה.",
          },
          {
            title: "3. אין מפה או ניווט",
            body: "כתובת טקסט בלבד ממירה פחות ממפה עם ניווט. במקומות מורכבים להוסיף תמונות כניסה והסבר הגעה קצר.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "עמוד ‘צור קשר’ הוא נכס המרה ואמון. מבנה נכון מעלה שיחות ופניות, תומך ב‑SEO מקומי ומקל על לקוחות לבחור בכם.",
          },
        ],
      },
    ],
  },
};

export default content;
