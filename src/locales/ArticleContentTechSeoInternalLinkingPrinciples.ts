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
      "Работа с внутренней перелинковкой: почему без неё сайт «не растёт» и как выстроить стратегию",
    lead: [
      "Внутренняя перелинковка - это не просто расстановка ссылок внутри сайта. Это продуманная SEO‑стратегия, которая помогает поисковым роботам понимать структуру, распределять вес страниц и повышать позиции в выдаче.",
      "Часто именно качественная перелинковка становится той «невидимой силой», которая двигает сайт вверх, даже если тексты, дизайн и техническая часть уже в порядке.",
    ],
    sections: [
      {
        title: "1. Что такое внутренняя перелинковка и зачем она нужна",
        blocks: [
          {
            body: "Внутренняя перелинковка - это система ссылок, которая соединяет страницы сайта между собой. Если представить сайт как город: страницы - это дома, а ссылки - дороги между ними. Если дорог мало, они запутаны или ведут «в никуда», ни пользователи, ни поисковые роботы не смогут быстро и логично перемещаться.",
          },
          {
            title: "Ключевые задачи перелинковки",
            body: [
              "ускорить индексацию страниц;",
              "распределить «вес» между важными разделами;",
              "улучшить навигацию для пользователей;",
              "убрать страницы‑сироты и «тупики» в структуре;",
              "сформировать тематические кластеры.",
            ],
          },
        ],
      },
      {
        title: "2. Что даёт бизнесу грамотная перелинковка",
        blocks: [
          {
            title: "Увеличение видимости в поисковых системах",
            body: "При правильной перелинковке страницы начинают ранжироваться по большему количеству запросов. Робот лучше понимает, какие материалы являются основными, а какие - вспомогательными, и как они связаны между собой.",
          },
          {
            title: "Рост органического трафика",
            body: "Даже без добавления новых текстов трафик может расти только за счёт того, что сайт становится понятнее поисковым системам: исчезают страницы‑сироты, усиливаются важные разделы, кластеризуются темы.",
          },
          {
            title: "Увеличение времени на сайте и глубины просмотра",
            body: "Удобные внутренние ссылки стимулируют переходы на другие материалы, повышают вовлечённость, уменьшают вероятность быстрого ухода и косвенно усиливают SEO через поведенческие факторы.",
          },
          {
            title: "Усиление коммерческих страниц",
            body: "Перелинковка позволяет направлять «вес» с информационных статей на коммерческие разделы: услуги, категории, карточки товаров. Так вы превращаете контент в реальный инструмент продаж.",
          },
        ],
      },
      {
        title: "3. Как мы работаем с внутренней перелинковкой: основные этапы",
        blocks: [
          {
            title: "Этап 1. Аудит текущей перелинковки",
            body: [
              "сколько страниц имеют входящие ссылки;",
              "есть ли страницы‑сироты;",
              "нет ли дублирующихся и «пустых» ссылок;",
              "используются ли осмысленные анкоры;",
              "какие страницы нуждаются в усилении.",
              "Для этого применяются специализированные инструменты (Screaming Frog, Netpeak Spider, поисковая консоль и др.), а результатом становится карта текущей структуры.",
            ],
          },
          {
            title: "Этап 2. Определение приоритетных страниц",
            body: [
              "коммерческие страницы, которые должны расти в первую очередь;",
              "сильные статьи, способные передавать вес;",
              "информационные материалы, поддерживающие ключевые кластеры.",
            ],
          },
          {
            title: "Этап 3. Построение тематических кластеров",
            body: [
              "по видам услуг или товаров;",
              "по темам статей;",
              "по географии (если сайт локальный).",
              "Формируется «дерево связей», которое помогает поисковикам понять, какие разделы являются опорными.",
            ],
          },
          {
            title: "Этап 4. Разработка анкор‑стратегии",
            body: [
              "какие фразы использовать для ссылок на ключевые страницы;",
              "как распределить анкоры между статьями;",
              "где использовать брендовые и нейтральные формулировки;",
              "как избежать переоптимизации.",
            ],
          },
          {
            title: "Этап 5. Внедрение перелинковки",
            body: [
              "контекстные ссылки внутри текстов - самые сильные по влиянию;",
              "навигационные элементы (меню, хлебные крошки, категории);",
              "блоки «Читайте также» и «Похожие материалы», которые увеличивают глубину просмотра.",
            ],
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Грамотная работа с внутренней перелинковкой - обязательное условие для роста сайта. Она помогает поисковым системам понять структуру и приоритеты, а пользователям - быстрее находить нужную информацию.",
          },
          {
            body: "В результате вы получаете рост видимости, трафика и конверсий без обязательного наращивания внешних ссылок или постоянной публикации новых текстов.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Internal linking: why sites stagnate without it and how to build a strategy",
    lead: [
      "Internal linking is more than adding links inside pages. It’s an SEO system that helps search engines understand structure, distribute authority, and improve rankings.",
      "In many cases, good internal linking becomes the ‘invisible force’ that pushes a site up-even when content and technical SEO are already decent.",
    ],
    sections: [
      {
        title: "1. What internal linking is",
        blocks: [
          {
            body: "Internal linking is the network of links connecting your pages. Think of your site as a city: pages are buildings and links are roads. If there are too few roads-or they lead nowhere-users and crawlers can’t navigate efficiently.",
          },
          {
            title: "Core goals",
            body: [
              "speed up crawling and indexing;",
              "distribute authority to priority pages;",
              "improve user navigation;",
              "remove orphan pages and dead ends;",
              "build topical clusters.",
            ],
          },
        ],
      },
      {
        title: "2. What it does for your business",
        blocks: [
          {
            title: "More visibility",
            body: "With a strong link structure, pages can rank for more queries because search engines understand which pages are core and how content relates.",
          },
          {
            title: "More organic traffic",
            body: "Traffic can grow even without new content when you remove orphans, strengthen key sections, and cluster topics logically.",
          },
          {
            title: "Better engagement",
            body: "Helpful internal links increase depth of visit and time on site. Those user signals can indirectly support SEO.",
          },
          {
            title: "Stronger money pages",
            body: "You can route authority from informational content to commercial pages (services, categories, products), turning content into a sales engine.",
          },
        ],
      },
      {
        title: "3. A practical internal linking workflow",
        blocks: [
          {
            title: "Step 1. Audit current links",
            body: "Review inbound internal links, orphan pages, duplicate/empty links, anchor quality, and which pages need strengthening. Tools like Screaming Frog help build a map of the current structure.",
          },
          {
            title: "Step 2. Define priority pages",
            body: "Don’t try to ‘fix everything’. Identify money pages first, then strong articles that can pass authority, and supporting content around your main clusters.",
          },
          {
            title: "Step 3. Build topical clusters",
            body: "Group pages by services/products, content topics, and (if relevant) geography. Create a clear link tree so search engines understand pillar pages.",
          },
          {
            title: "Step 4. Anchor strategy",
            body: "Anchors are strong signals. Plan how you’ll vary anchors, use branded vs neutral phrasing, and avoid over-optimization.",
          },
          {
            title: "Step 5. Implementation",
            body: [
              "contextual links inside content (strongest);",
              "navigation elements (menus, breadcrumbs);",
              "related content blocks (‘Read next’, ‘Related articles’) to increase depth.",
            ],
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Internal linking is a foundational growth lever. It helps search engines understand priority and structure, and helps users find the next step.",
          },
          {
            body: "Done well, it increases visibility, traffic, and conversions without relying only on new backlinks or constant publishing.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "קישורים פנימיים: למה אתר לא ‘צומח’ בלעדיהם ואיך בונים אסטרטגיה",
    lead: [
      "קישורים פנימיים הם לא רק ‘להוסיף לינקים’. זו אסטרטגיית SEO שעוזרת למנועי חיפוש להבין את המבנה, להעביר סמכות בין עמודים ולשפר דירוגים.",
      "לעיתים קישורים פנימיים איכותיים הם הדבר שמקפיץ אתר למעלה גם כשהתוכן והטכני כבר בסדר.",
    ],
    sections: [
      {
        title: "1. מה זה קישורים פנימיים",
        blocks: [
          {
            body: "זו רשת הלינקים שמחברת בין עמודים באתר. אם אין מספיק ‘דרכים’ או שהן לא הגיוניות-גם המשתמשים וגם הסורקים מתקשים להתמצא.",
          },
          {
            title: "מטרות מרכזיות",
            body: [
              "להאיץ סריקה ואינדוקס;",
              "לחזק עמודים חשובים;",
              "לשפר ניווט;",
              "להסיר עמודים יתומים;",
              "לבנות אשכולות נושאיים.",
            ],
          },
        ],
      },
      {
        title: "2. יתרונות עסקיים",
        blocks: [
          {
            title: "נראות גבוהה יותר",
            body: "מבנה טוב עוזר למנוע חיפוש להבין אילו עמודים מרכזיים ואיך הכל מתחבר.",
          },
          {
            title: "יותר תנועה אורגנית",
            body: "גם בלי תוכן חדש, ניתן לראות שיפור כשמחזקים עמודים חשובים ומסדרים את המבנה.",
          },
          {
            title: "חיזוק עמודי שירות",
            body: "אפשר להעביר ‘משקל’ מתוכן מידע לעמודי שירות ומכירה.",
          },
        ],
      },
      {
        title: "3. תהליך עבודה מומלץ",
        blocks: [
          {
            title: "שלב 1. בדיקת מבנה קיים",
            body: "לבדוק עמודים יתומים, איכות עוגנים (anchor text) וכמה לינקים נכנסים לכל עמוד. כלים כמו Screaming Frog יכולים לעזור.",
          },
          {
            title: "שלב 2. קביעת עמודים בעדיפות",
            body: "להגדיר עמודים מסחריים ושירותים שחשובים לצמיחה.",
          },
          {
            title: "שלב 3. בניית אשכולות",
            body: "לארגן עמודים לפי נושאים/שירותים (ולפי גיאוגרפיה אם רלוונטי) ולבנות ‘עץ’ קישורים ברור.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "קישורים פנימיים הם בסיס לצמיחה אורגנית. הם משפרים הבנה של המבנה ומובילים את המשתמש לצעד הבא.",
          },
        ],
      },
    ],
  },
};

export default content;
