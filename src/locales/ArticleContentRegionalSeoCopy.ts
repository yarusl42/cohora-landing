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
      "Написание SEO‑текстов для страниц регионов: зачем это нужно, чего ожидать и как правильно делать",
    lead: [
      "Страницы регионов - один из самых мощных инструментов продвижения в геозависимых нишах. Если вы работаете в нескольких городах или регионах, качественные SEO‑тексты под каждый город помогают усиливать видимость, приводить целевой трафик и повышать конверсию.",
    ],
    sections: [
      {
        title: "Зачем нужны SEO‑тексты для региональных страниц",
        blocks: [
          {
            title: "1. Продвижение по геозависимым запросам",
            body: "Большинство пользователей ищут услуги с указанием города: «ремонт ноутбуков Минск», «стоматология Брест», «веб‑студия Гродно». Без отдельной страницы под город сайт проигрывает в релевантности и уступает конкурентам, у которых такая страница есть.",
          },
          {
            title: "2. Каждый регион - отдельный источник трафика",
            body: "Страницы /minsk, /grodno, /brest и т.д. могут ранжироваться по сотням локальных запросов - коммерческих, брендовых, информационных, mixed intent. Чем лучше текст, тем больше стабильного органического трафика без рекламы.",
          },
          {
            title: "3. Повышение доверия локальных пользователей",
            body: "Упоминание города, особенностей рынка и преимуществ именно для местных клиентов формирует ощущение близости и персонализации. Пользователь быстрее решается на контакт, видя, что компания реально работает в его регионе.",
          },
          {
            title: "4. Локализация как сигнал для поисковиков",
            body: "Google и Яндекс любят страницы, явно релевантные региональному запросу. Попытки «продвигать все города одной страницей» чаще всего проваливаются. Отдельные региональные страницы усиливают релевантность и структурируют сайт.",
          },
          {
            title: "5. Точный таргетинг под разные условия",
            body: "В разных городах могут отличаться услуги, цены, сроки, логистика. Региональные тексты позволяют адаптировать оффер под конкретный город и использовать местные триггеры.",
          },
        ],
      },
      {
        title: "Чего ожидать от региональных SEO‑текстов",
        blocks: [
          {
            body: [
              "Рост позиций по локальным запросам на 20–70% в течение 3–12 недель.",
              "Увеличение локального трафика (иногда 200–2000 переходов в месяц с одной страницы).",
              "Рост числа обращений из конкретного города за счёт доверия и релевантности.",
              "Укрепление внутренней SEO‑архитектуры через цепочку «главная → регионы → услуги в регионах».",
            ],
          },
        ],
      },
      {
        title: "Как писать SEO‑тексты для региональных страниц",
        blocks: [
          {
            title: "1. Город в заголовке",
            body: "Включайте название города в H1: «Услуги <тематика> в <городе>» или «<услуга> в <городе> под ключ». Это сразу даёт сигнал пользователю и поисковику.",
          },
          {
            title: "2. Естественное упоминание города в первом абзаце",
            body: "В первых 150–200 символах обязательно укажите город и суть услуги, но без искусственного нагромождения ключей. Пример: «Мы помогаем компаниям в Минске продвигаться в Google, Яндекс и картах, привлекая локальных клиентов…»",
          },
          {
            title: "3. Структурированный SEO‑текст",
            body: "Текст для региональной страницы можно выстроить по блокам: краткое описание услуги в городе, преимущества именно для этого региона, список услуг, кейсы или отзывы по городу, логистика/зона обслуживания, призыв к действию.",
          },
          {
            title: "4. Учитывайте особенности города",
            body: "Упомяните районы, популярные транспортные узлы, специфику аудитории. Например, для Минска важны районы Центральный, Советский, Партизанский, станции метро, микрорайоны. Для Гомеля - Центральный, Советский, Железнодорожный районы. Главное - не превращать текст в набор клише и не копировать один и тот же шаблон просто с заменой названия города.",
          },
          {
            title: "5. Связь с другими страницами",
            body: "Региональные страницы должны ссылаться на ключевые услуги и, при необходимости, на локальные лендинги («услуга в <городе>»), а также на главную и блог. Это формирует понятную карту сайта.",
          },
        ],
      },
      {
        title: "Практические советы и ошибки",
        blocks: [
          {
            title: "Советы",
            body: [
              "Делайте уникальный текст для каждого города, а не массовый копипаст с заменой названия.",
              "Разбавляйте ключевые слова естественными формулировками, не гонитесь за плотностью.",
              "Добавляйте реальные кейсы и отзывы по конкретному региону, если они есть.",
              "Используйте списки услуг и блок преимуществ, адаптированных под локальные задачи.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Одинаковые тексты для всех городов с заменой только топонима.",
              "Переспам города в каждом предложении.",
              "Отсутствие реальных преимуществ и конкретики по региону.",
              "Отсутствие CTA и контактов на странице.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист",
        blocks: [
          {
            title: "Сколько страниц регионов создавать?",
            body: "Стартуйте с ключевых городов, где у вас уже есть спрос или филиалы. Далее добавляйте страницы по мере расширения географии, чтобы не плодить пустые разделы.",
          },
          {
            title: "Какой объём текста оптимален?",
            body: "Важно не количество знаков, а насыщенность смыслами и структурой. Часто достаточно 2000–4000 знаков при условии, что текст отвечает на ключевые вопросы и даёт поисковику и пользователю всё необходимое.",
          },
        ],
      },
    ],
    checklist: {
      title: "Чек‑лист",
      storageKey: "articleRegionsSeoTextsChecklist",
      steps: [
        {
          id: "regions-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "Добавьте город в H1 и первые абзацы.",
            "Сделайте уникальный текст под каждый регион.",
            "Опишите услуги, преимущества и кейсы с учётом города.",
            "Свяжите страницу с главной, услугами и, при необходимости, с локальными лендингами.",
            "Отслеживайте трафик, позиции и конверсии по каждому региону.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "SEO copy for regional pages: why it matters, what to expect, and how to do it right",
    lead: [
      "Regional (city) pages are one of the strongest growth levers in location-dependent industries. If you serve multiple cities or areas, high-quality SEO copy for each location can increase visibility, attract qualified traffic, and improve conversion rates.",
    ],
    sections: [
      {
        title: "Why regional SEO copy matters",
        blocks: [
          {
            title: "1. Ranking for geo-intent queries",
            body: "Most people search with a city included: “laptop repair Austin”, “dentist Miami”, “web design Denver”. Without a dedicated city page, you’re less relevant than competitors who have one.",
          },
          {
            title: "2. Each location becomes its own traffic source",
            body: "Pages like /austin, /denver, /miami can rank for hundreds of queries-commercial, branded, informational, and mixed intent. Better copy means more stable organic traffic without extra ad spend.",
          },
          {
            title: "3. Higher trust for local users",
            body: "Mentioning the city, local context, and benefits for residents creates a sense of personalization. Users convert faster when it’s clear you truly operate in their area.",
          },
          {
            title: "4. Localization is a ranking signal",
            body: "Search engines reward pages that clearly match a specific location intent. Trying to rank all cities with one generic page often fails. Separate pages improve relevance and strengthen site architecture.",
          },
          {
            title: "5. Better targeting for different conditions",
            body: "Services, pricing, response times, and logistics can differ by city. Regional copy lets you tailor the offer and use location-specific triggers.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "20–70% improvement in local keyword rankings within ~3–12 weeks.",
              "More local organic traffic (often 200–2,000 visits/month from a single page in the right market).",
              "More inquiries from each city due to higher relevance and trust.",
              "Stronger internal SEO architecture: “homepage → locations → services in locations”.",
            ],
          },
        ],
      },
      {
        title: "How to write SEO copy for regional pages",
        blocks: [
          {
            title: "1. Put the city in the headline",
            body: "Include the city in H1: “<Service> in <City>” or “<Category> services in <City>”. This is an immediate relevance signal.",
          },
          {
            title: "2. Mention the city naturally in the first paragraph",
            body: "Within the first 150–200 characters, include the city and the service without stuffing. Example: “We help businesses in Austin get more customers from Google Search and Google Maps…”",
          },
          {
            title: "3. Use a clear structure",
            body: "A strong regional page can follow this structure: service overview for the city, city-specific benefits, list of services, local cases/reviews, service area/logistics, and a clear CTA.",
          },
          {
            title: "4. Add real local context",
            body: "Mention neighborhoods, landmarks, and local conditions. For example: key neighborhoods, common commute patterns, typical building types, or seasonal factors. The key is to avoid a template where you only swap the city name.",
          },
          {
            title: "5. Link to related pages",
            body: "Regional pages should link to core service pages and (if needed) city-specific service landing pages, plus the homepage and blog. This creates a clear internal map for users and crawlers.",
          },
        ],
      },
      {
        title: "Practical tips and mistakes",
        blocks: [
          {
            title: "Tips",
            body: [
              "Write unique copy for each city-don’t mass-duplicate with only the location swapped.",
              "Use natural language; don’t chase keyword density.",
              "Add real local case studies and reviews when available.",
              "Use service lists and benefit blocks tailored to local needs.",
            ],
          },
          {
            title: "Mistakes",
            body: [
              "Same text for all cities with only the city name changed.",
              "Stuffing the city name in every sentence.",
              "No specific value or local detail.",
              "No CTA and no contact options on the page.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "How many location pages should we create?",
            body: "Start with the cities where you already have demand or coverage. Add more locations as you expand-avoid creating empty pages with no real offer or proof.",
          },
          {
            title: "What’s the optimal content length?",
            body: "Length matters less than usefulness and structure. Often ~300–700 words is enough if the page answers key questions and provides clear local relevance.",
          },
        ],
      },
    ],
    checklist: {
      title: "Checklist",
      storageKey: "articleRegionsSeoTextsChecklist",
      steps: [
        {
          id: "regions-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "Add the city to H1 and the first paragraphs.",
            "Write unique copy for each location.",
            "Describe services, benefits, and case studies with the city in mind.",
            "Link the page to the homepage, services, and (if needed) city service landing pages.",
            "Track traffic, rankings, and conversions per location.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "טקסט SEO לעמודי אזורים/ערים: למה זה חשוב, למה לצפות ואיך עושים נכון",
    lead: [
      "עמודי אזור/עיר הם אחד ממנופי הצמיחה החזקים ביותר בתחומים תלויי‑מיקום. אם אתם נותנים שירות במספר ערים או אזורים, טקסט SEO איכותי לכל עיר יכול לשפר נראות, להביא תנועה מדויקת ולהעלות המרות.",
    ],
    sections: [
      {
        title: "למה טקסט SEO לעמודי ערים חשוב",
        blocks: [
          {
            title: "1. קידום בביטויים עם כוונה גיאוגרפית",
            body: "רוב המשתמשים מחפשים שירות יחד עם שם עיר: ‘תיקון מחשבים תל אביב’, ‘רופא שיניים חיפה’, ‘בניית אתרים ראשון לציון’. בלי עמוד ייעודי לעיר אתם פחות רלוונטיים ממתחרים שיש להם עמוד כזה.",
          },
          {
            title: "2. כל עיר היא מקור תנועה בפני עצמו",
            body: "עמודים כמו /tel-aviv, /haifa, /jerusalem יכולים לדרג על מאות ביטויים-מסחריים, מותגיים, מידעיים ומעורבים. ככל שהטקסט טוב יותר, כך יותר תנועה אורגנית יציבה בלי להגדיל תקציב.",
          },
          {
            title: "3. יותר אמון לתושבים מקומיים",
            body: "אזכור העיר, ההקשר המקומי והיתרונות לתושבים יוצר תחושת התאמה אישית. משתמשים פונים מהר יותר כשהם רואים שאתם באמת עובדים באזור שלהם.",
          },
          {
            title: "4. לוקליזציה היא סיגנל לדירוג",
            body: "מנועי חיפוש מעדיפים עמודים שמותאמים בבירור לכוונת מיקום. ניסיון ‘לקדם את כל הערים בעמוד אחד’ לרוב לא עובד. עמודים נפרדים מחזקים רלוונטיות ומבנה אתר.",
          },
          {
            title: "5. התאמה לתנאים שונים בכל עיר",
            body: "בין ערים יכולות להיות שונות בשירותים, מחירים, זמני תגובה ולוגיסטיקה. טקסט מקומי מאפשר להתאים הצעה ולהשתמש בטריגרים מקומיים.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "שיפור של כ‑20%–70% במיקומים בביטויים מקומיים בתוך 3–12 שבועות.",
              "עלייה בתנועה מקומית אורגנית (לעיתים 200–2,000 כניסות בחודש מעמוד אחד).",
              "יותר פניות מכל עיר בזכות רלוונטיות ואמון.",
              "חיזוק ארכיטקטורת SEO פנימית: ‘עמוד בית → ערים → שירותים בערים’.",
            ],
          },
        ],
      },
      {
        title: "איך לכתוב טקסט SEO לעמודי ערים",
        blocks: [
          {
            title: "1. עיר בכותרת",
            body: "לשלב את שם העיר ב‑H1: ‘<שירות> ב<עיר>’ או ‘שירותי <קטגוריה> ב<עיר>’. זה סיגנל מיידי לרלוונטיות.",
          },
          {
            title: "2. אזכור טבעי בפסקה הראשונה",
            body: "ב‑150–200 התווים הראשונים לציין את העיר ואת השירות בלי דחיסת מילות מפתח. למשל: ‘אנחנו עוזרים לעסקים בתל אביב להביא לקוחות מ‑Google Search ומ‑Google Maps…’",
          },
          {
            title: "3. מבנה ברור לטקסט",
            body: "מבנה מומלץ: תקציר השירות בעיר, יתרונות ספציפיים לעיר, רשימת שירותים, קייסים/ביקורות מקומיות, אזור שירות/לוגיסטיקה, ו‑CTA ברור.",
          },
          {
            title: "4. הקשר מקומי אמיתי",
            body: "להזכיר שכונות, נקודות ציון ותנאים מקומיים-אבל לא לעבוד עם תבנית שבה רק מחליפים את שם העיר. להוסיף פרטים אמיתיים שמבדילים בין אזורים.",
          },
          {
            title: "5. קישורים לעמודים קשורים",
            body: "עמודי עיר צריכים לקשר לעמודי שירות מרכזיים, ולעיתים גם לעמודי שירות ספציפיים לעיר, וגם לעמוד הבית ולבלוג. זה מייצר מבנה פנימי ברור למשתמשים ולסריקה.",
          },
        ],
      },
      {
        title: "טיפים וטעויות נפוצות",
        blocks: [
          {
            title: "טיפים",
            body: [
              "לכתוב טקסט ייחודי לכל עיר-לא להעתיק ולשנות רק שם מקום.",
              "לשלב מילות מפתח בצורה טבעית.",
              "להוסיף קייסים וביקורות מקומיות כשיש.",
              "להציג יתרונות ושירותים שמתאימים לקהל המקומי.",
            ],
          },
          {
            title: "טעויות",
            body: [
              "אותו טקסט לכל הערים עם שינוי רק בשם העיר.",
              "דחיסת שם העיר בכל משפט.",
              "אין יתרונות אמיתיים ואין פרטים מקומיים.",
              "אין קריאה לפעולה (CTA) ואין דרכי יצירת קשר בעמוד.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "כמה עמודי ערים ליצור?",
            body: "להתחיל בערים שבהן יש לכם ביקוש או כיסוי בפועל. להוסיף ערים בהמשך תוך הימנעות מעמודים ‘ריקים’ בלי הצעה אמיתית.",
          },
          {
            title: "מה אורך הטקסט האופטימלי?",
            body: "העיקר הוא לא מספר המילים אלא ערך ומבנה. לרוב מספיק טקסט בינוני באורך, כל עוד הוא עונה על שאלות מפתח ומציג רלוונטיות מקומית.",
          },
        ],
      },
    ],
    checklist: {
      title: "צ’ק‑ליסט",
      storageKey: "articleRegionsSeoTextsChecklist",
      steps: [
        {
          id: "regions-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "להוסיף את העיר ל‑H1 ולפסקאות הראשונות.",
            "לכתוב טקסט ייחודי לכל אזור/עיר.",
            "לתאר שירותים, יתרונות וקייסים בהתאם לעיר.",
            "לקשר לעמוד הבית, לעמודי שירות ולעמודי שירות לעיר (אם צריך).",
            "לעקוב אחרי תנועה, דירוגים והמרות לכל עיר.",
          ],
        },
      ],
    },
  },
};

export default content;
