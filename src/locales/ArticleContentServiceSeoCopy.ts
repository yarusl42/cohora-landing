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
      "Написание SEO‑текстов для страниц услуг: зачем это нужно, чего ожидать и как правильно создавать контент, который приводит клиентов",
    lead: [
      "Страницы услуг - один из ключевых элементов продвижения локального бизнеса. Несмотря на миф «никто не читает длинные тексты», поисковики продолжают активно использовать содержимое страницы, а пользователи, которым реально нужна услуга, читают и 20–30% текста, и FAQ, и блоки с выгодами. Грамотный SEO‑текст способен увеличить трафик и конверсию в несколько раз.",
    ],
    sections: [
      {
        title: "Зачем нужны SEO‑тексты для страниц услуг",
        blocks: [
          {
            title: "1. Чтобы поисковые системы понимали услугу",
            body: "Страница должна чётко показывать: что вы делаете, какие задачи закрываете, кому подходит услуга и почему выбирать вас. Короткий или размытый текст усложняет поиск релевантности для Google и Яндекса - страница просто не выходит в топ.",
          },
          {
            title: "2. Чтобы выйти в локальный топ",
            body: "Для локальных запросов важны геопривязка и локальные ключи: «ремонт холодильников в Минске», «электрик в Партизанском районе», «сантехник в Гомеле». Без таких формулировок в тексте ранжироваться сложно, даже если у вас идеальные отзывы и быстрый сайт.",
          },
          {
            title: "3. Чтобы увеличить конверсию",
            body: "SEO‑текст должен продавать: отвечать на вопросы, снимать возражения, демонстрировать опыт, объяснять выгоды и подталкивать к действию. Тогда растёт количество звонков, заявок и обращений в мессенджеры.",
          },
          {
            title: "4. Чтобы расширить семантику",
            body: "Одна страница может ранжироваться по десяткам и сотням запросов, если в тексте присутствуют LSI‑ключи, варианты услуги, связанные темы и ответы на вопросы клиентов. Поисковики любят подробные, экспертные страницы.",
          },
          {
            title: "5. Чтобы обойти конкурентов",
            body: "Во многих нишах конкуренты либо вообще не пишут текст, либо ограничиваются «500 символов ни о чём». Хороший контент даёт серьёзное конкурентное преимущество.",
          },
        ],
      },
      {
        title: "Чего ожидать после внедрения SEO‑текстов",
        blocks: [
          {
            body: [
              "Рост видимости в поиске и увеличение числа запросов в топ‑10.",
              "+30–150% трафика на странице услуги, иногда значительно больше.",
              "Рост конверсии: больше звонков, заявок и обращений в мессенджеры.",
              "Улучшение поведенческих факторов: время на странице, глубина просмотра, вовлечённость.",
              "Возможность масштабировать структуру (услуга + район, микроуслуги и пр.).",
            ],
          },
        ],
      },
      {
        title: "Алгоритм написания SEO‑текста для страницы услуги",
        blocks: [
          {
            title: "Шаг 1. Определите цель текста",
            body: "Поймите, что именно должен сделать текст: поднять позиции по ключам, объяснить суть услуги, добавить локальную релевантность, убедить выбирать вас. Ответьте, кто клиент, какие у него страхи и вопросы, и почему вы - лучший выбор.",
          },
          {
            title: "Шаг 2. Соберите семантику",
            body: "Нужны основные ключи (ядро услуги), локальные запросы (город/район), LSI‑термины, а также коммерческие хвосты: «цены», «стоимость», «под ключ», «с выездом» и т.п. Семантика задаёт каркас будущего текста.",
          },
          {
            title: "Шаг 3. Продумайте структуру",
            body: "Типовая структура: что за услуга, кому и в каких случаях нужна, как вы её выполняете, чем отличаетесь, какие гарантии, ответы на вопросы и призыв к действию. Важно разложить информацию по блокам, а не выдавать всё одним абзацем.",
          },
        ],
      },
      {
        title: "Пример структуры SEO‑текста для страницы услуги",
        blocks: [
          {
            title: "Блок 1. Заголовок и краткое УТП",
            body: "Чётко назовите услугу и добавьте выгоду/гео: «Ремонт стиральных машин в Минске с выездом за 60 минут».",
          },
          {
            title: "Блок 2. Кому подходит услуга и в каких случаях",
            body: "Опишите типичные ситуации клиента и его «боли». Это помогает пользователю узнать себя в тексте и повышает конверсию.",
          },
          {
            title: "Блок 3. Как вы решаете задачу",
            body: "Кратко опишите процесс: шаги оказания услуги, сроки, формат взаимодействия, возможные варианты.",
          },
          {
            title: "Блок 4. Преимущества и гарантии",
            body: "Чем вы отличаетесь: опыт, лицензии, оборудование, гарантия, сроки реакции, работа с отзывами и пр.",
          },
          {
            title: "Блок 5. Цены и форматы",
            body: "Укажите «от» или диапазоны, опишите, что входит в стоимость, можно ли получить расчёт или консультацию бесплатно.",
          },
          {
            title: "Блок 6. Вопросы и ответы (FAQ)",
            body: "Отвечайте на реальные вопросы клиентов: сроки, риски, подготовка, документы, гарантии, отмена/возврат.",
          },
          {
            title: "Блок 7. Призыв к действию",
            body: "Завершите сильным CTA: «Оставьте заявку», «Позвоните», «Напишите в мессенджер» с минимальным количеством полей и барьеров.",
          },
        ],
      },
      {
        title: "Практические советы и типичные ошибки",
        blocks: [
          {
            title: "Советы",
            body: [
              "Пишите человеческим языком, не жертвуя смыслом ради ключей.",
              "Разбивайте текст на блоки с подзаголовками и списками.",
              "Добавляйте локальную привязку, если услуга геозависимая.",
              "Используйте конкретику: сроки, цифры, сценарии, кейсы.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Переспам ключевыми словами и нечитаемый текст.",
              "Шаблонные «водяные» фразы без конкретики и выгод.",
              "Отсутствие призывов к действию и контактов.",
              "Полное дублирование текстов между разными услугами.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Какой объём текста оптимален для страницы услуги?",
            body: "Чаще всего хватает 2000–4000 знаков при условии, что текст структурирован, отвечает на вопросы и покрывает семантику. Не стоит гнаться за объёмом, если нечего по делу сказать.",
          },
          {
            title: "Нужно ли писать для каждой услуги уникальный текст?",
            body: "Да. Шаблоны «копия‑вставка» с заменой пары слов плохо работают и для пользователей, и для поисковиков.",
          },
        ],
      },
    ],
    checklist: {
      title: "Чек‑лист",
      storageKey: "articleServicesSeoTextsChecklist",
      steps: [
        {
          id: "services-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "Определите цель страницы и вопросы клиента.",
            "Соберите семантику: ядро, локальные и коммерческие ключи.",
            "Постройте структуру блоков и напишите текст живым языком.",
            "Добавьте локализацию (если нужно) и чёткий CTA.",
            "Отслеживайте трафик и конверсии, корректируйте текст раз в 6–12 месяцев.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "SEO copy for service pages: why it matters, what to expect, and how to create content that brings customers",
    lead: [
      "Service pages are one of the most important assets for local SEO. Despite the myth that ‘nobody reads long text,’ search engines still rely on on-page content, and high-intent users do read key sections like FAQs and benefit blocks. Strong SEO copy can increase both traffic and conversions.",
    ],
    sections: [
      {
        title: "Why service pages need SEO copy",
        blocks: [
          {
            title: "1. So search engines understand the service",
            body: "A service page should clearly explain what you do, what problems you solve, who it’s for, and why choose you. Thin or vague copy makes it harder for search engines to match the page to relevant queries.",
          },
          {
            title: "2. To rank locally",
            body: "For local queries, you need location context and local modifiers: “appliance repair in [City]”, “electrician in [Neighborhood]”, “plumber near me”. Without this, ranking can be difficult-even with great reviews and a fast site.",
          },
          {
            title: "3. To increase conversions",
            body: "SEO copy should sell: answer questions, reduce objections, show experience, explain benefits, and guide the user toward action. That leads to more calls, forms, and messages.",
          },
          {
            title: "4. To capture more keywords",
            body: "One service page can rank for dozens or hundreds of queries when it includes related terms, service variants, and real answers to customer questions. Search engines tend to prefer detailed, expert pages.",
          },
          {
            title: "5. To outperform competitors",
            body: "In many markets, competitors either publish no content or a short generic paragraph. Better content is a real competitive advantage.",
          },
        ],
      },
      {
        title: "What to expect after adding SEO copy",
        blocks: [
          {
            body: [
              "Higher visibility and more top-10 rankings.",
              "30–150% more traffic to the service page (sometimes more).",
              "Higher conversion rate: more calls, forms, and messages.",
              "Better behavioral metrics: time on page, engagement, deeper navigation.",
              "A scalable structure (service + area, micro-services, etc.).",
            ],
          },
        ],
      },
      {
        title: "A simple algorithm for writing service page SEO copy",
        blocks: [
          {
            title: "Step 1. Define the goal",
            body: "Decide what the text must achieve: improve rankings, explain the service, strengthen local relevance, and persuade users. Identify who the customer is, what they worry about, and why you’re the best choice.",
          },
          {
            title: "Step 2. Build the keyword set",
            body: "You need core service keywords, local modifiers (city/neighborhood), related terms, and commercial tails like “cost”, “pricing”, “same day”, “mobile”, etc. Keywords create the content framework.",
          },
          {
            title: "Step 3. Plan the structure",
            body: "A typical structure: service overview, use cases, process, differentiators, guarantees, FAQs, and a strong CTA. Break content into sections instead of one huge paragraph.",
          },
        ],
      },
      {
        title: "Example structure for a service page",
        blocks: [
          {
            title: "Block 1. Headline + short value proposition",
            body: "Name the service and add a benefit/location, e.g., “Washer repair in [City] - technician on-site within 60 minutes.”",
          },
          {
            title: "Block 2. Who it’s for / common scenarios",
            body: "Describe typical customer situations and pain points. This increases relevance and conversion.",
          },
          {
            title: "Block 3. How you solve it",
            body: "Explain your process: steps, timeline, formats, and options.",
          },
          {
            title: "Block 4. Benefits and guarantees",
            body: "Highlight differentiators: experience, licensing, equipment, warranty, response time, review handling, etc.",
          },
          {
            title: "Block 5. Pricing and formats",
            body: "Use “starting at” or ranges, explain what’s included, and whether there’s a free consultation or estimate.",
          },
          {
            title: "Block 6. FAQ",
            body: "Answer real questions: timing, risks, preparation, documents, warranty, cancellations/refunds.",
          },
          {
            title: "Block 7. Call to action",
            body: "Finish with a clear CTA: “Request a quote”, “Call now”, “Message us”. Keep friction low.",
          },
        ],
      },
      {
        title: "Practical tips and common mistakes",
        blocks: [
          {
            title: "Tips",
            body: [
              "Write in plain language without sacrificing meaning for keywords.",
              "Use headings, lists, and block structure.",
              "Add local context if the service is location-dependent.",
              "Use specifics: timelines, numbers, scenarios, case examples.",
            ],
          },
          {
            title: "Mistakes",
            body: [
              "Keyword stuffing and unreadable text.",
              "Generic ‘fluffy’ phrases without real value.",
              "No CTA and no contact options.",
              "Duplicating copy across different services.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "What’s the optimal content length for a service page?",
            body: "Often 300–700 words is enough if the content is structured, answers key questions, and covers the semantic intent. Don’t chase length if you don’t have useful details.",
          },
          {
            title: "Do we need unique copy for each service?",
            body: "Yes. Copy/paste templates with minor word swaps perform poorly for both users and search engines.",
          },
        ],
      },
    ],
    checklist: {
      title: "Checklist",
      storageKey: "articleServicesSeoTextsChecklist",
      steps: [
        {
          id: "services-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "Define the page goal and the customer questions.",
            "Build a keyword set: core, local, and commercial modifiers.",
            "Create a block structure and write in a human tone.",
            "Add localization (if needed) and a clear CTA.",
            "Track traffic and conversions; update the copy every 6–12 months.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "טקסט SEO לעמודי שירות: למה זה חשוב, למה לצפות ואיך ליצור תוכן שמביא לקוחות",
    lead: [
      "עמודי שירות הם אחד הנכסים המרכזיים לקידום מקומי. למרות המיתוס ש‘אף אחד לא קורא טקסט ארוך’, מנועי חיפוש עדיין מסתמכים על תוכן בעמוד, ומשתמשים עם כוונה גבוהה כן קוראים בלוקים חשובים כמו FAQ ויתרונות. טקסט SEO טוב יכול להעלות תנועה והמרות.",
    ],
    sections: [
      {
        title: "למה צריך טקסט SEO בעמודי שירות",
        blocks: [
          {
            title: "1. כדי שמנועי חיפוש יבינו את השירות",
            body: "עמוד שירות צריך להסביר בבירור מה אתם עושים, איזה בעיות אתם פותרים, למי זה מתאים ולמה לבחור בכם. טקסט קצר או כללי מדי מקשה על התאמה לשאילתות.",
          },
          {
            title: "2. כדי לדרג מקומית",
            body: "בחיפושים מקומיים חשובים הקשר גיאוגרפי ומודיפיירים: ‘תיקון מכשירי חשמל ב[עיר]’, ‘חשמלאי ב[שכונה]’, ‘אינסטלטור לידיי’. בלי הקשר כזה, קשה לדרג-even עם ביקורות מצוינות.",
          },
          {
            title: "3. כדי לשפר המרות",
            body: "טקסט SEO צריך גם ‘למכור’: לענות על שאלות, להוריד התנגדויות, להציג ניסיון, להסביר יתרונות ולהוביל לפעולה.",
          },
          {
            title: "4. כדי להרחיב סמנטיקה",
            body: "עמוד אחד יכול לדרג בעשרות/מאות ביטויים אם הוא כולל מונחים קשורים, וריאציות שירות ותשובות אמיתיות לשאלות לקוחות.",
          },
          {
            title: "5. כדי לעקוף מתחרים",
            body: "בשווקים רבים מתחרים מפרסמים טקסט מינימלי או כללי. תוכן איכותי הוא יתרון תחרותי.",
          },
        ],
      },
      {
        title: "למה לצפות אחרי הוספת טקסט SEO",
        blocks: [
          {
            body: [
              "יותר נראות ויותר ביטויים בטופ 10.",
              "עלייה של 30%–150% בתנועה לעמוד (ולפעמים יותר).",
              "יותר המרות: שיחות, טפסים והודעות.",
              "שיפור מדדי התנהגות: זמן בעמוד, מעורבות, גלישה עמוקה.",
              "אפשרות לסקייל: שירות + אזור, מיקרו‑שירותים ועוד.",
            ],
          },
        ],
      },
      {
        title: "אלגוריתם פשוט לכתיבת טקסט SEO לעמוד שירות",
        blocks: [
          {
            title: "שלב 1. להגדיר מטרה",
            body: "להחליט מה הטקסט צריך להשיג: דירוגים, הסבר השירות, רלוונטיות מקומית ושכנוע. להבין מי הלקוח, מה החששות שלו ולמה אתם הבחירה הנכונה.",
          },
          {
            title: "שלב 2. לבנות סט מילות מפתח",
            body: "צריך מילות ליבה, מודיפיירים מקומיים (עיר/שכונה), מונחים קשורים וזנבות מסחריים כמו ‘מחיר’, ‘עלות’, ‘דחוף’, ‘באותו יום’ ועוד.",
          },
          {
            title: "שלב 3. לתכנן מבנה",
            body: "מבנה טיפוסי: תקציר שירות, מקרים נפוצים, תהליך, בידול/אחריות, FAQ ו‑CTA. לפרק לבלוקים במקום פסקה אחת ארוכה.",
          },
        ],
      },
      {
        title: "דוגמה למבנה עמוד שירות",
        blocks: [
          {
            title: "בלוק 1. כותרת + הצעת ערך קצרה",
            body: "לציין את השירות ולהוסיף יתרון/מיקום, למשל: ‘תיקון מכונת כביסה ב[עיר] - טכנאי אצלכם תוך 60 דקות’.",
          },
          {
            title: "בלוק 2. למי זה מתאים / תרחישים",
            body: "לתאר מצבים נפוצים וכאבים של הלקוח. זה מעלה רלוונטיות והמרות.",
          },
          {
            title: "בלוק 3. איך פותרים",
            body: "לתאר תהליך: שלבים, זמן, פורמטים ואפשרויות.",
          },
          {
            title: "בלוק 4. יתרונות ואחריות",
            body: "להציג בידול: ניסיון, הסמכות, ציוד, אחריות, זמן תגובה ועוד.",
          },
          {
            title: "בלוק 5. מחיר ומסלולים",
            body: "להציג ‘החל מ’/טווחים, מה כלול, והאם יש ייעוץ/הצעת מחיר חינם.",
          },
          {
            title: "בלוק 6. FAQ",
            body: "לענות על שאלות אמיתיות: זמן, סיכונים, הכנה, מסמכים, אחריות, ביטול/החזר.",
          },
          {
            title: "בלוק 7. קריאה לפעולה",
            body: "לסיים ב‑CTA ברור: ‘בקשת הצעת מחיר’, ‘התקשרו עכשיו’, ‘שלחו הודעה’. להקטין חיכוך.",
          },
        ],
      },
      {
        title: "טיפים וטעויות נפוצות",
        blocks: [
          {
            title: "טיפים",
            body: [
              "לכתוב ברור ופשוט בלי לוותר על ערך לטובת מילות מפתח.",
              "להשתמש בכותרות, רשימות ובלוקים.",
              "להוסיף הקשר מקומי אם השירות תלוי‑מיקום.",
              "להוסיף ספציפיות: זמנים, מספרים, תרחישים, קייסים.",
            ],
          },
          {
            title: "טעויות",
            body: [
              "דחיסת מילות מפתח וטקסט לא קריא.",
              "משפטים כלליים בלי ערך.",
              "אין CTA ואין דרכי קשר.",
              "שכפול טקסט בין שירותים שונים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "מה אורך טקסט מומלץ לעמוד שירות?",
            body: "בדרך כלל מספיק טקסט בינוני באורך אם הוא מובנה, עונה על שאלות ומכסה כוונה סמנטית. לא לרדוף אחרי אורך אם אין מה להוסיף.",
          },
          {
            title: "האם צריך טקסט ייחודי לכל שירות?",
            body: "כן. תבניות ‘העתק‑הדבק’ עם שינוי מינימלי לא עובדות טוב למשתמשים ול‑SEO.",
          },
        ],
      },
    ],
    checklist: {
      title: "צ’ק‑ליסט",
      storageKey: "articleServicesSeoTextsChecklist",
      steps: [
        {
          id: "services-seo-texts-checklist",
          title: "",
          description: "",
          items: [
            "להגדיר מטרת עמוד ושאלות לקוח.",
            "לאסוף סמנטיקה: ליבה, מקומית ומסחרית.",
            "לבנות מבנה בלוקים ולכתוב בטון אנושי.",
            "להוסיף לוקליזציה (אם צריך) ו‑CTA ברור.",
            "לעקוב אחרי תנועה והמרות ולעדכן כל 6–12 חודשים.",
          ],
        },
      ],
    },
  },
};

export default content;
