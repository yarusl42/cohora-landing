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
      "Размещение гостевых постов на локальных площадках: как усилить бренд и локальное SEO",
    lead: [
      "Размещение гостевых постов на белорусских локальных площадках в Минске, Бресте, Гомеле и других городах - это одна из наиболее эффективных стратегий локального продвижения в Беларуси для получения качественных ссылок и повышения узнаваемости бренда среди местных клиентов.",
      "Правильно подготовленные гостевые посты помогают укрепить локальные сигналы и привлечь новых белорусских клиентов.",
    ],
    sections: [
      {
        title: "Зачем размещать гостевые посты на локальных площадках",
        blocks: [
          {
            title: "1. Рост локального SEO",
            body: "Локальные гостевые посты - один из самых сильных сигналов для поисковых систем, подтверждающих авторитет компании в регионе и её связь с конкретной локацией. Когда местные сайты ссылаются на ваш ресурс, алгоритмы понимают, что бизнес действительно работает в этом городе, и охотнее выводят его в топ по геозапросам и в картах.",
          },
          {
            title: "2. Повышение узнаваемости бренда",
            body: "Чем чаще локальные издания и блоги упоминают компанию, тем выше доверие жителей. Люди склонны выбирать тех, о ком «уже где-то слышали»: в статье городского портала, в блоге о районе, в обзоре местных экспертов. Гостевой постинг работает как нативная реклама, не раздражая аудиторию.",
          },
          {
            title: "3. Прямой поток клиентов",
            body: "Публикации на локальных площадках приводят к звонкам, заявкам, переходам на сайт и визитам в офис, особенно в нишах услуг: медицина, ремонт, услуги для дома, авто, красота, локальная торговля и кафе. Жители города доверяют привычным локальным ресурсам и охотно переходят по рекомендациям внутри материалов.",
          },
          {
            title: "4. Доступ к готовой локальной аудитории",
            body: "Региональные сайты уже имеют собранную базу читателей вашего города. Размещая гостевые посты, вы получаете доступ к этой аудитории без покупки трафика - достаточно дать ей полезный и релевантный контент.",
          },
          {
            title: "5. Улучшение ссылочного профиля",
            body: "Гостевые материалы обычно содержат ссылку на сайт, упоминание бренда, ссылки на соцсети и адрес. Такие локальные ссылки особенно сильны для местного SEO: они повышают траст ресурса, ускоряют индексацию и усиливают коммерческие страницы.",
          },
          {
            title: "6. Формирование экспертного образа",
            body: "Публикуя полезные статьи на локальных площадках, вы закрепляете за собой статус эксперта. Это повышает доверие аудитории и увеличивает шансы, что при выборе подрядчика или поставщика люди обратятся именно к вам.",
          },
        ],
      },
      {
        title: "Чего ожидать от гостевого постинга",
        blocks: [
          {
            body: "При системной работе гостевые посты дают:",
          },
          {
            body: [
              "рост позиций в локальном поиске;",
              "увеличение трафика на сайт;",
              "ускоренное продвижение карточек в Google Maps и Яндекс.Картах;",
              "увеличение числа отзывов и упоминаний о компании;",
              "укрепление бренда за счёт присутствия на локальных ресурсах.",
            ],
          },
          {
            body: "Первые результаты обычно появляются через 2–6 недель, но воздействие гостевых постов носит долгосрочный характер.",
          },
        ],
      },
      {
        title: "Как правильно размещать гостевые посты на локальных площадках",
        blocks: [
          {
            title: "Шаг 1. Выберите подходящие площадки",
            body: "Ищите сайты с локальной аудиторией, релевантной тематикой, органическим трафиком и живым сообществом. Это могут быть городские порталы, новостные ресурсы, блоги о городе, районные СМИ и тематические сайты (авто, ремонт, медицина, стройка и т.д.).",
          },
          {
            title: "Шаг 2. Подготовьте полезный и локальный контент",
            body: "Статья должна быть действительно полезной для жителей города: советы, разборы проблем, инструкции, локальные подборки и обзоры. Важно вписывать локальный контекст (районы, объекты, особенности города), а не делать абстрактный текст с упоминанием бренда.",
          },
          {
            title: "Шаг 3. Договоритесь о формате размещения",
            body: "Некоторые площадки принимают готовые материалы бесплатно, другие - по бартеру или на коммерческой основе. Согласуйте:",
          },
          {
            body: [
              "темы и формат статьи;",
              "объём текста;",
              "наличие и вид ссылок на ваш сайт;",
              "возможность указать бренд и контакты.",
            ],
          },
          {
            title: "Шаг 4. Укажите корректные данные о компании",
            body: "В bio‑блоке или подписи к статье укажите название компании, краткое позиционирование, город, сайт и ключевые контакты. Это поможет читателям быстро понять, кто вы и как с вами связаться.",
          },
          {
            title: "Шаг 5. Отслеживайте результаты",
            body: "После публикации отслеживайте переходы с площадки в аналитике, рост запросов по бренду, количество новых обращений и упоминаний. Это позволит оценить, какие форматы и сайты работают лучше.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Размещение гостевых постов на локальных площадках - мощный инструмент для тех, кто хочет укрепить бренд в своём городе, улучшить локальное SEO и получать стабильный поток клиентов. При грамотном выборе площадок, качественном контенте и регулярных публикациях эффект от гостевого постинга будет накапливаться и работать на ваш бизнес в долгую.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Guest posting on local websites: how to strengthen your brand and local SEO",
    lead: [
      "Publishing guest posts on local websites can be one of the most effective local marketing strategies for earning credible links and improving brand recognition.",
      "Well-written guest content strengthens local signals and can bring new customers who already live and search in your target area.",
    ],
    sections: [
      {
        title: "Why guest post on local platforms",
        blocks: [
          {
            title: "1. Better local SEO",
            body: "Local guest posts are a strong signal of authority and location relevance. When trusted local sites link to you, search engines better understand that your business truly operates in that city/region-and are more likely to surface you for geo-intent queries.",
          },
          {
            title: "2. Higher brand awareness",
            body: "Repeated mentions on local media and blogs build trust. People tend to choose brands they ‘have heard of’-through a city portal, a neighborhood blog, or a local expert roundup. Guest posting works like native advertising without annoying the audience.",
          },
          {
            title: "3. Direct lead flow",
            body: "Local publications can drive calls, form submissions, and visits-especially in service niches like healthcare, home services, auto, beauty, retail, and restaurants.",
          },
          {
            title: "4. Access to a ready local audience",
            body: "Regional sites already have readers from your city. Guest posts give you access to that audience without buying traffic-by providing useful, relevant content.",
          },
          {
            title: "5. A healthier link profile",
            body: "Guest posts often include a link to your website, a brand mention, social links, and sometimes address details. These references support trust, help indexation, and strengthen your commercial pages.",
          },
          {
            title: "6. Expert positioning",
            body: "Useful articles establish you as a local expert. That increases trust and improves the chance customers choose you over competitors.",
          },
        ],
      },
      {
        title: "What to expect from guest posting",
        blocks: [
          { body: "With consistent work, guest posts can deliver:" },
          {
            body: [
              "growth in local rankings;",
              "more website traffic;",
              "stronger visibility for your location profile in Google Maps;",
              "more reviews and brand mentions;",
              "stronger local brand presence.",
            ],
          },
          {
            body: "First results often show within 2–6 weeks, but guest posting has a cumulative long-term impact.",
          },
        ],
      },
      {
        title: "How to guest post the right way",
        blocks: [
          {
            title: "Step 1. Choose the right platforms",
            body: "Look for websites with a local audience, relevant topics, organic traffic, and an active community. Examples include city portals, local news sites, city blogs, neighborhood media, and niche local sites (auto, repair, healthcare, construction, etc.).",
          },
          {
            title: "Step 2. Write useful, locally grounded content",
            body: "Make the article genuinely useful for local readers: guides, checklists, problem breakdowns, local roundups, and reviews. Use real local context (neighborhoods, landmarks, common local situations)-not a generic text with a brand mention.",
          },
          {
            title: "Step 3. Agree on the placement format",
            body: "Some sites accept content for free, others require barter or payment. Align on:",
          },
          {
            body: [
              "topics and format;",
              "length;",
              "whether links are allowed and in what form;",
              "whether you can include brand and contact details.",
            ],
          },
          {
            title: "Step 4. Include accurate business details",
            body: "In the author bio or signature block, list your business name, positioning, city/area, website, and key contacts so readers can quickly understand who you are and how to reach you.",
          },
          {
            title: "Step 5. Track results",
            body: "After publishing, track referral traffic, branded search growth, inquiries, and mentions. This helps you learn what formats and sites work best.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "Guest posting on local platforms is a powerful way to build a local brand, improve local SEO, and generate a steady lead flow. With smart platform selection, strong content, and consistent publishing, the effect compounds over time.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "פרסום אורח באתרים מקומיים: איך לחזק מותג ו‑SEO מקומי",
    lead: [
      "פרסום מאמרי אורח באתרים מקומיים יכול להיות אסטרטגיה יעילה במיוחד להשגת אזכורים וקישורים איכותיים ולהעלאת מודעות למותג.",
      "תוכן אורח איכותי מחזק אותות מקומיים ויכול להביא לקוחות חדשים שמחפשים באזור שלכם.",
    ],
    sections: [
      {
        title: "למה לפרסם פוסטים אורחים בפלטפורמות מקומיות",
        blocks: [
          {
            title: "1. שיפור SEO מקומי",
            body: "פוסטים אורחים מקומיים הם סיגנל חזק של סמכות ורלוונטיות גיאוגרפית. כשאתרים מקומיים אמינים מקשרים אליכם, Google מבין טוב יותר שאתם פועלים בפועל בעיר/אזור-ומעלה סיכוי להופיע בביטויי ‘near me’ ובחיפושים עם כוונה מקומית.",
          },
          {
            title: "2. עלייה במודעות למותג",
            body: "אזכורים חוזרים במדיה מקומית ובבלוגים יוצרים אמון. אנשים נוטים לבחור מותגים שהם ‘כבר שמעו עליהם’-בפורטל עירוני, בלוג שכונה או כתבה של מומחים. פרסום אורח עובד כמו פרסום טבעי בלי להציק לקהל.",
          },
          {
            title: "3. זרם פניות ישיר",
            body: "פרסומים מקומיים יכולים להביא שיחות, טפסים ולקוחות-במיוחד בענפים כמו בריאות, שירותי בית, רכב, יופי, קמעונאות ומסעדות.",
          },
          {
            title: "4. גישה לקהל מקומי קיים",
            body: "לאתרים אזוריים יש כבר קוראים מהעיר שלכם. פוסט אורח מאפשר להגיע אליהם בלי לקנות טראפיק-באמצעות תוכן מועיל ורלוונטי.",
          },
          {
            title: "5. פרופיל קישורים בריא יותר",
            body: "פוסטים אורחים כוללים לרוב קישור לאתר, אזכור מותג, קישורי סושיאל ולעיתים גם פרטי קשר. זה תומך באמון, יכול לעזור באינדוקס ומחזק עמודים מסחריים.",
          },
          {
            title: "6. מיצוב כמומחים",
            body: "מאמרים מועילים יוצרים תדמית מומחה מקומית ומעלים את הסיכוי שיבחרו בכם.",
          },
        ],
      },
      {
        title: "למה לצפות מפרסום אורח",
        blocks: [
          { body: "בעבודה עקבית אפשר לקבל:" },
          {
            body: [
              "שיפור בדירוגים מקומיים;",
              "יותר תנועה לאתר;",
              "חיזוק נראות ב‑Google Maps;",
              "יותר ביקורות ואזכורים;",
              "חיזוק מותג מקומי.",
            ],
          },
          {
            body: "תוצאות ראשונות נוטות להופיע תוך 2–6 שבועות, אבל ההשפעה מצטברת לטווח ארוך.",
          },
        ],
      },
      {
        title: "איך לבצע פרסום אורח נכון",
        blocks: [
          {
            title: "שלב 1. לבחור אתרים מתאימים",
            body: "לחפש אתרים עם קהל מקומי, נושא רלוונטי, טראפיק אורגני וקהילה פעילה: פורטלים עירוניים, אתרי חדשות מקומיים, בלוגים על העיר, מדיה שכונתית ואתרי נישה מקומיים.",
          },
          {
            title: "שלב 2. לכתוב תוכן מועיל עם הקשר מקומי",
            body: "התוכן צריך להיות באמת מועיל לתושבי האזור: מדריכים, צ’ק-ליסטים, פירוק בעיות, רשימות מקומיות וסקירות. להכניס הקשר אמיתי (שכונות, נקודות ציון, מצבים מקומיים), ולא טקסט כללי עם אזכור מותג.",
          },
          {
            title: "שלב 3. להסכים על פורמט הפרסום",
            body: "חלק מהאתרים מפרסמים בחינם, אחרים בתשלום או ברטר. להסכים מראש על:",
          },
          {
            body: [
              "נושאים ופורמט;",
              "אורך;",
              "האם ואיזה קישורים מותר לכלול;",
              "האם אפשר להוסיף פרטי קשר/מותג.",
            ],
          },
          {
            title: "שלב 4. להוסיף פרטי עסק מדויקים",
            body: "בבלוק המחבר/ת או בסוף הכתבה לציין שם עסק, מיקום/אזור שירות, אתר ופרטי קשר כך שהקוראים יבינו במהירות איך לפנות.",
          },
          {
            title: "שלב 5. לעקוב אחרי תוצאות",
            body: "לעקוב אחרי תנועה מהאתר המפרסם, גידול בחיפושי מותג, פניות ואזכורים כדי לזהות אילו פורמטים עובדים הכי טוב.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "פרסום אורח בפלטפורמות מקומיות הוא כלי חזק לבניית מותג מקומי, שיפור SEO מקומי והבאת פניות. עם בחירת אתרים נכונה, תוכן איכותי והתמדה-ההשפעה מצטברת לאורך זמן.",
          },
        ],
      },
    ],
  },
};

export default content;
