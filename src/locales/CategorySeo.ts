export type HowToStep = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type FaqItem = { q: string; a: string };

export type CategorySeoContent = {
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
    costValue: string;
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

    fromYouTitle: string;
    fromYouItems: string[];

    mistakesTitle: string;
    mistakesItems: string[];

    faqTitle: string;
    faqItems: FaqItem[];

    diyTitle: string;
    diyIntro: string;
  };
  howToSteps: HowToStep[];
  highlightedPackage: string;
};

const content: Record<"by" | "il" | "en", CategorySeoContent> = {
  by: {
    backBtn: { text: "К услугам", alternative: "/#services" },
    hero: {
      title: "«Лидер рынка» - доминирование в картах и поиске",
      intro:
        "Максимальный тариф для тех, кто готов серьёзно инвестировать в присутствие в Google и Яндекс Картах, SEO и репутацию, чтобы быть заметнее всех конкурентов.",
    },
    card: {
      title: "Лидер рынка",
      subtitle: "Шаг 4 · Доминирование над конкурентами",
      forWhoTitle: "Для кого этот тариф",
      forWhoBody:
        "Для компаний, которые уже получают стабильно заявки из поиска и карт и хотят занимать лидирующие позиции, усиливать бренд и выстраивать долгосрочный отрыв от конкурентов.",
      doTitle: "Что мы делаем",
      doItems: [
        "Закрываем SEO не точечно, а по всему проекту: работаем со всеми важными страницами сайта и профилями в картах, чтобы каждый раздел был оптимизирован под свои запросы.",
        "Продолжаем закупку белых ссылок (white‑hat) с качественных релевантных площадок - как в предыдущем тарифе, но с большим вниманием к тем страницам, которые должны удерживать лидерство.",
        "Добавляем более дорогие и сильные ссылки: размещения в медиа, новостях, блогах и экспертных материалах, которые усиливают бренд и дают качественные упоминания.",
        "Ежемесячно расширяем сайт: новые страницы услуг, разделы блога, ответы на вопросы и другие форматы контента, чтобы закреплять и наращивать присутствие в поиске.",
      ],
      getTitle: "Что вы получаете",
      getItems: [
        "Лидирующие позиции в картах и органическом поиске.",
        "Максимальный поток качественных, целевых клиентов.",
        "Бренд, который выбирают чаще конкурентов.",
      ],
      note: "Подходит, когда предыдущие шаги уже закрыты и нужно доминировать в нише.",
      costLabel: "Стоимость:",
      costValue: "$700–900 / месяц",
      cta: "Обсудить тариф",
    },
    sections: {
      changesTitle: "Что меняется для вас на уровне «Лидера рынка»",
      changesBody:
        "Здесь речь уже не о том, чтобы «просто получать клиентов из поиска и карт». На этом уровне задача - закрепить доминирование: занимать верхние позиции по ключевым запросам, быть заметнее конкурентов и сформировать образ бренда по умолчанию.",
      changesBullets: [
        "вы присутствуете не только в картах и выдаче, но и в медиа, обзорах, подборках;",
        "бренд чаще всплывает в голове у клиентов, когда они думают о вашей услуге;",
        "поисковые системы видят устойчивую, постоянно растущую активность вокруг проекта;",
        "конкурентам становится трудно «выбить» вас из топа без серьёзных вложений.",
      ],

      synergyTitle: "Как вместе работают SEO, ссылки и медиа‑присутствие",
      synergyBody:
        "На уровне «Лидера рынка» мы не разделяем SEO, ссылки и репутацию на отдельные задачи. Это одна стратегия: сайт и карты дают основу, ссылки усиливают авторитет, медиа и отзывы - доверие.",
      synergyBullets: [
        "полностью закрытые базовые вещи: структура сайта, техническое SEO, карточки;",
        "устойчивая «сетка» белых ссылок с релевантных площадок;",
        "точечные сильные размещения в новостях, блогах, отраслевых медиа;",
        "контент, который показывает экспертность и даёт поводы ссылаться на вас.",
      ],

      processTitle: "Как проходит работа по тарифу «Лидер рынка»",
      processSteps: [
        {
          number: "01",
          title: "Диагностика позиции",
          text: "Смотрим, по каким запросам вы уже сильны, где находитесь рядом с топом и какие направления потенциально могут стать точками роста.",
        },
        {
          number: "02",
          title: "Стратегия доминирования",
          text: "Определяем ключевые запросы и кластеры, где вы должны быть №1, распределяем роли между сайтом, картами, медиа и контентом.",
        },
        {
          number: "03",
          title: "Полное покрытие страниц",
          text: "Проходимся по всем важным разделам сайта: услуги, локации, кейсы, FAQ, блог - приводим их к уровню, соответствующему лидеру.",
        },
        {
          number: "04",
          title: "Ссылочное и окружение",
          text: "Продолжаем white‑hat ссылочную стратегию и добавляем более сильные размещения: медиа, обзоры, подборки, экспертные статьи.",
        },
        {
          number: "05",
          title: "Контент‑план и выпуск",
          text: "Ежемесячно выпускаем новые материалы: статьи, ответы на вопросы, обновления страниц услуг, чтобы закреплять рост видимости и давать поиску свежие сигналы.",
        },
        {
          number: "06",
          title: "Мониторинг конкурентов",
          text: "Регулярно смотрим, что делают сильные игроки в нише, и корректируем стратегию, чтобы сохранять отрыв.",
        },
      ],

      fromYouTitle: "Что важно с вашей стороны",
      fromYouItems: [
        "готовность вкладываться в долгосрочный результат, а не только в быстрые заявки;",
        "понятное видение, в каких сегментах и городах вы хотите быть №1;",
        "открытость к доработке продукта/сервиса, если это всплывает из отзывов и аналитики;",
        "контакт с человеком, который может согласовывать контент и публичные размещения;",
        "готовность показывать кейсы, цифры и реальные истории клиентов.",
      ],

      mistakesTitle:
        "Типичные ошибки компаний, которые хотят стать «лидерами рынка»",
      mistakesItems: [
        "ожидание быстрых чудес от одного‑двух месяцев работы вместо принятия того, что лидерство - это марафон;",
        "ставка только на рекламу без укрепления органики, ссылок и бренда;",
        "отсутствие единой стратегии: разные подрядчики тянут в разные стороны, нет общего плана;",
        "экономия на контенте и ссылках там, где конкуренты, наоборот, вкладываются в сильные размещения;",
        "«затыкание дыр» вместо планомерной работы по ключевым кластерам запросов.",
      ],

      faqTitle: "Частые вопросы про тариф «Лидер рынка»",
      faqItems: [
        {
          q: "Сколько времени занимает выход на уровень «лидера рынка»?",
          a: "Обычно речь идёт о горизонте от 6 до 18 месяцев: всё зависит от ниши, конкуренции и исходной точки. Мы планируем работу поквартально и смотрим на динамику по ключевым кластерам запросов.",
        },
        {
          q: "Подойдёт ли этот тариф, если у нас ещё нет стабильного потока из SEO?",
          a: "Тариф «Лидер рынка» эффективнее всего работает, когда базовые шаги уже закрыты: настроены карты, есть сайт и стабильные заявки. Если вы только начинаете, логичнее пройти предыдущие шаги.",
        },
        {
          q: "Насколько глубоко вы вмешиваетесь в продукт и процессы?",
          a: "Мы можем подсвечивать точки роста: цены, формат услуг, упаковка предложений. Решения по продукту остаются за вами, но мы регулярно даём рекомендации на основе аналитики и поведения клиентов.",
        },
        {
          q: "Что если конкуренты тоже начнут активно вкладываться?",
          a: "Мы регулярно мониторим ключевых игроков и корректируем стратегию: усиливаем сильные стороны, закрываем новые запросы, расширяем контент и ссылочное. Цель тарифа - удерживать отрыв, а не один раз выйти в топ.",
        },
      ],

      diyTitle: "Если вы хотите двигаться к лидерству самостоятельно",
      diyIntro:
        "Даже без максимального тарифа вы можете постепенно выстраивать стратегии, которые ведут к доминированию в нише. Ниже - упрощённая, но рабочая дорожная карта с мини-чек-листами.",
    },
    howToSteps: [
      {
        id: "step1-directions",
        title: "Шаг 1. Выберите направления, где вы хотите быть №1",
        description:
          "Лидерство невозможно «везде». Оно строится по приоритетным кластерам запросов и географий.",
        items: [
          "Определите 10–20 ключевых запросов и направлений, которые должны приносить основной поток.",
          "Отберите города Беларуси (Минск, Брест, Гомель, Гродно, Могилёв) или районы, где вы готовы реально конкурировать.",
          "Сравните себя с главными игроками: где вы можете догнать и перегнать быстрее всего.",
          "Зафиксируйте список направлений доминирования на белорусском рынке на год вперёд.",
          "Выбраны приоритетные запросы и географии.",
          "Понятно, с кем вы конкурируете в каждом кластере.",
          "Зафиксирован пул направлений, где вы будете строить лидерство.",
          "Есть долгосрочная цель на 12–24 месяца.",
        ],
      },
      {
        id: "step2-benchmark-pages",
        title: "Шаг 2. Приведите ключевые страницы к уровню «эталона рынка»",
        description:
          "На уровне лидера выигрывает тот, у кого страницы по структуре, полноте и экспертности сильнее конкурентных.",
        items: [
          "Проанализируйте топ-3 по вашим ключевым запросам.",
          "Сравните вашу страницу со страницами конкурентов: полнота темы, примеры работ, подача деталей, экспертность.",
          "Добавьте сильные блоки: кейсы, фотографии, схемы, ответы на возражения, сравнения.",
          "Создайте расширенный FAQ и внутреннюю сетку ссылок.",
          "Ваша страница информативнее и глубже, чем у конкурентов.",
          "Есть наглядные примеры, цифры, кейсы.",
          "Добавлены экспертные блоки и ответы на возражения.",
          "Страница технически и визуально сильнее, чем прежде.",
        ],
      },
      {
        id: "step3-brand-environment",
        title:
          "Шаг 3. Постройте окружение вокруг бренда: упоминания, цитируемость, медиа",
        description:
          "Лидером считается тот, о ком говорят не только в поиске, но и за его пределами.",
        items: [
          "Начните с лёгких упоминаний: отраслевые каталоги, локальные ресурсы, профильные подборки.",
          "Перейдите к гостевым материалам: статьи, комментарии, рекомендации экспертов.",
          "Добавьте медиа: новостные размещения, обзоры, интервью.",
          "Формируйте инфоповоды: кейсы, исследования, отраслевые наблюдения.",
          "Есть сетка базовых белых ссылок.",
          "Появились первые гостевые материалы или интервью.",
          "Публикации несут пользу и усиливают бренд.",
          "Инфоповоды формируются минимум раз в месяц.",
        ],
      },
      {
        id: "step4-expert-content",
        title: "Шаг 4. Развивайте экспертный контент - так делают все лидеры",
        description:
          "Экспертный контент - один из ключевых факторов укрепления лидирующих позиций.",
        items: [
          "Публикуйте материалы, на которые могут ссылаться другие сайты: разборы кейсов, сложные вопросы клиентов, инструкции, обзоры.",
          "Делайте статьи глубже, чем у конкурентов: больше данных, деталей, опыта.",
          "Добавляйте авторские комментарии и реальные примеры.",
          "В месяц выходит хотя бы один крупный экспертный материал.",
          "У материалов есть автор, позиция, реальный опыт.",
          "Контент получает сохранения, цитирование, перепосты.",
          "Каждая статья усиливает ключевые направления продвижения.",
        ],
      },
      {
        id: "step5-site-scale",
        title: "Шаг 5. Расширяйте сайт - лидеры растут вширь и вглубь",
        description:
          "Лидер не может жить на 10 страницах: нужна масштабная, постоянно растущая структура.",
        items: [
          "Создавайте новые страницы под подуслуги, форматы работ, ответы на вопросы.",
          "Добавляйте региональные варианты: районы, города, локации.",
          "Регулярно обновляйте существующие страницы, улучшая качество информации.",
          "Создайте раздел кейсов и регулярно пополняйте его.",
          "Структура сайта расширяется каждый месяц.",
          "Добавлены страницы под реальные запросы.",
          "Регулярно обновляются старые материалы.",
          "Есть растущий раздел кейсов.",
        ],
      },
      {
        id: "step6-competitor-monitoring",
        title: "Шаг 6. Настройте систему мониторинга конкурентов",
        description:
          "На уровне лидерства важно смотреть не только на себя, но и на других игроков в нише.",
        items: [
          "Отслеживайте, что публикуют конкуренты: новые страницы, кейсы, медийные размещения, обновления структуры.",
          "Сравнивайте свои и их позиции раз в месяц.",
          "Реагируйте стратегически: усиливайте только то, что влияет на лидирующие направления.",
          "Появилась таблица мониторинга.",
          "Вы видите точные различия между вами и конкурентами.",
          "Реагируете только на данные, а не эмоции.",
          "Понимаете, куда конкуренты вкладываются.",
        ],
      },
      {
        id: "step7-synergy-cycle",
        title:
          "Шаг 7. Сформируйте единый контент-, ссылочный- и репутационный цикл",
        description:
          "Синергия каналов - главный инструмент лидеров рынка: всё работает на общую стратегию.",
        items: [
          "Каждый месяц выпускайте 1–3 экспертные публикации.",
          "Создавайте 2–4 новые страницы или серьёзные обновления существующих.",
          "Получайте 2–6 ссылок от безопасных и сильных площадок.",
          "Организуйте 1–2 медиа/гостевых материала.",
          "Обновляйте профили в Google/Яндекс.",
          "Следите за динамикой: как растут запросы, какие страницы укрепляются, где вы уже догнали конкурентов.",
          "Есть месячный план работ.",
          "Рост видимости фиксируется каждые 30 дней.",
          "Активности движут вас к лидерству, а не делаются «для галочки».",
        ],
      },
    ],
    highlightedPackage: "Лидер рынка",
  },

  il: {
    backBtn: { text: "לשירותים", alternative: "/#services" },
    hero: {
      title: "«מוביל שוק» - דומיננטיות בחיפוש ובמפות בישראל",
      intro:
        "חבילה מקסימלית למי שמוכן להשקיע ב‑SEO, תוכן, קישורים ומוניטין כדי להוביל את הנישה בישראל - עם דגש על Google, Waze ו‑Apple Maps.",
    },
    card: {
      title: "מוביל שוק",
      subtitle: "שלב 4 · דומיננטיות מול מתחרים",
      forWhoTitle: "למי זה מתאים",
      forWhoBody:
        "לעסקים שכבר מקבלים פניות יציבות מחיפוש ומפות, ורוצים לתפוס את המקומות המובילים, לחזק מותג וליצור פער לטווח ארוך.",
      doTitle: "מה אנחנו עושים",
      doItems: [
        "מטפלים ב‑SEO ברמת פרויקט: כל עמוד חשוב באתר וכל נקודת נוכחות במפות מקבלת אופטימיזציה לפי הכוונה שלה.",
        "ממשיכים בניית סמכות (white‑hat) מאתרים איכותיים ורלוונטיים - עם פוקוס על העמודים שצריכים להחזיק את ההובלה.",
        "מוסיפים אזכורים חזקים יותר: כתבות, ראיונות, סקירות ופרסומים שמחזקים מותג.",
        "מרחיבים את האתר מדי חודש: עמודי שירות, בלוג, FAQ ותוכן שמייצר אותות טריים.",
      ],
      getTitle: "מה אתם מקבלים",
      getItems: [
        "מיקומים מובילים בחיפוש האורגני ובמפות.",
        "מקסימום זרם של לקוחות איכותיים.",
        "מותג שבוחרים בו יותר מהמתחרים.",
      ],
      note: "מתאים כששלבים קודמים כבר עובדים ורוצים להוביל את הנישה.",
      costLabel: "עלות:",
      costValue: "$700–900 / חודש",
      cta: "נדבר על החבילה",
    },
    sections: {
      changesTitle: "מה משתנה ברמת «מוביל שוק»",
      changesBody:
        'כאן המטרה היא לא רק לקבל לקוחות - אלא לקבע דומיננטיות: להוביל בשאילתות המרכזיות, להיות בולט יותר מהמתחרים ולהפוך ל"בחירה ברירת מחדל".',
      changesBullets: [
        "אתם נוכחים לא רק בחיפוש ובמפות אלא גם במדיה ובסקירות;",
        "המותג עולה לראש כשלקוחות חושבים על השירות;",
        "מנועי חיפוש רואים פעילות מתמשכת סביב העסק;",
        "למתחרים קשה לעקוף בלי השקעה משמעותית.",
      ],

      synergyTitle: "איך SEO, קישורים ומדיה עובדים יחד",
      synergyBody:
        "ברמת מוביל שוק זו אסטרטגיה אחת: האתר והנוכחות במפות הם הבסיס, קישורים ואזכורים מחזקים סמכות, וביקורות בונות אמון.",
      synergyBullets: [
        "בסיס טכני ומבני סגור;",
        "קישורים איכותיים עקביים;",
        "פרסומים חזקים במדיה נישתית/חדשותית;",
        "תוכן מומחה שמביא אזכורים.",
      ],

      processTitle: "איך העבודה מתבצעת",
      processSteps: [
        {
          number: "01",
          title: "אבחון",
          text: "בדיקת חוזקות, פערים ונקודות צמיחה.",
        },
        {
          number: "02",
          title: "אסטרטגיה",
          text: "בחירת קלאסטרים שבהם חייבים להיות #1.",
        },
        {
          number: "03",
          title: "כיסוי עמודים",
          text: "שדרוג שירותים/אזורים/בלוג/FAQ לרמת מוביל.",
        },
        {
          number: "04",
          title: "קישורים ומדיה",
          text: "white‑hat + אזכורים חזקים יותר.",
        },
        {
          number: "05",
          title: "תוכן חודשי",
          text: "מאמרים, עדכונים ושדרוג עמודים.",
        },
        {
          number: "06",
          title: "מעקב מתחרים",
          text: "ניטור מתחרים והתאמת אסטרטגיה.",
        },
      ],

      fromYouTitle: "מה חשוב מצדכם",
      fromYouItems: [
        "גישה לטווח ארוך, לא רק לידים מהירים;",
        "הבנה באילו ערים/סגמנטים רוצים להוביל;",
        "פתיחות לשיפור מוצר/שירות בהתאם לביקורות ונתונים;",
        "איש קשר שמאשר תוכן ופרסומים;",
        "נכונות להציג קייסים ומספרים אמיתיים.",
      ],

      mistakesTitle: "טעויות נפוצות",
      mistakesItems: [
        "ציפייה לקסם תוך חודש‑חודשיים במקום תהליך;",
        "להסתמך רק על פרסום ממומן בלי לבנות אורגני ומותג;",
        "אין אסטרטגיה אחת - כמה ספקים מושכים לכיוונים שונים;",
        "חיסכון בתוכן/קישורים דווקא איפה שמתחרים משקיעים;",
        '"כיבוי שריפות" במקום עבודה שיטתית.',
      ],

      faqTitle: "שאלות נפוצות",
      faqItems: [
        {
          q: "כמה זמן לוקח להגיע לרמת מוביל שוק?",
          a: "בדרך כלל 6–18 חודשים - תלוי נישה, תחרות ונקודת התחלה. עובדים לפי רבעונים ומודדים קלאסטרים מרכזיים.",
        },
        {
          q: "זה מתאים אם עדיין אין זרם יציב מ‑SEO?",
          a: "החבילה עובדת הכי טוב אחרי שהבסיס מסודר (מפות + אתר + פניות). אם אתם בתחילת הדרך, עדיף להתחיל בשלבים הקודמים.",
        },
        {
          q: "עד כמה אתם נכנסים למוצר ולתהליך?",
          a: "אנחנו מציפים נקודות צמיחה לפי נתונים והתנהגות, אבל ההחלטות על המוצר נשארות אצלכם.",
        },
        {
          q: "מה אם מתחרים גם יתחילו להשקיע?",
          a: "אנחנו מנטרים ומעדכנים אסטרטגיה: סוגרים שאילתות חדשות, מרחיבים תוכן וסמכות כדי לשמור יתרון.",
        },
      ],

      diyTitle: "אם רוצים להתקדם לבד",
      diyIntro:
        "גם בלי החבילה המקסימלית אפשר לבנות תהליך שמוביל לדומיננטיות. להלן צ'ק‑ליסטים קצרים לביצוע עצמי.",
    },
    howToSteps: [
      {
        id: "step1-directions",
        title: "שלב 1. בחרו תחומים שבהם רוצים להיות #1",
        description: "אי אפשר להוביל בכל מקום - בוחרים קלאסטרים ואזורים.",
        items: [
          "בחרו 10–20 שאילתות/שירותים שמביאים את רוב ההכנסות.",
          "בחרו ערים בישראל (תל אביב, חיפה, ירושלים, ראשון לציון ועוד) או שכונות שבהן מתחרים באמת.",
          "השוו מול מובילי השוק וחפשו איפה אפשר לסגור פערים מהר.",
          "קבעו רשימת כיווני דומיננטיות לשנה קדימה.",
          "יש רשימת מטרות ברורה.",
          "ברור מול מי מתחרים.",
          "יש קלאסטרים מוגדרים.",
          "מטרה ל‑12–24 חודשים.",
        ],
      },
      {
        id: "step2-benchmark-pages",
        title: 'שלב 2. הביאו עמודים מרכזיים לרמת "סטנדרט שוק"',
        description: "מנצח מי שיותר מקיף ומומחה.",
        items: [
          "נתחו את ה‑top 3 לשאילתות המרכזיות.",
          "השוו עומק, דוגמאות, פרטים ואמינות.",
          "הוסיפו קייסים, תמונות, סכמות, תשובות להתנגדויות.",
          "בנו FAQ וקישורים פנימיים.",
          "העמוד שלכם עמוק יותר משל המתחרים.",
          "יש דוגמאות ומספרים.",
          "יש בלוקים מומחים.",
          "העמוד חזק יותר טכנית וויזואלית.",
        ],
      },
      {
        id: "step3-brand-environment",
        title: "שלב 3. בנו סביבת מותג: אזכורים ומדיה",
        description: "מוביל שוק מדברים עליו גם מחוץ לחיפוש.",
        items: [
          "התחילו באזכורים קלים: קטלוגים וקהילות.",
          "עברו לאורחים/ראיונות/ציטוטים.",
          "הוסיפו פרסומי מדיה.",
          "צרו סיבות לדבר עליכם: מחקר, קייסים, תובנות.",
          "יש רשת קישורים בסיסית.",
          "יש פרסומים ראשונים.",
          "התוכן מועיל למותג.",
          "יש לפחות אינפופובד אחד בחודש.",
        ],
      },
      {
        id: "step4-expert-content",
        title: "שלב 4. תוכן מומחה",
        description: "תוכן מומחה מחזק הנהגה.",
        items: [
          "פרסמו מדריכים, שאלות מורכבות, סקירות.",
          "כתבו עמוק יותר מהמתחרים.",
          "הוסיפו דוגמאות אמיתיות.",
          "לפחות פרסום מומחה אחד בחודש.",
          "יש מחבר ומומחיות.",
          "התוכן מצוטט.",
          "כל מאמר מחזק קלאסטר.",
        ],
      },
      {
        id: "step5-site-scale",
        title: "שלב 5. הרחבת אתר",
        description: "מובילים גדלים במבנה ותוכן.",
        items: [
          "עמודים לשירותי משנה ושאלות.",
          "וריאציות אזוריות.",
          "עדכונים שוטפים.",
          "אזור קייסים מתרחב.",
          "האתר גדל כל חודש.",
          "עמודים לפי שאילתות אמיתיות.",
          "עדכון חומרים ישנים.",
          "יש קייסים.",
        ],
      },
      {
        id: "step6-competitor-monitoring",
        title: "שלב 6. ניטור מתחרים",
        description: "בודקים גם אחרים.",
        items: [
          "עקבו אחרי עמודים ופרסומים חדשים.",
          "השוו מיקומים מדי חודש.",
          "הגיבו אסטרטגית.",
          "יש טבלת ניטור.",
          "רואים הבדלים.",
          "מגיבים לפי נתונים.",
          "מבינים איפה מתחרים משקיעים.",
        ],
      },
      {
        id: "step7-synergy-cycle",
        title: "שלב 7. מחזור תוכן/קישורים/מוניטין",
        description: "סינרגיה חודשית.",
        items: [
          "1–3 פרסומים מומחים בחודש.",
          "2–4 עמודים חדשים/עדכונים.",
          "2–6 קישורים איכותיים.",
          "1–2 פרסומים אורחים/מדיה.",
          "עדכון פרופילים ב‑Google.",
          "מעקב דינמיקה.",
          "תכנית חודשית.",
          "מדידה כל 30 יום.",
          "הפעילות מקדמת מטרה.",
        ],
      },
    ],
    highlightedPackage: "מוביל שוק",
  },

  en: {
    backBtn: { text: "Back to services", alternative: "/#services" },
    hero: {
      title: '"Market Leader" - dominate local search (U.S.)',
      intro:
        "The top-tier package for businesses ready to invest in SEO, authority building, content, and reputation to outrank competitors in the U.S. U.S.-relevant platforms and PR outlets only.",
    },
    card: {
      title: "Market Leader",
      subtitle: "Step 4 · Competitive dominance",
      forWhoTitle: "Who this is for",
      forWhoBody:
        "For businesses already generating consistent leads from search and maps, and now aiming to win the top spots, strengthen the brand, and build a durable gap vs competitors.",
      doTitle: "What we do",
      doItems: [
        "Run SEO at the project level: every key page and section is optimized around intent and competitive benchmarks.",
        "Continue a safe authority strategy (white-hat links) with extra focus on the pages that must hold leadership.",
        "Add stronger placements: PR mentions, interviews, reviews, and expert features that build brand signals.",
        "Scale the site monthly: new service pages, blog content, FAQs, and updates that keep rankings growing.",
      ],
      getTitle: "What you get",
      getItems: [
        "Top positions in organic search and maps.",
        "Maximum volume of qualified leads.",
        "A brand customers choose more often than competitors.",
      ],
      note: "Best when previous steps are done and you want to dominate the niche.",
      costLabel: "Price:",
      costValue: "$700–900 / month",
      cta: "Talk about the plan",
    },
    sections: {
      changesTitle: "What changes at the Market Leader level",
      changesBody:
        'This is no longer about "getting some leads" - it’s about locking in dominance: owning the core queries, being the default choice, and making it expensive for competitors to catch up.',
      changesBullets: [
        "you show up not only in search and maps, but also in media and industry roundups;",
        "your brand becomes top-of-mind;",
        "search engines see sustained growth activity;",
        "competitors struggle to displace you without major investment.",
      ],

      synergyTitle: "How SEO, authority, and PR work together",
      synergyBody:
        "At the Market Leader level it’s one strategy: technical foundation + content + authority signals + reputation proof.",
      synergyBullets: [
        "core foundations are fully covered (structure, technical SEO, listings);",
        "a consistent stream of white-hat links;",
        "selective stronger placements in niche media and publications;",
        "expert content that earns citations.",
      ],

      processTitle: "How the work is delivered",
      processSteps: [
        {
          number: "01",
          title: "Position diagnosis",
          text: "Map strengths, near-top opportunities, and growth areas.",
        },
        {
          number: "02",
          title: "Dominance strategy",
          text: "Pick the clusters where you must be #1 and align site/PR/content.",
        },
        {
          number: "03",
          title: "Full page coverage",
          text: "Upgrade services, locations, cases, FAQ, blog to leader-level depth.",
        },
        {
          number: "04",
          title: "Authority & environment",
          text: "White-hat links + stronger editorial/PR placements.",
        },
        {
          number: "05",
          title: "Monthly content output",
          text: "Publish and refresh pages to keep momentum.",
        },
        {
          number: "06",
          title: "Competitor monitoring",
          text: "Track key competitors and adjust to keep the gap.",
        },
      ],

      fromYouTitle: "What we need from you",
      fromYouItems: [
        "commitment to long-term outcomes (not just quick wins);",
        "clarity on which cities/segments you want to lead in;",
        "openness to improving the offer based on reviews and data;",
        "a point person who can approve content and public placements;",
        "willingness to share real case studies and numbers.",
      ],

      mistakesTitle: "Common mistakes",
      mistakesItems: [
        "expecting results in 1–2 months instead of treating leadership as a marathon;",
        "relying only on paid ads without building organic authority;",
        "no single strategy (multiple vendors pulling in different directions);",
        "cutting content/authority budgets while competitors invest;",
        "patching holes instead of systematic work on core clusters.",
      ],

      faqTitle: "Market Leader FAQ",
      faqItems: [
        {
          q: "How long does it take to reach a market leader level?",
          a: "Typically 6–18 months depending on niche, competition, and starting point. We plan quarterly and track the core clusters.",
        },
        {
          q: "Is this right if we don’t have steady SEO leads yet?",
          a: "It works best after the foundations are in place (listings + site + baseline leads). If you’re starting, earlier steps are usually more efficient.",
        },
        {
          q: "How deep do you go into the product and operations?",
          a: "We highlight opportunities (pricing, packaging, UX), but product decisions remain yours. Recommendations are data-driven.",
        },
        {
          q: "What if competitors ramp up their investment too?",
          a: "We actively monitor and adapt: cover new queries, expand content, and strengthen authority so you maintain the gap.",
        },
      ],

      diyTitle: "If you want to work toward leadership yourself",
      diyIntro:
        "Even without the top-tier plan, you can build a path toward dominance. Below is a simplified but practical roadmap with mini checklists.",
    },
    howToSteps: [
      {
        id: "step1-directions",
        title: "Step 1. Choose the clusters where you want to be #1",
        description:
          "Leadership can’t be everywhere - it’s built around priority query clusters and service areas.",
        items: [
          "Pick 10–20 core queries/services that drive most revenue.",
          "Select U.S. cities/areas you want to compete in (e.g., NYC, Austin, Miami) or specific neighborhoods.",
          "Benchmark against leaders and identify the fastest paths to close the gap.",
          "Lock a one-year dominance target list.",
          "Priority clusters are selected.",
          "Competitors are identified per cluster.",
          "Leadership directions are documented.",
          "You have a 12–24 month goal.",
        ],
      },
      {
        id: "step2-benchmark-pages",
        title: "Step 2. Bring key pages up to market-benchmark level",
        description:
          "At the leader level, the best pages win on depth, proof, and clarity.",
        items: [
          "Analyze the top 3 results for core queries.",
          "Compare depth, proof, structure, and expertise.",
          "Add strong blocks: case studies, photos, diagrams, objections, comparisons.",
          "Build a robust FAQ and internal link network.",
          "Your page is deeper than competitors.",
          "You have proof and numbers.",
          "Expert blocks are added.",
          "Page is stronger technically and visually.",
        ],
      },
      {
        id: "step3-brand-environment",
        title: "Step 3. Build brand environment: mentions, citations, PR",
        description: "Leaders are talked about outside of search too.",
        items: [
          "Start with easy mentions: niche directories and local resources.",
          "Move to guest contributions and expert comments.",
          "Add PR: news features, interviews, reviews.",
          "Create story hooks: case studies, research, insights.",
          "Baseline link network exists.",
          "First guest/PR placements appear.",
          "Placements reinforce the brand.",
          "You publish at least one story hook per month.",
        ],
      },
      {
        id: "step4-expert-content",
        title: "Step 4. Grow expert content",
        description: "Expert content is a major leadership driver.",
        items: [
          "Publish materials others can cite: case breakdowns, complex Q&A, guides.",
          "Write deeper than competitors: more data, details, experience.",
          "Add original commentary and real examples.",
          "At least one substantial expert piece per month.",
          "Clear author and expertise.",
          "Content earns saves/citations/shares.",
          "Each piece strengthens priority clusters.",
        ],
      },
      {
        id: "step5-site-scale",
        title: "Step 5. Scale your site",
        description: "Leaders grow in breadth and depth.",
        items: [
          "Create pages for sub-services and formats.",
          "Add city/area variants.",
          "Refresh key pages regularly.",
          "Build and grow a case studies section.",
          "Site expands monthly.",
          "Pages match real queries.",
          "Old content is refreshed.",
          "Case studies grow.",
        ],
      },
      {
        id: "step6-competitor-monitoring",
        title: "Step 6. Set up competitor monitoring",
        description: "At this level you watch the market, not only yourself.",
        items: [
          "Track competitor content: pages, cases, PR, structure updates.",
          "Compare rankings monthly.",
          "React strategically - only where it impacts leadership clusters.",
          "Monitoring spreadsheet exists.",
          "You see exact differences.",
          "Decisions are data-driven.",
          "You understand competitor investments.",
        ],
      },
      {
        id: "step7-synergy-cycle",
        title:
          "Step 7. Build a combined content + authority + reputation cycle",
        description: "Channel synergy is the core leader tool.",
        items: [
          "Publish 1–3 expert pieces per month.",
          "Create 2–4 new pages or major updates.",
          "Earn 2–6 links from safe, strong sources.",
          "Run 1–2 PR/guest features.",
          "Keep listings active (Google).",
          "Track which queries and pages grow.",
          "You have a monthly plan.",
          "Growth is reviewed every 30 days.",
          "Work drives leadership, not busywork.",
        ],
      },
    ],
    highlightedPackage: "Market Leader",
  },
};

export default content;
