export type HowToStep = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type FaqItem = { q: string; a: string };

export type CategoryMapsContent = {
  backBtn: { text: string; alternative: string };
  hero: {
    title: string;
    intro: string;
  };
  card: {
    title: string;
    subtitle: string;
    sectionChangesTitle: string;
    sectionChangesBody: string;
    sectionDoTitle: string;
    sectionDoItems: string[];
    sectionGetTitle: string;
    sectionGetItems: string[];
    costLabel: string;
    costValue: string;
    cta: string;
  };
  work: {
    title: string;
    steps: Array<{ number: string; title: string; text: string }>;
  };
  prep: { title: string; items: string[] };
  afterLaunch: { title: string; paragraphs: string[] };
  timeline: { title: string; items: Array<{ label: string; text: string }> };
  mistakes: { title: string; items: string[]; closing: string };
  diy: {
    title: string;
    intro: string;
    items: string[];
    closing: string;
  };
  nap: {
    title: string;
    intro: string;
    bullets: string[];
    closing: string;
  };
  whereWeLook: {
    title: string;
    intro: string;
    items: string[];
    closing: string;
  };
  additional: {
    title: string;
    blocks: Array<{ title: string; items?: string[]; body?: string }>;
  };
  faq: { title: string; items: FaqItem[] };
  howto: { title: string; intro: string };
  howToSteps: HowToStep[];
};

