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
    title: "Создание Landing Page для продвижения в конкретном городе",
    lead: [
      "Городские лендинги - одно из самых эффективных решений для бизнеса, который работает в нескольких городах или хочет расширить географию. Они помогают привлекать целевой трафик из конкретных городов, усиливают локальное SEO и повышают конверсию за счёт персонализации под локацию.",
      "Лендинг под конкретный город - сильный инструмент локального SEO и привлечения клиентов из региона. Он помогает выделиться в поиске, укрепить доверие и поддержать работу карточек бизнеса в Google и Яндекс Картах.",
    ],
    sections: [
      {
        title: "Зачем нужен лендинг под конкретный город",
        blocks: [
          {
            title: "1. Лучшее ранжирование в локальном поиске",
            body: "Поисковые системы всё активнее учитывают геопривязку и стремятся показывать сайты, максимально соответствующие городу или району пользователя. Если у вас только общий сайт без чёткой локализации, Google и Яндекс могут считать его менее релевантным, чем сайты с отдельными городскими страницами.",
          },
          {
            body: "Отдельный лендинг под город позволяет добавить в заголовки, метатеги и текст сильные локальные сигналы, которые напрямую влияют на локальное SEO.",
          },
          {
            title: "2. Связка с карточками Google и Яндекс",
            body: "Когда карточка бизнеса привязана к городу, а на сайте есть отдельная страница под этот город, алгоритмы видят консистентность: сайт подтверждает информацию из карт. Это повышает доверие, усиливает локальную релевантность и помогает карточке чаще показываться в поиске и картах.",
          },
          {
            title: "3. Увеличение количества клиентов",
            body: "Городские лендинги приводят более целевых посетителей: человек видит, что страница «говорит» о его городе и районе. Это снижает ощущение «безличного» сайта и повышает вероятность звонка или заявки.",
          },
          {
            title: "4. Конкурентное преимущество",
            body: "Многие бизнесы либо вообще не делают отдельные лендинги, либо копируют текст и получают дубли. Уникальный городской лендинг позволяет обойти конкурентов и закрепиться в топе по геозависимым запросам.",
          },
          {
            title: "5. Персонализация и рост конверсий",
            body: "Лендинг под город даёт ощущение близости: реальные фото, районы обслуживания, упоминание местных особенностей и примеры работ из города. Пользователь воспринимает компанию как «свою» - и конверсия растёт.",
          },
        ],
      },
      {
        title: "Чего ожидать после запуска городского лендинга",
        blocks: [
          {
            title: "1. Рост поискового трафика",
            body: "Городские лендинги обычно начинают собирать трафик через 2–6 недель после индексации. Особенно заметен эффект, если у компании есть физический адрес, хорошо заполненные карточки и базовая репутация (отзывы).",
          },
          {
            title: "2. Лучшие позиции по локальным запросам",
            body: "Лендинг начинает конкурировать по запросам вроде: «ремонт окон Минск», «мастер по холодильникам Гомель», «косметолог Брест», «маникюр Партизанский район». Даже если бизнес физически в другом городе, правильно оформленная страница позволяет конкурировать, если вы действительно обслуживаете этот город.",
          },
          {
            title: "3. Увеличение количества звонков",
            body: "Люди тянутся к локальным решениям. Городской лендинг усиливает доверие, а доверие повышает конверсию. На практике конверсия таких страниц часто на 20–70% выше, чем у «общих» страниц без явной привязки к городу.",
          },
          {
            title: "4. Рост органики без дополнительных затрат",
            body: "При правильной структуре и контенте городские лендинги приносят стабильный долгосрочный трафик без постоянных расходов на рекламу.",
          },
        ],
      },
      {
        title: "Как правильно создать эффективный лендинг под конкретный город",
        blocks: [
          {
            title: "1. Начните с правильного URL",
            body: "URL должен быть коротким, латиницей и содержать название города. Примеры: /remont-okon-gomel, /kondicionery-minsk, /kosmetolog-brest, /plitka-mogilev. По адресу сразу понятно, о каком городе речь.",
          },
          {
            title: "2. Заголовок H1 с городом и оффером",
            body: "Пример: «Ремонт окон в Гомеле - выезд мастера за 30 минут». H1 должен включать ключевой запрос, название города и звучать по‑человечески.",
          },
          {
            title: "3. Подзаголовок с преимуществами",
            body: "Под H1 хорошо работает короткий подзаголовок с выгодами: «Работаем по всему городу», «Гарантия до 12 месяцев», «Бесплатная консультация», «Выезд в день обращения».",
          },
          {
            title: "4. Блок «Почему мы работаем по этому городу»",
            body: "Объясните, почему вы реально обслуживаете этот город: есть специалисты в регионе, офис/точки выдачи, проекты из города, отлаженная логистика. Это снижает ощущение «безликого сервиса».",
          },
          {
            title: "5. Крупный блок услуг или товаров",
            body: "Список услуг адаптируйте под город и явно добавляйте геопривязку: «Ремонт пластиковых окон в Гомеле», «Замена фурнитуры в Гомеле», «Регулировка створок в Гомеле».",
          },
        ],
      },
      {
        title: "Типичные ошибки при создании городских лендингов",
        blocks: [
          {
            title: "1. Копирование текста для всех городов",
            body: "Простая замена названия города в шаблоне - путь к слабым результатам. Нужна реальная уникализация: примеры, формулировки, особенности.",
          },
          {
            title: "2. Отсутствие реальной геопривязки",
            body: "Если нет районов, улиц, ориентиров и примеров работ, лендинг выглядит формально и не даёт нужных сигналов поисковикам и людям.",
          },
          {
            title: "3. Слишком короткий или «водянистый» текст",
            body: "Лендинг должен отвечать на реальные вопросы пользователя, а не просто повторять ключевые слова.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Лендинги под конкретные города - фундамент локального продвижения для бизнеса, который работает в нескольких регионах. Они улучшают видимость, усиливают связку с карточками, приводят больше целевых обращений и снижают зависимость от платной рекламы.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Building a city-specific landing page for local SEO (and better conversions)",
    lead: [
      "City-specific landing pages are one of the most effective strategies for businesses that serve multiple cities or want to expand into new markets. They bring targeted traffic from a specific area, strengthen local SEO, and improve conversion rates by making the page feel truly local.",
      "A city landing page is a strong local SEO asset and a practical lead generator. In the U.S. context, it supports how you show up in Google Search and Google Maps-especially when your Google Business Profile and your website reinforce each other.",
    ],
    sections: [
      {
        title: "Why you need a city-specific landing page",
        blocks: [
          {
            title: "1. Better performance in local search",
            body: "Google increasingly personalizes results by location. If your site has only a generic page, it may be less relevant than competitors who have dedicated city pages. A city landing page lets you add strong local signals in headings, metadata, and content.",
          },
          {
            title: "2. Stronger connection to your Maps presence",
            body: "When your Google Business Profile is tied to a city and your website has a dedicated page for that city, Google sees consistency. That improves trust, local relevance, and can increase visibility in local results.",
          },
          {
            title: "3. More qualified leads",
            body: "A local page feels personal: it speaks to the user’s city and context. That reduces friction and increases calls and form submissions.",
          },
          {
            title: "4. Competitive advantage",
            body: "Many businesses either don’t create city pages at all or duplicate content across cities. A genuinely unique city landing page can outrank templated competitors.",
          },
          {
            title: "5. Higher conversions through localization",
            body: "Local photos, service areas, neighborhood references, and city-specific proof (projects/reviews) make the company feel closer and more credible.",
          },
        ],
      },
      {
        title: "What to expect after launch",
        blocks: [
          {
            title: "1. Organic traffic growth",
            body: "Often within 2–6 weeks after indexing, especially if the business has a strong profile, accurate data, and baseline reviews.",
          },
          {
            title: "2. Better rankings for local queries",
            body: "Examples: “window repair Austin,” “appliance technician Denver,” “cosmetologist Miami,” “nail salon near Downtown.” If you truly serve the city, a well-built landing page can compete even if your HQ is elsewhere.",
          },
          {
            title: "3. More calls",
            body: "People prefer local options. City pages often convert 20–70% better than generic pages.",
          },
          {
            title: "4. Stable long-term organic acquisition",
            body: "With strong structure and content, city pages can bring long-term traffic without ongoing ad spend.",
          },
        ],
      },
      {
        title: "How to build an effective city landing page",
        blocks: [
          {
            title: "1. Start with a clean URL",
            body: "Keep it short and readable, include the city. Examples: /window-repair-austin, /appliance-repair-denver, /cosmetology-miami. The URL should make the city obvious.",
          },
          {
            title: "2. Use an H1 with the city and offer",
            body: "Example: “Window repair in Denver - same-day service.” Your H1 should include the primary keyword and city, and still read naturally.",
          },
          {
            title: "3. Add a short benefits subheadline",
            body: "Under the H1, highlight value: “Serving the entire metro area,” “Up to 12-month warranty,” “Free consultation,” “Same-day appointments.”",
          },
          {
            title: "4. Explain why you serve this city",
            body: "Share real reasons: local technicians, service routes, projects completed locally, logistics, or a pickup/drop-off point. This builds credibility.",
          },
          {
            title: "5. Localize your services block",
            body: "List your services with city context (where appropriate) and match the language people use when searching.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "1. Copy-pasting the same page for every city",
            body: "Swapping the city name in a template is a fast path to weak results. You need real uniqueness: examples, wording, local proof.",
          },
          {
            title: "2. No real local signals",
            body: "If the page has no neighborhoods, landmarks, service area clarity, or real examples, it looks generic to both users and Google.",
          },
          {
            title: "3. Thin content",
            body: "A city landing page needs enough substance to answer real questions-not just repeat keywords.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "City landing pages are a foundation for multi-location growth. They improve local visibility, strengthen your Maps presence, drive qualified calls and leads, and reduce reliance on paid ads.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "יצירת Landing Page לעיר ספציפית: איך לחזק SEO מקומי ולהעלות המרות",
    lead: [
      "עמודי נחיתה לעיר ספציפית הם אחד הכלים היעילים ביותר לעסק שמשרת כמה ערים או רוצה להתרחב לאזור חדש. הם מביאים תנועה ממוקדת, מחזקים SEO מקומי ומעלים המרות בזכות תחושת ‘מקומיות’.",
      "בישראל, עמוד עיר תומך בנראות בגוגל וב‑Google Maps-במיוחד כשהכרטיס במפות והאתר מחזקים אחד את השני עם מידע עקבי והוכחות מקומיות.",
    ],
    sections: [
      {
        title: "למה צריך עמוד עיר",
        blocks: [
          {
            title: "1. דירוג טוב יותר בחיפוש מקומי",
            body: "גוגל מתחשב מאוד במיקום המשתמש. עמוד עיר מאפשר להוסיף אותות מקומיים בכותרות, במטא ובתוכן ולהיות רלוונטיים יותר מאתר כללי.",
          },
          {
            title: "2. חיזוק הקשר לכרטיס במפות",
            body: "כשכרטיס העסק בגוגל משויך לעיר ויש באתר עמוד ייעודי לעיר, נוצרת עקביות שמעלה אמון ורלוונטיות.",
          },
          {
            title: "3. יותר פניות איכותיות",
            body: "עמוד שמדבר על העיר של המשתמש מרגיש אישי יותר ומעלה שיחות וטפסים.",
          },
          {
            title: "4. יתרון תחרותי",
            body: "הרבה עסקים לא יוצרים עמודי עיר או מעתיקים תוכן. עמוד ייחודי באמת יכול לנצח מתחרים שמבוססים על תבנית.",
          },
          {
            title: "5. המרות גבוהות יותר בזכות לוקליזציה",
            body: "תמונות מקומיות, אזורי שירות, שמות שכונות והוכחות כמו פרויקטים/ביקורות מהאזור יוצרים תחושת קרבה.",
          },
        ],
      },
      {
        title: "למה לצפות אחרי ההשקה",
        blocks: [
          {
            title: "1. עלייה בתנועה אורגנית",
            body: "לעיתים תוך 2–6 שבועות מהאינדוקס, במיוחד אם יש כרטיס חזק ומידע מדויק וביקורות בסיס.",
          },
          {
            title: "2. דירוגים לשאילתות מקומיות",
            body: "לדוגמה: “תיקון חלונות תל אביב”, “טכנאי מקררים חיפה”, “קוסמטיקאית ראשון לציון”, “מניקור מרכז העיר”.",
          },
          {
            title: "3. יותר שיחות",
            body: "אנשים מעדיפים פתרון מקומי. עמודי עיר לרוב ממירים טוב יותר מעמוד כללי.",
          },
          {
            title: "4. יציבות לאורך זמן",
            body: "עם מבנה ותוכן טובים, עמודי עיר יכולים להביא תנועה בלי הוצאות פרסום קבועות.",
          },
        ],
      },
      {
        title: "איך לבנות עמוד עיר יעיל",
        blocks: [
          {
            title: "1. URL נכון",
            body: "URL קצר וברור עם שם העיר (בלטינית או בעברית לפי אסטרטגיה). לדוגמה: /window-repair-tel-aviv או /technician-haifa.",
          },
          {
            title: "2. H1 עם עיר והצעה",
            body: "לדוגמה: “תיקון חלונות בחיפה - שירות באותו יום”. הכותרת צריכה לכלול עיר ומילת מפתח ולהישמע טבעי.",
          },
          {
            title: "3. תת-כותרת עם יתרונות",
            body: "לדוגמה: “שירות בכל העיר”, “אחריות עד 12 חודשים”, “ייעוץ ללא עלות”, “תיאום מהיר”.",
          },
          {
            title: "4. למה אתם עובדים בעיר הזו",
            body: "הסבירו סיבות אמיתיות: צוות באזור, מסלולי שירות, פרויקטים בעיר, לוגיסטיקה מסודרת.",
          },
          {
            title: "5. בלוק שירותים מותאם",
            body: "התאימו את רשימת השירותים לעיר ולשפה שבה אנשים מחפשים.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            title: "1. העתקה בין ערים",
            body: "החלפת שם עיר בתבנית לא מספיקה. צריך ייחוד אמיתי: דוגמאות, ניסוח, הוכחות.",
          },
          {
            title: "2. אין אותות מקומיים",
            body: "בלי שכונות/אזורי שירות/דוגמאות אמיתיות, העמוד נראה גנרי למשתמש ולגוגל.",
          },
          {
            title: "3. תוכן דל",
            body: "עמוד עיר צריך לענות על שאלות אמיתיות, לא רק לחזור על מילות מפתח.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "עמודי עיר הם בסיס להתרחבות מרובת מיקומים: הם משפרים נראות מקומית, מחזקים את הנוכחות במפות, ומביאים פניות איכותיות עם פחות תלות בפרסום.",
          },
        ],
      },
    ],
  },
};

export default content;
