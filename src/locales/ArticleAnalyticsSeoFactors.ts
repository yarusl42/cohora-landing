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
      "Работа с поведенческими факторами: почему без них сайт не растёт в SEO",
    lead: [
      "Поведенческие факторы SEO для белорусского бизнеса - это метрики, которые отражают, как пользователи из Минска, Бреста, Гомеля и других городов Беларуси взаимодействуют с вашим сайтом и как это влияет на ранжирование в Google и Яндексе. Понимание и оптимизация этих факторов помогают улучшить позиции и получать больше органического трафика от местных клиентов.",
    ],
    sections: [
      {
        title: "1. Что такое поведенческие факторы простыми словами",
        blocks: [
          {
            body: "Поведенческие факторы показывают, насколько удобно и полезно пользователю на сайте. По сути, это сигналы качества: доволен ли человек страницей и нашёл ли то, что искал.",
          },
          {
            body: [
              "время на сайте - сколько секунд или минут человек остаётся на странице;",
              "глубина просмотра - сколько страниц он открывает за визит;",
              "показатель отказов - доля визитов, когда пользователь ушёл, не сделав ничего;",
              "возвраты к поиску - сколько людей быстро возвращаются в выдачу;",
              "CTR сниппета - как часто кликают по вашему результату в поиске;",
              "взаимодействия - клики по кнопкам, формам, фото и меню.",
            ],
          },
          {
            body: "Вместе эти метрики показывают, насколько сайт соответствует ожиданиям аудитории.",
          },
        ],
      },
      {
        title: "2. Зачем работать с поведенческими факторами",
        blocks: [
          {
            title: "1. Прямое влияние на позиции",
            body: "Поисковики используют ПФ как сигнал качества. Если пользователи дольше остаются на вашем сайте, активнее им пользуются и реже возвращаются к выдаче, это считается плюсом и помогает расти.",
          },
          {
            title: "2. Недорогой рост трафика",
            body: "Улучшение ПФ часто даёт прирост позиций и трафика без увеличения затрат на ссылки и рекламу. Вы не «покупаете» трафик, а эффективнее используете тот, который уже есть.",
          },
          {
            title: "3. Увеличение конверсий",
            body: "Удобный, понятный сайт не только лучше ранжируется, но и лучше продаёт: люди чаще оставляют заявки, звонят и совершают покупки, если им комфортно взаимодействовать.",
          },
          {
            title: "4. Снижение потерь трафика",
            body: "Если сайт неудобен, вы просто «выливаете» трафик: люди уходят за 3–5 секунд, и ни SEO, ни реклама не окупаются. Работа с ПФ помогает сохранить и монетизировать уже привлечённых посетителей.",
          },
          {
            title: "5. Повышение доверия и экспертности",
            body: "Логичная структура, быстрый отклик и удобный интерфейс создают ощущение профессионализма. Это влияет и на восприятие бренда, и на SEO‑авторитет.",
          },
        ],
      },
      {
        title: "3. Чего ожидать от улучшения поведенческих факторов",
        blocks: [
          {
            body: "При системной работе над ПФ можно ожидать:",
          },
          {
            body: [
              "рост времени на сайте на 30–200% (в зависимости от ниши и исходного состояния);",
              "снижение показателя отказов на 10–50% за счёт устранения «узких мест»;",
              "увеличение глубины просмотра в 2–3 раза при грамотной перелинковке;",
              "рост позиций по средне- и низкочастотным запросам;",
              "увеличение конверсий на 10–40% благодаря удобству и ясности;",
              "лучшее восприятие бренда у пользователей.",
            ],
          },
        ],
      },
      {
        title:
          "4. Как улучшать поведенческие факторы: основные направления работ",
        blocks: [
          {
            title: "4.1. Структура и навигация",
            body: "Анализируется текущая структура сайта, выявляются «тупики» и лишние шаги. Улучшается меню, хлебные крошки, добавляются понятные кнопки переходов и внутренняя перелинковка.",
          },
          {
            title: "4.2. Качество и подача контента",
            body: "Текст делают структурированным: подзаголовки, списки, таблицы, иллюстрации, FAQ. Убирают «водянистые» фразы, оставляя то, что реально помогает решить задачу.",
          },
          {
            title: "4.3. Скорость загрузки и техническое состояние",
            body: "Оптимизируются изображения и скрипты, убираются тяжёлые элементы, настраиваются кэширование и сжатие. Медленные страницы - частая причина отказов, особенно на мобильных.",
          },
          {
            title: "4.4. Юзабилити и мобильная версия",
            body: "Проверяется удобство форм, читаемость текстов, размеры кнопок и адаптивность. Для локального бизнеса, где большая часть трафика идёт с телефона, это критично.",
          },
          {
            title: "4.5. Улучшение сниппетов и заголовков",
            body: "Переписываются заголовки и мета‑описания так, чтобы они были релевантны запросам и стимулировали клик. Чем выше CTR, тем лучше поведенческие сигналы из выдачи.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Работа с поведенческими факторами - это фундамент устойчивого роста в SEO. Улучшая структуру, контент, скорость и удобство, вы одновременно повышаете позиции, снижаете потери трафика и увеличиваете количество заявок и звонков.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Behavioral signals: why your site won’t grow in SEO without them",
    lead: [
      "For a U.S. business, behavioral signals are the engagement metrics that reflect how real users interact with your website-and how well your pages satisfy search intent. Improving these signals can increase rankings in Google, grow organic traffic, and improve conversions from local customers.",
    ],
    sections: [
      {
        title: "1. What behavioral signals are (plain English)",
        blocks: [
          {
            body: "Behavioral signals are indicators of page usefulness and usability. They answer a simple question: did the user get what they came for?",
          },
          {
            body: [
              "time on site / time on page;",
              "pages per session;",
              "bounce rate (with context);",
              "pogo-sticking (returning to the results quickly);",
              "search snippet CTR;",
              "meaningful interactions: clicks, form submits, calls, chat taps.",
            ],
          },
          {
            body: "Together, these signals describe whether the experience matches what people expect.",
          },
        ],
      },
      {
        title: "2. Why you should improve behavioral signals",
        blocks: [
          {
            title: "1. Rankings impact",
            body: "Google uses engagement-related signals as part of quality assessment. Pages that satisfy intent tend to keep users longer, earn more clicks, and improve performance over time.",
          },
          {
            title: "2. Lower-cost traffic growth",
            body: "Improving engagement often lifts rankings without increasing link spend or ad budgets. You make the traffic you already have more effective.",
          },
          {
            title: "3. Higher conversions",
            body: "A clearer, faster, more trustworthy experience drives more calls, form submissions, and purchases.",
          },
          {
            title: "4. Less wasted spend",
            body: "If the site is confusing or slow, you burn both SEO and paid traffic. Fixing UX keeps users and improves ROI.",
          },
          {
            title: "5. More trust",
            body: "Strong structure, clear messaging, and fast performance make the brand feel more professional, improving both conversion and perceived authority.",
          },
        ],
      },
      {
        title: "3. What you can expect after improvements",
        blocks: [
          {
            body: "With consistent work, you can often see:",
          },
          {
            body: [
              "30–200% increase in time on site (depending on baseline);",
              "10–50% bounce rate reduction by removing friction;",
              "2–3x growth in pages/session via better internal linking;",
              "ranking gains for long-tail and mid-tail queries;",
              "10–40% conversion lift from clarity and UX improvements.",
            ],
          },
        ],
      },
      {
        title: "4. How to improve behavioral signals",
        blocks: [
          {
            title: "4.1. Information architecture",
            body: "Audit your structure, remove dead ends, improve navigation, add clear next steps, and strengthen internal linking.",
          },
          {
            title: "4.2. Content quality and formatting",
            body: "Make content scannable: headings, bullets, tables, visuals, and FAQs. Remove fluff and answer the query quickly.",
          },
          {
            title: "4.3. Speed and technical health",
            body: "Optimize images/scripts, remove heavy elements, and configure caching and compression. Speed is a major mobile conversion driver.",
          },
          {
            title: "4.4. Mobile usability",
            body: "Make buttons tappable, forms short, text readable, and layouts stable. A lot of local intent happens on phones.",
          },
          {
            title: "4.5. Better titles/snippets",
            body: "Rewrite titles and meta descriptions to match intent and earn clicks. Higher CTR often improves downstream engagement too.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "Behavioral work is not cosmetic-it’s a foundation. Improve structure, content, speed, and usability, and you’ll grow rankings, reduce wasted traffic, and increase qualified leads.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "גורמים התנהגותיים: למה בלי זה האתר לא יצמח ב‑SEO",
    lead: [
      "לעסק בישראל, גורמים התנהגותיים הם מדדי מעורבות שמראים איך משתמשים באמת מתנהגים באתר והאם העמודים עונים לכוונת החיפוש. שיפור המדדים האלה יכול לשפר דירוגים בגוגל, להגדיל תנועה אורגנית ולהעלות המרות.",
    ],
    sections: [
      {
        title: "1. מה הם גורמים התנהגותיים (בפשטות)",
        blocks: [
          {
            body: "אלה אותות שמראים אם העמוד שימושי ונוח: האם המשתמש מצא תשובה והאם החוויה ברורה.",
          },
          {
            body: [
              "זמן באתר/בעמוד;",
              "מספר עמודים לביקור;",
              "Bounce rate (בהקשר הנכון);",
              "חזרה מהירה לתוצאות;",
              "CTR של התוצאה;",
              "אינטראקציות: קליקים, טפסים, לחיצה להתקשר.",
            ],
          },
          {
            body: "ביחד, המדדים מציירים תמונה של התאמת האתר לציפייה.",
          },
        ],
      },
      {
        title: "2. למה לעבוד על זה",
        blocks: [
          {
            title: "1. השפעה על דירוג",
            body: "גוגל משתמש באותות איכות ומעורבות כדי להעריך האם עמוד מספק. כשהמשתמשים נשארים יותר ומבצעים פעולות-זה בדרך כלל סימן חיובי.",
          },
          {
            title: "2. צמיחה בלי להגדיל תקציבים",
            body: "שיפור חוויית משתמש ומסרים יכול להעלות ביצועים גם בלי להוסיף קישורים או פרסום.",
          },
          {
            title: "3. יותר המרות",
            body: "אתר ברור ומהיר מוכר טוב יותר-יותר פניות, שיחות ורכישות.",
          },
          {
            title: "4. פחות בזבוז תנועה",
            body: "אם האתר איטי או מבלבל, גם תנועה אורגנית וגם ממומנת “נשפכת”. שיפור UX משפר ROI.",
          },
          {
            title: "5. יותר אמון",
            body: "מבנה הגיוני וחוויה מקצועית מעלים תפיסת מומחיות.",
          },
        ],
      },
      {
        title: "3. למה לצפות אחרי שיפור",
        blocks: [
          {
            body: "בעבודה עקבית אפשר לראות:",
          },
          {
            body: [
              "עלייה בזמן באתר;",
              "ירידה בנטישה בעקבות הסרת חסמים;",
              "יותר עומק צפייה באמצעות קישורים פנימיים;",
              "עלייה בדירוגים לשאילתות ארוכות;",
              "שיפור בהמרות בזכות בהירות ונוחות.",
            ],
          },
        ],
      },
      {
        title: "4. איך משפרים גורמים התנהגותיים",
        blocks: [
          {
            title: "4.1. מבנה וניווט",
            body: "לשפר תפריטים, להסיר מבואות סתומים, להוסיף צעדים הבאים וקישורים פנימיים חכמים.",
          },
          {
            title: "4.2. תוכן והגשה",
            body: "להפוך תוכן לסריק: כותרות, רשימות, טבלאות, ו‑FAQ. לענות מהר לשאלה.",
          },
          {
            title: "4.3. מהירות וטכני",
            body: "אופטימיזציה לתמונות/סקריפטים, קאשינג ודחיסה. מהירות חשובה במיוחד במובייל.",
          },
          {
            title: "4.4. מובייל",
            body: "כפתורים גדולים, טפסים קצרים, טקסט קריא ועיצוב יציב.",
          },
          {
            title: "4.5. כותרות וסניפטים",
            body: "שכתוב כותרות ותיאורים כדי להעלות CTR ולהתאים לכוונת חיפוש.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "עבודה על גורמים התנהגותיים היא בסיס. שיפור מבנה, תוכן, מהירות ונוחות מעלה דירוגים, מפחית בזבוז תנועה ומגדיל פניות.",
          },
        ],
      },
    ],
  },
};

export default content;
