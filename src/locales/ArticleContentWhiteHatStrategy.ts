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
      "Стратегия построения белого ссылочного профиля (Linkbuilding): как сформировать мощный, безопасный и естественный ссылочный профиль",
    lead: [
      "Белый линкбилдинг и стратегия построения ссылочного профиля для белорусского бизнеса - это одно из ключевых направлений локального SEO в Минске, Бресте, Гомеле и других городах Беларуси.",
      "Правильно построенная ссылочная стратегия помогает повысить доверие Google и Яндекса, улучшить позиции в локальном поиске и привлечь больше местных клиентов.",
    ],
    sections: [
      {
        title: "1. Что такое белые ссылки и почему они важны",
        blocks: [
          {
            title: "Белые ссылки",
            body: "Белые ссылки - это естественные ссылки с авторитетных, тематических ресурсов, которые ставятся вручную и органично вписываются в контент. Они безопасны, приносят трафик и формируют доверие поисковых систем.",
          },
          {
            title: "Отличия от серых и чёрных ссылок",
            body: "Серые и чёрные схемы (массовый покупной спам, автоматические прогоны) несут высокий риск фильтров и сегодня дают краткосрочный эффект. Белый линкбилдинг, напротив, строится на работе с качественными площадками и даёт долгосрочный устойчивый результат.",
          },
        ],
      },
      {
        title: "2. Зачем сайту нужен качественный ссылочный профиль",
        blocks: [
          {
            body: [
              "Повышение доверия (trust) со стороны Google и Яндекса.",
              "Рост позиций по конкурентным ключевым запросам.",
              "Ускорение индексации новых страниц.",
              "Приток переходного трафика с тематических ресурсов.",
              "Узнаваемость бренда через упоминания на отраслевых площадках.",
              "Усиление коммерческих страниц (услуги, категории, товары).",
            ],
          },
        ],
      },
      {
        title: "3. Как выстроить белую ссылочную стратегию",
        blocks: [
          {
            title: "Этап 1. Аудит текущего ссылочного профиля",
            body: "Сначала анализируются объём ссылок, качество доноров, распределение анкоров, возраст доменов, динамика прироста и наличие токсичных источников. На основе аудита формируется план: какие типы ссылок нужны, сколько и с каких площадок.",
          },
          {
            title: "Этап 2. Очистка и оздоровление профиля",
            body: "Токсичные и спамные ссылки по возможности удаляются или отправляются в disavow. Это снижает риски санкций и освобождает пространство для здорового роста ссылочного профиля.",
          },
          {
            title: "Этап 3. Подбор качественных доноров",
            body: "Доноры подбираются вручную по тематике, возрасту домена, посещаемости, индексации и отсутствию санкций. Используются только живые сайты с реальной аудиторией и качественным контентом.",
          },
        ],
      },
      {
        title: "4. Методы белого линкбилдинга",
        blocks: [
          {
            title: "Гостевые статьи (Guest Posting)",
            body: "Подготовка экспертных материалов и их размещение на тематических ресурсах. Даёт естественные ссылки в теле статьи, формирует статус эксперта и приносит дополнительный трафик.",
          },
          {
            title: "Партнёрские ссылки",
            body: "Упоминания и ссылки от партнёров, поставщиков, клиентов, ассоциаций и отраслевых объединений. Это один из самых естественных и надёжных типов ссылок.",
          },
          {
            title: "Контент‑маркетинг и СМИ",
            body: "Публикация исследований, кейсов, экспертных комментариев и пресс‑релизов, которые подхватывают медиа и блогеры, ставя ссылки на первоисточник.",
          },
        ],
      },
      {
        title: "5. Безопасность и естественность ссылочного профиля",
        blocks: [
          {
            body: [
              "Плавная динамика роста ссылок без резких всплесков.",
              "Разнообразие доноров и типов ссылок (статьи, обзоры, каталоги, партнёры).",
              "Естественное распределение анкоров: бренд, URL, частичные вхождения.",
              "Отказ от спамных сеток, автоматических прогонов и массовых покупок.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Через сколько виден эффект?",
            body: "При аккуратном белом линкбилдинге первые сдвиги по позициям обычно заметны через 1–3 месяца, устойчивый рост - в горизонте 3–9 месяцев, в зависимости от ниши и конкуренции.",
          },
        ],
      },
    ],
    checklist: {
      title: "Чек‑лист",
      storageKey: "articleWhiteLinkbuildingChecklist",
      steps: [
        {
          id: "white-linkbuilding-checklist",
          title: "",
          description: "",
          items: [
            "Проведите аудит текущего ссылочного профиля.",
            "Очистите токсичные и спамные ссылки.",
            "Сформируйте стратегию: типы ссылок, темпы роста, приоритетные страницы.",
            "Подберите качественных доноров и запустите гостевые и партнёрские размещения.",
            "Отслеживайте динамику ссылок, позиций и трафика, корректируйте стратегию.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "White-hat link building strategy: how to build a powerful, safe, and natural backlink profile",
    lead: [
      "A white-hat link building strategy is one of the core directions of sustainable SEO and long-term growth.",
      "A well-structured approach helps increase trust, improve rankings, and bring more qualified traffic without risking penalties.",
    ],
    sections: [
      {
        title: "1. What white-hat links are and why they matter",
        blocks: [
          {
            title: "White-hat links",
            body: "White-hat links are natural links from reputable, relevant websites. They are placed editorially and fit the content context. They are safer, can drive referral traffic, and build search engine trust.",
          },
          {
            title: "How they differ from gray/black tactics",
            body: "Gray and black schemes (bulk paid spam, automated blasts) carry a high risk of filters and usually give only short-term gains. White-hat link building focuses on quality placements and supports stable, long-term results.",
          },
        ],
      },
      {
        title: "2. Why your site needs a quality backlink profile",
        blocks: [
          {
            body: [
              "Higher trust signals for Google.",
              "Better rankings for competitive keywords.",
              "Faster indexing of new pages.",
              "More referral traffic from relevant sources.",
              "Brand awareness through mentions on industry platforms.",
              "Stronger commercial pages (services, categories, products).",
            ],
          },
        ],
      },
      {
        title: "3. How to build a white-hat strategy",
        blocks: [
          {
            title: "Stage 1. Audit your current backlink profile",
            body: "Analyze link volume, donor quality, anchor distribution, domain age, growth dynamics, and toxic sources. Based on the audit, create a plan: what link types you need, how many, and from which sites.",
          },
          {
            title: "Stage 2. Cleanup and profile health",
            body: "Remove toxic/spam links when possible or submit them via disavow. This reduces penalty risk and makes room for healthy growth.",
          },
          {
            title: "Stage 3. Select quality donors",
            body: "Choose donors manually by relevance, domain age, traffic, indexation, and the absence of penalties. Focus on real sites with real audiences and strong content.",
          },
        ],
      },
      {
        title: "4. White-hat link building methods",
        blocks: [
          {
            title: "Guest posting",
            body: "Create expert content and publish it on relevant sites. This can earn contextual links, build authority, and bring referral traffic.",
          },
          {
            title: "Partner links",
            body: "Mentions and links from partners, suppliers, clients, associations, and industry groups. One of the most natural and reliable link types.",
          },
          {
            title: "Content marketing and media",
            body: "Publish research, case studies, expert comments, and press releases that media and bloggers cite, linking back to the source.",
          },
        ],
      },
      {
        title: "5. Safety and naturalness",
        blocks: [
          {
            body: [
              "Smooth link growth without sharp spikes.",
              "Diversity of donors and formats (articles, reviews, directories, partners).",
              "Natural anchor mix: brand, URL, partial matches.",
              "Avoid spam networks, automated blasts, and mass link buying.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "When will you see results?",
            body: "With careful white-hat link building, first ranking movements are often visible within 1–3 months. Stable growth typically takes 3–9 months depending on the niche and competition.",
          },
        ],
      },
    ],
    checklist: {
      title: "Checklist",
      storageKey: "articleWhiteLinkbuildingChecklist",
      steps: [
        {
          id: "white-linkbuilding-checklist",
          title: "",
          description: "",
          items: [
            "Audit your current backlink profile.",
            "Remove or disavow toxic and spam links.",
            "Define the strategy: link types, growth pace, priority pages.",
            "Select quality donors and start guest/partner placements.",
            "Track links, rankings, and traffic and adjust the strategy.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "אסטרטגיית לינקבילדינג White Hat: איך לבנות פרופיל קישורים חזק, בטוח וטבעי",
    lead: [
      "אסטרטגיית לינקבילדינג בגישה White Hat היא אחד המרכיבים המרכזיים ב‑SEO יציב וצמיחה לטווח ארוך.",
      "גישה מסודרת מחזקת אמון, משפרת דירוגים ומביאה תנועה איכותית-בלי לקחת סיכונים מיותרים.",
    ],
    sections: [
      {
        title: "1. מה הם קישורי White Hat ולמה הם חשובים",
        blocks: [
          {
            title: "קישורי White Hat",
            body: "קישורי White Hat הם קישורים טבעיים מאתרים אמינים ורלוונטיים, שמופיעים באופן עריכתי ומשתלבים בהקשר התוכן. הם בטוחים יותר, יכולים להביא טראפיק והם מחזקים אותות אמון.",
          },
          {
            title: "הבדל לעומת שיטות Gray/Black",
            body: "שיטות אפורות ושחורות (ספאם בכמויות, אוטומציות) נושאות סיכון גבוה לפילטרים ולרוב נותנות תוצאה קצרה. White Hat מתמקד באיכות ובונה תוצאה יציבה לטווח ארוך.",
          },
        ],
      },
      {
        title: "2. למה האתר צריך פרופיל קישורים איכותי",
        blocks: [
          {
            body: [
              "יותר אמון מצד Google.",
              "דירוגים טובים יותר בביטויים תחרותיים.",
              "אינדוקס מהיר יותר של עמודים חדשים.",
              "יותר תנועה מהפניות מאתרים רלוונטיים.",
              "מודעות למותג דרך אזכורים בפלטפורמות ענפיות.",
              "חיזוק עמודים מסחריים (שירותים/קטגוריות/מוצרים).",
            ],
          },
        ],
      },
      {
        title: "3. איך לבנות אסטרטגיית White Hat",
        blocks: [
          {
            title: "שלב 1. לבצע אודיט לפרופיל הקישורים הקיים",
            body: "לנתח כמות קישורים, איכות דומיינים, חלוקת אנקורים, גיל דומיינים, קצב צמיחה ומקורות רעילים. לפי האודיט בונים תוכנית: אילו סוגי קישורים צריך, כמה ומאילו אתרים.",
          },
          {
            title: "שלב 2. ניקוי ושיקום",
            body: "להסיר קישורים רעילים/ספאמיים כשאפשר או לבצע disavow. זה מפחית סיכוני סנקציות ומאפשר צמיחה בריאה.",
          },
          {
            title: "שלב 3. לבחור אתרים איכותיים",
            body: "לבחור אתרים לפי רלוונטיות, גיל דומיין, טראפיק, אינדוקס והיעדר סנקציות. להתמקד באתרים חיים עם קהל אמיתי ותוכן איכותי.",
          },
        ],
      },
      {
        title: "4. שיטות לינקבילדינג White Hat",
        blocks: [
          {
            title: "Guest Posting",
            body: "יצירת תוכן מומחה ופרסומו באתרים רלוונטיים. מאפשר קישורים בהקשר, בניית סמכות והפניות.",
          },
          {
            title: "קישורי שותפים",
            body: "אזכורים וקישורים משותפים, ספקים, לקוחות, עמותות ואיגודים מקצועיים. זה מהסוגים הטבעיים והאמינים ביותר.",
          },
          {
            title: "שיווק תוכן ומדיה",
            body: "מחקרים, קייסים, תגובות מומחה והודעות לעיתונות שמדיה ובלוגרים מצטטים-עם קישור למקור.",
          },
        ],
      },
      {
        title: "5. בטיחות וטבעיות בפרופיל הקישורים",
        blocks: [
          {
            body: [
              "צמיחה הדרגתית בלי קפיצות חדות.",
              "גיוון דונורים וסוגי קישורים (מאמרים, סקירות, מדריכים, שותפים).",
              "תמהיל אנקורים טבעי: מותג, URL, התאמות חלקיות.",
              "להימנע מרשתות ספאם, אוטומציות ורכישות המוניות.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "בלינקבילדינג White Hat מדויק, שינויים ראשונים בדירוגים יכולים להופיע אחרי 1–3 חודשים. צמיחה יציבה בדרך כלל לוקחת 3–9 חודשים בהתאם לתחרות.",
          },
        ],
      },
    ],
    checklist: {
      title: "צ’ק‑ליסט",
      storageKey: "articleWhiteLinkbuildingChecklist",
      steps: [
        {
          id: "white-linkbuilding-checklist",
          title: "",
          description: "",
          items: [
            "לבצע אודיט לפרופיל הקישורים הקיים.",
            "להסיר/לנטרל קישורים רעילים וספאמיים (כולל disavow במידת הצורך).",
            "להגדיר אסטרטגיה: סוגי קישורים, קצב צמיחה, עמודים בעדיפות.",
            "לבחור אתרים איכותיים ולהתחיל פרסומי אורח/שותפים.",
            "לעקוב אחרי קישורים, דירוגים וטראפיק ולשפר את התוכנית.",
          ],
        },
      ],
    },
  },
};

export default content;
