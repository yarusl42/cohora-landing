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
      "Бесплатный аудит карточек бизнеса: зачем он нужен, чего ожидать и как проходит профессиональная проверка",
    lead: [
      "Бесплатный аудит карточек белорусского бизнеса - это комплексная оценка присутствия в Google Картах, Яндекс Бизнесе, 2ГИС и других каталогах в Минске, Бресте, Гомеле и по Беларуси. Аудит помогает выявить проблемы и точки роста для локального SEO без дополнительных затрат.",
      "Аудит локальных листингов - это проверка того, как бизнес представлен в картах, справочниках и каталогах. Часто компания уже есть в десятках источников, но с неправильными данными, старыми фотографиями или без возможности управлять информацией.",
      "Карточка бизнеса в Google и Яндекс Картах - один из главных источников локальных клиентов. Пользователь принимает решение о звонке, визите или заказе прямо внутри карточки. Поэтому важны корректные данные, заполнение, регулярные обновления и соблюдение правил платформ.",
    ],
    sections: [
      {
        title: "Зачем нужен бесплатный аудит карточек",
        blocks: [
          {
            title: "1. Повышение видимости",
            body: "Площадки показывают выше те карточки, которые корректно заполнены, регулярно обновляются и выглядят лучше конкурентов. Аудит показывает, каких сигналов не хватает именно вашему профилю.",
          },
          {
            title: "2. Рост доверия клиентов",
            body: "Небрежно оформленная карточка вызывает сомнения. Аудит выявляет, что выглядит устаревшим или непрофессиональным, и даёт список правок для повышения доверия и конверсии.",
          },
          {
            title: "3. Выявление критичных ошибок",
            body: "Неверная метка, дубли, блокировки, нарушения правил, неправильные часы или телефон - всё это снижает показы. Аудит помогает найти и исправить такие «рубильники».",
          },
          {
            title: "4. Оптимизация под локальные алгоритмы",
            body: "Кроме отзывов и рейтинга важны активность, полнота заполнения, структура данных и релевантность формулировок. Аудит подсвечивает, чего не хватает именно в вашей нише.",
          },
          {
            title: "5. Сравнение с конкурентами",
            body: "Кто в ТОПе, какие у них категории, фото, отзывы, товары, посты и ключевые слова - и что они делают, а вы нет. Это база для понятного плана «как обогнать».",
          },
        ],
      },
      {
        title: "Что включает бесплатный аудит",
        blocks: [
          {
            title: "1. Полный разбор карточки",
            body: "Проверяем: название, адрес и метку, категории, описание, фото, товары/услуги, посты, Q&A, ошибки, активность и динамику отзывов.",
          },
          {
            title: "2. Анализ видимости в локальном поиске",
            body: "Строим карту видимости: где вас видно хорошо, где плохо и где не видно совсем.",
          },
          {
            title: "3. Проверка NAP‑данных в других источниках",
            body: "Согласованность данных в Google/Яндекс, 2ГИС, соцсетях, каталогах и агрегаторах. Расхождения снижают доверие и видимость.",
          },
          {
            title: "4. Анализ отзывов и репутации",
            body: "Оцениваем количество, свежесть, рейтинг, темп, качество ответов и долю отзывов с фото. Делаем ориентир: сколько отзывов нужно для ТОПа.",
          },
          {
            title: "5. Анализ конкурентов",
            body: "Кто обгоняет и почему, какие сильные элементы у конкурентов и что брать за основу.",
          },
          {
            title: "6. План улучшений",
            body: "Вы получаете список проблем, дорожную карту быстрых правок и действий на 1–3 месяца с приоритетами.",
          },
        ],
      },
      {
        title: "Пошагово: как проходит бесплатный аудит",
        blocks: [
          {
            title: "Шаг 1. Короткий бриф",
            body: "Вы присылаете название компании, адрес, телефон, ссылку на карточку и пару слов о нише/районе работы.",
          },
          {
            title: "Шаг 2. Техническая проверка",
            body: "Проверяем метку, категории, описание, фото, товары/услуги, атрибуты, режим работы, ссылки, Q&A, посты и активность.",
          },
          {
            title: "Шаг 3. Репутация и конкуренты",
            body: "Смотрим рейтинг/отзывы и сравниваем с конкурентами: кто в ТОПе и почему.",
          },
          {
            title: "Шаг 4. Карта видимости",
            body: "Оцениваем видимость в разных точках района/города по связкам «услуга + район/город».",
          },
          {
            title: "Шаг 5. Отчёт и рекомендации",
            body: "Вы получаете краткий отчёт с приоритизированными задачами: быстрые победы, важные правки и план на 1–3 месяца.",
          },
        ],
      },
      {
        title: "Практические примеры и частые ошибки",
        blocks: [
          {
            title: "Пример 1. Кривые категории",
            body: "Неверная основная категория может почти обнулить видимость. Правильный подбор основной и 2–4 дополнительных часто резко поднимает показы.",
          },
          {
            title: "Пример 2. Метка «мимо входа»",
            body: "Булавка стоит у другого подъезда - клиенты не могут найти. Перенос метки и фото входа возвращают поток визитов.",
          },
          {
            title: "Частые ошибки",
            body: [
              "Разные телефоны/адреса на сайте и в карточках (сломанный NAP).",
              "Стоковые фото вместо реальных - низкое доверие и конверсия.",
              "Нет товаров/услуг и постов - карточка выглядит «пустой».",
              "Нет ответов на отзывы - снижается доверие.",
              "Дубли и заброшенные карточки - размазывают рейтинг и сигналы.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Это точно бесплатно?",
            body: "Да. Мы проводим первичную экспертизу, чтобы вы увидели ценность и могли принять решение о дальнейшем сотрудничестве.",
          },
          {
            title: "Что потребуется от меня?",
            body: "Ссылка на карточку, название, адрес, телефон и краткий контекст по нише/району. Доступ не обязателен для первичного аудита.",
          },
          {
            title: "Когда виден эффект?",
            body: "Быстрые улучшения - 2–4 недели после внедрения критичных правок; устойчивый рост - 1–3 месяца при регулярной работе.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleFreeListingAuditChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "free-listing-audit-checklist",
          title: "",
          description: "",
          items: [
            "Проверьте категорию, NAP, метку, часы.",
            "Добавьте реальные фото и ключевые услуги/товары.",
            "Запустите сбор честных отзывов и отвечайте на них.",
            "Публикуйте посты (акции, новости, полезные советы).",
            "Сверьте данные с 2ГИС/каталогами/соцсетями.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Free business profile audit: what it includes, what to expect, and why it matters",
    lead: [
      "A free business profile audit for a U.S. company is a practical review of how your listing shows up across Google Business Profile / Google Maps, Apple Maps, and major directories and review platforms. The goal is to identify errors, missed fields, and ranking blockers that limit local visibility.",
      "Local listings audits check whether your business information is accurate and competitive across Maps and directories. Many companies are already listed in multiple places-but with wrong hours, old photos, or inconsistent phone/address data.",
      "For most local businesses, the Google Business Profile is the primary driver of calls, direction requests, and website clicks. People decide inside the profile. That’s why completeness, freshness, and compliance matter.",
    ],
    sections: [
      {
        title: "Why you should run a free profile audit",
        blocks: [
          {
            title: "1. Better visibility",
            body: "Platforms tend to rank profiles that are complete, accurate, and active. An audit shows what signals you’re missing compared to top competitors.",
          },
          {
            title: "2. Higher trust and conversions",
            body: "A weak profile creates doubt. An audit highlights what looks outdated or unprofessional and provides a clear fix list.",
          },
          {
            title: "3. Catch critical issues",
            body: "Wrong pins, duplicates, suspensions, policy violations, incorrect hours or phones-all of these can tank visibility. The audit finds them early.",
          },
          {
            title: "4. Align with local ranking factors",
            body: "Beyond reviews, ranking depends on categories, attributes, content quality, photos, Q&A, and activity. An audit shows what matters in your niche.",
          },
          {
            title: "5. Competitor benchmark",
            body: "See what top profiles do better: categories, photos, services/products, posts, and review velocity. This becomes your roadmap.",
          },
        ],
      },
      {
        title: "What’s included in the audit",
        blocks: [
          {
            title: "1. Full profile breakdown",
            body: "We review name/address/pin, categories, description, photos, services/products, posts, Q&A, attributes, errors, and review trends.",
          },
          {
            title: "2. Local visibility snapshot",
            body: "We map where you’re visible and where you’re not in your service area.",
          },
          {
            title: "3. NAP consistency across sources",
            body: "We check whether name/address/phone match across your website, Google, Apple Maps, Yelp, and industry directories.",
          },
          {
            title: "4. Reviews and reputation",
            body: "We evaluate volume, recency, rating, response quality, and a target benchmark for your niche.",
          },
          {
            title: "5. Competitor review",
            body: "We identify who outranks you and why, and what elements you can replicate.",
          },
          {
            title: "6. Improvement plan",
            body: "You get a prioritized roadmap: quick wins plus 1–3 month actions with expected impact.",
          },
        ],
      },
      {
        title: "How the free audit works (step by step)",
        blocks: [
          {
            title: "Step 1. Quick intake",
            body: "You send your business name, address, phone, a link to your profile, and brief context about your niche and service area.",
          },
          {
            title: "Step 2. Technical review",
            body: "We check categories, description, photos, services/products, attributes, hours, links, Q&A, posts, and activity.",
          },
          {
            title: "Step 3. Reputation & competitors",
            body: "We compare your reviews/ratings and profile quality against competitors.",
          },
          {
            title: "Step 4. Visibility snapshot",
            body: "We measure visibility across the area for core “service + city/neighborhood” queries.",
          },
          {
            title: "Step 5. Recommendations",
            body: "You receive a concise report with prioritized fixes and a 1–3 month action plan.",
          },
        ],
      },
      {
        title: "Examples and common mistakes",
        blocks: [
          {
            title: "Example 1. Wrong categories",
            body: "A mismatched primary category can eliminate visibility. A correct primary category plus a few strong secondary categories can noticeably improve discovery.",
          },
          {
            title: "Example 2. Pin not at the entrance",
            body: "If the pin is off, customers get lost and leave. Fixing the pin and adding entrance photos can restore visits.",
          },
          {
            title: "Common mistakes",
            body: [
              "NAP mismatch between your site and listings.",
              "Stock photos instead of real photos.",
              "No services/products and no posts-profile looks empty.",
              "No replies to reviews.",
              "Duplicates or abandoned profiles splitting signals.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Is it really free?",
            body: "Yes. It’s an initial review so you can see the value and decide on next steps.",
          },
          {
            title: "What do you need from me?",
            body: "A link to your profile, business name, address, phone, and a short context. Admin access is not required for the initial audit.",
          },
          {
            title: "When will results show?",
            body: "Quick wins often show in 2–4 weeks after critical fixes. Stable growth usually takes 1–3 months of consistent work.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleFreeListingAuditChecklist",
      title: "Checklist",
      steps: [
        {
          id: "free-listing-audit-checklist",
          title: "",
          description: "",
          items: [
            "Verify category, NAP, pin, and hours.",
            "Add real photos and key services/products.",
            "Start collecting honest reviews and reply to them.",
            "Publish posts (offers, updates, helpful tips).",
            "Cross-check data across Apple Maps, Yelp, directories, and social profiles.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "בדיקת כרטיס עסק (חינם): למה זה חשוב, למה לצפות ואיך הבדיקה מתבצעת",
    lead: [
      "בדיקת כרטיס עסק בחינם לעסק בישראל היא סקירה פרקטית של הנראות והדיוק של הכרטיס שלכם ב‑Google Business Profile / Google Maps, Apple Maps (Apple Business Connect), Waze, ובספריות/אתרי ביקורות מרכזיים. המטרה היא לאתר טעויות וחסמים שמגבילים נראות מקומית.",
      "בדיקת listings מקומיים בודקת איך העסק מופיע במפות ובספריות. לעיתים העסק כבר מופיע בעשרות מקומות-אבל עם שעות לא נכונות, תמונות ישנות או חוסר עקביות בכתובת/טלפון.",
      "בדרך כלל כרטיס העסק בגוגל הוא מקור משמעותי לשיחות, ניווט וקליקים לאתר. לכן חשוב שהכרטיס יהיה מלא, עדכני ועומד בכללים.",
    ],
    sections: [
      {
        title: "למה צריך בדיקה בחינם",
        blocks: [
          {
            title: "1. יותר נראות",
            body: "כרטיסים מלאים ומדויקים נוטים להופיע יותר. הבדיקה מראה מה חסר לכם ביחס למתחרים.",
          },
          {
            title: "2. יותר אמון והמרות",
            body: "כרטיס חלש יוצר ספק. הבדיקה נותנת רשימת תיקונים שמעלה אמון ופניות.",
          },
          {
            title: "3. איתור בעיות קריטיות",
            body: "סיכה לא נכונה, כפילויות, חסימות, שעות/טלפון שגויים-כל אלה פוגעים בנראות. הבדיקה מאתרת זאת.",
          },
          {
            title: "4. התאמה לפקטורים מקומיים",
            body: "מעבר לביקורות, יש חשיבות לקטגוריות, אטריבוטים, תוכן, תמונות, Q&A ופעילות.",
          },
          {
            title: "5. השוואה למתחרים",
            body: "רואים מה מתחרים מובילים עושים טוב יותר: קטגוריות, תמונות, שירותים/מוצרים, פוסטים וקצב ביקורות.",
          },
        ],
      },
      {
        title: "מה כוללת הבדיקה",
        blocks: [
          {
            title: "1. סקירה מלאה של הכרטיס",
            body: "שם/כתובת/סיכה, קטגוריות, תיאור, תמונות, שירותים/מוצרים, פוסטים, Q&A, אטריבוטים, שגיאות ומגמות ביקורות.",
          },
          {
            title: "2. תמונת נראות",
            body: "מדידה בסיסית של נראות באזור השירות.",
          },
          {
            title: "3. עקביות NAP",
            body: "בדיקת אחידות של שם/כתובת/טלפון בין האתר, Google, Apple Maps, Waze וספריות רלוונטיות.",
          },
          {
            title: "4. ביקורות ומוניטין",
            body: "כמות, טריות, דירוג, איכות תגובות ויעד ריאלי לנישה.",
          },
          {
            title: "5. תחרות",
            body: "מי מעליכם ולמה, ומה כדאי לשכפל.",
          },
          {
            title: "6. תוכנית שיפור",
            body: "מפת דרכים לפי עדיפות: ניצחונות מהירים ופעולות ל‑1–3 חודשים.",
          },
        ],
      },
      {
        title: "איך הבדיקה מתבצעת",
        blocks: [
          {
            title: "שלב 1. בריף קצר",
            body: "שולחים שם, כתובת, טלפון, קישור לכרטיס וקצת הקשר על הנישה ואזור השירות.",
          },
          {
            title: "שלב 2. בדיקה טכנית",
            body: "קטגוריות, תיאור, תמונות, שירותים/מוצרים, אטריבוטים, שעות, קישורים, Q&A, פוסטים ופעילות.",
          },
          {
            title: "שלב 3. מוניטין ומתחרים",
            body: "השוואת ביקורות ואיכות הכרטיס מול מתחרים.",
          },
          {
            title: "שלב 4. נראות",
            body: "מדידה לפי שאילתות “שירות + עיר/שכונה”.",
          },
          {
            title: "שלב 5. המלצות",
            body: "דו" + "ח קצר עם תיקונים לפי עדיפות ותוכנית עבודה.",
          },
        ],
      },
      {
        title: "דוגמאות וטעויות נפוצות",
        blocks: [
          {
            title: "דוגמה 1. קטגוריות לא נכונות",
            body: "קטגוריה ראשית לא מתאימה יכולה למחוק נראות. קטגוריה נכונה ועוד כמה משניות יכולות לשפר גילוי.",
          },
          {
            title: "דוגמה 2. סיכה לא בכניסה",
            body: "אם הסיכה לא מדויקת, הלקוחות לא מוצאים. תיקון סיכה ותמונות כניסה משפרים ביקורים.",
          },
          {
            title: "טעויות נפוצות",
            body: [
              "NAP לא עקבי בין האתר לכרטיסים.",
              "תמונות סטוק.",
              "אין שירותים/מוצרים ואין פוסטים.",
              "אין תגובות לביקורות.",
              "כפילויות או כרטיסים נטושים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "זה באמת בחינם?",
            body: "כן. זו בדיקה ראשונית כדי שתראו את הערך ותוכלו להחליט על המשך.",
          },
          {
            title: "מה צריך ממני?",
            body: "קישור לכרטיס, שם, כתובת, טלפון והקשר קצר. אין צורך בגישה לניהול לבדיקה הראשונית.",
          },
          {
            title: "מתי רואים תוצאות?",
            body: "ניצחונות מהירים-לעיתים תוך 2–4 שבועות לאחר תיקונים קריטיים. צמיחה יציבה לרוב 1–3 חודשים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleFreeListingAuditChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "free-listing-audit-checklist",
          title: "",
          description: "",
          items: [
            "לבדוק קטגוריה, NAP, סיכה ושעות.",
            "להוסיף תמונות אמיתיות ושירותים/מוצרים מרכזיים.",
            "להתחיל לאסוף ביקורות אמינות ולהגיב.",
            "לפרסם פוסטים (מבצעים/עדכונים/טיפים).",
            "לבדוק אחידות בין Apple Maps, Waze, ספריות ורשתות חברתיות.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
