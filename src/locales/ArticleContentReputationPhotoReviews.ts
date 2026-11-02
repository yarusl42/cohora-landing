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
      "Отзывы с фотографиями: как настроить процесс и зачем это так важно для локального бизнеса",
    lead: [
      "Отзывы с фотографиями - один из самых сильных инструментов доверия и локального SEO. В Google Maps, 2ГИС, Apple Maps и других сервисах визуальный контент часто говорит о бизнесе больше, чем любой текст: показывает реальный результат, атмосферу и уровень сервиса.",
      "Ниже - зачем бизнесу нужны фото‑отзывы, чего ожидать от их внедрения и как настроить честный и рабочий процесс их получения.",
    ],
    sections: [
      {
        title: "Зачем бизнесу нужны отзывы с фото",
        blocks: [
          {
            title: "1. Доверие выше, чем у «голого» текста",
            body: "Когда потенциальный клиент видит не только слова, но и реальные фотографии результата, интерьера или процесса, доверие к отзыву и к компании растёт. Фото воспринимается как доказательство реального опыта.",
          },
          {
            title: "2. Визуальный опыт усиливает качество карточки",
            body: "Платформы учитывают не только оценки, но и общую активность карточки. Свежие отзывы с фото увеличивают вовлечённость и делают профиль более «живым».",
          },
          {
            title: "3. Фото‑отзывы удерживают внимание",
            body: "Отзывы с фотографиями выделяются визуально. Пользователи чаще открывают такие отзывы и дольше их рассматривают, что положительно влияет на поведенческие сигналы.",
          },
          {
            title: "4. Ослабление эффекта негатива",
            body: "На фоне большого количества позитивных отзывов с фото единичные негативные комментарии воспринимаются мягче. У клиента складывается впечатление, что «в целом всё хорошо».",
          },
        ],
      },
      {
        title: "Чего ожидать от внедрения фото‑отзывов",
        blocks: [
          {
            body: "При системной работе через 1–3 месяца часто заметны:",
          },
          {
            body: [
              "рост видимости карточки в картах;",
              "увеличение кликов по карточке и переходов на сайт;",
              "рост звонков и заявок;",
              "усиление доверия на этапе выбора между несколькими компаниями;",
              "более спокойное восприятие редкого негатива.",
            ],
          },
          {
            body: "Важно: не каждый клиент захочет делать фото, и давить на людей нельзя. Нужен аккуратный и удобный процесс.",
          },
        ],
      },
      {
        title: "Как выстроить процесс получения фото‑отзывов",
        blocks: [
          {
            title: "1. Выберите правильный момент",
            body: "Просить отзыв с фото лучше сразу после оказания услуги/доставки/ремонта, когда клиент доволен и у него есть пара минут.",
          },
          {
            title: "2. Объясните, зачем нужны фото",
            body: "Коротко и без давления: «Если будет минутка - добавьте фото результата, так другим людям проще понять, чего ожидать».",
          },
          {
            title: "3. Сократите путь до формы отзыва",
            body: [
              "прямые ссылки на форму отзыва;",
              "QR‑коды, ведущие сразу в нужный раздел;",
              "сообщения в мессенджерах/смс со ссылкой;",
              "короткая инструкция: где нажать «Добавить фото» и сколько кадров нужно.",
            ],
          },
          {
            title: "4. Используйте QR‑коды на месте",
            body: "Для офлайн‑бизнеса QR‑коды на стойке, столиках, чеках и визитках - один из самых удобных способов получить отзыв, пока впечатление свежее.",
          },
          {
            title: "5. Включите просьбу о фото в сценарий коммуникации",
            body: "Если вы отправляете благодарственные сообщения после визита/заказа, добавьте мягкую просьбу приложить фото - как опцию.",
          },
          {
            title: "6. Соблюдайте правила площадок",
            body: "Нельзя платить за отзыв или за фото. Делайте акцент на ценности обратной связи и помощи другим клиентам.",
          },
        ],
      },
      {
        title: "Типичные ошибки",
        blocks: [
          {
            title: "1. Давление на клиентов",
            body: "Фото и отзыв должны быть опцией, а не обязательным условием. Давление часто вызывает раздражение и негатив.",
          },
          {
            title: "2. Подставные аккаунты и «липовые» фото",
            body: "Фейковые профили и постановочные фото - риск санкций и потери доверия.",
          },
          {
            title: "3. Публикация персональных данных без согласия",
            body: "Не публикуйте фото с лицами клиентов или чувствительными данными без явного согласия.",
          },
        ],
      },
      {
        title: "Как использовать фото‑отзывы в маркетинге",
        blocks: [
          {
            body: [
              "делать подборки на сайте и в соцсетях (с разрешения клиентов);",
              "использовать фрагменты в кейсах и презентациях;",
              "показывать лучшие истории в рассылках;",
              "использовать как аргументы для новых клиентов: «вот реальные примеры результата».",
            ],
          },
          {
            body: "Соблюдайте конфиденциальность и получайте согласие, если на фото видны лица или личные данные.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Отзывы с фотографиями соединяют маркетинг, репутацию и реальный опыт клиентов. При уважительном и удобном процессе они помогают бизнесу расти и упрощают выбор для будущих клиентов.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Photo reviews: why they matter and how to build a repeatable process",
    lead: [
      "Photo reviews are one of the strongest trust and local conversion levers. On platforms like Google Maps, Yelp, and Apple Maps, visuals often communicate more than text-showing real results, atmosphere, and service quality.",
      "This guide explains what to expect and how to collect photo reviews ethically and consistently.",
    ],
    sections: [
      {
        title: "Why photo reviews matter",
        blocks: [
          {
            title: "1. Higher trust than text-only reviews",
            body: "Photos act as proof. A real before/after, a dish photo, or a finished project instantly reduces doubt.",
          },
          {
            title: "2. Stronger engagement signals",
            body: "Listings with fresh visual content tend to get more attention and interaction, which can translate into more actions.",
          },
          {
            title: "3. More time spent in your listing",
            body: "People open photo reviews more often and spend longer evaluating them.",
          },
          {
            title: "4. Negative reviews carry less weight",
            body: "When you have many real photo reviews, a few negatives don’t dominate the narrative.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "more listing clicks and website visits;",
              "more calls and direction requests;",
              "higher trust when customers compare options;",
              "more resilient perception when occasional negative feedback appears.",
            ],
          },
        ],
      },
      {
        title: "How to collect photo reviews ethically",
        blocks: [
          {
            title: "1. Ask at the right moment",
            body: "Right after the service is completed and the customer is happy is usually the best time.",
          },
          {
            title: "2. Explain why photos help",
            body: "Keep it simple: ‘If you have a minute, adding a photo helps other customers know what to expect.’",
          },
          {
            title: "3. Reduce friction",
            body: "Use a direct review link and QR codes that open the review flow.",
          },
          {
            title: "4. Don’t offer incentives",
            body: "Avoid discounts or gifts for reviews/photos-platform policies and trust risks.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "pressuring customers;",
              "fake reviews and staged photos;",
              "sharing personal data without consent.",
            ],
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Photo reviews make your reputation more believable. Build a low-friction, respectful process and reuse the best visuals (with consent) across marketing.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "ביקורות עם תמונות: למה זה חשוב ואיך לבנות תהליך עובד",
    lead: [
      "ביקורות עם תמונות הן כלי אמון חזק במיוחד. ב‑Google Maps, Waze ו‑Apple Maps ויזואל אמיתי מציג תוצאה ואווירה ועוזר ללקוחות להחליט מהר יותר.",
      "להלן למה זה חשוב ואיך לאסוף ביקורות עם תמונות בצורה אתית.",
    ],
    sections: [
      {
        title: "למה ביקורות עם תמונות חשובות",
        blocks: [
          {
            title: "אמון גבוה יותר",
            body: "תמונה נתפסת כהוכחה ומפחיתה ספק.",
          },
          {
            title: "יותר מעורבות",
            body: "ביקורות עם תמונות מושכות תשומת לב ומגדילות אינטראקציה.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: "לחץ על לקוחות, זיופים, או פרסום מידע אישי בלי הסכמה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "תהליך מכבד ופשוט + בקשה בזמן הנכון = יותר ביקורות עם תמונות לאורך זמן.",
          },
        ],
      },
    ],
  },
};

export default content;
