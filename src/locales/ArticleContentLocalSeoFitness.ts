export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type HowToStep = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  sections: ArticleSection[];
  checklist: {
    storageKey: string;
    title: string;
    steps: readonly HowToStep[];
  };
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Локальное SEO для фитнес‑центров: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Фитнес‑центры, тренажёрные залы, студии йоги и кроссфита живут за счёт клиентов поблизости. Люди ищут зал рядом с домом или работой и выбирают те клубы, которые видны в локальной выдаче и вызывают доверие.",
      "Локальное SEO помогает вашему фитнес‑центру оказываться в числе первых вариантов на картах и в поиске.",
    ],
    sections: [
      {
        title: "Зачем фитнес‑центру нужно локальное SEO",
        blocks: [
          {
            title: "1. Пользователи выбирают зал по близости",
            body: "Запросы вроде «фитнес рядом», «спортзал возле меня», «йога в Партизанском районе» активируют локальную выдачу. Если клуб не оптимизирован под такие запросы, он просто не будет показан рядом с конкурентами.",
          },
          {
            title: "2. Конкуренция растёт",
            body: "Открываются новые залы, студии групповых занятий и федеральные сети. Алгоритмы учитывают не только расстояние, но и рейтинг, отзывы, качество карточки и активность. Локальное SEO помогает выделиться в этой борьбе.",
          },
          {
            title: "3. Повышение доверия",
            body: "Хорошо оформленные карточки и сайт (фото зала, тренеров, расписание, отзывы) повышают доверие и увеличивают количество заявок на пробную тренировку и продаж абонементов.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO для фитнес‑центра",
        blocks: [
          {
            body: [
              "Улучшение позиций по запросам «фитнес в [район]», «тренажёрный зал рядом», «йога студия недалеко».",
              "Рост видимости в Google Maps и Яндекс.Картах.",
              "Увеличение заявок на пробные тренировки и покупок абонементов.",
              "Укрепление репутации и рейтинга за счёт отзывов.",
              "Снижение зависимости от дорогой рекламы.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая локальная SEO‑стратегия для фитнес‑центров",
        blocks: [
          {
            title: "Шаг 1. Оптимизация сайта клуба",
            body: "Сайт должен быть современным, адаптивным и быстрым. Создайте отдельные страницы под ключевые направления: тренажёрный зал, йога, кроссфит, пилатес, групповые тренировки, персональные занятия и пр., с описанием, расписанием, фото и стоимостью.",
          },
          {
            title: "Шаг 2. Страницы тренеров",
            body: "Для каждого тренера сделайте отдельный блок/страницу: фото, опыт, специализация, сертификаты, мини‑история и, при возможности, видео. Люди часто выбирают зал именно по личности тренера.",
          },
          {
            title: "Шаг 3. Локальные страницы филиалов",
            body: "Если есть несколько филиалов, каждому нужен отдельный URL с адресом, картой, маршрутом, расписанием и контактами. Это помогает ранжироваться по запросам «фитнес + район/город».",
          },
        ],
      },
      {
        title: "Карточки в картах и отзывы",
        blocks: [
          {
            body: [
              "Заполните карточки в Google Maps и Яндекс.Картах: адрес, график, услуги, фото залов, тренеров и мероприятий.",
              "Стимулируйте клиентов оставлять честные отзывы после тренировок.",
              "Отвечайте на отзывы и вопросы, формируя образ живого и внимательного клуба.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для фитнес‑центров",
        blocks: [
          {
            title: "Когда появятся результаты?",
            body: "При активной работе с сайтом, картами и отзывами первые изменения видны через 4–8 недель, устойчивый рост записей и обращений - в течение 3–6 месяцев.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoFitnessChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "local-seo-fitness-checklist",
          title: "",
          description: "",
          items: [
            "Сделайте сайт удобным и быстрым на мобильных.",
            "Создайте страницы под направления и тренеров.",
            "Оформите локальные страницы для филиалов.",
            "Заполните и регулярно обновляйте карточки в картах.",
            "Собирайте отзывы и отслеживайте рост заявок и абонементов.",
          ],
        },
      ] as const,
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for gyms and fitness centers: why it matters, what to expect, and how to do it",
    lead: [
      "Gyms, fitness centers, yoga studios, and CrossFit boxes depend on nearby customers. People usually choose a club close to home or work-and they often decide from local search and Maps results.",
      "Local SEO helps your fitness center show up near the top when someone searches in your area.",
    ],
    sections: [
      {
        title: "Why a fitness center needs local SEO",
        blocks: [
          {
            title: "1. People choose based on proximity",
            body: "Searches like “gym near me”, “yoga studio near me”, or “CrossFit in Downtown” trigger local results. If your club isn’t optimized for local intent, it won’t show up next to competitors.",
          },
          {
            title: "2. Competition keeps growing",
            body: "New gyms, boutique studios, and national chains open constantly. Local algorithms consider not only distance but also ratings, reviews, listing quality, and activity. Local SEO helps you compete.",
          },
          {
            title: "3. Higher trust = more memberships",
            body: "Well-built listings and a strong site (facility photos, trainers, schedules, reviews) increase trust and drive more trial visits and membership sales.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Improved visibility for searches like “gym in [neighborhood]”, “fitness center near me”, “yoga studio nearby”.",
              "More presence in Google Maps and Apple Maps.",
              "More trial sign-ups and membership purchases.",
              "A stronger reputation through reviews.",
              "Less dependence on paid ads over time.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy for fitness centers",
        blocks: [
          {
            title: "Step 1. Optimize the website",
            body: "Your website should be modern, mobile-friendly, and fast. Create separate pages for key programs: strength training, yoga, CrossFit, Pilates, group classes, personal training, etc.-with schedules, photos, and pricing signals.",
          },
          {
            title: "Step 2. Trainer pages",
            body: "Create profiles for trainers/coaches: photo, experience, specialties, certifications, short story, and (if possible) video. People often choose a gym because of the coach.",
          },
          {
            title: "Step 3. Location pages",
            body: "If you have multiple locations, each needs its own URL with address, map, directions, hours/schedules, and contacts. This helps rank for “gym + neighborhood/city” queries.",
          },
        ],
      },
      {
        title: "Listings and reviews",
        blocks: [
          {
            body: [
              "Complete your Google Business Profile and keep it updated. Also make sure you’re accurate on Apple Maps and Bing Places where relevant.",
              "Encourage members to leave honest reviews.",
              "Reply to reviews and Q&A to show your club is active and attentive.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "With consistent work on your site, listings, and reviews, you’ll often see meaningful changes within 4–8 weeks. More stable membership growth typically takes 3–6 months.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoFitnessChecklist",
      title: "Checklist",
      steps: [
        {
          id: "local-seo-fitness-checklist",
          title: "",
          description: "",
          items: [
            "Make your website fast and easy to use on mobile.",
            "Create pages for programs and trainers.",
            "Build local pages for each location.",
            "Complete and regularly update your Maps listings.",
            "Collect reviews and track leads and membership growth.",
          ],
        },
      ] as const,
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "SEO מקומי לחדרי כושר ומרכזי כושר: למה זה חשוב, למה לצפות ואיך עושים את זה",
    lead: [
      "חדרי כושר, סטודיו יוגה ו‑CrossFit תלויים בלקוחות קרובים. אנשים בוחרים לרוב מועדון ליד הבית או העבודה-וההחלטה נעשית הרבה פעמים דרך תוצאות מקומיות ומפות.",
      "SEO מקומי עוזר למרכז הכושר להופיע גבוה כשהמחפשים באזור שלכם.",
    ],
    sections: [
      {
        title: "למה מרכז כושר צריך SEO מקומי",
        blocks: [
          {
            title: "1. אנשים בוחרים לפי קרבה",
            body: "חיפושים כמו “חדר כושר קרוב אליי”, “יוגה קרוב אליי”, או “CrossFit בתל אביב” מפעילים תוצאות מקומיות. בלי אופטימיזציה לחיפוש מקומי, אתם לא תופיעו ליד המתחרים.",
          },
          {
            title: "2. התחרות גדלה",
            body: "נפתחים עוד מועדונים, סטודיואים ורשתות. האלגוריתם מתחשב לא רק במרחק אלא גם בדירוגים, ביקורות, איכות הכרטיס ופעילות. SEO מקומי עוזר להתחרות.",
          },
          {
            title: "3. יותר אמון = יותר מנויים",
            body: "כרטיסים מסודרים ואתר איכותי (תמונות, מאמנים, לו״ז, ביקורות) מעלים אמון ומגדילים פניות לאימון ניסיון ומכירת מנויים.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "שיפור נראות לחיפושים כמו “חדר כושר ב[שכונה]”, “סטודיו יוגה קרוב”, “מרכז כושר קרוב אליי”.",
              "יותר נוכחות ב‑Google Maps וב‑Waze (וגם ב‑Apple Maps).",
              "יותר פניות לאימון ניסיון ויותר רכישות מנויים.",
              "חיזוק מוניטין דרך ביקורות.",
              "פחות תלות בפרסום ממומן לאורך זמן.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד",
        blocks: [
          {
            title: "שלב 1. לשפר את האתר",
            body: "האתר צריך להיות מהיר ונוח במובייל. ליצור עמודים נפרדים לתכניות מרכזיות: חדר כושר, יוגה, CrossFit, פילאטיס, שיעורים קבוצתיים, אימון אישי וכו’ עם לו״ז, תמונות וסימני מחיר.",
          },
          {
            title: "שלב 2. עמודי מאמנים",
            body: "לבנות פרופילים למאמנים: תמונה, ניסיון, התמחות, תעודות, סיפור קצר ואם אפשר וידאו. אנשים בוחרים פעמים רבות לפי המאמן.",
          },
          {
            title: "שלב 3. דפי סניפים",
            body: "אם יש כמה סניפים, לכל סניף צריך URL משלו עם כתובת, מפה, הוראות הגעה, שעות/לו״ז ופרטי קשר. זה עוזר לחיפושי “חדר כושר + שכונה/עיר”.",
          },
        ],
      },
      {
        title: "כרטיסים במפות וביקורות",
        blocks: [
          {
            body: [
              "למלא ולתחזק את Google Business Profile, ולוודא נוכחות נכונה גם ב‑Waze וב‑Apple Maps.",
              "לעודד מתאמנים להשאיר ביקורות אמיתיות.",
              "להגיב לביקורות ולשאלות כדי להראות פעילות ואכפתיות.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "כאשר עובדים באופן עקבי על האתר, הכרטיסים והביקורות, לרוב רואים שיפור תוך 4–8 שבועות. צמיחה יציבה במנויים בדרך כלל לוקחת 3–6 חודשים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoFitnessChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "local-seo-fitness-checklist",
          title: "",
          description: "",
          items: [
            "להפוך את האתר למהיר ונוח במובייל.",
            "ליצור עמודים לתכניות ולמאמנים.",
            "ליצור דפים מקומיים לסניפים.",
            "למלא ולעדכן כרטיסים במפות.",
            "לאסוף ביקורות ולעקוב אחרי פניות ומכירת מנויים.",
          ],
        },
      ] as const,
    },
  },
};

export default content;
