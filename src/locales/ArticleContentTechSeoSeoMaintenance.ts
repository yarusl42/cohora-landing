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
      "SEO‑сопровождение и постоянная поддержка сайта: почему это не разовая задача",
    lead: [
      "Многие воспринимают SEO как одноразовый набор работ: настроить мета‑теги, написать несколько текстов, собрать семантику - и забыть. На практике поисковое продвижение давно работает иначе.",
      "Алгоритмы Google постоянно обновляются, конкуренты усиливают сайты, появляются новые запросы и меняется поведение пользователей. Поэтому SEO - это непрерывный процесс, а не разовый проект.",
    ],
    sections: [
      {
        title: "1. Зачем нужно постоянное SEO‑сопровождение",
        blocks: [
          {
            body: "Если SEO - это марафон, то сопровождение - это регулярные тренировки, анализ результатов и корректировка стратегии. Без постоянной поддержки сайт со временем теряет позиции, даже если стартовая оптимизация была выполнена хорошо.",
          },
          {
            title: "1.1. Постоянные изменения алгоритмов",
            body: "Google обновляет алгоритмы очень часто. После очередного апдейта сайт может потерять позиции, изменить видимость по ключам или столкнуться с новыми требованиями к качеству контента и техническим метрикам. Без мониторинга и корректировок легко пропустить момент, когда сайт начал «проседать».",
          },
          {
            title: "1.2. Конкуренты развиваются",
            body: "Попав в топ, вы становитесь заметны конкурентам. Они улучшают контент, расширяют посадочные страницы, запускают блоги, меняют структуру и дизайн. Если ничего не делать, конкуренты постепенно вытеснят ваш сайт из видимой зоны выдачи.",
          },
          {
            title: "1.3. Нужен постоянный анализ трафика и поведения",
            body: "Появляются новые тренды и запросы, меняется сезонность, пользователи начинают искать иначе. Без регулярной аналитики сложно заметить, где открылись новые точки роста, а где сайт теряет аудиторию.",
          },
          {
            title: "1.4. Контент неизбежно устаревает",
            body: "Тексты, написанные несколько лет назад, могут не соответствовать текущим запросам и стандартам качества. Их нужно обновлять, дополнять, перерабатывать под новые форматы и ключевые фразы.",
          },
          {
            title: "1.5. Технические ошибки появляются со временем",
            body: "Любой развивающийся сайт со временем обрастает проблемами: битые ссылки, 404‑страницы, дубли, перегруженный код, замедление загрузки, ошибки в микроразметке и мобильной версии. Без регулярного аудита техническое состояние постепенно ухудшается.",
          },
        ],
      },
      {
        title: "2. Чего ожидать от постоянного SEO‑сопровождения",
        blocks: [
          {
            title: "2.1. Рост позиций по базовым запросам",
            body: "Устранение технических ошибок, обновление контента, расширение семантики и улучшение структуры приводят к естественному росту позиций по ключевым запросам уже в первые месяцы работы.",
          },
          {
            title: "2.2. Увеличение органического трафика",
            body: "Постепенно растёт не только видимость в поиске, но и доля трафика, который приходит без рекламы. Регулярные обновления и добавление нового контента позволяют захватывать больше поисковых фраз и сегментов аудитории.",
          },
          {
            title: "2.3. Рост конверсий",
            body: "В SEO‑сопровождение обычно входят улучшения юзабилити: упрощение навигации, доработка форм, работа с мобильной версией. Это уменьшает отказы, увеличивает время на сайте и прямо влияет на количество заявок, звонков и заказов.",
          },
          {
            title: "2.4. Повышение доверия и авторитетности сайта",
            body: "Регулярная работа с контентом и ссылками повышает доверие поисковых систем. Новые страницы индексируются быстрее, колебания позиций становятся менее резкими, сайт устойчивее к обновлениям алгоритмов.",
          },
          {
            title: "2.5. Быстрое выявление и устранение проблем",
            body: "При падении позиций, технических сбоях или очередном обновлении алгоритмов команда сопровождения оперативно замечает отклонения и устраняет причину, не допуская затяжного проседания.",
          },
        ],
      },
      {
        title: "3. Что входит в ежемесячное SEO‑сопровождение",
        blocks: [
          {
            title: "3.1. Мониторинг позиций и аналитика",
            body: "Регулярно отслеживаются позиции по ключевым запросам, динамика трафика, глубина просмотра, отказы, CTR. Анализируются изменения выдачи и эффект от обновлений поисковых систем.",
          },
          {
            title: "3.2. Обновление и расширение контента",
            body: "Проводится ревизия существующих текстов, перерабатываются устаревшие материалы, добавляются новые разделы и статьи, корректируются заголовки и мета‑теги под актуальную семантику.",
          },
          {
            title: "3.3. Техническая оптимизация",
            body: "Исправляются ошибки индексации, настраиваются редиректы, устраняются битые ссылки и дубли, ускоряется загрузка страниц, оптимизируется мобильная версия, проверяется и дорабатывается микроразметка.",
          },
          {
            title: "3.4. Работа со структурой и внутренней перелинковкой",
            body: "Улучшается структура сайта: выстраиваются логичные связи между разделами, добавляются контекстные ссылки, перераспределяется внутренний «вес» в пользу приоритетных коммерческих страниц.",
          },
          {
            title: "3.5. Развитие ссылочного профиля",
            body: "Постепенно наращиваются качественные внешние ссылки: размещения в локальных каталогах, тематических статьях, партнёрских материалах. Уделяется внимание естественности анкор‑листа и географии доноров.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Постоянное SEO‑сопровождение - это инвестиция в стабильный рост и предсказуемость результата. Вместо разового «рывка» вы получаете системную работу, которая помогает удерживать и усиливать позиции, адаптироваться к изменениям рынка и алгоритмов, а главное - регулярно получать органический трафик и клиентов из поиска.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Ongoing SEO maintenance: why SEO is not a one-time task",
    lead: [
      "Many people treat SEO like a one-and-done checklist: update meta tags, publish a few pages, do keyword research-and move on. In reality, SEO works differently.",
      "Google changes, competitors evolve, search demand shifts, and user behavior changes. That’s why SEO is an ongoing process-not a one-time project.",
    ],
    sections: [
      {
        title: "1. Why ongoing SEO maintenance matters",
        blocks: [
          {
            body: "If SEO is a marathon, maintenance is your weekly training, reporting, and course corrections. Without consistent work, rankings often slip even if the initial optimization was solid.",
          },
          {
            title: "1.1. Algorithms and SERPs change",
            body: "Google updates its systems constantly. A site can lose visibility after an update, or need to meet new expectations for content quality, UX, and technical performance. Without monitoring, it’s easy to miss early warning signs.",
          },
          {
            title: "1.2. Competitors keep improving",
            body: "Once you rank well, competitors notice. They add content, expand landing pages, improve design, and invest in PR and links. If you stay still, they can push you down over time.",
          },
          {
            title: "1.3. You need continuous analytics",
            body: "Trends, seasonality, and intent shift. Regular reporting helps you spot new growth opportunities-and catch declines early.",
          },
          {
            title: "1.4. Content becomes outdated",
            body: "Pages written years ago may no longer match today’s queries or quality standards. Updating and restructuring content is part of maintenance.",
          },
          {
            title: "1.5. Technical issues accumulate",
            body: "Over time, websites collect broken links, 404s, duplicate pages, bloated code, performance regressions, schema issues, and mobile UX problems. Regular audits keep technical health stable.",
          },
        ],
      },
      {
        title: "2. What to expect from ongoing work",
        blocks: [
          {
            title: "2.1. Steady ranking growth",
            body: "Fixing technical issues, refreshing content, expanding keyword coverage, and improving site structure can drive measurable ranking gains within the first few months.",
          },
          {
            title: "2.2. More organic traffic",
            body: "Visibility and the share of non-paid traffic typically grow gradually as you publish and improve more pages.",
          },
          {
            title: "2.3. Better conversion rates",
            body: "SEO maintenance often includes UX improvements: navigation, forms, mobile usability. That reduces bounce and improves lead volume.",
          },
          {
            title: "2.4. More trust and authority",
            body: "Consistent content and off-site signals strengthen authority. New pages get indexed faster, volatility decreases, and the site becomes more resilient.",
          },
          {
            title: "2.5. Faster issue detection",
            body: "When rankings drop, traffic shifts, or technical problems appear, an ongoing SEO process detects changes quickly and helps resolve root causes.",
          },
        ],
      },
      {
        title: "3. What monthly SEO maintenance usually includes",
        blocks: [
          {
            title: "3.1. Monitoring and reporting",
            body: "Track rankings, organic traffic, engagement metrics, and CTR. Review SERP changes and the impact of major updates.",
          },
          {
            title: "3.2. Content updates",
            body: "Audit existing pages, refresh outdated content, publish new supporting pages and blog posts, and update titles/meta descriptions based on current demand.",
          },
          {
            title: "3.3. Technical optimization",
            body: "Fix indexing issues, redirects, broken links, duplicates, performance problems, and keep schema markup and mobile UX in good shape.",
          },
          {
            title: "3.4. Internal linking and structure",
            body: "Improve navigation and internal links to support priority service and location pages and distribute authority more effectively.",
          },
          {
            title: "3.5. Off-site growth",
            body: "Build quality mentions and links via local directories, partnerships, industry content, and PR-focusing on natural anchor text and relevant geography.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Ongoing SEO maintenance is an investment in stable growth. Instead of a one-time push, you build a repeatable system that protects rankings, adapts to change, and consistently brings qualified organic leads.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "תחזוקת SEO שוטפת: למה SEO זה לא משהו שעושים פעם אחת",
    lead: [
      "רבים מתייחסים ל‑SEO כמשימה חד־פעמית: מטא תגיות, כמה עמודים, מחקר מילות מפתח - וזהו. בפועל SEO הוא תהליך מתמשך.",
      "האלגוריתמים משתנים, המתחרים משתפרים, הביקוש משתנה - ולכן צריך תחזוקה שוטפת ולא פרויקט חד־פעמי.",
    ],
    sections: [
      {
        title: "1. למה צריך תחזוקת SEO שוטפת",
        blocks: [
          {
            body: "אם SEO הוא מרתון, תחזוקה היא אימון קבוע, מדידה ותיקון כיוון. בלי עבודה שוטפת, גם אתר שעבר אופטימיזציה טובה יכול לרדת בדירוג.",
          },
          {
            title: "1.1. שינויי אלגוריתם ותוצאות חיפוש",
            body: "Google מתעדכנת באופן קבוע. אחרי עדכון אתר יכול לאבד נראות או להזדקק לסטנדרטים חדשים של איכות תוכן, חוויית משתמש וביצועים.",
          },
          {
            title: "1.2. מתחרים לא עומדים במקום",
            body: "כשהאתר שלכם מצליח, מתחרים משקיעים בתוכן, בדפים ובשיווק. אם לא מתקדמים, הם יכולים לעקוף.",
          },
          {
            title: "1.3. צריך אנליטיקה באופן קבוע",
            body: "מגמות ועונתיות משתנות. מעקב קבוע עוזר לזהות הזדמנויות ולהבחין בירידות בזמן.",
          },
          {
            title: "1.4. תוכן מתיישן",
            body: "תוכן ישן לא תמיד מתאים לשאילתות ולסטנדרטים של היום. צריך לעדכן ולשפר.",
          },
          {
            title: "1.5. בעיות טכניות מצטברות",
            body: "עם הזמן מצטברים קישורים שבורים, 404, כפילויות, האטות, בעיות סכימה ומובייל. בלי בדיקות תקופתיות המצב הטכני מדרדר.",
          },
        ],
      },
      {
        title: "2. למה לצפות מתחזוקה שוטפת",
        blocks: [
          {
            title: "2.1. שיפור הדרגתי בדירוג",
            body: "תיקון תקלות, ריענון תוכן והרחבת כיסוי מילות מפתח יכולים לשפר דירוג כבר בחודשים הראשונים.",
          },
          {
            title: "2.2. יותר טראפיק אורגני",
            body: "ככל שמוסיפים ומשפרים עמודים, הנראות והטראפיק האורגני גדלים.",
          },
          {
            title: "2.3. יותר לידים והמרות",
            body: "שיפור ניווט, טפסים ומובייל מוריד נטישה ומעלה כמות פניות.",
          },
          {
            title: "2.4. יותר סמכות ואמינות",
            body: "עבודה עקבית מחזקת סמכות. עמודים חדשים נכנסים לאינדקס מהר יותר והאתר יציב יותר לשינויים.",
          },
          {
            title: "2.5. זיהוי מהיר של בעיות",
            body: "כשיש ירידה בדירוג או תקלה טכנית, תחזוקה שוטפת מאפשרת לזהות ולטפל מהר.",
          },
        ],
      },
      {
        title: "3. מה כולל SEO חודשי בדרך כלל",
        blocks: [
          {
            title: "3.1. ניטור ודוחות",
            body: "מעקב אחרי דירוגים, טראפיק, מדדי מעורבות ו‑CTR, ובחינת שינויי תוצאות חיפוש.",
          },
          {
            title: "3.2. עדכוני תוכן",
            body: "בדיקה של עמודים קיימים, שיפור תוכן מיושן, הוספת עמודים חדשים ועדכון מטא תגיות.",
          },
          {
            title: "3.3. אופטימיזציה טכנית",
            body: "תיקון אינדוקס, הפניות, קישורים שבורים, כפילויות, ביצועים, סכימה ומובייל.",
          },
          {
            title: "3.4. קישורים פנימיים ומבנה",
            body: "שיפור מבנה וקישורים פנימיים לטובת עמודי שירות חשובים.",
          },
          {
            title: "3.5. חיזוק מחוץ לאתר",
            body: "בניית אזכורים וקישורים איכותיים דרך ספריות מקומיות, שיתופי פעולה ותוכן ענפי.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "תחזוקת SEO שוטפת היא השקעה בצמיחה יציבה. במקום מהלך חד־פעמי, אתם בונים מערכת שמגינה על דירוגים ומביאה לידים אורגניים לאורך זמן.",
          },
        ],
      },
    ],
  },
};

export default content;
