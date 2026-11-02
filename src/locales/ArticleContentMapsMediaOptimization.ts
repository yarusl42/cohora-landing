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
      "Оптимизация карточки для фото‑ и видео‑контента: зачем это нужно и как делать правильно",
    lead: [
      "Оптимизация фото и видео в карточках белорусского бизнеса - один из ключевых факторов успеха в локальном поиске в Минске, Бресте, Гомеле и других городах Беларуси. Качественный визуал помогает получать больше кликов, звонков и маршрутов, а также повышает доверие.",
      "Карточка в картах часто становится первым контактом клиента с брендом. От того, как она выглядит и какую информацию содержит, зависит первое впечатление и решение о звонке или визите.",
      "Визуальный контент - ключевой фактор выбора в картах и локальной выдаче. Карточки с качественными фото и видео обычно получают больше просмотров, действий и обращений.",
    ],
    checklistTitle: "Чек‑лист",
    checklistItems: [
      "Подготовьте набор качественных реальных фото (фасад, интерьер, команда, услуги, результаты, прайс).",
      "Добавьте одно‑два коротких видео о компании или процессах.",
      "Загрузите медиа в карточки в ключевых сервисах (Google Maps, 2ГИС, Apple Maps и др.).",
      "Следите за статистикой просмотров, кликов и маршрутов.",
      "Обновляйте контент минимум раз в сезон или при значимых изменениях.",
    ],
    sections: [
      {
        title: "Зачем оптимизировать фото‑ и видео‑контент",
        blocks: [
          {
            title: "1. Визуал как главный фактор доверия",
            body: "Пользователь принимает решение за секунды, и первое, что он видит - фотографии. Отсутствие или низкое качество фото создаёт ощущение слабого или «неживого» бизнеса, а хорошие изображения формируют образ профессиональной и открытой компании.",
          },
          {
            title: "2. Влияние на видимость в картах",
            body: "Алгоритмы карт учитывают количество и свежесть фото, а также наличие видео как сигнал активности и релевантности. Карточки с хорошим визуалом получают больше показов и чаще выбираются пользователями.",
          },
          {
            title: "3. Увеличение конверсии",
            body: "Реальные интерьеры, команда, оборудование, примеры работ и атмосфера помогают человеку представить опыт взаимодействия с бизнесом и повышают вероятность звонка или визита.",
          },
        ],
      },
      {
        title: "Чего ожидать после оптимизации визуального контента",
        blocks: [
          {
            body: [
              "Рост просмотров карточки в картах.",
              "Больше звонков, построений маршрутов и переходов на сайт.",
              "Больше доверия и, как следствие, больше отзывов.",
              "Укрепление позиций в локальной выдаче.",
              "Более сильная визуальная идентичность бренда.",
            ],
          },
        ],
      },
      {
        title: "Как правильно оптимизировать фото",
        blocks: [
          {
            title: "1. Требования к качеству",
            body: "Фото должны быть реальными, оригинальными, с хорошим освещением, без водяных знаков и лишней обработки. Ориентир по размеру - от 1200×900 px, формат JPG/JPEG и разумный вес файла.",
          },
          {
            title: "2. Обязательные типы фотографий",
            body: [
              "Фасад - чтобы клиент легко нашёл вход.",
              "Интерьер - 3–5 фото разных зон.",
              "Команда - реальные сотрудники, а не сток.",
              "Процессы и услуги - работа мастеров, обслуживание, производство.",
              "Готовые результаты - особенно для beauty, медицины, ремонта, авто.",
              "Меню, прайс или каталог - чётко читаемая информация о ценах.",
            ],
          },
        ],
      },
      {
        title: "Роль видео в карточке бизнеса",
        blocks: [
          {
            body: [
              "Короткие видео‑туры по помещению.",
              "Интервью с владельцами или специалистами.",
              "Примеры процессов или услуг в формате «до/после».",
            ],
          },
          {
            body: "Видео увеличивает вовлечённость и помогает выделиться среди конкурентов, большинство из которых вообще не используют этот формат.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Как часто обновлять фото и видео?",
            body: "Минимум раз в 3–6 месяцев, а также при изменениях интерьера, ассортимента, команды или услуг. Для динамичных ниш (рестораны, beauty, мероприятия) - чаще.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Optimizing photos and videos in map listings: why it matters and how to do it right",
    lead: [
      "For U.S. local businesses, strong photos and short videos in your map listings can meaningfully increase trust and conversion-more calls, direction requests, and clicks.",
      "A map listing is often the first touchpoint. The quality of your visuals shapes first impressions and influences whether customers choose you.",
      "Well-maintained visuals can improve engagement in Maps and the local pack, and that engagement often translates into real-world actions.",
    ],
    checklistTitle: "Checklist",
    checklistItems: [
      "Prepare a set of real photos (storefront, interior, team, services, results, price/menu).",
      "Add 1–2 short videos about your business or process.",
      "Upload media across key platforms (Google Maps, Apple Maps, and major directories).",
      "Monitor views, clicks, and direction requests.",
      "Refresh content at least seasonally or after major changes.",
    ],
    sections: [
      {
        title: "Why optimize photos and videos",
        blocks: [
          {
            title: "1. Visuals drive trust",
            body: "People decide fast-photos are often the first thing they notice. Weak or missing visuals make a business feel less credible, while strong images build confidence.",
          },
          {
            title: "2. Visibility and engagement",
            body: "Map platforms take activity signals into account. More (and fresher) photos plus video typically increase engagement-more taps, more time on listing, more actions.",
          },
          {
            title: "3. Higher conversion",
            body: "Real interiors, your team, equipment, and examples of work help customers picture the experience and reduce uncertainty.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "More listing views and photo views.",
              "More calls, direction requests, and website clicks.",
              "Higher perceived legitimacy and trust.",
              "Stronger local presence over time.",
            ],
          },
        ],
      },
      {
        title: "How to optimize photos",
        blocks: [
          {
            title: "1. Quality basics",
            body: "Use real, well-lit images with minimal editing. Aim for ~1200×900 px or higher, and keep file sizes reasonable for fast loading.",
          },
          {
            title: "2. Must-have photo types",
            body: [
              "Storefront/entrance.",
              "Interior (multiple angles).",
              "Team.",
              "Services in action.",
              "Results / before-and-after (when relevant).",
              "Menu/price list/catalog (clear and readable).",
            ],
          },
        ],
      },
      {
        title: "The role of video",
        blocks: [
          {
            body: [
              "Short walk-throughs.",
              "Owner/staff intros.",
              "Process or before/after examples.",
            ],
          },
          {
            body: "Video increases engagement and helps you stand out because many competitors still don’t use it.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you update photos and videos?",
            body: "At least every 3–6 months, and whenever you change your interior, offerings, team, or key services. For fast-moving businesses, update more often.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "אופטימיזציה לתמונות ווידאו בכרטיס במפות: למה זה חשוב ואיך עושים נכון",
    lead: [
      "תמונות וסרטונים קצרים בכרטיס במפות יכולים להעלות אמון והמרות: יותר שיחות, ניווטים וקליקים.",
      "הכרטיס במפות הוא לעיתים נקודת המגע הראשונה עם העסק, ולכן הויזואל קובע רושם ראשוני.",
      "ויזואל שמתוחזק היטב מגדיל מעורבות, ולעיתים קרובות מתרגם לפעולות אמיתיות.",
    ],
    checklistTitle: "צ׳ק־ליסט",
    checklistItems: [
      "להכין סט תמונות אמיתיות (חזית, פנים, צוות, שירותים, תוצאות, תפריט/מחירון).",
      "להוסיף 1–2 סרטונים קצרים על העסק או התהליך.",
      "להעלות מדיה בפלטפורמות מרכזיות (Google Maps, Apple Maps וספריות מרכזיות).",
      "לעקוב אחרי צפיות, קליקים וניווטים.",
      "לעדכן לפחות אחת לעונה או אחרי שינוי משמעותי.",
    ],
    sections: [
      {
        title: "למה לאפטם תמונות ווידאו",
        blocks: [
          {
            title: "1. ויזואל בונה אמון",
            body: "אנשים מחליטים מהר-תמונות הן הדבר הראשון שרואים. ויזואל חלש או חסר פוגע באמינות, ותמונות טובות בונות ביטחון.",
          },
          {
            title: "2. נראות ומעורבות",
            body: "פלטפורמות מפות מתייחסות לסיגנלים של פעילות. תמונות חדשות וסרטונים לרוב מגדילים מעורבות.",
          },
          {
            title: "3. יותר המרות",
            body: "פנים אמיתי, צוות, ציוד ודוגמאות עבודה מפחיתים חוסר ודאות ומעלים סיכוי לפעולה.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר צפיות בכרטיס ובתמונות.",
              "יותר שיחות, ניווטים וקליקים לאתר.",
              "יותר אמון.",
            ],
          },
        ],
      },
      {
        title: "תפקיד הווידאו",
        blocks: [
          {
            body: [
              "סיור קצר במקום.",
              "היכרות עם בעלי העסק/צוות.",
              "דוגמאות תהליך או לפני/אחרי.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "כל כמה זמן לעדכן תמונות וסרטונים?",
            body: "לפחות כל 3–6 חודשים, ובכל שינוי משמעותי (פנים, מוצרים, צוות או שירותים).",
          },
        ],
      },
    ],
  },
};

export default content;
