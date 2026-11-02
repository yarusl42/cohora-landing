import { type SupportedLanguage, defaultLocale } from "config/config";

export type SeoEntry = {
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
};

type LocaleSeoConfig = {
  base: SeoEntry;
  byPath?: Record<string, Partial<SeoEntry>>;
};

const commonKeywordsRu = [
  "локальное SEO",
  "продвижение в картах",
  "Google Мой Бизнес",
  "Яндекс Справочник",
  "SEO для местного бизнеса",
  "продвижение сайта",
  "оптимизация сайта",
  "SEO услуги",
  "поисковая оптимизация",
];

const commonKeywordsEn = [
  "local SEO",
  "maps marketing",
  "Google Business Profile",
  "Yandex Business",
  "SEO for local business",
  "website promotion",
  "on-page SEO",
  "SEO services",
  "search engine optimization",
];

const commonKeywordsHe = [
  "SEO מקומי",
  "קידום במפות",
  "Google Business Profile",
  "Yandex",
  "קידום אתרים לעסקים מקומיים",
  "אופטימיזציה לאתר",
  "שיווק דיגיטלי מקומי",
  "ניהול מוניטין",
  "קידום אורגני",
];

export const seoByLocale: Record<SupportedLanguage, LocaleSeoConfig> = {
  by: {
    base: {
      title: "Локальное SEO - рост бизнеса в поиске и картах",
      description:
        "Локальное SEO для местного бизнеса: Google Карты, Яндекс, оптимизация сайта и репутации - чтобы получать больше звонков и заявок.",
      keywords: commonKeywordsRu,
      ogLocale: "ru_BY",
    },
    byPath: {
      // Core
      "/": {
        title: "Локальное SEO - продвижение бизнеса в картах и поиске",
        description:
          "Помогаем бизнесу расти в локальном поиске: карты, сайт, репутация и заявки.",
      },
      "/not-found": {
        title: "Страница не найдена",
        description: "Запрошенная страница не существует.",
      },

      // Top-level
      "/blog": {
        title: "Блог - локальное SEO, карты и рост заявок",
        description:
          "Практические статьи о локальном SEO: карты, сайт, контент, репутация и аналитика.",
      },
      "/kontakty": {
        title: "Контакты - консультация по локальному SEO",
        description:
          "Напишите нам - обсудим цели, оценим потенциал и предложим план продвижения.",
      },
      "/ceny": {
        title: "Цены - услуги локального SEO",
        description:
          "Стоимость и состав работ: карты, сайт, контент, отзывы и сопровождение.",
      },
      "/privatnost": {
        title: "Политика конфиденциальности",
        description:
          "Политика конфиденциальности и обработки персональных данных.",
      },
      "/usloviya": {
        title: "Условия использования",
        description:
          "Условия использования сайта и предоставления услуг локального SEO.",
      },
      "/primer": {
        title: "Пример - демо-страница",
        description:
          "Демонстрационная страница для проверки верстки и контента.",
      },

      // Cases index
      "/kejisy": {
        title: "Кейсы - результаты локального SEO и веб‑проектов",
        description:
          "Реальные проекты и результаты: карты, сайт, дизайн и рост обращений.",
      },

      // Case studies
      "/kejisy/dikaya-nails": {
        title: "Кейс: Dikaya Nails - локальное SEO и рост обращений",
        description:
          "Как улучшили видимость в картах и получили больше обращений для Dikaya Nails.",
      },
      "/kejisy/dr-adamskaya": {
        title: "Кейс: Dr. Adamskaya - локальное SEO для клиники",
        description:
          "Результаты локального продвижения: рост видимости и записей в медицинскую клинику.",
      },
      "/kejisy/azure-prestige": {
        title: "Кейс: Azure Prestige - дизайн и лендинг под конверсии",
        description:
          "Премиальный лендинг для VTC‑сервиса: скорость, UX и фокус на конверсию.",
      },
      "/kejisy/fts": {
        title: "Кейс: Future Tech School - быстрый лендинг для EdTech",
        description:
          "Лендинг для образовательного стартапа: современный дизайн и высокая производительность.",
      },
      "/kejisy/legal-buddy": {
        title: "Кейс: Legal Buddy - лендинг для AI‑юриста",
        description:
          "Минималистичный лендинг, который объясняет ценность продукта и вызывает доверие.",
      },

      // Categories
      "/kategorii/karty": {
        title: "Карты - статьи и гайды",
        description:
          "Как добавить и продвигать бизнес в картах и справочниках.",
      },
      "/kategorii/seo": {
        title: "SEO - статьи и гайды",
        description: "Методы SEO, которые помогают местному бизнесу расти.",
      },
      "/kategorii/reputatsiya": {
        title: "Репутация - отзывы и ORM",
        description: "Как управлять отзывами, рейтингом и репутацией в сети.",
      },
      "/kategorii/sayt": {
        title: "Сайт - структура, контент, оптимизация",
        description:
          "Как сделать сайт удобным, быстрым и эффективным для SEO и конверсий.",
      },

      // Articles: Maps
      "/statyi/karty/3d-tury": {
        title: "Статья: 3D‑туры и виртуальные экскурсии в карточках",
        description: "Как 3D‑туры влияют на конверсию и видимость в картах.",
      },
      "/statyi/karty/apple-business-connect": {
        title: "Статья: Apple Business Connect - регистрация",
        description: "Пошаговая регистрация бизнеса в Apple Business Connect.",
      },
      "/statyi/karty/interaktivnye-karty": {
        title: "Статья: Добавление интерактивных карт на сайт",
        description: "Интеграция карт на сайт для улучшения UX и SEO.",
      },
      "/statyi/karty/biznes-2gis": {
        title: "Статья: Добавление бизнеса в 2ГИС",
        description: "Регистрация и оптимизация карточки бизнеса в 2ГИС.",
      },
      "/statyi/karty/tovary-uslugi-gmb": {
        title: "Статья: Товары и услуги в Google Business Profile",
        description: "Как добавлять товары и услуги в карточку бизнеса.",
      },
      "/statyi/karty/google-my-business-setup": {
        title: "Статья: Настройка Google Business Profile под ключ",
        description:
          "Полная настройка карточки Google для максимальной видимости.",
      },
      "/statyi/karty/yandex-spravochnik-setup": {
        title: "Статья: Настройка Яндекс Справочника под ключ",
        description: "Оптимизация карточки в Яндексе для локального трафика.",
      },
      "/statyi/karty/media-optimizatsiya": {
        title: "Статья: Оптимизация медиа в карточках",
        description: "Фото и видео в карточках: требования и оптимизация.",
      },
      "/statyi/karty/prodvizhenie-2gis": {
        title: "Статья: Продвижение в 2ГИС",
        description: "Инструменты и стратегии продвижения в 2ГИС.",
      },
      "/statyi/karty/yandex-maps-prodvizhenie": {
        title: "Статья: Продвижение в Яндекс Картах",
        description: "Как повысить видимость в Яндекс Картах.",
      },
      "/statyi/karty/google-posts-akcii": {
        title: "Статья: Публикации и акции в Google Business Profile",
        description: "Использование постов и акций для привлечения клиентов.",
      },
      "/statyi/karty/google-business-registratsiya": {
        title: "Статья: Регистрация бизнеса в Google Business Profile",
        description: "Создание карточки и верификация в Google.",
      },
      "/statyi/karty/yandex-registratsiya": {
        title: "Статья: Регистрация бизнеса в Яндекс Справочнике",
        description: "Как зарегистрировать и подтвердить карточку в Яндексе.",
      },
      "/statyi/karty/google-maps-seo": {
        title: "Статья: SEO‑оптимизация Google Maps",
        description: "Тактики SEO для повышения видимости в Google Maps.",
      },
      "/statyi/karty/uvelichenie-pokazov": {
        title: "Статья: Увеличение показов в картах",
        description: "Как увеличить показы и клики в карточках бизнеса.",
      },
      "/statyi/karty/verifikatsiya-kartochek": {
        title: "Статья: Верификация карточек бизнеса",
        description: "Способы подтверждения карточек и решение проблем.",
      },
      "/statyi/karty/vosstanovlenie-google": {
        title: "Статья: Восстановление доступа к Google Business Profile",
        description: "Что делать при потере доступа к карточке.",
      },

      // Articles: Analytics & Behavior
      "/statyi/analitika/povedencheskie-faktory": {
        title: "Статья: Анализ поведенческих факторов на сайте",
        description:
          "Как анализировать поведенческие факторы для улучшения локального SEO.",
      },
      "/statyi/analitika/pozitsii-lokalnyy-poisk": {
        title: "Статья: Анализ позиций в локальном поиске",
        description: "Методы анализа позиций сайта в локальном поиске.",
      },
      "/statyi/analitika/vidimost-2gis-apple-maps": {
        title: "Статья: Анализ видимости в 2ГИС и Apple Maps",
        description: "Оценка видимости компании в навигаторах и картах.",
      },
      "/statyi/analitika/audit-kartochek": {
        title: "Статья: Бесплатный аудит карточек бизнеса",
        description: "Проверка и улучшение карточек бизнеса в картах.",
      },
      "/statyi/analitika/konkurentnyy-analiz": {
        title: "Статья: Конкурентный анализ локального SEO",
        description: "Как оценивать и опережать конкурентов в локальном SEO.",
      },
      "/statyi/analitika/nap-audit": {
        title: "Статья: NAP‑аудит и анализ картографических данных",
        description: "Проверка NAP‑данных и их влияние на локальное SEO.",
      },
      "/statyi/analitika/faktory-seo": {
        title: "Статья: Поведенческие факторы SEO",
        description: "Роль поведенческих факторов в ранжировании.",
      },

      // Articles: Catalogs & Links
      "/statyi/linkbuilding/belaya-strategiya": {
        title:
          "Статья: Белый линкбилдинг - стратегия построения ссылочного профиля",
        description:
          "Как строить качественный ссылочный профиль для локального SEO.",
      },
      "/statyi/linkbuilding/lokalnye-katalogi": {
        title: "Статья: Добавление в локальные отраслевые каталоги",
        description: "Регистрация бизнеса в локальных каталогах.",
      },
      "/statyi/linkbuilding/kraud-marketing": {
        title: "Статья: Крауд‑маркетинг и упоминания бренда",
        description: "Работа с площадками города и упоминаниями.",
      },
      "/statyi/linkbuilding/obmen-ssylkami": {
        title: "Статья: Обмен ссылками с партнерами по городу",
        description: "Партнерские ссылки для локального SEO.",
      },
      "/statyi/linkbuilding/gostevye-posty": {
        title: "Статья: Размещение гостевых постов на локальных площадках",
        description: "Как публиковаться на локальных сайтах и блогах.",
      },
      "/statyi/linkbuilding/press-relizy": {
        title: "Статья: Размещение пресс‑релизов в местных СМИ",
        description: "Как получать упоминания и ссылки из СМИ.",
      },
      "/statyi/linkbuilding/tematicheskie-katalogi": {
        title: "Статья: Размещение в тематических каталогах",
        description: "Выбор подходящих каталогов и оформление карточек.",
      },
      "/statyi/linkbuilding/biznes-spravochniki": {
        title: "Статья: Регистрация в локальных бизнес‑справочниках",
        description: "Где и как регистрировать компанию.",
      },
      "/statyi/linkbuilding/sayt-socseti": {
        title: "Статья: Связь сайта и соцсетей",
        description: "Интеграция сайта и социальных сетей для SEO.",
      },
      "/statyi/linkbuilding/zakupka-ssylok": {
        title: "Статья: Закупка ссылок с локальных тематических площадок",
        description:
          "Как безопасно работать со ссылками для локального бизнеса.",
      },

      // Articles: Content & Structure
      "/statyi/kontent/audit-struktury": {
        title: "Статья: Аудит структуры сайта для локального продвижения",
        description: "Как оптимизировать структуру сайта под геозапросы.",
      },
      "/statyi/kontent/seo-teksty-glavnaya": {
        title: "Статья: SEO‑тексты для главной страницы",
        description: "Рекомендации по написанию SEO‑текстов для главной.",
      },
      "/statyi/kontent/seo-teksty-regiony": {
        title: "Статья: SEO‑тексты для страниц регионов",
        description: "Как писать тексты для городских страниц.",
      },
      "/statyi/kontent/seo-teksty-uslugi": {
        title: "Статья: SEO‑тексты для страниц услуг",
        description: "Как подготовить тексты для услуг локального бизнеса.",
      },
      "/statyi/kontent/kontakty-optimizatsiya": {
        title: "Статья: Оптимизация контактов и схемы проезда",
        description: "Как оформить страницу контактов для лучшего SEO.",
      },
      "/statyi/kontent/struktura-sayta": {
        title: "Статья: Разработка структуры сайта для локального SEO",
        description: "Построение структуры сайта под геозависимые запросы.",
      },
      "/statyi/kontent/seo-kopirajting": {
        title: "Статья: SEO‑копирайтинг - создание релевантного контента",
        description:
          "Как создавать контент, который ранжируется и конвертирует.",
      },
      "/statyi/kontent/lokalnye-gaydy": {
        title: "Статья: Гайды для местных жителей",
        description: "Создание полезных гидов и подборок для жителей города.",
      },
      "/statyi/kontent/stranitsa-kontakty": {
        title: "Статья: Страница «Контакты» - создание и оптимизация",
        description: "Как оформить страницу контактов для бизнеса.",
      },
      "/statyi/kontent/lokalnye-keysy": {
        title: "Статья: Создание и продвижение локальных кейсов",
        description: "Как подготавливать кейсы и продвигать их.",
      },
      "/statyi/kontent/landing-page-gorod": {
        title: "Статья: Лендинги под конкретный город",
        description: "Создание и оптимизация городских лендингов.",
      },
      "/statyi/kontent/sayt-vizitka": {
        title: "Статья: Сайт‑визитка для локального бизнеса",
        description: "Когда и как делать сайт‑визитку.",
      },
      "/statyi/kontent/stranitsy-gorodov": {
        title: "Статья: Страницы городов для геозависимых запросов",
        description: "Как проектировать и заполнять городские страницы.",
      },
      "/statyi/kontent/stranitsy-rayonov": {
        title: "Статья: Страницы районов для крупных городов",
        description: "Построение страниц районов и микрорайонов.",
      },
      "/statyi/kontent/strategiya-kontenta": {
        title: "Статья: Стратегия контента для городских запросов",
        description: "Контент‑стратегия под локальный трафик.",
      },
      "/statyi/kontent/blog-lokalnyy": {
        title: "Статья: Ведение блога для локального трафика",
        description: "Как блог помогает привлекать локальных клиентов.",
      },

      // Articles: Local SEO by Niche
      "/statyi/seo/avtouslugi": {
        title: "Статья: Локальное SEO для автоуслуг",
        description:
          "Как продвигать автосервисы и автоуслуги в локальном поиске.",
      },
      "/statyi/seo/fitness": {
        title: "Статья: Локальное SEO для фитнеса",
        description: "Стратегия локального продвижения фитнес‑клубов.",
      },
      "/statyi/seo/gostinitsy": {
        title: "Статья: Локальное SEO для гостиниц",
        description:
          "Рекомендации по продвижению отелей в локальном поиске и картах.",
      },
      "/statyi/seo/meditsina": {
        title: "Статья: Локальное SEO для медицинских клиник",
        description:
          "Как клиникам получать больше звонков и записей из поиска.",
      },
      "/statyi/seo/restorany": {
        title: "Статья: Локальное SEO для ресторанов",
        description: "Как ресторанам повышать видимость в картах и поиске.",
      },
      "/statyi/seo/roznitsa": {
        title: "Статья: Локальное SEO для розничных магазинов",
        description: "Практики локального SEO для офлайн‑ритейла.",
      },
      "/statyi/seo/salony-krasoty": {
        title: "Статья: Локальное SEO для салонов красоты",
        description: "Увеличение видимости и записей через локальный поиск.",
      },
      "/statyi/seo/stomatologiya": {
        title: "Статья: Локальное SEO для стоматологии",
        description: "Продвижение стоматологических клиник в локальном поиске.",
      },
      "/statyi/seo/yuristy": {
        title: "Статья: Локальное SEO для юридических фирм",
        description:
          "Как юридическим компаниям получать заявки из локального поиска.",
      },

      // Articles: Reviews & Reputation
      "/statyi/reputatsiya/audit-otzyvov": {
        title: "Статья: Аудит отзывов о компании",
        description: "Как оценить качество отзывов и найти точки роста.",
      },
      "/statyi/reputatsiya/audit-brenda": {
        title: "Статья: Аудит репутации бренда в интернете",
        description: "Как провести аудит упоминаний и репутации бренда.",
      },
      "/statyi/reputatsiya/negativnye-otzyvy": {
        title: "Статья: Борьба с негативными отзывами",
        description: "Стратегия работы с негативом и предотвращение кризисов.",
      },
      "/statyi/reputatsiya/polozhitelnye-otzyvy": {
        title: "Статья: Как получать больше положительных отзывов",
        description: "Сценарии и процессы для роста количества отзывов.",
      },
      "/statyi/reputatsiya/monitoring-brenda": {
        title: "Статья: Мониторинг упоминаний бренда в сети",
        description: "Инструменты и процессы мониторинга репутации.",
      },
      "/statyi/reputatsiya/sbor-otzyvov-sms": {
        title: "Статья: Сбор отзывов с SMS и email‑напоминаниями",
        description: "Как автоматизировать получение отзывов.",
      },
      "/statyi/reputatsiya/novosti-kompanii": {
        title: "Статья: Новости компании и локальные события",
        description: "Контент‑подход для роста доверия и вовлеченности.",
      },
      "/statyi/reputatsiya/otvety-karty-socseti": {
        title: "Статья: Ответы на отзывы в картах и соцсетях",
        description: "Как правильно отвечать на отзывы и повышать доверие.",
      },
      "/statyi/reputatsiya/otzyvy-google": {
        title: "Статья: Больше отзывов в Google",
        description: "Как увеличить количество отзывов в Google.",
      },
      "/statyi/reputatsiya/otzyvy-yandex": {
        title: "Статья: Больше отзывов в Яндексе",
        description: "Как увеличить количество отзывов в сервисах Яндекса.",
      },
      "/statyi/reputatsiya/reyting-karty": {
        title: "Статья: Повышение рейтинга в картах",
        description: "Что влияет на рейтинг и как им управлять.",
      },
      "/statyi/reputatsiya/trustrank-avtoritet": {
        title: "Статья: Trustrank и авторитетность",
        description: "Как доверие и авторитет влияют на видимость.",
      },
      "/statyi/reputatsiya/otzyvy-foto": {
        title: "Статья: Отзывы с фото - создание и размещение",
        description: "Как стимулировать клиентов оставлять отзывы с фото.",
      },
      "/statyi/reputatsiya/stimulirovanie-klientov": {
        title: "Статья: Стимулирование клиентов к отзывам",
        description: "Методы мотивации клиентов оставлять отзывы.",
      },
      "/statyi/reputatsiya/orm-strategiya": {
        title: "Статья: Стратегия управления онлайн‑репутацией (ORM)",
        description: "Построение устойчивой системы управления репутацией.",
      },
      "/statyi/reputatsiya/udalenie-google-maps": {
        title: "Статья: Удаление ложных и негативных отзывов в Google Картах",
        description: "Что можно сделать для удаления/оспаривания отзывов.",
      },

      // Articles: Technical SEO
      "/statyi/tech-seo/3d-tury": {
        title: "Статья: 3D‑туры в карточках (технические аспекты)",
        description: "Технические нюансы 3D‑туров и интеграций.",
      },
      "/statyi/tech-seo/seo-audit": {
        title: "Статья: Аудит технического SEO сайта",
        description: "Как проводить технический аудит SEO и находить ошибки.",
      },
      "/statyi/tech-seo/chto-takoe-seo": {
        title: "Статья: Что такое SEO‑оптимизация",
        description:
          "Базовые понятия SEO и как работает поисковое продвижение.",
      },
      "/statyi/tech-seo/klasterizatsiya": {
        title: "Статья: Кластеризация ключевых слов",
        description: "Как группировать запросы для структуры сайта и контента.",
      },
      "/statyi/tech-seo/schema-org": {
        title:
          "Статья: Микроразметка Schema.org для Organization/LocalBusiness",
        description: "Как внедрять микроразметку и улучшать сниппеты.",
      },
      "/statyi/tech-seo/knopka-zapisi": {
        title: "Статья: Настройка кнопки записи онлайн в карточках",
        description: "Как подключить запись и повысить конверсии.",
      },
      "/statyi/tech-seo/voprosy-otvety": {
        title: "Статья: Настройка вопросов и ответов в карточках",
        description: "Как управлять Q&A и повышать доверие.",
      },
      "/statyi/tech-seo/meta-tegi": {
        title: "Статья: Оптимизация meta‑тегов Title и Description",
        description: "Практика написания мета‑тегов для страниц сайта.",
      },
      "/statyi/tech-seo/mobilnaya-optimizatsiya": {
        title: "Статья: Оптимизация сайта для мобильных устройств",
        description: "Что влияет на mobile‑friendly и Core Web Vitals.",
      },
      "/statyi/tech-seo/semanticheskoe-yadro": {
        title: "Статья: Семантическое ядро и keyword research",
        description: "Как собирать семантику и планировать структуру.",
      },
      "/statyi/tech-seo/lokalnyy-seo-audit": {
        title: "Статья: SEO‑аудит сайта для локального бизнеса",
        description: "Как проверять сайт под локальные запросы и карты.",
      },
      "/statyi/tech-seo/seo-soprovozhdenie": {
        title: "Статья: SEO‑сопровождение и постоянная поддержка",
        description: "Как выстроить регулярную работу по SEO.",
      },
      "/statyi/tech-seo/zvonki-marshruty": {
        title: "Статья: Увеличение количества звонков и маршрутов",
        description: "Как повышать звонки/маршруты из карточек бизнеса.",
      },
      "/statyi/tech-seo/perelinkovka-lokalnaya": {
        title: "Статья: Внутренняя перелинковка для локального SEO",
        description: "Как перелинковывать страницы под локальные кластеры.",
      },
      "/statyi/tech-seo/perelinkovka-principy": {
        title: "Статья: Внутренняя перелинковка - общие принципы",
        description: "Базовые принципы внутренней перелинковки в SEO.",
      },
    },
  },
  il: {
    base: {
      title: "SEO מקומי - קידום עסק במפות ובחיפוש",
      description:
        "שירותי SEO מקומי לעסקים: Google Business Profile, נראות במפות, אופטימיזציה לאתר וניהול מוניטין כדי לקבל יותר פניות.",
      keywords: commonKeywordsHe,
      ogLocale: "he_IL",
    },
    byPath: {
      // Core
      "/": {
        title: "SEO מקומי - קידום עסק במפות ובחיפוש",
        description:
          "מגדילים נראות מקומית: מפות, אתר, תוכן ומוניטין - כדי להביא יותר לקוחות.",
      },
      "/lo-nimca": {
        title: "דף לא נמצא",
        description: "הדף המבוקש אינו קיים.",
      },

      // Top-level
      "/blog": {
        title: "בלוג - SEO מקומי, מפות ותוכן",
        description:
          "מאמרים פרקטיים על SEO מקומי: קידום במפות, אופטימיזציה לאתר, תוכן ומוניטין.",
      },
      "/kesher": {
        title: "יצירת קשר - ייעוץ SEO מקומי",
        description:
          "דבר איתנו: נבין מטרות, נבדוק פוטנציאל ונבנה תוכנית קידום.",
      },
      "/mehirim": {
        title: "מחירים - שירותי SEO מקומי",
        description:
          "מחירים וחבילות: קידום במפות, אתר, תוכן, ביקורות וליווי שוטף.",
      },
      "/pratiyut": {
        title: "מדיניות פרטיות",
        description: "מדיניות פרטיות ועיבוד נתונים אישיים.",
      },
      "/tnayim": {
        title: "תנאי שימוש",
        description: "תנאי השימוש באתר והספקת שירותי SEO מקומי.",
      },
      "/tikim": {
        title: "מקרי מבחן - תוצאות SEO מקומי ואתרים",
        description: "פרויקטים ותוצאות: נראות במפות, אתר, עיצוב ושיפור פניות.",
      },

      // Case studies
      "/tikim/dikaya-nails": {
        title: "מקרה בוחן: Dikaya Nails - SEO מקומי",
        description:
          "תוצאות קידום מקומי עבור Dikaya Nails: נראות במפות וגידול בפניות.",
      },
      "/tikim/dr-adamskaya": {
        title: "מקרה בוחן: Dr. Adamskaya - SEO מקומי",
        description:
          "תוצאות קידום מקומי עבור מרפאה רפואית: שיפור נראות והגדלת פניות.",
      },
      "/tikim/azure-prestige": {
        title: "מקרה בוחן: Azure Prestige - עיצוב ופיתוח אתר",
        description: "דף נחיתה לשירות VTC: מהיר, פרימיום וממוקד המרות.",
      },
      "/tikim/fts": {
        title: "מקרה בוחן: Future Tech School - פיתוח אתר",
        description: "דף נחיתה לסטארט-אפ חינוכי: עיצוב מודרני וביצועים גבוהים.",
      },
      "/tikim/legal-buddy": {
        title: "מקרה בוחן: Legal Buddy - פיתוח אתר",
        description:
          "דף נחיתה למוצר AI בתחום המשפט: מינימליסטי, חד ומעורר אמון.",
      },

      // Articles: Maps
      "/maamarim/mapot/3d-turim": {
        title: "מאמר: סיורים וירטואליים בתלת־ממד בכרטיסי עסק",
        description: "איך סיור תלת־ממד משפר אמון, המרות ונראות במפות.",
      },
      "/maamarim/mapot/apple-business": {
        title: "מאמר: רישום ב‑Apple Business Connect",
        description:
          "מדריך קצר וברור לרישום ואימות עסק ב‑Apple Business Connect.",
      },
      "/maamarim/mapot/mapot-interaktiviot": {
        title: "מאמר: הוספת מפות אינטראקטיביות לאתר",
        description: "שילוב מפות באתר לשיפור חווית המשתמש ו-SEO.",
      },
      "/maamarim/mapot/eseq-2gis": {
        title: "מאמר: הוספת עסק ל-2GIS",
        description: "רישום ואופטימיזציה של כרטיס עסק ב-2GIS.",
      },
      "/maamarim/mapot/tmunot-optimizatsya": {
        title: "מאמר: הוספה ואופטימיזציה של תמונות בכרטיסים",
        description: "השיטות הטובות ביותר לעבודה עם תמונות בכרטיסי עסק.",
      },
      "/maamarim/mapot/mutzarim-sherutim-gmb": {
        title: "מאמר: מוצרים ושירותים ב-Google Business Profile",
        description: "הוספת מבחר מוצרים ל-Google Business Profile.",
      },
      "/maamarim/mapot/google-business-hachanat": {
        title: "מאמר: הגדרת Google Business Profile מפתח",
        description: "הגדרה מלאה של כרטיס Google למקסימום נראות.",
      },
      "/maamarim/mapot/yandex-spravocnik-hachanat": {
        title: "מאמר: הגדרת מדריך Yandex מפתח",
        description: "אופטימיזציה של כרטיס עסק ב-Yandex לטראפיק מקומי.",
      },
      "/maamarim/mapot/media-optimizatsya": {
        title: "מאמר: אופטימיזציה של מדיה בכרטיסים",
        description: "תמונות ווידאו בכרטיסים: דרישות ואופטימיזציה.",
      },
      "/maamarim/mapot/kidum-2gis": {
        title: "מאמר: קידום ב-2GIS",
        description: "כלים ואסטרטגיות לקידום ב-2GIS.",
      },
      "/maamarim/mapot/yandex-maps-kidum": {
        title: "מאמר: קידום ב-Yandex Maps",
        description: "כיצד לשפר נראות ב-Yandex Maps.",
      },
      "/maamarim/mapot/google-prasim-mivtzayim": {
        title: "מאמר: פוסטים ומבצעים ב‑Google",
        description:
          "איך להשתמש בפוסטים ובמבצעים כדי להביא לקוחות ולשפר פעילות בפרופיל.",
      },
      "/maamarim/mapot/google-business-harshama": {
        title: "מאמר: רישום עסק ב-Google Business Profile",
        description: "יצירת כרטיס ואימות ב-Google.",
      },
      "/maamarim/mapot/yandex-harshama": {
        title: "מאמר: רישום עסק ב-Yandex",
        description: "כיצד לרשום ולאמת כרטיס עסק ב-Yandex.",
      },
      "/maamarim/mapot/google-maps-seo": {
        title: "מאמר: אופטימיזציית SEO ל-Google Maps",
        description: "טקטיקות SEO לשיפור נראות ב-Google Maps.",
      },
      "/maamarim/mapot/hagbala-hafgamut": {
        title: "מאמר: הגדלת חשיפות במפות",
        description: "כיצד להגדיל חשיפות והקלקות בכרטיסי עסק.",
      },
      "/maamarim/mapot/verifikatsia-kartis": {
        title: "מאמר: אימות כרטיסי עסק",
        description: "שיטות אימות ופתרון בעיות נפוצות.",
      },
      "/maamarim/mapot/shikum-google": {
        title: "מאמר: שחזור גישה ל-Google Business Profile",
        description: "מה לעשות במקרה של אובדן גישה לכרטיס.",
      },
      // Articles: Analytics & Behavior
      "/maamarim/analitics/gormei-hitnahagut": {
        title: "מאמר: ניתוח גורמי התנהגות באתר",
        description: "כיצד לנתח גורמי התנהגות לשיפור SEO מקומי.",
      },
      "/maamarim/analitics/mikudim-hafes-mekomi": {
        title: "מאמר: ניתוח מיקומים בחיפוש מקומי",
        description: "שיטות למדידת מיקומים בחיפוש מקומי.",
      },
      "/maamarim/analitics/niraut-2gis-apple-maps": {
        title: "מאמר: נראות ב-2GIS וב-Apple Maps",
        description: "הערכת נראות העסק בניווטים ומפות.",
      },
      "/maamarim/analitics/audit-kartis-eseq": {
        title: "מאמר: בדיקת כרטיסי עסק בחינם",
        description: "בדיקה ושיפור כרטיסי עסק במפות.",
      },
      "/maamarim/analitics/nituah-mitkharim": {
        title: "מאמר: ניתוח מתחרים ב-SEO מקומי",
        description: "כיצד לנתח מתחרים ולבנות יתרון.",
      },
      "/maamarim/analitics/nap-audit": {
        title: "מאמר: NAP audit וניתוח נתוני מפות",
        description: "בדיקת עקביות NAP והשפעתה על SEO מקומי.",
      },
      "/maamarim/analitics/gormei-seo": {
        title: "מאמר: גורמי SEO התנהגותיים",
        description: "תפקיד גורמי התנהגות בדירוג.",
      },

      // Articles: Catalogs & Links
      "/maamarim/linkbuilding/strategia-lavan": {
        title: "מאמר: בניית קישורים לבנה - אסטרטגיה לפרופיל קישורים",
        description: "כיצד לבנות פרופיל קישורים איכותי ל-SEO מקומי.",
      },
      "/maamarim/linkbuilding/katalogim-mekomiyim": {
        title: "מאמר: הוספה לקטלוגים מקומיים",
        description: "רישום העסק בקטלוגים מקומיים.",
      },
      "/maamarim/linkbuilding/crowd-marketing": {
        title: "מאמר: קראוד מרקטינג ואזכורי מותג",
        description: "עבודה עם פלטפורמות מקומיות ואזכורים.",
      },
      "/maamarim/linkbuilding/halifat-kishurim": {
        title: "מאמר: החלפת קישורים עם שותפים בעיר",
        description: "קישורי שותפים ל-SEO מקומי.",
      },
      "/maamarim/linkbuilding/postim-orhim": {
        title: "מאמר: פוסטים אורחים בפלטפורמות מקומיות",
        description: "איך לפרסם באתרים ובבלוגים מקומיים.",
      },
      "/maamarim/linkbuilding/press-release": {
        title: "מאמר: פרסומי עיתונות במדיה המקומית",
        description: "איך לקבל אזכורים וקישורים מהתקשורת.",
      },
      "/maamarim/linkbuilding/katalogim-tematiim": {
        title: "מאמר: קטלוגים נושאיים",
        description: "בחירת קטלוגים מתאימים והגדרת כרטיסים.",
      },
      "/maamarim/linkbuilding/sfarim-eseq": {
        title: "מאמר: ספרי עסקים מקומיים",
        description: "איפה ואיך לרשום את החברה.",
      },
      "/maamarim/linkbuilding/atar-rashtey-hevratiyot": {
        title: "מאמר: קישור בין אתר לרשתות חברתיות",
        description: "אינטגרציה של אתר ורשתות חברתיות ל-SEO.",
      },
      "/maamarim/linkbuilding/rekishat-kishurim": {
        title: "מאמר: רכישת קישורים מפלטפורמות מקומיות",
        description: "איך לעבוד עם קישורים בצורה בטוחה לעסק מקומי.",
      },

      // Articles: Content & Structure
      "/maamarim/tokhen/audit-mivne": {
        title: "מאמר: בדיקת מבנה האתר לקידום מקומי",
        description: "איך לאופטימיזציה של מבנה האתר לשאילתות גיאוגרפיות.",
      },
      "/maamarim/tokhen/seo-tekstim-rashi": {
        title: "מאמר: טקסטי SEO לדף הבית",
        description: "המלצות לכתיבת טקסטי SEO לדף הבית.",
      },
      "/maamarim/tokhen/seo-tekstim-ezorim": {
        title: "מאמר: טקסטי SEO לדפי אזורים",
        description: "איך לכתוב טקסטים לדפי ערים/אזורים.",
      },
      "/maamarim/tokhen/seo-tekstim-sherutim": {
        title: "מאמר: טקסטי SEO לדפי שירותים",
        description: "איך להכין טקסטים לשירותים של עסק מקומי.",
      },
      "/maamarim/tokhen/kontakt-optimizatsya": {
        title: "מאמר: אופטימיזציה של אנשי קשר ומפת הגעה",
        description: "איך לבנות דף קשר שעוזר ל-SEO.",
      },
      "/maamarim/tokhen/mivne-atar": {
        title: "מאמר: בניית מבנה אתר ל-SEO מקומי",
        description: "בניית מבנה אתר עבור שאילתות תלויות מיקום.",
      },
      "/maamarim/tokhen/seo-copywriting": {
        title: "מאמר: SEO קופי - יצירת תוכן רלוונטי",
        description: "איך ליצור תוכן שמדורג וממיר.",
      },
      "/maamarim/tokhen/madrichim-mekomiyim": {
        title: "מאמר: מדריכים לתושבים מקומיים",
        description: "יצירת מדריכים מועילים לתושבי העיר.",
      },
      "/maamarim/tokhen/daf-kontakt": {
        title: "מאמר: דף קשר - יצירה ואופטימיזציה",
        description: "איך לבנות דף קשר נכון לעסק.",
      },
      "/maamarim/tokhen/case-studies-mekomiyim": {
        title: "מאמר: מקרי מבחן מקומיים",
        description: "איך להכין ולהפיץ מקרי מבחן.",
      },
      "/maamarim/tokhen/landing-page-ir": {
        title: "מאמר: דפי נחיתה לעיר ספציפית",
        description: "יצירה ואופטימיזציה של דפי נחיתה עירוניים.",
      },
      "/maamarim/tokhen/atar-kartvisit": {
        title: "מאמר: אתר כרטיס ביקור לעסק מקומי",
        description: "מתי ואיך ליצור אתר כרטיס ביקור.",
      },
      "/maamarim/tokhen/dfey-arim": {
        title: "מאמר: דפי ערים לשאילתות גיאוגרפיות",
        description: "איך לבנות ולמלא דפי ערים.",
      },
      "/maamarim/tokhen/dfey-shkhunot": {
        title: "מאמר: דפי שכונות לערים גדולות",
        description: "בניית דפי שכונות ומיקרו‑אזורים.",
      },
      "/maamarim/tokhen/strategiat-tokhen": {
        title: "מאמר: אסטרטגיית תוכן לשאילתות עירוניות",
        description: "אסטרטגיית תוכן לטראפיק מקומי.",
      },
      "/maamarim/tokhen/blog-mekomi": {
        title: "מאמר: בלוג לטראפיק מקומי",
        description: "איך בלוג עוזר למשוך לקוחות מקומיים.",
      },

      // Articles: Local SEO by Niche
      "/maamarim/seo/sherutei-rehev": {
        title: "מאמר: SEO מקומי לשירותי רכב",
        description: "איך לקדם שירותי רכב בחיפוש מקומי.",
      },
      "/maamarim/seo/fitness": {
        title: "מאמר: SEO מקומי לפיטנס",
        description: "אסטרטגיית קידום מקומי למועדוני כושר.",
      },
      "/maamarim/seo/malnot": {
        title: "מאמר: SEO מקומי למלונות",
        description: "המלצות לקידום מלונות בחיפוש ובמפות.",
      },
      "/maamarim/seo/refua": {
        title: "מאמר: SEO מקומי לרפואה",
        description: "איך קליניקות משיגות יותר פניות מהחיפוש.",
      },
      "/maamarim/seo/misadaot": {
        title: "מאמר: SEO מקומי למסעדות",
        description: "איך לשפר נראות מסעדה במפות ובחיפוש.",
      },
      "/maamarim/seo/hanuyot": {
        title: "מאמר: SEO מקומי לחנויות",
        description: "פרקטיקות SEO מקומי לקמעונאות.",
      },
      "/maamarim/seo/saloni-yofi": {
        title: "מאמר: SEO מקומי למכוני יופי",
        description: "הגדלת נראות ותורים דרך חיפוש מקומי.",
      },
      "/maamarim/seo/stomatologiya": {
        title: "מאמר: SEO מקומי לסטומטולוגיה",
        description: "קידום מרפאות שיניים בחיפוש מקומי.",
      },
      "/maamarim/seo/orhey-din": {
        title: "מאמר: SEO מקומי למשרדי עורכי דין",
        description: "איך משרדים משפטיים מקבלים לידים מהחיפוש.",
      },

      // Articles: Reviews & Reputation
      "/maamarim/reputatsya/audit-bikoret": {
        title: "מאמר: בדיקת ביקורות על החברה",
        description: "איך להעריך ביקורות ולמצוא נקודות לשיפור.",
      },
      "/maamarim/reputatsya/audit-mutzar": {
        title: "מאמר: בדיקת מוניטין מותג ברשת",
        description: "איך לבצע בדיקת אזכורים ומוניטין.",
      },
      "/maamarim/reputatsya/bikoret-shliliyot": {
        title: "מאמר: התמודדות עם ביקורות שליליות",
        description: "אסטרטגיה לעבודה עם שלילי ומניעת משברים.",
      },
      "/maamarim/reputatsya/bikoret-hiyuviyot": {
        title: "מאמר: יותר ביקורות חיוביות",
        description: "תהליכים להגדלת כמות ביקורות.",
      },
      "/maamarim/reputatsya/maakav-mutzar": {
        title: "מאמר: מעקב אזכורי מותג",
        description: "כלים ותהליך למעקב מוניטין.",
      },
      "/maamarim/reputatsya/iguv-bikoret-sms": {
        title: 'מאמר: איסוף ביקורות עם SMS ודוא"ל',
        description: "איך לאוטומט תהליך איסוף ביקורות.",
      },
      "/maamarim/reputatsya/hadashot-hevra": {
        title: "מאמר: חדשות חברה ואירועים מקומיים",
        description: "גישה תוכניתית לחיזוק אמון.",
      },
      "/maamarim/reputatsya/tshuvot-mapot-social": {
        title: "מאמר: תגובות לביקורות במפות וברשתות",
        description: "איך להגיב נכון לביקורות.",
      },
      "/maamarim/reputatsya/bikoret-google": {
        title: "מאמר: הגדלת ביקורות ב-Google",
        description: "איך להגדיל כמות ביקורות ב-Google.",
      },
      "/maamarim/reputatsya/bikoret-yandex": {
        title: "מאמר: הגדלת ביקורות ב-Yandex",
        description: "איך להגדיל כמות ביקורות ב-Yandex.",
      },
      "/maamarim/reputatsya/deiruga-mapot": {
        title: "מאמר: שיפור דירוג במפות",
        description: "מה משפיע על דירוג ואיך לנהל אותו.",
      },
      "/maamarim/reputatsya/trustrank-samchut": {
        title: "מאמר: Trustrank וסמכות",
        description: "איך אמון וסמכות משפיעים על נראות.",
      },
      "/maamarim/reputatsya/bikoret-tmunot": {
        title: "מאמר: ביקורות עם תמונות",
        description: "איך לעודד לקוחות להשאיר ביקורות עם תמונות.",
      },
      "/maamarim/reputatsya/zilum-lakohot": {
        title: "מאמר: עידוד לקוחות להשאיר ביקורות",
        description: "שיטות לעידוד לקוחות להשאיר ביקורות.",
      },
      "/maamarim/reputatsya/orm-strategia": {
        title: "מאמר: אסטרטגיית ORM לניהול מוניטין",
        description: "בניית מערכת יציבה לניהול מוניטין.",
      },
      "/maamarim/reputatsya/hasara-google-maps": {
        title: "מאמר: הסרת ביקורות שקריות ב-Google Maps",
        description: "מה אפשר לעשות להסרה/ערעור ביקורות.",
      },

      // Articles: Technical SEO
      "/maamarim/tech-seo/3d-turim": {
        title: "מאמר: 3D‑טורים בכרטיסים (טכני)",
        description: "היבטים טכניים של 3D והטמעות.",
      },
      "/maamarim/tech-seo/seo-audit": {
        title: "מאמר: בדיקת SEO טכנית",
        description: "איך לבצע בדיקת SEO טכנית ולאתר תקלות.",
      },
      "/maamarim/tech-seo/ma-hu-seo": {
        title: "מאמר: מהו SEO",
        description: "מושגי בסיס ב-SEO ואיך קידום עובד.",
      },
      "/maamarim/tech-seo/klasterizatsya": {
        title: "מאמר: קלאסטריזציה של מילות מפתח",
        description: "איך לקבץ מילות מפתח למבנה ותוכן.",
      },
      "/maamarim/tech-seo/schema-org": {
        title: "מאמר: Schema.org מיקרודאטה ל-LocalBusiness",
        description: "איך להטמיע מיקרודאטה ולשפר תצוגת תוצאות.",
      },
      "/maamarim/tech-seo/knufat-kviat-toar": {
        title: "מאמר: כפתור קביעת תור בכרטיסים",
        description: "איך לחבר קביעת תורים ולהגדיל המרות.",
      },
      "/maamarim/tech-seo/sheilot-tshuvot": {
        title: "מאמר: שאלות ותשובות בכרטיסים",
        description: "איך לנהל Q&A ולהגביר אמון.",
      },
      "/maamarim/tech-seo/meta-tagim": {
        title: "מאמר: אופטימיזציית Title ו-Description",
        description: "פרקטיקה לכתיבת תגיות מטא לעמודים.",
      },
      "/maamarim/tech-seo/optimizatsya-nayad": {
        title: "מאמר: אופטימיזציה למובייל",
        description: "מה משפיע על Mobile‑friendly ו-Core Web Vitals.",
      },
      "/maamarim/tech-seo/lev-semanti": {
        title: "מאמר: ליבה סמנטית ו-Keyword Research",
        description: "איך לבנות סמנטיקה ולתכנן מבנה אתר.",
      },
      "/maamarim/tech-seo/lokalnyy-seo-audit": {
        title: "מאמר: SEO‑אודיט לעסק מקומי",
        description: "איך לבדוק אתר לשאילתות מקומיות ומפות.",
      },
      "/maamarim/tech-seo/levui-seo": {
        title: "מאמר: ליווי SEO ותמיכה שוטפת",
        description: "איך לבנות תהליך עבודה שוטף ב-SEO.",
      },
      "/maamarim/tech-seo/tlefonim-mesilot": {
        title: "מאמר: יותר שיחות ומסלולים",
        description: "איך להגדיל שיחות/מסלולים מכרטיס העסק.",
      },
      "/maamarim/tech-seo/kishur-pnimi-mekomi": {
        title: "מאמר: קישור פנימי ל-SEO מקומי",
        description: "איך לבצע קישור פנימי לאשכולות מקומיים.",
      },
      "/maamarim/tech-seo/kishur-pnimi-prinsipim": {
        title: "מאמר: קישור פנימי - עקרונות",
        description: "עקרונות בסיס של קישור פנימי ב-SEO.",
      },
    },
  },
  en: {
    base: {
      title: "Local SEO - Grow your business in search and maps",
      description:
        "Professional local SEO services: Google Business Profile optimization, maps visibility, and website SEO for local businesses.",
      keywords: commonKeywordsEn,
      ogLocale: "en_US",
    },
    byPath: {
      "/": {
        title: "Home - Local SEO",
        description: "Local SEO and growth for businesses in maps and search.",
      },
      "/not-found": {
        title: "Page not found",
        description: "The page you requested does not exist.",
      },
      "/example": {
        title: "Example",
        description: "A demo page with example content.",
      },

      "/blog": {
        title: "Local SEO Blog - Guides & insights",
        description:
          "Expert articles on local SEO, maps marketing, and website optimization.",
      },
      "/contact": {
        title: "Contact - Local SEO",
        description:
          "Get in touch to discuss local SEO and growth for your business.",
      },
      "/pricing": {
        title: "Pricing - Local SEO Services",
        description:
          "Pricing for local SEO: maps promotion, website optimization, and reputation.",
      },
      "/privacy": {
        title: "Privacy Policy",
        description: "Privacy policy and personal data processing information.",
      },
      "/terms": {
        title: "Terms of Service",
        description: "Terms of service and website usage rules.",
      },

      "/cases": {
        title: "Case Studies - Local SEO & Websites",
        description:
          "Selected projects: local SEO, maps visibility, landing pages and websites.",
      },
      "/cases/dikaya-nails": {
        title: "Case Study: Dikaya Nails",
        description: "Local SEO results for Dikaya Nails.",
      },
      "/cases/dr-adamskaya": {
        title: "Case Study: Dr. Adamskaya",
        description: "Local SEO results for a medical clinic.",
      },
      "/cases/azure-prestige": {
        title: "Case Study: Azure Prestige",
        description:
          "Landing page for a VTC service: premium design and conversion-focused UX.",
      },
      "/cases/fts": {
        title: "Case Study: Future Tech School",
        description:
          "Landing page for an education startup: modern design and performance.",
      },
      "/cases/legal-buddy": {
        title: "Case Study: Legal Buddy",
        description:
          "Minimal landing page for an AI lawyer product that builds trust.",
      },

      "/categories/maps": {
        title: "Category: Maps",
        description:
          "Articles about adding and promoting businesses in maps and directories.",
      },
      "/categories/seo": {
        title: "Category: SEO",
        description: "Advanced SEO methods, tools, and practical guides.",
      },
      "/categories/reputation": {
        title: "Category: Reputation",
        description: "Reputation management and reviews for local businesses.",
      },
      "/categories/website": {
        title: "Category: Website",
        description: "Website creation and optimization for local businesses.",
      },

      "/articles/analytics/behavioral-factors": {
        title: "Behavioral Factors Analysis",
        description: "How to analyze behavioral signals to improve local SEO.",
      },
      "/articles/analytics/local-search-positions": {
        title: "Local Search Position Tracking",
        description: "Methods for measuring and analyzing local rankings.",
      },
      "/articles/analytics/visibility-2gis-apple-maps": {
        title: "Visibility in 2GIS & Apple Maps",
        description:
          "How to evaluate business visibility in navigation apps and maps.",
      },
      "/articles/analytics/business-profile-audit": {
        title: "Business Profile Audit (Free)",
        description: "How to audit and improve business profiles in maps.",
      },
      "/articles/analytics/competitor-analysis": {
        title: "Local SEO Competitor Analysis",
        description:
          "How to analyze competitors and build a winning local strategy.",
      },
      "/articles/analytics/nap-audit": {
        title: "NAP Audit & Map Data Consistency",
        description:
          "Why NAP consistency matters and how to audit map listings.",
      },
      "/articles/analytics/seo-factors": {
        title: "SEO Behavioral Factors",
        description: "How behavioral factors can influence rankings.",
      },

      "/articles/maps/3d-tours": {
        title: "3D Tours in Business Profiles",
        description: "How 3D tours influence visibility and conversions.",
      },
      "/articles/maps/apple-business-connect": {
        title: "Apple Business Connect Registration",
        description: "Step-by-step registration for Apple Business Connect.",
      },
      "/articles/maps/interactive-maps": {
        title: "Adding Interactive Maps to a Website",
        description: "Integrating maps to improve UX and local SEO.",
      },
      "/articles/maps/business-2gis": {
        title: "Add a Business to 2GIS",
        description: "How to register and optimize a 2GIS business card.",
      },
      "/articles/maps/photo-optimization": {
        title: "Photo Optimization for Business Profiles",
        description: "Best practices for photos in maps business profiles.",
      },
      "/articles/maps/gmb-products-services": {
        title: "Products & Services in Google Business Profile",
        description: "How to add offerings to improve profile performance.",
      },
      "/articles/maps/google-business-setup": {
        title: "Google Business Profile Setup",
        description: "Full setup process for maximum local visibility.",
      },
      "/articles/maps/yandex-directory-setup": {
        title: "Yandex Directory Setup",
        description: "Optimize your Yandex business profile for local traffic.",
      },
      "/articles/maps/media-optimization": {
        title: "Media Optimization in Business Profiles",
        description: "Photo/video requirements and optimization tips.",
      },
      "/articles/maps/2gis-promotion": {
        title: "2GIS Promotion",
        description: "Tools and strategies for promoting in 2GIS.",
      },
      "/articles/maps/yandex-maps-promotion": {
        title: "Yandex Maps Promotion",
        description: "How to increase visibility in Yandex Maps.",
      },
      "/articles/maps/google-posts-offers": {
        title: "Google Posts & Offers",
        description: "How to use posts and offers to attract customers.",
      },
      "/articles/maps/google-business-registration": {
        title: "Google Business Profile Registration",
        description: "Create and verify a Google business profile.",
      },
      "/articles/maps/yandex-registration": {
        title: "Yandex Registration",
        description: "Register and verify your business in Yandex.",
      },
      "/articles/maps/google-maps-seo": {
        title: "Google Maps SEO",
        description: "SEO tactics to improve visibility in Google Maps.",
      },
      "/articles/maps/increase-impressions": {
        title: "Increase Impressions in Maps",
        description:
          "How to increase impressions and clicks from maps listings.",
      },
      "/articles/maps/business-verification": {
        title: "Business Verification",
        description: "Verification methods and troubleshooting tips.",
      },
      "/articles/maps/google-access-recovery": {
        title: "Recover Access to Google Business Profile",
        description: "What to do if you lost access to the profile.",
      },

      "/articles/linkbuilding/white-hat-strategy": {
        title: "White-hat Link Building Strategy",
        description: "How to build a quality link profile for local SEO.",
      },
      "/articles/linkbuilding/local-directories": {
        title: "Local Industry Directories",
        description: "How to submit your business to local directories.",
      },
      "/articles/linkbuilding/crowd-marketing": {
        title: "Crowd Marketing & Brand Mentions",
        description: "How to work with communities and brand mentions.",
      },
      "/articles/linkbuilding/link-exchange": {
        title: "Local Partner Link Exchange",
        description: "How to exchange links with local partners safely.",
      },
      "/articles/linkbuilding/guest-posts": {
        title: "Guest Posts on Local Platforms",
        description: "How to publish on local sites and blogs.",
      },
      "/articles/linkbuilding/press-releases": {
        title: "Press Releases in Local Media",
        description: "How to earn mentions and links from media.",
      },
      "/articles/linkbuilding/thematic-directories": {
        title: "Thematic Directories",
        description: "How to pick relevant directories and list your business.",
      },
      "/articles/linkbuilding/business-directories": {
        title: "Business Directories",
        description: "Where and how to list your company locally.",
      },
      "/articles/linkbuilding/website-social-linking": {
        title: "Linking Website and Social Profiles",
        description: "How social integration supports SEO trust signals.",
      },
      "/articles/linkbuilding/buying-links": {
        title: "Buying Links (Safely)",
        description: "Risks and best practices for local link acquisition.",
      },

      "/articles/content/structure-audit": {
        title: "Website Structure Audit for Local SEO",
        description: "How to audit structure for geo-dependent queries.",
      },
      "/articles/content/homepage-seo-copy": {
        title: "Homepage SEO Copy",
        description: "How to write SEO copy for your homepage.",
      },
      "/articles/content/regional-seo-copy": {
        title: "Regional/City Page SEO Copy",
        description: "How to write copy for city and region pages.",
      },
      "/articles/content/service-seo-copy": {
        title: "Service Page SEO Copy",
        description: "How to write SEO copy for service pages.",
      },
      "/articles/content/contact-optimization": {
        title: "Contact Page Optimization",
        description: "How to optimize contact details and directions for SEO.",
      },
      "/articles/content/site-structure": {
        title: "Building a Site Structure for Local SEO",
        description: "How to design a structure for geo-based clusters.",
      },
      "/articles/content/seo-copywriting": {
        title: "SEO Copywriting",
        description: "How to create relevant content that ranks and converts.",
      },
      "/articles/content/local-guides": {
        title: "Local Guides Content",
        description: "How to create guides for local residents and visitors.",
      },
      "/articles/content/contact-page": {
        title: "Contact Page - Create & Optimize",
        description: "How to build a contact page that converts and helps SEO.",
      },
      "/articles/content/local-case-studies": {
        title: "Local Case Studies Content",
        description: "How to create and promote local case studies.",
      },
      "/articles/content/city-landing-page": {
        title: "City-specific Landing Pages",
        description: "How to build and optimize city landing pages.",
      },
      "/articles/content/business-card-site": {
        title: "Business Card Website",
        description:
          "When a simple business-card site is enough and how to build it.",
      },
      "/articles/content/city-pages": {
        title: "City Pages for Geo-dependent Queries",
        description: "How to build city pages that rank and convert.",
      },
      "/articles/content/district-pages": {
        title: "District Pages for Large Cities",
        description: "How to structure pages for districts and neighborhoods.",
      },
      "/articles/content/content-strategy": {
        title: "Content Strategy for City Queries",
        description: "How to plan content for local traffic growth.",
      },
      "/articles/content/local-blogging": {
        title: "Local Blogging",
        description: "How a blog attracts local traffic and customers.",
      },

      "/articles/seo/auto-services": {
        title: "Local SEO for Auto Services",
        description: "How to promote auto services in local search.",
      },
      "/articles/seo/fitness": {
        title: "Local SEO for Fitness",
        description: "Local growth strategy for fitness clubs.",
      },
      "/articles/seo/hotels": {
        title: "Local SEO for Hotels",
        description: "How hotels can win visibility in maps and local search.",
      },
      "/articles/seo/medical": {
        title: "Local SEO for Medical Clinics",
        description: "How clinics can get more calls and bookings from search.",
      },
      "/articles/seo/restaurants": {
        title: "Local SEO for Restaurants",
        description: "How restaurants improve visibility and bookings locally.",
      },
      "/articles/seo/retail": {
        title: "Local SEO for Retail",
        description: "Best practices for local SEO in offline retail.",
      },
      "/articles/seo/beauty-salons": {
        title: "Local SEO for Beauty Salons",
        description: "How beauty salons increase bookings via local search.",
      },
      "/articles/seo/dentistry": {
        title: "Local SEO for Dentistry",
        description: "How dental clinics grow via local search and maps.",
      },
      "/articles/seo/law-firms": {
        title: "Local SEO for Law Firms",
        description: "How law firms get qualified leads from local search.",
      },

      "/articles/reputation/review-audit": {
        title: "Review Audit",
        description: "How to audit reviews and identify growth opportunities.",
      },
      "/articles/reputation/brand-audit": {
        title: "Online Brand Reputation Audit",
        description: "How to audit brand mentions and reputation.",
      },
      "/articles/reputation/negative-reviews": {
        title: "Handling Negative Reviews",
        description: "A strategy for responding to negative feedback.",
      },
      "/articles/reputation/positive-reviews": {
        title: "Getting More Positive Reviews",
        description: "Processes to grow the volume of positive reviews.",
      },
      "/articles/reputation/brand-monitoring": {
        title: "Brand Monitoring",
        description: "Tools and workflows for reputation monitoring.",
      },
      "/articles/reputation/review-collection-sms": {
        title: "Review Collection via SMS & Email",
        description: "How to automate review requests with reminders.",
      },
      "/articles/reputation/company-news": {
        title: "Company News & Local Events",
        description: "Content ideas that strengthen trust and reputation.",
      },
      "/articles/reputation/replies-maps-social": {
        title: "Replying to Reviews in Maps & Social",
        description: "How to reply properly and build trust.",
      },
      "/articles/reputation/google-reviews": {
        title: "Increase Google Reviews",
        description: "How to increase the number of Google reviews.",
      },
      "/articles/reputation/yandex-reviews": {
        title: "Increase Yandex Reviews",
        description: "How to increase reviews in Yandex services.",
      },
      "/articles/reputation/maps-rating": {
        title: "Increase Maps Rating",
        description: "What affects ratings and how to improve them.",
      },
      "/articles/reputation/trustrank-authority": {
        title: "Trustrank & Authority",
        description: "How authority signals impact visibility.",
      },
      "/articles/reputation/photo-reviews": {
        title: "Photo Reviews",
        description: "How to encourage customers to leave photo reviews.",
      },
      "/articles/reputation/encourage-reviews": {
        title: "Encourage Customers to Review",
        description: "Ethical ways to motivate customers to leave reviews.",
      },
      "/articles/reputation/orm-strategy": {
        title: "ORM Strategy",
        description:
          "How to build a stable online reputation management system.",
      },
      "/articles/reputation/remove-google-maps": {
        title: "Remove Fake/Negative Reviews in Google Maps",
        description:
          "What you can do to dispute or remove problematic reviews.",
      },

      "/articles/tech-seo/3d-tours": {
        title: "3D Tours (Technical SEO)",
        description: "Technical considerations for 3D tours and integrations.",
      },
      "/articles/tech-seo/seo-audit": {
        title: "Technical SEO Audit",
        description: "How to run a technical SEO audit and find issues.",
      },
      "/articles/tech-seo/what-is-seo": {
        title: "What is SEO?",
        description: "SEO basics and how search optimization works.",
      },
      "/articles/tech-seo/keyword-clustering": {
        title: "Keyword Clustering",
        description:
          "How to cluster keywords for structure and content planning.",
      },
      "/articles/tech-seo/schema-org": {
        title: "Schema.org Markup (Organization/LocalBusiness)",
        description: "How to implement structured data and improve snippets.",
      },
      "/articles/tech-seo/booking-button": {
        title: "Booking Button Setup",
        description:
          "How to set up an online booking button in business profiles.",
      },
      "/articles/tech-seo/questions-answers": {
        title: "Questions & Answers Setup",
        description: "How to manage Q&A in business profiles.",
      },
      "/articles/tech-seo/meta-tags": {
        title: "Meta Tags Optimization",
        description: "How to write effective title and description tags.",
      },
      "/articles/tech-seo/mobile-optimization": {
        title: "Mobile Optimization",
        description: "How to optimize for mobile and Core Web Vitals.",
      },
      "/articles/tech-seo/semantic-core": {
        title: "Semantic Core & Keyword Research",
        description: "How to build a semantic core and plan structure.",
      },
      "/articles/tech-seo/local-seo-audit": {
        title: "Local SEO Site Audit",
        description: "How to audit a site specifically for local search.",
      },
      "/articles/tech-seo/seo-maintenance": {
        title: "SEO Maintenance",
        description: "How to run continuous SEO support and improvements.",
      },
      "/articles/tech-seo/calls-directions": {
        title: "Increase Calls & Directions",
        description: "How to increase calls and direction requests from maps.",
      },
      "/articles/tech-seo/local-internal-linking": {
        title: "Internal Linking for Local SEO",
        description: "How to build internal linking for local clusters.",
      },
      "/articles/tech-seo/internal-linking-principles": {
        title: "Internal Linking Principles",
        description: "General principles for internal linking in SEO.",
      },
    },
  },
};

export function getSeoEntryForPath(
  locale: SupportedLanguage,
  path: string,
): SeoEntry {
  const normalizedPath =
    path && path !== "" ? (path.startsWith("/") ? path : `/${path}`) : "/";
  const config = seoByLocale[locale] ?? seoByLocale[defaultLocale];
  const base = config.base;
  const overrides = config.byPath?.[normalizedPath] ?? {};
  return {
    title: overrides.title ?? base.title,
    description: overrides.description ?? base.description,
    keywords: overrides.keywords ?? base.keywords,
    ogLocale: overrides.ogLocale ?? base.ogLocale,
  };
}

export function getSeoFor(locale: SupportedLanguage, path: string): SeoEntry {
  return getSeoEntryForPath(locale, path);
}