const content: Record<"by" | "il" | "en", CategoryMapsContent> = {
  by: {
    backBtn: { text: "К услугам", alternative: "/#pricing-table" },
    hero: {
      title:
        "«Быстрый старт» - наводим порядок в карточках и точках присутствия в Беларуси",
      intro:
        "Ваш бизнес работает в Минске, Бресте, Гомеле или другом городе Беларуси, но в Google Картах, Яндекс Справочнике и 2ГИС вас нет или вы почти не видны? «Быстрый старт» выводит компанию в карты и делает её заметной для местных клиентов - туда, где до 76% ищущих приходят в выбранный бизнес в течение суток.",
    },
    card: {
      title: "Быстрый старт",
      subtitle: "Шаг 1 · Ваш бизнес на картах и в каталогах",
      sectionChangesTitle: "Что меняется для вас после «Быстрого старта»",
      sectionChangesBody:
        "У вас появляется единый, аккуратный «цифровой адрес» бизнеса: в Google и Яндекс Картах, а также в базовых каталогах везде одни и те же название, адрес, телефон, график и описание. Клиенту проще понять, кто вы и как с вами связаться, а сервисам - корректно вас ранжировать.",
      sectionDoTitle: "Что мы делаем",
      sectionDoItems: [
        "Добавляем вас во все важные карты и каталоги: Google Карты, Яндекс Справочник, 2ГИС и другие.",
        "Настраиваем описание, категории, график работы, контакты и другие ключевые поля.",
        "Унифицируем данные (NAP), чтобы алгоритмы доверяли вашему профилю.",
      ],
      sectionGetTitle: "Что вы получаете",
      sectionGetItems: [
        "Местные клиенты легко находят ваш бизнес на картах в вашем городе.",
        "Появляетесь там, где белорусы реально ищут услуги в вашей нише.",
      ],
      costLabel: "Стоимость:",
      costValue: "$100 / 1 месяц",
      cta: "Обсудить тариф",
    },
    work: {
      title: "Как проходит работа по тарифу «Быстрый старт»",
      steps: [
        {
          number: "01",
          title: "Знакомство и бриф",
          text: "Вы оставляете заявку, мы созваниваемся или общаемся в мессенджере, задаём вопросы о бизнесе, целевой аудитории и локации.",
        },
        {
          number: "02",
          title: "Сбор данных",
          text: "Вы передаёте нам название компании, адреса, телефоны, сайт (если есть), график работы, фото и дополнительные детали.",
        },
        {
          number: "03",
          title: "Аудит текущего состояния",
          text: "Если карточки уже существуют, мы проверяем их на дубли, ошибки в NAP-данных, неверные категории и устаревший контент.",
        },
        {
          number: "04",
          title: "Создание и настройка карточек",
          text: "Регистрируем или берём под управление профили в Google и «Яндекс.Картах», настраиваем категории, атрибуты, ссылки, расписание и способы связи.",
        },
        {
          number: "05",
          title: "Заполнение контентом",
          text: "Пишем продающее описание, добавляем фото, отмечаем важные удобства и особенности, чтобы профиль выглядел живым и доверенным.",
        },
        {
          number: "06",
          title: "Проверка и старт наблюдения",
          text: "Показываем, как выглядят карточки, согласуем формулировки и после публикации отслеживаем первые метрики: показы, клики по «позвонить» и переходы по ссылкам.",
        },
      ],
    },
    prep: {
      title: "Что подготовить с вашей стороны",
      items: [
        "Актуальное название компании, адреса и контакты.",
        "Краткое описание услуг и сильных сторон (что важно подчеркнуть в профиле).",
        "5–10 фотографий: фасад, интерьер, команда, процесс работы, примеры услуг/результатов.",
        "Доступы к существующим профилям (если они уже созданы) или готовность подтвердить права на бизнес.",
      ],
    },
    afterLaunch: {
      title: "Что происходит после запуска",
      paragraphs: [
        "После того как карточки созданы и приведены в порядок, начинается естественный набор показов и взаимодействий: пользователи видят вас в поиске по бренду и базовым запросам, начинают переходить по кнопкам «Маршрут», «Позвонить», «Сайт».",
        "После запуска важно отвечать на отзывы и обновлять карточку. Это даёт рост показов и кликов уже через 2–4 недели.",
      ],
    },
    timeline: {
      title: "Примерный таймлайн «Быстрого старта»",
      items: [
        {
          label: "День 1–2.",
          text: "Созваниваемся, заполняем бриф, собираем все необходимые данные и доступы.",
        },
        {
          label: "День 3–5.",
          text: "Проводим аудит существующих карточек (если есть), фиксируем ошибки, готовим структуру и тексты.",
        },
        {
          label: "День 5–7.",
          text: "Создаём или правим профили в Google и «Яндекс.Картах», загружаем фото, настраиваем категории, атрибуты, расписание.",
        },
        {
          label: "День 7–10.",
          text: "Проверяем, как карточки прошли модерацию, вносим финальные правки, согласуем с вами формулировки.",
        },
        {
          label: "Дальше.",
          text: "Карточки начинают «раскручиваться» за счёт естественного трафика, а вы можете подключать следующие шаги: работу с отзывами, локальное SEO, рекламу.",
        },
      ],
    },
    mistakes: {
      title: "Типичные ошибки, которые мы закрываем за счёт «Быстрого старта»",
      items: [
        "Разные телефоны, адреса и названия компании в сервисах (алгоритмы не доверяют таким профилям).",
        "Неверно выбранные или слишком общие категории бизнеса.",
        "Отсутствие описания или шаблонный текст «из головы» без учёта ключевых запросов.",
        "Старые или случайные фотографии, которые не отражают реальный уровень сервиса.",
        "Дубликаты карточек, из‑за которых рейтинг и отзывы размазываются по нескольким профилям.",
      ],
      closing:
        "Наша задача - убрать эти «тормоза» на старте, чтобы дальнейшее продвижение давало максимум эффекта при минимальных вложениях.",
    },
    diy: {
      title: "Если вы хотите делать всё сами",
      intro:
        "Тариф «Быстрый старт» можно воспринимать как готовый чек-лист. Если вы решите идти полностью самостоятельно, ориентируйтесь на такие шаги:",
      items: [
        "Соберите все одинаковые данные по компании: точное название, адрес, телефон, сайт, график.",
        "Найдите и удалите/объедините дубли карточек в Google и «Яндекс.Картах».",
        "Заполните все поля в профилях: категории, описание, дополнительные атрибуты, ссылки, кнопки записи.",
        "Загрузите качественные фото: фасад, интерьер, команда, примеры работ.",
        "Проверьте, как карточки отображаются по основным запросам и в навигаторах.",
      ],
      closing:
        "Если в какой‑то момент вы поймёте, что хотите передать часть задач на аутсорс, вы всегда сможете перейти на тариф или подключить нас точечно для аудита и настроек.",
    },
    nap: {
      title: "Что такое NAP и зачем мы его приводим в порядок",
      intro:
        "NAP (Name, Address, Phone) - это базовый набор данных о компании: название, адрес, телефон. Алгоритмы Google, Яндекс и других карт сопоставляют бизнесы именно по этим данным. Если где‑то указаны разные телефоны, разные варианты названия или адреса, система воспринимает карточки как разных владельцев и снижает доверие.",
      bullets: [
        "карты и навигаторы реже показывают такой бизнес в поиске;",
        "сигналы (отзывы, клики, поведение) не складываются в одну «историю»;",
        "клиенты путаются, видя несколько разных карточек с разными данными.",
      ],
      closing:
        "Мы наводим порядок во всех картах и каталогах: единый NAP и корректные данные. Чёткая информация повышает доверие и выбор бизнеса.",
    },
    whereWeLook: {
      title: "Где мы ищем вашу компанию и что именно правим",
      intro:
        "Мы смотрим не только на Google и Яндекс Карты. В зависимости от тематики и региона, в работу могут попадать:",
      items: [
        "2ГИС и локальные справочники городов;",
        "Apple Maps, Here, TomTom и другие навигаторы;",
        "Bing Places, Facebook / Instagram Business;",
        "отраслевые каталоги (медицина, общепит, туризм и т.п.);",
        "агрегаторы услуг, где ваша ниша уже присутствует.",
      ],
      closing:
        "Задача - собрать максимально полную картину, выровнять данные и убрать источники путаницы, которые мешают алгоритмам и клиентам.",
    },
    additional: {
      title: "Дополнительно: что ещё входит в наведение порядка",
      blocks: [
        {
          title: "Верификация и доступы",
          items: [
            "подбор и аудит способов подтверждения карточек (смс, e‑mail, видео, письмо);",
            "сопровождение видео‑верификации в Google;",
            "помощь с восстановлением доступа, если аккаунт владельца утерян или заблокирован;",
            "настройка ролей владельца и менеджеров, чтобы доступом к карточкам управляли вы, а не агентства.",
          ],
        },
        {
          title: "«Теневые» и дублирующие карточки",
          items: [
            "поиск автоматически созданных и скрытых карточек, которые крадут показы и создают путаницу;",
            "удаление «призрачных» профилей, которые не нужны;",
            "объединение дубликатов там, где это возможно (Google, Яндекс, 2ГИС и др.).",
          ],
        },
        {
          title: "Категории, услуги и структурированные данные",
          items: [
            "подбор главной и вторичных категорий под нужные запросы и исключение конфликтующих вариантов;",
            "добавление услуг, прайсов, меню и направлений, если платформа это поддерживает;",
            "настройка прайс‑листов и товарных позиций там, где это уместно.",
          ],
        },
        {
          title: "Микрооптимизация и фотографии",
          items: [
            "выставление атрибутов (парковка, Wi‑Fi, доставка, запись и т.п.);",
            "оптимизация описаний под сопутствующие и локальные запросы;",
            "выбор обложки и базового набора фото: фасад, интерьер, команда, результаты;",
            "рекомендации по регулярному обновлению фото и активности.",
          ],
        },
        {
          title: "Геопозиция, панорамы и мобильная выдача",
          items: [
            "корректировка метки на карте и точки входа (особенно в ТЦ/бизнес‑центрах);",
            "проверка видимости фасада на панорамах Google/Яндекс/2ГИС и рекомендации, если фасада нет;",
            "проверка отображения профиля на разных устройствах и в мобильной выдаче.",
          ],
        },
        {
          title: "Мини‑исследование запросов и базовая аналитика",
          items: [
            "проверка, по каким запросам карточки уже появляются, и где есть «быстрые победы»;",
            "настройка UTM‑меток для кнопки «Сайт» и отслеживание кликов;",
            "базовый отчёт по динамике показов и взаимодействий за первый период.",
          ],
        },
        {
          title: "Небольшая образовательная часть",
          body: "В конце работы мы кратко объясняем, как устроен локальный поиск, что влияет на ранжирование и какие простые действия вы можете делать сами, чтобы не терять позиции после завершения «Быстрого старта».",
        },
      ],
    },
    faq: {
      title: "Частые вопросы про «Быстрый старт»",
      items: [
        {
          q: "Сколько точек можно подключить в рамках тарифа?",
          a: "Обычно мы наводим порядок по одной основной локации бизнеса. Если у вас несколько филиалов, можно либо сделать отдельный «Быстрый старт» под каждую точку, либо договориться о расширенном объёме работ.",
        },
        {
          q: "Что если карточки уже есть, но они в плохом состоянии?",
          a: "В этом случае мы не создаём всё с нуля, а приводим в порядок существующие профили: правим данные, чистим дубли, восстанавливаем доступы, дополняем описания и фотографии.",
        },
        {
          q: "Когда я увижу первые результаты?",
          a: "Обычно первые изменения по показам и кликам появляются в течение 2–4 недель после наведения порядка: карточки начинают чаще показываться по брендовым и базовым запросам.",
        },
        {
          q: "Обязательно ли потом продолжать работу по другим тарифам?",
          a: "Нет, «Быстрый старт» самодостаточен как разовый проект. Но если вы захотите масштабировать результат (SEO, отзывы, реклама), этот фундамент поможет быстрее двигаться дальше.",
        },
      ],
    },
    howto: {
      title: "Полный how-to: как повторить «Быстрый старт» самому",
      intro:
        "Ниже - честный пошаговый план, по которому можно пройтись самостоятельно. В тарифе мы делаем всё это за вас, но вы можете использовать список как подробное руководство и отмечать выполненные пункты.",
    },
    howToSteps: [
      {
        id: "step1-nap",
        title: "Шаг 1. Соберите единый NAP и базовые данные",
        description:
          "На этом шаге вы формируете одну версию основных данных о компании, на которую будут опираться все сервисы.",
        items: [
          "Одно финальное название компании (как вы хотите, чтобы вас находили)",
          "Один основной телефон для всех сервисов",
          "Точный адрес (с номером офиса/подъезда, если важно для входа)",
          "График работы, выходные и особые дни",
          "Сайт и ссылки на соцсети (если они будут в карточках)",
        ],
      },
      {
        id: "step2-discovery",
        title: "Шаг 2. Найдите все существующие карточки и дубли",
        description:
          "Задача - понять, где и в каком виде ваш бизнес уже представлен, и собрать это в одном месте.",
        items: [
          "Поиск по названию, телефону и адресу в Google, Яндекс, 2ГИС",
          "Проверка Apple Maps, Facebook и локальных справочников",
          "Составлен список всех найденных карточек в таблице (ссылки + статус)",
          "Отмечено, какие карточки актуальны, а какие - дубли или устаревшие",
        ],
      },
      {
        id: "step3-verification",
        title: "Шаг 3. Наведите порядок с доступами и верификацией",
        description:
          "Важно, чтобы карточки были под вашим контролем и были подтверждены корректным способом.",
        items: [
          "Проверены доступы ко всем основным карточкам",
          "Отправлены запросы на передачу прав или восстановление доступа, если нужно",
          "Выбран и пройден способ подтверждения (смс, e‑mail, видео, письмо)",
          "Зафиксировано, с каких аккаунтов ведутся карточки и кто за них отвечает",
        ],
      },
      {
        id: "step4-duplicates",
        title: "Шаг 4. Удалите или объедините дубликаты и «призраков»",
        description:
          "Здесь убираем лишние карточки, которые крадут показы и мешают алгоритмам.",
        items: [
          "Все дубли и авто‑созданные профили отмечены в таблице",
          "Отправлены жалобы/заявки на дубли и ошибочные карточки",
          "Отправлены запросы на объединение там, где это возможно",
          "Через 1–2 недели повторно проверен поиск по бренду и адресу",
        ],
      },
      {
        id: "step5-profile",
        title: "Шаг 5. Заполните карточки по чек‑листу",
        description:
          "После этого шага профиль становится информативным и понятным для клиентов и алгоритмов.",
        items: [
          "Выбрана главная категория и 2–4 вторичных под ваши услуги",
          "Заполнено описание: кто вы, где, что делаете, для кого, как записаться",
          "Добавлены услуги/товары/меню, если платформа это поддерживает",
          "Выставлены атрибуты: парковка, Wi‑Fi, доставка, запись и т.п.",
          "Проверен текст на опечатки и противоречия",
        ],
      },
      {
        id: "step6-photos",
        title: "Шаг 6. Подготовьте и загрузите фотографии",
        description:
          "Фото - один из ключевых факторов доверия. Здесь вы формируете визуальную часть профиля.",
        items: [
          "Подготовлены 1–2 фото фасада, по которым вас легко узнать",
          "Подготовлены 2–4 фото интерьера",
          "Подготовлены 2–4 фото команды или процесса работы",
          "Подготовлены примеры результатов (до/после, блюда, объекты и т.п.)",
          "Выбрана удачная обложка для карточки",
        ],
      },
      {
        id: "step7-reviews",
        title: "Шаг 7. Настройте сбор отзывов",
        description:
          "Отзывы - один из ключевых поведенческих и доверительных сигналов. Здесь важно не разово собрать много отзывов, а выстроить стабильный поток.",
        items: [
          "Определите главный источник трафика для вашего бизнеса: Яндекс или Google (по региону/нише)",
          "Примите решение: развивать сначала основной профиль или, если хватает ресурса, сразу оба",
          "Запланируйте регулярность: в месяц у вас должно появляться отзывов больше, чем у прямых конкурентов",
          "Сделайте акцент на отзывах с текстом - они ценнее простых оценок без комментария",
          "По возможности просите клиентов прикладывать фото - такие отзывы алгоритмы и люди ценят особенно",
        ],
      },
      {
        id: "step8-geo",
        title: "Шаг 8. Проверьте геопозицию и отображение",
        description:
          "Проверяем, как легко вас найти по карте и как выглядит карточка для пользователя.",
        items: [
          "Метка стоит на правильном здании и нужном входе",
          "Проверено отображение карточки на телефоне (Android / iOS)",
          "Просмотрены панорамы: фасад и вывеска видны корректно",
          "Проверены позиции по ключевым запросам в нужном районе",
        ],
      },
      {
        id: "step9-analytics",
        title: "Шаг 9. Настройте минимальную аналитику",
        description:
          "Фиксируем отправную точку и понимаем, как изменяются показы и обращения.",
        items: [
          "К ссылке на сайт из карточек добавлены UTM‑метки",
          "Зафиксированы исходные показатели: показы, клики, звонки, маршруты",
          "Через 2–4 недели собрана повторная статистика и сверена динамика",
          "Принято решение о следующих шагах: SEO, реклама, работа с отзывами",
        ],
      },
    ],
  },

  il: {
    backBtn: { text: "לשירותים", alternative: "/#pricing-table" },
    hero: {
      title: "«התחלה מהירה» - סדר ונוכחות במפות בישראל",
      intro:
        'העסק שלכם עובד בתל אביב, חיפה, ירושלים או בכל עיר אחרת בישראל, אבל אתם לא מופיעים טוב ב‑Google Maps / Waze / Apple Maps? חבילת "Quick Start" מסדרת את הנוכחות הדיגיטלית ומייצרת בסיס חזק ללקוחות מקומיים - במקום שבו אנשים מחפשים שירותים "ליד הבית".',
    },
    card: {
      title: "התחלה מהירה",
      subtitle: "שלב 1 · העסק שלכם במפות ובדירקטוריות",
      sectionChangesTitle: 'מה משתנה אחרי "Quick Start"',
      sectionChangesBody:
        'נוצר לכם "כתובת דיגיטלית" עקבית: אותם שם, כתובת, טלפון, שעות ותיאור בכל המערכות (Google Business Profile, Waze, Apple Maps ועוד). ללקוחות קל יותר להבין מי אתם, ולמערכות קל יותר לדרג ולהציג אתכם.',
      sectionDoTitle: "מה אנחנו עושים",
      sectionDoItems: [
        "מקימים/מסדרים פרופילים במפות ובדירקטוריות רלוונטיות: Google Business Profile, Waze, Apple Maps ועוד.",
        "מגדירים תיאור, קטגוריות, שעות פעילות, פרטי קשר ושדות חשובים.",
        "מאחדים נתונים (NAP) כדי שהאלגוריתמים יבטחו בפרופיל שלכם.",
      ],
      sectionGetTitle: "מה אתם מקבלים",
      sectionGetItems: [
        "לקוחות מקומיים מוצאים אתכם בקלות במפות בעיר שלכם.",
        "אתם מופיעים במקום שבו אנשים בישראל באמת מחפשים שירותים.",
      ],
      costLabel: "עלות:",
      costValue: "$100 / חודש",
      cta: "נדבר על החבילה",
    },
    work: {
      title: 'איך העבודה מתבצעת בחבילת "Quick Start"',
      steps: [
        {
          number: "01",
          title: "היכרות ותשאול",
          text: "משאירים פנייה, מדברים בטלפון או בווטסאפ, ואוספים מידע על העסק, קהל היעד והאזור.",
        },
        {
          number: "02",
          title: "איסוף נתונים",
          text: "אתם שולחים שם העסק, כתובות, טלפונים, אתר (אם יש), שעות פעילות, תמונות ופרטים נוספים.",
        },
        {
          number: "03",
          title: "אבחון מצב קיים",
          text: "אם כבר יש פרופילים, בודקים כפילויות, טעויות NAP, קטגוריות לא נכונות ותוכן מיושן.",
        },
        {
          number: "04",
          title: "הקמה/אופטימיזציה לפרופילים",
          text: "מקימים או משתלטים על פרופילים ב‑Google ובמערכות נוספות, מגדירים קטגוריות, מאפיינים, קישורים, שעות ודרכי יצירת קשר.",
        },
        {
          number: "05",
          title: "מילוי תוכן",
          text: "כותבים תיאור משכנע, מוסיפים תמונות ומדגישים יתרונות כדי שהפרופיל ייראה אמין וחי.",
        },
        {
          number: "06",
          title: "בדיקה והתחלת מעקב",
          text: "מציגים לכם איך הפרופיל נראה, מאשרים ניסוחים ולאחר פרסום עוקבים אחרי מדדים ראשונים: חשיפות, קליקים, שיחות וכניסות לאתר.",
        },
      ],
    },
    prep: {
      title: "מה להכין מצדכם",
      items: [
        "שם עסק עדכני, כתובות ופרטי קשר.",
        "תיאור קצר של השירותים והיתרונות שלכם.",
        "5–10 תמונות: חזית/שלט, פנים, צוות, תהליך עבודה, דוגמאות תוצאות.",
        "גישה לפרופילים קיימים (אם קיימים) או נכונות לבצע אימות בעלות.",
      ],
    },
    afterLaunch: {
      title: "מה קורה אחרי העלייה לאוויר",
      paragraphs: [
        'אחרי שהפרופילים מסודרים, מתחילים להופיע יותר בחיפושי מותג ובחיפושים בסיסיים, ואנשים משתמשים בכפתורים כמו "ניווט", "התקשר" ו‑"אתר".',
        "חשוב להגיב לביקורות ולעדכן את הפרופיל. לרוב רואים שיפור במדדים תוך 2–4 שבועות.",
      ],
    },
    timeline: {
      title: "לוח זמנים משוער",
      items: [
        { label: "ימים 1–2.", text: "שיחה, שאלון, איסוף נתונים וגישה." },
        { label: "ימים 3–5.", text: "בדיקת פרופילים קיימים ותיקון בעיות." },
        { label: "ימים 5–7.", text: "הקמה/תיקון, העלאת תמונות והגדרות." },
        {
          label: "ימים 7–10.",
          text: "בדיקת אישורים, תיקונים אחרונים ואישורכם.",
        },
        {
          label: "אחר כך.",
          text: "הפרופילים צוברים תנועה טבעית, ואפשר להתקדם ל‑SEO, ביקורות, פרסום ועוד.",
        },
      ],
    },
    mistakes: {
      title: 'טעויות נפוצות ש‑"Quick Start" פותר',
      items: [
        "פרטי קשר שונים בין מערכות (פוגע באמון האלגוריתמים).",
        "קטגוריות כלליות או לא נכונות.",
        "תיאור חסר או טקסט תבניתי בלי מילות חיפוש.",
        "תמונות ישנות/אקראיות שלא משקפות את השירות.",
        "כפילויות שמפצלות דירוג וביקורות בין פרופילים.",
      ],
      closing:
        'המטרה היא להסיר את ה"בלמים" בהתחלה כדי שהמשך קידום ייתן תוצאה מקסימלית עם מינימום בזבוז.',
    },
    diy: {
      title: "אם אתם רוצים לעשות הכול לבד",
      intro:
        "אפשר להשתמש בחבילה כצ'ק‑ליסט. אם תבחרו לעבוד לבד, אלו צעדים בסיסיים:",
      items: [
        "אחדו נתונים אחידים: שם, כתובת, טלפון, אתר, שעות.",
        "מצאו ואחדו/מחקו כפילויות ב‑Google ובמערכות רלוונטיות.",
        "מלאו שדות: קטגוריות, תיאור, מאפיינים, קישורים, כפתורי פעולה.",
        "העלו תמונות איכותיות.",
        "בדקו איך אתם מוצגים בחיפושים ובאפליקציות ניווט.",
      ],
      closing:
        "ואם בשלב כלשהו תרצו להעביר חלק מהעבודה לאאוטסורסינג - תמיד אפשר להצטרף לחבילה או להזמין אותנו לאבחון נקודתי.",
    },
    nap: {
      title: "מה זה NAP ולמה חשוב לסדר אותו",
      intro:
        "NAP (Name, Address, Phone) הוא סט הנתונים הבסיסי: שם, כתובת וטלפון. מערכות כמו Google Business Profile ו‑Waze מסתמכות על עקביות הנתונים כדי לזהות עסק ולתת לו אמון.",
      bullets: [
        "מופיעים פחות בחיפוש;",
        'אותות (ביקורות/קליקים) לא מצטברים ל"היסטוריה" אחת;',
        "לקוחות מתבלבלים מכפילויות ופרטים סותרים.",
      ],
      closing:
        "כשיש נתונים עקביים בכל המקומות - האמון עולה, וגם הסיכוי שיבחרו בכם.",
    },
    whereWeLook: {
      title: "איפה אנחנו בודקים ומה מתקנים",
      intro: "אנחנו לא מסתפקים רק ב‑Google. בהתאם לנישה ולמיקום, נבדוק גם:",
      items: [
        "Waze ו‑Apple Maps;",
        "פייסבוק/אינסטגרם ביזנס;",
        "דירקטוריות מקומיות ונישתיות;",
        "אתרי ביקורות רלוונטיים;",
        "אתרי שירותים/אגרגטורים שבהם הענף שלכם מופיע.",
      ],
      closing:
        "המטרה היא תמונת מצב מלאה, יישור נתונים והסרת בלבול שמפריע לאלגוריתמים וללקוחות.",
    },
    additional: {
      title: "בנוסף: מה עוד כלול בסידור",
      blocks: [
        {
          title: "אימות וגישה",
          items: [
            "בחירת שיטת אימות מתאימה (SMS, אימייל, וידאו ועוד);",
            "סיוע בתהליך אימות ב‑Google;",
            "עזרה בשחזור גישה לחשבונות;",
            "הגדרת הרשאות כך שהשליטה תישאר אצלכם.",
          ],
        },
        {
          title: "כפילויות ופרופילים לא רצויים",
          items: [
            "איתור פרופילים אוטומטיים/מוסתרים שמייצרים בלבול;",
            "מחיקה/איחוד כפילויות;",
            "תיקון פרטים שגויים.",
          ],
        },
        {
          title: "קטגוריות ושירותים",
          items: [
            "בחירת קטגוריה ראשית ומשניות נכונות;",
            "הוספת שירותים/מחירים אם הפלטפורמה מאפשרת;",
            "דיוק נוסחים לפי מה שלקוחות מחפשים.",
          ],
        },
        {
          title: "מיקרו‑אופטימיזציה ותמונות",
          items: [
            "מאפיינים (חניה, Wi‑Fi, משלוחים, הזמנה ועוד);",
            "אופטימיזציה לתיאורים וחיפושים מקומיים;",
            "בחירת תמונת קאבר וסט תמונות בסיסי;",
            "המלצות לעדכון שוטף.",
          ],
        },
        {
          title: "מיקום ומובייל",
          items: [
            "תיקון פין ומיקום כניסה מדויק;",
            "בדיקה איך הפרופיל נראה במובייל;",
            "בדיקת נראות ופרטים קריטיים.",
          ],
        },
        {
          title: "אנליטיקה בסיסית",
          items: [
            "UTM לקישור האתר;",
            "תיעוד מדדי בסיס (חשיפות/קליקים/שיחות);",
            'דו"ח בסיסי לתקופה הראשונה.',
          ],
        },
        {
          title: "הסבר קצר",
          body: "בסוף העבודה נסביר בקצרה מה משפיע על תוצאות במפות ואילו פעולות פשוטות אפשר לעשות כדי לשמור על המיקומים.",
        },
      ],
    },
    faq: {
      title: "שאלות נפוצות",
      items: [
        {
          q: "כמה סניפים כלולים בחבילה?",
          a: "בדרך כלל מסדרים מיקום מרכזי אחד. אם יש כמה סניפים - אפשר חבילה לכל סניף או הרחבה בהסכמה.",
        },
        {
          q: "מה אם כבר יש פרופילים אבל הם במצב לא טוב?",
          a: "במקרה כזה לא מתחילים מאפס - מתקנים, מאחדים כפילויות, משחזרים גישה ומשפרים תיאורים ותמונות.",
        },
        {
          q: "מתי רואים תוצאות ראשונות?",
          a: "לרוב רואים שיפור בחשיפות וקליקים תוך 2–4 שבועות לאחר סידור הפרופיל.",
        },
        {
          q: "חייבים להמשיך לחבילות אחרות?",
          a: "לא. זו יכולה להיות עבודה חד‑פעמית. אם תרצו להרחיב (SEO, ביקורות, פרסום) - הבסיס יעזור להתקדם מהר יותר.",
        },
      ],
    },
    howto: {
      title: 'מדריך מלא: איך לעשות "Quick Start" לבד',
      intro:
        "להלן תוכנית צעד‑אחר‑צעד שאפשר לבצע לבד. בחבילה אנחנו עושים זאת עבורכם, אבל אפשר להשתמש בזה כמדריך ולסמן משימות שבוצעו.",
    },
    howToSteps: [
      {
        id: "step1-nap",
        title: "שלב 1. איחוד NAP ונתוני בסיס",
        description: "יוצרים גרסה אחת של נתוני העסק לכל המערכות.",
        items: [
          "שם עסק סופי ועקבי",
          "טלפון ראשי אחד",
          "כתובת מדויקת (כולל קומה/כניסה אם צריך)",
          "שעות פעילות וחריגים",
          "אתר וקישורי רשתות (אם יופיעו בפרופיל)",
        ],
      },
      {
        id: "step2-discovery",
        title: "שלב 2. איתור פרופילים וכפילויות",
        description: "מוצאים איפה העסק כבר מופיע ואיך.",
        items: [
          "חיפוש לפי שם/טלפון/כתובת ב‑Google ובמערכות ניווט",
          "בדיקה ב‑Apple Maps ובפייסבוק",
          "רשימת פרופילים בטבלה (קישורים + סטטוס)",
          "סימון פרופילים תקינים מול כפילויות/מיושנים",
        ],
      },
      {
        id: "step3-verification",
        title: "שלב 3. סדר בגישה ואימות",
        description: "ודאו שליטה בפרופילים ואימות נכון.",
        items: [
          "בדיקת גישה לכל פרופיל",
          "בקשות להעברת בעלות/שחזור גישה במידת הצורך",
          "בחירת שיטת אימות (SMS/אימייל/וידאו)",
          "תיעוד חשבונות ואחראים",
        ],
      },
      {
        id: "step4-duplicates",
        title: "שלב 4. איחוד/מחיקת כפילויות",
        description: "מסירים פרופילים שמפצלים חשיפות.",
        items: [
          "סימון כפילויות בטבלה",
          "פנייה לדיווח על כפילויות",
          "בקשה לאיחוד כשאפשר",
          "בדיקה חוזרת אחרי 1–2 שבועות",
        ],
      },
      {
        id: "step5-profile",
        title: "שלב 5. מילוי פרופיל מלא",
        description: "ממלאים את הפרופיל כך שיהיה ברור ללקוחות ולאלגוריתם.",
        items: [
          "בחירת קטגוריה ראשית + 2–4 משניות",
          "תיאור ברור: מי אתם, איפה, מה עושים, איך מזמינים",
          "הוספת שירותים/תפריט אם נתמך",
          "מאפיינים: חניה, Wi‑Fi, משלוחים, הזמנה וכו'",
          "בדיקת שגיאות ותיאום פרטים",
        ],
      },
      {
        id: "step6-photos",
        title: "שלב 6. תמונות",
        description: "תמונות בונות אמון.",
        items: [
          "1–2 תמונות חזית",
          "2–4 תמונות פנים",
          "2–4 תמונות צוות/תהליך",
          "דוגמאות תוצאה",
          "בחירת תמונת קאבר",
        ],
      },
      {
        id: "step7-reviews",
        title: "שלב 7. תהליך לביקורות",
        description: "בונים זרם יציב של ביקורות.",
        items: [
          "בחרו מקור עיקרי (לרוב Google) לפי הענף",
          "החליטו האם להשקיע בפרופיל אחד או בכמה",
          "קבעו קצב חודשי גבוה מהמתחרים",
          "העדיפו ביקורות עם טקסט",
          "בקשו תמונות כשאפשר",
        ],
      },
      {
        id: "step8-geo",
        title: "שלב 8. מיקום ותצוגה",
        description: "בודקים איך העסק נראה במפה ובמובייל.",
        items: [
          "פין על הבניין הנכון",
          "בדיקה במובייל (Android/iOS)",
          "בדיקת נראות",
          "בדיקת מיקומים לפי שאילתות באזור",
        ],
      },
      {
        id: "step9-analytics",
        title: "שלב 9. אנליטיקה מינימלית",
        description: "מתעדים נקודת פתיחה ומדדים.",
        items: [
          "UTM לקישור האתר",
          "תיעוד חשיפות/קליקים/שיחות/ניווט",
          "בדיקה חוזרת אחרי 2–4 שבועות",
          "החלטה על צעדים הבאים",
        ],
      },
    ],
  },

  en: {
    backBtn: { text: "Back to services", alternative: "/#pricing-table" },
    hero: {
      title:
        '"Quick Start" - clean up your listings and local presence in the U.S.',
      intro:
        'If your business operates in New York, Chicago, Miami, or any other U.S. city but you’re not showing up well on Google Maps and other major directories, "Quick Start" builds a clean, consistent foundation so local customers can find and trust you.',
    },
    card: {
      title: "Quick Start",
      subtitle: "Step 1 · Your business on maps and directories",
      sectionChangesTitle: "What changes after Quick Start",
      sectionChangesBody:
        "You get one consistent digital footprint: the same business name, address, phone number, hours, and description across key platforms (Google Business Profile, Apple Maps, Bing Places, Yelp and niche directories). That makes it easier for customers to choose you - and for platforms to trust and rank you.",
      sectionDoTitle: "What we do",
      sectionDoItems: [
        "Set up and optimize your listings across key platforms and directories.",
        "Configure description, categories, hours, contact info, and the most important fields.",
        "Standardize NAP so platforms can confidently match and trust your business.",
      ],
      sectionGetTitle: "What you get",
      sectionGetItems: [
        "Local customers can find you easily on maps in your area.",
        "You show up where people in the U.S. actually search for services.",
      ],
      costLabel: "Price:",
      costValue: "$100 / 1 month",
      cta: "Talk about the plan",
    },
    work: {
      title: "How the Quick Start process works",
      steps: [
        {
          number: "01",
          title: "Kickoff & brief",
          text: "You submit a request, we talk by phone or chat, and clarify your business, audience, and service area.",
        },
        {
          number: "02",
          title: "Data collection",
          text: "You share your business name, addresses, phone numbers, website (if any), hours, photos, and details.",
        },
        {
          number: "03",
          title: "Current state audit",
          text: "If listings already exist, we check duplicates, NAP inconsistencies, wrong categories, and stale content.",
        },
        {
          number: "04",
          title: "Listing setup & optimization",
          text: "We create or take over listings and configure categories, attributes, links, hours, and contact methods.",
        },
        {
          number: "05",
          title: "Content & photos",
          text: "We write strong copy, add photos, and highlight key selling points so the listing looks credible and complete.",
        },
        {
          number: "06",
          title: "QA & initial tracking",
          text: "We validate the listing, align wording with you, and track early metrics like views, calls, and website clicks.",
        },
      ],
    },
    prep: {
      title: "What we need from you",
      items: [
        "Current business name, addresses, and contact details.",
        "A short description of services and key differentiators.",
        "5–10 photos: storefront/signage, interior, team, work process, examples of results.",
        "Access to existing listings (if any) or willingness to complete verification.",
      ],
    },
    afterLaunch: {
      title: "What happens after launch",
      paragraphs: [
        'Once listings are cleaned up, you typically start seeing more impressions and actions from brand searches and basic local queries - people click "Directions", "Call", and "Website".',
        "Responding to reviews and keeping the profile fresh often leads to noticeable growth within 2–4 weeks.",
      ],
    },
    timeline: {
      title: "Typical Quick Start timeline",
      items: [
        {
          label: "Days 1–2.",
          text: "Kickoff, brief, collect data and access.",
        },
        {
          label: "Days 3–5.",
          text: "Audit existing listings and define fixes.",
        },
        {
          label: "Days 5–7.",
          text: "Set up/optimize listings and upload photos.",
        },
        {
          label: "Days 7–10.",
          text: "Finalize, handle approvals, and validate.",
        },
        {
          label: "After that.",
          text: "Listings gain traction naturally and you can move to next steps: SEO, reviews, paid ads.",
        },
      ],
    },
    mistakes: {
      title: "Common issues Quick Start fixes",
      items: [
        "Different phone numbers, addresses, or names across platforms (low trust).",
        "Wrong or overly broad categories.",
        "Missing or generic descriptions not aligned with real search intent.",
        "Low-quality or outdated photos.",
        "Duplicate listings that split reviews and authority.",
      ],
      closing:
        "Our job is to remove these early blockers so future marketing efforts deliver better results with less waste.",
    },
    diy: {
      title: "If you want to do it yourself",
      intro:
        "You can treat Quick Start as a checklist. If you go fully DIY, follow these steps:",
      items: [
        "Create one final version of your business data: name, address, phone, website, hours.",
        "Find and merge/remove duplicates across major platforms.",
        "Complete all fields: categories, description, attributes, links, CTAs.",
        "Upload high-quality photos.",
        "Check how you appear for your main local queries across devices.",
      ],
      closing:
        "If later you decide to outsource parts of the process, you can always switch to the plan or bring us in for an audit and fixes.",
    },
    nap: {
      title: "What is NAP and why it matters",
      intro:
        "NAP (Name, Address, Phone) is the core identity of a local business. Platforms use it to match and trust listings. If your NAP is inconsistent, the system may treat listings as different entities and reduce visibility.",
      bullets: [
        "maps and directories show you less often;",
        "signals (reviews, clicks) don’t consolidate into one authority profile;",
        "customers get confused by conflicting information.",
      ],
      closing:
        "We standardize NAP across key platforms so your business earns trust and converts more users.",
    },
    whereWeLook: {
      title: "Where we look and what we fix",
      intro:
        "We don’t look only at Google. Depending on your niche and location, we may also cover:",
      items: [
        "Apple Maps;",
        "Bing Places;",
        "Yelp and niche directories;",
        "Facebook / Instagram Business;",
        "industry-specific aggregators.",
      ],
      closing:
        "The goal is a complete picture, aligned data, and removing confusion that hurts rankings and user trust.",
    },
    additional: {
      title: "Additionally: what’s included in the cleanup",
      blocks: [
        {
          title: "Verification & access",
          items: [
            "choose the best verification path (SMS, email, video, etc.);",
            "support for verification workflows;",
            "help recovering access if an owner account is lost;",
            "set roles so you control the listings (not agencies).",
          ],
        },
        {
          title: "Hidden and duplicate listings",
          items: [
            "identify auto-created or hidden listings;",
            "remove unnecessary profiles;",
            "merge duplicates where possible.",
          ],
        },
        {
          title: "Categories, services, structured data",
          items: [
            "select primary and secondary categories aligned with queries;",
            "add services/menus/pricing where supported;",
            "polish key fields users and algorithms care about.",
          ],
        },
        {
          title: "Micro-optimization & photos",
          items: [
            "attributes (parking, Wi‑Fi, delivery, appointments, etc.);",
            "optimize descriptions for related and local queries;",
            "select cover photo + baseline photo set;",
            "recommendations for ongoing updates.",
          ],
        },
        {
          title: "Geo pin, mobile view, and visibility checks",
          items: [
            "adjust the pin and entrance point (important in malls/office buildings);",
            "validate how the listing renders on different devices;",
            "ensure key details are visible and consistent.",
          ],
        },
        {
          title: "Light query research & basic analytics",
          items: [
            "identify queries you already show for and quick-win opportunities;",
            "add UTM tags to the website link and track clicks;",
            "baseline report on impressions and actions in the first period.",
          ],
        },
        {
          title: "Short training",
          body: "At the end, we explain how local discovery works, what impacts rankings, and what simple actions you can do to maintain momentum.",
        },
      ],
    },
    faq: {
      title: "Quick Start FAQ",
      items: [
        {
          q: "How many locations are included?",
          a: "Typically we clean up one primary location. If you have multiple locations, we can run Quick Start per location or agree on an expanded scope.",
        },
        {
          q: "What if listings already exist but look messy?",
          a: "Then we don’t start from scratch - we fix the existing profiles: correct data, clean duplicates, restore access, and improve copy and photos.",
        },
        {
          q: "When will I see results?",
          a: "Most businesses see early improvements in views and clicks within 2–4 weeks after cleanup.",
        },
        {
          q: "Do I have to continue with other packages?",
          a: "No. Quick Start works as a standalone project. If you want to scale (SEO, reviews, ads), this foundation helps you move faster.",
        },
      ],
    },
    howto: {
      title: "Full how-to: replicate Quick Start yourself",
      intro:
        "Below is an honest step-by-step plan you can follow on your own. In the package we do it for you, but you can use this as a detailed guide and check off tasks.",
    },
    howToSteps: [
      {
        id: "step1-nap",
        title: "Step 1. Standardize NAP and core business data",
        description:
          "Create one definitive set of business information that every platform will use.",
        items: [
          "One final business name (how you want to be found)",
          "One primary phone number",
          "Accurate address (suite/floor/entrance if needed)",
          "Hours, holidays, special days",
          "Website and social links (if used in listings)",
        ],
      },
      {
        id: "step2-discovery",
        title: "Step 2. Find existing listings and duplicates",
        description:
          "Identify where your business is already present and what needs cleanup.",
        items: [
          "Search by name, phone, and address on major platforms",
          "Check Apple Maps, Facebook, and relevant directories",
          "List all found profiles in a spreadsheet (links + status)",
          "Mark which ones are primary vs duplicates/outdated",
        ],
      },
      {
        id: "step3-verification",
        title: "Step 3. Fix access and verification",
        description:
          "Make sure listings are under your control and properly verified.",
        items: [
          "Confirm access to the primary listings",
          "Request ownership transfer or recover access if needed",
          "Complete verification (SMS/email/video/mail when applicable)",
          "Document which accounts manage the profiles",
        ],
      },
      {
        id: "step4-duplicates",
        title: "Step 4. Remove or merge duplicates",
        description:
          "Clean up profiles that steal impressions and confuse algorithms.",
        items: [
          "Mark duplicates and auto-created profiles",
          "Submit duplicate reports",
          "Request merges where possible",
          "Re-check search results in 1–2 weeks",
        ],
      },
      {
        id: "step5-profile",
        title: "Step 5. Complete the listing",
        description:
          "After this step, the profile becomes clear and conversion-friendly.",
        items: [
          "Pick a primary category + 2–4 secondary ones",
          "Write a clear description: who you are, what you do, how to book",
          "Add services/menu if supported",
          "Set attributes (parking, Wi‑Fi, delivery, appointments, etc.)",
          "Proofread for errors and inconsistencies",
        ],
      },
      {
        id: "step6-photos",
        title: "Step 6. Prepare and upload photos",
        description: "Photos are a major trust factor.",
        items: [
          "1–2 storefront photos",
          "2–4 interior photos",
          "2–4 team/process photos",
          "examples of results (before/after, dishes, projects, etc.)",
          "choose a strong cover photo",
        ],
      },
      {
        id: "step7-reviews",
        title: "Step 7. Build a review collection system",
        description: "Don’t chase a one-time spike - build a consistent flow.",
        items: [
          "Choose a primary review source (usually Google) based on your niche",
          "Decide whether to focus on one profile first or multiple",
          "Set a steady monthly cadence above key competitors",
          "Prefer text reviews over star-only ratings",
          "Ask for photos when possible",
        ],
      },
      {
        id: "step8-geo",
        title: "Step 8. Validate geo pin and rendering",
        description:
          "Check how easy it is to find you and how the listing looks to users.",
        items: [
          "Pin is on the correct building and entrance",
          "Check mobile rendering (Android/iOS)",
          "Validate street view / imagery when available",
          "Spot-check rankings for key queries in your area",
        ],
      },
      {
        id: "step9-analytics",
        title: "Step 9. Set up minimal analytics",
        description: "Establish a baseline and track progress.",
        items: [
          "Add UTM tags to the website link",
          "Record baseline metrics: views, clicks, calls, directions",
          "Re-check in 2–4 weeks",
          "Decide next steps: SEO, ads, review work",
        ],
      },
    ],
  },
};

export default content;
