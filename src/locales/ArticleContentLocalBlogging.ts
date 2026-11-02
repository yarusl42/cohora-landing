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
    title: "Ведение блога на сайте для привлечения локального трафика",
    lead: [
      "Блог на сайте локального бизнеса - это не просто место для новостей. При правильной стратегии он превращается в источник целевого локального трафика, который приводит клиентов из конкретного города, района и даже улицы. Статьи под локальные запросы усиливают SEO, повышают авторитет компании и помогают получать заявки без дополнительной рекламы.",
    ],
    sections: [
      {
        title: "Зачем бизнесу вести блог для локального SEO",
        blocks: [
          {
            title: "1. Позиции по локальным запросам",
            body: "Большинство компаний продвигают только главную, страницы услуг и карточки в картах. При этом огромный пласт локальных информационных запросов остаётся свободным. Примеры:",
          },
          {
            body: [
              "«где сделать ремонт обуви в центре Минска»;",
              "«лучшие кафе для завтраков в Бресте»;",
              "«как выбрать стоматологию в Советском районе Минска»;",
              "«какой автосервис лучше на востоке Гродно».",
            ],
          },
          {
            body: "Статьи, которые подробно разбирают такие вопросы, помогают занимать позиции в поиске и привлекать людей, уже привязанных к вашему городу и району.",
          },
          {
            title: "2. Рост доверия и экспертности",
            body: "Когда бизнес регулярно публикует полезные материалы - советы, инструкции, разборы кейсов, ответы на частые вопросы - он формирует образ эксперта. В нишах медицины, красоты, авто, ремонта, образования ощущение компетентности напрямую влияет на выбор клиента.",
          },
          {
            title: "3. Бесплатный органический трафик",
            body: "Каждая статья - это новая точка входа на сайт. 50 статей - 50 потенциальных входов, 100 статей - уже сотня страниц, которые могут собирать поисковый трафик. Чем больше полезного контента, тем выше органика и количество обращений без дополнительных рекламных затрат.",
          },
          {
            title: "4. Усиление локального SEO",
            body: "Поисковые системы учитывают упоминания города, районов и локальных ориентиров, а также структуру навигации по блогу. Каждая статья усиливает сайт как локальный ресурс и помогает расти не только блогу, но и основным страницам: главной, услугам, карточкам в картах.",
          },
          {
            title: "5. Работа с разными этапами воронки",
            body: "Блог позволяет «ловить» пользователей на разных стадиях принятия решения:",
          },
          {
            body: [
              "поиск информации («как часто нужно делать чистку кондиционера»);",
              "осознание проблемы («когда менять тормозные колодки»);",
              "оценка стоимости («сколько стоит ремонт бампера в Гомеле»);",
              "выбор исполнителя («лучший автосервис в Октябрьском районе Минска»).",
            ],
          },
          {
            title: "6. Конкурентное преимущество",
            body: "Многие локальные компании блог не ведут. Если в вашем городе мало качественного контента по локальным запросам, вы можете занять топовые позиции с меньшими усилиями, чем в классическом SEO по коммерческим фразам.",
          },
        ],
      },
      {
        title: "Чего ожидать от ведения блога",
        blocks: [
          {
            title: "Рост органического трафика",
            body: "При регулярной работе с контентом трафик может вырасти на 50–500% за 6–12 месяцев в зависимости от ниши, конкуренции и объёма публикаций. Статьи продолжают приводить посетителей годами, становясь долгосрочным активом.",
          },
          {
            title: "Укрепление позиций в локальном SEO",
            body: "Сайт начинает чаще показываться в своём городе, по большему количеству запросов и по низкоконкурентным локальным фразам, которые редко закрываются лендингами услуг.",
          },
          {
            title: "Увеличение заявок и звонков",
            body: "Чем больше людей приходит на сайт через статьи, тем выше суммарное количество конверсий: звонков, заявок, сообщений в мессенджерах. Особенно хорошо работают статьи с призывами к действию и понятными сценариями следующего шага.",
          },
          {
            title: "Улучшение имиджа и лояльности",
            body: "Экспертный блог усиливает бренд: пользователи начинают воспринимать компанию как надёжного советчика, к которому можно вернуться за рекомендацией или вторым мнением.",
          },
        ],
      },
      {
        title: "Как вести блог для привлечения локального трафика: пошагово",
        blocks: [
          {
            title: "Шаг 1. Соберите локальные запросы",
            body: "Начните с запросов, которые содержат город, район, микрорайон, улицы и крупные объекты (метро, ТЦ) и связаны с вашей сферой. Используйте Яндекс.Вордстат, подсказки Google и аналитику по уже существующим обращениям.",
          },
          {
            title: "Шаг 2. Составьте контент‑план",
            body: "На основе собранных запросов сформируйте список тем:",
          },
          {
            body: [
              "информационные статьи («как выбрать…», «почему важно…»);",
              "локальные подборки («лучшие места/сервисы в районе…»);",
              "кейсы и истории клиентов;",
              "ответы на частые вопросы;",
              "обзоры услуг с привязкой к городу.",
            ],
          },
          {
            title: "Шаг 3. Пишите под человека, а не под робота",
            body: "Статьи должны быть полезными и живыми: с понятными примерами, сценариями, ошибками и реальными ситуациями. Ключевые фразы с городом и районом вписывайте естественно, без переспама.",
          },
          {
            title: "Шаг 4. Добавляйте локальные элементы",
            body: "В текстах стоит использовать:",
          },
          {
            body: [
              "названия районов и улиц;",
              "упоминания станций метро и ТЦ;",
              "кейсы с конкретными локациями;",
              "описания особенностей города (сезонность, погода, инфраструктура).",
            ],
          },
          {
            title: "Шаг 5. Связывайте статьи с услугами и важными страницами",
            body: "Внутренняя перелинковка - обязательный элемент. Из статей логично вести пользователя на релевантные страницы услуг, контакты, запись на приём или формы заявки. Это повышает и SEO‑эффект, и конверсию.",
          },
          {
            title: "Шаг 6. Регулярность и долгосрочная стратегия",
            body: "Блог даёт лучший эффект при регулярных публикациях. Лучше публиковать 2–4 качественные статьи в месяц на протяжении года, чем «выстрелить» десятью постами и забросить раздел.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Ведение блога для локального бизнеса - стратегический инструмент, который усиливает SEO, повышает доверие и приносит стабильный поток целевых клиентов из поиска. При грамотном контент‑плане и регулярной работе статьи становятся фундаментом видимости бренда в своём городе и районе.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Using a blog to attract local organic traffic",
    lead: [
      "A local business blog shouldn’t be just ‘news.’ With the right strategy, it becomes a consistent source of high-intent local traffic-bringing customers from specific cities, neighborhoods, and even streets. Local-intent articles strengthen SEO, build authority, and generate leads without additional ad spend.",
    ],
    sections: [
      {
        title: "Why a local business should run a blog",
        blocks: [
          {
            title: "1. Rankings for local informational queries",
            body: "Many businesses focus only on their homepage, service pages, and Maps profiles. That leaves a huge set of local informational searches open. Examples:",
          },
          {
            body: [
              "“best shoe repair near downtown”;",
              "“best breakfast cafes in [city]”;",
              "“how to choose a dentist in [neighborhood]”;",
              "“best auto repair shop near [area]”.",
            ],
          },
          {
            body: "Articles that answer these questions can rank in Google and bring users who are already location-qualified.",
          },
          {
            title: "2. More trust and expertise",
            body: "Consistent helpful content-guides, checklists, FAQs, and case breakdowns-positions your business as an expert. In industries like healthcare, beauty, automotive, home services, and education, perceived expertise directly impacts choice.",
          },
          {
            title: "3. Compounding organic traffic",
            body: "Each post is a new entry point. 50 posts can mean 50 potential landing pages; 100 posts can create a library that keeps pulling search traffic for years.",
          },
          {
            title: "4. Stronger local SEO signals",
            body: "Search engines pick up neighborhood mentions, local landmarks, and internal linking. Blog content can strengthen not only the blog but also your core service and location pages.",
          },
          {
            title: "5. Coverage across the funnel",
            body: "A blog helps capture users at different decision stages:",
          },
          {
            body: [
              "research (“how often should I service my AC?”);",
              "problem awareness (“signs your brakes need replacing”);",
              "pricing intent (“how much does bumper repair cost in [city]?”);",
              "provider selection (“best dentist near me in [neighborhood]”).",
            ],
          },
          {
            title: "6. Competitive advantage",
            body: "Many local competitors don’t publish at all. If your market has little quality local content, you can earn visibility with less effort than purely commercial SEO.",
          },
        ],
      },
      {
        title: "What to expect from blogging",
        blocks: [
          {
            title: "Organic traffic growth",
            body: "With consistent publishing, traffic can grow significantly over 6–12 months depending on the niche and competition. Strong posts can bring visits for years.",
          },
          {
            title: "Better local visibility",
            body: "You start showing up for more local long-tail queries that service pages don’t cover well.",
          },
          {
            title: "More calls and leads",
            body: "The more users enter through content, the more total conversions you can generate-especially when posts include a clear next step.",
          },
          {
            title: "Stronger brand perception",
            body: "An expert blog makes the brand feel trustworthy and helpful-users come back for guidance.",
          },
        ],
      },
      {
        title: "How to run a blog for local traffic (step-by-step)",
        blocks: [
          {
            title: "Step 1. Collect local keywords",
            body: "Start with queries that include the city, neighborhoods, landmarks, and your service category. Use Google autocomplete, Search Console, and real customer questions. (No need for region-specific tools-focus on what works for your market.)",
          },
          {
            title: "Step 2. Build a content plan",
            body: "Based on those queries, plan topics like:",
          },
          {
            body: [
              "how-to and educational posts;",
              "local lists (“best places/services in [area]”);",
              "customer stories and case studies;",
              "FAQ posts;",
              "service explainers connected to the city.",
            ],
          },
          {
            title: "Step 3. Write for people, not bots",
            body: "Keep posts practical and real: examples, scenarios, common mistakes, and clear guidance. Add location modifiers naturally-avoid keyword stuffing.",
          },
          {
            title: "Step 4. Add local elements",
            body: "Use:",
          },
          {
            body: [
              "neighborhood and street names;",
              "landmarks and transit hubs;",
              "cases tied to specific locations;",
              "local context (seasonality, weather, infrastructure).",
            ],
          },
          {
            title: "Step 5. Link to your money pages",
            body: "Internal linking is mandatory. From posts, guide readers to relevant service pages, contact pages, booking pages, or quote forms.",
          },
          {
            title: "Step 6. Consistency wins",
            body: "Blogging works best with steady publishing. 2–4 strong posts per month over a year beats a short burst followed by silence.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "For a local business, blogging is a strategic asset that strengthens SEO, builds trust, and creates a steady stream of search-driven leads. With a clear plan and consistent publishing, your content can become a long-term local visibility foundation.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "ניהול בלוג באתר כדי למשוך תנועה מקומית אורגנית",
    lead: [
      "בלוג לעסק מקומי הוא לא רק ‘חדשות’. עם אסטרטגיה נכונה הוא הופך למקור קבוע של תנועה מקומית איכותית-שמייצרת לקוחות מעיר, שכונה ואפילו רחוב. מאמרים עם כוונה מקומית מחזקים SEO, בונים סמכות ומביאים פניות בלי להגדיל תקציב פרסום.",
    ],
    sections: [
      {
        title: "למה לעסק מקומי כדאי לנהל בלוג",
        blocks: [
          {
            title: "1. מיקומים בביטויים מקומיים־מידעיים",
            body: "הרבה עסקים מקדמים רק עמוד בית, עמודי שירות וכרטיס במפות. כך נשאר שוק פתוח של חיפושי מידע מקומיים. דוגמאות:",
          },
          {
            body: [
              "‘איפה לעשות תיקון נעליים במרכז העיר’;",
              "‘בתי קפה מומלצים לארוחת בוקר ב[עיר]’;",
              "‘איך לבחור רופא שיניים ב[שכונה]’;",
              "‘מוסך מומלץ ליד [אזור]’.",
            ],
          },
          {
            title: "2. יותר אמון ומומחיות",
            body: "תוכן מועיל באופן קבוע-מדריכים, צ’ק־ליסטים, שאלות נפוצות ופירוק מקרים-ממצב אתכם כמומחים. בתחומים כמו רפואה, ביוטי, רכב ושיפוצים זה משפיע ישירות על הבחירה.",
          },
          {
            title: "3. תנועה אורגנית מצטברת",
            body: "כל מאמר הוא נקודת כניסה נוספת. ספרייה של עשרות מאמרים יכולה להמשיך להביא כניסות לאורך שנים.",
          },
          {
            title: "4. חיזוק SEO מקומי",
            body: "מנועי חיפוש מזהים אזכורים של שכונות, נקודות ציון וקישורים פנימיים. הבלוג יכול לחזק גם עמודי שירות ומיקום.",
          },
          {
            title: "5. עבודה על שלבים שונים במשפך",
            body: "בלוג מאפשר לתפוס משתמשים בשלבים שונים:",
          },
          {
            body: [
              "חיפוש מידע (‘כל כמה זמן צריך טיפול למזגן?’);",
              "הבנת בעיה (‘סימנים שהבלמים צריכים החלפה’);",
              "חיפוש מחיר (‘כמה עולה תיקון פגוש ב[עיר]?’);",
              "בחירת ספק (‘רופא שיניים מומלץ ב[שכונה]’).",
            ],
          },
          {
            title: "6. יתרון תחרותי",
            body: "מתחרים מקומיים רבים לא מפרסמים תוכן איכותי. אם באזור שלכם יש מעט תוכן מקומי טוב, אפשר להשיג חשיפה עם פחות מאמץ.",
          },
        ],
      },
      {
        title: "למה לצפות מניהול בלוג",
        blocks: [
          {
            title: "צמיחת תנועה אורגנית",
            body: "עם פרסום עקבי, התנועה יכולה לגדול משמעותית לאורך 6–12 חודשים בהתאם לתחרות ולתחום. מאמרים טובים ממשיכים לעבוד שנים.",
          },
          {
            title: "נראות מקומית טובה יותר",
            body: "תופיעו ביותר ביטויי זנב ארוך מקומיים שלא מכוסים בעמודי שירות.",
          },
          {
            title: "יותר שיחות ופניות",
            body: "ככל שיותר אנשים נכנסים דרך תוכן, כך גדל מספר ההמרות-במיוחד אם יש CTA ברור והמשך תהליך פשוט.",
          },
          {
            title: "חיזוק מותג",
            body: "בלוג מומחה ממצב את המותג כיועץ אמין-משתמשים חוזרים כדי לקבל מידע.",
          },
        ],
      },
      {
        title: "איך לנהל בלוג לתנועה מקומית (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. לאסוף ביטויי חיפוש מקומיים",
            body: "להתחיל מביטויים עם עיר/שכונה/נקודות ציון וסוג השירות. להשתמש בהשלמות של גוגל, בנתוני Search Console ובשאלות של לקוחות.",
          },
          {
            title: "שלב 2. לבנות תוכנית תוכן",
            body: "לתכנן נושאים כמו:",
          },
          {
            body: [
              "מאמרי ‘איך לעשות’ ומדריכים;",
              "רשימות מקומיות (‘מקומות/שירותים מומלצים ב[אזור]’);",
              "סיפורי לקוחות וקייסים;",
              "שאלות נפוצות;",
              "הסברי שירות עם חיבור לעיר.",
            ],
          },
          {
            title: "שלב 3. לכתוב לאנשים, לא לבוטים",
            body: "לכתוב בצורה פרקטית עם דוגמאות, טעויות נפוצות וסיטואציות אמיתיות. לשלב מקומיות בצורה טבעית.",
          },
          {
            title: "שלב 4. להוסיף אלמנטים מקומיים",
            body: "לשלב:",
          },
          {
            body: [
              "שמות שכונות ורחובות;",
              "נקודות ציון ותחנות;",
              "קייסים לפי מיקום;",
              "הקשר מקומי (עונתיות, מזג אוויר, תשתיות).",
            ],
          },
          {
            title: "שלב 5. קישורים לעמודים חשובים",
            body: "קישורים פנימיים הם חובה: להוביל מעמודי תוכן לעמודי שירות רלוונטיים, לצור קשר, להזמנה או לטופס הצעת מחיר.",
          },
          {
            title: "שלב 6. עקביות לאורך זמן",
            body: "התוצאה הטובה ביותר מגיעה מפרסום עקבי. 2–4 מאמרים חזקים בחודש לאורך שנה עדיף על ‘בוסט’ קצר ואז הפסקה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "בלוג לעסק מקומי הוא נכס אסטרטגי שמחזק SEO, בונה אמון ומייצר זרם יציב של פניות מהחיפוש. עם תוכנית ברורה ופרסום עקבי, התוכן הופך לבסיס נראות מקומית לטווח ארוך.",
          },
        ],
      },
    ],
  },
};

export default content;
