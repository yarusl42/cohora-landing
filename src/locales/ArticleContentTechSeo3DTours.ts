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
    title: "Создание и публикация 3D-туров для карточек бизнеса",
    lead: [
      "3D‑туры в карточках бизнеса - это относительно новый, но уже эффективный инструмент для повышения доверия клиентов и увеличения конверсии. Они позволяют потенциальным клиентам «заглянуть внутрь» вашего заведения ещё до визита, что особенно важно для ресторанов, салонов красоты, медицинских клиник, отелей и других бизнесов, где атмосфера и интерьер играют важную роль в принятии решения.",
      "3D‑туры стали одним из самых сильных инструментов привлечения клиентов через Google карты, Яндекс Карты и другие картографические сервисы. Вместо нескольких фотографий и краткого описания пользователь получает возможность буквально «зайти» внутрь вашего бизнеса: прогуляться по залам, рассмотреть интерьер и почувствовать атмосферу. Это значительно повышает доверие и конверсию.",
    ],
    sections: [
      {
        title: "Зачем бизнесу нужен 3D‑тур в карточках",
        blocks: [
          {
            title: "1. Максимальный уровень доверия",
            body: "Сегодня пользователи принимают решения быстро и выбирают тех, кому доверяют. 3D‑тур показывает реальное состояние помещения, демонстрирует оборудование и интерьер, даёт представление о чистоте, пространстве и атмосфере. Это создаёт ощущение прозрачности: у компании «нет ничего скрывать», что напрямую влияет на клики по кнопкам «Позвонить» и «Маршрут».",
          },
          {
            title: "2. Существенный рост конверсии",
            body: [
              "Наличие виртуального тура по наблюдениям агентств и по данным Google часто увеличивает количество взаимодействий с карточкой на десятки и даже сотни процентов. Пользователь, который уже «побывал» у вас виртуально, чаще звонит, строит маршрут и принимает решение о визите.",
              "Для ресторанов в Минске это выбор места и стола, для клиник в Гомеле - доверие к оборудованию и условиям, для салонов красоты в Бресте - демонстрация уровня сервиса, для фитнес‑центров в Центральном районе - ощущение масштаба и возможностей.",
            ],
          },
          {
            title: "3. Повышение позиций карточки",
            body: "Алгоритмы карт учитывают количество и качество медиа: фото, панорамы, разнообразие контента и вовлечённость пользователей. При наличии 3D‑тура люди проводят в карточке больше времени, активнее взаимодействуют с ней, что поисковые системы воспринимают как сигнал пользы и поднимают карточку выше в выдаче.",
          },
          {
            title: "4. Выгодное отличие от конкурентов",
            body: "Пока большинство компаний ограничиваются фотографиями, 3D‑тур делает вашу карточку более профессиональной, современной и живой. Это заметное конкурентное преимущество, которое не так просто быстро скопировать без инвестиций и подготовки.",
          },
          {
            title: "5. Долгосрочный актив",
            body: "В отличие от платной рекламы, 3D‑тур работает 24/7 и годами после публикации. Раз сделанный и корректно размещённый тур продолжает приносить трафик, визиты и клиентов без дополнительных затрат.",
          },
        ],
      },
      {
        title: "Чего ожидать после внедрения 3D‑тура",
        blocks: [
          {
            title: "Рост взаимодействий с карточкой",
            body: "После размещения тура обычно фиксируется рост кликов по кнопкам «Позвонить», «Маршрут» и «Перейти на сайт». Пользователи чаще изучают карточку, дольше в ней находятся и реже отказываются от визита.",
          },
          {
            title: "Увеличение офлайн‑визитов",
            body: "Когда человек уже виртуально прогулялся по заведению, ему проще сделать следующий шаг - приехать лично. Это особенно заметно для ресторанов, студий красоты, фитнес‑центров, шоу‑румов и клиник.",
          },
          {
            title: "Усиление рейтинга и доверия",
            body: "Поведенческие показатели (время просмотра, количество действий) растут, карточка становится более «живой», что в сочетании с отзывами и рейтингом формирует сильное доверие к бренду и улучшает восприятие компании.",
          },
          {
            title: "Рост продаж",
            body: "Конверсия из просмотров в клиентов увеличивается: больше людей доходят до звонка, записи или визита. В туре клиент уже знакомится с пространством, а в офлайне приходит скорее «подтвердить выбор», чем «посмотреть, что там».",
          },
        ],
      },
      {
        title: "Как создаётся 3D‑тур: основные этапы",
        blocks: [
          {
            title: "1. Подготовка помещения",
            body: [
              "убрать лишние предметы и мусор;",
              "навести чистоту и создать визуальный порядок;",
              "включить свет и отрегулировать освещение;",
              "подготовить персонал, если он будет в кадре;",
              "закрыть лишние двери и технические зоны.",
              "Это похоже на подготовку к фотосессии, только тур будет работать намного дольше, чем отдельные фото.",
            ],
          },
          {
            title: "2. Съёмка 360°‑камерой или профессиональным оборудованием",
            body: "Для создания тура используются 360°‑камеры, Matterport, зеркальные фотоаппараты или технологии Google Street View. Фотограф делает серию панорамных снимков с разных точек, чтобы покрыть пространство и обеспечить плавное перемещение.",
          },
          {
            title: "3. Построение маршрутов и точек перемещения",
            body: [
              "какие зоны доступны для просмотра;",
              "где располагаются точки перехода;",
              "как пользователь будет двигаться по помещению.",
              "Тур должен быть интуитивным: понятно, куда можно пройти и что посмотреть, без «застреваний» и логических тупиков.",
            ],
          },
          {
            title: "4. Обработка и склейка панорам",
            body: "Панорамы проходят обработку: исправляются искажения, убираются дефекты, корректируется свет и цвет, усиливается детализация. Затем кадры склеиваются в единое пространство, формируя плавный маршрут.",
          },
          {
            title: "5. Интеграция туров в сервисы карт",
            body: "Готовый тур необходимо корректно привязать к карточкам в Google картах, Яндекс Картах и другим площадкам. Обычно это делается через специализированные платформы или аккаунты фотографов Street View/официальных партнёров. Важно удостовериться, что тур отображается именно на вашей карточке и правильно связан с адресом.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "3D‑тур в карточке бизнеса - это мощный инструмент, который одновременно усиливает доверие, увеличивает количество взаимодействий и помогает занимать более высокие позиции в картах и локальной выдаче. При грамотной подготовке и размещении он становится долгосрочным активом, который годами приводит новых клиентов.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Creating and publishing 3D tours for business listings",
    lead: [
      "3D tours inside a business listing are a modern, high-impact way to build trust and increase conversion. They let potential customers ‘walk through’ your location before visiting-especially useful for restaurants, salons, clinics, hotels, and any business where the atmosphere matters.",
      "In the U.S., 3D tours are most commonly experienced via Google (Street View / 360° media) and other map apps. Compared to a few photos, a tour creates a much stronger ‘I know what to expect’ feeling, which increases calls, direction requests, and bookings.",
    ],
    sections: [
      {
        title: "Why a 3D tour helps your listing",
        blocks: [
          {
            title: "1. Maximum trust",
            body: "People make decisions fast and choose brands they trust. A 3D tour shows the real space, equipment, cleanliness, and vibe. That transparency reduces anxiety and increases clicks on key actions like ‘Call’ and ‘Directions’.",
          },
          {
            title: "2. Conversion lift",
            body: "Industry observations and Google’s own data often show meaningful lifts in listing interactions. If someone already ‘visited’ virtually, they’re more likely to call or come in.",
          },
          {
            title: "3. Better listing performance",
            body: "Map platforms value rich media and engagement. With a tour, people spend more time in your profile and interact more-signals that can support visibility.",
          },
          {
            title: "4. Competitive advantage",
            body: "Most competitors rely on basic photos. A quality tour makes your listing look more professional and up to date.",
          },
          {
            title: "5. A long-term asset",
            body: "Unlike paid ads, a tour can work for years once published-driving ongoing trust and leads.",
          },
        ],
      },
      {
        title: "What to expect after publishing",
        blocks: [
          {
            title: "More listing actions",
            body: "It’s common to see more clicks on ‘Call’, ‘Directions’, and ‘Website’ because users feel more confident.",
          },
          {
            title: "More in-person visits",
            body: "When customers already understand the space, visiting becomes the natural next step.",
          },
          {
            title: "Stronger perceived reputation",
            body: "Engagement signals and richer content make the listing feel more ‘alive’, reinforcing trust alongside reviews and rating.",
          },
          {
            title: "More revenue",
            body: "Higher conversion from views to calls/bookings means more customers without increasing ad spend.",
          },
        ],
      },
      {
        title: "How a 3D tour is created (main steps)",
        blocks: [
          {
            title: "1. Prepare the space",
            body: [
              "remove clutter;",
              "clean and stage the space;",
              "turn on lights and balance lighting;",
              "prepare staff if they will appear;",
              "close technical rooms/doors.",
            ],
          },
          {
            title: "2. Capture 360° imagery",
            body: "Tours can be created with 360° cameras, Matterport, DSLR setups, or Google Street View workflows. The photographer captures panoramic points throughout the space.",
          },
          {
            title: "3. Build navigation points",
            body: "Define an intuitive path: where people can go, which areas are visible, and how the movement flows without dead ends.",
          },
          {
            title: "4. Post-process and stitch",
            body: "Panoramas are corrected, cleaned up, color-balanced, and stitched into a smooth interactive experience.",
          },
          {
            title: "5. Publish to map platforms",
            body: "Attach the tour to your Google Business Profile listing (often via Street View photographers/partners). Verify it’s linked to the correct address and appears on your listing.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "A 3D tour is a powerful listing upgrade that boosts trust, engagement, and conversion. When done properly, it becomes a long-term asset that keeps bringing customers.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "יצירה ופרסום של סיורי 3D בכרטיסי עסק",
    lead: [
      "סיור 3D בכרטיס העסק הוא כלי מודרני שמעלה אמון ומגדיל המרות. הוא מאפשר ללקוח ‘להיכנס’ למקום עוד לפני ביקור-דבר חשוב במיוחד למסעדות, קליניקות, בתי מלון ועסקים שבהם האווירה משפיעה על החלטה.",
      "בישראל, לרוב החוויה מגיעה דרך Google Maps ופתרונות 360°/Street View. סיור טוב מסיר חוסר ודאות ומגדיל הקלקות על פעולות כמו שיחה וניווט.",
    ],
    sections: [
      {
        title: "למה סיור 3D עוזר",
        blocks: [
          {
            title: "1. אמון מקסימלי",
            body: "הסיור מציג את המקום כפי שהוא-ניקיון, ציוד ואווירה-ומפחית חששות. זה מעלה את הסיכוי לשיחה או ניווט.",
          },
          {
            title: "2. עלייה בהמרה",
            body: "כאשר לקוח כבר ‘ביקר’ וירטואלית, קל לו יותר לבצע את הצעד הבא: להתקשר, להזמין או להגיע.",
          },
          {
            title: "3. יותר מעורבות בכרטיס",
            body: "תוכן עשיר ומעורבות הם סיגנלים חיוביים עבור פלטפורמות מפות.",
          },
          {
            title: "4. יתרון תחרותי",
            body: "רוב המתחרים מסתפקים בתמונות-סיור איכותי נראה מקצועי יותר.",
          },
        ],
      },
      {
        title: "איך זה נעשה (בקצרה)",
        blocks: [
          {
            title: "1. הכנת המקום",
            body: "לנקות, לסדר, להדליק תאורה ולהכין אזורים לצילום.",
          },
          {
            title: "2. צילום 360°",
            body: "משתמשים במצלמות 360°, Matterport או תהליך Street View.",
          },
          {
            title: "3. פרסום בכרטיס",
            body: "לשייך את הסיור לכרטיס ב‑Google Maps ולוודא שיופיע בכתובת הנכונה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "סיור 3D הוא נכס ארוך טווח שמגדיל אמון ומעורבות, ועוזר להפוך צפיות לפניות.",
          },
        ],
      },
    ],
  },
};

export default content;
