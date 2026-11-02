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
      "Создание и продвижение локальных кейсов: как превращать проекты в клиентов",
    lead: [
      "Локальные кейсы - один из самых сильных инструментов продвижения для бизнеса, который работает в пределах конкретного города или района. Это не просто истории выполненных работ, а реальные доказательства качества, опыта и компетентности компании. Грамотно оформленные кейсы повышают доверие, улучшают конверсию, усиливают позиции сайта в локальном SEO и помогают выделиться среди конкурентов, ограничивающихся сухим описанием услуг.",
    ],
    sections: [
      {
        title: "Зачем бизнесу создавать локальные кейсы",
        blocks: [
          {
            title: "1. Доказательство экспертности",
            body: "Услуги сами по себе - это обещание. Кейс - подтверждение того, что вы действительно умеете решать задачи клиентов. Реальные фото, детали проекта, сроки, результаты и отзыв повышают доверие в разы.",
          },
          {
            title: "2. Социальное доказательство для локальной аудитории",
            body: "Люди особенно доверяют опыту других людей из своего города/района. Локальные кейсы показывают, что вы уже работали в этой локации и понимаете её особенности. Формулировки вроде «ремонт квартиры в ЖК «Минск Мир» (Минск)» или «лечение кариеса у пациента из Партизанского района» создают ощущение близости и надёжности.",
          },
          {
            title: "3. Сильный локальный SEO‑эффект",
            body: "Каждый кейс при правильном оформлении может приносить трафик. В тексте можно естественно использовать название города, района, жилого комплекса и ориентиров. Например, «установка кондиционера в ЖК «Маяк Минска» (Минск)» может собирать запросы вида «кондиционер ЖК Маяк Минска» и «установка кондиционера Минск».",
          },
          {
            title: "4. Рост конверсии на сайте",
            body: "Сомневающийся пользователь часто принимает решение после просмотра кейсов. Они снимают возражения, показывают реальную стоимость и сроки, создают ощущение прозрачности и предсказуемости. Компании, которые активно публикуют кейсы, нередко получают в 2–3 раза больше заявок при том же трафике.",
          },
          {
            title: "5. Отличие от конкурентов",
            body: "Многие локальные бизнесы ограничиваются шаблонными страницами услуг и не показывают реальный опыт. Кейсы делают бренд «живым»: за услугой становится виден конкретный результат и конкретный клиент.",
          },
        ],
      },
      {
        title: "Чего ожидать от создания локальных кейсов",
        blocks: [
          {
            title: "Рост конверсии на сайте",
            body: "Люди лучше реагируют на доказательства, чем на общие обещания. Наличие раздела с кейсами повышает вероятность того, что посетитель оставит заявку, позвонит или напишет в мессенджер, особенно в нишах, где важно увидеть результат до принятия решения.",
          },
          {
            title: "Улучшение позиций в локальном SEO",
            body: "Кейсы собирают низкочастотный, но очень целевой локальный трафик. Поисковики видят множество страниц с упоминаниями города, районов, ЖК и конкретных задач - это усиливает релевантность по локальным запросам.",
          },
          {
            title: "Увеличение звонков и заявок",
            body: "Кейсы особенно хорошо работают в сферах ремонта, строительства, медицины, косметологии, юриспруденции, маркетинга и обучения - там, где клиент хочет увидеть реальные истории успеха до покупки.",
          },
          {
            title: "Рост доверия и повторных обращений",
            body: "Серии кейсов показывают, что с компанией можно работать долго: она завершает начатое, сопровождает клиента и отвечает за результат. Это стимулирует повторные заказы и рекомендации.",
          },
        ],
      },
      {
        title: "Как создавать локальные кейсы: пошаговая инструкция",
        blocks: [
          {
            title: "Шаг 1. Составьте список реализованных проектов",
            body: "Начните с недавних, сложных, типовых и показательных задач. Для локального продвижения особенно ценны проекты по конкретным районам, известным жилым комплексам, транспортным узлам и крупным объектам инфраструктуры.",
          },
          {
            title: "Шаг 2. Соберите материалы для кейсов",
            body: "Для каждого кейса подготовьте:",
          },
          {
            body: [
              "фото «до», «во время» и «после»;",
              "описание задачи клиента и ограничений;",
              "описание решения: какие технологии, материалы и подходы использовались;",
              "сроки выполнения проекта;",
              "стоимость или диапазон цены (если нельзя указать точную сумму);",
              "локацию: город, район, ЖК, улицу;",
              "конкретный результат и изменения для клиента;",
              "короткий отзыв заказчика.",
            ],
          },
          {
            title: "Шаг 3. Структурируйте кейс по понятной схеме",
            body: "Эффективный кейс обычно включает:",
          },
          {
            body: [
              "заголовок с указанием города/района/ЖК и типа работы;",
              "краткое описание ситуации клиента;",
              "детальное описание выполненных работ;",
              "фото блока «до/после»;",
              "цифры: сроки, объёмы, стоимость (если возможно);",
              "результат и эффект для клиента;",
              "отзыв клиента и призыв к действию.",
            ],
          },
          {
            title: "Шаг 4. Добавьте локальные SEO‑сигналы",
            body: "В тексте кейса органично используйте:",
          },
          {
            body: [
              "название города и района;",
              "название ЖК или бизнес‑центра;",
              "локальные особенности (тип застройки, условия, инфраструктура).",
            ],
          },
          {
            body: "Это помогает странице кейса ранжироваться по точным локальным запросам.",
          },
          {
            title: "Шаг 5. Свяжите кейсы с основными страницами",
            body: "Кейсы не должны существовать изолированно. Свяжите их внутренними ссылками с:",
          },
          {
            body: [
              "страницами соответствующих услуг;",
              "городскими или районными лендингами;",
              "страницей «О компании» и разделом отзывов.",
            ],
          },
          {
            body: "Это улучшит навигацию и усилит локальное SEO за счёт перелинковки.",
          },
        ],
      },
      {
        title: "Продвижение локальных кейсов",
        blocks: [
          {
            title: "1. Включите кейсы в структуру сайта",
            body: "Создайте отдельный раздел «Кейсы» или «Наши работы» и вложенные фильтры по городам, районам и типам услуг. Это упростит навигацию и улучшит индексацию.",
          },
          {
            title: "2. Используйте кейсы в блоге и социальных сетях",
            body: "Публикуйте анонсы кейсов в блоге, социальных сетях и рассылках - со ссылкой на полный материал на сайте. Это даёт дополнительный трафик и усиливает бренд.",
          },
          {
            title: "3. Привяжите кейсы к карточкам в картах",
            body: "В описаниях карточек Google и Яндекс можно упоминать наличие подробных кейсов на сайте и использовать фото из реальных проектов. Это добавляет доверия и стимулирует переход на сайт.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Локальные кейсы одновременно усиливают доверие, повышают конверсию и укрепляют локальное SEO. Регулярно создавая и продвигая такие материалы, вы превращаете выполненные проекты в стабильный поток новых клиентов и формируете сильный, узнаваемый бренд в своём регионе.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Local case studies: how to turn past projects into new customers",
    lead: [
      "Local case studies are one of the strongest growth assets for businesses that operate within a specific city or neighborhood. They’re not just portfolio stories-they’re proof of results, process, and credibility. Well-built case studies increase trust, improve conversion rates, support local SEO, and help you stand out from competitors who only describe services in generic terms.",
    ],
    sections: [
      {
        title: "Why local businesses should publish case studies",
        blocks: [
          {
            title: "1. Proof of expertise",
            body: "A service page is a promise. A case study is proof. Real photos, timelines, measurable outcomes, and a customer quote dramatically increase trust.",
          },
          {
            title: "2. Social proof for nearby customers",
            body: "People trust stories from customers in the same area. Local case studies show you’ve worked in that neighborhood and understand the local context. Even simple phrasing like “kitchen remodel in [Neighborhood]” makes the work feel close and real.",
          },
          {
            title: "3. Strong local SEO impact",
            body: "Each case study can rank for long-tail local queries when you naturally mention the city, neighborhood, and relevant landmarks. Over time, a library of cases becomes a reliable local traffic source.",
          },
          {
            title: "4. Higher website conversion",
            body: "Many users decide after seeing real examples. Case studies reduce objections by showing scope, timeline, and (when possible) pricing. Businesses that consistently publish cases often see more leads from the same traffic.",
          },
          {
            title: "5. Differentiation",
            body: "Most competitors publish templated service pages without proof. Case studies make the brand feel real-showing outcomes and real clients.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            title: "Higher conversion rates",
            body: "Proof converts better than promises. A strong case study section increases the likelihood that a visitor calls, fills out a form, or messages you-especially in services where results matter.",
          },
          {
            title: "Better local SEO visibility",
            body: "Case studies attract low-volume but extremely qualified local traffic. Many pages mentioning specific areas and problem scenarios improves local relevance.",
          },
          {
            title: "More calls and leads",
            body: "Case studies work especially well for home services, construction, healthcare, legal, marketing, and training-any category where people want proof before buying.",
          },
          {
            title: "More trust and repeat business",
            body: "A series of cases shows reliability and consistency. It also encourages referrals and repeat customers.",
          },
        ],
      },
      {
        title: "How to create local case studies (step-by-step)",
        blocks: [
          {
            title: "Step 1. List completed projects",
            body: "Start with recent, complex, or representative jobs. Local SEO benefits most from projects tied to neighborhoods, well-known complexes, transit hubs, or notable landmarks.",
          },
          {
            title: "Step 2. Collect materials",
            body: "For each case, prepare:",
          },
          {
            body: [
              "before/during/after photos;",
              "the customer problem and constraints;",
              "what you did (process, materials, tools);",
              "timeline;",
              "price or a price range (if possible);",
              "location context (city + neighborhood);",
              "the outcome and impact;",
              "a short customer quote.",
            ],
          },
          {
            title: "Step 3. Use a clear structure",
            body: "A good case study usually includes:",
          },
          {
            body: [
              "a title with location + project type;",
              "short context;",
              "what was done;",
              "before/after visuals;",
              "numbers (timeline, scope, pricing if available);",
              "result;",
              "testimonial + CTA.",
            ],
          },
          {
            title: "Step 4. Add local SEO signals (naturally)",
            body: "Mention:",
          },
          {
            body: [
              "city and neighborhood;",
              "building/complex (if relevant);",
              "local context (conditions, access, building type).",
            ],
          },
          {
            body: "Natural local context helps you rank for precise local long-tail queries.",
          },
          {
            title: "Step 5. Link case studies to core pages",
            body: "Don’t isolate case studies. Link them to:",
          },
          {
            body: [
              "relevant service pages;",
              "city/neighborhood landing pages;",
              "about/reviews pages.",
            ],
          },
        ],
      },
      {
        title: "How to promote local case studies",
        blocks: [
          {
            title: "1. Make cases a visible part of your site",
            body: "Create a dedicated “Case Studies” or “Our Work” section and organize by service type and location. This helps both users and crawling/indexation.",
          },
          {
            title: "2. Share cases on social and email",
            body: "Post short summaries on social media and in email updates, linking back to the full case. This adds traffic and builds brand authority.",
          },
          {
            title: "3. Connect cases to your Maps presence",
            body: "In the U.S., your Google Business Profile can reference case studies on your site and use real project photos. This adds another layer of trust and can drive clicks.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "Local case studies strengthen trust, conversion rates, and local SEO at the same time. By publishing and promoting cases consistently, you turn completed projects into a steady pipeline of new customers and a stronger local brand.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "קייסים מקומיים: איך להפוך פרויקטים קודמים ללקוחות חדשים",
    lead: [
      "קייסים מקומיים הם אחד הנכסים השיווקיים החזקים לעסק שפועל בעיר או באזור מסוים. זה לא רק ‘תיק עבודות’-זה הוכחה לתהליך, לתוצאה ולאמינות. קייסים בנויים טוב מעלים אמון, משפרים המרות, תומכים ב‑SEO מקומי ומבדלים אתכם ממתחרים שמסתפקים בתיאור שירותים כללי.",
    ],
    sections: [
      {
        title: "למה לעסק מקומי כדאי לפרסם קייסים",
        blocks: [
          {
            title: "1. הוכחת מומחיות",
            body: "עמוד שירות הוא הבטחה. קייס הוא הוכחה. תמונות אמיתיות, פירוט תהליך, זמנים, תוצאה וציטוט לקוח מעלים אמון משמעותית.",
          },
          {
            title: "2. הוכחה חברתית לקהל מקומי",
            body: "אנשים סומכים במיוחד על לקוחות מהאזור שלהם. קייסים מקומיים מראים שכבר עבדתם באותה שכונה ושאתם מכירים את ההקשר המקומי.",
          },
          {
            title: "3. אפקט חזק ל‑SEO מקומי",
            body: "כל קייס יכול להביא תנועה מביטויי זנב ארוך כשמזכירים בצורה טבעית עיר, שכונה ונקודות ציון. עם הזמן, מאגר קייסים הופך למקור תנועה יציב.",
          },
          {
            title: "4. שיפור המרות באתר",
            body: "משתמשים רבים מחליטים אחרי שהם רואים דוגמאות אמיתיות. קייסים מפחיתים התנגדויות ומייצרים תחושת שקיפות (היקף עבודה, זמן, ולעיתים גם טווח מחיר).",
          },
          {
            title: "5. בידול",
            body: "מתחרים רבים מציגים רק עמודי שירות. קייסים הופכים את המותג ל‘אמיתי’ עם תוצאות ולקוחות.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            title: "יותר המרות",
            body: "הוכחות עובדות טוב יותר מהבטחות. מדור קייסים איכותי מעלה את הסיכוי לשיחה/טופס/הודעה.",
          },
          {
            title: "נראות מקומית טובה יותר",
            body: "קייסים מביאים תנועה מקומית קטנה בנפח אך מאוד מדויקת. הרבה עמודים עם אזכורים מקומיים מחזקים רלוונטיות.",
          },
          {
            title: "יותר שיחות ופניות",
            body: "קייסים מצוינים לשיפוצים, שירותי בית, רפואה, משפטים, שיווק והדרכות-כל תחום שבו רוצים הוכחה לפני קנייה.",
          },
          {
            title: "יותר אמון וחזרות",
            body: "רצף קייסים מראה עקביות ואחריות, ומעודד המלצות ולקוחות חוזרים.",
          },
        ],
      },
      {
        title: "איך לבנות קייסים מקומיים (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. רשימת פרויקטים שבוצעו",
            body: "להתחיל מפרויקטים אחרונים/מורכבים/מייצגים. ל‑SEO מקומי חשוב במיוחד לקשר לשכונות, מתחמים מוכרים, צמתים ונקודות ציון.",
          },
          {
            title: "שלב 2. לאסוף חומרים",
            body: "לכל קייס להכין:",
          },
          {
            body: [
              "תמונות לפני/במהלך/אחרי;",
              "בעיה ומגבלות;",
              "מה עשיתם (תהליך, חומרים, כלים);",
              "זמן ביצוע;",
              "מחיר או טווח מחיר (אם אפשר);",
              "הקשר מיקום (עיר + שכונה);",
              "תוצאה והשפעה;",
              "ציטוט לקוח קצר.",
            ],
          },
          {
            title: "שלב 3. מבנה ברור",
            body: "קייס טוב כולל בדרך כלל:",
          },
          {
            body: [
              "כותרת עם מיקום + סוג פרויקט;",
              "רקע קצר;",
              "מה בוצע;",
              "לפני/אחרי;",
              "נתונים (זמן/היקף/מחיר אם קיים);",
              "תוצאה;",
              "ביקורת + CTA.",
            ],
          },
          {
            title: "שלב 4. סימני SEO מקומי (טבעי)",
            body: "לשלב:",
          },
          {
            body: [
              "עיר ושכונה;",
              "בניין/מתחם (אם רלוונטי);",
              "הקשר מקומי (נגישות, סוג בנייה, תנאים).",
            ],
          },
          {
            title: "שלב 5. קישורים לעמודים חשובים",
            body: "לא להשאיר קייסים מבודדים. לקשר לעמודי שירות רלוונטיים, לעמודי עיר/שכונה ולעמודי אודות/ביקורות.",
          },
        ],
      },
      {
        title: "איך לקדם קייסים",
        blocks: [
          {
            title: "1. להפוך קייסים לחלק מהמבנה באתר",
            body: "לבנות מדור ‘קייסים’/‘העבודות שלנו’ ולארגן לפי שירות ולפי אזור. זה עוזר למשתמשים וגם לאינדוקס.",
          },
          {
            title: "2. לשתף ברשתות ובמייל",
            body: "לפרסם סיכום קצר ברשתות ובדיוור ולהפנות לקייס המלא באתר.",
          },
          {
            title: "3. לחבר לנוכחות במפות",
            body: "בישראל אפשר לקשר/להזכיר קייסים גם דרך הנוכחות ב‑Google Maps ולהשתמש בתמונות אמיתיות של פרויקטים. רבים משתמשים גם ב‑Waze לניווט, אך עיקר האמון מגיע דרך מידע עקבי וביקורות.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "קייסים מקומיים מחזקים אמון, המרות ו‑SEO מקומי יחד. כשמפרסמים ומקדמים אותם באופן עקבי, פרויקטים שבוצעו הופכים לצינור קבוע של לקוחות חדשים ולמותג מקומי חזק יותר.",
          },
        ],
      },
    ],
  },
};

export default content;
