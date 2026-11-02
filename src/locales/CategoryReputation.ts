export type HowToStep = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type FaqItem = { q: string; a: string };

export type ChartStrings = {
  title: string;
  legendSeo: string;
  legendPpc: string;
  xTickMonthSuffix: string;
  tooltipMonthLabel: string;
  currencySuffix: string;
  yTickFormat: (v: number) => string;
  tooltipValueFormat: (v: number) => string;
};

export type CategoryReputationContent = {
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

    machineTitle: string;
    machineItems: Array<{
      title: string;
      bullets?: string[];
      body?: string;
      extra?: string;
    }>;

    whySeoTitle: string;
    whySeoBody: string[];

    semanticTitle: string;
    semanticIntro: string;
    semanticBullets: string[];
    semanticExample: string;

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
    monthlyAlgoTitle: string;
    monthlyAlgoItems: string[];
  };
  chart: ChartStrings;
  highlightedPackage: string;
  howToSteps: HowToStep[];
};

const content: Record<"by" | "il" | "en", CategoryReputationContent> = {
  by: {
    backBtn: { text: "К услугам", alternative: "/#services" },
    hero: {
      title: "«Постоянный поток клиентов» - рост позиций и заявок",
      intro:
        "Тариф для бизнеса, который уже присутствует в картах и поиске, но хочет стабильной первой страницы и регулярных обращений.",
    },
    card: {
      title: "Постоянный поток клиентов",
      subtitle: "Шаг 3 · Активное продвижение в поиске и картах",
      forWhoTitle: "Для кого этот тариф",
      forWhoBody:
        "Для компаний, у которых уже есть настроенные профили и сайт, но не хватает видимости и стабильного потока обращений из поиска и карт.",
      doTitle: "Что мы делаем",
      doItems: [
        "Улучшаем позиции в Google и Яндексе по целевым запросам.",
        "Добавляем локальные сигналы: контент, упоминания, микроссылки и другие SEO-факторы.",
        "Ежемесячно добавляем 3 белых обратных ссылки (white‑hat) с релевантных площадок.",
        "Поддерживаем и регулярно оптимизируем ваш профиль.",
      ],
      getTitle: "Что вы получаете",
      getItems: [
        "Стабильное присутствие на первой странице выдачи.",
        "Регулярные звонки и заявки из поиска и карт.",
      ],
      note: "Лучше всего работает, когда база уже настроена (шаги 1–2).",
      costLabel: "Стоимость:",
      costValue: "$300 / месяц",
      cta: "Обсудить тариф",
    },
    sections: {
      changesTitle: "Что меняется для вас после подключения SEO‑сопровождения",
      changesBody:
        "Этот этап - про регулярную работу с поиском. Мы не «один раз всё настроили и забыли», а шаг за шагом расширяем видимость по всё большему количеству запросов и удерживаем позиции.",
      changesBullets: [
        "вы начинаете получать обращения не только по брендовым, но и по общим запросам;",
        "каждый месяц появляется всё больше комбинаций «услуга + район/город», по которым вы видны;",
        "сайт обрастает полезными страницами, отвечающими на реальные вопросы клиентов;",
        "поиск видит вас как устойчивого, развивающегося игрока, а не случайный сайт.",
      ],

      machineTitle: "Что входит в «SEO‑машину заявок»",
      machineItems: [
        {
          title: "Полное SEO‑сопровождение сайта (30–50 страниц).",
          bullets: [
            "каждый месяц обновляем ключевые страницы;",
            "дорабатываем заголовки, блоки, тексты;",
            "расширяем семантику;",
            "улучшаем внутреннюю перелинковку;",
            "следим за скоростью, индексацией, отчётами GA / Search Console / Метрики.",
          ],
          extra:
            "Страницы не простаивают - они растут, обновляются и укрепляют позиции.",
        },
        {
          title: "Управление отзывами и улучшение репутации.",
          bullets: [
            "ежемесячно отвечаем на новые отзывы (Google / Яндекс);",
            "инициируем получение новых отзывов;",
            "работаем с негативом;",
            "корректируем фото, атрибуты, режимы и описания;",
            "следим за совпадением NAP.",
          ],
          extra:
            "Это даёт постоянный рост доверия и локальный вес в ранжировании.",
        },
        {
          title: "Рост позиций в Google / Яндекс.",
          bullets: [
            "каждый месяц анализируем топы;",
            "выявляем запросы, которые «висят» на 8–20 местах, и подталкиваем страницы в топ;",
            "добавляем новые кластеры запросов;",
            "закрываем пробелы: создаём страницы под новые подуслуги, районы, вариации запросов.",
          ],
        },
        {
          title: "Ежемесячные «белые» ссылки (white‑hat).",
          body: "3 ссылки в месяц с тематических каталогов, блогов, локальных ресурсов и партнёрских площадок.",
          extra:
            "Чистая, безопасная ссылка - это аккуратный рост авторитета, без риска для сайта.",
        },
        {
          title: "Еженедельные обновления профилей Google / Яндекс.",
          bullets: [
            "регулярные публикации и обновления;",
            "ответы на вопросы пользователей;",
            "обновления фото и медиа;",
            "мониторинг NAP и корректировка данных при необходимости.",
          ],
          extra:
            "Мы даём поисковикам сигнал: бизнес активен. Это усиливает и SEO, и локальную выдачу.",
        },
      ],

      whySeoTitle: "Почему SEO выгодно?",
      whySeoBody: [
        "Чем дольше мы продвигаем сайт, тем дешевле становится цена клика. К примеру, мы платим 1000 BYN за SEO и 1000 BYN за контекстную рекламу при поисковом трафике 2000 посетителей в месяц. Стоимость привлечения клиента из каждого канала условно равна 2 BYN за 1 переход.",
        "Через полгода продвижения из SEO приходит уже 3000 посетителей, и условная стоимость SEO‑клика становится около 0,3 BYN, в то время как стоимость клика из контекстной рекламы по‑прежнему держится около 2 BYN.",
        "Важно, что эффект SEO накапливается: страницы и позиции остаются работать даже если вы временно снижаете активность. Реклама же прекращает давать трафик сразу после остановки бюджета.",
      ],

      semanticTitle: "Семантическое ядро и 30–50 страниц услуг: что это даёт",
      semanticIntro:
        "Семантическое ядро - это список реальных поисковых запросов, по которым ваши клиенты ищут ваши услуги. Под эти запросы мы строим структуру сайта и создаём 30–50 сервисных страниц.",
      semanticBullets: [
        "ядро помогает не гадать, «как люди ищут», а опираться на факты;",
        "каждая страница затачивается под конкретную связку: услуга, город/район, иногда тип клиента;",
        "названия услуг на сайте совпадают с тем, как они указаны в Google и Яндекс картах;",
        "со временем это даёт устойчивую сетку входов: пользователи приходят не только на главную, но и прямо на нужную услугу.",
      ],
      semanticExample:
        "Пример: вместо одной общей страницы «Ремонт квартир» появляются отдельные: «Косметический ремонт квартир в Первомайском районе», «Капитальный ремонт в центре Минска», «Ремонт новостроек в Бресте» и т.п.",

      processTitle:
        "Как проходит работа по SEO‑тарифу «Постоянный поток клиентов»",
      processSteps: [
        {
          number: "01",
          title: "Аналитика и ядро",
          text: "Собираем семантическое ядро: какие запросы уже приводят трафик, какие ещё не охвачены, где есть быстрые возможности.",
        },
        {
          number: "02",
          title: "План структуры",
          text: "Раскладываем ядро по категориям и страницам: где нужны новые страницы, а где достаточно доработать существующие.",
        },
        {
          number: "03",
          title: "Создание и доработка 30–50 страниц",
          text: "Пишем и перерабатываем тексты так, чтобы они были полезны людям и понятны поиску.",
        },
        {
          number: "04",
          title: "Технические и структурные правки",
          text: "Чистим дубли, приводим в порядок заголовки, адреса страниц, внутренние ссылки.",
        },
        {
          number: "05",
          title: "Ежемесячная оптимизация",
          text: "Смотрим на позиции, клики и обращения, добавляем новые страницы, усиливаем те, что близки к топу.",
        },
      ],

      fromYouTitle: "Что нужно с вашей стороны",
      fromYouItems: [
        "список ключевых услуг и приоритетных направлений;",
        "города и районы, с которыми вы реально готовы работать;",
        "примерные средние чеки и форматы работ (минимальные заказы, пакеты);",
        "кейсы, фотографии, отзывы - чтобы подкреплять тексты реальными примерами;",
        "доступ или связка с тем, кто отвечает за сайт на вашей стороне.",
      ],

      mistakesTitle: "Типичные ошибки при самостоятельном SEO",
      mistakesItems: [
        "попытка продвинуть только главную страницу по всем запросам сразу;",
        "одинаковый текст на десятках страниц с разными районами - без реальной уникальности;",
        "игнорирование запросов, по которым люди уже приходят (нет анализа статистики);",
        "отсутствие связи между SEO и реальными целями бизнеса: продвигаются запросы, которые не приводят к заявкам;",
        "резкие, разовые изменения вместо аккуратной, но регулярной работы.",
      ],

      faqTitle: "Частые вопросы про тариф «Постоянный поток клиентов»",
      faqItems: [
        {
          q: "Сколько времени нужно, чтобы увидеть стабильный рост заявок?",
          a: "Обычно первые ощутимые результаты по позициям и обращениям появляются в пределах 3–6 месяцев. Дальше эффект накапливается за счёт контента, ссылок и регулярных доработок.",
        },
        {
          q: "Обязательно ли уже иметь 30–50 страниц, прежде чем подключать тариф?",
          a: "Не обязательно. В рамках тарифа мы как раз создаём и дорабатываем эти страницы. Важно, чтобы был базовый сайт, с которым можно работать.",
        },
        {
          q: "Что будет, если остановить SEO через несколько месяцев?",
          a: "Эффект SEO не обнуляется сразу: страницы и позиции продолжают работать. Но без доработок со временем рост замедляется, а конкуренты могут начать вас обгонять.",
        },
        {
          q: "Чем этот тариф отличается от просто увеличения бюджета на рекламу?",
          a: "Реклама даёт заявки, пока вы платите за клики. «Постоянный поток клиентов» строит органический канал: со временем стоимость обращения снижается, а видимость и доверие растут даже без постоянного докупания трафика.",
        },
      ],

      diyTitle: "Если вы хотите продвигаться сами",
      diyIntro:
        "Ниже - практичный мини-план того, как можно самостоятельно выстроить регулярный рост позиций и заявок. Это не заменит полноценное SEO-сопровождение, но поможет избежать типичных ошибок и получить первые результаты.",
      monthlyAlgoTitle: "Мини-алгоритм на каждый месяц",
      monthlyAlgoItems: [
        "Обновить 3–5 ключевых страниц.",
        "Создать 2–4 новых страницы под неохваченные запросы.",
        "Получить 1–3 безопасных ссылок.",
        "Обновить профили Google / Яндекс.",
        "Проверить позиции, клики и источники.",
        "Внести правки и подготовить задачи на следующий цикл.",
      ],
    },
    chart: {
      title: "Условная динамика стоимости клика",
      legendSeo: "SEO",
      legendPpc: "Реклама (PPC)",
      xTickMonthSuffix: " мес",
      tooltipMonthLabel: "месяц",
      currencySuffix: " BYN",
      yTickFormat: (v) => `${v} BYN`,
      tooltipValueFormat: (v) => `${v.toFixed(2)} BYN`,
    },
    highlightedPackage: "Постоянный поток",
    howToSteps: [
      {
        id: "step1-baseline",
        title: "Шаг 1. Зафиксируйте исходную точку: позиции, страницы, спрос",
        description:
          "Чтобы расти, важно понимать, откуда вы стартуете: какие позиции уже есть и что реально ищут клиенты.",
        items: [
          "Снимите текущие позиции по 30–70 основным запросам.",
          "Выпишите, какие страницы дают показы, а какие - нет.",
          "Отметьте запросы, где позиции застряли в зоне 8–20 - это самые быстрые точки роста.",
          "Посмотрите топ-10 конкурентов в вашем городе Беларуси: какие страницы у них есть, а у вас - нет.",
          "Есть список ключевых запросов.",
          "Сняты текущие позиции.",
          "Понятно, какие страницы требуют усиления.",
          "Составлен список конкурентов с сильными страницами.",
        ],
      },
      {
        id: "step2-strengthen-pages",
        title: "Шаг 2. Укрепите страницы, которые «почти в топе»",
        description:
          "Самый быстрый и дешёвый способ получить заявки - доработать страницы, которые уже близко к топу.",
        items: [
          "Откройте страницы, находящиеся на 8–20 местах.",
          "Добавьте уточняющие блоки: этапы, цены, примеры работ.",
          "Добавьте отвечающие на вопросы клиентов FAQ.",
          "Добавьте фото, схемы, чек-листы.",
          "Добавьте внутренние ссылки со смежных страниц.",
          "Обновите заголовки и подзаголовки под целевые запросы.",
          "На странице появились новые полезные блоки.",
          "Заголовки стали точнее.",
          "Есть внутренняя перелинковка.",
          "Страница стала визуально насыщенной и понятной.",
        ],
      },
      {
        id: "step3-new-pages",
        title: "Шаг 3. Создайте недостающие страницы под спрос",
        description:
          "Если под запрос нет страницы, поиск не сможет продвинуть вас по нему, даже при хорошем сайте.",
        items: [
          "Найдите запросы, по которым у конкурентов есть страницы, а у вас - нет.",
          "Создайте контент под конкретные связки: услуга, география, формат клиента, тип работ, условия.",
          "Стремитесь делать по 3–6 новых страниц в месяц.",
          "Созданы страницы под забытые направления.",
          "Нет общих страниц «на все случаи».",
          "Страницы отражают реальные формулировки из семантики.",
          "Добавлены CTA, контакты, примеры.",
        ],
      },
      {
        id: "step4-content-structure",
        title: "Шаг 4. Регулярно обновляйте контент и внутреннюю структуру",
        description:
          "Поиск любит активность и доработку: статичные сайты со временем вымываются из топа.",
        items: [
          "Раз в месяц обновляйте 3–5 ключевых страниц: добавляйте ответы на новые вопросы, уточняйте цены, добавляйте кейсы.",
          "Проверяйте дубли заголовков, URL и мета-описаний.",
          "Перепроверяйте внутренние ссылки: они должны логично соединять страницы одной группы.",
          "Ключевые страницы не стоят без обновлений.",
          "Дубли устранены.",
          "Структура сквозных ссылок стала понятнее.",
          "Есть план новых улучшений.",
        ],
      },
      {
        id: "step5-links",
        title: "Шаг 5. Добавляйте безопасные ссылки, но аккуратно",
        description:
          "Даже 2–3 качественные ссылки в месяц могут заметно ускорить рост, если они релевантны и естественны.",
        items: [
          "Ищите безопасные площадки: локальные каталоги, отраслевые ресурсы, мини-блоги.",
          "Старайтесь, чтобы ссылка стояла в контексте и выглядела естественно.",
          "Избегайте массового размещения, бирж и спам-каталогов.",
          "В месяц получено 1–3 аккуратных ссылок.",
          "Все ссылки релевантны вашему направлению.",
          "Нет подозрительных массовых размещений.",
        ],
      },
      {
        id: "step6-profiles",
        title: "Шаг 6. Работайте с профилями Google / Яндекс как с мини-блогом",
        description:
          "Активные профили в картах усиливают и SEO, и локальную выдачу: для алгоритмов это сигнал живого бизнеса.",
        items: [
          "Раз в 1–2 недели публикуйте посты: акции, работы, советы.",
          "Регулярно обновляйте фото и медиа.",
          "Отвечайте на все отзывы: и позитивные, и негативные.",
          "Проверяйте совпадение NAP со всем интернетом.",
          "Все отзывы обработаны.",
          "Появились новые публикации.",
          "Основные данные совпадают везде.",
          "Фото обновлены за последние 1–2 месяца.",
        ],
      },
      {
        id: "step7-analytics",
        title: "Шаг 7. Следите за аналитикой и принимайте решения по данным",
        description:
          "Рост происходит там, где вы регулярно смотрите на цифры и корректируете план, а не действуете наугад.",
        items: [
          "Раз в месяц снимайте новые позиции.",
          "Смотрите в GA/Метрике, какие страницы растут и откуда идут клики.",
          "Смотрите, какие регионы дают трафик и где есть потенциал.",
          "Пересматривайте план: добавьте ещё страницы, если запросов больше, чем входов.",
          "Раз в месяц фиксируется динамика.",
          "Понятно, какие страницы требуют усиления.",
          "Есть план на следующий месяц.",
          "Приняты решения на основе реальных данных, а не предположений.",
        ],
      },
    ],
  },

  il: {
    backBtn: { text: "לשירותים", alternative: "/#services" },
    hero: {
      title: "«זרם יציב» - יותר נראות ולידים מחיפוש (ישראל)",
      intro:
        "חבילה לעסקים שכבר קיימים במפות ובחיפוש, ורוצים נוכחות יציבה בעמוד הראשון ולידים באופן קבוע.",
    },
    card: {
      title: "זרם יציב",
      subtitle: "שלב 3 · צמיחה פעילה בחיפוש מקומי ובמפות",
      forWhoTitle: "למי זה מתאים",
      forWhoBody:
        "לעסקים עם אתר ופרופילים בסיסיים, אך בלי מספיק נראות וזרם עקבי של פניות מחיפוש ומפות.",
      doTitle: "מה אנחנו עושים",
      doItems: [
        "משפרים מיקומים ב‑Google לחיפושים רלוונטיים.",
        "מוסיפים אותות מקומיים: תוכן, אזכורים וקישורים עדינים.",
        "מוסיפים 3 קישורים איכותיים (white‑hat) בחודש.",
        "מתחזקים ומאופטימיזציה את הפרופיל במפות.",
      ],
      getTitle: "מה אתם מקבלים",
      getItems: [
        "נראות יציבה בעמוד הראשון.",
        "שיחות ולידים באופן עקבי מחיפוש ומפות.",
      ],
      note: "עובד הכי טוב אחרי שהבסיס מסודר (שלבים 1–2).",
      costLabel: "עלות:",
      costValue: "$300 / חודש",
      cta: "נדבר על החבילה",
    },
    sections: {
      changesTitle: "מה משתנה אחרי SEO מתמשך",
      changesBody:
        'זה שלב של עבודה שיטתית ומתמשכת. לא "סידרנו פעם אחת" - אלא מרחיבים נראות בקלאסטרים חדשים ושומרים מיקומים.',
      changesBullets: [
        "מתחילים לקבל פניות גם משאילתות כלליות, לא רק ממותג;",
        'כל חודש נוספים יותר צירופים של "שירות + עיר/שכונה";',
        "האתר גדל בעמודים שימושיים שעונים לשאלות אמיתיות;",
        "Google מזהה עסק יציב ומתפתח.",
      ],

      machineTitle: "מה כלול במכונת הלידים",
      machineItems: [
        {
          title: "ליווי SEO מלא (30–50 עמודים).",
          bullets: [
            "עדכון חודשי של עמודים מרכזיים;",
            "שיפור כותרות, בלוקים וטקסטים;",
            "הרחבת מחקר מילות מפתח;",
            "שיפור קישורים פנימיים;",
            "מעקב ביצועים ודוחות GA4 / Search Console.",
          ],
          extra: "העמודים לא עומדים במקום - הם מתחזקים ומתקדמים.",
        },
        {
          title: "מוניטין וביקורות.",
          bullets: [
            "מענה לביקורות ב‑Google;",
            "יצירת תהליך לקבלת ביקורות חדשות;",
            "טיפול בביקורות שליליות;",
            "עדכון תמונות ותיאורים;",
            "עקביות NAP.",
          ],
          extra: "זה מעלה אמון ומשפר ביצועים מקומיים.",
        },
        {
          title: "שיפור מיקומים ב‑Google.",
          bullets: [
            "ניתוח תוצאות מדי חודש;",
            "דחיפה של עמודים שבקרבת הטופ;",
            "כיסוי קלאסטרים חדשים;",
            "יצירת עמודים לתת‑שירותים ואזורים.",
          ],
        },
        {
          title: "קישורים איכותיים חודשיים (white‑hat).",
          body: "3 קישורים בחודש מאתרים נישתיים/מקומיים רלוונטיים.",
          extra: "קישור נקי הוא בניית סמכות בלי סיכון.",
        },
        {
          title: "עדכונים שוטפים לפרופיל במפות.",
          bullets: [
            "פוסטים ועדכונים;",
            "מענה לשאלות;",
            "תמונות ומדיה;",
            "מעקב NAP.",
          ],
          extra: "זה מסמן ל‑Google שהעסק פעיל.",
        },
      ],

      whySeoTitle: "למה SEO משתלם?",
      whySeoBody: [
        "ככל שה‑SEO מתקדם, העלות האפקטיבית של קליק יורדת. לדוגמה, אם משקיעים תקציב קבוע, עם הזמן מגיע יותר טראפיק אורגני והעלות לכניסה יורדת.",
        "בניגוד לפרסום ממומן שמפסיק מיד כשעוצרים תקציב, ה‑SEO מצטבר: עמודים ומיקומים ממשיכים לעבוד.",
        "המטרה היא לבנות ערוץ אורגני שמביא לידים במחיר נמוך יותר לאורך זמן.",
      ],

      semanticTitle: "מחקר מילות מפתח ו‑30–50 עמודי שירות: מה זה נותן",
      semanticIntro:
        "מחקר מילות מפתח הוא רשימת שאילתות אמיתיות שלקוחות מחפשים. סביב זה בונים מבנה אתר ומייצרים עשרות עמודי שירות.",
      semanticBullets: [
        "עובדים על עובדות במקום ניחושים;",
        'כל עמוד מתמקד ב"שירות + עיר/אזור";',
        "מונחים באתר תואמים למה שמופיע בפרופיל Google;",
        'עם הזמן נוצרת "רשת כניסות" יציבה לעמודים ספציפיים.',
      ],
      semanticExample:
        'דוגמה: במקום עמוד כללי אחד, בונים עמודים כמו "שיפוץ דירה בתל אביב", "שיפוץ אמבטיה בחיפה" ועוד.',

      processTitle: "איך העבודה מתבצעת",
      processSteps: [
        {
          number: "01",
          title: "אנליטיקה ומחקר",
          text: "מגדירים שאילתות והזדמנויות.",
        },
        {
          number: "02",
          title: "מבנה",
          text: "מחליטים אילו עמודים חסרים ואילו לחזק.",
        },
        { number: "03", title: "תוכן", text: "כותבים ומשפרים 30–50 עמודים." },
        {
          number: "04",
          title: "טכני",
          text: "כפילויות, כותרות, כתובות וקישורים.",
        },
        {
          number: "05",
          title: "אופטימיזציה חודשית",
          text: "שיפור לפי מיקומים ולידים.",
        },
      ],

      fromYouTitle: "מה צריך מכם",
      fromYouItems: [
        "רשימת שירותים וכיוונים;",
        "ערים/אזורים שבהם אתם באמת עובדים;",
        "טווח מחירים/פורמטים;",
        "קייסים, תמונות וביקורות;",
        "איש קשר טכני לאתר.",
      ],

      mistakesTitle: "טעויות נפוצות",
      mistakesItems: [
        "לנסות לקדם רק את דף הבית לכל שאילתה;",
        "אותו טקסט לעשרות עמודים;",
        "להתעלם מהנתונים ומהשאילתות שכבר מביאות טראפיק;",
        "לקדם שאילתות שלא מביאות פניות;",
        "שינויים חדים במקום עבודה עקבית.",
      ],

      faqTitle: "שאלות נפוצות",
      faqItems: [
        {
          q: "מתי רואים צמיחה יציבה בלידים?",
          a: "בדרך כלל 3–6 חודשים לתוצאות ראשונות משמעותיות, ואז זה מצטבר.",
        },
        {
          q: "חייבים 30–50 עמודים לפני שמתחילים?",
          a: "לא. במסגרת החבילה יוצרים ומשפרים את העמודים. צריך אתר בסיסי לעבוד עליו.",
        },
        {
          q: "מה קורה אם מפסיקים SEO אחרי כמה חודשים?",
          a: "האפקט לא נעלם מיד, אבל בלי עבודה שוטפת הצמיחה נחלשת ומתחרים יכולים לעקוף.",
        },
        {
          q: "למה זה לא פשוט להגדיל תקציב פרסום?",
          a: "פרסום מביא לידים רק כל עוד משלמים. SEO בונה ערוץ אורגני שמוזיל עלויות לאורך זמן.",
        },
      ],

      diyTitle: "אם רוצים לעבוד לבד",
      diyIntro:
        "להלן תוכנית קצרה לבנייה עצמאית של צמיחה. זה לא מחליף ליווי מלא, אבל יעזור לקבל תוצאות ראשונות.",
      monthlyAlgoTitle: "אלגוריתם חודשי קצר",
      monthlyAlgoItems: [
        "עדכון 3–5 עמודים מרכזיים.",
        "יצירת 2–4 עמודים חדשים.",
        "השגת 1–3 קישורים בטוחים.",
        "עדכון פרופיל Google.",
        "בדיקת מיקומים וקליקים.",
        "תכנון משימות לחודש הבא.",
      ],
    },
    chart: {
      title: "מגמת עלות קליק משוערת",
      legendSeo: "SEO",
      legendPpc: "פרסום (PPC)",
      xTickMonthSuffix: " חו׳",
      tooltipMonthLabel: "חודש",
      currencySuffix: " ₪",
      yTickFormat: (v) => `${v} ₪`,
      tooltipValueFormat: (v) => `${v.toFixed(2)} ₪`,
    },
    highlightedPackage: "זרם יציב",
    howToSteps: [],
  },

  en: {
    backBtn: { text: "Back to services", alternative: "/#services" },
    hero: {
      title: '"Steady Flow" - consistent rankings and leads (U.S.)',
      intro:
        "A package for businesses that already have the basics, but want stable first-page visibility and consistent inbound leads from local search.",
    },
    card: {
      title: "Steady Flow",
      subtitle: "Step 3 · Active growth in local search",
      forWhoTitle: "Who this is for",
      forWhoBody:
        "For companies with a basic website and listings but lacking visibility and a reliable pipeline of inbound leads.",
      doTitle: "What we do",
      doItems: [
        "Improve rankings in Google for target queries.",
        "Add local signals: content, citations/mentions, and light link building.",
        "Add 3 white-hat links per month from relevant sources.",
        "Maintain and optimize your listing/profile.",
      ],
      getTitle: "What you get",
      getItems: [
        "Stable first-page visibility.",
        "Regular calls and lead submissions from search and maps.",
      ],
      note: "Works best when steps 1–2 are already in place.",
      costLabel: "Price:",
      costValue: "$300 / month",
      cta: "Talk about the plan",
    },
    sections: {
      changesTitle: "What changes after ongoing SEO",
      changesBody:
        "This stage is about consistent, compounding work. We don’t do a one-time setup - we expand visibility across more queries and protect positions.",
      changesBullets: [
        "you start getting leads not only from branded searches but also generic queries;",
        'each month you show up for more "service + city/neighborhood" combinations;',
        "your site grows with useful pages that answer real customer questions;",
        "Google sees you as a stable, growing business.",
      ],

      machineTitle: "What’s inside the lead engine",
      machineItems: [
        {
          title: "Full SEO support (30–50 pages).",
          bullets: [
            "monthly updates to key pages;",
            "improve headings, blocks, and copy;",
            "expand keyword coverage;",
            "strengthen internal linking;",
            "monitor performance via GA4 / Search Console.",
          ],
          extra: "Pages don’t stagnate - they improve and strengthen rankings.",
        },
        {
          title: "Reviews and reputation support.",
          bullets: [
            "reply to new reviews (Google);",
            "set up review collection;",
            "handle negative feedback;",
            "update photos, attributes, and descriptions;",
            "keep NAP consistent.",
          ],
          extra: "This builds trust and improves local performance.",
        },
        {
          title: "Ranking growth in Google.",
          bullets: [
            "analyze SERPs monthly;",
            "push pages stuck in positions 8–20 into the top;",
            "cover new query clusters;",
            "create pages for sub-services and service areas.",
          ],
        },
        {
          title: "Monthly white-hat links.",
          body: "3 links per month from relevant local and niche sources.",
          extra: "Clean links grow authority without putting the site at risk.",
        },
        {
          title: "Ongoing listing updates.",
          bullets: [
            "regular updates and posts;",
            "answer user questions;",
            "refresh photos and media;",
            "monitor and correct NAP if needed.",
          ],
          extra: "This signals an active business.",
        },
      ],

      whySeoTitle: "Why SEO is worth it",
      whySeoBody: [
        "The longer you run SEO, the lower your effective cost per click becomes. With a steady budget, organic traffic grows and the cost per visit drops.",
        "Unlike paid ads that stop instantly when you pause spend, SEO compounds: pages and rankings keep working.",
        "The goal is a sustainable organic channel that drives leads at a lower cost over time.",
      ],

      semanticTitle:
        "Keyword research and 30–50 service pages: what it unlocks",
      semanticIntro:
        "Keyword research is the list of real search queries customers use. We build site structure around it and create dozens of service pages.",
      semanticBullets: [
        "use data instead of guessing;",
        'each page targets "service + city/area";',
        "service naming aligns with how you present it in Google listings;",
        "over time you build a stable net of entry points to specific pages.",
      ],
      semanticExample:
        'Example: instead of one generic page, you build pages like "Apartment remodeling in Austin", "Bathroom renovation in Miami", etc.',

      processTitle: "How the SEO process works",
      processSteps: [
        {
          number: "01",
          title: "Analytics & research",
          text: "Identify query opportunities and gaps.",
        },
        {
          number: "02",
          title: "Structure plan",
          text: "Map queries to pages and prioritize build vs improve.",
        },
        {
          number: "03",
          title: "Build 30–50 pages",
          text: "Write and refine content for people and search.",
        },
        {
          number: "04",
          title: "Technical fixes",
          text: "Clean duplicates, headings, URLs, internal links.",
        },
        {
          number: "05",
          title: "Monthly optimization",
          text: "Iterate based on rankings, clicks, and leads.",
        },
      ],

      fromYouTitle: "What we need from you",
      fromYouItems: [
        "list of key services and priorities;",
        "cities/areas you actually serve;",
        "typical ticket sizes and packages;",
        "case studies, photos, reviews;",
        "access or coordination with whoever manages the site.",
      ],

      mistakesTitle: "Common DIY SEO mistakes",
      mistakesItems: [
        "trying to rank only the homepage for everything;",
        "reusing the same copy across many location pages;",
        "ignoring existing queries and analytics;",
        "targeting queries that don’t convert into leads;",
        "one-off changes instead of consistent iteration.",
      ],

      faqTitle: "Steady Flow FAQ",
      faqItems: [
        {
          q: "How long until I see steady lead growth?",
          a: "Typically 3–6 months for meaningful movement, then compounding results.",
        },
        {
          q: "Do I need 30–50 pages before starting?",
          a: "No. We build and improve those pages within the package. You just need a baseline site to work with.",
        },
        {
          q: "What happens if I stop SEO after a few months?",
          a: "SEO doesn’t drop to zero immediately, but without updates growth slows and competitors can catch up.",
        },
        {
          q: "How is this different from just increasing ad spend?",
          a: "Ads drive leads only while you pay. Steady Flow builds an organic channel that gets cheaper over time.",
        },
      ],

      diyTitle: "If you want to do it yourself",
      diyIntro:
        "Below is a practical mini plan for building consistent ranking and lead growth on your own.",
      monthlyAlgoTitle: "Monthly mini-algorithm",
      monthlyAlgoItems: [
        "Update 3–5 key pages.",
        "Create 2–4 new pages for uncovered queries.",
        "Earn 1–3 safe links.",
        "Update your Google listing.",
        "Review rankings, clicks, and sources.",
        "Adjust and plan the next cycle.",
      ],
    },
    chart: {
      title: "Estimated cost-per-click trend",
      legendSeo: "SEO",
      legendPpc: "Paid ads (PPC)",
      xTickMonthSuffix: " mo",
      tooltipMonthLabel: "month",
      currencySuffix: " $",
      yTickFormat: (v) => `$${v}`,
      tooltipValueFormat: (v) => `$${v.toFixed(2)}`,
    },
    highlightedPackage: "Steady Flow",
    howToSteps: [],
  },
};

export default content;
