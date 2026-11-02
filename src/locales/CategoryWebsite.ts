export type HowToStep = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type FaqItem = { q: string; a: string };

export type CategoryWebsiteContent = {
  backBtn: { text: string; alternative: string };
  hero: { title: string; intro: string };
  card: {
    title: string;
    subtitle: string;
    forWhoTitle: string;
    forWhoBody: string;
    doTitle: string;
    doItems: string[];
    getTitle: string;
    getItems: string[];
    note?: string;
    costLabel: string;
    costPrimary: string;
    costAlt: string;
    cta: string;
  };
  sections: {
    changesTitle: string;
    changesBody: string;
    changesBullets: string[];

    synergyTitle: string;
    synergyBody: string;
    synergyBullets: string[];

    processTitle: string;
    processSteps: Array<{ number: string; title: string; text: string }>;

    prepTitle: string;
    prepItems: string[];

    mistakesTitle: string;
    mistakesItems: string[];

    diyTitle: string;
    diyIntro: string;
    diyChecklistIntro: string;
    diyChecklist: string[];

    strongSiteTitle: string;
    strongSiteIntro: string;
    strongSiteBlocks: Array<{
      title: string;
      body: string;
      extra?: string;
      bullets?: string[];
    }>;

    faqTitle: string;
    faqItems: FaqItem[];

    diyHowToTitle: string;
    diyHowToIntro: string;
  };
  howToSteps: HowToStep[];
  highlightedPackage: string;
};

