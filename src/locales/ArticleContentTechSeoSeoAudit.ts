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
      "Аудит технического SEO сайта: полное руководство для новичков и бизнеса",
    lead: [
      "Технический SEO‑аудит - это комплексная проверка сайта на технические ошибки и проблемы, которые мешают поисковым системам корректно сканировать, индексировать и ранжировать страницы.",
      "Многие собственники фокусируются на контенте и ссылках, но забывают про техническую основу. Даже сильный контент может не работать, если сайт медленный, ломается на мобильных устройствах или содержит критические ошибки.",
    ],
    sections: [
      {
        title: "Зачем нужен технический SEO‑аудит",
        blocks: [
          {
            title: "1. Технические ошибки мешают выходить в топ",
            body: "Если сайт медленно загружается, страницы не индексируются, есть дубли или сервер выдаёт ошибки - даже лучший контент не покажет себя. Аудит помогает обнаружить и приоритизировать блокирующие факторы.",
          },
          {
            title: "2. Влияние на скорость и удобство",
            body: "Скорость загрузки влияет и на позиции, и на конверсии: каждая лишняя секунда отнимает часть заявок. Аудит показывает, что именно замедляет сайт: тяжёлые изображения, сторонние скрипты, медленный сервер, отсутствие кеширования и т.д.",
          },
          {
            title: "3. Улучшение индексации",
            body: "Часто в индекс не попадают важные страницы или, наоборот, индексируются технические и дублирующиеся разделы. Корректные robots.txt и sitemap.xml, настройка канонических адресов и статусов ответов сервера - всё это часть технического аудита.",
          },
          {
            title: "4. Предотвращение потери трафика",
            body: "Ошибки 404, цепочки редиректов, проблемы HTTPS, битые ссылки и дубли страниц могут «съедать» десятки процентов трафика. Регулярный аудит позволяет вовремя находить и устранять такие проблемы.",
          },
          {
            title: "5. База для долгосрочного SEO",
            body: "Без исправления технических ошибок ссылки и контент работают вполсилы. Технический аудит - фундамент, на котором строится дальнейшее продвижение.",
          },
        ],
      },
      {
        title: "Каких результатов ожидать от технического аудита",
        blocks: [
          {
            body: [
              "Ускорение сайта за счёт оптимизации изображений, кода и хостинга.",
              "Улучшение индексации: больше правильных страниц попадает в поиск.",
              "Рост позиций по ключевым запросам за счёт повышения качества сайта.",
              "Снижение риска санкций и фильтров поисковых систем.",
              "Рост конверсий, доверия и удовлетворённости пользователей.",
            ],
          },
        ],
      },
      {
        title: "Как выполнить технический SEO‑аудит: пошаговое руководство",
        blocks: [
          {
            title: "Шаг 1. Проверка скорости загрузки",
            body: "Используйте Google PageSpeed Insights, Lighthouse, GTmetrix, Pingdom. Проверьте главную, ключевые посадочные, категории и типичные шаблоны страниц. Зафиксируйте проблемные блоки и сформируйте список оптимизаций.",
          },
          {
            title: "Шаг 2. Анализ мобильной адаптивности",
            body: "С учётом mobile‑first индекса важно, чтобы сайт корректно отображался на смартфонах. Проверьте шрифты, кликабельность элементов, отсутствие горизонтальной прокрутки, удобство форм и меню на мобильных устройствах.",
          },
          {
            title:
              "Шаг 3. Проверка индексации и файлов robots.txt / sitemap.xml",
            body: "С помощью Google Search Console и операторов поиска проверьте, какие страницы уже в индексе, какие нет и какие не должны индексироваться. Убедитесь, что robots.txt не блокирует важные разделы, а sitemap.xml корректен и актуален.",
          },
        ],
      },
      {
        title: "Что ещё важно проверить в техническом аудите",
        blocks: [
          {
            body: [
              "Корректность редиректов (http → https, www/без www, старые URL → новые).",
              "Отсутствие массовых ошибок 4xx и 5xx.",
              "Наличие и правильность канонических тегов (canonical).",
              "Уникальность и структуру URL (чистые, человекопонятные адреса).",
              "Дублирующийся контент и страницы (фильтры, параметры, версии для печати).",
            ],
          },
        ],
      },
      {
        title: "Практические советы и частые ошибки",
        blocks: [
          {
            title: "Советы",
            body: [
              "Проводите технический аудит регулярно: при крупных изменениях и минимум раз в 6–12 месяцев.",
              "Фиксируйте все проблемы в едином списке и расставляйте приоритеты по влиянию на трафик и конверсии.",
              "Работайте в связке SEO‑специалист + разработчик, чтобы быстрее внедрять правки.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Игнорирование технического аудита при запуске и редизайне сайта.",
              "Использование только одного инструмента без перекрёстной проверки.",
              "Исправление мелочей при игнорировании критичных проблем (скорость, индексация, ошибки сервера).",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Как часто нужно делать технический аудит?",
            body: "Минимум раз в полгода или при значимых изменениях (редизайн, миграция, смена CMS/хостинга). Для проектов с большим трафиком - чаще, с постоянным мониторингом ключевых метрик.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleTechnicalSeoAuditChecklist",
    steps: [
      {
        id: "technical-seo-audit-checklist",
        title: "",
        description: "",
        items: [
          "Проверьте скорость загрузки и мобильную адаптивность.",
          "Проанализируйте индексацию, robots.txt и sitemap.xml.",
          "Исправьте ошибки статусов, редиректов и канонических адресов.",
          "Найдите и обработайте дубли контента и страниц.",
          "Настройте регулярный мониторинг и повторный аудит.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Technical SEO audit: a practical guide for beginners and businesses",
    lead: [
      "A technical SEO audit is a structured review of your website’s technical health-issues that can block crawling, indexing, and ranking.",
      "Many teams focus on content and links, but even great content underperforms if the site is slow, broken on mobile, or full of critical errors.",
    ],
    sections: [
      {
        title: "Why a technical SEO audit matters",
        blocks: [
          {
            title: "1. Technical issues can hold rankings back",
            body: "If pages load slowly, don’t get indexed, or return errors, your content won’t reach its potential. Audits help you find and prioritize the real blockers.",
          },
          {
            title: "2. Speed affects both SEO and conversion",
            body: "Performance impacts rankings and leads. An audit helps identify what slows you down: oversized images, third‑party scripts, server response time, missing caching, and more.",
          },
          {
            title: "3. Better crawling and indexing",
            body: "Important pages can be missing from the index-or the index can be polluted with duplicates and thin pages. Reviewing robots.txt, sitemap.xml, canonicals, and status codes is core to technical SEO.",
          },
          {
            title: "4. Prevent traffic loss",
            body: "404s, redirect chains, HTTPS issues, broken links, and duplicate URLs can quietly drain traffic. Regular audits help you catch issues early.",
          },
          {
            title: "5. A foundation for long-term SEO",
            body: "Without fixing technical issues, content and link work is less effective. Technical SEO is the base layer that supports everything else.",
          },
        ],
      },
      {
        title: "What results to expect",
        blocks: [
          {
            body: [
              "Faster site performance through image, code, and hosting optimization.",
              "Cleaner indexing: more of the right pages appear in search.",
              "Ranking improvements due to stronger site quality and fewer crawl issues.",
              "Lower risk of quality-related visibility drops.",
              "Better UX and higher conversion rates.",
            ],
          },
        ],
      },
      {
        title: "How to run a technical SEO audit (step by step)",
        blocks: [
          {
            title: "Step 1. Check page speed",
            body: "Use Google PageSpeed Insights and Lighthouse. For additional perspectives you can also use GTmetrix or WebPageTest. Test your homepage, key landing pages, categories, and common templates, then build a prioritized fix list.",
          },
          {
            title: "Step 2. Review mobile usability",
            body: "With mobile‑first indexing, your site must work well on phones. Check font sizes, tap targets, horizontal scrolling, form usability, and navigation.",
          },
          {
            title: "Step 3. Validate indexing, robots.txt, and sitemap.xml",
            body: "Use Google Search Console to review what’s indexed and what’s excluded. Make sure robots.txt isn’t blocking important sections and your sitemap.xml is valid and up to date.",
          },
        ],
      },
      {
        title: "Other important checks",
        blocks: [
          {
            body: [
              "Redirect correctness (http → https, www vs non‑www, old URLs → new URLs).",
              "No widespread 4xx/5xx errors.",
              "Canonical tags are present and correct.",
              "Clean, readable URL structure.",
              "Duplicate content and duplicate pages (filters, parameters, print versions).",
            ],
          },
        ],
      },
      {
        title: "Practical tips and common mistakes",
        blocks: [
          {
            title: "Tips",
            body: [
              "Audit regularly: after major changes and at least every 6–12 months.",
              "Track issues in one backlog and prioritize by impact on traffic and leads.",
              "Work as a team (SEO + developer) to ship fixes faster.",
            ],
          },
          {
            title: "Mistakes",
            body: [
              "Skipping technical review during launches, redesigns, or migrations.",
              "Relying on a single tool without cross-checking.",
              "Fixing minor issues while ignoring the big ones (speed, indexing, server errors).",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you run a technical audit?",
            body: "At minimum every 6 months, and after major changes (redesign, migration, CMS/hosting switch). High-traffic sites should review more often and monitor key metrics continuously.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleTechnicalSeoAuditChecklist",
    steps: [
      {
        id: "technical-seo-audit-checklist",
        title: "",
        description: "",
        items: [
          "Check load speed and mobile usability.",
          "Review indexing, robots.txt, and sitemap.xml.",
          "Fix status code issues, redirects, and canonicals.",
          "Find and address duplicate pages and duplicate content.",
          "Set up monitoring and re-run audits regularly.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "בדיקת SEO טכני: מדריך פרקטי למתחילים ולעסקים",
    lead: [
      "בדיקת SEO טכני היא סקירה של מצב האתר מבחינה טכנית - תקלות שעלולות לחסום סריקה, אינדוקס ודירוג.",
      "גם תוכן מצוין לא יעבוד אם האתר איטי, לא מותאם למובייל או מכיל שגיאות קריטיות.",
    ],
    sections: [
      {
        title: "למה בדיקת SEO טכני חשובה",
        blocks: [
          {
            title: "1. בעיות טכניות פוגעות בביצועים",
            body: "עמודים איטיים, שגיאות שרת, כפילויות או בעיות אינדוקס יכולים למנוע מהתוכן שלכם להתקדם. בדיקה עוזרת לאתר ולתעדף בעיות.",
          },
          {
            title: "2. מהירות משפיעה על SEO ועל המרות",
            body: "ביצועים משפיעים על דירוג וגם על לידים. בדיקה תראה מה מאט את האתר: תמונות כבדות, סקריפטים חיצוניים, שרת איטי, חוסר בקאש ועוד.",
          },
          {
            title: "3. אינדוקס וסריקה תקינים",
            body: "לפעמים עמודים חשובים לא נכנסים לאינדקס או שהאינדקס מתמלא בכפילויות. robots.txt, sitemap.xml, canonical וסטטוסי תגובה הם חלק מרכזי בבדיקה.",
          },
          {
            title: "4. מניעת אובדן טראפיק",
            body: "404, שרשראות הפניות, בעיות HTTPS וקישורים שבורים עלולים ‘לאכול’ טראפיק. בדיקות תקופתיות עוזרות לתפוס את זה מוקדם.",
          },
          {
            title: "5. בסיס ל‑SEO לטווח ארוך",
            body: "בלי תיקון בעיות טכניות, עבודה על תוכן וקישורים פחות אפקטיבית. SEO טכני הוא שכבת הבסיס.",
          },
        ],
      },
      {
        title: "למה לצפות אחרי בדיקה",
        blocks: [
          {
            body: [
              "שיפור מהירות באמצעות אופטימיזציה לתמונות, קוד ואירוח.",
              "אינדוקס נקי יותר: יותר עמודים נכונים נכנסים לחיפוש.",
              "שיפור דירוג בעקבות איכות אתר גבוהה יותר ופחות בעיות סריקה.",
              "חוויית משתמש טובה יותר והמרות גבוהות יותר.",
            ],
          },
        ],
      },
      {
        title: "איך לבצע בדיקת SEO טכני (שלבים)",
        blocks: [
          {
            title: "שלב 1. בדיקת מהירות",
            body: "השתמשו ב‑Google PageSpeed Insights וב‑Lighthouse. בדקו עמוד בית, עמודי נחיתה מרכזיים ותבניות נפוצות, ואז בנו רשימת תיקונים לפי עדיפות.",
          },
          {
            title: "שלב 2. התאמה למובייל",
            body: "עם Mobile‑first indexing חשוב שהאתר יעבוד טוב בטלפון: פונטים, כפתורים, גלילה אופקית, טפסים ותפריטים.",
          },
          {
            title: "שלב 3. אינדוקס + robots.txt / sitemap.xml",
            body: "בדקו ב‑Google Search Console מה מאונדקס ומה מוחרג. ודאו ש‑robots.txt לא חוסם אזורים חשובים ושה‑sitemap.xml תקין ומעודכן.",
          },
        ],
      },
      {
        title: "עוד דברים שכדאי לבדוק",
        blocks: [
          {
            body: [
              "הפניות (http → https, www לעומת ללא www, כתובות ישנות → חדשות).",
              "אין כמות גדולה של שגיאות 4xx/5xx.",
              "Canonical תקין.",
              "מבנה URL נקי וקריא.",
              "כפילויות תוכן ועמודים (פילטרים/פרמטרים).",
            ],
          },
        ],
      },
      {
        title: "טיפים וטעויות נפוצות",
        blocks: [
          {
            title: "טיפים",
            body: [
              "לבצע בדיקה אחרי שינויים גדולים ולפחות פעם ב‑6–12 חודשים.",
              "לתעד בעיות במקום אחד ולתעדף לפי השפעה על טראפיק ולידים.",
              "לעבוד יחד: SEO + מפתח כדי לסגור תקלות מהר.",
            ],
          },
          {
            title: "טעויות",
            body: [
              "להתעלם מבדיקה בזמן השקה/עיצוב מחדש/מיגרציה.",
              "להסתמך על כלי אחד בלבד.",
              "לתקן זוטות במקום בעיות קריטיות (מהירות, אינדוקס, שגיאות שרת).",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "כל כמה זמן לבצע בדיקה טכנית?",
            body: "לפחות פעם בחצי שנה, וגם אחרי שינויים משמעותיים (עיצוב מחדש, מיגרציה, שינוי CMS/אחסון). אתרים עם הרבה טראפיק צריכים בדיקות תכופות יותר ומעקב רציף.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleTechnicalSeoAuditChecklist",
    steps: [
      {
        id: "technical-seo-audit-checklist",
        title: "",
        description: "",
        items: [
          "לבדוק מהירות ו‑מובייל.",
          "לבדוק אינדוקס, robots.txt ו‑sitemap.xml.",
          "לתקן סטטוסים, הפניות ו‑canonical.",
          "לזהות כפילויות עמודים ותוכן.",
          "להגדיר ניטור ולבצע בדיקה מחדש באופן קבוע.",
        ],
      },
    ],
  },
};

export default content;
