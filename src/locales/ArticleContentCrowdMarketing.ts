import { type HowToStep } from "@/components/HowToChecklist";

export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleChecklist = {
  title: string;
  storageKey: string;
  steps: readonly HowToStep[];
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  sections: ArticleSection[];
  checklist: ArticleChecklist;
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Крауд‑маркетинг (упоминания бренда на форумах и в соцсетях): зачем это нужно и как правильно это делать",
    lead: [
      "Крауд‑маркетинг и упоминания бренда для белорусского бизнеса - это одна из наиболее эффективных стратегий локального продвижения в Минске, Бресте, Гомеле и других городах Беларуси для повышения узнаваемости бренда и улучшения позиций в Google и Яндексе.",
      "Правильно организованные упоминания помогают создать положительную репутацию среди местных клиентов и привлекать новых белорусских клиентов.",
      "Для локального бизнеса это особенно эффективный инструмент, поскольку позволяет напрямую общаться с потенциальными клиентами из вашего города или района, отвечать на их вопросы, делиться опытом и ненавязчиво рассказывать о своих услугах.",
    ],
    sections: [
      {
        title: "Зачем нужен крауд‑маркетинг",
        blocks: [
          {
            title: "1. Доверие через живые рекомендации",
            body: "Упоминания бренда в реальных обсуждениях, на форумах и в комментариях создают ощущение естественного спроса и присутствия. Пользователь видит, что о компании говорят, задают вопросы, делятся опытом - это гораздо ценнее, чем прямой рекламный пост.",
          },
          {
            title: "2. Повышение узнаваемости",
            body: "Каждое упоминание - это точка контакта с аудиторией. Даже если человек не переходит сразу, он запоминает название и позже легче кликнет по вашему сайту в поиске или рекламе.",
          },
          {
            title: "3. Приток целевого трафика",
            body: "Особенно ценны упоминания в контексте решения конкретной проблемы: «мне помог сервис Х», «обратитесь в Y, у них нормальные условия». Такой трафик тёплый, с высокой конверсией.",
          },
          {
            title: "4. SEO‑эффект",
            body: "Крауд‑маркетинг создаёт естественные ссылки и безанкорные упоминания бренда. Поисковики учитывают такие сигналы как признак популярности и доверия к компании.",
          },
          {
            title: "5. Работа с репутацией",
            body: "На форумах и в соцсетях чаще всего появляются негативные обсуждения. Грамотный крауд‑маркетинг помогает отвечать на вопросы, сглаживать конфликтные ситуации и формировать позитивный фон вокруг бренда.",
          },
        ],
      },
      {
        title: "Чего ожидать от крауд‑маркетинга",
        blocks: [
          {
            body: [
              "Постепенный, но устойчивый рост трафика с форумов и соцсетей.",
              "Увеличение брендовых запросов и узнаваемости.",
              "Укрепление доверия и репутации в нише.",
              "Дополнительные SEO‑сигналы за счёт упоминаний и естественных ссылок.",
              "Рост вовлечённости аудитории в обсуждениях и вопросах.",
            ],
          },
        ],
      },
      {
        title: "Как правильно делать крауд‑маркетинг",
        blocks: [
          {
            title: "1. Выбор площадок",
            body: "Важно выделить профильные форумы, тематические сообщества в соцсетях, Q&A‑площадки и отраслевые чаты. Туда, где ваша аудитория реально общается и задаёт вопросы.",
          },
          {
            title: "2. Естественные формулировки",
            body: "Сообщения должны выглядеть как обычные ответы пользователей, а не как рекламные блоки. Полезный контекст, короткая история, аккуратная рекомендация - и только потом ссылка (если она уместна).",
          },
          {
            title: "3. Регулярность и системность",
            body: "Эпизодические упоминания не дадут сильного эффекта. Гораздо лучше, когда бренд регулярно и ненавязчиво появляется в обсуждениях разных площадок.",
          },
        ],
      },
      {
        title: "Ошибки и риски в крауд‑маркетинге",
        blocks: [
          {
            body: [
              "Откровенный спам: одинаковые сообщения на десятках площадок.",
              "Агрессивная самореклама без пользы для обсуждения.",
              "Игнорирование ответной реакции аудитории.",
              "Работа только под ссылки, без заботы о репутации и помощи людям.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по крауд‑маркетингу",
        blocks: [
          {
            title: "Когда ждать эффект?",
            body: "Первые заметные результаты обычно появляются через 2–4 недели активной работы, устойчивый рост - спустя несколько месяцев регулярных упоминаний.",
          },
        ],
      },
    ],
    checklist: {
      title: "Чек‑лист",
      storageKey: "articleCrowdMarketingChecklist",
      steps: [
        {
          id: "crowd-marketing-checklist",
          title: "",
          description: "",
          items: [
            "Определите площадки, где общается ваша ЦА.",
            "Сформулируйте правила и тон общения (естественно, без спама).",
            "Создавайте полезные ответы и рекомендации с аккуратными упоминаниями бренда.",
            "Отслеживайте трафик, брендовую выдачу и отклики аудитории.",
            "Корректируйте стратегию и усиливайте площадки с лучшим откликом.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Crowd marketing (brand mentions on forums and social media): why it matters and how to do it right",
    lead: [
      "Crowd marketing-earning brand mentions in real community discussions-is one of the most effective strategies for building trust, increasing brand awareness, and supporting local SEO.",
      "When done correctly, it helps create a positive reputation among local customers and can generate new leads without relying only on ads.",
      "For local businesses, it’s especially powerful because it enables direct conversations with potential customers in your city or neighborhood.",
    ],
    sections: [
      {
        title: "Why crowd marketing works",
        blocks: [
          {
            title: "1. Trust through real recommendations",
            body: "Brand mentions inside authentic discussions feel natural. People see questions, experiences, and recommendations-often far more persuasive than direct advertising.",
          },
          {
            title: "2. More awareness",
            body: "Every mention is a touchpoint. Even if a user doesn’t click immediately, they remember your name and are more likely to recognize it later in search results.",
          },
          {
            title: "3. Qualified referral traffic",
            body: "Mentions are especially valuable when they solve a specific problem (“this service helped me”). That traffic is warm and tends to convert well.",
          },
          {
            title: "4. SEO impact",
            body: "Crowd marketing can create natural links and unlinked brand mentions. Search engines treat these signals as indicators of popularity and trust.",
          },
          {
            title: "5. Reputation management",
            body: "Negative discussions often appear on forums and social media. A good crowd marketing program helps you answer questions, reduce conflict, and build a positive narrative around the brand.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Gradual but steady growth in traffic from forums and social channels.",
              "More branded searches and recognition.",
              "Stronger trust and reputation in the niche.",
              "Additional SEO signals through mentions and natural links.",
              "Higher engagement in discussions.",
            ],
          },
        ],
      },
      {
        title: "How to do crowd marketing correctly",
        blocks: [
          {
            title: "1. Choose the right platforms",
            body: "Identify niche forums, local communities, Q&A platforms, and industry chats where your audience actively asks questions.",
          },
          {
            title: "2. Keep it natural",
            body: "Messages should read like genuine community answers-not ad copy. Provide context, share a short experience, give value, and only then add a link (if appropriate).",
          },
          {
            title: "3. Consistency and rhythm",
            body: "One-off mentions rarely work. Consistent, non-intrusive presence across multiple discussions tends to drive better results.",
          },
        ],
      },
      {
        title: "Mistakes and risks",
        blocks: [
          {
            body: [
              "Blatant spam: identical messages across many platforms.",
              "Aggressive self-promotion without helping the discussion.",
              "Ignoring feedback from the community.",
              "Focusing only on links instead of reputation and usefulness.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When should we expect results?",
            body: "Early results can appear within 2–4 weeks of active work. More stable growth usually takes a few months of consistent participation.",
          },
        ],
      },
    ],
    checklist: {
      title: "Checklist",
      storageKey: "articleCrowdMarketingChecklist",
      steps: [
        {
          id: "crowd-marketing-checklist",
          title: "",
          description: "",
          items: [
            "Identify the platforms where your audience actually talks.",
            "Define rules and tone (natural, no spam).",
            "Write helpful answers with careful brand mentions.",
            "Track traffic, branded SERPs, and community responses.",
            "Adjust the strategy and double down on platforms with the best response.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "קראוד מרקטינג (אזכורי מותג בפורומים וברשתות חברתיות): למה זה חשוב ואיך עושים את זה נכון",
    lead: [
      "קראוד מרקטינג-אזכורי מותג בדיונים אמיתיים של קהילות-הוא דרך יעילה לבניית אמון, העלאת מודעות למותג ותמיכה ב‑SEO מקומי.",
      "כשעושים זאת נכון, אפשר ליצור מוניטין חיובי בקרב לקוחות מקומיים ולהביא פניות בלי להסתמך רק על פרסום.",
      "לעסק מקומי זה חזק במיוחד כי זה מאפשר שיח ישיר עם אנשים בעיר או בשכונה שלכם.",
    ],
    sections: [
      {
        title: "למה קראוד מרקטינג עובד",
        blocks: [
          {
            title: "1. אמון דרך המלצות אמיתיות",
            body: "אזכורי מותג בדיונים אותנטיים מרגישים טבעיים. אנשים רואים שאלות, חוויות והמלצות-לעיתים משכנע יותר מפרסום ישיר.",
          },
          {
            title: "2. יותר מודעות",
            body: "כל אזכור הוא נקודת מגע. גם אם המשתמש לא לוחץ מיד, הוא זוכר את השם ומזהה אותו בהמשך בתוצאות החיפוש.",
          },
          {
            title: "3. תנועה איכותית",
            body: "אזכורים מועילים במיוחד כשהם פותרים בעיה ספציפית (‘זה עזר לי’). זו תנועה חמה עם נטייה להמרה.",
          },
          {
            title: "4. השפעה על SEO",
            body: "קראוד מרקטינג יכול ליצור קישורים טבעיים וגם אזכורי מותג ללא קישור. Google עשוי להתייחס לזה כסיגנל לפופולריות ואמון.",
          },
          {
            title: "5. ניהול מוניטין",
            body: "דיונים שליליים מופיעים לעיתים בפורומים וברשתות. תוכנית טובה מאפשרת לענות, להפחית קונפליקטים ולבנות נרטיב חיובי סביב המותג.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "עלייה הדרגתית אבל יציבה בתנועה מפורומים ומסושיאל.",
              "יותר חיפושי מותג והכרה.",
              "אמון ומוניטין חזקים יותר בנישה.",
              "אותות SEO נוספים דרך אזכורים וקישורים טבעיים.",
              "יותר מעורבות בדיונים.",
            ],
          },
        ],
      },
      {
        title: "איך עושים קראוד מרקטינג נכון",
        blocks: [
          {
            title: "1. לבחור את הפלטפורמות הנכונות",
            body: "לזהות פורומים בנישה, קהילות מקומיות, פלטפורמות Q&A וצ’אטים מקצועיים שבהם הקהל שלכם באמת שואל שאלות.",
          },
          {
            title: "2. לכתוב טבעי",
            body: "הודעות צריכות להיראות כמו תשובות אמיתיות-not כמו פרסומת. לתת הקשר, לשתף ניסיון קצר, להוסיף ערך, ורק אז קישור (אם מתאים).",
          },
          {
            title: "3. עקביות וסיסטם",
            body: "אזכורים חד‑פעמיים כמעט לא עובדים. נוכחות עקבית ולא פולשנית במספר דיונים לרוב יעילה יותר.",
          },
        ],
      },
      {
        title: "טעויות וסיכונים",
        blocks: [
          {
            body: [
              "ספאם בוטה: הודעות זהות בעשרות מקומות.",
              "קידום עצמי אגרסיבי בלי תרומה לדיון.",
              "התעלמות מתגובות הקהילה.",
              "מיקוד רק בקישורים במקום בתועלת ובמוניטין.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "תוצאות ראשונות יכולות להופיע תוך 2–4 שבועות של פעילות. צמיחה יציבה יותר מגיעה לרוב אחרי כמה חודשים של השתתפות עקבית.",
          },
        ],
      },
    ],
    checklist: {
      title: "צ’ק‑ליסט",
      storageKey: "articleCrowdMarketingChecklist",
      steps: [
        {
          id: "crowd-marketing-checklist",
          title: "",
          description: "",
          items: [
            "להגדיר איפה הקהל שלכם באמת מדבר.",
            "לקבוע כללים וטון (טבעי, בלי ספאם).",
            "לכתוב תשובות מועילות עם אזכורים עדינים של המותג.",
            "לעקוב אחרי תנועה, חיפושי מותג ותגובות.",
            "לשפר את האסטרטגיה ולהתמקד בפלטפורמות שעובדות.",
          ],
        },
      ],
    },
  },
};

export default content;