const content: Record<"by" | "il" | "en", CategoryWebsiteContent> = {
  by: {
    backBtn: { text: "К услугам", alternative: "/#services" },
    hero: {
      title: "«Локальное присутствие» - сайт + видимость в поиске и картах",
      intro:
        "Тариф для тех, кто хочет получать первый стабильный поток клиентов из поиска и карт за счёт связки сайта и локального SEO.",
    },
    card: {
      title: "Локальное присутствие",
      subtitle: "Шаг 2 · Сайт + видимость в локальном поиске",
      forWhoTitle: "Для кого этот тариф",
      forWhoBody:
        "Для компаний, которым нужен не просто профиль в сервисах, а полноценный сайт, оптимизированный под город, услуги и регионы, и связка этого сайта с картами.",
      doTitle: "Что мы делаем",
      doItems: [
        "Создаём сайт, оптимизированный под ваш город и основные услуги.",
        "Делаем страницы под каждую услугу и район, чтобы лучше охватывать локальные запросы.",
        "Прокачиваем присутствие в картах и каталогах и связываем их с сайтом.",
      ],
      getTitle: "Что вы получаете",
      getItems: [
        "Первый стабильный поток клиентов из вашего города.",
        "Рост видимости в поиске и картах по ключевым запросам.",
      ],
      note: "Рекомендуем после тарифа «Быстрый старт».",
      costLabel: "Стоимость:",
      costPrimary: "$233 / месяц",
      costAlt: "$700 за 3 месяца",
      cta: "Обсудить тариф",
    },
    sections: {
      changesTitle: "Что меняется для вас после «Локального присутствия»",
      changesBody:
        "Одной карточки в сервисах недостаточно. Чтобы алгоритмы продвигали вас в картах, им нужен сайт: на нём поисковые системы проверяют релевантность услуг, географию, качество информации и репутацию. Это не дополнительная опция, а must‑have для устойчивого роста.",
      changesBullets: [
        "без сайта поисковикам нечего «оценивать»: услуги, географию, опыт;",
        "сайт подтверждает данные карточек и раскрывает детали: услуги, цены, кейсы;",
        "доверие строится на совокупности сигналов: контент, структура, скорость, отзывы;",
        "поэтому сайт - обязательное условие стабильного роста видимости в картах.",
      ],

      synergyTitle: "Как вместе работают сайт, локальное SEO и карты",
      synergyBody:
        "Сайт и карты - это две стороны одного локального бренда. Карты приводят тех, кто ищет услугу рядом, а сайт помогает убедиться, что вы - правильный выбор.",
      synergyBullets: [
        "карты и навигаторы приводят пользователей с чётким намерением;",
        "сайт раскрывает формат работы, цены и отвечает на ключевые вопросы;",
        "вместе они увеличивают брендовые запросы и повторные обращения;",
        "поисковики видят единый «цифровой след» и точнее понимают тематику бизнеса.",
      ],

      processTitle: "Как проходит работа по тарифу «Локальное присутствие»",
      processSteps: [
        {
          number: "01",
          title: "Диагностика",
          text: "Анализ текущего состояния в поиске и картах.",
        },
        {
          number: "02",
          title: "Структура сайта",
          text: "Определяем набор необходимых страниц.",
        },
        {
          number: "03",
          title: "Контент и логика",
          text: "Готовим тексты и структуру под запросы.",
        },
        {
          number: "04",
          title: "Техническая часть",
          text: "Настраиваем базовое SEO и скорость.",
        },
        {
          number: "05",
          title: "Связка с картами",
          text: "Приводим NAP к единообразию, добавляем ссылки.",
        },
        {
          number: "06",
          title: "Первые измерения",
          text: "Отслеживаем рост показов, кликов и заявок.",
        },
      ],

      prepTitle: "Что подготовить с вашей стороны",
      prepItems: [
        "список услуг и направлений для продвижения;",
        "приоритетные города и районы;",
        "частые вопросы клиентов;",
        "фото, примеры работ, отзывы;",
        "доступ к текущему сайту или структура страниц.",
      ],

      mistakesTitle: "Типичные ошибки при связке сайта и карт",
      mistakesItems: [
        "разные телефоны, адреса или названия на сайте и в картах;",
        "один общий лендинг без локальной структуры;",
        "страницы не отвечают на конкретные запросы;",
        "нет кнопок действий или удобных способов связи;",
        "сайт не усиливает карточки и не помогает алгоритмам.",
      ],

      diyTitle: "Если вы хотите сделать «локальное присутствие» сами",
      diyIntro: "Базовый чек-лист:",
      diyChecklistIntro: "",
      diyChecklist: [
        "Определите ключевые локальные запросы: «услуга + район/город».",
        "Проверьте, есть ли страницы, которые отвечают этим запросам.",
        "Создайте или обновите страницы: заголовок, выгоды, примеры, структура.",
        "Синхронизируйте NAP-данные на сайте и во всех картах.",
        "Добавьте удобные точки контакта: кнопки, формы, мессенджеры.",
        "Оцените динамику показов и заявок через 1–2 месяца.",
      ],

      strongSiteTitle: "Какой сайт нужен для сильного локального SEO",
      strongSiteIntro:
        "Для локального SEO сайт - это не «ещё один источник трафика», а основа того, как поисковики понимают ваш бизнес. И Яндекс, и Google смотрят на три вещи: релевантность (насколько вы про эту тему), репутацию (как о вас отзываются) и локацию (где вы находитесь и кто делает запрос). Этот тариф главным образом работает с релевантностью - количеством, структурой и достоверностью информации о вас.",
      strongSiteBlocks: [
        {
          title: "1. Опора на предыдущий шаг",
          body: "Хороший сайт для локального SEO почти всегда строится поверх наведения порядка в карточках и точках присутствия. То есть сначала - «Быстрый старт»: единый NAP, понятные карточки в картах. Потом - сайт, который усиливает ту же информацию и раскрывает детали.",
        },
        {
          title: "2. Страницы категорий",
          body: "Категория - это страница, которая объединяет несколько родственных услуг. Например: «Маникюр и педикюр», «Ремонт квартир под ключ», «Лечение зубов». На ней есть краткое объяснение направления и ссылки на конкретные сервисные страницы.",
          extra:
            "Пример: страница категории «Ремонт квартир» содержит короткий обзор форматов ремонта и ссылки «Косметический ремонт», «Капитальный ремонт», «Ремонт новостроек», «Ремонт в старом фонде».",
        },
        {
          title: "3. 20–50 сервисных страниц с уникальным контентом",
          body: "Сервисная страница - это страница под одну конкретную услугу или связку «услуга + город/район». В идеале таких страниц десятки. Их задача - быть максимально точным ответом на запрос.",
          bullets: [
            "название услуги в главном заголовке и заголовке вкладки браузера;",
            "совпадение названия услуги с тем, как она указана в картах (Google / Яндекс);",
            "упоминание услуги и города в заголовке, подзаголовке и в первом абзаце текста;",
            "живое описание: кому это полезно, как проходит, какие есть ограничения, примеры.",
          ],
          extra:
            "Пример: «Маникюр с покрытием гель‑лаком в Минске» - это отдельная страница, а не абзац в списке «все услуги».",
        },
        {
          title: "4. Внутренние ссылки, которые помогают, а не мешают",
          body: "Страницы должны быть связаны между собой так, чтобы и человек, и робот могли пройти логичный путь: от общего к частному.",
          bullets: [
            "категория → ссылки на конкретные услуги;",
            "услуга → ссылки на похожие услуги и кейсы;",
            "кейсы → ссылки на услуги, по которым выполнена работа;",
            "из любой точки есть понятная дорога до контактов и формы.",
          ],
        },
        {
          title: "5. Остальные важные элементы",
          body: "",
          bullets: [
            "адаптивность под мобильные - большая часть локального трафика приходит со смартфонов;",
            "скорость загрузки - особенно для мобильного интернета;",
            "понятные заголовки: без «уникальных решений», с нормальными формулировками под реальные запросы;",
            "блоки доказательств: отзывы, фото, примеры работ, логотипы клиентов;",
            "прозрачные способы связи: телефон, мессенджеры, формы, возможность задать вопрос без «обязательной заявки».",
          ],
        },
      ],

      faqTitle: "Частые вопросы про тариф «Локальное присутствие»",
      faqItems: [
        {
          q: "Нужен ли сайт, если у нас уже есть карточки в картах?",
          a: "Для устойчивого локального SEO сайт почти всегда обязателен: именно на нём поисковые системы проверяют услуги, географию и качество информации. Карточки и сайт работают в связке и усиливают друг друга.",
        },
        {
          q: "Сколько страниц сайта вы обычно делаете в рамках тарифа?",
          a: "Обычно это 20–50 сервисных страниц: под ключевые услуги, направления и локации. Конкретный объём согласуем, исходя из ниши и ваших задач.",
        },
        {
          q: "Когда ждать первых изменений по локальным запросам?",
          a: "Первые сдвиги по показам и кликам часто появляются в течение 1–2 месяцев после запуска структуры и контента. Дальше эффект накапливается по мере роста числа страниц и доработок.",
        },
        {
          q: "Можно ли сразу начать с этого тарифа без «Быстрого старта»?",
          a: "Если с картами и NAP у вас полный порядок, можно идти сразу в «Локальное присутствие». Если нет уверенности, обычно сначала делаем базовый аудит и при необходимости подтягиваем карты.",
        },
      ],

      diyHowToTitle: "Если хотите сделать локальное присутствие сами",
      diyHowToIntro:
        "Создать связку «сайт + локальное SEO + карты» можно самостоятельно, если двигаться шаг за шагом и понимать, какие сигналы важны для поисковиков. Ниже - практичная инструкция, основанная на тех же принципах, что мы используем в работе. Отмечайте выполненные пункты в мини-чек-листах.",
    },
    howToSteps: [
      {
        id: "step1-local-queries",
        title:
          "Шаг 1. Определите локальные запросы, по которым вас должны находить",
        description:
          "Вы создаёте фундамент - набор реальных поисковых формулировок, по которым клиенты ищут ваши услуги.",
        items: [
          "Соберите список запросов «услуга + Минск», «услуга + Брест», «услуга + Гомель» и другие города Беларуси, а также «услуга + район».",
          "Изучите подсказки в Google/Яндекс, рекомендации в Wordstat, похожие запросы.",
          "Сгруппируйте запросы по направлениям: услуги, подуслуги, локации.",
          "Есть список всех услуг.",
          "Есть ключевые города Беларуси и районы.",
          "Есть список запросов под каждую услугу.",
          "Запросы сгруппированы по темам.",
        ],
      },
      {
        id: "step2-site-structure",
        title: "Шаг 2. Постройте структуру сайта под локальные запросы",
        description:
          "Структура сайта помогает поисковику понять, какие услуги вы оказываете, где работаете и какой странице соответствовать конкретному запросу.",
        items: [
          "Создайте страницы категорий (группы услуг).",
          "Под каждую важную услугу сделайте отдельную страницу.",
          "Если работаете по районам - создайте страницы «услуга + район».",
          "Спланируйте внутренние ссылки: категории → услуги → кейсы.",
          "Есть страницы категорий.",
          "Есть страницы услуг (10–20, лучше - 20–50).",
          "Есть страницы с локальной привязкой (город/район).",
          "Между страницами настроена внутренняя логичная связь.",
        ],
      },
      {
        id: "step3-content",
        title:
          "Шаг 3. Напишите понятный и уникальный контент под каждую услугу",
        description:
          "Контент - один из самых сильных локальных факторов ранжирования: страница должна полно отвечать на намерение пользователя.",
        items: [
          "Услуга и город/район указаны в заголовке (H1).",
          "Есть короткое описание услуги на 1–3 абзаца.",
          "Описаны этапы работы, ограничения, формат сотрудничества.",
          "Добавлены примеры, фото, FAQ.",
          "Есть чёткие CTA: кнопки, формы, телефоны.",
          "Заголовок содержит услугу и город/район.",
          "Текст не дублируется с другими страницами.",
          "Есть структура: вводный текст → блоки → FAQ.",
          "Есть кнопки и удобные точки контакта.",
        ],
      },
      {
        id: "step4-nap-cards",
        title: "Шаг 4. Настройте единый NAP и приведите в порядок карты",
        description:
          "Карты дают локальный вес, а единый NAP повышает доверие алгоритмов: данные о бизнесе должны совпадать везде.",
        items: [
          "Сверьте адрес, телефон и название на сайте и в профилях Google/Яндекс.",
          "Обновите описание, категории, фото, режим работы.",
          "Свяжите сайт с картами: добавьте UTM-метки, ссылки, CTA.",
          "Телефоны совпадают везде.",
          "Адрес и название совпадают.",
          "Описания заполнены и соответствуют сайту.",
          "Добавлены фото, услуги, ссылки.",
        ],
      },
      {
        id: "step5-technical",
        title: "Шаг 5. Технически оптимизируйте сайт",
        description:
          "Даже лучший контент не сработает, если сайт медленный или непонятный для поисковых роботов.",
        items: [
          "Проверьте скорость в PageSpeed Insights (особенно мобильную версию).",
          "Настройте корректные URL, заголовки, микроразметку.",
          "Удалите дубли страниц.",
          "Убедитесь, что сайт адаптивный и быстро грузится на телефонах.",
          "Скорость > 70 по мобильной версии.",
          "Нет дублей URL.",
          "Есть корректные H1–H3.",
          "Есть микроразметка LocalBusiness.",
        ],
      },
      {
        id: "step6-analytics",
        title: "Шаг 6. Соберите первые данные и оцените динамику",
        description:
          "SEO - про анализ и последовательное усиление: без данных нельзя понять, что работает, а что тормозит рост.",
        items: [
          "Подключите Яндекс.Метрику и Google Analytics 4.",
          "Подключите Google Search Console и Яндекс.Вебмастер.",
          "Через 2–4 недели посмотрите, какие запросы показывают рост, а какие - нет.",
          "Дорабатывайте страницы и добавляйте новые по результатам.",
          "Метрика/GA4 подключены.",
          "Search Console/Вебмастер подключены.",
          "Есть список запросов, которые растут.",
          "Есть план корректировок.",
        ],
      },
    ],
    highlightedPackage: "Локальное присутствие",
  },

  il: {
    backBtn: { text: "לשירותים", alternative: "/#services" },
    hero: {
      title: "«נוכחות מקומית» - אתר + נראות בחיפוש ובמפות בישראל",
      intro:
        "חבילה למי שרוצה זרם ראשון ויציב של פניות מחיפוש מקומי ומפות, בעזרת שילוב של אתר + Local SEO.",
    },
    card: {
      title: "נוכחות מקומית",
      subtitle: "שלב 2 · אתר + נראות בחיפוש מקומי",
      forWhoTitle: "למי זה מתאים",
      forWhoBody:
        "לעסקים שלא מסתפקים בפרופיל במפות - אלא צריכים אתר שמותאם לעיר, לשירותים ולאזורים, וחיבור בין האתר למפות.",
      doTitle: "מה אנחנו עושים",
      doItems: [
        "בונים אתר שמותאם לעיר ולשירותים המרכזיים שלכם.",
        "יוצרים עמודים לכל שירות ולאזור כדי לכסות שאילתות מקומיות.",
        "מחזקים נוכחות במפות/דירקטוריות ומחברים אותן לאתר.",
      ],
      getTitle: "מה אתם מקבלים",
      getItems: [
        "זרם ראשון ויציב של לקוחות מהאזור שלכם.",
        "יותר נראות בחיפוש ובמפות עבור שאילתות מפתח.",
      ],
      note: "מומלץ אחרי «התחלה מהירה».",
      costLabel: "עלות:",
      costPrimary: "$233 / חודש",
      costAlt: "$700 ל‑3 חודשים",
      cta: "נדבר על החבילה",
    },
    sections: {
      changesTitle: "מה משתנה אחרי «נוכחות מקומית»",
      changesBody:
        "פרופיל במפות לבדו לרוב לא מספיק. כדי לדרג טוב בחיפוש מקומי, מנועי חיפוש צריכים אתר שבו הם בודקים רלוונטיות, אזור שירות, איכות מידע ומוניטין. זה לא בונוס - זה בסיס לצמיחה יציבה.",
      changesBullets: [
        "בלי אתר קשה למנועי חיפוש להבין את השירותים והניסיון שלכם;",
        "האתר מאשר את פרטי הפרופיל ומוסיף עומק: שירותים, מחירים, דוגמאות;",
        "אמון נבנה מסך אותות: תוכן, מבנה, מהירות, ביקורות;",
        "לכן אתר הוא תנאי לצמיחה יציבה במפות.",
      ],

      synergyTitle: "איך אתר, Local SEO ומפות עובדים יחד",
      synergyBody:
        "מפות מביאות אנשים עם כוונה ברורה, והאתר עוזר להם לבחור בכם. יחד הם יוצרים מותג מקומי עקבי.",
      synergyBullets: [
        "מפות וניווט מביאים משתמשים עם כוונה מיידית;",
        "האתר מסביר תהליך, מחירים ועונה על שאלות;",
        "הם מגבירים חיפושי מותג ופניות חוזרות;",
        'למנועי חיפוש יש "טביעת רגל" עקבית וברורה.',
      ],

      processTitle: "איך העבודה מתבצעת בחבילה",
      processSteps: [
        {
          number: "01",
          title: "אבחון",
          text: "בדיקת מצב נוכחי בחיפוש ובמפות.",
        },
        { number: "02", title: "מבנה אתר", text: "הגדרת עמודים הכרחיים." },
        {
          number: "03",
          title: "תוכן ולוגיקה",
          text: "כתיבה/ארגון לפי שאילתות.",
        },
        { number: "04", title: "טכני", text: "SEO בסיסי ומהירות." },
        {
          number: "05",
          title: "חיבור למפות",
          text: "יישור NAP והוספת קישורים.",
        },
        {
          number: "06",
          title: "מדידה ראשונית",
          text: "מעקב חשיפות, קליקים ופניות.",
        },
      ],

      prepTitle: "מה צריך מכם",
      prepItems: [
        "רשימת שירותים וכיווני צמיחה;",
        "ערים/אזורים רלוונטיים;",
        "שאלות נפוצות של לקוחות;",
        "תמונות, עבודות, ביקורות;",
        "גישה לאתר קיים או מידע על מבנה עמודים.",
      ],

      mistakesTitle: "טעויות נפוצות",
      mistakesItems: [
        "פרטים שונים בין האתר למפות;",
        "עמוד נחיתה אחד בלי מבנה מקומי;",
        "עמודים שלא עונים על שאילתות אמיתיות;",
        "אין CTA ברור או דרכי קשר נוחות;",
        "האתר לא מחזק את הפרופילים.",
      ],

      diyTitle: "אם רוצים לעשות את זה לבד",
      diyIntro: "צ'ק‑ליסט בסיסי:",
      diyChecklistIntro: "",
      diyChecklist: [
        'הגדירו שאילתות מקומיות: "שירות + עיר/אזור".',
        "בדקו האם יש עמודים שעונים לשאילתות האלה.",
        "צרו/עדכנו עמודים: כותרות, יתרונות, דוגמאות, מבנה.",
        "יישרו NAP באתר ובכל המפות.",
        "הוסיפו נקודות קשר נוחות: כפתורים, טפסים, וואטסאפ.",
        "בדקו התקדמות אחרי 1–2 חודשים.",
      ],

      strongSiteTitle: "איזה אתר צריך ל‑Local SEO חזק",
      strongSiteIntro:
        "ב‑Local SEO האתר הוא הבסיס להבנה של העסק. Google בעיקר מסתכל על רלוונטיות, אמון ומיקום. כאן החבילה מתמקדת ברלוונטיות: כמות ואיכות המידע, המבנה והדיוק שלו.",
      strongSiteBlocks: [
        {
          title: "1. נשענים על השלב הקודם",
          body: "לרוב אתר טוב נבנה אחרי שסידרתם את הנוכחות במפות: NAP אחיד ופרופילים מסודרים. אחר כך האתר מחזק ומרחיב את אותו מידע.",
        },
        {
          title: "2. עמודי קטגוריה",
          body: "עמוד קטגוריה מאחד כמה שירותים קרובים ומפנה לעמודי שירות ספציפיים.",
          extra: 'דוגמה: קטגוריית "שיפוצים" עם קישורים לסוגי שיפוץ שונים.',
        },
        {
          title: "3. 20–50 עמודי שירות",
          body: 'עמוד שירות הוא תשובה מדויקת ל"שירות + עיר/אזור". כדאי לבנות עשרות עמודים כאלה.',
          bullets: [
            "שירות בכותרת הראשית;",
            "התאמה למונחים שאנשים מחפשים;",
            "אזכור העיר/האזור בכותרות ובפסקה הראשונה;",
            "דוגמאות אמיתיות ושאלות נפוצות.",
          ],
          extra: 'דוגמה: "מניקור ג\'ל בתל אביב" כעמוד נפרד.',
        },
        {
          title: "4. קישורים פנימיים",
          body: "מחברים עמודים כך שהמסע יהיה הגיוני למשתמש ולמנוע חיפוש.",
          bullets: [
            "קטגוריה → שירותים;",
            "שירות → שירותים דומים/מקרי בוחן;",
            "מקרי בוחן → שירותים;",
            "גישה ברורה לטופס קשר מכל עמוד.",
          ],
        },
        {
          title: "5. אלמנטים נוספים",
          body: "",
          bullets: [
            "מובייל קודם;",
            "מהירות טעינה;",
            "כותרות ברורות;",
            "הוכחות: ביקורות, תמונות, דוגמאות;",
            "דרכי קשר שקופות.",
          ],
        },
      ],

      faqTitle: "שאלות נפוצות",
      faqItems: [
        {
          q: "צריך אתר אם כבר יש פרופיל במפות?",
          a: "כמעט תמיד כן: האתר הוא המקום שבו מנועי חיפוש מאמתים שירותים, אזור ותוכן. יחד עם הפרופילים זה עובד טוב יותר.",
        },
        {
          q: "כמה עמודים בדרך כלל נבנים?",
          a: "בדרך כלל 20–50 עמודי שירות לפי שירותים ואזורים, בהתאם לנישה.",
        },
        {
          q: "מתי רואים שינוי?",
          a: "לרוב רואים תזוזות ראשונות אחרי 1–2 חודשים, ואז האפקט מצטבר.",
        },
        {
          q: "אפשר להתחיל בלי השלב הראשון?",
          a: "אם המפות וה‑NAP כבר מסודרים, אפשר. אם לא - לרוב מתחילים בבסיס.",
        },
      ],

      diyHowToTitle: "אם תרצו לבנות את זה לבד",
      diyHowToIntro:
        "אפשר לבנות שילוב של אתר + Local SEO + מפות גם לבד, אם עובדים מסודר ומבינים אילו אותות חשובים. סמנו משימות שבוצעו בצ'ק‑ליסטים.",
    },
    howToSteps: [
      {
        id: "step1-local-queries",
        title: "שלב 1. הגדירו שאילתות מקומיות",
        description: "בונים בסיס של שאילתות אמיתיות שלקוחות מחפשים.",
        items: [
          'אספו שאילתות כמו "שירות + תל אביב", "שירות + חיפה", "שירות + ירושלים" וגם "שירות + שכונה".',
          "בדקו השלמות אוטומטיות ב‑Google, רעיונות מ‑Keyword Planner וכלים נוספים.",
          "קבצו לפי שירותים ואזורים.",
          "יש רשימת שירותים מלאה.",
          "יש ערים/שכונות רלוונטיות.",
          "יש שאילתות לכל שירות.",
          "הכול מקובץ לנושאים.",
        ],
      },
      {
        id: "step2-site-structure",
        title: "שלב 2. בנו מבנה אתר לפי שאילתות",
        description: "המבנה עוזר למנוע חיפוש להבין מה אתם עושים ואיפה.",
        items: [
          "צרו עמודי קטגוריה.",
          "עמוד לכל שירות חשוב.",
          'אם עובדים לפי אזורים - עמודי "שירות + אזור".',
          "קישורים פנימיים: קטגוריה → שירות → מקרי בוחן.",
          "יש עמודי קטגוריה.",
          "יש עמודי שירות (20–50 עדיף).",
          "יש עמודים לפי אזורים.",
          "יש קישוריות פנימית הגיונית.",
        ],
      },
      {
        id: "step3-content",
        title: "שלב 3. כתבו תוכן ברור וייחודי",
        description: "תוכן הוא גורם מרכזי ב‑Local SEO.",
        items: [
          "שירות + עיר/אזור ב‑H1.",
          "תיאור קצר וברור.",
          "שלבים, מגבלות, פורמט עבודה.",
          "דוגמאות, תמונות ו‑FAQ.",
          "CTA ברור.",
          "כותרות נכונות.",
          "אין שכפול טקסט.",
          "מבנה ברור.",
          "נקודות קשר נוחות.",
        ],
      },
      {
        id: "step4-nap-cards",
        title: "שלב 4. יישרו NAP וסדרו מפות",
        description: "עקביות נתונים מעלה אמון.",
        items: [
          "השוו שם/טלפון/כתובת בין האתר לפרופילים ב‑Google.",
          "עדכנו תיאור, קטגוריות, תמונות ושעות.",
          "קשרו את האתר (UTM, קישורים, CTA).",
          "טלפון עקבי.",
          "כתובת עקבית.",
          "תיאורים מלאים.",
          "תמונות ושירותים מעודכנים.",
        ],
      },
      {
        id: "step5-technical",
        title: "שלב 5. טכני",
        description: "אתר איטי או לא ברור לא יעבוד.",
        items: [
          "בדקו PageSpeed.",
          "URL, כותרות, סכמות.",
          "הסרת כפילויות.",
          "רספונסיביות.",
          "ציון > 70 במובייל.",
          "אין כפילויות.",
          "מבנה כותרות תקין.",
          "Schema LocalBusiness.",
        ],
      },
      {
        id: "step6-analytics",
        title: "שלב 6. מדידה",
        description: "בלי נתונים אי אפשר להשתפר.",
        items: [
          "חברו Google Analytics 4.",
          "חברו Google Search Console.",
          "אחרי 2–4 שבועות בדקו שאילתות שצומחות.",
          "שפרו עמודים לפי נתונים.",
          "GA4 מחובר.",
          "Search Console מחובר.",
          "יש רשימת שאילתות בצמיחה.",
          "יש תוכנית שיפור.",
        ],
      },
    ],
    highlightedPackage: "נוכחות מקומית",
  },

  en: {
    backBtn: { text: "Back to services", alternative: "/#services" },
    hero: {
      title:
        '"Local Presence" - a website + visibility in local search and maps (U.S.)',
      intro:
        "A package for businesses that want their first steady stream of local leads by combining a strong website structure with local SEO and listings.",
    },
    card: {
      title: "Local Presence",
      subtitle: "Step 2 · Website + local search visibility",
      forWhoTitle: "Who this is for",
      forWhoBody:
        "For businesses that need more than a listing - a real website optimized for services and service areas, plus a clean connection between the site and maps.",
      doTitle: "What we do",
      doItems: [
        "Build a website optimized for your city and core services.",
        "Create pages for each service and area to capture local intent.",
        "Strengthen listings/directories and connect them to the site.",
      ],
      getTitle: "What you get",
      getItems: [
        "Your first steady flow of leads from your local area.",
        "Higher visibility in search and maps for key queries.",
      ],
      note: "Recommended after Quick Start.",
      costLabel: "Price:",
      costPrimary: "$233 / month",
      costAlt: "$700 for 3 months",
      cta: "Talk about the plan",
    },
    sections: {
      changesTitle: "What changes after Local Presence",
      changesBody:
        "A listing alone is rarely enough. For sustainable local rankings, search engines need a website to validate relevance, service areas, information quality, and trust. It’s not optional - it’s foundational.",
      changesBullets: [
        "without a website, search engines have less to evaluate;",
        "the site validates your listing data and adds depth: services, pricing, case studies;",
        "trust is built through combined signals: content, structure, speed, reviews;",
        "that’s why a site is a prerequisite for stable map visibility.",
      ],

      synergyTitle: "How your website, local SEO, and maps work together",
      synergyBody:
        "Maps bring people with immediate intent, and the website helps them choose you. Together they create a consistent local brand signal.",
      synergyBullets: [
        "maps and navigation capture high-intent users;",
        "the site explains process, pricing, and answers key questions;",
        "together they grow branded searches and repeat conversions;",
        "search engines see one consistent footprint.",
      ],

      processTitle: "How the work is delivered",
      processSteps: [
        {
          number: "01",
          title: "Discovery",
          text: "Review your current search + listing visibility.",
        },
        {
          number: "02",
          title: "Site structure",
          text: "Define the pages you need.",
        },
        {
          number: "03",
          title: "Content",
          text: "Prepare copy and structure around queries.",
        },
        {
          number: "04",
          title: "Technical",
          text: "Baseline SEO and performance.",
        },
        {
          number: "05",
          title: "Listings connection",
          text: "Standardize NAP and add links/UTM.",
        },
        {
          number: "06",
          title: "First measurement",
          text: "Track impressions, clicks, and leads.",
        },
      ],

      prepTitle: "What we need from you",
      prepItems: [
        "list of services and priorities;",
        "cities/areas you actually serve;",
        "common customer questions;",
        "photos, proof, reviews;",
        "access to an existing site or page structure details.",
      ],

      mistakesTitle: "Common mistakes",
      mistakesItems: [
        "different phone/address/name across site and listings;",
        "one generic landing page without local structure;",
        "pages that don’t answer real queries;",
        "no clear CTAs or easy contact points;",
        "a site that doesn’t reinforce listing signals.",
      ],

      diyTitle: "If you want to build Local Presence yourself",
      diyIntro: "Basic checklist:",
      diyChecklistIntro: "",
      diyChecklist: [
        'Define core local queries: "service + city/area".',
        "Check whether you have pages that answer those queries.",
        "Create/update pages: title, benefits, examples, structure.",
        "Sync NAP across the site and all listings.",
        "Add easy contact points: buttons, forms, messaging.",
        "Evaluate results after 1–2 months.",
      ],

      strongSiteTitle: "What kind of website you need for strong local SEO",
      strongSiteIntro:
        "For local SEO, your website is the main source of truth. In the U.S., Google primarily evaluates relevance, trust, and proximity/service area. This package focuses on relevance: the amount, structure, and accuracy of information about your business.",
      strongSiteBlocks: [
        {
          title: "1. Build on the previous step",
          body: "A strong local SEO website is usually built on top of clean listings: consistent NAP and properly set up profiles. Then the website expands and reinforces those same signals.",
        },
        {
          title: "2. Category pages",
          body: "A category page groups related services and links to specific service pages.",
          extra:
            'Example: a "Home Remodeling" category linking to bathroom remodels, kitchen remodels, etc.',
        },
        {
          title: "3. 20–50 service pages with unique content",
          body: 'A service page targets a specific intent like "service + city/neighborhood". The goal is to be the most precise answer to that query.',
          bullets: [
            "service in the main H1;",
            "terminology aligned with how customers search;",
            "city/area mentioned in headings and early copy;",
            "real examples, FAQs, and clear CTAs.",
          ],
          extra: 'Example: "Gel manicure in Miami" as a dedicated page.',
        },
        {
          title: "4. Internal linking",
          body: "Connect pages so both users and crawlers can navigate from broad to specific.",
          bullets: [
            "category → services;",
            "service → related services and case studies;",
            "case studies → relevant services;",
            "a clear path to contact from any page.",
          ],
        },
        {
          title: "5. Other essentials",
          body: "",
          bullets: [
            "mobile-first UX;",
            "fast load speed;",
            "plain, query-driven headings;",
            "proof blocks: reviews, photos, examples;",
            "transparent contact options.",
          ],
        },
      ],

      faqTitle: "Local Presence FAQ",
      faqItems: [
        {
          q: "Do I need a website if I already have listings?",
          a: "For sustainable local SEO, a website is almost always required: it’s where search engines validate services, locations, and information quality. Listings and a site amplify each other.",
        },
        {
          q: "How many pages do you typically build?",
          a: "Usually 20–50 service pages for key services and areas. The exact scope depends on your niche and goals.",
        },
        {
          q: "When should I expect early movement?",
          a: "First improvements often appear within 1–2 months after structure and content go live, then compound over time.",
        },
        {
          q: "Can I start without Quick Start?",
          a: "If your listings and NAP are already clean, yes. If not, starting with cleanup is usually faster and safer.",
        },
      ],

      diyHowToTitle: "If you want to do Local Presence yourself",
      diyHowToIntro:
        'You can build the "website + local SEO + listings" system yourself if you move step by step and understand which signals matter. Use the mini checklists below.',
    },
    howToSteps: [
      {
        id: "step1-local-queries",
        title: "Step 1. Define the local queries you want to rank for",
        description:
          "This step builds the foundation: the real search phrases your customers use.",
        items: [
          'Compile queries like "service + Austin", "service + Dallas", "service + neighborhood".',
          "Use Google autocomplete, Keyword Planner ideas, and related searches.",
          "Group queries by services and locations.",
          "You have a complete list of services.",
          "You have priority cities/neighborhoods.",
          "You have query lists per service.",
          "Queries are grouped by themes.",
        ],
      },
      {
        id: "step2-site-structure",
        title: "Step 2. Build your website structure around those queries",
        description:
          "Structure helps search engines understand what you offer and where you operate.",
        items: [
          "Create category pages (service groups).",
          "Create one page per key service.",
          "If you serve multiple neighborhoods/cities, create location pages.",
          "Plan internal links: category → services → case studies.",
          "You have category pages.",
          "You have service pages (20–50 is ideal).",
          "You have location pages.",
          "Internal linking is logical.",
        ],
      },
      {
        id: "step3-content",
        title: "Step 3. Write clear, unique content for each service",
        description: "Content is one of the strongest local ranking factors.",
        items: [
          "Service + city/area in the H1.",
          "1–3 short intro paragraphs.",
          "Explain process, constraints, and collaboration format.",
          "Add examples, photos, and FAQs.",
          "Clear CTAs: buttons/forms/phone.",
          "Headings include service + area.",
          "No duplicated text across pages.",
          "Clear structure.",
          "Easy contact points.",
        ],
      },
      {
        id: "step4-nap-cards",
        title: "Step 4. Sync NAP and fix your listings",
        description:
          "Listings create local weight; consistent NAP builds trust.",
        items: [
          "Verify name/phone/address match between site and Google Business Profile.",
          "Update description, categories, photos, hours.",
          "Connect the site to listings: UTM, links, CTAs.",
          "Phone is consistent.",
          "Address and name match.",
          "Descriptions are complete.",
          "Photos/services/links are present.",
        ],
      },
      {
        id: "step5-technical",
        title: "Step 5. Technical optimization",
        description:
          "Even the best content won’t work if the site is slow or unclear to crawlers.",
        items: [
          "Check PageSpeed Insights (especially mobile).",
          "Fix URLs, headings, and schema.",
          "Remove duplicate pages.",
          "Ensure mobile-friendly layout.",
          "Mobile score > 70.",
          "No URL duplicates.",
          "Correct H1–H3 hierarchy.",
          "LocalBusiness schema present.",
        ],
      },
      {
        id: "step6-analytics",
        title: "Step 6. Measure and iterate",
        description: "SEO is about data-driven iteration.",
        items: [
          "Connect Google Analytics 4.",
          "Connect Google Search Console.",
          "After 2–4 weeks, review which queries are growing.",
          "Improve pages and add new ones based on data.",
          "GA4 is connected.",
          "Search Console is connected.",
          "You have a list of growing queries.",
          "You have an improvement plan.",
        ],
      },
    ],
    highlightedPackage: "Local Presence",
  },
};

export default content;
