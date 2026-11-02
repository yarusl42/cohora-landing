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
      "Создание сайта‑визитки для локального бизнеса: зачем это нужно и как сделать эффективный мини‑сайт",
    lead: [
      "Сайт‑визитка - компактный и относительно недорогой формат, который отлично подходит для локального бизнеса: салонов, небольших клиник, мастерских, частных специалистов, студий и локальных сервисов. При правильном подходе такой сайт - не «для галочки», а реальный инструмент: помогает получать клиентов из поиска и карт, повышает доверие и увеличивает количество звонков и заявок.",
    ],
    sections: [
      {
        title: "Зачем локальному бизнесу нужен сайт‑визитка",
        blocks: [
          {
            title: "1. Подтверждение доверия и статуса компании",
            body: "Даже если о вас узнали с улицы, по рекомендациям или из рекламы, многие всё равно пойдут «погуглить»: ищут сайт, карточку в картах, отзывы. Отсутствие сайта часто воспринимается как тревожный сигнал: непонятно, насколько бизнес устойчивый и можно ли ему доверять.",
          },
          {
            body: "Сайт‑визитка закрывает базовые вопросы: показывает, что компания существует, у неё понятный адрес, честные контакты и график. Для многих локальных бизнесов это уже половина успеха.",
          },
          {
            title: "2. Присутствие в локальном поиске",
            body: "Google и Яндекс охотнее ранжируют компании, у которых есть собственный сайт с корректными данными и локальными формулировками. Сайт помогает связать карточку в картах, адрес, услуги и регион - и чаще показываться тем, кто ищет «рядом».",
          },
          {
            body: "Без сайта вы ограничены карточками и сторонними каталогами. С сайтом появляется дополнительный канал трафика и ещё одна точка входа для клиента.",
          },
          {
            title: "3. Усиление карточек в картах и каталогах",
            body: "Карточки в Google Maps, Яндекс Картах и 2ГИС выглядят надёжнее, когда у них есть ссылка на сайт, а на сайте совпадают название/адрес/телефон, есть фото, понятное описание услуг и ответы на базовые вопросы.",
          },
          {
            title: "4. Рост числа звонков и заявок",
            body: "На сайте‑визитке удобно разместить «Позвонить», формы обратной связи, ссылки на мессенджеры, карту и маршрут, онлайн‑запись. Даже 1–2 дополнительных обращения в день часто окупают создание и поддержку сайта.",
          },
          {
            title: "5. Эффективность рекламы",
            body: "Запускать рекламу без сайта - значит терять часть бюджета: пользователю некуда «приземлиться», кроме карточки или соцсети. Сайт‑визитка позволяет принимать трафик, отслеживать конверсии, собирать аналитику и оптимизировать кампании.",
          },
        ],
      },
      {
        title: "Что даёт хороший сайт‑визитка",
        blocks: [
          {
            body: "Если сайт‑визитка сделан с пониманием задач, локальный бизнес обычно получает:",
          },
          {
            body: [
              "рост количества локальных звонков и обращений;",
              "улучшение видимости в локальном поиске и картах;",
              "быструю актуализацию информации о компании во всех сервисах;",
              "более сильное первое впечатление и ощущение профессионализма;",
              "более удобный путь клиента к записи или заказу.",
            ],
          },
          {
            body: "Один сайт не решит всё сам по себе, но без него другие усилия (реклама, карточки, соцсети) часто работают заметно слабее.",
          },
        ],
      },
      {
        title: "Чего ожидать от создания сайта‑визитки",
        blocks: [
          {
            title: "1. Понятный заголовок: что вы делаете и где",
            body: "Клиент должен понять услугу и географию за несколько секунд. Примеры: «Ремонт бытовой техники в Гомеле», «Стоматология для всей семьи в центре Минска», «Студия маникюра у метро Немига».",
          },
          {
            title: "2. Контакты и быстрые действия",
            body: "На первом экране должны быть: кликабельный телефон, ссылки на Telegram/Viber/WhatsApp, адрес и карта, кнопки «Позвонить», «Записаться», «Построить маршрут». Чем меньше шагов между «понравилось» и «связался», тем выше конверсия.",
          },
          {
            title: "3. Услуги и ориентировочные цены",
            body: "Не обязательно публиковать полный прайс, но важно дать понимание: чем вы занимаетесь и в каком ценовом диапазоне работаете. Это экономит время и отсеивает нецелевых клиентов.",
          },
          {
            title: "4. Фото и портфолио",
            body: "Живые фотографии салона, кабинета, мастерской, команды и результатов работ заметно повышают доверие.",
          },
          {
            title: "5. Отзывы и социальное доказательство",
            body: "Можно вывести отзывы из карт или соцсетей, либо добавить отдельный блок с мнениями клиентов. Важно показать несколько показательных историй и дать ссылку на полный список отзывов.",
          },
          {
            title: "6. Понятное описание и преимущества",
            body: "Пара абзацев о том, чем вы занимаетесь, кому помогаете и в чём отличие от конкурентов: стаж специалистов, формат работы, специализация, гарантия, удобство локации.",
          },
        ],
      },
      {
        title: "Как подойти к созданию сайта‑визитки по шагам",
        blocks: [
          {
            title: "Шаг 1. Определите задачи",
            body: "Сайт‑визитка может подтверждать присутствие, приводить заявки из поиска, быть посадочной страницей для рекламы или поддерживать карточки в картах. Определите приоритет заранее, чтобы не тратить бюджет на лишнее.",
          },
          {
            title: "Шаг 2. Соберите контент",
            body: "Чтобы запуск не затянулся, заранее подготовьте: логотип и фирменные цвета, фото помещения/команды/работ, список услуг и примерные цены, контакты и ссылки на соцсети, несколько коротких отзывов клиентов.",
          },
          {
            title: "Шаг 3. Выберите исполнителя или конструктор",
            body: "Можно использовать конструктор или индивидуальную разработку. Главное - не жертвовать скоростью загрузки, удобством на мобильных и возможностью нормально индексироваться поисковиками.",
          },
          {
            title: "Шаг 4. Домен и техническая база",
            body: "Хороший домен, базовая SEO‑настройка, корректные заголовки, адаптивная верстка - минимум, без которого сайт будет работать хуже.",
          },
          {
            title: "Шаг 5. Свяжите сайт с картами и аналитикой",
            body: "После запуска добавьте ссылку на сайт в карточки Google, Яндекс и 2ГИС, проверьте совпадение адреса/телефона и подключите аналитику, чтобы видеть источники и действия пользователей.",
          },
        ],
      },
      {
        title: "Типичные ошибки",
        blocks: [
          {
            title: "1. Сайт «для галочки»",
            body: "Сайт без чёткого заголовка, структуры, контактов и понятных CTA не помогает бизнесу.",
          },
          {
            title: "2. Перегруженность и сложная навигация",
            body: "Визитка должна быть простой. Избыточные разделы, поп‑апы и тяжёлые элементы мешают быстро получить нужную информацию.",
          },
          {
            title: "3. Игнорирование мобильной версии",
            body: "Большая часть локального трафика приходит с телефонов. Если сайт неудобен на мобильном, вероятность потери клиента растёт в разы.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Сайт‑визитка для локального бизнеса - базовый инструмент. Он помогает подтвердить доверие, попасть в локальный поиск, усилить карточки в картах и сделать путь клиента короче. При разумных затратах такой мини‑сайт окупается за счёт нескольких дополнительных клиентов в месяц.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "A small “business card” website for local businesses: why you need it and how to build one that converts",
    lead: [
      "A small one‑page or mini‑site is a cost‑effective format that works extremely well for local businesses-salons, small clinics, repair shops, solo practitioners, studios, and neighborhood services. Done right, it’s not a “checkbox website.” It’s a real growth tool that supports search visibility, Maps performance, trust, and more calls and form submissions.",
    ],
    sections: [
      {
        title: "Why a local business needs a simple website",
        blocks: [
          {
            title: "1. Trust and legitimacy",
            body: "Even if someone hears about you from friends or ads, they’ll still Google you: website, Maps listing, reviews. No website often reads as a red flag. A simple site answers the basics: you’re real, you’re open, your contact info is clear, and customers can reach you easily.",
          },
          {
            title: "2. Local search visibility",
            body: "A website helps Google connect your services, location, and business profile. Without it, you’re limited to your Maps listing and third‑party directories. With it, you gain another acquisition channel and stronger relevance for “near me” intent.",
          },
          {
            title: "3. Stronger Maps + directory profiles",
            body: "A Google Business Profile looks more trustworthy when it links to a real website-and when the site matches the listing (business name, address, phone, hours), shows photos, and answers common questions.",
          },
          {
            title: "4. More calls and leads",
            body: "A mini‑site can put call buttons, a short contact form, appointment links, directions, and messaging links front and center. For many businesses, even a couple extra leads per day covers the cost.",
          },
          {
            title: "5. Better ad efficiency",
            body: "Running ads without a landing page wastes budget. A simple site lets you track conversions, collect analytics, and optimize campaigns.",
          },
        ],
      },
      {
        title: "What a good mini‑site delivers",
        blocks: [
          {
            body: "When it’s built for outcomes, a mini‑site typically brings:",
          },
          {
            body: [
              "more local calls and inquiries;",
              "better visibility in local search and Maps;",
              "faster accuracy of business info across platforms;",
              "a stronger first impression and more perceived professionalism;",
              "a shorter path from interest to booking.",
            ],
          },
          {
            body: "A site won’t fix everything alone-but without it, your other channels (ads, Maps, social) usually perform worse.",
          },
        ],
      },
      {
        title: "What your site should include",
        blocks: [
          {
            title: "1. A clear headline (service + location)",
            body: "Users should understand what you do and where you serve in seconds. Examples: “Appliance repair in Chicago,” “Family dentistry in downtown Austin,” “Nail studio near Midtown.”",
          },
          {
            title: "2. Fast contact actions",
            body: "Above the fold: tap‑to‑call phone, address, a map/directions link, appointment button, and (optionally) SMS/WhatsApp links. The fewer steps, the higher the conversion.",
          },
          {
            title: "3. Services and price range",
            body: "You don’t need a 100‑line price list, but you do need clarity on what you offer and your general price range.",
          },
          {
            title: "4. Real photos",
            body: "Photos of the team, location, and real work build trust faster than generic stock imagery.",
          },
          {
            title: "5. Reviews and proof",
            body: "Show a few reviews and link to the full set on Google (or relevant platforms for your niche).",
          },
          {
            title: "6. Simple differentiators",
            body: "A short section on why you: experience, guarantees, specialization, convenient location, response time.",
          },
        ],
      },
      {
        title: "Step-by-step approach",
        blocks: [
          {
            title: "Step 1. Define the goal",
            body: "Is the site for lead capture, supporting your Maps profile, ads, or all of the above? Decide first.",
          },
          {
            title: "Step 2. Gather assets",
            body: "Prepare: logo/colors (if any), photos, services list, price range, contact info, social links, and a few short testimonials.",
          },
          {
            title: "Step 3. Choose platform or custom build",
            body: "A builder is fine for many cases, but prioritize speed, mobile UX, and indexability.",
          },
          {
            title: "Step 4. Domain and basics",
            body: "Pick a clean domain, set up basic SEO (titles, meta), and ensure mobile responsiveness.",
          },
          {
            title: "Step 5. Connect Maps and analytics",
            body: "Add the website link to your Google Business Profile and Apple Maps (Apple Business Connect). Ensure NAP matches everywhere, then connect analytics to track calls, form submissions, and direction clicks.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "1. A site built ‘just to have one’",
            body: "Without a clear headline, structure, contact options, and CTAs, the site won’t help.",
          },
          {
            title: "2. Overcomplicated navigation",
            body: "A mini‑site should be simple. Too many sections, popups, and heavy elements reduce conversions.",
          },
          {
            title: "3. Ignoring mobile",
            body: "Most local intent happens on phones. If it’s hard to tap, slow to load, or confusing, you’ll lose leads.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "A mini‑site is a foundational local marketing asset. It builds trust, supports Maps visibility, and shortens the path to a call or booking. With reasonable costs, it can pay for itself with just a few additional customers per month.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "אתר ‘כרטיס ביקור’ לעסק מקומי: למה זה חשוב ואיך לבנות מיני‑סייט שממיר",
    lead: [
      "אתר קטן (עמוד אחד או כמה עמודים) הוא פתרון משתלם שמתאים מאוד לעסקים מקומיים-סלונים, קליניקות קטנות, מעבדות תיקון, בעלי מקצוע, סטודיואים ושירותים שכונתיים. כשעושים אותו נכון, זה לא אתר “בשביל שיהיה”, אלא כלי שמחזק נראות בחיפוש, ביצועים במפות, אמון ויותר פניות.",
    ],
    sections: [
      {
        title: "למה עסק מקומי צריך אתר פשוט",
        blocks: [
          {
            title: "1. אמון ולגיטימיות",
            body: "גם אם שמעו עליכם מהמלצה או מפרסום, אנשים עדיין יחפשו בגוגל: אתר, כרטיס במפות, ביקורות. אתר פשוט נותן תשובות בסיסיות: אתם קיימים, קל ליצור קשר, והמידע ברור.",
          },
          {
            title: "2. נראות בחיפוש מקומי",
            body: "האתר עוזר לגוגל לחבר בין השירותים, המיקום וכרטיס העסק. בלי אתר אתם נשענים בעיקר על הכרטיס במפות ועל ספריות צד שלישי. עם אתר אתם מרוויחים עוד ערוץ ומחזקים רלוונטיות ל‘קרוב אליי’.",
          },
          {
            title: "3. חיזוק כרטיסים במפות",
            body: "כרטיס עסק בגוגל נראה אמין יותר כשיש קישור לאתר אמיתי וכשהאתר תואם את הנתונים (שם/כתובת/טלפון/שעות), כולל תמונות ועונה על שאלות נפוצות.",
          },
          {
            title: "4. יותר שיחות ופניות",
            body: "מיני‑סייט יכול לשים כפתור התקשרות, טופס קצר, קישור לקביעת תור, ניווט, וקישורים להודעות במקום בולט.",
          },
          {
            title: "5. פרסום יעיל יותר",
            body: "פרסום בלי דף נחיתה מבזבז תקציב. אתר פשוט מאפשר למדוד המרות ולשפר קמפיינים.",
          },
        ],
      },
      {
        title: "מה מיני‑סייט טוב נותן",
        blocks: [
          {
            body: "כאשר בונים אותו נכון, לרוב מקבלים:",
          },
          {
            body: [
              "יותר שיחות ופניות מקומיות;",
              "שיפור בנראות בחיפוש ובמפות;",
              "מידע עקבי ומעודכן יותר בין פלטפורמות;",
              "רושם ראשון מקצועי יותר;",
              "מסלול קצר יותר לקביעת תור/הזמנה.",
            ],
          },
          {
            body: "אתר לא פותר הכול לבד-but בלי אתר, גם ערוצים אחרים עובדים לרוב פחות טוב.",
          },
        ],
      },
      {
        title: "מה האתר צריך לכלול",
        blocks: [
          {
            title: "1. כותרת ברורה (שירות + אזור)",
            body: "המשתמש צריך להבין במהירות מה אתם עושים והיכן. לדוגמה: “טכנאי מכשירי חשמל בחיפה”, “רופא שיניים בתל אביב”, “סטודיו ציפורניים ליד מרכז העיר”.",
          },
          {
            title: "2. פעולות קשר מהירות",
            body: "בחלק העליון: טלפון לחיץ, כתובת, קישור לניווט, קביעת תור, ואם מתאים-קישורי הודעה.",
          },
          {
            title: "3. שירותים וטווח מחירים",
            body: "לא חייבים מחירון ענק, אבל כן צריך בהירות לגבי השירותים וטווח המחיר.",
          },
          {
            title: "4. תמונות אמיתיות",
            body: "תמונות של המקום, הצוות ותוצאות אמיתיות בונות אמון מהר.",
          },
          {
            title: "5. ביקורות והוכחות",
            body: "להציג כמה ביקורות ולתת קישור למקור (Google, או פלטפורמות רלוונטיות לנישה).",
          },
          {
            title: "6. יתרונות פשוטים",
            body: "כמה נקודות שמסבירות למה לבחור בכם: ניסיון, אחריות, התמחות, מיקום נוח וזמן תגובה.",
          },
        ],
      },
      {
        title: "איך לבנות נכון (שלבים)",
        blocks: [
          {
            title: "שלב 1. להגדיר מטרה",
            body: "האם האתר נועד לפניות, לתמוך בכרטיס במפות, לפרסום, או הכול יחד? להחליט מראש.",
          },
          {
            title: "שלב 2. לאסוף חומרים",
            body: "לוגו/צבעים, תמונות, רשימת שירותים, טווח מחירים, פרטי קשר, קישורים לרשתות חברתיות וכמה המלצות קצרות.",
          },
          {
            title: "שלב 3. לבחור מערכת או פיתוח",
            body: "אפשר גם בונה אתרים וגם פיתוח מותאם-העיקר מהירות, מובייל, ואינדוקס תקין.",
          },
          {
            title: "שלב 4. דומיין ובסיס טכני",
            body: "דומיין טוב, כותרות ומטא בסיסיים, ועיצוב רספונסיבי.",
          },
          {
            title: "שלב 5. לחבר מפות ואנליטיקה",
            body: "להוסיף קישור לאתר בכרטיס העסק בגוגל וב‑Apple Maps (Apple Business Connect), לוודא עקביות NAP, ולחבר מדידה כדי לעקוב אחרי שיחות/טפסים/קליקים לניווט.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            title: "1. אתר ‘בשביל שיהיה’",
            body: "בלי כותרת ברורה, מבנה, אפשרויות קשר ו‑CTA-האתר לא יעזור.",
          },
          {
            title: "2. עומס וניווט מסובך",
            body: "מיני‑סייט צריך להיות פשוט. יותר מדי חלונות קופצים ותוספים כבדים פוגעים בהמרה.",
          },
          {
            title: "3. התעלמות ממובייל",
            body: "רוב התנועה המקומית מגיעה מהטלפון. אם קשה להשתמש באתר-מאבדים פניות.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "מיני‑סייט הוא נכס בסיסי לשיווק מקומי: הוא בונה אמון, תומך בנראות במפות ומקצר את הדרך לשיחה או לקביעת תור. לעיתים כמה לקוחות נוספים בחודש כבר מכסים את העלות.",
          },
        ],
      },
    ],
  },
};

export default content;
