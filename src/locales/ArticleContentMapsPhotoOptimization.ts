export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  checklistTitle: string;
  checklistItems: string[];
  sections: ArticleSection[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Добавление и оптимизация фотографий в карточках: зачем это нужно, чего ожидать и как делать правильно",
    lead: [
      "Добавление и оптимизация фотографий в карточках белорусского бизнеса - это один из ключевых факторов успеха в локальном поиске в Минске, Бресте, Гомеле и других городах Беларуси. Качественные фото повышают доверие, улучшают CTR и помогают получать больше звонков и маршрутов из карт.",
      "Фотографии формируют первое впечатление за 3–5 секунд, помогают алгоритмам понимать «живость» бизнеса и напрямую влияют на клики «Позвонить», «Маршрут», «Сайт». Ниже - практическое руководство: какие фото нужны, как их готовить и размещать, чего ожидать по результатам и каких ошибок избегать.",
    ],
    checklistTitle: "Чек‑лист",
    checklistItems: [
      "Подготовьте серии: фасад, интерьер, процесс, команда, результат.",
      "Снимайте при хорошем свете, выравнивайте горизонт, избегайте шума.",
      "Оптимизируйте размер (до ~200–400 КБ), осмысленно называйте файлы.",
      "Обновляйте 1 раз в 2–4 недели, привязывайте к сезонам и акциям.",
      "Отслеживайте показы и клики по кнопкам, корректируйте стратегию.",
    ],
    sections: [
      {
        title: "Зачем добавлять фотографии в карточку",
        blocks: [
          {
            title: "1. Первое впечатление и отстройка от конкурентов",
            body: "Отсутствие фото, устаревшие или низкого качества кадры - верный путь потерять переход. Профессиональные и актуальные изображения повышают CTR карточки и вероятность выбора именно вас среди соседей по выдаче.",
          },
          {
            title: "2. Рост доверия за счёт «живых» фото",
            body: "Реальные кадры фасада, интерьера, команды, процесса и результата снижают тревожность, помогают понять уровень сервиса и подтверждают, что бизнес работает здесь и сейчас.",
          },
          {
            title: "3. Сигнал «активности» для алгоритмов",
            body: "Регулярные загрузки качественных фото - один из локальных сигналов, влияющих на частоту показов карточки в картах и локальной выдаче. Свежий визуальный контент помогает чаще попадать в конкурентные блоки и подборки.",
          },
          {
            title: "4. Улучшение конверсии",
            body: "По данным Google, карточки с качественными фото получают больше запросов маршрута и кликов. Пользователь быстрее убеждается, что попал по адресу и видит ожидаемое качество.",
          },
        ],
      },
      {
        title: "Какие фотографии нужны: обязательные категории",
        blocks: [
          {
            title: "1. Фасад и вход",
            body: "Общий вид здания, крупный план входа, ориентир со стороны улицы. Это снижает стресс при маршруте и уменьшает количество «потерянных» клиентов у неправильного подъезда.",
          },
          {
            title: "2. Интерьер и рабочие зоны",
            body: "Чистота, порядок, атмосфера. Для кафе, салонов, медцентров и магазинов интерьерные кадры критически важны для доверия.",
          },
          {
            title: "3. Процесс и услуги",
            body: "Наиболее кликабельные кадры: мастер делает услугу, специалист консультирует, идёт ремонт/монтаж/обработка заказов. Это визуальные доказательства компетенций.",
          },
          {
            title: "4. Команда",
            body: "Люди доверяют людям. Командные и портретные фото в едином стиле повышают доверие и конверсию, особенно в сферах услуг.",
          },
          {
            title: "5. Продукция и результат",
            body: "Для магазинов - товарные позиции и выкладки; для услуг - «до/после», готовые объекты, блюда. Кадры результата - ключевой триггер выбора.",
          },
        ],
      },
      {
        title: "Технические требования и оптимизация",
        blocks: [
          {
            title: "Форматы и размеры",
            body: [
              "Соотношение сторон 4:3 и 16:9 для обложек; вертикальные кадры - для мобильной выдачи.",
              "Разрешение не ниже 1600px по длинной стороне, но сжатие до 200–400 КБ для скорости.",
              "Формат JPEG для фото, PNG/WebP - по ситуации; избегайте чрезмерной компрессии с артефактами.",
            ],
          },
          {
            title: "Качество и обработка",
            body: [
              "Натуральный свет, выровненный горизонт, отсутствие «мыла» и цифрового шума.",
              "Минимальная ретушь: правки экспозиции/баланса белого, без «переслащивания» фильтрами.",
              "Серии фото в едином стиле: единые тона, ракурсы, композиции.",
            ],
          },
          {
            title: "Название файлов и метаданные",
            body: [
              "Осмысленные имена: service-manikur-minsk-studio-1.jpg вместо IMG_1234.jpg.",
              "Сохранение базовых EXIF (где уместно), но без лишних персональных данных.",
              "Структура папок для переиспользования на сайте и в соцсетях.",
            ],
          },
        ],
      },
      {
        title: "Стратегия публикаций и частота обновлений",
        blocks: [
          {
            title: "План обновлений",
            body: "Раз в 2–4 недели добавляйте серию из 5–10 новых фото: фасад/интерьер/процесс/результат. Это создаёт устойчивый сигнал активности для алгоритмов и постоянный визуальный «повод» для клиентов.",
          },
          {
            title: "Сезонность и поводы",
            body: "Обновляйте фото под сезон и акции: новая витрина, сезонное меню, обновление интерьера, новые услуги. Так карточка остаётся «живой» и релевантной ожиданиям аудитории.",
          },
        ],
      },
      {
        title: "Измерение эффекта и ожидаемые результаты",
        blocks: [
          {
            title: "Как оценивать результат",
            body: [
              "Показы карточки в локальной выдаче и картах.",
              "Клики по кнопкам «Маршрут», «Позвонить», «Сайт».",
              "CTR карточки в списках и частота выборов в сравнительных блоках.",
              "Изменение доли брендовых/небрендовых показов.",
            ],
          },
          {
            title: "Что обычно растёт после оптимизации",
            body: "Видимость по базовым запросам, частота показов в картах, клики в «Маршрут» и «Позвонить», конверсия из просмотра в действие. Эффект заметен через 2–4 недели при регулярных обновлениях.",
          },
        ],
      },
      {
        title: "Частые ошибки и как их избежать",
        blocks: [
          {
            body: [
              "Стоковые изображения вместо реальных - падает доверие и видимость.",
              "Случайные кадры без серии и единого стиля - ощущение хаоса.",
              "Перегруженные фильтры и чрезмерная обработка - «нечестная» картинка.",
              "Слишком тяжёлые файлы - медленная загрузка на мобильных.",
              "Отсутствие регулярных обновлений - карточка «застаивается».",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Сколько фото нужно?",
            body: "Минимум 15–30 стартовых кадров по категориям и ежемесячное пополнение 5–10 фото. Важно качество и релевантность, а не «заливка ради заливки».",
          },
          {
            title: "Нужен ли фотограф?",
            body: "Для первой сессии - желательно. Дальше поддерживайте регулярность силами команды по чек‑листу качества.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Photos for map listings: what to upload, how to optimize, and what results to expect",
    lead: [
      "For U.S. local businesses, photos in your map listings are one of the strongest trust and conversion drivers. Strong visuals can increase listing engagement and lead to more calls, direction requests, and website clicks.",
      "Photos shape first impressions in seconds and signal that a business is active. This guide covers what to shoot, how to prepare and upload images, what results to expect, and which mistakes to avoid.",
    ],
    checklistTitle: "Checklist",
    checklistItems: [
      "Prepare sets: storefront/entrance, interior, team, process, results.",
      "Shoot in good light, level the horizon, avoid noise and blur.",
      "Compress files (~200–400 KB) and use meaningful filenames.",
      "Update every 2–4 weeks and tie uploads to seasons and promotions.",
      "Track impressions and listing actions, then iterate.",
    ],
    sections: [
      {
        title: "Why photos matter in map listings",
        blocks: [
          {
            title: "1. First impression + differentiation",
            body: "No photos (or outdated, low-quality ones) is a fast way to lose clicks. Fresh, real images increase listing CTR and help you stand out in the local pack.",
          },
          {
            title: "2. Trust through real visuals",
            body: "Real photos of your storefront, interior, team, process, and results reduce uncertainty and prove you’re a real, active business.",
          },
          {
            title: "3. Activity signal",
            body: "Consistent photo uploads are a local activity signal. Fresh media can improve engagement and support overall local visibility.",
          },
          {
            title: "4. Higher conversion",
            body: "Listings with strong photos typically get more direction requests and calls because customers can quickly confirm what to expect.",
          },
        ],
      },
      {
        title: "Photo categories you should have",
        blocks: [
          {
            title: "1. Storefront and entrance",
            body: "Wide shot of the building + close-up of the entrance + a street landmark. This reduces friction and helps customers find you.",
          },
          {
            title: "2. Interior and key areas",
            body: "Clean, clear shots of what customers will actually see. For restaurants, salons, clinics, and retail, interior photos strongly influence trust.",
          },
          {
            title: "3. Process and services",
            body: "Highly clickable: service in action, consultations, repairs, production, installations. It’s visual proof of competence.",
          },
          {
            title: "4. Team",
            body: "People trust people. Consistent team portraits can improve conversion, especially in service businesses.",
          },
          {
            title: "5. Products and results",
            body: "For retail: products and displays. For services: before/after, finished projects, dishes. Results photos are a key decision trigger.",
          },
        ],
      },
      {
        title: "Technical optimization",
        blocks: [
          {
            title: "Formats and sizes",
            body: [
              "Use 4:3 or 16:9 for cover-style photos; vertical shots can work well on mobile.",
              "Aim for 1600px+ on the long edge, then compress to ~200–400 KB.",
              "JPEG for most photos; PNG/WebP when needed. Avoid over-compression artifacts.",
            ],
          },
          {
            title: "Quality and editing",
            body: [
              "Natural light, level horizon, no heavy blur/noise.",
              "Light edits only (exposure/white balance). Avoid heavy filters.",
              "Keep sets consistent: similar tones, angles, and composition.",
            ],
          },
          {
            title: "Filenames and metadata",
            body: [
              "Use meaningful names (e.g., service-manicure-downtown-studio.jpg instead of IMG_1234.jpg).",
              "Keep only necessary metadata; avoid sensitive personal data.",
              "Organize folders so photos can be reused on your site and social.",
            ],
          },
        ],
      },
      {
        title: "Posting cadence",
        blocks: [
          {
            title: "Update plan",
            body: "Every 2–4 weeks, upload a set of 5–10 new photos (storefront/interior/process/results). This creates a steady activity signal and keeps your listing looking current.",
          },
          {
            title: "Seasonality",
            body: "Update for seasons and promotions: new menu, seasonal displays, renovations, new services. Fresh visuals keep expectations aligned.",
          },
        ],
      },
      {
        title: "Measuring impact",
        blocks: [
          {
            title: "What to track",
            body: [
              "Listing impressions in local results and Maps.",
              "Actions: calls, direction requests, website clicks.",
              "Listing CTR and engagement (photo views, interactions).",
            ],
          },
          {
            title: "What usually improves",
            body: "Visibility for core searches, listing actions, and conversion from view to action. With consistent updates, early impact is often visible in 2–4 weeks.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Using stock photos instead of real ones.",
              "Uploading random images with no consistent set or style.",
              "Over-editing with heavy filters.",
              "Uploading very large files that slow down mobile experiences.",
              "No consistent update schedule.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How many photos do you need?",
            body: "Start with at least 15–30 photos across categories, then add 5–10 new photos monthly. Quality and relevance matter more than volume.",
          },
          {
            title: "Do you need a professional photographer?",
            body: "For the first shoot, it helps. After that, your team can maintain a consistent cadence using a simple quality checklist.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "תמונות בכרטיסים במפות: מה להעלות, איך לאופטם, ומה לצפות לראות בתוצאות",
    lead: [
      "תמונות בכרטיס העסק במפות הן אחד הגורמים החזקים ביותר לאמון ולהמרה. ויזואל איכותי יכול להעלות מעורבות ולהוביל ליותר שיחות, ניווטים וקליקים לאתר.",
      "תמונות יוצרות רושם ראשוני תוך שניות ומאותתות שהעסק פעיל. במדריך הזה: מה לצלם, איך להכין ולהעלות, איך למדוד תוצאות ואילו טעויות להימנע.",
    ],
    checklistTitle: "צ׳ק־ליסט",
    checklistItems: [
      "להכין סטים: חזית/כניסה, פנים, צוות, תהליך, תוצאות.",
      "לצלם בתאורה טובה, ליישר אופק, להימנע מרעש וטשטוש.",
      "לדחוס קבצים (~200–400KB) ולתת שמות קבצים ברורים.",
      "לעדכן כל 2–4 שבועות ולחבר לעונות ומבצעים.",
      "לעקוב אחרי חשיפות ופעולות בכרטיס ולשפר בהתאם.",
    ],
    sections: [
      {
        title: "למה תמונות חשובות בכרטיס במפות",
        blocks: [
          {
            title: "1. רושם ראשוני ובידול",
            body: "בלי תמונות (או עם תמונות ישנות/באיכות נמוכה) קל להפסיד קליקים. תמונות אמיתיות ועדכניות משפרות CTR ועוזרות להתבלט בתוצאות המקומיות.",
          },
          {
            title: "2. אמון דרך ויזואל אמיתי",
            body: "תמונות אמיתיות של חזית, פנים, צוות, תהליך ותוצאות מפחיתות אי־ודאות ומוכיחות שהעסק פעיל.",
          },
          {
            title: "3. סיגנל פעילות",
            body: "העלאה עקבית של תמונות היא סיגנל מקומי של פעילות. תוכן רענן יכול להגדיל מעורבות ולתמוך בנראות.",
          },
          {
            title: "4. יותר המרות",
            body: "כרטיסים עם תמונות טובות לרוב מקבלים יותר ניווטים ושיחות כי קל יותר להבין למה לצפות.",
          },
        ],
      },
      {
        title: "קטגוריות תמונות מומלצות",
        blocks: [
          {
            title: "1. חזית וכניסה",
            body: "צילום כללי של הבניין + תקריב של הכניסה + נקודת ציון מהרחוב. זה מקל על הגעה.",
          },
          {
            title: "2. פנים ואזורי שירות",
            body: "תמונות נקיות וברורות של מה שהלקוח יראה. בתחומים כמו אוכל/טיפוח/רפואה/קמעונאות זה חשוב במיוחד.",
          },
          {
            title: "3. תהליך ושירותים",
            body: "תמונות של השירות בפעולה, ייעוץ, תיקונים או ייצור. זה מוכיח מקצועיות.",
          },
          {
            title: "4. צוות",
            body: "אנשים סומכים על אנשים. תמונות צוות בסגנון אחיד יכולות לשפר המרה.",
          },
          {
            title: "5. מוצרים ותוצאות",
            body: "לקמעונאות: מוצרים ותצוגות. לשירותים: לפני/אחרי, פרויקטים, מנות. תוצאות הן טריגר החלטה.",
          },
        ],
      },
      {
        title: "אופטימיזציה טכנית",
        blocks: [
          {
            title: "פורמטים וגדלים",
            body: [
              "יחסים 4:3 או 16:9; תמונות אנכיות טובות למובייל.",
              "1600px+ בצלע הארוכה ואז דחיסה ל~200–400KB.",
              "JPEG לרוב התמונות; PNG/WebP לפי צורך; להימנע מארטיפקטים.",
            ],
          },
          {
            title: "איכות ועיבוד",
            body: [
              "תאורה טבעית, אופק ישר, בלי רעש/טשטוש.",
              "עריכה עדינה בלבד; להימנע מפילטרים חזקים.",
              "עקביות בסטים: טונים, זוויות וקומפוזיציה.",
            ],
          },
          {
            title: "שמות קבצים ומטא־דאטה",
            body: [
              "שמות ברורים במקום IMG_1234.",
              "לשמור רק מטא־דאטה נחוץ; להימנע ממידע רגיש.",
              "ארגון תיקיות לשימוש חוזר באתר וברשתות.",
            ],
          },
        ],
      },
      {
        title: "תדירות עדכונים",
        blocks: [
          {
            title: "תוכנית עדכון",
            body: "כל 2–4 שבועות להעלות סט של 5–10 תמונות חדשות (חזית/פנים/תהליך/תוצאות) כדי לשמור על כרטיס מעודכן.",
          },
          {
            title: "עונתיות",
            body: "לעדכן לפי עונות ומבצעים: תפריט חדש, תצוגות עונתיות, שיפוץ, שירות חדש.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "כמה תמונות צריך?",
            body: "להתחיל עם 15–30 תמונות ולחדש 5–10 בחודש. איכות ורלוונטיות חשובות יותר מכמות.",
          },
          {
            title: "צריך צלם מקצועי?",
            body: "לסט הראשון זה עוזר. אחרי זה אפשר לשמור עקביות עם צוות בעזרת צ׳ק־ליסט פשוט.",
          },
        ],
      },
    ],
  },
};

export default content;
