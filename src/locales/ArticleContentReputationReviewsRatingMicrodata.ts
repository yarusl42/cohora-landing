export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  codeExample: string;
  sections: ArticleSection[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Внедрение микроразметки для отзывов и рейтингов: зачем это нужно и как правильно реализовать",
    lead: [
      "Микроразметка для отзывов и рейтингов помогает вашему сайту выделяться в поисковой выдаче, повышать доверие и получать больше переходов. Звёзды, количество отзывов, средняя оценка и другие элементы в сниппете работают как сильное социальное доказательство - особенно для локального бизнеса, коммерческих услуг и интернет‑магазинов.",
    ],
    codeExample: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Название компании",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`,
    sections: [
      {
        title: "1. Зачем нужна микроразметка отзывов и рейтингов",
        blocks: [
          {
            title: "1.1. Выделение сайта в поисковой выдаче",
            body: "В условиях высокой конкуренции каждая деталь важна. Когда рядом с вашим результатом появляются звёзды рейтинга, количество отзывов, средняя оценка и дополнительные детали, пользователь инстинктивно обращает внимание именно на ваш сниппет. Это и есть rich snippet - расширенный сниппет, который делает результат визуально более заметным.",
          },
          {
            title: "1.2. Рост CTR (кликабельности)",
            body: "Многочисленные кейсы показывают: наличие микроразметки отзывов способно увеличивать CTR на десятки, а иногда и сотни процентов. Пользователь воспринимает сайт с рейтингом как более надёжный и интересный, особенно если речь идёт о локальном бизнесе, услугах, ресторанах, медцентрах или магазинах.",
          },
          {
            title: "1.3. Повышение доверия к бренду",
            body: "Звёзды и цифры - это быстрый и понятный социальный сигнал. Когда человек видит, что компанию оценили, например, на 4.6 из 5 на основе десятков или сотен отзывов, доверие формируется ещё до перехода на сайт. Даже один этот визуальный элемент может изменить решение в вашу пользу.",
          },
          {
            title: "1.4. Косвенное улучшение позиций",
            body: "Сама по себе микроразметка не «поднимает» сайт в топ, но делает страницу более кликабельной и релевантной. Поисковики учитывают CTR, поведение пользователей и время на сайте. Если люди чаще кликают на ваш сниппет и остаются на сайте дольше, это со временем положительно влияет на позиции.",
          },
        ],
      },
      {
        title: "2. Чего ожидать после внедрения микроразметки",
        blocks: [
          {
            title: "2.1. Более привлекательные сниппеты",
            body: "Страницы с корректно настроенной микроразметкой получают визуальные улучшения: звёзды, числовой рейтинг, количество отзывов и иногда дополнительные элементы. Выдача становится «богаче», а ваш сайт на её фоне - более заметным.",
          },
          {
            title: "2.2. Ускоренное решение пользователя кликнуть",
            body: "Благодаря социальной доказуемости (social proof) пользователю проще принять решение в пользу сайта с рейтингом и отзывами. Это сокращает путь от просмотра выдачи до клика и делает ваш результат очевидным выбором среди «серых» ссылок конкурентов.",
          },
          {
            title: "2.3. Рост трафика и конверсии",
            body: "Если CTR растёт, растёт и органический трафик. В ряде ниш страницы с микроразметкой получают больше переходов, а иногда прирост может быть кратным. Параллельно повышается и конверсия: посетитель изначально ожидает увидеть качественный сервис и легче оставляет заявку или совершает покупку.",
          },
        ],
      },
      {
        title: "3. Где и для каких страниц использовать микроразметку",
        blocks: [
          {
            title: "3.1. Локальный бизнес",
            body: "Для локальных проектов логично размечать страницы услуг, страницы филиалов и отделений, а также страницы районов и городов, где вы показываете отзывы клиентов.",
          },
          {
            title: "3.2. Интернет‑магазины",
            body: "Для e‑commerce оптимальны карточки товаров с отзывами и оценками, а иногда - и категории, если на них выводится агрегированный рейтинг по товарам.",
          },
          {
            title: "3.3. Контент и обзоры",
            body: "В статьях‑обзорах, рейтингах и сравнительных материалах можно использовать микроразметку для описания отзывов об услуге или продукте, если вы действительно показываете оценки и комментарии. Главное правило: отзывы должны быть реальными, а рейтинг - честным. Любые попытки имитации могут закончиться санкциями со стороны Google.",
          },
        ],
      },
      {
        title: "4. Типы структурированных данных для отзывов и рейтингов",
        blocks: [
          {
            title: "4.1. Review",
            body: "Используется, если на странице есть конкретный отзыв с автором, текстом и датой публикации. Это позволяет поисковику понять, что перед ним именно отзыв, а не произвольный текст.",
          },
          {
            title: "4.2. AggregateRating",
            body: "Применяется, когда вы показываете среднюю оценку и количество отзывов. Часто используется вместе с типами Product, LocalBusiness или Service.",
          },
          {
            title: "4.3. Product / LocalBusiness / Service",
            body: "Отзывы и рейтинги почти всегда привязаны к сущности: товару, услуге или конкретному филиалу. Поэтому логично описывать одновременно и сам объект, и его рейтинг (через AggregateRating и Review).",
          },
        ],
      },
      {
        title: "5. Как внедрить микроразметку: пошагово",
        blocks: [
          {
            title: "Шаг 1. Выбор формата",
            body: 'Google рекомендует использовать JSON‑LD. Это отдельный блок <script type="application/ld+json">, который не вмешивается в вёрстку и легко поддерживается. Microdata и RDFa сегодня применяются реже и сложнее в сопровождении.',
          },
          {
            title:
              "Шаг 2. Определите, какие данные реально показаны на странице",
            body: "Микроразметка должна описывать то, что пользователь видит на странице: текст отзыва, имя автора, дату, оценку, средний рейтинг и количество отзывов. Нельзя размечать «фантомные» отзывы, которых на странице нет.",
          },
          {
            title: "Шаг 3. Добавьте JSON‑LD блок",
            body: "Добавьте блок JSON‑LD со структурой LocalBusiness + aggregateRating. При необходимости можно добавить и отдельные отзывы через Review с указанием автора, текста, даты и оценки.",
          },
          {
            title: "Шаг 4. Проверьте корректность разметки",
            body: "После внедрения используйте Rich Results Test и другие валидаторы, чтобы убедиться, что структура данных распознана правильно и нет ошибок и критичных предупреждений.",
          },
        ],
      },
      {
        title: "6. Рекомендации и ошибки",
        blocks: [
          {
            title: "6.1. Только реальные отзывы",
            body: "Нельзя придумывать отзывы или подтасовывать рейтинг ради красивого сниппета. Данные должны совпадать с тем, что есть на странице и в реальных источниках. Иначе можно получить фильтры и потерю доверия со стороны поисковых систем.",
          },
          {
            title: "6.2. Согласованность с карточками",
            body: "Если вы показываете рейтинг на сайте, хорошо, когда он логично соотносится с оценками в Google Maps, 2ГИС и других сервисах, где вас реально могут проверять клиенты. Сильные расхождения настораживают и пользователей, и алгоритмы.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Внедрение микроразметки для отзывов и рейтингов - один из самых быстрых способов усилить присутствие сайта в поисковой выдаче. Правильно настроенные структурированные данные помогают выделить сайт среди конкурентов за счёт rich‑сниппетов, увеличить CTR и органический трафик, повысить доверие и конверсию, а также косвенно улучшить позиции за счёт лучших поведенческих метрик.",
          },
          {
            body: "Для локального бизнеса, коммерческих услуг и интернет‑магазинов это важный шаг в рамках комплексной работы с репутацией и SEO.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Review and rating schema markup: why it matters and how to implement it correctly",
    lead: [
      "Review and rating schema markup can help your site stand out in Google Search, increase trust, and earn more clicks. Stars, review counts, and average scores act as strong social proof-especially for local businesses, service companies, and ecommerce.",
    ],
    codeExample: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business name",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`,
    sections: [
      {
        title: "1. Why schema markup matters",
        blocks: [
          {
            title: "1.1. Stand out in search",
            body: "In competitive SERPs, small details matter. Star ratings and review counts can make your listing more noticeable and help it win attention among similar-looking links.",
          },
          {
            title: "1.2. Higher CTR",
            body: "Many case studies show that ratings in search snippets can meaningfully improve click-through rate. Users often treat a rated business as more trustworthy-especially for local services (dentists, salons, restaurants, auto repair, etc.).",
          },
          {
            title: "1.3. Trust before the click",
            body: "Stars and numbers are instant credibility signals. Seeing a 4.6/5 rating across dozens or hundreds of reviews can influence the decision before a user even opens your site.",
          },
          {
            title: "1.4. Indirect ranking benefits",
            body: "Markup alone doesn’t guarantee rankings, but better CTR and on-page engagement can send positive signals over time.",
          },
        ],
      },
      {
        title: "2. What to expect after implementation",
        blocks: [
          {
            title: "2.1. More compelling snippets",
            body: "When markup is implemented correctly, search results may display stars, an average rating, and review counts-making your listing look richer and more credible.",
          },
          {
            title: "2.2. Faster decisions",
            body: "Social proof reduces hesitation. For many users, a listing with ratings feels like the safer choice.",
          },
          {
            title: "2.3. More organic traffic and conversions",
            body: "Higher CTR typically leads to more organic visits-and those visitors often convert better because they already expect quality.",
          },
        ],
      },
      {
        title: "3. Where to use review and rating markup",
        blocks: [
          {
            title: "3.1. Local businesses",
            body: "For local businesses, it’s common to add markup to service pages, location pages, and city/neighborhood pages-especially where you display reviews.",
          },
          {
            title: "3.2. Ecommerce",
            body: "For ecommerce, the best fit is product pages with reviews and ratings. In some cases you can also add aggregated rating signals for categories-only if you truly display that data.",
          },
          {
            title: "3.3. Content and comparisons",
            body: "In comparison or review content, only use markup if you genuinely show ratings and commentary. Don’t fake reviews-Google may treat it as structured data abuse.",
          },
        ],
      },
      {
        title: "4. Common structured data types",
        blocks: [
          {
            title: "4.1. Review",
            body: "Use Review when you display individual reviews with an author, text, date, and rating.",
          },
          {
            title: "4.2. AggregateRating",
            body: "Use AggregateRating when you show an average score and total review count. This is often combined with Product, LocalBusiness, or Service.",
          },
          {
            title: "4.3. Product / LocalBusiness / Service",
            body: "Reviews and ratings should be attached to the entity they describe-your product, service, or location.",
          },
        ],
      },
      {
        title: "5. How to implement it (step by step)",
        blocks: [
          {
            title: "Step 1. Choose a format",
            body: 'Google recommends JSON-LD: a separate <script type="application/ld+json"> block that doesn’t affect layout and is easier to maintain.',
          },
          {
            title: "Step 2. Mark up only what users can see",
            body: "Your structured data must match the visible content: rating value, review count, review text, author, and dates. Don’t mark up ‘phantom’ reviews.",
          },
          {
            title: "Step 3. Add a JSON-LD block",
            body: "Start with LocalBusiness + aggregateRating. Add individual Review items only if you display them on the page.",
          },
          {
            title: "Step 4. Validate",
            body: "Use Google’s Rich Results Test and other validators to check for errors and critical warnings.",
          },
        ],
      },
      {
        title: "6. Practical tips and mistakes",
        blocks: [
          {
            title: "6.1. Only real reviews",
            body: "Don’t fabricate reviews or manipulate ratings to get stars. It’s a trust risk-and can lead to penalties.",
          },
          {
            title: "6.2. Keep ratings consistent across sources",
            body: "If you show a rating on your site, it should align with where customers check you (Google Business Profile, industry directories, and well-known platforms). Big mismatches can look suspicious.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Review and rating markup is one of the fastest ways to improve how your pages look in search results. When done correctly, it can increase CTR, boost trust, and support long-term SEO through better user engagement.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "סכמת ביקורות ודירוגים (Schema): למה זה חשוב ואיך מיישמים נכון",
    lead: [
      "סכמת ביקורות ודירוגים (Schema Markup) יכולה לעזור לאתר להתבלט בתוצאות החיפוש, לבנות אמון ולהגדיל הקלקות. כוכבים, כמות ביקורות ודירוג ממוצע הם הוכחה חברתית חזקה-במיוחד לעסקים מקומיים ושירותים.",
    ],
    codeExample: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "שם העסק",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`,
    sections: [
      {
        title: "1. למה Schema Markup חשוב",
        blocks: [
          {
            title: "1.1. להתבלט בתוצאות החיפוש",
            body: "בשוק תחרותי, כל פרט חשוב. כוכבים וכמות ביקורות יכולים להפוך את התוצאה שלכם ליותר בולטת.",
          },
          {
            title: "1.2. שיפור CTR",
            body: "כאשר משתמשים רואים דירוג וכמות ביקורות, הם נוטים להקליק יותר-במיוחד בתחומים מקומיים כמו מסעדות, מרפאות ושירותים.",
          },
          {
            title: "1.3. אמון עוד לפני הכניסה לאתר",
            body: "כוכבים ומספרים הם סיגנל אמון מיידי. לעיתים זה מה שמטה את ההחלטה.",
          },
          {
            title: "1.4. יתרונות עקיפים בדירוג",
            body: "Schema לא מבטיח דירוגים גבוהים, אבל CTR והתנהגות משתמשים טובים יותר יכולים לעזור לאורך זמן.",
          },
        ],
      },
      {
        title: "2. למה לצפות אחרי הטמעה",
        blocks: [
          {
            title: "2.1. סניפטים אטרקטיביים יותר",
            body: "כאשר ההטמעה תקינה, ייתכן שיופיעו כוכבים, דירוג ממוצע וכמות ביקורות בתוצאות.",
          },
          {
            title: "2.2. החלטה מהירה יותר להקליק",
            body: "הוכחה חברתית מצמצמת התלבטות ומקלה על בחירה.",
          },
          {
            title: "2.3. יותר תנועה והמרות",
            body: "CTR גבוה יותר יכול להביא יותר טראפיק אורגני, ולעיתים גם המרות טובות יותר כי האמון נבנה מראש.",
          },
        ],
      },
      {
        title: "3. איפה להשתמש בסכמת ביקורות ודירוגים",
        blocks: [
          {
            title: "3.1. עסקים מקומיים",
            body: "דפים של שירותים, דפי סניפים/מיקומים, ודפי עיר/אזור שבהם אתם מציגים ביקורות.",
          },
          {
            title: "3.2. חנויות אונליין",
            body: "בעיקר דפי מוצר עם דירוגים וביקורות. קטגוריות - רק אם באמת מציגים שם דירוג מצטבר.",
          },
          {
            title: "3.3. תוכן והשוואות",
            body: "אפשר להשתמש בסכמה רק אם אתם מציגים באמת דירוגים ותגובות. לא לזייף ביקורות.",
          },
        ],
      },
      {
        title: "4. סוגי Structured Data נפוצים",
        blocks: [
          {
            title: "4.1. Review",
            body: "לביקורת בודדת עם מחבר, טקסט, תאריך ודירוג.",
          },
          {
            title: "4.2. AggregateRating",
            body: "לדירוג ממוצע וכמות ביקורות. לרוב יחד עם Product / LocalBusiness / Service.",
          },
          {
            title: "4.3. Product / LocalBusiness / Service",
            body: "ביקורות ודירוגים צריכים להיות משויכים לישות (מוצר/שירות/סניף).",
          },
        ],
      },
      {
        title: "5. איך מיישמים (שלב אחר שלב)",
        blocks: [
          {
            title: "שלב 1. בחירת פורמט",
            body: 'Google ממליצה על JSON-LD: בלוק <script type="application/ld+json"> נפרד שקל לתחזק.',
          },
          {
            title: "שלב 2. לסמן רק מה שמוצג בעמוד",
            body: "הסכמה חייבת להתאים לתוכן הנראה לעין. לא לסמן ביקורות שלא קיימות בעמוד.",
          },
          {
            title: "שלב 3. להוסיף JSON-LD",
            body: "להתחיל מ-LocalBusiness + aggregateRating. להוסיף Review בודדים רק אם מציגים אותם.",
          },
          {
            title: "שלב 4. בדיקה",
            body: "להריץ Rich Results Test וכלי בדיקה נוספים כדי לוודא שאין שגיאות.",
          },
        ],
      },
      {
        title: "6. טיפים וטעויות נפוצות",
        blocks: [
          {
            title: "6.1. רק ביקורות אמיתיות",
            body: "אל תמציאו ביקורות ואל תזייף דירוג כדי לקבל כוכבים. זה מסוכן לאמון ועלול לגרום לסנקציות.",
          },
          {
            title: "6.2. עקביות מול מקורות חיצוניים",
            body: "אם אתם מציגים דירוג באתר, עדיף שיתיישר עם מה שלקוחות רואים ב-Google ובפלטפורמות רלוונטיות לתחום.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "סכמת ביקורות ודירוגים היא דרך מהירה לחזק נראות ואמון בתוצאות חיפוש. כאשר עושים זאת נכון, זה יכול לתמוך ב-SEO לאורך זמן דרך CTR והתנהגות משתמשים טובים יותר.",
          },
        ],
      },
    ],
  },
};

export default content;
