export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  checklistTitle: string;
  checklistItems: string[];
  sections: ArticleSection[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Аудит репутации бренда в интернете: зачем он нужен, чего ожидать и как его проводить",
    lead: [
      "Репутация бренда в интернете напрямую влияет на доверие клиентов, количество заявок и продажи. Один вирусный пост, серия негативных отзывов или конфликт в соцсетях способны резко снизить конверсию и испортить долгосрочные показатели. Аудит репутации - это комплексная оценка того, как бренд видят и обсуждают пользователи на картах, в соцсетях, СМИ, отзовиках и блогах, с понятным планом, как повысить доверие и управляемо расти.",
    ],
    checklistTitle: "Чек‑лист",
    checklistItems: [
      "Соберите источники и выгрузите упоминания за 12–24 мес.",
      "Постройте динамику и выделите кризисные точки.",
      "Разметьте темы негатива и найдите корневые причины.",
      "Проверьте качество и скорость ответов, внедрите сценарии.",
      "Запустите позитивную повестку и этичный сбор отзывов.",
      "Ведите ежемесячный мониторинг и квартальную корректировку.",
    ],
    sections: [
      {
        title: "Зачем нужен аудит репутации",
        blocks: [
          {
            title: "1. Понять, как бренд воспринимают пользователи",
            body: "Реальные упоминания живут в разных экосистемах: форумы, карты, отзовики, соцсети, блоги, медиа. Аудит собирает всё в единую картину: что говорят, каким тоном, как часто и где эти сигналы видит целевая аудитория.",
          },
          {
            title: "2. Предотвращать и гасить кризисы",
            body: "Негатив без реакции растёт лавинообразно. Аудит помогает вовремя обнаруживать всплески, находить первопричины, выбирать корректную линию коммуникации и переводить конфликт в конструктив.",
          },
          {
            title: "3. Повышать доверие и конверсию",
            body: "Сильная репутация усиливает все каналы: выше CTR, больше заявок, больше повторных покупок и рекомендаций. Аудит показывает, какие площадки и форматы отзывов/публикаций дают максимальный вклад в доверие.",
          },
          {
            title: "4. Контролировать информационное поле",
            body: "Фейковые отзывы, заказной негатив, устаревшие данные и искажения - всё это подрывает доверие. Аудит помогает выявить такие материалы и наметить правовые/коммуникационные шаги по их нейтрализации.",
          },
          {
            title: "5. Выявлять точки роста бренда",
            body: "Где присутствовать активнее, какие темы и форматы откликаются у аудитории, какие преимущества стоит подчеркивать, как построить долгосрочную стратегию ORM и контента - ответы рождаются в процессе аудита.",
          },
        ],
      },
      {
        title: "Что включает полноценный аудит репутации",
        blocks: [
          {
            title: "1. Анализ отзывов на всех площадках",
            body: "Google Reviews, 2ГИС, профкаталоги, отзовики, маркетплейсы, соцсети. Оценивается общий тон (позитив/нейтрал/негатив), частые причины негатива, динамика и «вес» площадок для вашей ниши и региона.",
          },
          {
            title: "2. Социальные сети: упоминания и реакции",
            body: "Мониторинг хэштегов, комментариев, тематических групп и реакции на контент. Оценивается попадание в ожидания аудитории, конфликтные точки и грамотность коммуникации в ленте и комментариях.",
          },
          {
            title: "3. Упоминания в СМИ, блогах и на форумах",
            body: "Что пишут журналисты и лидеры мнений, какие публикации индексируются и попадают в видимые позиции, нет ли негативных материалов в «первом экране» выдачи по бренду.",
          },
          {
            title: "4. Конкурентная репутация",
            body: "Сравнение по объёму упоминаний, тональности, реакции аудитории и сильным/слабым сторонам. Это помогает понять, какие практики воспроизвести, а где отстроиться.",
          },
          {
            title: "5. Видимость позитивного/негативного контента",
            body: "Оценивается, какой контент реально видит пользователь при поиске бренда: что в ТОПе, что «тонет», где есть риски, которые требуют немедленных действий.",
          },
          {
            title: "6. Оформление и стратегии коммуникации",
            body: "Аудит профилей и карточек, регулярность публикаций, эффективность контента, сценарии коммуникации и правила эскалации. Готовые рекомендации по выстраиванию ORM‑процессов.",
          },
        ],
      },
      {
        title: "Как провести аудит: пошаговый план",
        blocks: [
          {
            title: "Шаг 1. Список площадок и выгрузка упоминаний",
            body: "Соберите карты, отзовики, соцсети, медиа, форумы, блоги. Зафиксируйте ссылки, даты, тональность и охват, выгрузите данные за 12–24 месяца в одну таблицу для анализа.",
          },
          {
            title: "Шаг 2. Динамика и «температура» бренда",
            body: "Постройте помесячную динамику упоминаний и тональности, выделите резкие всплески и просадки. Сопоставьте с событиями: акции, скандалы, релизы, расширение сети, кадровые изменения.",
          },
          {
            title: "Шаг 3. Тематический разбор и причины негатива",
            body: "Разбейте негатив на темы: сервис, ожидание, цена, компетенции, логистика, гарантия, коммуникации. Для тем с наибольшим вкладом сформируйте гипотезы корневых причин и предложите изменения процессов.",
          },
          {
            title: "Шаг 4. Оценка качества коммуникации",
            body: "Доля ответов и скорость реакции, формат и тон ответов, сценарии деэскалации. Подготовьте шаблоны, которые персонализируются фактами и не усугубляют конфликт.",
          },
          {
            title: "Шаг 5. Усиление позитивной повестки",
            body: "План создания и продвижения позитивных инфоповодов: кейсы, отзывы с фото/видео, партнёрства, локальные активности (участие в событиях Минска, поддержка мероприятий в Гомеле, инициативы в районах), экспертный контент. Настройте регулярный этичный сбор отзывов с акцентом на полезные детали.",
          },
          {
            title: "Шаг 6. Мониторинг и отчётность",
            body: "Введите ежемесячный отчёт: объём упоминаний, тональность, охват/ER, позиции брендовой выдачи, поведение карточек в картах, доля и скорость ответов, кейсы по закрытию конфликтов. На основе отчёта - квартальные корректировки стратегии.",
          },
        ],
      },
      {
        title: "Практические примеры и частые ошибки",
        blocks: [
          {
            title: "Пример 1. «Невидимый» негатив в выдаче",
            body: "Небольшой блог с негативной публикацией попал в ТОП по брендовому запросу. Переразметка сайта, выпуск серии кейсов, работа с медиа и усиление карточек в картах «сдвинули» негатив на вторую страницу, а CTR брендового сниппета вырос.",
          },
          {
            title: "Пример 2. Конфликт в соцсетях",
            body: "Непродуманный ответ в комментариях усилил волну негатива. Введение регламента, изменение тона, перевод обсуждения в личные сообщения и компенсация исправили ситуацию, снизив прирост негатива и вернув вовлечённость к норме.",
          },
          {
            title: "Типичные ошибки",
            body: [
              "Игнорировать источники вне карт и отзовиков (СМИ, блоги, форумы, соцсети).",
              "Ставить «затычки» в комментариях вместо исправления корневых причин.",
              "Опаздывать с ответами: спустя недели репутационный ущерб выше.",
              "Публиковать неискренние формальные ответы без фактуры и адресного решения.",
              "Отсутствие стабильной позитивной повестки и системы мониторинга.",
            ],
          },
        ],
      },
      {
        title: "FAQ: коротко о важном",
        blocks: [
          {
            title: "Как часто проводить аудит?",
            body: "Раз в 3–6 месяцев и обязательно - после значимых инфоповодов, запуска новых локаций, ребрендинга или кризисов.",
          },
          {
            title: "Когда ждать эффект?",
            body: "Быстрые улучшения (CTR, снижение видимости негатива, рост вовлечённости) возможны в 2–6 недель при активной работе; устойчивые изменения формируются в горизонте 1–3 месяцев.",
          },
          {
            title: "Можно ли «купить отзывы»?",
            body: "Нет. Это нарушает правила площадок, бьёт по доверию и чревато санкциями. Стратегия - только этичный сбор и работа с сервисом.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Online brand reputation audit: why it matters, what to expect, and how to run it",
    lead: [
      "Your online reputation directly impacts trust, leads, and revenue. A viral post, a wave of negative reviews, or a social media conflict can quickly reduce conversion and damage long-term performance. A reputation audit is a structured assessment of how people perceive and discuss your brand across maps, social platforms, media, review sites, and forums-plus a clear plan to improve trust and grow sustainably.",
    ],
    checklistTitle: "Checklist",
    checklistItems: [
      "List your sources and export mentions for the last 12–24 months.",
      "Build a timeline and identify crisis peaks.",
      "Tag negative themes and find root causes.",
      "Review response quality and speed; implement playbooks.",
      "Create positive narratives and ethical review collection.",
      "Monitor monthly and adjust quarterly.",
    ],
    sections: [
      {
        title: "Why a reputation audit matters",
        blocks: [
          {
            title: "1. Understand perception",
            body: "Real conversations happen across ecosystems: maps, review sites, social media, forums, blogs, and news. An audit consolidates signals into one view: what people say, sentiment, volume, and where your audience sees it.",
          },
          {
            title: "2. Prevent and reduce crises",
            body: "Unanswered negativity compounds. Audits help spot spikes early, identify causes, choose the right response strategy, and de-escalate issues.",
          },
          {
            title: "3. Improve trust and conversion",
            body: "Strong reputation improves everything: higher CTR, more leads, more repeat customers and referrals. Audits show which platforms and content formats drive the most trust.",
          },
          {
            title: "4. Control the information landscape",
            body: "Fake reviews, coordinated attacks, outdated info, and misinformation all hurt trust. Audits help you identify issues and plan legal/communication actions.",
          },
          {
            title: "5. Find growth levers",
            body: "Where to be more active, which topics resonate, and how to build a long-term ORM strategy becomes clearer through the audit.",
          },
        ],
      },
      {
        title: "What a full audit includes",
        blocks: [
          {
            title: "1. Review analysis across key platforms",
            body: "Google Reviews, Yelp, industry directories, marketplaces, and social channels. Evaluate sentiment, recurring complaints, trends, and which sources matter most for your market.",
          },
          {
            title: "2. Social monitoring",
            body: "Track mentions, comments, community groups, and responses. Evaluate expectations fit, conflict triggers, and communication quality.",
          },
          {
            title: "3. Media, blogs, and forums",
            body: "What journalists and creators publish, what ranks for branded searches, and whether negative content sits on page one.",
          },
          {
            title: "4. Competitive comparison",
            body: "Benchmark share of voice, sentiment, response behavior, and strengths/weaknesses versus competitors.",
          },
          {
            title: "5. Visibility of positive vs. negative",
            body: "Assess what customers actually see: what ranks, what is buried, and which risks require immediate action.",
          },
          {
            title: "6. Profiles and response playbooks",
            body: "Audit profile completeness, posting cadence, content effectiveness, response scripts, and escalation rules.",
          },
        ],
      },
      {
        title: "How to run an audit: step-by-step",
        blocks: [
          {
            title: "Step 1. Inventory sources and export mentions",
            body: "List maps, review sites, social channels, media, forums, and blogs. Capture URLs, dates, sentiment, and reach, then export 12–24 months into one analysis sheet.",
          },
          {
            title: "Step 2. Timeline and brand ‘temperature’",
            body: "Plot monthly volume and sentiment, then align spikes with events: promos, launches, staffing changes, incidents, and expansions.",
          },
          {
            title: "Step 3. Themes and root causes",
            body: "Tag negative feedback by theme: service, expectations, pricing, logistics, warranty, communication. Build root-cause hypotheses and propose process changes.",
          },
          {
            title: "Step 4. Response quality audit",
            body: "Measure response rate and speed, tone, and de-escalation patterns. Create templates that are personalized with facts and move conversations forward.",
          },
          {
            title: "Step 5. Strengthen positive narratives",
            body: "Plan positive assets: case studies, customer stories with photos/video, partnerships, community involvement, expert content, and ethical review collection.",
          },
          {
            title: "Step 6. Monitoring and reporting",
            body: "Set a monthly report: volume, sentiment, engagement, branded search visibility, map listing actions, response rate/speed, and resolved cases-then adjust quarterly.",
          },
        ],
      },
      {
        title: "Examples and common mistakes",
        blocks: [
          {
            title: "Example 1. ‘Invisible’ negative content ranking",
            body: "A small blog post with negative coverage ranked on page one for branded search. Technical cleanup, new case studies, PR outreach, and stronger listings pushed it down and improved CTR.",
          },
          {
            title: "Example 2. A social conflict",
            body: "A careless comment response amplified negative attention. A clear playbook, better tone, moving to DMs, and making it right reduced negativity and stabilized engagement.",
          },
          {
            title: "Common mistakes",
            body: [
              "Ignoring sources outside maps and review sites (news, forums, social).",
              "Posting ‘band-aid’ replies instead of fixing root causes.",
              "Responding too late.",
              "Using generic, insincere replies without concrete resolution.",
              "No consistent positive content and no monitoring system.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you run an audit?",
            body: "Every 3–6 months, and after major events like a rebrand, expansion, or crisis.",
          },
          {
            title: "When will you see impact?",
            body: "Quick wins (CTR, reduced negative visibility, improved engagement) can happen in 2–6 weeks. More stable change often takes 1–3 months.",
          },
          {
            title: "Can you buy reviews?",
            body: "No. It violates platform policies and can damage trust. Use ethical review collection and service improvements.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "אודיט מוניטין דיגיטלי: למה זה חשוב, למה לצפות ואיך עושים זאת",
    lead: [
      "מוניטין אונליין משפיע ישירות על אמון, לידים ומכירות. פוסט ויראלי, גל ביקורות שליליות או משבר ברשתות יכולים לפגוע במהירות בהמרות. אודיט מוניטין הוא בדיקה מסודרת של איך מדברים על המותג במפות, ברשתות, במדיה ובאתרי ביקורות-עם תוכנית לשיפור.",
    ],
    checklistTitle: "צ׳ק־ליסט",
    checklistItems: [
      "לאסוף מקורות ולייצא אזכורים ל‑12–24 חודשים.",
      "לבנות ציר זמן ולזהות נקודות משבר.",
      "לסווג נושאי שלילי ולמצוא גורמי שורש.",
      "לבדוק איכות ומהירות תגובות ולהטמיע תרחישים.",
      "לבנות נרטיב חיובי ואיסוף ביקורות אתי.",
      "מעקב חודשי ועדכון רבעוני.",
    ],
    sections: [
      {
        title: "למה צריך אודיט מוניטין",
        blocks: [
          {
            title: "1. להבין תפיסה",
            body: "שיחות מתרחשות במפות, אתרי ביקורות, רשתות חברתיות, פורומים ובלוגים. האודיט מאחד את התמונה.",
          },
          {
            title: "2. למנוע משברים",
            body: "שלילי ללא תגובה מחמיר. אודיט עוזר לזהות מוקדם ולנהל הסלמה בצורה נכונה.",
          },
          {
            title: "3. להעלות אמון והמרות",
            body: "מוניטין חזק מעלה CTR, לידים והמלצות. האודיט מראה מה עובד.",
          },
        ],
      },
      {
        title: "מה זה כולל",
        blocks: [
          {
            title: "ניתוח ביקורות",
            body: "מפות ואתרי ביקורות מרכזיים, ספריות מקצועיות ורשתות-טון, מגמות ונושאים חוזרים.",
          },
          {
            title: "תוכנית פעולה",
            body: "ציר זמן, תיוג נושאים, תסריטי תגובה, ותוכן חיובי עקבי.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "כל כמה זמן?",
            body: "כל 3–6 חודשים ובאירועים משמעותיים.",
          },
          {
            title: "אפשר לקנות ביקורות?",
            body: "לא. זה מסוכן ופוגע באמון.",
          },
        ],
      },
    ],
  },
};

export default content;
