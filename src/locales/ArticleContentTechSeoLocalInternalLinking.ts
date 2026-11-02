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
      "Внутренняя перелинковка для усиления локального SEO: как связать страницы так, чтобы они приносили клиентов",
    lead: [
      "Внутренняя перелинковка - один из самых недооценённых инструментов локального SEO. В отличие от обычного сайта, где ссылки в основном распределяют вес между страницами, в локальном SEO внутренние ссылки выполняют дополнительную функцию: помогают поисковым системам понять географическую структуру бизнеса, связать услуги с локациями и усилить релевантность по геозапросам.",
      "Внешние ссылки добыть сложно, конкуренты не всегда хотят делиться трафиком, а вот внутренние ссылки полностью находятся под вашим контролем. От того, как вы выстроите связи между страницами сайта, во многом зависит, какие разделы будут ранжироваться лучше, насколько быстро индексируются новые материалы и насколько удобно пользователю перемещаться по сайту.",
    ],
    sections: [
      {
        title: "Зачем локальному бизнесу внутренняя перелинковка",
        blocks: [
          {
            title: "1. Распределение «веса» между страницами",
            body: "У каждого URL есть свой SEO‑вес. Внутренние ссылки помогают направлять этот вес туда, где он действительно важен: на страницы городов, услуг, филиалов, раздел «Контакты» или ключевые статьи. Чем больше качественных внутренних ссылок у конкретной страницы, тем выше её важность в глазах поисковика.",
          },
          {
            title: "2. Улучшение индексации",
            body: "Поисковые роботы ходят по ссылкам. Если страница «висящая» и на неё почти никто не ссылается, она может индексироваться медленно или вообще выпадать из индекса. Связанная, логичная структура помогает роботу быстро находить и переобходить важные разделы, что особенно критично при добавлении новых услуг, городов или районов.",
          },
          {
            title: "3. Повышение релевантности по локальным запросам",
            body: "В локальном SEO важны гео‑сигналы: упоминания городов, районов, локаций. Когда страницы городов, услуг и контента грамотно связаны между собой, поисковику проще понять, какие разделы отвечают за какой регион и какие запросы. Это напрямую влияет на видимость по связкам «услуга + город» и «услуга + район».",
          },
          {
            title: "4. Улучшение поведения пользователей",
            body: "Внутренние ссылки - это ещё и навигация. Если посетитель легко находит связанные услуги, ближайший филиал, страницу района или полезную статью, он дольше остаётся на сайте, переходит по цепочке страниц и чаще выполняет целевое действие. Отказы снижаются, вовлечённость растёт - поисковые системы это видят и учитывают в ранжировании.",
          },
          {
            title: "5. Формирование понятной структуры сайта",
            body: "Перелинковка отражает логику бизнеса: какие услуги вы оказываете, в каких городах и районах работаете, как связаны между собой категории и отдельные направления. Чем понятнее эта структура для пользователя и поисковика, тем выше шансы, что сайт будет стабильно расти в органике.",
          },
        ],
      },
      {
        title: "Чего ожидать от внедрения грамотной перелинковки",
        blocks: [
          {
            body: [
              "рост позиций по локальным запросам («услуга + город», «услуга + район» и т.п.);",
              "улучшение видимости в Google и Яндекс Картах за счёт более понятной геоструктуры сайта;",
              "ускорение индексации новых разделов, лендингов городов и статей;",
              "увеличение конверсии: пользователям проще найти нужный телефон, адрес или услугу;",
              "снижение отказов и рост времени на сайте.",
            ],
          },
        ],
      },
      {
        title: "Как выстроить внутреннюю перелинковку в локальном проекте",
        blocks: [
          {
            title: "1. Свяжите главную, города, услуги и блог",
            body: [
              "Базовая схема: главная → страницы городов (/uslugi-minsk, /uslugi-gomel, /uslugi-brest и т.д.).",
              "Страница города → страницы услуг в этом городе (/minsk/remont-kvartir, /minsk/ustanovka-okon и др.).",
              "Страницы услуг → связанные статьи блога с локальным акцентом.",
              "Статьи блога → обратно на страницу города или услуги с формулировкой вроде: «Если вам нужна [услуга] в [городе], посмотрите полный список услуг здесь».",
              "Так формируется тематический кластер: поисковик видит, какие материалы относятся к конкретному городу и услуге.",
            ],
          },
          {
            title: "2. Добавляйте ссылки в тексте, а не только в меню",
            body: "Меню и футер важны, но самые сильные сигналы даёт контекстная перелинковка: ссылки внутри абзацев, списков, блоков рекомендаций. В текстах статей, описаниях услуг и кейсах стоит аккуратно добавлять ссылки на связанные страницы - так вы помогаете и пользователю, и поисковику.",
          },
          {
            title: "3. Используйте анкоры с геопривязкой без переспама",
            body: [
              "Анкор - это текст ссылки. Для локального SEO полезно, когда в анкоре присутствует география, но без излишнего повторения.",
              "Примеры: «ремонт окон в Минске», «услуги клининга в Бресте», «наш офис в центре города».",
              "Важно, чтобы формулировки выглядели естественно и не превращались в набор ключей ради SEO.",
            ],
          },
          {
            title: "4. Линкуйте ближайшие районы и соседние услуги",
            body: [
              "На страницах городов и районов добавляйте блоки со ссылками на соседние территории и смежные услуги.",
              "Например, если вы продвигаете «ремонт квартир в Минске», рядом логично разместить ссылки на: ремонт в пригородах, отделочные работы, ремонт ванной комнаты, дизайн‑проект интерьера.",
              "Это помогает пользователю быстро переключиться на нужное направление и усиливает тематическую связанность разделов.",
            ],
          },
          {
            title: "5. Добавляйте блоки рекомендаций",
            body: [
              "Хорошо работают блоки: «Вам может быть интересно», «Другие услуги рядом», «Похожие материалы», «Услуги в вашем районе».",
              "Такие блоки помогают перелинковке и ведут пользователя по воронке: от общего интереса к конкретной услуге и записи.",
            ],
          },
          {
            title: "6. Перелинковывайте новые страницы сразу",
            body: [
              "Каждый новый лендинг города, услуги или статья не должен «висеть в воздухе».",
              "После публикации стоит сразу привязать страницу из релевантных существующих материалов, добавить ссылки на важные разделы и включить в блоки рекомендаций.",
              "Так страница быстрее попадёт в индекс и начнёт получать трафик.",
            ],
          },
          {
            title: "7. Используйте хлебные крошки и навигационные блоки",
            body: "Breadcrumbs - это одновременно удобство для пользователя и дополнительные внутренние ссылки. Они помогают показать иерархию: город → категория → услуга → статья. Дополнительно можно использовать навигационные блоки в сайдбаре или внизу страниц со ссылками на основные разделы.",
          },
        ],
      },
      {
        title: "Типичные ошибки во внутренней перелинковке",
        blocks: [
          {
            title: "1. Только меню, без контекстных ссылок",
            body: "Когда весь сайт «держится» на шапке и футере, а внутри текстов нет ни одной ссылки, вы теряете большую часть потенциала перелинковки. Поисковику сложно понять, какие страницы действительно связаны тематически и какие из них важнее.",
          },
          {
            title: "2. Переспам анкорами и одинаковые формулировки",
            body: "Если везде использовать один и тот же анкор «ремонт окон Минск недорого», это выглядит неестественно. Лучше чередовать формулировки и вписывать их органично в текст.",
          },
          {
            title: "3. Закольцовка ради закольцовки",
            body: "Иногда перелинковку превращают в «карусель», когда каждая страница ссылается на все остальные. Это размывает вес. Гораздо эффективнее строить логичные кластеры и цепочки переходов.",
          },
        ],
      },
      {
        title: "Итоги",
        blocks: [
          {
            body: [
              "усиливать нужные страницы и продвигать их по целевым запросам;",
              "повышать видимость в локальной выдаче и картах;",
              "ускорять индексацию новых разделов;",
              "улучшать поведение пользователей и конверсию;",
              "строить понятную архитектуру сайта, готовую к масштабированию.",
              "Чем раньше вы начнёте относиться к внутренним ссылкам как к осознанному инструменту, а не к случайным переходам, тем быстрее локальный проект начнёт набирать поисковый вес и приносить стабильный поток клиентов.",
            ],
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Internal linking for local SEO: how to connect pages so they generate customers",
    lead: [
      "Internal linking is one of the most underestimated local SEO levers. In local SEO, internal links don’t just distribute authority-they help search engines understand your geographic structure and connect services with locations.",
      "Backlinks are hard to earn, but internal links are fully under your control. The way you connect your site impacts rankings, indexing speed, and user navigation.",
    ],
    sections: [
      {
        title: "Why local businesses need internal linking",
        blocks: [
          {
            title: "1. Distribute authority to key pages",
            body: "Internal links help direct value to the pages that matter: service pages, location pages, contact pages, and key articles. The more relevant internal links a page has, the more important it looks.",
          },
          {
            title: "2. Better indexing",
            body: "Search engines discover pages through links. Orphan pages can index slowly or drop out. A connected structure helps crawlers revisit important sections-especially when you add new services or locations.",
          },
          {
            title: "3. Stronger local relevance",
            body: "Local SEO relies on geo signals (cities, neighborhoods, service areas). When your location pages, service pages, and content are linked well, it’s easier for search engines to understand which services apply to which areas.",
          },
          {
            title: "4. Better user behavior",
            body: "Internal links are also navigation. If visitors can easily find related services, nearby locations, or helpful articles, they stay longer and convert more.",
          },
          {
            title: "5. Clear site architecture",
            body: "Good linking mirrors your business structure: services, areas served, and how categories connect. A clear structure supports stable growth.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Higher rankings for local combinations (service + city / service + neighborhood).",
              "Better visibility in Google and map results due to clearer geo structure.",
              "Faster indexing of new pages.",
              "Higher conversion because customers find phone/address/service info faster.",
              "Lower bounce rate and longer sessions.",
            ],
          },
        ],
      },
      {
        title: "How to build internal linking for a local site",
        blocks: [
          {
            title: "1. Connect homepage, locations, services, and content",
            body: [
              "A simple model: homepage → city pages (e.g., /services-new-york, /services-boston).",
              "City page → service pages in that city (e.g., /new-york/apartment-renovation).",
              "Service pages → related blog posts with local angle.",
              "Blog posts → back to the relevant service/city page with a clear CTA.",
              "This forms a cluster so search engines understand the location context.",
            ],
          },
          {
            title: "2. Use contextual links (not just menus)",
            body: "Menus and footers help, but contextual links inside paragraphs and recommendations are the strongest. Add links naturally in service descriptions, case studies, and blog content.",
          },
          {
            title: "3. Use geo anchors without spam",
            body: "Anchors should include location when it’s helpful, but avoid repetitive keyword stuffing. Keep phrasing natural.",
          },
          {
            title: "4. Link nearby areas and related services",
            body: "On city/neighborhood pages, add blocks that link to nearby areas and complementary services. This improves topical connectivity and helps users navigate.",
          },
          {
            title: "5. Add recommendation blocks",
            body: [
              "‘You may also like’, ‘Other services nearby’, ‘Related content’, ‘Services in your area’.",
              "These blocks support both linking and conversion flow.",
            ],
          },
          {
            title: "6. Link new pages immediately",
            body: "New location or service pages shouldn’t be isolated. Add links from relevant existing pages right away so they index faster and start collecting signals.",
          },
          {
            title: "7. Use breadcrumbs",
            body: "Breadcrumbs add usability and internal links, showing hierarchy (city → category → service → article).",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "1. Only menus, no contextual links",
            body: "If everything relies on header/footer navigation and content has no links, you lose most of the internal linking potential.",
          },
          {
            title: "2. Spammy anchors",
            body: "Using the same exact-match anchor everywhere looks unnatural. Vary phrasing and keep it readable.",
          },
          {
            title: "3. Linking everything to everything",
            body: "A link ‘carousel’ dilutes authority. Clusters and logical pathways work better.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Internal linking is a strategic local SEO tool. It helps search engines understand geo structure, improves indexing, and guides users toward conversion.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "קישורים פנימיים ל‑Local SEO: איך לחבר עמודים כך שיביאו לקוחות",
    lead: [
      "קישורים פנימיים הם כלי חזק ב‑Local SEO: הם עוזרים למנועי חיפוש להבין מבנה גיאוגרפי ולקשר שירותים לאזורים.",
      "קישורים חיצוניים קשה להשיג, אבל קישורים פנימיים בשליטתכם. המבנה משפיע על דירוגים, אינדוקס וחוויית משתמש.",
    ],
    sections: [
      {
        title: "למה זה חשוב לעסק מקומי",
        blocks: [
          {
            title: "1. חיזוק עמודים חשובים",
            body: "קישורים פנימיים מעבירים ‘משקל’ לעמודי שירות, אזורים, יצירת קשר ותוכן חשוב.",
          },
          {
            title: "2. אינדוקס מהיר יותר",
            body: "עמודים יתומים נסרקים לאט. מבנה מקושר עוזר לסורקים למצוא תכנים חדשים מהר.",
          },
          {
            title: "3. רלוונטיות מקומית",
            body: "כאשר עמודי שירות ועמודי אזור מקושרים נכון, קל יותר להבין ‘שירות + עיר/שכונה’.",
          },
        ],
      },
      {
        title: "איך לבנות (בקצרה)",
        blocks: [
          {
            title: "1. לחבר בית/אזורים/שירותים/תוכן",
            body: "מודל בסיסי: דף בית → עמודי ערים/אזורים → שירותים → מאמרים שמחזירים לעמודי השירות.",
          },
          {
            title: "2. קישורים בהקשר",
            body: "קישורים בתוך טקסט חזקים יותר מתפריט בלבד.",
          },
          {
            title: "3. Breadcrumbs",
            body: "Breadcrumbs מציגים היררכיה ומוסיפים קישורים פנימיים.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "קישורים פנימיים הם כלי אסטרטגי ל‑Local SEO: הם משפרים אינדוקס, הבנת מבנה גיאוגרפי ומובילים משתמשים להמרה.",
          },
        ],
      },
    ],
  },
};

export default content;
