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
      "SEO‑аудит сайта для локального бизнеса: зачем он нужен и как его провести на практике",
    lead: [
      "SEO‑аудит сайта для белорусского локального бизнеса - это комплексная оценка того, насколько хорошо сайт подготовлен для привлечения клиентов из Минска, Бреста, Гомеля и других городов Беларуси через локальные запросы в Google и Яндексе.",
      "Правильно проведённый аудит помогает выявить проблемы и составить план для улучшения позиций в локальном поиске на белорусском рынке.",
      "Локальный бизнес всё сильнее зависит от того, как он выглядит в интернете. Клиенты ищут ближайшие услуги через Google и Яндекс, сравнивают сайты и карточки в картах, обращают внимание на скорость загрузки, удобство и понятность информации.",
      "Если сайт медленный, «ломаный» и плохо оптимизирован под локальные запросы, даже хороший бизнес теряет часть клиентов. SEO‑аудит помогает увидеть слабые места и точки роста, чтобы сайт действительно приводил заявки, а не просто существовал.",
    ],
    sections: [
      {
        title: "Зачем локальному бизнесу нужен SEO‑аудит",
        blocks: [
          {
            title: "1. Повысить видимость в локальном поиске",
            body: "Главная задача локального SEO - появляться по запросам вида «рядом со мной» и «услуга + город / район». Если поисковик не понимает, где вы находитесь, какие услуги оказываете и кому вы будете полезны, он просто покажет других. Аудит позволяет понять, насколько чётко сайт транслирует поисковым системам вашу географию и тематику.",
          },
          {
            title: "2. Улучшить конверсию и удобство",
            body: "Даже если сайт уже где‑то показывается, это ещё не гарантия, что он превращает посетителей в клиентов. Люди чаще выбирают сайты, которые быстро загружаются, имеют понятную структуру, показывают реальные контакты, отзывы и чёткое описание услуг и цен. SEO‑аудит помогает посмотреть на сайт глазами пользователя: где он «вязнет», где теряется и на каком шаге уходит к конкуренту.",
          },
          {
            title: "3. Найти и исправить технические проблемы",
            body: "Локальные сайты часто живут годами без глубокой проверки: накапливаются битые ссылки, дублирующиеся страницы, ошибки индексации, проблемы с мобильной версией. Всё это снижает доверие поисковиков к ресурсу. Аудит выявляет такие «скрытые поломки» и даёт список приоритетных задач для разработчика.",
          },
          {
            title: "4. Помочь обойти конкурентов в регионе",
            body: "В одном районе могут работать десятки похожих компаний. SEO‑аудит позволяет понять, за счёт чего конкуренты выигрывают в поиске: какая у них структура, какие ключевые слова они закрывают, как оформляют локальные страницы и какую ссылочную поддержку используют. Это превращается в стратегию, а не в угадывание.",
          },
        ],
      },
      {
        title: "Чего ожидать от SEO‑аудита: что он даёт на выходе",
        blocks: [
          {
            body: [
              "список технических ошибок и их приоритетность;",
              "оценку локальных факторов: карты, NAP‑данные, микроразметка;",
              "рекомендации по структуре и контенту;",
              "заметки по удобству и коммерческим факторам;",
              "разбор конкурентов и ориентиры по ключевым словам.",
            ],
          },
          {
            body: "Это база для дорожной карты: что правим в первую очередь, что можно отложить, а что требует отдельного проекта.",
          },
        ],
      },
      {
        title: "Основные блоки SEO‑аудита локального сайта",
        blocks: [
          {
            title: "1. Технический анализ",
            body: [
              "скорость загрузки и «тяжесть» страниц;",
              "наличие и корректность robots.txt и sitemap.xml;",
              "структура URL и отсутствие технических дублей;",
              "статусы страниц (404, 301, 302);",
              "мобильная адаптация и корректность верстки.",
              "Результат - список проблем, которые мешают поисковикам корректно сканировать и индексировать сайт.",
            ],
          },
          {
            title: "2. Анализ локальных факторов",
            body: [
              "оформлен ли профиль Google Business Profile и Яндекс Бизнес;",
              "совпадают ли NAP‑данные (название, адрес, телефон) на сайте и в карточках;",
              "используется ли микроразметка LocalBusiness;",
              "упомянуты ли район, город и географические ориентиры в тексте;",
              "есть ли ссылки между сайтом и картами.",
              "По итогам вы понимаете, насколько ваш сайт «говорит» поиску, что вы - локальный бизнес, а не абстрактная компания без привязки.",
            ],
          },
          {
            title: "3. Контент‑аудит",
            body: [
              "есть ли страницы под основные услуги и районы;",
              "насколько тексты уникальны и структурированы;",
              "используются ли релевантные локальные ключевые слова;",
              "понятно ли, какие услуги вы оказываете и для кого;",
              "есть ли ответы на типовые вопросы клиентов.",
            ],
          },
          {
            title: "4. UX‑аудит и коммерческие факторы",
            body: [
              "понятно ли, куда кликать, чтобы позвонить или оставить заявку;",
              "нет ли «лишних» шагов по пути к контакту;",
              "удобна ли навигация на мобильных;",
              "есть ли доверительные элементы: отзывы, лицензии, сертификаты, гарантийные условия.",
            ],
          },
          {
            title: "5. Анализ конкурентов",
            body: [
              "по каким запросам они ранжируются;",
              "какие типы страниц используют (услуги, районы, блог);",
              "какие у них ссылки и упоминания;",
              "как они работают с контентом и коммерческими факторами.",
              "Это не повод копировать, но хороший источник идей для развития.",
            ],
          },
        ],
      },
      {
        title: "Как провести SEO‑аудит локального сайта: пошаговое руководство",
        blocks: [
          {
            title: "Шаг 1. Соберите исходные данные",
            body: "Подготовьте доступы к аналитике (Google Analytics, Яндекс.Метрика), кабинетам Google Business Profile и Яндекс Бизнес, а также список основных конкурентов и запросов, по которым вы хотите показываться. Это позволит связать технические выводы с реальными цифрами и целями.",
          },
          {
            title: "Шаг 2. Проверьте индексацию и техническое состояние",
            body: "С помощью базовых инструментов (Search Console, Яндекс Вебмастер, сервисы проверки скорости) оцените, какие страницы попадают в индекс, нет ли массовых ошибок, дублирующихся URL и проблем с мобильной версией. Зафиксируйте ключевые ошибки, которые требуют вмешательства.",
          },
          {
            title: "Шаг 3. Оцените локальные сигналы",
            body: [
              "адрес и телефон в явном виде;",
              "привязка к конкретному городу и району;",
              "страницы под локации (если вы работаете в нескольких районах);",
              "микроразметка LocalBusiness или Organization.",
              "Сопоставьте эти данные с карточками в картах: всё ли совпадает и нет ли противоречий.",
            ],
          },
          {
            title: "Шаг 4. Разберите структуру и контент",
            body: "Посмотрите, закрывает ли сайт все ключевые запросы ваших клиентов. Есть ли отдельные страницы под основные услуги, насколько подробно они описаны, есть ли ответы на частые вопросы, указаны ли цены или хотя бы диапазоны. Отметьте пробелы, которые стоит закрыть новыми страницами или расширением существующих.",
          },
          {
            title: "Шаг 5. Проведите мини‑аудит UX",
            body: "Пройдите путь клиента самостоятельно: зайдите на сайт с телефона, попробуйте найти телефон, записаться, построить маршрут. Зафиксируйте, где приходится думать дольше 2–3 секунд или делать лишние клики - это кандидаты на доработку.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "SEO‑аудит локального сайта - это не «страшный отчёт для галочки», а инструмент, который помогает увидеть сайт глазами и поисковиков, и живых клиентов. Он показывает, где вы теряете видимость, заявки и доверие, и даёт понятный список шагов, как эту ситуацию исправить.",
          },
          {
            body: "Проводить аудит можно как с привлечением специалистов, так и своими силами по базовому чек‑листу. Главное - превращать выводы в план доработок и постепенно делать сайт не просто «визиткой», а рабочим инструментом привлечения локальных клиентов.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Local SEO site audit: why you need it and how to do it",
    lead: [
      "A local SEO audit is a structured check of how well your site is prepared to attract customers from local searches (for example, ‘near me’ and ‘service + city’ queries).",
      "For U.S. businesses, local visibility typically depends on Google Search + Google Maps (Google Business Profile), along with strong location signals on the website.",
      "Customers compare websites and map listings, notice speed and usability, and choose the business that feels easiest to contact and trust.",
      "If your site is slow, confusing, or missing local signals, you lose leads even with a great service. An audit turns that into a clear action plan.",
    ],
    sections: [
      {
        title: "Why local businesses need a SEO audit",
        blocks: [
          {
            title: "1. Improve local visibility",
            body: "The goal of local SEO is to show up for ‘near me’ and ‘service + city/area’ searches. If search engines can’t understand your location and services, they’ll show competitors instead.",
          },
          {
            title: "2. Improve conversion and usability",
            body: "Visibility doesn’t guarantee leads. People choose sites that load fast, have clear structure, show real contact details, reviews, and pricing info. An audit helps you see where users get stuck and drop.",
          },
          {
            title: "3. Fix technical issues",
            body: "Over time, sites accumulate broken links, duplicate pages, indexing errors, and mobile issues. These reduce trust and limit performance. An audit gives a prioritized fix list.",
          },
          {
            title: "4. Outperform local competitors",
            body: "A local audit also includes competitor review: structure, keyword coverage, local pages, and off-site mentions. It becomes strategy-not guessing.",
          },
        ],
      },
      {
        title: "What you get as an outcome",
        blocks: [
          {
            body: [
              "Prioritized technical issues.",
              "Local signals review (NAP consistency, map listing alignment, LocalBusiness schema).",
              "Structure and content recommendations.",
              "Usability and conversion notes.",
              "Competitor benchmarks and keyword targets.",
            ],
          },
          {
            body: "This becomes a roadmap: what to fix first, what can wait, and what needs a separate project.",
          },
        ],
      },
      {
        title: "Core blocks of a local SEO audit",
        blocks: [
          {
            title: "1. Technical audit",
            body: [
              "Core Web Vitals and load speed.",
              "robots.txt and sitemap.xml.",
              "URL structure and duplicates.",
              "Status codes (404, 301, 302).",
              "Mobile friendliness.",
            ],
          },
          {
            title: "2. Local signals audit",
            body: [
              "Google Business Profile completeness.",
              "NAP consistency between website and listings.",
              "LocalBusiness schema.",
              "City/area mentions and service areas.",
              "Linking between website and map listing.",
            ],
          },
          {
            title: "3. Content audit",
            body: [
              "Location and service pages coverage.",
              "Content structure and uniqueness.",
              "Local keyword usage.",
              "Clarity of services and pricing.",
              "FAQ coverage.",
            ],
          },
          {
            title: "4. UX and conversion audit",
            body: [
              "Is it obvious how to call, book, or request a quote?",
              "Are there unnecessary steps to reach contact?",
              "Mobile navigation usability.",
              "Trust elements: reviews, licenses, guarantees.",
            ],
          },
          {
            title: "5. Competitor analysis",
            body: [
              "Which queries they rank for.",
              "What page types they use.",
              "Backlinks and brand mentions.",
              "Content and conversion elements.",
            ],
          },
        ],
      },
      {
        title: "How to run a local SEO audit (step by step)",
        blocks: [
          {
            title: "Step 1. Gather access and baseline data",
            body: "Collect access to analytics (Google Analytics 4), Google Search Console, your Google Business Profile, and build a list of competitors and target queries.",
          },
          {
            title: "Step 2. Check indexing and technical health",
            body: "Use Search Console and speed tools (PageSpeed Insights / Lighthouse) to see what’s indexed, what errors exist, and where mobile issues happen.",
          },
          {
            title: "Step 3. Validate local signals",
            body: [
              "Clear address and phone on site.",
              "City/area signals and service areas.",
              "Location pages (if you serve multiple areas).",
              "LocalBusiness or Organization schema.",
            ],
          },
          {
            body: "Compare against your GBP listing to ensure there are no contradictions.",
          },
          {
            title: "Step 4. Review structure and content",
            body: "Check whether you cover your core services and locations with dedicated pages, include pricing ranges, and answer common questions.",
          },
          {
            title: "Step 5. Run a mini UX audit",
            body: "Take the user journey on mobile: find phone, request quote, book, and get directions. Any friction point is a conversion leak.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "A local SEO audit isn’t a scary report-it’s a way to see your site like search engines and customers do. It shows where you lose visibility, trust, and leads, and turns it into a prioritized plan.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "בדיקת SEO לעסק מקומי: למה זה חשוב ואיך עושים",
    lead: [
      "בדיקת SEO מקומי היא סקירה מסודרת של האתר כדי להבין עד כמה הוא מוכן להביא לקוחות מחיפושים מקומיים (כמו ‘לידיי’ ו‑‘שירות + עיר’).",
      "בישראל רוב החשיפה מגיעה מ‑Google Search ו‑Google Maps (Google Business Profile), לכן חשוב לוודא אותות מיקום באתר ותיאום מלא עם כרטיס העסק.",
      "לקוחות משווים אתרים וכרטיסים במפות, שמים לב למהירות ולנוחות, ובוחרים בעסק שנראה אמין וקל ליצירת קשר.",
    ],
    sections: [
      {
        title: "למה צריך בדיקת SEO מקומי",
        blocks: [
          {
            title: "1. שיפור נראות מקומית",
            body: "אם Google לא מבינה איפה אתם נמצאים ומה אתם מציעים, היא תציג מתחרים.",
          },
          {
            title: "2. שיפור המרות",
            body: "נראות לא תמיד מביאה לידים. צריך אתר מהיר, ברור, עם פרטי קשר, ביקורות ומידע על שירותים.",
          },
          {
            title: "3. תיקון בעיות טכניות",
            body: "עם הזמן מצטברים קישורים שבורים, כפילויות ובעיות מובייל. בדיקה נותנת רשימת תיקונים לפי עדיפות.",
          },
        ],
      },
      {
        title: "איך לבצע (בקצרה)",
        blocks: [
          {
            title: "1. טכני",
            body: "מהירות, מובייל, robots/sitemap, כפילויות וסטטוסים.",
          },
          {
            title: "2. אותות מקומיים",
            body: "NAP עקבי, סכימת LocalBusiness, וקישוריות בין האתר לכרטיס במפות.",
          },
          {
            title: "3. תוכן והמרה",
            body: "עמודי שירות/אזור, FAQ, ו‑CTA ברור לנייד.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "בדיקת SEO מקומי היא דרך לראות איפה אתם מאבדים נראות ולידים, ולהפוך את זה לתוכנית עבודה ברורה.",
          },
        ],
      },
    ],
  },
};

export default content;
