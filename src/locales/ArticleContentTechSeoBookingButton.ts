export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type HowToStepContent = {
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
  checklistTitle: string;
  howToStorageKey: string;
  steps: readonly HowToStepContent[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Настройка кнопки записи онлайн в карточках: зачем это нужно, чего ожидать и как правильно всё сделать",
    lead: [
      "Онлайн‑запись - один из самых сильных инструментов для локального бизнеса. Возможность записаться в один клик из карточки Google Business Profile (и других сервисов) увеличивает число обращений, повышает конверсию и создаёт ощущение профессионализма.",
      "Ниже - зачем это нужно, какие результаты ждать и как правильно подключить онлайн‑запись без ошибок.",
    ],
    sections: [
      {
        title: "Зачем нужна кнопка записи онлайн",
        blocks: [
          {
            title: "1. Скорость и удобство для клиента",
            body: "Пользователь не хочет звонить, ждать ответа и диктовать данные. Привычный путь - нажать кнопку, выбрать время, подтвердить. Если у конкурента это есть, а у вас нет - лид уходит к нему.",
          },
          {
            title: "2. Больше заявок и вне рабочего времени",
            body: "По данным локальных сервисов, 20–60% обращений приходят через кнопку записи. Много броней приходит ночью и утром, когда администратор недоступен. Онлайн‑запись работает круглосуточно и не теряет лиды.",
          },
          {
            title: "3. Доверие и современный имидж",
            body: "Кнопка записи сигнализирует о зрелости процессов: расписание, напоминания, прозрачность. Даже без мгновенной записи пользователь запоминает вас как «удобный» бренд.",
          },
          {
            title: "4. Плюсы для локального SEO",
            body: "Google любит карточки с расширенным функционалом и активностью. Наличие онлайн‑записи - полезный сигнал, который помогает карточке чаще попадать в локальные блоки и списки.",
          },
          {
            title: "5. Снижение нагрузки на администраторов",
            body: "Автоматическая запись сокращает звонки, распределяет время, синхронизируется с календарями и снижает ошибки. Это экономит ресурсы и повышает качество сервиса.",
          },
        ],
      },
      {
        title: "Чего ожидать после подключения",
        blocks: [
          {
            body: [
              "Рост бронирований через 2–4 недели, особенно в «мёртвые» часы.",
              "Снижение пропущенных звонков и узких мест в приёме заявок.",
              "Рост конверсии из просмотров карточки: меньше «просто посмотрел», больше действий.",
              "Более точное расписание, меньше отмен из‑за напоминаний и самообслуживания клиентов.",
              "Рост доли позитивных отзывов благодаря удобству записи.",
            ],
          },
        ],
      },
      {
        title: "Поддерживаемые сервисы и выбор платформы",
        blocks: [
          {
            body: "Для Google Business Profile доступны партнёры, среди которых: YClients (салоны/клиники/барбершопы), Calendly (консультации), Setmore, Reservio, Booksy, SimplyBook.me, Acuity Scheduling. Google часто подхватывает интеграцию автоматически, если вы подключены к поддерживаемому партнёру.",
          },
          {
            body: [
              "Выбирайте сервис под вашу нишу и регион. Для белорусского рынка важно учитывать поддержку местных часовых поясов и языка интерфейса.",
              "Проверьте интеграции с календарями и напоминаниями.",
              "Избегайте жёсткой «привязки» без экспорта данных.",
              "Убедитесь, что можно настроить услуги, длительность и цены.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая настройка (Google Business Profile)",
        blocks: [
          {
            title: "Шаг 1. Откройте панель управления",
            body: "Введите название компании в Google → карточка справа → «Профиль компании» → «Бронирование/Запись» (если доступно).",
          },
          {
            title: "Шаг 2. Выберите партнёра",
            body: "Выберите из списка поддерживаемых сервисов. Если раздел отсутствует, функция может быть недоступна для категории/региона - проверьте позже или используйте «Сайт/Форму» как запасной путь.",
          },
          {
            title: "Шаг 3. Зарегистрируйтесь и настройте сервис",
            body: "Заполните профиль: название, адрес, режим, сотрудники, услуги, длительность, цены, правила отмены, напоминания. Это база для корректной работы кнопки и синхронизации с карточкой.",
          },
          {
            title: "Шаг 4. Проверьте появление кнопки",
            body: "После активации у партнёра дождитесь синхронизации (обычно 24–72 часа). Проверьте на мобильном и десктопе, авторизованном и «чистом» просмотре (инкогнито/другое устройство).",
          },
          {
            title: "Шаг 5. Добавьте резервный сценарий",
            body: "На сайте - видимые CTA «Записаться онлайн» с UTM‑метками; в карточке - актуальная ссылка «Сайт». Это страхует на случай временной недоступности партнёра или категории.",
          },
        ],
      },
      {
        title: "Лучшие практики и ошибки",
        blocks: [
          {
            title: "Практики",
            body: [
              "Выведите кнопку/ссылку записи на главной и страницах услуг выше «сгиба».",
              "Включите напоминания и подтверждения: SMS/email/мессенджеры.",
              "Настройте календарь с буфером времени и правилами отмен.",
              "Собирайте отзывы после визита - автоматические запросы повышают рейтинг.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Скрытая или малозаметная кнопка записи.",
              "Несовпадение услуг/цен между сайтом, карточкой и сервисом записи.",
              "Отсутствие напоминаний → no‑show и отмены.",
              "Отсутствие UTM на ссылках записи → невозможно измерить эффект.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Доступно ли это всем категориям?",
            body: "Нет, поддержка зависит от ниши и региона. Если раздел «Бронирование» отсутствует - используйте ссылку на запись с сайта и убедитесь, что она заметна в карточке и на ключевых страницах.",
          },
          {
            title: "Когда виден эффект?",
            body: "Первые сдвиги - через 2–4 недели. Устойчивый рост - в горизонте 1–3 месяцев при стабильной работе сервиса и продвижении карточки (фото, отзывы, актуальность данных).",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [
          {
            body: "",
          },
        ],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleOnlineBookingChecklist",
    steps: [
      {
        id: "online-booking-checklist",
        title: "",
        description: "",
        items: [
          "Выберите партнёра записи под нишу и регион.",
          "Настройте услуги/цены/расписание/напоминания.",
          "Проверьте появление кнопки и добавьте резервные CTA.",
          "Проставьте UTM и измеряйте эффективность.",
          "Поддерживайте карточку фото и отзывами - это усиливает конверсию.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Adding an online booking button to your listing: why it matters and how to set it up",
    lead: [
      "Online booking is one of the strongest conversion tools for local businesses. Letting customers book in one click directly from your Google Business Profile can increase leads, reduce friction, and make your brand feel more professional.",
      "Below is what to expect and a practical setup checklist.",
    ],
    sections: [
      {
        title: "Why the booking button matters",
        blocks: [
          {
            title: "1. Speed and convenience",
            body: "Many customers don’t want to call, wait on hold, or repeat details. They prefer: click → pick a time → confirm. If a competitor offers that and you don’t, you lose the lead.",
          },
          {
            title: "2. More bookings (including after hours)",
            body: "In many categories, a meaningful share of inquiries comes from booking links-often outside business hours. Booking runs 24/7.",
          },
          {
            title: "3. Higher trust",
            body: "A booking button signals mature operations: schedule, confirmations, reminders, and transparency.",
          },
          {
            title: "4. Local SEO benefit",
            body: "Google tends to reward complete, high-utility listings. Extra features like booking can support engagement and conversion.",
          },
          {
            title: "5. Less admin workload",
            body: "Automation reduces calls, prevents scheduling errors, and syncs calendars.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Booking growth within 2–4 weeks.",
              "Fewer missed calls.",
              "Higher conversion from listing views.",
              "Fewer no-shows with reminders.",
              "More positive feedback due to convenience.",
            ],
          },
        ],
      },
      {
        title: "Platforms and providers",
        blocks: [
          {
            body: "Google supports booking integrations via partners. Common U.S. options include Calendly, Square Appointments, Acuity Scheduling, SimplyBook.me, Setmore, and others depending on category.",
          },
          {
            body: [
              "Choose based on your niche, location, and payment needs.",
              "Check calendar sync and automated reminders.",
              "Avoid lock-in without data export.",
              "Make sure services, durations, and pricing are configurable.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step setup (Google Business Profile)",
        blocks: [
          {
            title: "Step 1. Open your profile dashboard",
            body: "Search your business name on Google → open your Business Profile management panel → look for Booking/Appointments (if available).",
          },
          {
            title: "Step 2. Select a provider",
            body: "Pick a supported provider. If the section isn’t available, it may be restricted by category or region-use your website booking link as a backup.",
          },
          {
            title: "Step 3. Configure your services",
            body: "Set business info, staff, services, durations, pricing, cancellation rules, and reminders. The booking experience must match what the listing promises.",
          },
          {
            title: "Step 4. Verify the button appears",
            body: "After activation, sync can take 24–72 hours. Check mobile vs desktop and an incognito view.",
          },
          {
            title: "Step 5. Add a backup CTA",
            body: "Put visible ‘Book online’ CTAs on your website and keep the website link current in your listing. Add UTM so you can measure results.",
          },
        ],
      },
      {
        title: "Best practices and mistakes",
        blocks: [
          {
            title: "Best practices",
            body: [
              "Place booking CTAs above the fold on key pages.",
              "Enable reminders (text/email) and confirmations.",
              "Add buffer times and cancellation rules.",
              "Request reviews after appointments-automation increases volume.",
            ],
          },
          {
            title: "Mistakes",
            body: [
              "A hidden or low-visibility booking button.",
              "Pricing/services mismatch across site and provider.",
              "No reminders → more no-shows.",
              "No UTM tracking → you can’t measure impact.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Is it available for every category?",
            body: "Not always. Availability depends on business category and region. If Booking isn’t available, use a strong website booking link and make sure it’s visible.",
          },
          {
            title: "When will you see impact?",
            body: "Early changes often show in 2–4 weeks. More stable growth usually takes 1–3 months of consistent listing optimization.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [
          {
            body: "",
          },
        ],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleOnlineBookingChecklist",
    steps: [
      {
        id: "online-booking-checklist",
        title: "",
        description: "",
        items: [
          "Pick a booking provider for your niche and region.",
          "Configure services/pricing/schedule/reminders.",
          "Verify the button appears and add backup CTAs.",
          "Add UTM and measure performance.",
          "Support the listing with photos and reviews.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "הוספת כפתור הזמנה אונליין בכרטיס העסק: למה זה חשוב ואיך מגדירים",
    lead: [
      "הזמנה אונליין היא כלי חזק להמרה לעסקים מקומיים. אפשרות להזמין בקליק מתוך כרטיס העסק ב‑Google מעלה פניות ומפחיתה חיכוך.",
      "להלן מה לצפות ושלבי הגדרה פרקטיים.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "1. נוחות ומהירות",
            body: "לקוחות מעדיפים קליק → לבחור זמן → אישור, במקום שיחה והמתנה.",
          },
          {
            title: "2. יותר הזמנות (גם מחוץ לשעות)",
            body: "חלק משמעותי מההזמנות מגיע בשעות שהמשרד סגור. הזמנה אונליין עובדת 24/7.",
          },
          {
            title: "3. אמון ותדמית",
            body: "כפתור הזמנה משדר תהליך מסודר: לוח זמנים, תזכורות ושקיפות.",
          },
        ],
      },
      {
        title: "איך להגדיר (Google Business Profile)",
        blocks: [
          {
            title: "שלב 1. לבחור ספק",
            body: "בחרו מערכת הזמנות שמתאימה לנישה. בדקו סנכרון יומן ותזכורות.",
          },
          {
            title: "שלב 2. לוודא שהכפתור מופיע",
            body: "סנכרון יכול לקחת 24–72 שעות. בדקו במובייל ובדסקטופ.",
          },
          {
            title: "שלב 3. גיבוי דרך האתר",
            body: "הוסיפו CTA ברור באתר וקישור מעודכן בכרטיס. למדידה-להוסיף UTM.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [
          {
            body: "",
          },
        ],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleOnlineBookingChecklist",
    steps: [
      {
        id: "online-booking-checklist",
        title: "",
        description: "",
        items: [
          "לבחור ספק הזמנות לפי נישה ואזור.",
          "להגדיר שירותים/מחירים/לו״ז/תזכורות.",
          "לוודא שהכפתור מופיע ולהוסיף CTA גיבוי.",
          "להוסיף UTM ולמדוד יעילות.",
          "לחזק את הכרטיס עם תמונות וביקורות.",
        ],
      },
    ],
  },
};

export default content;
