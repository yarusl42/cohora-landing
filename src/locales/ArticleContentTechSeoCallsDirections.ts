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
      "Увеличение кликов по кнопкам «Позвонить» и «Маршрут» в карточках бизнеса",
    lead: [
      "Кнопки «Позвонить» и «Маршрут» - ключевые элементы карточки бизнеса в картографических сервисах. Именно они превращают обычный просмотр в конкретное действие: звонок, визит, запись или заказ.",
      "Чтобы получать больше клиентов с карт, важно не только быть видимым, но и добиваться того, чтобы пользователи чаще нажимали эти кнопки.",
    ],
    sections: [
      {
        title: "Зачем увеличивать клики по «Позвонить» и «Маршрут»",
        blocks: [
          {
            title: "1. Самые ценные действия клиента",
            body: "Нажатие на «Позвонить» или «Маршрут» - это переход от интереса к действию. Звонок часто приводит к консультации, записи и покупке. Клик по «Маршрут» - к визиту в офис, магазин или точку выдачи.",
          },
          {
            title: "2. Алгоритмы карт учитывают активность",
            body: "Google Maps, Яндекс.Карты и другие сервисы анализируют поведение пользователей. Если по карточке часто жмут «Позвонить», «Маршрут» или «Перейти на сайт», алгоритмы считают её полезной и поднимают выше в выдаче. Рост кликов ведёт к росту показов - и наоборот.",
          },
          {
            title: "3. Усиление локального SEO",
            body: "Карты тесно связаны с поисковой выдачей. Активная карточка с большим количеством взаимодействий помогает сайту лучше ранжироваться по локальным запросам, повышает видимость бренда и доверие к нему.",
          },
          {
            title: "4. Быстрый и доступный способ роста клиентов",
            body: "Оптимизация карточек и повышение кликабельности кнопок часто дают более быстрый и дешёвый эффект, чем классическое SEO сайта или платная реклама - особенно для ниш с ярко выраженной локальностью (кафе, СТО, медицина, ремонт, услуги рядом).",
          },
        ],
      },
      {
        title: "Чего ожидать от роста кликов",
        blocks: [
          {
            title: "Рост количества звонков",
            body: "В зависимости от ниши и исходного состояния карточки можно увидеть увеличение звонков на 20–150%. Особенно заметен эффект в медицине, ремонте, доставке и услугах с быстрым циклом принятия решений.",
          },
          {
            title: "Больше визитов в офлайн‑точку",
            body: "Нажатие на кнопку «Маршрут» - один из самых точных индикаторов реального визита. После оптимизации карточки количество построенных маршрутов почти всегда растёт, что напрямую отражается на трафике в точку.",
          },
          {
            title: "Повышение конверсии из просмотров",
            body: "Карточка перестаёт быть просто «визиткой» и начинает работать как полноценный инструмент продаж: доля пользователей, которые совершают действие после просмотра, становится выше.",
          },
          {
            title: "Улучшение позиций в картах",
            body: "Активность пользователей - важный фактор ранжирования. Чем чаще по карточке совершают полезные действия, тем выше она поднимается относительно конкурентов и тем чаще попадает в блоки «рядом со мной» и рекомендации.",
          },
        ],
      },
      {
        title:
          "Как увеличить клики по «Позвонить» и «Маршрут»: пошаговая стратегия",
        blocks: [
          {
            title: "1. Идеальная актуальность NAP‑данных",
            body: [
              "NAP (Name, Address, Phone) должен быть точным и актуальным.",
              "Проверьте правильность телефона (без ошибок и «битых» номеров).",
              "Добавьте все актуальные номера, если их несколько.",
              "Привяжите мессенджеры (WhatsApp/Telegram/Viber), если это поддерживается.",
              "Укажите максимально точный адрес - с офисом/корпусом/этажом при необходимости.",
              "Неверные контакты снижают доверие пользователей и алгоритмов, а значит - и частоту кликов.",
            ],
          },
          {
            title: "2. Точная геометка и корректировка пина",
            body: [
              "Частая проблема: пин стоит не там - на соседнем доме, у заднего входа или вообще на другой улице. Это приводит к тому, что люди промахиваются и не находят бизнес.",
              "Решение: переместить метку к основному входу; при сложной локации - ближе к удобной парковке или месту начала маршрута; убедиться, что навигатор ведёт по понятному пути.",
              "Корректная геометка способна увеличить клики по «Маршрут» в 1.5–3 раза.",
            ],
          },
          {
            title: "3. Фасадное фото и понятный вход",
            body: "Люди хотят видеть, куда они приедут. Добавьте фото фасада с указанием входа, понятной вывеской и ориентиром. Это снижает тревогу и увеличивает вероятность нажатия на «Маршрут».",
          },
          {
            title: "4. Актуальный режим работы и дополнительные данные",
            body: "Фразы вроде «Открыто до 21:00» или «Работаем без выходных» ускоряют решение. Уточните перерывы, праздничные дни и сезонный режим: чем меньше сомнений, тем легче пользователь нажимает нужную кнопку.",
          },
          {
            title: "5. Тексты и описание, снимающие страхи",
            body: [
              "В описании карточки и на сайте стоит ответить на вопросы: что вы делаете, сколько это стоит, как быстро можно попасть на приём/получить услугу, нужна ли предварительная запись.",
              "Чем понятнее ответы, тем смелее пользователь нажимает «Позвонить».",
            ],
          },
          {
            title: "6. Работа с отзывами и рейтингом",
            body: "Высокий рейтинг и свежие отзывы повышают кликабельность кнопок. Просите клиентов оставлять честные отзывы и отвечайте на них, особенно на негатив - это усиливает доверие и снижает страх сделать звонок или построить маршрут.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Увеличение кликов по кнопкам «Позвонить» и «Маршрут» - один из самых прямых способов повысить поток реальных клиентов из картографических сервисов. Работая над контактами, геометкой, визуалом, описанием и отзывами, вы одновременно усиливаете и поведение пользователей, и локальное SEO.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "How to increase ‘Call’ and ‘Directions’ clicks on your business listing",
    lead: [
      "The ‘Call’ and ‘Directions’ buttons are the most valuable actions on a local listing-they turn browsing into real intent: a call, a visit, or a booking.",
      "To get more customers from maps, it’s not enough to be visible-you also need users to click those actions more often.",
    ],
    sections: [
      {
        title: "Why increasing clicks matters",
        blocks: [
          {
            title: "1. High-intent actions",
            body: "A tap on ‘Call’ or ‘Directions’ is the move from interest to action. Calls often lead to consultations and purchases. Directions clicks correlate strongly with real visits.",
          },
          {
            title: "2. Engagement impacts visibility",
            body: "Google Maps and other platforms track user behavior. If people frequently tap ‘Call’, ‘Directions’, or ‘Website’, the listing looks more useful and can earn more visibility.",
          },
          {
            title: "3. Local SEO reinforcement",
            body: "Maps and organic results are connected. A listing with strong engagement can increase brand visibility and support local search performance.",
          },
          {
            title: "4. A fast, cost-effective growth lever",
            body: "Listing optimization can produce faster ROI than traditional SEO or paid ads-especially for local-first categories (restaurants, auto repair, clinics, home services).",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            title: "More calls",
            body: "Many businesses see a 20–150% lift depending on category and starting point.",
          },
          {
            title: "More in-person visits",
            body: "‘Directions’ clicks are one of the strongest signals of real foot traffic.",
          },
          {
            title: "Higher conversion from views",
            body: "A listing becomes more than a ‘business card’-it turns into a conversion tool.",
          },
          {
            title: "Better map rankings",
            body: "More useful actions typically mean the listing looks stronger than competitors and can appear more often.",
          },
        ],
      },
      {
        title: "Step-by-step strategy",
        blocks: [
          {
            title: "1. Perfect NAP accuracy",
            body: [
              "Keep Name/Address/Phone consistent and correct.",
              "Fix phone number issues (dead lines, typos).",
              "Add all relevant numbers.",
              "Add messaging options where supported.",
              "Use a precise address (suite, floor, entrance notes when needed).",
            ],
          },
          {
            title: "2. Correct the map pin",
            body: "If the pin is misplaced (wrong building/entrance), customers get lost and don’t convert. Move the pin to the main entrance and verify navigation routes.",
          },
          {
            title: "3. Add an exterior photo and clear entrance",
            body: "Show what customers will see when they arrive. Exterior photos reduce uncertainty and increase ‘Directions’ clicks.",
          },
          {
            title: "4. Accurate hours and details",
            body: "Visible hours reduce hesitation. Keep holiday hours and seasonal hours up to date.",
          },
          {
            title: "5. Remove friction with clear descriptions",
            body: "Answer common questions: what you do, typical pricing range, how fast someone can be seen, and whether an appointment is required.",
          },
          {
            title: "6. Reviews and owner replies",
            body: "A strong rating and recent reviews improve click-through. Ask for honest reviews and reply-especially to negative ones.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Increasing ‘Call’ and ‘Directions’ clicks is one of the most direct ways to grow real customer flow from maps. Improving contact accuracy, pin placement, visuals, descriptions, and reviews strengthens both engagement and local SEO.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "איך להגדיל הקלקות על ‘שיחה’ ו‘ניווט’ בכרטיס העסק",
    lead: [
      "כפתורי ‘שיחה’ ו‘ניווט’ הם הפעולות החשובות ביותר בכרטיס העסק-הם הופכים צפייה לפנייה אמיתית: שיחה, הגעה או הזמנה.",
      "כדי להביא יותר לקוחות ממפות, לא מספיק להופיע-צריך שגם ילחצו על הפעולות האלה יותר.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "1. פעולות עם כוונה גבוהה",
            body: "הקלקה על ‘שיחה’ או ‘ניווט’ היא מעבר מכוונה לפעולה. ניווט בדרך כלל קשור לביקור בפועל.",
          },
          {
            title: "2. מעורבות משפיעה על נראות",
            body: "Google Maps ופלטפורמות נוספות מנתחות התנהגות. יותר הקלקות על פעולות שימושיות-יכול לתמוך בנראות.",
          },
        ],
      },
      {
        title: "איך לשפר (בקצרה)",
        blocks: [
          {
            title: "1. דיוק פרטים",
            body: "לוודא שם/כתובת/טלפון מדויקים, שעות פתיחה נכונות ותיאור ברור.",
          },
          {
            title: "2. מיקום סיכה נכון",
            body: "אם הסיכה לא במקום-לקוחות הולכים לאיבוד. להעביר לכניסה הראשית.",
          },
          {
            title: "3. תמונות וביקורות",
            body: "תמונות חוץ וביקורות עדכניות מעלות אמון ולכן גם הקלקות.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "שיפור הקלקות על ‘שיחה’ ו‘ניווט’ הוא דרך ישירה להביא יותר לקוחות מהמפות. עבודה על פרטים, מיקום, תוכן וביקורות מחזקת המרות ו‑Local SEO.",
          },
        ],
      },
    ],
  },
};

export default content;
