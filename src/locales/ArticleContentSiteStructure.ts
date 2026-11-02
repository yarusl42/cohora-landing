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
      "Разработка структуры сайта для локального SEO: как построить архитектуру, которая будет приводить клиентов",
    lead: [
      "Структура сайта - один из самых недооценённых, но критически важных элементов локального SEO. Для локального бизнеса от того, как организованы страницы, зависит видимость в поиске, сила карточек в картах, количество звонков и заявок, а также уровень доверия со стороны пользователей.",
    ],
    sections: [
      {
        title: "Зачем локальному бизнесу продуманная структура сайта",
        blocks: [
          {
            title: "1. Повышение видимости в локальной выдаче",
            body: "Поисковые системы оценивают не только качество контента и ссылок, но и архитектуру ресурса. Структурированный сайт помогает:",
          },
          {
            body: [
              "правильно распределить ключевые запросы между страницами;",
              "создать логичные связи между разделами;",
              "показать поисковикам геопривязку бизнеса;",
              "добавить локальные точки входа для клиентов из разных районов.",
            ],
          },
          {
            body: "Хаотичная структура мешает алгоритмам понять тематику и территорию работы, что бьёт по позициям.",
          },
          {
            title: "2. Усиление NAP‑данных и локальной релевантности",
            body: "NAP (Name, Address, Phone) должен быть единообразным и повторяться на релевантных страницах. Именно структура определяет, где и как размещаются эти данные: на главной, в контактах, на страницах городов и районов. Это укрепляет доверие поисковых систем и усиливает позиции в Google Maps, Яндекс Картах и 2ГИС.",
          },
          {
            title: "3. Покрытие всех локальных запросов",
            body: "У локального бизнеса десятки микро‑запросов:",
          },
          {
            body: [
              "«сантехник в центре Минска»;",
              "«ремонт стиральных машин Партизанский район»;",
              "«парикмахерская возле метро Немига»;",
              "«вызов электрика в Советском районе»;",
              "«детская стоматология Фрунзенский район».",
            ],
          },
          {
            body: "Для их охвата нужны страницы районов, услуг, услуг по районам, категории - и всё это часть продуманной структуры.",
          },
          {
            title: "4. Улучшение конверсии",
            body: "Логичная архитектура делает сайт понятным: человек быстрее находит нужную услугу в своём районе, не блуждает по меню и не закрывает вкладку. В результате растёт число звонков, заявок и переходов в мессенджеры.",
          },
          {
            title: "5. Быстрая индексация",
            body: "Чёткая архитектура помогает поисковым роботам быстро находить новые страницы, правильно их классифицировать и связывать с основным контентом. Хорошо организованный сайт индексируется быстрее и без «висящих» разделов.",
          },
          {
            title: "6. Масштабирование без хаоса",
            body: "Когда бизнес растёт, добавляются услуги, филиалы, новые зоны покрытия. Если структура продумана, в неё легко вписать новые страницы без падения позиций и путаницы. Если нет - расширение превращается в хаос.",
          },
        ],
      },
      {
        title: "Чего ожидать от правильной структуры сайта",
        blocks: [
          {
            title: "1. Рост позиций и трафика",
            body: "Корректно спроектированная структура даёт заметный рост видимости по локальным запросам, увеличение числа фраз в топ‑10, усиление локальных страниц и лучшую работу в картах. Для многих бизнесов изменение структуры даёт +50–200% органического трафика.",
          },
          {
            title: "2. Больше целевых звонков",
            body: "Страницы, «заточенные» под конкретные сочетания «услуга + район/город», привлекают более точный трафик. Например, страница «Ремонт квартир в Заводском районе Минска» будет привлекать более целевую аудиторию, чем общая страница услуг. Такие пользователи чаще становятся клиентами, а не просто зрителями.",
          },
          {
            title: "3. Улучшение поведенческих факторов",
            body: "Понятная структура увеличивает время на сайте, количество просмотренных страниц и снижает количество быстрых отказов - всё это положительные сигналы для поисковиков.",
          },
          {
            title: "4. Укрепление бренда на локальном уровне",
            body: "Страницы городов и районов создают ощущение плотного присутствия: «Ремонт окон в Московском районе», «Мастер на час в Центральном районе», «Косметолог в Первомайском районе Минска». Это усиливает доверие у жителей конкретных зон.",
          },
          {
            title: "5. Более эффективная реклама",
            body: "С хорошей структурой можно вести рекламу на конкретные страницы услуг, районов и городов, снижая стоимость клика и повышая конверсию. Вести трафик на главную - в 2–4 раза менее эффективно.",
          },
        ],
      },
      {
        title: "Как разработать структуру сайта для локального SEO: пошагово",
        blocks: [
          {
            title: "Шаг 1. Определите зоны деятельности",
            body: "Если бизнес работает по районам, городам или областям, начните с карты покрытия:",
          },
          {
            body: [
              "составьте список всех районов города;",
              "определите города, где вы действительно оказываете услуги;",
              "отметьте приоритетные зоны с наибольшим спросом.",
            ],
          },
          {
            title: "Шаг 2. Составьте список услуг",
            body: "Разбейте всё, чем вы занимаетесь, на:",
          },
          {
            body: [
              "основные услуги;",
              "дополнительные;",
              "микро‑услуги (частные случаи).",
            ],
          },
          {
            body: "Например, для электрика в Минске: установка розеток в панельных домах, замена выключателей, диагностика проводки в хрущёвках, монтаж светильников в новостройках и т.д.",
          },
          {
            title: "Шаг 3. Сформируйте основу структуры",
            body: "Базовая схема локального сайта может включать:",
          },
          {
            body: [
              "главную страницу;",
              "страницы категорий услуг;",
              "страницы отдельных услуг;",
              "страницы городов;",
              "страницы районов;",
              "страницы «услуга + район/город» - самые мощные точки входа.",
            ],
          },
          {
            title: "Шаг 4. Продумайте перелинковку",
            body: "Структура - это не только дерево URL, но и связи между страницами. Важно:",
          },
          {
            body: [
              "связывать города с услугами;",
              "районы - с городами и услугами;",
              "услуги - с примерами работ и статьями;",
              "карточки филиалов - с контактами и локальными лендингами.",
            ],
          },
          {
            body: "Это помогает поисковикам понять, какие разделы являются «ядром» вашего локального предложения.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Продуманная структура сайта для локального SEO - это фундамент, на котором строится всё остальное: контент, работа с картами, отзывы, реклама. Она помогает:",
          },
          {
            body: [
              "охватывать больше локальных запросов;",
              "улучшать видимость в поиске и картах;",
              "повышать количество целевых обращений;",
              "масштабировать бизнес без потери управляемости.",
            ],
          },
          {
            body: "Инвестировав время в проектирование структуры один раз, вы создаёте долгосрочное конкурентное преимущество для локального проекта.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Building a website structure for local SEO: how to design an architecture that brings customers",
    lead: [
      "Website structure is one of the most underrated-but critical-parts of local SEO. For a local business, how you organize pages affects search visibility, performance in Maps, lead volume, and user trust.",
    ],
    sections: [
      {
        title: "Why local businesses need a well-planned site structure",
        blocks: [
          {
            title: "1. Better visibility in local search",
            body: "Search engines evaluate not only content and links, but also site architecture. A structured site helps you:",
          },
          {
            body: [
              "distribute keyword intent across the right pages;",
              "create logical connections between sections;",
              "signal the business’s location and coverage;",
              "create local entry points for different areas.",
            ],
          },
          {
            body: "A chaotic structure makes it harder for search engines to understand what you do and where you serve-hurting rankings.",
          },
          {
            title: "2. Stronger NAP consistency and local relevance",
            body: "NAP (Name, Address, Phone) should be consistent and appear on the right pages. Structure determines where it lives: homepage, contact page, location pages, and service-area pages. This supports trust and helps in Google Maps and Apple Maps contexts.",
          },
          {
            title: "3. Coverage of local long-tail queries",
            body: "Local businesses often face dozens of micro-queries like “plumber in downtown”, “electrician near [Neighborhood]”, or “kids dentist near me”. To capture them you need location pages, service pages, and combinations like “service + area”.",
          },
          {
            title: "4. Higher conversion rates",
            body: "A clear structure helps users quickly find the right service in their area. Less friction means more calls, forms, and messages.",
          },
          {
            title: "5. Faster indexation",
            body: "A clear architecture helps crawlers discover new pages faster, classify them correctly, and connect them to the site’s core topics.",
          },
          {
            title: "6. Growth without chaos",
            body: "As you grow-adding services, locations, and coverage areas-a well-designed structure lets you expand without confusion or ranking drops.",
          },
        ],
      },
      {
        title: "What to expect from a strong site structure",
        blocks: [
          {
            title: "1. More rankings and traffic",
            body: "A well-designed structure can significantly improve local visibility, increase the number of top-10 keywords, and strengthen location pages. For many businesses, restructuring can lead to substantial organic traffic growth.",
          },
          {
            title: "2. More qualified leads",
            body: "Pages built for “service + area” attract higher-intent visitors. For example, “Kitchen remodel in [Neighborhood]” is usually more qualified than a generic service page.",
          },
          {
            title: "3. Better behavioral signals",
            body: "Clear navigation increases time on site, pages per session, and reduces quick bounces-positive signals that correlate with better SEO performance.",
          },
          {
            title: "4. Stronger local brand presence",
            body: "City and neighborhood pages create a sense of real presence: “Window repair in [Area]”, “Handyman in [Neighborhood]”. This improves trust for local users.",
          },
          {
            title: "5. More efficient ads",
            body: "A strong structure lets you run ads to the most relevant landing pages (service, city, neighborhood), improving conversion and lowering wasted spend compared to sending users to the homepage.",
          },
        ],
      },
      {
        title: "How to design a local SEO site structure (step-by-step)",
        blocks: [
          {
            title: "Step 1. Define your coverage areas",
            body: "If you serve multiple neighborhoods, cities, or counties, start with a coverage map:",
          },
          {
            body: [
              "list all neighborhoods/areas you serve;",
              "list cities where you actually provide service;",
              "prioritize zones with the highest demand.",
            ],
          },
          {
            title: "Step 2. List and group your services",
            body: "Break down what you do into:",
          },
          {
            body: ["core services;", "additional services;", "micro-services."],
          },
          {
            body: "Example for an electrician: outlet installation, switch replacement, wiring diagnostics, lighting installation, panel upgrades, etc.",
          },
          {
            title: "Step 3. Build the base structure",
            body: "A basic local structure often includes:",
          },
          {
            body: [
              "homepage;",
              "service category pages;",
              "individual service pages;",
              "city pages;",
              "neighborhood pages;",
              "“service + area” pages (often the strongest entry points).",
            ],
          },
          {
            title: "Step 4. Plan internal linking",
            body: "Structure isn’t only URL hierarchy-it’s also how pages connect. Make sure you:",
          },
          {
            body: [
              "link city pages to relevant services;",
              "link neighborhoods to cities and services;",
              "link services to case studies and blog posts;",
              "connect location pages to contact and booking pages.",
            ],
          },
          {
            body: "This helps search engines understand what’s core to your local offering.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "A thoughtful local SEO structure is the foundation for everything else: content, Maps visibility, reviews, and advertising. It helps you:",
          },
          {
            body: [
              "cover more local queries;",
              "improve visibility in search and Maps;",
              "increase qualified inquiries;",
              "scale without losing clarity.",
            ],
          },
          {
            body: "Invest once in structure design, and you create a durable competitive advantage.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "בניית מבנה אתר ל‑SEO מקומי: איך לתכנן ארכיטקטורה שמביאה לקוחות",
    lead: [
      "מבנה האתר הוא אחד המרכיבים הכי פחות מוערכים אבל הכי קריטיים ב‑SEO מקומי. לעסק מקומי, הדרך שבה עמודים מאורגנים משפיעה על נראות בחיפוש, ביצועים במפות, כמות פניות ואמון.",
    ],
    sections: [
      {
        title: "למה לעסק מקומי צריך מבנה אתר מתוכנן",
        blocks: [
          {
            title: "1. יותר נראות בחיפוש מקומי",
            body: "מנועי חיפוש בוחנים לא רק תוכן וקישורים אלא גם ארכיטקטורה. מבנה נכון עוזר:",
          },
          {
            body: [
              "לחלק כוונות חיפוש בין עמודים נכונים;",
              "לבנות קשרים לוגיים בין אזורים ותכנים;",
              "לאותת על אזורי שירות ומיקום;",
              "ליצור נקודות כניסה לשכונות ואזורים שונים.",
            ],
          },
          {
            title: "2. עקביות NAP ורלוונטיות מקומית",
            body: "NAP (שם, כתובת, טלפון) צריך להיות עקבי ולהופיע בעמודים רלוונטיים. המבנה קובע איפה הוא נמצא: עמוד בית, צור קשר, עמודי סניפים/לוקיישנים ועמודי אזורי שירות. זה מחזק אמון ותומך בנראות ב‑Google Maps (ובמקרים רבים גם Waze כערוץ ניווט, לצד עקביות המידע).",
          },
          {
            title: "3. כיסוי ביטויי זנב ארוך מקומיים",
            body: "לעסק מקומי יש עשרות חיפושים קטנים: ‘אינסטלטור במרכז’, ‘חשמלאי ב[שכונה]’, ‘רופא שיניים לילדים לידיי’. כדי לתפוס אותם צריך עמודי שירות, עמודי אזור ושילובים של ‘שירות + אזור’.",
          },
          {
            title: "4. יותר המרות",
            body: "מבנה ברור מקצר את הדרך לפעולה: המשתמש מוצא מהר שירות באזור שלו-ומבצע שיחה/טופס/הודעה.",
          },
          {
            title: "5. אינדוקס מהיר יותר",
            body: "ארכיטקטורה טובה עוזרת לבוטים לגלות עמודים חדשים מהר יותר ולסווג אותם נכון.",
          },
          {
            title: "6. צמיחה בלי בלגן",
            body: "כשהעסק גדל ומוסיף שירותים ואזורים, מבנה מתוכנן מאפשר להתרחב בלי בלבול ובלי פגיעה בדירוגים.",
          },
        ],
      },
      {
        title: "למה לצפות ממבנה אתר נכון",
        blocks: [
          {
            title: "1. יותר דירוגים ותנועה",
            body: "מבנה נכון יכול לשפר משמעותית נראות מקומית, להגדיל את מספר הביטויים בטופ 10 ולחזק עמודי מיקום.",
          },
          {
            title: "2. יותר פניות איכותיות",
            body: "עמודים מסוג ‘שירות + אזור’ מביאים קהל עם כוונה גבוהה יותר מאשר עמוד שירות כללי.",
          },
          {
            title: "3. מדדי התנהגות טובים יותר",
            body: "ניווט ברור מעלה זמן באתר ועומק גלישה ומפחית נטישה מהירה-סימנים חיוביים לביצועי SEO.",
          },
          {
            title: "4. חיזוק נוכחות מותג מקומית",
            body: "עמודי עיר/שכונה יוצרים תחושת נוכחות: ‘הנדימן ב[אזור]’, ‘תיקון חלונות ב[שכונה]’. זה מעלה אמון.",
          },
          {
            title: "5. פרסום יעיל יותר",
            body: "מבנה טוב מאפשר להוביל קמפיינים לעמודי נחיתה מדויקים (שירות/אזור) ולהגדיל המרות ביחס לשליחה לעמוד הבית.",
          },
        ],
      },
      {
        title: "איך לתכנן מבנה אתר ל‑SEO מקומי (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. להגדיר אזורי כיסוי",
            body: "אם אתם עובדים במספר שכונות/ערים, להתחיל במפת כיסוי:",
          },
          {
            body: [
              "לרשום שכונות/אזורים שאתם משרתים;",
              "לרשום ערים שבהן אתם באמת נותנים שירות;",
              "לתעדף אזורים עם ביקוש גבוה.",
            ],
          },
          {
            title: "שלב 2. למפות שירותים",
            body: "לחלק שירותים ל:",
          },
          {
            body: ["שירותים מרכזיים;", "שירותים נוספים;", "מיקרו‑שירותים."],
          },
          {
            body: "לדוגמה לחשמלאי: התקנת שקעים, החלפת מפסקים, בדיקות תקינות, התקנת תאורה ועוד.",
          },
          {
            title: "שלב 3. לבנות מבנה בסיס",
            body: "מבנה מקומי נפוץ כולל:",
          },
          {
            body: [
              "עמוד בית;",
              "עמודי קטגוריות שירות;",
              "עמודי שירות;",
              "עמודי עיר;",
              "עמודי שכונה/אזור;",
              "עמודי ‘שירות + אזור’ (לרוב נקודות כניסה חזקות).",
            ],
          },
          {
            title: "שלב 4. לתכנן קישורים פנימיים",
            body: "מבנה הוא גם קשרים בין עמודים. חשוב:",
          },
          {
            body: [
              "לקשר עמודי עיר לשירותים;",
              "לקשר שכונות לערים ולשירותים;",
              "לקשר שירותים לקייסים ולבלוג;",
              "לקשר עמודי מיקום לצור קשר/הזמנה.",
            ],
          },
          {
            body: "כך מנועי חיפוש מבינים מהו ‘הליבה’ של ההצעה המקומית.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "מבנה אתר ל‑SEO מקומי הוא הבסיס לכל השאר: תוכן, נוכחות במפות, ביקורות ופרסום. הוא עוזר:",
          },
          {
            body: [
              "לכסות יותר חיפושים מקומיים;",
              "לשפר נראות בחיפוש ובמפות;",
              "להגדיל פניות איכותיות;",
              "לגדול בלי לאבד סדר.",
            ],
          },
          {
            body: "השקעה חד‑פעמית בתכנון המבנה יוצרת יתרון תחרותי לטווח ארוך.",
          },
        ],
      },
    ],
  },
};

export default content;
