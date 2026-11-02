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
      "Обмен ссылками с партнёрами по городу: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Обмен ссылками с партнёрами по Минску, Бресту, Гомелю и другим городам Беларуси - это один из наиболее эффективных и безопасных способов получения качественных локальных ссылок для локального SEO в Беларуси.",
      "Правильно организованный обмен помогает укрепить локальные сигналы, повысить доверие Google и Яндекса и улучшить позиции в локальном поиске.",
    ],
    sections: [
      {
        title: "Зачем локальному бизнесу обмениваться ссылками",
        blocks: [
          {
            title: "1. Усиление локального SEO",
            body: "Локальные ссылки от компаний из того же города усиливают связь вашего сайта с регионом, подтверждают реальное присутствие и повышают релевантность по геозапросам. Поисковикам важно видеть, что бизнес интегрирован в местное сообщество.",
          },
          {
            title: "2. Рост траста и авторитета",
            body: "Если на ваш сайт ссылаются известные в городе магазины, сервисы, клиники, мастерские или кафе, это повышает доверие поисковых систем и пользователей. Такие ссылки усиливают траст и авторитет домена.",
          },
          {
            title: "3. Реальные клиенты по рекомендациям",
            body: "Размещение ссылок в разделе «Партнёры», «Рекомендуем», в локальных гид‑статьях и подборках сервисов приводит живых клиентов, которые пришли по совету партнёра.",
          },
          {
            title: "4. Укрепление локальных коллабораций",
            body: "Обмен ссылками часто ведёт к совместным акциям, кросс‑маркетингу, пакетным предложениям и взаимной поддержке брендов.",
          },
        ],
      },
      {
        title: "Чего ожидать от обмена ссылками",
        blocks: [
          {
            body: [
              "Повышения позиций по локальным коммерческим запросам.",
              "Усиления карточек в картах за счёт локальных ссылок.",
              "Рост поискового и прямого трафика с сайтов партнёров.",
              "Увеличение количества обращений от «прогретой» аудитории партнёров.",
              "Укрепление узнаваемости бренда в городе.",
            ],
          },
        ],
      },
      {
        title: "Как правильно организовать обмен ссылками",
        blocks: [
          {
            title: "Шаг 1. Поиск подходящих партнёров",
            body: "Ищите компании в своём городе, которые не конкурируют напрямую, но работают с вашей аудиторией: автосервисы и магазины запчастей, стоматологии и косметологические центры, фитнес‑клубы и массажные кабинеты и т.п.",
          },
          {
            title: "Шаг 2. Форматы размещения ссылок",
            body: "Используйте разделы «Партнёры», «Рекомендуем», блог‑статьи, гиды по городу и подборки полезных сервисов. Важно, чтобы ссылка выглядела уместно и полезно для читателя.",
          },
          {
            title: "Шаг 3. Типы ссылок",
            body: "Отдавайте приоритет брендированным и естественным анкорам вместо спамных «купить + ключ». Цель - показать реальную деловую связь, а не манипуляцию.",
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по обмену локальными ссылками",
        blocks: [
          {
            title: "Насколько это безопасно?",
            body: "При работе с реальными локальными компаниями, естественными формулировками и ограниченным количеством партнёров обмен ссылками считается безопасной практикой. Опасность возникает только при массовом спаме и участии в ссылочных схемах.",
          },
        ],
      },
    ],
    checklist: {
      title: "Чек‑лист",
      storageKey: "articleLocalPartnerLinkExchangeChecklist",
      steps: [
        {
          id: "local-partner-link-exchange-checklist",
          title: "",
          description: "",
          items: [
            "Подберите 5–15 релевантных локальных партнёров.",
            "Определите взаимовыгодные форматы размещения ссылок.",
            "Используйте брендированные и естественные анкоры.",
            "Следите за качеством сайтов партнёров (без спама и санкций).",
            "Отслеживайте трафик, позиции и обращения, корректируя стратегию.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Link exchange with local partners: why it works, what to expect, and how to do it",
    lead: [
      "Link exchange with real local partners can be a relatively safe way to earn quality local links when it reflects genuine business relationships.",
      "When done correctly, it strengthens local signals, improves trust, and can support visibility in local search.",
    ],
    sections: [
      {
        title: "Why local businesses exchange links",
        blocks: [
          {
            title: "1. Stronger local SEO relevance",
            body: "Links from businesses in the same city help connect your site with the region, confirm real presence, and support geo-intent relevance. Search engines like to see that the business is part of the local ecosystem.",
          },
          {
            title: "2. More trust and authority",
            body: "When reputable local stores, clinics, services, or restaurants link to you, it increases trust signals for both search engines and users.",
          },
          {
            title: "3. Real customers through recommendations",
            body: "Links placed in ‘Partners’ pages, recommendation sections, city guides, or curated lists can drive warm referral leads from partner audiences.",
          },
          {
            title: "4. Stronger local collaborations",
            body: "Link exchange often leads to joint promotions, cross-marketing bundles, and deeper partnerships beyond SEO.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Higher rankings for local commercial queries.",
              "Stronger local presence supported by local references.",
              "More search and direct referral traffic from partner sites.",
              "More inquiries from a ‘pre-warmed’ partner audience.",
              "Improved brand recognition in the city.",
            ],
          },
        ],
      },
      {
        title: "How to organize link exchange correctly",
        blocks: [
          {
            title: "Step 1. Find the right partners",
            body: "Look for businesses in your city that don’t directly compete but share your audience: auto services + parts stores, dental clinics + косметology centers, fitness clubs + massage, etc.",
          },
          {
            title: "Step 2. Choose placement formats",
            body: "Use ‘Partners’ pages, ‘Recommended’ sections, blog posts, city guides, and curated resource lists. The link must look useful and natural for readers.",
          },
          {
            title: "Step 3. Use safe anchor types",
            body: "Prefer branded and natural anchors over spammy exact-match ‘buy + keyword’. The goal is to show a real business connection, not manipulation.",
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "Is it safe?",
            body: "With real local businesses, natural wording, and a limited number of partners, link exchange is generally considered a safe practice. Risk appears when you scale into spam or participate in obvious link schemes.",
          },
        ],
      },
    ],
    checklist: {
      title: "Checklist",
      storageKey: "articleLocalPartnerLinkExchangeChecklist",
      steps: [
        {
          id: "local-partner-link-exchange-checklist",
          title: "",
          description: "",
          items: [
            "Select 5–15 relevant local partners.",
            "Agree on mutually beneficial placement formats.",
            "Use branded and natural anchor text.",
            "Monitor partner site quality (no spam or penalties).",
            "Track traffic, rankings, and inquiries and adjust the strategy.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "החלפת קישורים עם שותפים מקומיים: למה זה עובד, למה לצפות ואיך עושים את זה נכון",
    lead: [
      "החלפת קישורים עם שותפים מקומיים אמיתיים יכולה להיות דרך יחסית בטוחה להשגת קישורים מקומיים-כאשר היא משקפת קשר עסקי אמיתי.",
      "כשעושים זאת נכון, זה מחזק אותות מקומיים, תומך באמון, ויכול לסייע לנראות בחיפוש מקומי.",
    ],
    sections: [
      {
        title: "למה עסקים מקומיים מחליפים קישורים",
        blocks: [
          {
            title: "1. חיזוק רלוונטיות מקומית",
            body: "קישורים מעסקים באותה עיר/אזור מחזקים את הקשר הגיאוגרפי ומאותתים על נוכחות אמיתית. מנועי חיפוש אוהבים לראות שהעסק חלק מהאקו-סיסטם המקומי.",
          },
          {
            title: "2. יותר אמון וסמכות",
            body: "כשעסקים מקומיים מוכרים-חנויות, קליניקות, שירותים, מסעדות-מקשרים אליכם, זה מחזק אמון גם אצל משתמשים וגם עבור Google.",
          },
          {
            title: "3. לקוחות דרך המלצות",
            body: "קישורים בעמודי ‘שותפים’, המלצות, מדריכים עירוניים ורשימות שירותים יכולים להביא תנועה חמה ולקוחות מהקהל של השותף.",
          },
          {
            title: "4. שיתופי פעולה חזקים יותר",
            body: "לעיתים החלפת קישורים הופכת לשיתופי פעולה: מבצעים משותפים, קרוס-מרקטינג וחבילות שירות.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "שיפור בדירוגים בביטויי מסחר מקומיים.",
              "חיזוק נוכחות מקומית דרך אזכורים מקומיים.",
              "יותר תנועה מחיפושים ומהפניות מאתרי שותפים.",
              "יותר פניות מקהל ‘מחומם’ של השותף.",
              "חיזוק מודעות למותג בעיר.",
            ],
          },
        ],
      },
      {
        title: "איך לארגן החלפת קישורים נכון",
        blocks: [
          {
            title: "שלב 1. למצוא שותפים מתאימים",
            body: "לחפש עסקים בעיר שלא מתחרים ישירות אבל עובדים עם אותו קהל: מוסך + חנות חלפים, מרפאה + קוסמטיקה, כושר + עיסוי ועוד.",
          },
          {
            title: "שלב 2. לבחור פורמט נכון",
            body: "להשתמש בעמודי ‘שותפים’, ‘מומלץ’, פוסטים בבלוג, מדריכים לעיר ורשימות משאבים. הקישור צריך להיראות מועיל וטבעי.",
          },
          {
            title: "שלב 3. תמהיל אנקורים בטוח",
            body: "להעדיף אנקורים ממותגים וטבעיים על פני התאמות מדויקות וספאמיות. המטרה היא להציג קשר עסקי אמיתי.",
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "האם זה בטוח?",
            body: "כשעובדים עם עסקים אמיתיים, ניסוח טבעי ומספר שותפים מוגבל, זו לרוב פרקטיקה בטוחה. הסיכון מתחיל כשעוברים לספאם או לסכמות קישורים.",
          },
        ],
      },
    ],
    checklist: {
      title: "צ’ק‑ליסט",
      storageKey: "articleLocalPartnerLinkExchangeChecklist",
      steps: [
        {
          id: "local-partner-link-exchange-checklist",
          title: "",
          description: "",
          items: [
            "לבחור 5–15 שותפים מקומיים רלוונטיים.",
            "להגדיר פורמטים משתלמים לשני הצדדים.",
            "להשתמש באנקורים ממותגים וטבעיים.",
            "לבדוק איכות אתרי השותפים (בלי ספאם/סנקציות).",
            "לעקוב אחרי תנועה, דירוגים ופניות ולשפר את האסטרטגיה.",
          ],
        },
      ],
    },
  },
};

export default content;
