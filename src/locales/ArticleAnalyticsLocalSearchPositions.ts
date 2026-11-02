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
      "Анализ позиций в локальном поиске: зачем он нужен, чего ожидать и как его проводить",
    lead: [
      "Анализ позиций в локальном поиске для белорусского бизнеса - это один из ключевых инструментов контроля эффективности локального SEO в Минске, Бресте, Гомеле и других городах Беларуси. Он помогает понять, как видит ваш бизнес Google и Яндекс, какие запросы приводят местных клиентов и где именно нужно усиливать продвижение.",
      "Отслеживание локальных позиций - это базовая аналитика для любого локального бизнеса. Она показывает, как вы ранжируетесь по геозапросам в разных районах, какие ключевые слова работают лучше всего и как меняется видимость со временем. Многие собственники либо не отслеживают позиции вообще, либо делают это нерегулярно и неполно.",
    ],
    sections: [
      {
        title: "Зачем нужен анализ позиций в локальном поиске",
        blocks: [
          {
            title: "1. Понимать реальную видимость компании",
            body: "Анализ показывает, по каким запросам вы видимы, в каких районах вас почти не находят, какие страницы тянут трафик, где позиции растут или проседают и насколько сильно вас опережают конкуренты.",
          },
          {
            title: "2. Определять точки роста",
            body: "Диагностируются причины слабой выдачи: нехватка оптимизированных страниц, недостаточные NAP‑сигналы, слабая работа с карточками в картах, низкая репутация в районе. По итогам формируется понятный план действий.",
          },
          {
            title: "3. Понимать поведение пользователей",
            body: "Разные районы дают разную конкуренцию и выдачу. Поисковики учитывают геолокацию, историю поиска и близость бизнеса, поэтому важно измерять видимость в нескольких точках города, а не только «в среднем по больнице».",
          },
          {
            title: "4. Растить обращения",
            body: "Чем выше позиции в локальной выдаче (органика, Google Maps, Яндекс Карты, локальные блоки), тем больше целевых обращений. Рост позиций - прямой путь к росту выручки.",
          },
          {
            title: "5. Быстро реагировать на изменения алгоритмов",
            body: "Обновления Google и Яндекса регулярно меняют выдачу. Регулярный анализ помогает вовремя заметить падения, смену факторов ранжирования и пересобрать приоритеты.",
          },
        ],
      },
      {
        title: "Чего ожидать от анализа: состав полного отчёта",
        blocks: [
          {
            title: "1. Список ключевых локальных запросов",
            body: "Включает фразы «услуга + город», «услуга + район», «рядом со мной», брендовые и коммерческие запросы. Это база для стратегии продвижения и построения структуры сайта.",
          },
          {
            title: "2. Точные позиции по каждому запросу",
            body: "Фиксируются места в мобильной и десктопной выдаче, в Google Maps и Яндекс Картах, в локальном паке (local pack), а также динамика изменений.",
          },
          {
            title: "3. Видимость по районам",
            body: "Картина видимости в разных точках города: доминирующие районы, «слепые зоны», участки с высокой конкуренцией.",
          },
          {
            title: "4. Анализ конкурентов",
            body: "Кто выше в выдаче, по каким запросам вас обгоняют, какие страницы дают результат и какие факторы им помогают. Это основа для корректировки тактики.",
          },
          {
            title: "5. Факторы, влияющие на позиции",
            body: "Репутация (отзывы), структура сайта и наличие локальных страниц, NAP‑сигналы, карточки и их атрибуты, контент, техническое состояние, внутренняя перелинковка и скорость. Все элементы важны и взаимосвязаны.",
          },
          {
            title: "6. Рекомендации по улучшению",
            body: "Конкретный план: что делать на сайте, какие страницы создать, как усилить присутствие в картах, что поправить в карточках и как работать с отзывами.",
          },
        ],
      },
      {
        title: "Пошаговый алгоритм самостоятельного анализа",
        blocks: [
          {
            title: "Шаг 1. Составьте список локальных запросов",
            body: "Разбейте на кластеры: коммерческие (ремонт айфона + город, стоматология + район), информационные (как выбрать услугу + район), брендовые и околокоммерческие. Учитывайте отраслевые особенности формулировок.",
          },
          {
            title: "Шаг 2. Проверьте позиции в разных типах выдачи",
            body: "Снимайте позиции в мобильной/десктопной выдаче, в картах и локальном блоке. Учитывайте персонализацию и геозависимость - используйте чистые браузеры и разные точки города.",
          },
          {
            title: "Шаг 3. Оцените видимость по районам",
            body: "Выберите 3–5 ключевых локаций и замерьте видимость в каждой. Сопоставьте данные с картой конкуренции и вашей зоной обслуживания.",
          },
          {
            title: "Шаг 4. Разберите конкурентов",
            body: "Посмотрите их страницы, структуру, наличие локальных страниц, отзывы и активность в картах. Отметьте работающие паттерны и разрывы, где можно быстро обогнать.",
          },
          {
            title: "Шаг 5. Составьте план улучшений",
            body: "Новые локальные страницы под «услуга + район/город», оптимизация NAP и карточек, работа с отзывами, технические правки и внутренняя перелинковка. Начните с быстрых побед и масштабируйте.",
          },
        ],
      },
      {
        title: "Практика и частые ошибки",
        blocks: [
          {
            body: [
              "Проверять видимость только «с одного адреса», игнорируя другие точки города.",
              "Продвигать лишь главную страницу, без локальных страниц под услуги/районы.",
              "Несогласованные NAP‑данные между сайтом и карточками - падение доверия алгоритмов.",
              "Не работать с отзывами и фото - низкий CTR и слабые конверсии с карт.",
              "Делать разовые «встряски» вместо регулярной итерации и мониторинга.",
            ],
          },
        ],
      },
      {
        title: "FAQ: коротко о важном",
        blocks: [
          {
            title: "Как часто проводить анализ?",
            body: "Базово - раз в месяц по ключевым кластерам запросов и после значимых изменений (новые страницы, редизайн, смена адреса/телефона, обновления алгоритмов).",
          },
          {
            title: "Какие инструменты выбрать?",
            body: "Комбинируйте ручные проверки, сервисы съёма позиций, отчёты карт и аналитику сайта. Главное - единая методика и сопоставимость замеров во времени.",
          },
          {
            title: "Когда ждать результат?",
            body: "Первые сдвиги видимости по локальным кластерам возможны в течение 2–6 недель после внедрения критичных правок, устойчивый эффект - в горизонте 1–3 месяцев при регулярной работе.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local search rankings analysis: why it matters, what to expect, and how to do it",
    lead: [
      "Local ranking analysis for a U.S. business is one of the most practical ways to measure how effective your local SEO really is in cities and neighborhoods like New York, Chicago, Los Angeles, and beyond. It helps you understand how your business appears in Google Search and Google Maps, which queries drive nearby customers, and where you’re losing ground to competitors.",
      "Tracking local rankings is core analytics for any location-based company. It shows how you rank for geo-intent queries across different areas, which keywords perform best, and how visibility changes over time. Many business owners either don’t track rankings at all or do it inconsistently, which makes it hard to improve.",
    ],
    sections: [
      {
        title: "Why you should analyze local rankings",
        blocks: [
          {
            title: "1. See your real visibility",
            body: "You’ll learn which queries actually surface your business, where you’re barely visible, which pages bring traffic, where rankings grow or drop, and how far ahead competitors are.",
          },
          {
            title: "2. Find growth opportunities",
            body: "You can diagnose why you underperform: missing optimized location pages, weak NAP consistency, incomplete business profiles, or a reputation gap in a specific area. The result is a clear action plan.",
          },
          {
            title: "3. Understand user context by area",
            body: "Different neighborhoods produce different results. Search engines consider location, device, and context, so measuring visibility from multiple points in a city is far more accurate than relying on one ZIP code.",
          },
          {
            title: "4. Drive more calls and visits",
            body: "Higher visibility in local SERPs (organic results, the local pack, Google Maps) translates directly into more qualified calls, direction requests, and in-store visits.",
          },
          {
            title: "5. React faster to algorithm changes",
            body: "Google updates shift local rankings regularly. Ongoing tracking helps you spot drops early, identify what changed, and reprioritize fixes.",
          },
        ],
      },
      {
        title: "What to expect in a full local rankings report",
        blocks: [
          {
            title: "1. A list of target local queries",
            body: "Phrases like “service + city,” “service + neighborhood,” “near me,” plus branded and high-intent commercial queries. This becomes the foundation for your site structure and content plan.",
          },
          {
            title: "2. Exact positions by query",
            body: "Track rankings in mobile and desktop results, Google Maps, and the local pack - including how those positions trend over time.",
          },
          {
            title: "3. Neighborhood-level visibility",
            body: "A visibility map across the city: strong areas, blind spots, and zones with high competition.",
          },
          {
            title: "4. Competitor analysis",
            body: "Who outranks you, for which queries, what pages drive their results, and what factors support their position. This guides your tactical priorities.",
          },
          {
            title: "5. Factors that influence local rankings",
            body: "Reviews and ratings, on-site local pages and internal linking, NAP consistency, Google Business Profile completeness, content relevance, and technical performance. These signals work together.",
          },
          {
            title: "6. Clear recommendations",
            body: "A practical checklist: what to fix on your site, which local pages to build, how to improve Google Business Profile, and how to strengthen reviews.",
          },
        ],
      },
      {
        title: "Step-by-step: how to do a local rankings analysis yourself",
        blocks: [
          {
            title: "Step 1. Build your keyword list",
            body: "Group queries into clusters: commercial (e.g., “iPhone repair + city,” “dentist + neighborhood”), informational (“how to choose + service”), branded, and near-commercial queries.",
          },
          {
            title: "Step 2. Measure across result types",
            body: "Track rankings in organic results, Google Maps, and the local pack. Account for personalization by using clean browsers and consistent measurement settings.",
          },
          {
            title: "Step 3. Compare visibility by area",
            body: "Pick 3–5 key locations (or ZIP codes) and measure visibility from each. Compare that to your service area and where competitors dominate.",
          },
          {
            title: "Step 4. Review competitors",
            body: "Check their websites (location pages, structure), their Google Business Profiles, reviews, photos, and posting activity. Identify repeatable patterns and gaps you can exploit.",
          },
          {
            title: "Step 5. Create an improvement roadmap",
            body: "Build missing local pages, fix NAP consistency, upgrade your business profile content, work on reviews, and ship technical improvements. Start with quick wins and scale.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Measuring visibility from just one address and assuming it represents the whole city.",
              "Trying to rank only the homepage instead of building dedicated local landing pages.",
              "NAP inconsistencies between your website and business profiles (hurts trust signals).",
              "Ignoring reviews and photos (low CTR and weaker conversions from Maps).",
              "Doing one-time “big changes” instead of consistent iteration and monitoring.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you analyze rankings?",
            body: "Typically, monthly for your core keyword clusters and after major changes (new pages, redesign, address/phone updates, algorithm shifts).",
          },
          {
            title: "What tools should you use?",
            body: "Combine manual checks, rank tracking tools, Google Business Profile insights, and website analytics. The most important part is a consistent methodology so results are comparable over time.",
          },
          {
            title: "When should you expect results?",
            body: "Initial movement is often visible within 2–6 weeks after critical fixes. Stable improvement usually takes 1–3 months with consistent work.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "ניתוח דירוגים בחיפוש מקומי: למה זה חשוב, למה לצפות ואיך לבצע את זה נכון",
    lead: [
      "ניתוח דירוגים בחיפוש מקומי לעסק בישראל הוא דרך פרקטית להבין עד כמה ה‑SEO המקומי באמת עובד באזורים כמו תל אביב, חיפה, ירושלים והסביבה. הוא עוזר לראות איך העסק מופיע בגוגל ובמפות, אילו שאילתות מביאות לקוחות קרובים, ואיפה מתפספסים מול מתחרים.",
      "מעקב אחר דירוגים מקומיים הוא חלק מהותי באנליטיקה של עסק מקומי. הוא מראה איך אתם מדורגים לפי שאילתות עם כוונת‑מיקום באזורים שונים, אילו מילות מפתח עובדות טוב יותר, ואיך הנראות משתנה לאורך זמן.",
    ],
    sections: [
      {
        title: "למה לבצע ניתוח דירוגים מקומיים",
        blocks: [
          {
            title: "1. להבין את הנראות האמיתית",
            body: "הניתוח מראה אילו שאילתות מביאות נראות, איפה כמעט לא רואים אתכם, אילו עמודים מביאים תנועה, היכן הדירוגים עולים או יורדים ועד כמה מתחרים מקדימים אתכם.",
          },
          {
            title: "2. לזהות נקודות צמיחה",
            body: "אפשר לאבחן למה אתם חלשים: חוסר בעמודי שירות‑אזור, NAP לא עקבי, פרופילים עסקיים לא מלאים, או פער במוניטין באזור מסוים. בסוף מתקבל מסלול פעולה ברור.",
          },
          {
            title: "3. להבין הקשר לפי אזור",
            body: "שכונות שונות נותנות תחרות ותוצאות שונות. מנועי חיפוש מתייחסים למיקום, מכשיר והקשר, לכן כדאי למדוד נראות מכמה נקודות בעיר ולא רק ממיקום אחד.",
          },
          {
            title: "4. להגדיל פניות",
            body: "ככל שהנראות גבוהה יותר בתוצאות מקומיות (אורגני, local pack, Google Maps), כך עולים קליקים, שיחות, בקשות ניווט וביקורים.",
          },
          {
            title: "5. להגיב מהר לעדכונים",
            body: "עדכוני אלגוריתם של גוגל משפיעים על הדירוג המקומי. מעקב קבוע עוזר לזהות ירידות בזמן ולהחזיר סדר עדיפויות.",
          },
        ],
      },
      {
        title: "מה כולל דוח מלא",
        blocks: [
          {
            title: "1. רשימת שאילתות מקומיות מרכזיות",
            body: "ביטויים כמו “שירות + עיר”, “שירות + שכונה”, “קרוב אליי”, וגם שאילתות מותגיות ומסחריות. זו הבסיס למבנה האתר ולתוכן.",
          },
          {
            title: "2. דירוגים מדויקים",
            body: "מדידה במובייל ובדסקטופ, בגוגל וב‑Google Maps (כולל local pack), יחד עם דינמיקה לאורך זמן.",
          },
          {
            title: "3. נראות לפי אזורים",
            body: "מפת נראות לפי נקודות בעיר: אזורים חזקים, אזורים חלשים ואזורים עם תחרות גבוהה.",
          },
          {
            title: "4. ניתוח מתחרים",
            body: "מי מעליכם, באילו שאילתות, אילו עמודים מביאים להם תוצאה ואילו גורמים מחזקים אותם.",
          },
          {
            title: "5. גורמים שמשפיעים על דירוג",
            body: "ביקורות ודירוגים, עמודי שירות‑אזור באתר, קישוריות פנימית, עקביות NAP, איכות פרופיל העסק בגוגל, רלוונטיות התוכן וביצועים טכניים.",
          },
          {
            title: "6. המלצות מעשיות",
            body: "צ’ק‑ליסט ברור: מה לתקן באתר, אילו עמודים לבנות, איך לחזק את פרופיל העסק בגוגל, ואיך לעבוד נכון עם ביקורות.",
          },
        ],
      },
      {
        title: "שלב‑אחר‑שלב: איך לבצע ניתוח לבד",
        blocks: [
          {
            title: "שלב 1. לבנות רשימת מילות מפתח",
            body: "חלקו לאשכולות: מסחרי (למשל “תיקון אייפון + עיר”, “רופא שיניים + שכונה”), אינפורמטיבי, מותגי וקרוב‑מסחרי.",
          },
          {
            title: "שלב 2. למדוד בסוגי תוצאות שונים",
            body: "מדדו באורגני, במפות וב‑local pack. כדי לצמצם פרסונליזציה השתמשו בדפדפנים נקיים ושמרו על מתודולוגיה עקבית.",
          },
          {
            title: "שלב 3. להשוות נראות בין אזורים",
            body: "בחרו 3–5 נקודות מרכזיות בעיר ומדדו מכל אחת. השוו לאזור השירות שלכם ולמקומות שבהם מתחרים חזקים.",
          },
          {
            title: "שלב 4. לנתח מתחרים",
            body: "בדקו את האתר שלהם (עמודי אזור, מבנה), את פרופיל העסק בגוגל, ביקורות, תמונות ופעילות. מצאו דפוסים שעובדים ופערים שתוכלו לנצל.",
          },
          {
            title: "שלב 5. לבנות תוכנית שיפור",
            body: "בנו עמודים מקומיים חסרים, תקנו עקביות NAP, שדרגו תוכן בפרופילים, עבדו על ביקורות ושחררו שיפורים טכניים. התחילו בניצחונות מהירים.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: [
              "למדוד נראות ממקום אחד ולהניח שזה מייצג את כל העיר.",
              "לקדם רק את דף הבית במקום לבנות דפי נחיתה מקומיים.",
              "NAP לא עקבי בין האתר לפרופילים עסקיים (פוגע באמון).",
              "להתעלם מביקורות ותמונות (CTR נמוך והמרות חלשות מהמפות).",
              "לבצע שינוי גדול חד‑פעמי במקום איטרציה ומעקב קבועים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "כל כמה זמן לבצע ניתוח?",
            body: "בדרך כלל פעם בחודש לאשכולות המרכזיים, וגם אחרי שינויים משמעותיים (עמודים חדשים, עיצוב מחדש, עדכון כתובת/טלפון, שינויי אלגוריתם).",
          },
          {
            title: "באילו כלים להשתמש?",
            body: "שלבו בדיקות ידניות, כלי מעקב דירוגים, נתוני Google Business Profile, וגם אנליטיקה של האתר. הכי חשוב הוא מתודולוגיה עקבית להשוואה לאורך זמן.",
          },
          {
            title: "מתי רואים תוצאות?",
            body: "תנועה ראשונית בדירוג יכולה להופיע תוך 2–6 שבועות אחרי תיקונים קריטיים. שיפור יציב בדרך כלל מגיע בטווח של 1–3 חודשים עם עבודה עקבית.",
          },
        ],
      },
    ],
  },
};

export default content;
