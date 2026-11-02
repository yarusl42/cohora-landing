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
      "Стратегия управления онлайн‑репутацией (ORM): зачем это нужно и как выстроить рабочую систему",
    lead: [
      "Онлайн‑репутация стала критическим фактором успеха почти любого бизнеса - от локальных салонов и медицинских центров до ресторанов, интернет‑магазинов и образовательных проектов. Клиенты всё реже доверяют рекламе и всё чаще - отзывам, упоминаниям в соцсетях и реальному опыту других людей.",
      "ORM (Online Reputation Management) - это не «дополнение», а обязательная часть цифровой стратегии: мониторинг, ответы, системный сбор отзывов, работа с негативом и укрепление доверия.",
    ],
    sections: [
      {
        title: "Зачем нужна стратегия управления онлайн‑репутацией",
        blocks: [
          {
            title: "1. Клиенты выбирают по отзывам, а не по рекламе",
            body: "Доверие не создаётся за один день. Большинство людей сначала проверяют, что о вас говорят, и только потом принимают решение. ORM‑стратегия помогает системно собирать позитивный опыт, обрабатывать негатив и делать так, чтобы публичная картина была максимально близка к реальности, а не к голосам самых сердитых клиентов.",
          },
          {
            title: "2. Рейтинг напрямую влияет на конверсию",
            body: "Карточка с рейтингом 4.7+ воспринимается как «надёжно, можно пробовать». Рейтинг ниже 4.0 обычно снижает количество звонков, переходов и заявок - даже если фактический сервис сильный. Хорошая ORM‑стратегия не про накрутку, а про то, чтобы реальный опыт довольных клиентов начал отражаться в публичном поле.",
          },
          {
            title: "3. Защита от репутационных рисков",
            body: "Один конфликтный кейс может быстро разлететься по Google, соцсетям, отзовикам и мессенджерам. Стратегия задаёт протокол: сначала частный диалог, попытка решить проблему, затем - взвешенный публичный ответ, а при необходимости - подача жалобы на отзывы, нарушающие правила площадки.",
          },
          {
            title: "4. ORM усиливает SEO и позиции в картах",
            body: [
              "частоту появления новых отзывов;",
              "наличие ответов от компании;",
              "кликабельность карточки (CTR);",
              "поведение пользователей после клика;",
              "упоминания бренда на внешних ресурсах.",
            ],
          },
          {
            title: "5. Выделение на фоне конкурентов",
            body: "В нишах с высокой конкуренцией побеждает тот, кому больше доверяют: кто выглядит профессионально, стабильно собирает хорошие отзывы и не молчит, когда что‑то идёт не так. ORM делает этот эффект управляемым.",
          },
        ],
      },
      {
        title: "Что ожидать после внедрения стратегии ORM",
        blocks: [
          {
            title: "1. Рост количества отзывов",
            body: "Когда воронка отзывов встроена в процессы (через SMS, e‑mail, QR‑коды, напоминания из CRM), поток становится стабильным и предсказуемым.",
          },
          {
            title: "2. Постепенный рост среднего рейтинга",
            body: "За счёт того, что начинают оставлять отзывы не только недовольные, рейтинг часто растёт на 0.2–0.4 за несколько месяцев.",
          },
          {
            title: "3. Снижение силы единичного негатива",
            body: "Негативные ситуации всё равно будут, но они перестают быть катастрофой: часть конфликтов удаётся отработать до публикации отзыва, а публичный негатив теряется на фоне честного позитива.",
          },
          {
            title: "4. Улучшение позиций в Google и картах",
            body: "Живые карточки с регулярными отзывами и ответами обычно постепенно растут в локальной выдаче.",
          },
          {
            title: "5. Укрепление бренда",
            body: "Системные ответы и прозрачность создают ощущение устойчивости: видно, что компания не прячется от клиентов и готова решать проблемы.",
          },
        ],
      },
      {
        title: "Как поэтапно выстроить стратегию ORM",
        blocks: [
          {
            title: "Этап 1. Аудит текущей репутации",
            body: [
              "все карточки бизнеса в Google Maps и 2ГИС (популярен в Беларуси), а также в отраслевых каталогах;",
              "страницы в соцсетях;",
              "упоминания на отзовиках и форумах;",
              "средний рейтинг и динамику за последние месяцы;",
              "какие жалобы и вопросы повторяются чаще всего.",
            ],
          },
          {
            title: "Этап 2. Определение целей и KPI",
            body: [
              "достигнуть целевого рейтинга (например, 4.5+);",
              "увеличить количество отзывов до X в месяц;",
              "сократить долю отзывов с оценкой 1–2★;",
              "сократить время реакции на негатив до N часов.",
            ],
          },
          {
            title: "Этап 3. Настройка воронки сбора отзывов",
            body: [
              "автоматические SMS или письма после визита/покупки;",
              "QR‑коды на стойке, в чеке, на визитках;",
              "напоминания из CRM или онлайн‑записи;",
              "краткие сценарии для сотрудников: когда и как мягко попросить отзыв.",
            ],
          },
          {
            title: "Этап 4. Регламенты работы с негативом",
            body: [
              "кто отвечает за мониторинг отзывов;",
              "какие проблемы решаются на уровне администратора;",
              "когда подключается руководитель/служба качества;",
              "какие формулировки допустимы в публичных ответах.",
            ],
          },
          {
            title: "Этап 5. Мониторинг упоминаний вне карточек",
            body: "Помимо карт и Google, о вас могут писать в соцсетях и чатах. В Беларуси часто важно отслеживать Telegram и Viber, а также профильные форумы. Задача - мониторить ключевые площадки и реагировать там, где это действительно влияет на решение клиента.",
          },
          {
            title: "Этап 6. Автоматизация и регулярный пересмотр стратегии",
            body: "Часть процессов можно автоматизировать (напоминания, отчёты, шаблоны ответов), но ORM - это не «настроили и забыли». Раз в несколько месяцев полезно возвращаться к целям и корректировать подход.",
          },
        ],
      },
      {
        title: "Типичные ошибки в ORM",
        blocks: [
          {
            title: "Ошибка 1. Свести ORM к «накрутке отзывов»",
            body: "Покупка отзывов и попытки удалить любой негатив - это не стратегия. Площадки всё лучше распознают накрутку, а клиенты быстро чувствуют фальшь.",
          },
          {
            title: "Ошибка 2. Реагировать только на кризисы",
            body: "Если думать о репутации только во время скандала, вы всегда будете догонять. ORM нужен, чтобы система работала в мирное время.",
          },
          {
            title: "Ошибка 3. Делегировать всё одному человеку без ресурсов",
            body: "Без регламентов, инструментов и времени ответы на отзывы превращаются в галочку. Нужны правила, поддержка руководства и базовые инструменты (CRM, шаблоны, аналитика).",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "ORM - это система, которая помогает бизнесу выглядеть в интернете таким, какой он есть на самом деле, и не позволять единичным конфликтам определять образ в глазах клиентов.",
          },
          {
            body: "При правильной настройке ORM даёт понятные эффекты: больше честных отзывов, выше рейтинг, меньше разрушительного негатива и устойчивый рост доверия.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Online Reputation Management (ORM) strategy: why it matters and how to build a system that works",
    lead: [
      "Online reputation can make or break most businesses-from local service providers to restaurants, ecommerce brands, and education companies. Customers trust ads less and rely more on reviews, social mentions, and real customer experiences.",
      "ORM isn’t a ‘nice to have’. It’s a repeatable system: monitoring, fast responses, consistent review generation, smart handling of negative feedback, and protecting your brand in public.",
    ],
    sections: [
      {
        title: "Why you need an ORM strategy",
        blocks: [
          {
            title: "1. Customers choose based on reviews",
            body: "Most people check reviews before booking. If you don’t manage what they see, you leave your reputation to chance. ORM helps you consistently surface real positive experiences and handle issues professionally.",
          },
          {
            title: "2. Ratings directly impact conversion",
            body: "A strong rating (often 4.7+) feels ‘safe’. Below ~4.0 can reduce calls and bookings even if your service is great. Effective ORM is not about fake reviews-it’s about getting satisfied customers to speak up.",
          },
          {
            title: "3. Risk protection",
            body: "One conflict can spread fast across Google, social platforms, and review sites. A strategy gives you a playbook: private resolution first, calm public replies second, and policy-based reporting when reviews break the rules.",
          },
          {
            title: "4. Local visibility and SEO",
            body: [
              "steady inflow of new reviews;",
              "owner replies;",
              "profile CTR and engagement;",
              "customer behavior after clicking;",
              "brand mentions across the web.",
            ],
          },
          {
            title: "5. Stand out from competitors",
            body: "In competitive categories, trust is a differentiator. Businesses that respond consistently and build a real review base win more often.",
          },
        ],
      },
      {
        title: "What to expect after implementation",
        blocks: [
          {
            title: "1. More reviews (more consistently)",
            body: "When review requests become part of your process (text/email follow-ups, QR codes, CRM triggers), review flow becomes predictable.",
          },
          {
            title: "2. Gradual rating improvement",
            body: "As more average satisfied customers leave feedback, ratings often climb over a few months.",
          },
          {
            title: "3. Less damage from isolated negatives",
            body: "You’ll still get negative feedback, but it won’t define you. Some issues get resolved before a review is posted, and remaining negatives carry less weight.",
          },
          {
            title: "4. Better local rankings over time",
            body: "Active profiles with regular reviews and replies often see gradual improvement in local pack/map visibility.",
          },
          {
            title: "5. Stronger brand trust",
            body: "Customers see that you listen, respond, and solve problems-building credibility.",
          },
        ],
      },
      {
        title: "How to build an ORM strategy step by step",
        blocks: [
          {
            title: "Step 1. Audit your current reputation",
            body: [
              "your Google Business Profile and other key listings (Apple Maps, Bing Places, Yelp, industry directories);",
              "your social media profiles;",
              "mentions on review sites, forums, and local communities;",
              "your average rating and trend over the last months;",
              "recurring complaints and questions.",
            ],
          },
          {
            title: "Step 2. Set goals and KPIs",
            body: [
              "target rating (e.g., 4.5+);",
              "target review volume per month;",
              "reduce 1–2★ share;",
              "reduce response time to N hours.",
            ],
          },
          {
            title: "Step 3. Build a review request funnel",
            body: [
              "automated post-visit text/email;",
              "QR codes at the point of service;",
              "CRM or booking follow-ups;",
              "simple staff scripts for when to ask.",
            ],
          },
          {
            title: "Step 4. Define rules for handling negative feedback",
            body: [
              "who monitors reviews;",
              "what issues front desk can resolve;",
              "when escalation happens;",
              "tone and boundaries for public replies.",
            ],
          },
          {
            title: "Step 5. Monitor mentions beyond listings",
            body: "People talk about brands on social media, local groups, and niche communities. Focus on the few channels that influence buying decisions in your market, and respond when it matters.",
          },
          {
            title: "Step 6. Automate and review periodically",
            body: "You can automate reminders and reporting, but ORM isn’t set-and-forget. Revisit goals every few months and adjust based on reality.",
          },
        ],
      },
      {
        title: "Common ORM mistakes",
        blocks: [
          {
            title: "Mistake 1. Treating ORM as ‘buying reviews’",
            body: "Paid reviews and trying to delete every negative comment isn’t a strategy. Platforms detect manipulation, and customers notice when a profile feels fake.",
          },
          {
            title: "Mistake 2. Only reacting in a crisis",
            body: "If you build your process only after something goes wrong, you’ll always be behind. ORM is about steady work in calm periods.",
          },
          {
            title: "Mistake 3. One person, no resources",
            body: "Without time, access, templates, and analytics, review handling becomes a checkbox. You need structure and basic tools.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "ORM is a repeatable system that helps your business look as good online as it is in real life-and prevents isolated incidents from defining your brand.",
          },
          {
            body: "Done right, ORM leads to more real reviews, higher ratings, less damage from negativity, and stronger long-term trust.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "אסטרטגיית ניהול מוניטין אונליין (ORM): למה זה חשוב ואיך בונים מערכת שעובדת",
    lead: [
      "מוניטין אונליין משפיע ישירות על ההחלטה של לקוחות. אנשים בודקים ביקורות, אזכורים ברשתות חברתיות וחוויות של אחרים לפני שהם מתקשרים או מזמינים.",
      "ORM הוא תהליך שיטתי: ניטור, תגובה מהירה, איסוף ביקורות באופן עקבי, טיפול נכון בביקורת שלילית והגנה על אמון.",
    ],
    sections: [
      {
        title: "למה צריך אסטרטגיית ORM",
        blocks: [
          {
            title: "1. לקוחות בוחרים לפי ביקורות",
            body: "רוב האנשים קוראים ביקורות לפני החלטה. ORM עוזר לוודא שהתמונה הציבורית משקפת חוויה אמיתית-ולא רק את הקולות הכועסים ביותר.",
          },
          {
            title: "2. דירוג משפיע על המרות",
            body: "דירוג גבוה נתפס כבחירה בטוחה. ORM טוב לא מסתמך על זיופים-אלא על תהליך שמקל ללקוחות מרוצים להשאיר משוב.",
          },
          {
            title: "3. הגנה מסיכונים",
            body: "מקרה אחד יכול להתפשט מהר ב‑Google וברשתות. אסטרטגיה מגדירה פרוטוקול: לפתור בפרטי, לענות בפומבי בצורה שקולה, ולדווח על הפרות מדיניות כשצריך.",
          },
          {
            title: "4. השפעה על נראות מקומית",
            body: [
              "זרימה עקבית של ביקורות;",
              "תגובות של בעל העסק;",
              "CTR ומעורבות בכרטיס העסק;",
              "התנהגות משתמשים אחרי לחיצה;",
              "אזכורים של המותג במקומות נוספים.",
            ],
          },
          {
            title: "5. יתרון מול מתחרים",
            body: "בתחומים תחרותיים אמון הוא בידול. מי שמגיב באופן קבוע ומייצר בסיס ביקורות אמיתי-מנצח יותר.",
          },
        ],
      },
      {
        title: "למה לצפות אחרי יישום",
        blocks: [
          {
            title: "1. יותר ביקורות בצורה יציבה",
            body: "כאשר בקשת ביקורת הופכת לחלק מהתהליך (SMS/אימייל/QR), זרימת הביקורות נעשית צפויה יותר.",
          },
          {
            title: "2. עלייה הדרגתית בדירוג",
            body: "ככל שיותר לקוחות מרוצים משאירים משוב, הדירוג משתפר לאורך זמן.",
          },
          {
            title: "3. פחות השפעה לביקורת שלילית בודדת",
            body: "עדיין יהיו מצבים שליליים, אבל הם לא יגדירו את העסק כאשר יש מספיק משוב אמיתי חיובי.",
          },
        ],
      },
      {
        title: "איך בונים אסטרטגיה (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. בדיקת מצב קיים",
            body: [
              "כרטיס העסק ב‑Google, וגם פלטפורמות מקומיות/ענפיות רלוונטיות;",
              "רשתות חברתיות;",
              "אזכורים בפורומים/קהילות;",
              "דירוג ממוצע ומגמה;",
              "תלונות שחוזרות על עצמן.",
            ],
          },
          {
            title: "שלב 2. מטרות ו‑KPI",
            body: [
              "דירוג יעד;",
              "מספר ביקורות חודשי;",
              "קיצור זמן תגובה;",
              "הפחתת ביקורות 1–2 כוכבים.",
            ],
          },
          {
            title: "שלב 3. משפך איסוף ביקורות",
            body: [
              "הודעות קצרות אחרי שירות;",
              "QR במקום;",
              "תזכורות דרך מערכת ניהול/תורים;",
              "סקריפט קצר לצוות.",
            ],
          },
          {
            title: "שלב 4. כללי טיפול בשלילי",
            body: [
              "מי מנטר;",
              "מתי מסלימים;",
              "איך עונים בפומבי;",
              "מה הגבולות בשפה.",
            ],
          },
          {
            title: "שלב 5. ניטור אזכורים מעבר לביקורות",
            body: "אנשים כותבים גם בקבוצות, בפייסבוק/אינסטגרם ובקהילות מקצועיות. כדאי להתמקד בערוצים שבאמת משפיעים על החלטה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "ORM הוא מערכת שוטפת שמחזקת אמון ומקטינה נזק ממשוב שלילי. ככל שהמערכת עקבית יותר-כך התוצאות יציבות יותר.",
          },
        ],
      },
    ],
  },
};

export default content;
