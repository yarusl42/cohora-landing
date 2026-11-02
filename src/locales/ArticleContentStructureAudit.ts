import { type HowToStep } from "@/components/HowToChecklist";

export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleChecklist = {
  title: string;
  storageKey: string;
  steps: readonly HowToStep[];
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  sections: ArticleSection[];
  checklist: ArticleChecklist;
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Аудит структуры сайта для локального продвижения: зачем это нужно, чего ожидать и как правильно провести анализ",
    lead: [
      "Аудит структуры сайта для локального продвижения в Беларуси - это комплексная оценка того, насколько хорошо сайт подготовлен для привлечения местных клиентов из Минска, Бреста, Гомеля и других городов через Google и Яндекс.",
      "Правильно проведённый аудит помогает выявить проблемы и возможности для улучшения локального SEO на белорусском рынке.",
      "Структура сайта - это логика, по которой поисковые системы и пользователи понимают, чем занимается компания, где она находится, какие услуги оказывает и почему должна занимать высокие позиции в локальной выдаче. Этот материал - подробное руководство по аудиту структуры для локального продвижения.",
    ],
    sections: [
      {
        title: "Зачем нужен аудит структуры сайта при локальном продвижении",
        blocks: [
          {
            title: "1. Корректная региональная привязка",
            body: "Поисковикам важно понимать город/регион работы бизнеса, видеть адрес и филиалы, распознавать зоны обслуживания, учитывать локальные ключи на страницах. Хаотичная структура без страниц филиалов и корректного блока контактов делает локальное продвижение нестабильным.",
          },
          {
            title: "2. Усиление карточек в картах",
            body: "Карточки в Google/Яндекс Картах получают дополнительные сигналы, если сайт имеет локальные страницы, раздел «Где мы работаем», корректно подключённые профили и одинаковые NAP‑данные (Name, Address, Phone) на всех страницах. Без структурированного сайта локальное продвижение в картах проседает.",
          },
          {
            title: "3. Улучшение пользовательского опыта",
            body: "Локальным пользователям нужны адрес, график, ближайший филиал, услуги по локации, цены и акции. Если это спрятано глубоко - вы теряете конверсию и снижается рейтинг сайта. Правильная структура сокращает путь до целевого действия.",
          },
          {
            title: "4. Минимизация технических рисков",
            body: "Ошибки структуры мешают индексации, создают дубли, ломают навигацию и внутренние ссылки. Аудит позволяет выявить и устранить такие проблемы до того, как они ударят по видимости и конверсии.",
          },
          {
            title: "5. Соответствие современным алгоритмам",
            body: "Поисковики учитывают не только ключи, но и архитектуру, микророзметку, тематические кластеры, локальный контент и связь с картами/каталогами. Аудит структуры помогает стать конкурентоспособнее.",
          },
        ],
      },
      {
        title: "Что даёт полный аудит структуры",
        blocks: [
          {
            title: "1. Карта сайта с проблемами",
            body: "Лишние и дубль‑страницы, неверные URL, запутанная навигация, пропущенные разделы, ошибки в иерархии. Визуальная карта сразу подсвечивает узкие места и «слепые зоны».",
          },
          {
            title: "2. Анализ локальной оптимизации",
            body: "Проверка соответствия страниц региону, оформление контактов, наличие страниц филиалов, структура услуг, присутствие локального контента и навигационных связей.",
          },
          {
            title: "3. Рекомендации по улучшениям",
            body: "Подробный план: какие страницы создать, что объединить или удалить, как изменить навигацию и перелинковку, как упаковать разделы под локальное SEO и видимость в картах.",
          },
          {
            title: "4. Качественная индексация",
            body: "После наведения порядка роботы быстрее обходят сайт, корректнее индексируют страницы и стабилизируют позиции за счёт понятной архитектуры.",
          },
          {
            title: "5. Рост конверсии",
            body: "Удобная структура помогает быстрее найти нужный филиал, услугу или контакты и перейти к заявке/звонку. Это напрямую повышает конверсию из локального трафика.",
          },
        ],
      },
      {
        title: "Критичные элементы структуры для локального SEO",
        blocks: [
          {
            title: "1. Главная страница",
            body: "Должны быть: регион, краткое описание услуг, ссылки на филиалы и ключевые услуги, NAP‑данные, блок действий (позвонить, записаться, построить маршрут). Первый экран - понятно и по делу.",
          },
          {
            title: "2. Страницы филиалов",
            body: "Для каждого филиала - отдельная страница с адресом, телефоном, расписанием, картой, фото, локальными отзывами и описанием услуг именно в этом месте. Это один из сильнейших факторов ранжирования в конкретной локации.",
          },
          {
            title: "3. Страницы услуг",
            body: "Каждая ключевая услуга - отдельная страница. Для локального охвата - связки «услуга + район/город». Важно совпадение формулировок с карточками в картах, наличие доказательств (кейсы, отзывы, фото) и удобных CTA.",
          },
          {
            title: "4. Разделы по районам/зонам обслуживания",
            body: "Если вы работаете на выезде или в нескольких районах, сделайте структуру по локациям: это помогает как пользователям, так и поиску понимать географию и повышает видимость по локальным кластерам запросов.",
          },
          {
            title: "5. Внутренняя перелинковка и хлебные крошки",
            body: "Связывайте категорию → услуги → кейсы → контакты, используйте хлебные крошки и понятные якорные ссылки. Это улучшает навигацию и помогает роботам понимать иерархию.",
          },
          {
            title: "6. Микророзметка и контактные блоки",
            body: "Используйте Organization/LocalBusiness, добавляйте структурированные данные для адреса, телефона, расписания, отзывов. Дублируйте NAP в футере и на страницах филиалов.",
          },
        ],
      },
      {
        title: "Как провести аудит структуры: пошаговый план",
        blocks: [
          {
            title: "Шаг 1. Инвентаризация",
            body: "Соберите карту сайта: список URL, статусы, глубину вложенности, каноникал, индексируемость, теги, шаблоны. Зафиксируйте разделы, дубли и «висячие» страницы без входящих ссылок.",
          },
          {
            title: "Шаг 2. Локальная релевантность",
            body: "Проверьте наличие и качество страниц филиалов, соответствие адресов/телефонов, совпадение NAP с картами, присутствие локальных блоков (районы, зоны обслуживания).",
          },
          {
            title: "Шаг 3. Кластеризация услуг и регионов",
            body: "Разложите услуги по категориям и локациям, определите страницы «услуга + район/город», продумайте внутренние связи и навигацию между ними.",
          },
          {
            title: "Шаг 4. Навигация и UX",
            body: "Оцените меню, хлебные крошки, фильтры, ссылки из карточек услуг в контакты и форму записи. Сократите путь до целевого действия для мобильных пользователей.",
          },
          {
            title: "Шаг 5. Перелинковка и карты сайта",
            body: "Настройте логичные связи между разделами, добавьте HTML и XML sitemaps, проверьте robots.txt и каноникал, избегайте тонких и дублирующих страниц.",
          },
          {
            title: "Шаг 6. Документация и дороги внедрения",
            body: "Сформируйте список задач с приоритетами: «критично», «высокий», «средний». Разделите на быстрые правки и архитектурные изменения, опишите ожидаемый эффект и точки контроля.",
          },
        ],
      },
      {
        title: "Практические примеры и типичные ошибки",
        blocks: [
          {
            title: "Пример 1. Один лендинг на всё",
            body: "Сайт с одной общей страницей не ранжируется по десяткам локальных кластеров. Выход - десятки сервисных страниц под «услуга + район/город», логичная перелинковка и локальные блоки доказательств.",
          },
          {
            title: "Пример 2. Дубли филиалов",
            body: "Одинаковые страницы филиалов без уникальных данных (фото/отзывы/особенности) плохо индексируются. Добавьте локальные отличия и уточнения по зоне обслуживания.",
          },
          {
            title: "Типичные ошибки",
            body: [
              "Спрятанные контакты и отсутствие единого NAP в футере.",
              "Смешение услуг и локаций на одной странице без явной структуры.",
              "Отсутствие хлебных крошек и «дорог» до записи/контактов.",
              "Переспам и тонкий контент вместо структурированной релевантности.",
              "Отсутствие страниц «услуга + район/город» при работе в нескольких зонах.",
            ],
          },
        ],
      },
      {
        title: "FAQ и краткий чек‑лист",
        blocks: [
          {
            title: "Как часто нужен аудит структуры?",
            body: "Раз в 6–12 месяцев или после значимых изменений: запуск филиалов, редизайн, смена CMS, обновления алгоритмов.",
          },
          {
            title: "Когда ждать эффект?",
            body: "Быстрые улучшения индексации - 2–4 недели после внедрения критичных правок; устойчивый рост видимости - 1–3 месяца при работе с локальными страницами и картами.",
          },
        ],
      },
    ],
    checklist: {
      title: "Чек‑лист",
      storageKey: "articleSiteStructureAuditChecklist",
      steps: [
        {
          id: "site-structure-audit-checklist",
          title: "",
          description: "",
          items: [
            "Соберите карту сайта и список проблем.",
            "Проверьте локальную релевантность и NAP.",
            "Спланируйте страницы «услуга + район/город» и филиалы.",
            "Упростите навигацию и путь до CTA.",
            "Укрепите перелинковку, добавьте микроразметку.",
            "Внедрите план правок с приоритетами и метриками.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO site structure audit: why it matters, what to expect, and how to run the analysis",
    lead: [
      "A site structure audit for local SEO is a comprehensive review of how well your website is prepared to attract customers from specific cities and neighborhoods through Google Search and Google Maps.",
      "A well-run audit helps you uncover issues and opportunities to improve local visibility, indexation, and conversions.",
      "Site structure is the logic that helps search engines and users understand what the business does, where it operates, what services it offers, and why it deserves strong local rankings.",
    ],
    sections: [
      {
        title: "Why a site structure audit matters for local SEO",
        blocks: [
          {
            title: "1. Correct location targeting",
            body: "Search engines need clear signals about where you operate: addresses, location pages, service areas, and local modifiers in content. A chaotic structure without location pages and a strong contact block makes local SEO unstable.",
          },
          {
            title: "2. Better performance in Maps",
            body: "Your Google Business Profile gets stronger signals when your site includes location pages, a ‘Where we serve’ section, consistent NAP (Name, Address, Phone), and properly connected profiles. Without structure, Maps performance often suffers.",
          },
          {
            title: "3. Better user experience",
            body: "Local users look for address, hours, nearest location, services by area, pricing, and offers. If that information is buried, conversion drops and the site’s perceived quality suffers. Structure reduces the path to action.",
          },
          {
            title: "4. Lower technical risk",
            body: "Structural issues can block indexation, create duplicates, break navigation, and weaken internal linking. An audit helps fix these problems before they impact rankings and leads.",
          },
          {
            title: "5. Alignment with modern ranking systems",
            body: "Search engines evaluate architecture, structured data, topical clusters, local content, and connections to Maps/directories-not just keywords. A structure audit improves competitiveness.",
          },
        ],
      },
      {
        title: "What a full structure audit delivers",
        blocks: [
          {
            title: "1. A sitemap with problems highlighted",
            body: "Thin and duplicate pages, incorrect URLs, confusing navigation, missing sections, hierarchy issues. A visual map quickly exposes bottlenecks and blind spots.",
          },
          {
            title: "2. Local optimization assessment",
            body: "A review of location relevance: contact formatting, presence of location pages, service structure, local content, and navigation connections.",
          },
          {
            title: "3. Improvement recommendations",
            body: "A practical plan: what pages to create, merge, or remove; how to update navigation and internal linking; how to package sections for local SEO and Maps visibility.",
          },
          {
            title: "4. Better indexation",
            body: "After cleanup, crawlers can navigate the site faster, index pages more consistently, and stabilize rankings through a clearer architecture.",
          },
          {
            title: "5. Higher conversion",
            body: "A user-friendly structure helps visitors find the right location/service and move to calls and form submissions faster.",
          },
        ],
      },
      {
        title: "Critical structure elements for local SEO",
        blocks: [
          {
            title: "1. Homepage",
            body: "Include: service region, short service overview, links to locations and key services, NAP details, and action buttons (call, book, get directions). Above the fold should be clear and focused.",
          },
          {
            title: "2. Location pages",
            body: "Each location should have its own page with address, phone, hours, embedded map, photos, local reviews, and services offered at that location. This is one of the strongest ranking factors for a specific area.",
          },
          {
            title: "3. Service pages",
            body: "Each core service should have its own page. For local coverage, create ‘service + city/neighborhood’ combinations. Align wording with your Maps profile, add proof (cases, reviews, photos), and make CTAs easy.",
          },
          {
            title: "4. Service-area sections",
            body: "If you work on-site across multiple neighborhoods, build a location structure so users and search engines understand your geography and you can rank for local clusters.",
          },
          {
            title: "5. Internal linking and breadcrumbs",
            body: "Link category → services → cases → contact, use breadcrumbs, and clear anchor links. This improves navigation and helps crawlers understand hierarchy.",
          },
          {
            title: "6. Structured data and contact blocks",
            body: "Use Organization/LocalBusiness schema, add structured data for address/phone/hours/reviews, and repeat NAP in the footer and on location pages.",
          },
        ],
      },
      {
        title: "How to run a structure audit (step-by-step)",
        blocks: [
          {
            title: "Step 1. Inventory",
            body: "Build a site map: URL list, status codes, depth, canonicals, indexability, tags, templates. Identify duplicates and orphan pages with no internal links.",
          },
          {
            title: "Step 2. Local relevance",
            body: "Check the quality of location pages, address/phone consistency, NAP alignment with Maps, and presence of local blocks (neighborhoods, service areas).",
          },
          {
            title: "Step 3. Cluster services and locations",
            body: "Group services by category and area, define ‘service + city/neighborhood’ pages, and plan internal navigation between them.",
          },
          {
            title: "Step 4. Navigation and UX",
            body: "Evaluate menus, breadcrumbs, filters, and links from service pages to contact/booking flows. Shorten the path to action for mobile users.",
          },
          {
            title: "Step 5. Internal linking and sitemaps",
            body: "Build logical connections between sections, add HTML and XML sitemaps, check robots.txt and canonicals, and avoid thin/duplicate pages.",
          },
          {
            title: "Step 6. Documentation and implementation roadmap",
            body: "Create a prioritized task list: critical/high/medium. Separate quick wins from architectural work, define expected impact, and set checkpoints.",
          },
        ],
      },
      {
        title: "Practical examples and common mistakes",
        blocks: [
          {
            title: "Example 1. One generic landing page for everything",
            body: "A site with one generic page rarely ranks for many local clusters. The fix is to build a network of ‘service + area’ pages, supported by internal linking and local proof blocks.",
          },
          {
            title: "Example 2. Duplicate location pages",
            body: "Identical location pages without unique photos/reviews/context often index poorly. Add local differences and clarify service coverage.",
          },
          {
            title: "Common mistakes",
            body: [
              "Hidden contact information and no consistent NAP in the footer.",
              "Mixing services and locations on one page without a clear structure.",
              "No breadcrumbs or clear paths to booking/contact.",
              "Keyword stuffing and thin content instead of structured relevance.",
              "No ‘service + city/neighborhood’ pages while serving multiple areas.",
            ],
          },
        ],
      },
      {
        title: "FAQ and short checklist",
        blocks: [
          {
            title: "How often should we audit structure?",
            body: "Every 6–12 months, or after major changes: new locations, redesign, CMS migration, or significant algorithm updates.",
          },
          {
            title: "When should we expect results?",
            body: "Indexation improvements can show in ~2–4 weeks after critical fixes. More stable local growth often takes 1–3 months when building location pages and strengthening Maps connections.",
          },
        ],
      },
    ],
    checklist: {
      title: "Checklist",
      storageKey: "articleSiteStructureAuditChecklist",
      steps: [
        {
          id: "site-structure-audit-checklist",
          title: "",
          description: "",
          items: [
            "Build a sitemap and list issues.",
            "Check local relevance and NAP consistency.",
            "Plan ‘service + city/neighborhood’ pages and location pages.",
            "Simplify navigation and the path to CTA.",
            "Strengthen internal linking and add structured data.",
            "Create an implementation plan with priorities and metrics.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "אודיט למבנה אתר ב‑SEO מקומי: למה זה חשוב, למה לצפות ואיך לבצע ניתוח נכון",
    lead: [
      "אודיט למבנה אתר ב‑SEO מקומי הוא בדיקה מקיפה של כמה האתר שלכם מוכן להביא לקוחות מאזורים, ערים ושכונות דרך Google Search ו‑Google Maps.",
      "אודיט טוב חושף בעיות והזדמנויות לשיפור נראות מקומית, אינדוקס והמרות.",
      "מבנה האתר הוא הלוגיקה שמאפשרת למנועי חיפוש ולמשתמשים להבין מה העסק עושה, איפה הוא פועל, אילו שירותים הוא מציע ולמה מגיע לו דירוג מקומי גבוה.",
    ],
    sections: [
      {
        title: "למה אודיט למבנה אתר חשוב ב‑SEO מקומי",
        blocks: [
          {
            title: "1. מיקוד גיאוגרפי נכון",
            body: "מנועי חיפוש צריכים להבין איפה אתם עובדים: כתובות, עמודי סניפים, אזורי שירות, ומודיפיירים מקומיים בתוכן. מבנה מבולגן בלי עמודי לוקיישן ובלוק ‘צור קשר’ חזק הופך SEO מקומי ללא יציב.",
          },
          {
            title: "2. חיזוק נוכחות במפות",
            body: "פרופיל העסק ב‑Google Maps מקבל סיגנלים חזקים יותר כשהאתר כולל עמודי לוקיישן, אזור ‘איפה אנחנו עובדים’, NAP עקבי, וחיבורים נכונים לפרופילים. בישראל רבים משתמשים גם ב‑Waze לניווט, ולכן עקביות מידע ושילוב מיקום חשובים במיוחד.",
          },
          {
            title: "3. חוויית משתמש טובה יותר",
            body: "משתמשים מקומיים מחפשים כתובת, שעות, סניף קרוב, שירותים לפי אזור, מחירים ומבצעים. כשזה קבור עמוק-ההמרות יורדות. מבנה נכון מקצר את הדרך לפעולה.",
          },
          {
            title: "4. הפחתת סיכונים טכניים",
            body: "בעיות מבנה יכולות לחסום אינדוקס, ליצור כפילויות, לשבור ניווט וקישורים פנימיים. אודיט עוזר לתקן לפני שיש פגיעה בדירוגים ובפניות.",
          },
          {
            title: "5. התאמה לאלגוריתמים מודרניים",
            body: "מנועי חיפוש בוחנים ארכיטקטורה, נתונים מובנים, אשכולות תוכן, תוכן מקומי וחיבור למפות/ספריות-לא רק מילות מפתח. אודיט משפר תחרותיות.",
          },
        ],
      },
      {
        title: "מה מקבלים מאודיט מבנה מלא",
        blocks: [
          {
            title: "1. מפת אתר עם בעיות",
            body: "עמודים דקים או כפולים, URL לא נכונים, ניווט מבלבל, חוסרים בהיררכיה. מפה ויזואלית חושפת צווארי בקבוק ונקודות עיוורות.",
          },
          {
            title: "2. בדיקת אופטימיזציה מקומית",
            body: "בדיקת רלוונטיות מיקום: פורמט יצירת קשר, עמודי סניפים, מבנה שירותים, תוכן מקומי וקישורים ניווטיים.",
          },
          {
            title: "3. המלצות לשיפור",
            body: "תוכנית עבודה: אילו עמודים ליצור/לאחד/להסיר, איך לעדכן ניווט וקישורים פנימיים, ואיך לארוז את האתר ל‑SEO מקומי ונראות במפות.",
          },
          {
            title: "4. אינדוקס טוב יותר",
            body: "אחרי סדר, בוטים סורקים מהר יותר, מאנדקסים עקבי יותר, ודירוגים מתייצבים.",
          },
          {
            title: "5. יותר המרות",
            body: "מבנה נוח מאפשר למצוא סניף/שירות מהר יותר ולהגיע לשיחה/טופס.",
          },
        ],
      },
      {
        title: "אלמנטים קריטיים במבנה ל‑SEO מקומי",
        blocks: [
          {
            title: "1. עמוד הבית",
            body: "צריך לכלול: אזור שירות, תקציר שירותים, קישורים לסניפים ולשירותים מרכזיים, NAP, וכפתורי פעולה (התקשרו, הזמנה, ניווט).",
          },
          {
            title: "2. עמודי סניפים",
            body: "לכל סניף עמוד משלו: כתובת, טלפון, שעות, מפה, תמונות, ביקורות מקומיות ושירותים בסניף. זה פקטור חזק לדירוג מקומי.",
          },
          {
            title: "3. עמודי שירות",
            body: "כל שירות מרכזי צריך עמוד משלו. לכיסוי מקומי: ‘שירות + עיר/שכונה’. להתאים ניסוח למפות, להוסיף הוכחות (קייסים/ביקורות/תמונות) ו‑CTA נוח.",
          },
          {
            title: "4. אזורי שירות",
            body: "אם עובדים בכמה שכונות, לבנות מבנה אזורי שמסביר איפה אתם עובדים-למשתמשים ולמנועי חיפוש.",
          },
          {
            title: "5. קישורים פנימיים ופירורי לחם",
            body: "לקשר קטגוריה → שירותים → קייסים → צור קשר, להשתמש בפירורי לחם ובקישורי עוגן ברורים.",
          },
          {
            title: "6. נתונים מובנים ובלוקי קשר",
            body: "להשתמש ב‑Organization/LocalBusiness, להוסיף נתונים מובנים לכתובת/טלפון/שעות/ביקורות, ולחזור על NAP בפוטר ובעמודי סניפים.",
          },
        ],
      },
      {
        title: "איך לבצע אודיט מבנה (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. אינבנטור",
            body: "לבנות מפת אתר: רשימת URL, סטטוסים, עומק, קנוניקל, אינדוקס, תגים ותבניות. לזהות כפילויות ועמודים יתומים.",
          },
          {
            title: "שלב 2. רלוונטיות מקומית",
            body: "לבדוק איכות עמודי סניף, עקביות כתובת/טלפון, התאמה למפות, והאם יש בלוקים מקומיים (שכונות, אזורי שירות).",
          },
          {
            title: "שלב 3. קלאסטרים של שירותים ומיקומים",
            body: "לארגן שירותים לפי קטגוריות ואזורים, להגדיר עמודי ‘שירות + עיר/שכונה’ ולתכנן ניווט פנימי.",
          },
          {
            title: "שלב 4. ניווט ו‑UX",
            body: "להעריך תפריטים, פירורי לחם, פילטרים וקישורים לעמודי קשר/הזמנה. לקצר את הדרך לפעולה במובייל.",
          },
          {
            title: "שלב 5. קישורים פנימיים ומפות אתר",
            body: "לבנות קשרים לוגיים, להוסיף HTML/XML sitemaps, לבדוק robots.txt וקנוניקל ולהימנע מעמודים דקים/כפולים.",
          },
          {
            title: "שלב 6. תיעוד ותוכנית יישום",
            body: "לבנות רשימת משימות לפי עדיפות, להפריד Quick Wins משינויים ארכיטקטוניים, ולהגדיר מדדים ונקודות בקרה.",
          },
        ],
      },
      {
        title: "דוגמאות פרקטיות וטעויות נפוצות",
        blocks: [
          {
            title: "דוגמה 1. עמוד אחד לכל דבר",
            body: "אתר עם עמוד כללי אחד כמעט לא מדורג על קלאסטרים מקומיים. הפתרון: עמודי ‘שירות + אזור’, קישורים פנימיים ובלוקי הוכחה מקומיים.",
          },
          {
            title: "דוגמה 2. כפילות בעמודי סניפים",
            body: "עמודי סניפים זהים בלי תוכן ייחודי נוטים להיאנדקס חלש. להוסיף תמונות/ביקורות/הקשר מקומי ולהבהיר אזורי שירות.",
          },
          {
            title: "טעויות נפוצות",
            body: [
              "פרטי קשר מוסתרים וחוסר עקביות NAP בפוטר.",
              "ערבוב שירותים ומיקומים בעמוד אחד בלי מבנה ברור.",
              "אין פירורי לחם ואין ‘מסלולים’ להזמנה/צור קשר.",
              "דחיסת מילות מפתח ותוכן דק במקום רלוונטיות מובנית.",
              "אין עמודי ‘שירות + עיר/שכונה’ למרות עבודה בכמה אזורים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט קצר",
        blocks: [
          {
            title: "כל כמה זמן צריך אודיט?",
            body: "כל 6–12 חודשים או אחרי שינוי משמעותי: פתיחת סניפים, רידיזיין, מעבר CMS או עדכוני אלגוריתם.",
          },
          {
            title: "מתי רואים אפקט?",
            body: "שיפור אינדוקס יכול להגיע תוך 2–4 שבועות אחרי תיקונים קריטיים. צמיחה יציבה יותר מגיעה לרוב תוך 1–3 חודשים כשמחזקים עמודי מיקום וחיבור למפות.",
          },
        ],
      },
    ],
    checklist: {
      title: "צ’ק‑ליסט",
      storageKey: "articleSiteStructureAuditChecklist",
      steps: [
        {
          id: "site-structure-audit-checklist",
          title: "",
          description: "",
          items: [
            "לאסוף מפת אתר ורשימת בעיות.",
            "לבדוק רלוונטיות מקומית ועקביות NAP.",
            "לתכנן עמודי ‘שירות + עיר/שכונה’ ועמודי סניפים.",
            "לפשט ניווט ואת הדרך ל‑CTA.",
            "לחזק קישורים פנימיים ולהוסיף נתונים מובנים.",
            "לבנות תוכנית יישום עם עדיפויות ומדדים.",
          ],
        },
      ],
    },
  },
};

export default content;
