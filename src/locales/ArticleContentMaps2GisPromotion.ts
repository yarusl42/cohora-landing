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
      "Продвижение в 2ГИС: зачем это нужно, чего ожидать и как правильно это делать",
    lead: [
      "Продвижение в 2ГИС - это комплекс мер, которые помогают белорусскому локальному бизнесу попасть в топ карт и получать больше клиентов из поиска «рядом со мной». Помимо Google и Яндекса, 2ГИС остаётся одной из самых популярных картографических платформ в Минске, Бресте, Гомеле, Гродно, Могилёве и других городах Беларуси. Для многих локальных бизнесов присутствие в 2ГИС может стать значимым источником клиентов.",
    ],
    sections: [
      {
        title: "Зачем бизнесу продвигаться в 2ГИС",
        blocks: [
          {
            title:
              "1. 2ГИС - главный источник локального трафика во многих городах",
            body: "Пользователи ежедневно ищут в 2ГИС ближайшие магазины, кафе, СТО, клиники и сервисы. Половина поисков заканчивается звонком или визитом. Если вашей компании нет в 2ГИС или карточка оформлена слабо, вы теряете клиентов уже на первом шаге.",
          },
          {
            title: "2. Высокая конверсия и доверие",
            body: "В 2ГИС пользователь сразу видит рейтинг, отзывы, фото, сайт, телефоны и описание услуг. Формат «короткого выбора» делает конверсию выше, чем при просмотре десятков сайтов в обычной выдаче.",
          },
          {
            title: "3. Качественная локальная выдача",
            body: "2ГИС учитывает местоположение клиента, популярность компании в районе, категорию, рейтинг, свежесть информации и частоту обращений. При правильной оптимизации здесь относительно несложно закрепиться в топе по нужным запросам.",
          },
          {
            title: "4. Рост без рекламных затрат",
            body: "При полноценном заполнении карточки, работе с фото, услугами и отзывами органический рост позиций происходит сам по себе, без постоянного рекламного бюджета.",
          },
        ],
      },
      {
        title: "Чего ожидать от продвижения в 2ГИС",
        blocks: [
          {
            body: [
              "Рост звонков и визитов уже через 1–3 недели после оптимизации карточки.",
              "Увеличение органического трафика из 2ГИС в 2–5 раз при переходе с «сырой» карточки.",
              "Повышение позиций в каталогах, списках и по ключевым словам.",
              "Больше отзывов и укрепление рейтинга за счёт роста клиентского потока.",
              "Усиление локального SEO в Google и Яндексе через NAP‑сигналы и ссылки.",
            ],
          },
        ],
      },
      {
        title: "Как продвигаться в 2ГИС: ключевые шаги",
        blocks: [
          {
            title: "1. Создайте и подтвердите карточку компании",
            body: "Зарегистрируйте компанию в 2ГИС, заполните базовые данные и подтвердите владение (звонок/письмо). Неподтверждённые карточки ранжируются хуже и вызывают меньше доверия.",
          },
          {
            title: "2. Заполните информацию на 100%",
            body: "Укажите полное название, точный адрес (этаж, вход, ориентиры), режим работы, телефоны, сайт, соцсети, email, способы оплаты. 2ГИС ценит точность и полноту данных: пропуски снижают видимость.",
          },
          {
            title: "3. Добавьте подробное описание с SEO‑уклоном",
            body: "Пишите уникальный текст без переспама, с указанием города/районов, перечнем услуг и ключевых преимуществ. Это повышает релевантность карточки по запросам внутри 2ГИС и для внешнего поиска.",
          },
          {
            title: "4. Оформите услуги и категории",
            body: "Перечислите основные услуги и товары, используйте максимально точные категории. Это помогает пользователям быстрее находить вас по нужным фильтрам и запросам.",
          },
          {
            title: "5. Работайте с фото и визуалом",
            body: "Загрузите качественные фото фасада, интерьера, команды, процессов и результатов. В 2ГИС визуальная часть сильно влияет на кликабельность карточки.",
          },
        ],
      },
      {
        title: "Отзывы и рейтинг в 2ГИС",
        blocks: [
          {
            body: [
              "Просите реальных клиентов оставить отзыв после визита/заказа.",
              "Отвечайте на отзывы - и на позитивные, и на негативные.",
              "Используйте отзывы как источник идей для улучшения сервиса.",
              "Не накручивайте рейтинг: 2ГИС борется с фейковыми отзывами, это риск блокировок.",
            ],
          },
        ],
      },
      {
        title: "Практические советы и ошибки в продвижении в 2ГИС",
        blocks: [
          {
            title: "Советы",
            body: [
              "Регулярно обновляйте данные и фото, отражая реальные изменения.",
              "Следите за тем, как карточка отображается в разных разделах (каталоги, поиск, карты).",
              "Используйте статистику 2ГИС для оценки эффективности и тестирования изменений.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Неполные или устаревшие данные (старый адрес, неверный телефон).",
              "Отсутствие описания и услуг - только «сухая» карточка.",
              "Игнорирование отзывов и жалоб.",
              "Попытки накрутки отзывов и рейтинга.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист",
        blocks: [
          {
            title: "Как быстро ждать результатов?",
            body: "При полной оптимизации и начале работы с отзывами первые результаты (звонки, просмотры) обычно проявляются за 1–3 недели, устойчивый рост занимает 1–3 месяца.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "article2GisPromotionChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "2gis-promotion-checklist",
          title: "",
          description: "",
          items: [
            "Создайте и подтвердите карточку компании.",
            "Заполните информацию на 100% и добавьте подробное описание.",
            "Оформите услуги, категории и фото.",
            "Запустите системную работу с отзывами и рейтингом.",
            "Отслеживайте статистику 2ГИС и корректируйте стратегию.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local visibility on maps (Google Maps): why it matters, what to expect, and how to do it right",
    lead: [
      "In the US, most “near me” discovery happens through Google Maps and the Google local pack. A strong maps presence helps local businesses get more calls, directions requests, and walk-in traffic. If your listing is incomplete or inactive, you lose high-intent customers to competitors-even when you’re closer.",
    ],
    sections: [
      {
        title: "Why businesses should invest in map visibility",
        blocks: [
          {
            title: "1. Maps are a major source of local demand",
            body: "People use Maps to find restaurants, stores, auto services, clinics, and other local providers. A large share of searches turns into a call, a direction request, or a visit. If your listing is missing or poorly filled out, you lose customers before you even get a chance.",
          },
          {
            title: "2. High conversion and trust",
            body: "On Maps, users see your rating, reviews, photos, website, phone, and services instantly. This “quick choice” format often converts better than browsing multiple websites in standard search results.",
          },
          {
            title: "3. Strong local ranking signals",
            body: "Google considers proximity, relevance, prominence, category accuracy, review quality, freshness, listing activity, and consistency of business information. With systematic work, it’s realistic to move into the most visible spots for your key queries.",
          },
          {
            title: "4. Growth without always increasing ad spend",
            body: "A well-managed profile can improve organic visibility and generate steady leads without relying only on paid ads.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "More calls and direction requests within 1–3 weeks after major profile improvements.",
              "2–5× growth in organic listing actions when you upgrade from a “basic” profile to a complete one.",
              "Better visibility in category results and for relevant keywords.",
              "More reviews and a stronger rating as foot traffic grows.",
              "Improved local SEO through consistent NAP signals and citations.",
            ],
          },
        ],
      },
      {
        title: "How to improve your maps presence: key steps",
        blocks: [
          {
            title: "1. Create and verify your profile",
            body: "Set up and verify your Google Business Profile. Unverified listings tend to perform worse and earn less trust.",
          },
          {
            title: "2. Complete business information",
            body: "Add accurate name, address, phone, hours, categories, website, social profiles, email (if applicable), and attributes. Completeness and accuracy directly impact visibility.",
          },
          {
            title: "3. Write a detailed, helpful description",
            body: "Use a clear, unique description without keyword stuffing. Mention service areas, core services, and key differentiators. This improves relevance for map searches.",
          },
          {
            title: "4. Add services and categories",
            body: "List your main services/products and choose the most precise primary and secondary categories. This helps you appear in the right filters and searches.",
          },
          {
            title: "5. Invest in photos",
            body: "Upload high-quality photos (storefront, interior, team, products, results). Visual content strongly affects click-through and conversion.",
          },
        ],
      },
      {
        title: "Reviews and rating",
        blocks: [
          {
            body: [
              "Ask real customers for a review after a visit or purchase.",
              "Reply to reviews-both positive and negative.",
              "Use feedback as a source of service improvements.",
              "Avoid review manipulation: it can lead to penalties and visibility loss.",
            ],
          },
        ],
      },
      {
        title: "Practical tips and common mistakes",
        blocks: [
          {
            title: "Tips",
            body: [
              "Update details and photos regularly to reflect real changes.",
              "Check how your listing appears in different surfaces (Maps, local pack, category results).",
              "Use profile insights to evaluate changes and test improvements.",
            ],
          },
          {
            title: "Mistakes",
            body: [
              "Outdated or incomplete information (wrong address/phone/hours).",
              "No description and no services-just a minimal listing.",
              "Ignoring reviews and complaints.",
              "Trying to fake reviews or ratings.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "How fast can you expect results?",
            body: "After a full profile cleanup and consistent review work, early improvements are often visible within 1–3 weeks. More stable growth typically takes 1–3 months.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "article2GisPromotionChecklist",
      title: "Checklist",
      steps: [
        {
          id: "2gis-promotion-checklist",
          title: "",
          description: "",
          items: [
            "Create and verify your Google Business Profile.",
            "Complete all info and add a detailed description.",
            "Add services, categories, and photos.",
            "Start systematic work with reviews and rating.",
            "Track profile insights and adjust your strategy.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "נראות מקומית במפות (Google / Waze): למה זה חשוב, למה לצפות ואיך עושים את זה נכון",
    lead: [
      "בישראל חלק גדול מהחיפושים “קרוב אליי” מתבצע דרך Google Maps וגם דרך Waze (ולעיתים Apple Maps). נוכחות חזקה במפות מגדילה שיחות, בקשות ניווט וביקורים בפועל. אם כרטיס העסק לא מלא או לא מעודכן-לקוחות יעברו למתחרים.",
    ],
    sections: [
      {
        title: "למה חשוב להשקיע בנראות במפות",
        blocks: [
          {
            title: "1. מפות הן מקור מרכזי לביקוש מקומי",
            body: "אנשים מחפשים במפות מסעדות, חנויות, שירותי רכב, מרפאות ועוד. אחוז גדול מהחיפושים מסתיים בשיחה, ניווט או ביקור. אם העסק לא מופיע או שהכרטיס חלש-מאבדים לקוחות כבר בהתחלה.",
          },
          {
            title: "2. המרות ואמון גבוהים",
            body: "בכרטיס העסק רואים מיד דירוג, ביקורות, תמונות, אתר, טלפון ושירותים. פורמט של “בחירה מהירה” לעיתים ממיר יותר מאשר מעבר בין אתרים רבים.",
          },
          {
            title: "3. איתותים חשובים לדירוג מקומי",
            body: "Google מתחשב בקרבה, רלוונטיות, בולטות, קטגוריות מדויקות, איכות ועדכניות ביקורות, פעילות בכרטיס ועקביות פרטי העסק. עבודה שיטתית יכולה להביא אתכם לתוצאות הבולטות עבור חיפושים מרכזיים.",
          },
          {
            title: "4. צמיחה בלי להגדיל תמיד תקציב פרסום",
            body: "ניהול נכון של כרטיס העסק יכול לשפר נראות אורגנית ולייצר לידים באופן עקבי בלי להסתמך רק על פרסום ממומן.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר שיחות ובקשות ניווט תוך 1–3 שבועות לאחר שיפור משמעותי בכרטיס.",
              "עלייה משמעותית בפעולות אורגניות כאשר עוברים מכרטיס בסיסי לכרטיס מלא.",
              "שיפור נראות לפי קטגוריות ומילות מפתח רלוונטיות.",
              "יותר ביקורות וחיזוק הדירוג עם עליית התנועה.",
              "שיפור SEO מקומי באמצעות עקביות NAP ואזכורים במקורות מקומיים.",
            ],
          },
        ],
      },
      {
        title: "איך לשפר נוכחות במפות: שלבים מרכזיים",
        blocks: [
          {
            title: "1. יצירה ואימות כרטיס העסק",
            body: "צרו ואמתו את Google Business Profile. כרטיס לא מאומת בדרך כלל פחות אמין ופחות חזק בתוצאות.",
          },
          {
            title: "2. מילוי פרטי העסק",
            body: "הוסיפו שם/כתובת/טלפון, שעות פעילות, קטגוריות, אתר, רשתות חברתיות ומאפיינים. דיוק ושלמות משפיעים ישירות על הנראות.",
          },
          {
            title: "3. כתיבת תיאור מפורט ושימושי",
            body: "כתבו תיאור ייחודי בלי דחיסת מילות מפתח. ציינו אזורי שירות, שירותים מרכזיים ויתרונות. זה משפר רלוונטיות בחיפוש.",
          },
          {
            title: "4. שירותים וקטגוריות",
            body: "פרטו שירותים/מוצרים ובחרו קטגוריות מדויקות. זה עוזר להופיע בפילטרים ובחיפושים הנכונים.",
          },
          {
            title: "5. תמונות ותוכן ויזואלי",
            body: "העלו תמונות איכותיות (חזית, פנים, צוות, מוצרים, תוצאות). הויזואל משפיע מאוד על שיעור הקלקה והמרה.",
          },
        ],
      },
      {
        title: "ביקורות ודירוג",
        blocks: [
          {
            body: [
              "בקשו מלקוחות אמיתיים להשאיר ביקורת אחרי ביקור/רכישה.",
              "הגיבו לביקורות-חיוביות ושליליות.",
              "השתמשו בפידבק לשיפור השירות.",
              "הימנעו ממניפולציות בביקורות: זה עלול לגרום לעונשים ולפגיעה בנראות.",
            ],
          },
        ],
      },
      {
        title: "טיפים מעשיים ושגיאות נפוצות",
        blocks: [
          {
            title: "טיפים",
            body: [
              "לעדכן פרטים ותמונות באופן קבוע.",
              "לבדוק איך הכרטיס נראה במשטחים שונים (מפות, תוצאות מקומיות, קטגוריות).",
              "להשתמש בנתוני סטטיסטיקה כדי לבחון שינויים ולמדוד תוצאות.",
            ],
          },
          {
            title: "שגיאות",
            body: [
              "מידע לא עדכני או חסר (כתובת/טלפון/שעות לא נכונים).",
              "אין תיאור ואין שירותים-כרטיס מינימלי בלבד.",
              "התעלמות מביקורות ותלונות.",
              "ניסיון לזייף ביקורות או דירוגים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "אחרי ניקוי מלא של הכרטיס ועבודה עקבית על ביקורות, לרוב רואים שיפור תוך 1–3 שבועות. צמיחה יציבה יותר בדרך כלל לוקחת 1–3 חודשים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "article2GisPromotionChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "2gis-promotion-checklist",
          title: "",
          description: "",
          items: [
            "ליצור ולאמת Google Business Profile.",
            "למלא את כל הפרטים ולהוסיף תיאור מפורט.",
            "להוסיף שירותים, קטגוריות ותמונות.",
            "להתחיל עבודה שיטתית עם ביקורות ודירוג.",
            "לעקוב אחרי נתונים ולכוון את האסטרטגיה.",
          ],
        },
      ],
    },
  },
};

export default content;
