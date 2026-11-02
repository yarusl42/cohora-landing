export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type HowToStep = {
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
  checklist: {
    storageKey: string;
    title: string;
    steps: readonly HowToStep[];
  };
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Конкурентный анализ локального SEO: зачем он нужен, чего ожидать и как правильно его проводить",
    lead: [
      "Локальное SEO в Беларуси - это системная работа с Google Картами, Яндекс Бизнесом, 2ГИС, отзывами, каталогами, локальными факторами доверия и пользовательским опытом. Конкуренция в Минске, Бресте, Гомеле и других городах растёт, и базового «набора настроек» уже недостаточно. Чтобы расти на белорусском рынке, важно понимать, кто ваши реальные конкуренты в локальной выдаче, почему они выше и за счёт чего получают клиентов.",
    ],
    sections: [
      {
        title: "Зачем бизнесу конкурентный анализ локального SEO",
        blocks: [
          {
            title: "1. Понять причины, почему конкуренты выше",
            body: "На локальную выдачу влияют рейтинг и объём отзывов, активность пользователей, качество карточек, категории, расстояние до пользователя, оптимизация сайта, упоминания в каталогах, локальный контент и структура филиалов. Анализ показывает конкретные факторы, за счёт которых конкуренты выигрывают, и как их повторить или обойти.",
          },
          {
            title: "2. Найти практические точки роста",
            body: "Анализ выявляет незаполненные карточки, слабые места в репутации, недоработанные категории, отсутствие атрибутов, нехватку локального контента на сайтах и ошибки в NAP‑консистентности.",
          },
          {
            title: "3. Измерить реальную конкуренцию в регионе",
            body: "В локальном SEO конкуренты часто отличаются от «общего» поиска. Анализ показывает, кто реально забирает трафик в вашем радиусе и как распределяется спрос по районам.",
          },
          {
            title: "4. Сформировать стратегию на основе данных",
            body: "Результаты превращаются в план: работа с отзывами, улучшение карточек, список приоритетных площадок, план локального контента, правки структуры сайта.",
          },
        ],
      },
      {
        title: "Что входит в полный конкурентный анализ",
        blocks: [
          {
            title: "1. Карта конкурентного окружения",
            body: "Список компаний рядом, которые занимают высокие позиции, совпадают по категории и перекрывают ключевые запросы. Для каждого района обычно свой пул конкурентов.",
          },
          {
            title: "2. Сравнение карточек в Google Maps, Яндекс Картах, 2ГИС",
            body: "Оценка полноты карточек, категорий, атрибутов, фото, CTA‑кнопок и описаний. Хорошо оформленная карточка - половина успеха.",
          },
          {
            title: "3. Рейтинги и отзывы",
            body: "Средняя оценка, количество, свежесть и темп появления отзывов, качество ответов, повторяющиеся темы негатива. Отзывы - ключевой фактор локальной выдачи.",
          },
          {
            title: "4. Видимость по запросам",
            body: "Позиции конкурентов по геозапросам («в центре», «рядом»), локальным категориям, брендам и конкретным услугам - это показывает доминирование и «белые пятна».",
          },
          {
            title: "5. Сайты конкурентов",
            body: "Наличие локального контента, структура страниц филиалов, мета‑теги под локальные кластеры, скорость, перелинковка, микроразметка (LocalBusiness/Organization), мобильное удобство.",
          },
          {
            title: "6. Ссылочное окружение (при необходимости)",
            body: "Каталоги и цитирования, партнёрские и отраслевые упоминания, упорядоченность NAP‑сигналов. В части ниш это усиливает доверие и видимость.",
          },
        ],
      },
      {
        title: "Пошаговый алгоритм конкурентного анализа",
        blocks: [
          {
            title: "Шаг 1. Сбор данных по району и запросам",
            body: "Определите целевые районы и кластеры запросов: услуги + район/город, «рядом», бренды, узкие услуги. Зафиксируйте методику съёма (точка координат, устройство, язык/регион) для сопоставимости.",
          },
          {
            title: "Шаг 2. Карточки и категории",
            body: "Сверьте категории и атрибуты, наполнение фото/описаний, CTA и Q&A. Выделите лучшие практики и пробелы.",
          },
          {
            title: "Шаг 3. Репутация и ответы",
            body: "Снимите метрики рейтинга/объёма/свежести отзывов, проанализируйте тональность и качество ответов. Повторы негатива - подсказки для улучшения сервиса.",
          },
          {
            title: "Шаг 4. Видимость и «белые пятна»",
            body: "Зафиксируйте позиции по кластерам и районам, найдите сегменты, где конкуренты слабее. Сформулируйте гипотезы быстрых побед.",
          },
          {
            title: "Шаг 5. Сайт и локальный контент",
            body: "Проверьте наличие страниц «услуга + район/город», структуру филиалов, перелинковку, скорость и микроразметку.",
          },
          {
            title: "Шаг 6. План действий",
            body: "Итог - приоритизированная дорожная карта: правки карточек, план по отзывам, локальные страницы, каталоги/цитирования и метрики контроля.",
          },
        ],
      },
      {
        title: "Практика: примеры выводов и типичных ошибок",
        blocks: [
          {
            title: "Примеры выводов",
            body: [
              "Лидер держится за счёт отзывов: высокий темп свежих оценок и качественные ответы → нужно догонять регулярностью.",
              "Категории у конкурента подобраны точнее → карточка ранжируется по узким запросам, где у вас нет страниц.",
              "Сайт конкурента имеет 30–50 локальных страниц «услуга + район» → их нужно воспроизвести, улучшив структуру и контент.",
            ],
          },
          {
            title: "Типичные ошибки",
            body: [
              "Сравнивать себя только по одному району или по «средним» замерам.",
              "Сравнение только по брендовым запросам вместо локальных кластеров.",
              "Игнорирование категорий и атрибутов карточек - попытки «вытянуть» только сайтом.",
              "Отсутствие системы сбора отзывов и ответов - репутация буксует.",
              "Нет локальных страниц под районы/услуги - «все яйца в корзине главной».",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Как часто проводить конкурентный анализ?",
            body: "Раз в 1–3 месяца по ключевым кластерам или после значимых изменений: редизайн, запуск филиалов, падения/скачки видимости.",
          },
          {
            title: "Какие метрики успеха отслеживать?",
            body: "Позиции по кластерам и районам, показы карточки/локального пакета, CTR, клики «Позвонить/Маршрут/Сайт», темп и свежесть отзывов, видимость локальных страниц сайта.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleCompetitiveLocalSeoChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "competitive-local-seo-checklist",
          title: "",
          description: "",
          items: [
            "Определите районы вашего города в Беларуси и кластеры запросов.",
            "Снимите видимость конкурентов в картах и выдаче.",
            "Сравните карточки: категории, атрибуты, фото, описания, CTA.",
            "Проанализируйте отзывы: объём, свежесть, ответы.",
            "Проверьте сайты: локальные страницы, структуру, скорость, микроразметку.",
            "Соберите план действий и метрики контроля.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO competitor analysis: why it matters, what to expect, and how to do it",
    lead: [
      "For a U.S. business, local SEO competitor analysis is a structured way to understand who actually wins visibility in Google Search and Google Maps in your service area-and why. Competition shifts by neighborhood, category, and review velocity, so a real analysis looks beyond generic SEO checklists.",
    ],
    sections: [
      {
        title: "Why competitor analysis matters",
        blocks: [
          {
            title: "1. Understand why competitors outrank you",
            body: "Local results are influenced by review signals, listing quality, category fit, proximity, on-site local relevance, citations, and user engagement. Competitor analysis turns those factors into concrete gaps you can close.",
          },
          {
            title: "2. Find actionable growth levers",
            body: "You’ll spot incomplete profiles, weak reputation patterns, missing attributes, content gaps on local pages, and NAP inconsistencies.",
          },
          {
            title: "3. Measure real competition by area",
            body: "Local competitors are often different from “organic competitors.” Analysis shows who takes visibility in specific neighborhoods and where you have room to win.",
          },
          {
            title: "4. Build a data-driven plan",
            body: "Results become a roadmap: review strategy, listing improvements, local content plan, and site structure fixes.",
          },
        ],
      },
      {
        title: "What a full competitor analysis includes",
        blocks: [
          {
            title: "1. Competitive landscape map",
            body: "A list of nearby businesses ranking well for your core queries and categories-often a different set per neighborhood.",
          },
          {
            title:
              "2. Profile comparison (Google Business Profile + Apple Maps context)",
            body: "Compare completeness: categories, attributes, photos, CTAs, service lists, descriptions, and posting activity.",
          },
          {
            title: "3. Reviews & reputation",
            body: "Rating, volume, recency, review velocity, response quality, and repeated negative themes.",
          },
          {
            title: "4. Keyword-level visibility",
            body: "Where competitors rank for “service + city/neighborhood,” “near me,” and branded queries-and where the gaps are.",
          },
          {
            title: "5. Competitor websites",
            body: "Location/service pages, internal linking, speed, schema (LocalBusiness), and mobile UX.",
          },
          {
            title: "6. Citations (when relevant)",
            body: "Industry directories and citations that strengthen trust and help visibility in some niches.",
          },
        ],
      },
      {
        title: "Step-by-step competitor analysis workflow",
        blocks: [
          {
            title: "Step 1. Define neighborhoods and query clusters",
            body: "Pick key areas (neighborhoods/ZIP codes) and clusters like “service + city,” “service + neighborhood,” and “near me.” Keep measurement settings consistent.",
          },
          {
            title: "Step 2. Compare listings",
            body: "Review categories, attributes, photos, descriptions, CTAs, and Q&A. Document what top profiles do consistently.",
          },
          {
            title: "Step 3. Review signals",
            body: "Compare rating, volume, recency, and response quality. Repeated negative themes are operational opportunities.",
          },
          {
            title: "Step 4. Find gaps",
            body: "Identify neighborhoods and clusters where top competitors are weaker and where you can win quickly.",
          },
          {
            title: "Step 5. Website support",
            body: "Audit whether you have strong service/location pages, correct NAP, internal linking, speed, and schema.",
          },
          {
            title: "Step 6. Build the roadmap",
            body: "Prioritize quick listing fixes, a review plan, new local pages, and citation work if needed-and define tracking metrics.",
          },
        ],
      },
      {
        title: "Practical takeaways and common mistakes",
        blocks: [
          {
            title: "Example takeaways",
            body: [
              "The leader wins on review velocity and strong responses-replicate the cadence.",
              "Competitors have more precise categories and services-your profile is too generic.",
              "Competitor sites have dozens of neighborhood/service pages-your content footprint is too small.",
            ],
          },
          {
            title: "Common mistakes",
            body: [
              "Measuring only one location and assuming it represents the whole city.",
              "Looking only at branded queries instead of local clusters.",
              "Ignoring categories/attributes and trying to “win with the website only.”",
              "No system for collecting and replying to reviews.",
              "No dedicated local pages for services and areas.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you run competitor analysis?",
            body: "Every 1–3 months for key clusters, or after major changes like redesigns, new locations, or sharp visibility shifts.",
          },
          {
            title: "Which success metrics matter?",
            body: "Rankings by cluster and area, profile impressions, CTR, calls/directions/website clicks, review velocity, and visibility of local landing pages.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleCompetitiveLocalSeoChecklist",
      title: "Checklist",
      steps: [
        {
          id: "competitive-local-seo-checklist",
          title: "",
          description: "",
          items: [
            "Define neighborhoods and query clusters.",
            "Measure competitor visibility in Search and Maps.",
            "Compare profiles: categories, attributes, photos, descriptions, CTAs.",
            "Analyze reviews: volume, recency, response quality.",
            "Audit competitor sites: local pages, structure, speed, schema.",
            "Build an action plan and tracking metrics.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "ניתוח מתחרים ב‑SEO מקומי: למה זה חשוב, למה לצפות ואיך לבצע נכון",
    lead: [
      "לעסק בישראל, ניתוח מתחרים ב‑SEO מקומי הוא דרך להבין מי באמת זוכה בנראות בגוגל וב‑Google Maps באזור השירות שלכם-ולמה. התחרות משתנה לפי שכונה, קטגוריה וקצב ביקורות, לכן ניתוח אמיתי חייב להיות מבוסס נתונים.",
    ],
    sections: [
      {
        title: "למה ניתוח מתחרים חשוב",
        blocks: [
          {
            title: "1. להבין למה מתחרים מעליכם",
            body: "תוצאות מקומיות מושפעות מביקורות, איכות הכרטיס, התאמת קטגוריה, קרבה, רלוונטיות באתר, אזכורים ואינטראקציות. ניתוח מתרגם את זה לפערים ברורים.",
          },
          {
            title: "2. למצוא נקודות צמיחה",
            body: "מגלים כרטיסים לא מלאים, פערי מוניטין, קטגוריות/אטריבוטים חסרים, חוסר בעמודים מקומיים ו‑NAP לא עקבי.",
          },
          {
            title: "3. למדוד תחרות לפי אזור",
            body: "מתחרים מקומיים לא תמיד זהים למתחרים באורגני הכללי. ניתוח מראה מי חזק בכל שכונה ואיפה אפשר לנצח.",
          },
          {
            title: "4. לבנות תוכנית עבודה",
            body: "התוצאות הופכות למפת דרכים: ביקורות, שדרוג כרטיסים, תוכן מקומי ומבנה אתר.",
          },
        ],
      },
      {
        title: "מה כולל ניתוח מלא",
        blocks: [
          {
            title: "1. מפת תחרות",
            body: "רשימת עסקים באזור שמדורגים גבוה עבור שאילתות וקטגוריות מרכזיות-לעיתים רשימה שונה לכל שכונה.",
          },
          {
            title: "2. השוואת כרטיסים",
            body: "השוואה של קטגוריות, אטריבוטים, תמונות, CTA, שירותים/מוצרים, תיאור ופעילות.",
          },
          {
            title: "3. ביקורות ומוניטין",
            body: "דירוג, כמות, טריות, קצב ביקורות, איכות תגובות ונושאים שליליים שחוזרים.",
          },
          {
            title: "4. נראות לפי שאילתות",
            body: "דירוגים לשאילתות כמו “שירות + עיר/שכונה”, “קרוב אליי” ומותג, וזיהוי פערים.",
          },
          {
            title: "5. אתרי מתחרים",
            body: "עמודי שירות/אזור, קישורים פנימיים, מהירות, סכימה (LocalBusiness), ונוחות מובייל.",
          },
          {
            title: "6. אזכורים (כשצריך)",
            body: "ספריות ענפיות ואזכורים שמחזקים אמון.",
          },
        ],
      },
      {
        title: "שלב‑אחר‑שלב: תהליך עבודה",
        blocks: [
          {
            title: "שלב 1. לבחור שכונות ואשכולות",
            body: "בחרו אזורים מרכזיים ואשכולות שאילתות. שמרו על מתודולוגיה עקבית למדידה.",
          },
          {
            title: "שלב 2. להשוות כרטיסים",
            body: "קטגוריות, אטריבוטים, תמונות, תיאור, CTA ו‑Q&A. תעדו מה מתחרים מובילים עושים באופן עקבי.",
          },
          {
            title: "שלב 3. ביקורות",
            body: "השוו דירוג, כמות, טריות ואיכות תגובות. נושאים שליליים שחוזרים הם הזדמנות לשיפור תפעולי.",
          },
          {
            title: "שלב 4. למצוא פערים",
            body: "זהו אזורים שבהם המתחרים חלשים יותר וניתן לנצח מהר.",
          },
          {
            title: "שלב 5. תמיכת אתר",
            body: "בדקו אם יש עמודי שירות/אזור חזקים, NAP נכון, קישורים פנימיים, מהירות וסכימה.",
          },
          {
            title: "שלב 6. לבנות תוכנית",
            body: "לתעדף תיקונים בכרטיסים, תוכנית ביקורות, עמודים מקומיים חדשים ומדדי מעקב.",
          },
        ],
      },
      {
        title: "דוגמאות וטעויות נפוצות",
        blocks: [
          {
            title: "דוגמאות למסקנות",
            body: [
              "המוביל מנצח בזכות קצב ביקורות ותגובות טובות-צריך לבנות שגרה.",
              "למתחרים קטגוריות מדויקות יותר-הכרטיס שלכם כללי מדי.",
              "לאתרי מתחרים יש עשרות עמודי שכונה/שירות-היקף התוכן שלכם קטן מדי.",
            ],
          },
          {
            title: "טעויות נפוצות",
            body: [
              "למדוד נקודה אחת ולהניח שזה מייצג את כל העיר.",
              "להסתכל רק על שאילתות מותג ולא על אשכולות מקומיים.",
              "להתעלם מקטגוריות/אטריבוטים ולנסות לנצח רק עם האתר.",
              "אין מערכת לאיסוף ותגובה לביקורות.",
              "אין עמודים מקומיים לשירותים ואזורים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "כל כמה זמן לבצע ניתוח?",
            body: "כל 1–3 חודשים לאשכולות מרכזיים או אחרי שינוי גדול.",
          },
          {
            title: "אילו מדדים חשובים?",
            body: "דירוגים לפי אזור ואשכול, חשיפות בכרטיס, CTR, קליקים לשיחה/ניווט/אתר, קצב ביקורות ונראות של עמודים מקומיים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleCompetitiveLocalSeoChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "competitive-local-seo-checklist",
          title: "",
          description: "",
          items: [
            "להגדיר שכונות ואשכולות שאילתות.",
            "למדוד נראות מתחרים בחיפוש ובמפות.",
            "להשוות כרטיסים: קטגוריות, אטריבוטים, תמונות, תיאור, CTA.",
            "לנתח ביקורות: כמות, טריות ואיכות תגובות.",
            "לבדוק אתרי מתחרים: עמודים מקומיים, מבנה, מהירות וסכימה.",
            "לבנות תוכנית פעולה ומדדי מעקב.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
