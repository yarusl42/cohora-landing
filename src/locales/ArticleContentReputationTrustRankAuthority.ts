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
      "Что такое репутация сайта (TrustRank, авторитетность) и как она влияет на SEO",
    lead: [
      "Репутация сайта - один из ключевых, но часто недооценённых факторов SEO. Поисковые системы по‑разному доверяют разным сайтам, и от уровня этого доверия зависит, окажетесь ли вы в ТОП‑3 или на 3–5 страницах выдачи.",
      "Понять и прокачать TrustRank важно всем, кто хочет устойчивого роста трафика, а не краткосрочных всплесков.",
    ],
    sections: [
      {
        title: "1. Что такое TrustRank и зачем он нужен",
        blocks: [
          {
            body: "TrustRank - это уровень доверия поисковых систем к вашему сайту. По сути, это оценка того, насколько ресурс честный, полезный, безопасный и авторитетный в своей теме. Чем выше доверие, тем проще странице попасть в ТОП и удержаться там, даже в конкурентной нише.",
          },
          {
            title: "Почему поисковикам важно доверие",
            body: "Задача Google и других поисковых систем - выдать пользователю лучший и безопасный результат. Поэтому они усиливают позиции «хороших» сайтов, наказывают за манипуляции и отдают предпочтение тем ресурсам, которые заслужили репутацию. Без доверия даже идеальная техническая оптимизация и сильные тексты не дадут максимального эффекта.",
          },
        ],
      },
      {
        title:
          "2. Из чего состоит авторитетность сайта: основные факторы TrustRank",
        blocks: [
          {
            title: "1. Возраст домена и его история",
            body: [
              "были ли санкции и фильтры;",
              "менялась ли тематика резко и неоднократно;",
              "использовался ли домен для спама или мошенничества;",
              "наблюдались ли подозрительные всплески ссылок.",
            ],
          },
          {
            body: "Сайты с чистой историей получают больше доверия и легче растут при прочих равных.",
          },
          {
            title: "2. Качество внешних ссылок",
            body: "Линкбилдинг остаётся одним из сильнейших сигналов доверия. Важно не количество ссылок, а их качество и естественность. Упоминания и ссылки из СМИ, отраслевых порталов, тематических блогов и известных брендов работают как «голоса доверия» в глазах алгоритмов.",
          },
          {
            title: "3. Упоминания бренда без ссылок",
            body: "Алгоритмы учитывают не только кликабельные ссылки, но и текстовые упоминания бренда: в статьях, соцсетях, обзорах, рейтингах и на форумах. Чем чаще бренд упоминается в нейтральном или положительном контексте, тем выше воспринимаемая авторитетность.",
          },
          {
            title: "4. Поведенческие факторы",
            body: [
              "сколько времени проводят на страницах;",
              "переходят ли на другие разделы;",
              "возвращаются ли в поиск через несколько секунд;",
              "совершают ли целевые действия (заявки, звонки, покупки).",
            ],
          },
          {
            body: "Если сайт удерживает и «доводит» пользователя до результата, репутация растёт.",
          },
          {
            title: "5. Контент и экспертность",
            body: "Модель E‑E‑A‑T (опыт, экспертность, авторитетность, надёжность) требует, чтобы сайт публиковал качественные материалы, демонстрировал реальный опыт и отвечал за точность информации. Это критично для медицины, финансов, юриспруденции и образования, но важно для любой ниши.",
          },
        ],
      },
      {
        title: "3. Почему репутация сайта критична для SEO",
        blocks: [
          {
            body: "TrustRank влияет практически на все аспекты продвижения: ускоряет индексацию новых страниц, помогает легче заходить в ТОП и удерживаться в нём, расширяет спектр запросов, снижает риск санкций и делает SEO более стабильным в долгую.",
          },
          {
            body: "Если уровень доверия низкий, новые материалы индексируются медленно, контент с трудом попадает в топ, а внешние ссылки работают слабее.",
          },
        ],
      },
      {
        title: "4. Как работать над повышением доверия сайта",
        blocks: [
          {
            title: "Этап 1. Аудит текущего TrustRank",
            body: "Оцените историю домена, ссылочный профиль, санкции, техническое состояние, контент и поведение пользователей. Это помогает понять основные риски и точки роста.",
          },
          {
            title: "Этап 2. Очистка и защита",
            body: "Удалите или закройте от индексации спам‑страницы, настройте редиректы, уберите токсичные ссылки и включите базовые меры безопасности (HTTPS, защита форм, актуальные CMS и плагины).",
          },
          {
            title: "Этап 3. Улучшение контента и структурирование",
            body: "Переосмыслите контент‑стратегию: добавьте экспертные материалы, кейсы, FAQ, улучшите внутреннюю перелинковку и уточните заголовки/метатеги под реальные запросы пользователей.",
          },
          {
            title: "Этап 4. Развитие бренда и упоминаний",
            body: "Запускайте активности, которые приводят к естественным упоминаниям бренда и ссылкам: публикации в локальных и отраслевых СМИ, участие в рейтингах, партнёрства, экспертные комментарии и выступления.",
          },
          {
            title: "Этап 5. Мониторинг и долгосрочная работа",
            body: "Репутация формируется со временем. Регулярно отслеживайте позиции, анализируйте профиль ссылок, следите за упоминаниями бренда и поведением пользователей, чтобы вовремя реагировать на изменения.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Репутация сайта - это фундамент, на котором держится всё SEO. Техническая оптимизация, контент, ссылки и работа с картами дают максимальный эффект только тогда, когда поисковые системы доверяют вашему ресурсу.",
          },
          {
            body: "Инвестируя время в TrustRank, бизнес получает не только рост позиций, но и долгосрочную устойчивость в поиске.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Website trust and authority (TrustRank): what it is and how it impacts SEO",
    lead: [
      "Website trust is a major (and often underestimated) SEO factor. Search engines don’t trust all sites equally-and that trust can be the difference between ranking in the top 3 or being buried on page 3–5.",
      "Understanding and improving trust signals matters if you want steady long-term growth, not short-term spikes.",
    ],
    sections: [
      {
        title: "1. What TrustRank means (in practice)",
        blocks: [
          {
            body: "TrustRank is a shorthand for how much a search engine trusts your website. It’s an overall assessment of safety, usefulness, credibility, and authority within your niche. Higher trust usually makes it easier to rank and stay ranked-especially in competitive categories.",
          },
          {
            title: "Why trust matters to search engines",
            body: "Google’s job is to return the best and safest result. That’s why it rewards trustworthy sites, penalizes manipulation, and prefers sources with strong reputations. Without trust, even solid technical SEO and great content won’t reach their full potential.",
          },
        ],
      },
      {
        title: "2. The main trust and authority factors",
        blocks: [
          {
            title: "1. Domain age and history",
            body: [
              "previous penalties;",
              "sudden topic changes;",
              "use for spam or scams;",
              "suspicious backlink spikes.",
            ],
          },
          {
            body: "A clean history usually makes growth easier.",
          },
          {
            title: "2. Backlink quality",
            body: "Links still matter-but quality and relevance matter far more than volume. Mentions and links from reputable media, industry sites, and established brands act as trust votes.",
          },
          {
            title: "3. Brand mentions (even without links)",
            body: "Modern systems can interpret brand mentions across articles, social media, reviews, rankings, and forums. Frequent neutral/positive mentions generally improve perceived authority.",
          },
          {
            title: "4. User behavior signals",
            body: [
              "time on page;",
              "depth of navigation;",
              "quick returns to search;",
              "conversions (calls, forms, purchases).",
            ],
          },
          {
            body: "If users find what they need and take action, trust tends to increase.",
          },
          {
            title: "5. Content quality and expertise (E-E-A-T)",
            body: "E‑E‑A‑T (Experience, Expertise, Authoritativeness, Trustworthiness) matters in every niche, and it’s critical in YMYL areas like health, finance, and legal. High-trust sites show real expertise, accurate information, and accountability.",
          },
        ],
      },
      {
        title: "3. Why trust is critical for SEO",
        blocks: [
          {
            body: "Trust impacts many outcomes: faster indexing, easier top rankings, broader keyword coverage, lower penalty risk, and more stable organic performance.",
          },
          {
            body: "If trust is low, new pages can be slow to index, content struggles to rank, and even backlinks may have weaker impact.",
          },
        ],
      },
      {
        title: "4. How to improve trust over time",
        blocks: [
          {
            title: "Step 1. Audit trust signals",
            body: "Review domain history, backlinks, potential penalties, technical health, content quality, and engagement.",
          },
          {
            title: "Step 2. Clean up and protect",
            body: "Remove spam pages, fix redirects, disavow toxic links when needed, and keep security basics strong (HTTPS, updated CMS/plugins, protected forms).",
          },
          {
            title: "Step 3. Upgrade content and structure",
            body: "Build a content plan around real search intent, add case studies and FAQs, strengthen internal linking, and keep titles/meta aligned with what users actually search.",
          },
          {
            title: "Step 4. Build brand authority",
            body: "Earn mentions naturally: PR, industry publications, partnerships, expert commentary, and speaking opportunities.",
          },
          {
            title: "Step 5. Monitor and iterate",
            body: "Track rankings, link profile changes, brand mentions, and user behavior so you can react early.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Website trust is the foundation behind SEO performance. Technical work, content, and links deliver the best results only when search engines consider your site credible.",
          },
          {
            body: "Investing in trust signals leads to more stable rankings and long-term growth.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "אמינות וסמכות אתר (TrustRank): מה זה ואיך זה משפיע על SEO",
    lead: [
      "אמינות האתר היא גורם SEO חשוב שלעתים מתעלמים ממנו. מנועי חיפוש לא נותנים אמון שווה לכל האתרים-והאמון הזה יכול להכריע בין מקום בטופ 3 לבין עמודים רחוקים יותר.",
      "שיפור אותות אמון חשוב למי שרוצה צמיחה יציבה לאורך זמן.",
    ],
    sections: [
      {
        title: "1. מה זה TrustRank בפועל",
        blocks: [
          {
            body: "TrustRank הוא דרך לתאר את רמת האמון של מנוע חיפוש באתר: האם הוא בטוח, מועיל, אמין וסמכותי בתחום. ככל שהאמון גבוה יותר-כך קל יותר לדרג ולהישאר בדירוג.",
          },
          {
            title: "למה אמון חשוב",
            body: "המטרה של Google היא לתת תוצאה טובה ובטוחה. לכן אתרים אמינים מקבלים יתרון, ומניפולציות נענשות.",
          },
        ],
      },
      {
        title: "2. גורמים מרכזיים לאמינות וסמכות",
        blocks: [
          {
            title: "1. היסטוריית דומיין",
            body: [
              "סנקציות בעבר;",
              "שינויים חדים בנושא;",
              "שימוש לספאם/הונאות;",
              "קפיצות חשודות בקישורים.",
            ],
          },
          {
            title: "2. איכות קישורים",
            body: "איכות ורלוונטיות חשובות יותר מכמות. אזכורים וקישורים ממקורות מוכרים מעבירים ‘הצבעת אמון’.",
          },
          {
            title: "3. אזכורי מותג",
            body: "אזכורים בטקסט (גם בלי קישור) בכתבות, רשתות חברתיות ופורומים יכולים לחזק סמכות נתפסת.",
          },
          {
            title: "4. אותות התנהגות",
            body: [
              "זמן באתר;",
              "מעבר בין עמודים;",
              "חזרה מהירה לחיפוש;",
              "המרות (שיחות/טפסים/רכישות).",
            ],
          },
          {
            title: "5. תוכן ומומחיות (E‑E‑A‑T)",
            body: "תוכן איכותי, מומחיות והצגת ניסיון אמיתי חשובים בכל נישה, ובמיוחד בתחומים כמו בריאות, פיננסים ומשפט.",
          },
        ],
      },
      {
        title: "3. איך לשפר אמון לאורך זמן",
        blocks: [
          {
            title: "שלב 1. בדיקת מצב",
            body: "לבחון היסטוריית דומיין, קישורים, מצב טכני, איכות תוכן ומעורבות.",
          },
          {
            title: "שלב 2. ניקוי והגנה",
            body: "להסיר עמודי ספאם, לטפל בהפניות, לחזק אבטחה (HTTPS, עדכוני CMS/תוספים) ולהגן על טפסים.",
          },
          {
            title: "שלב 3. שדרוג תוכן",
            body: "לבנות אסטרטגיית תוכן לפי כוונת חיפוש, להוסיף מקרי בוחן ו‑FAQ ולחזק קישורים פנימיים.",
          },
          {
            title: "שלב 4. בניית סמכות מותג",
            body: "להשיג אזכורים טבעיים דרך PR, שיתופי פעולה, כתבות ונוכחות מקצועית.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "אמון הוא הבסיס ל‑SEO יציב. כאשר מנועי חיפוש רואים באתר מקור אמין, קל יותר להשיג תוצאות לאורך זמן.",
          },
        ],
      },
    ],
  },
};

export default content;
