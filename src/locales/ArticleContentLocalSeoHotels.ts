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
      "Локальное SEO для гостиниц и отелей: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Гостиничный бизнес критически зависит от локального поиска. Гости ищут отели по карте, читают отзывы и смотрят фото.",
      "Локальное SEO помогает отелю появляться в этой выдаче и получать брони напрямую из Google и Яндекса, без постоянных затрат на рекламу.",
    ],
    sections: [
      {
        title: "Зачем отелю нужно локальное SEO",
        blocks: [
          {
            title: "1. Гости ищут жильё по карте и близости",
            body: "Запросы вида «отель рядом», «гостиница возле аэропорта», «отель Минск» активируют локальную выдачу и карты. Если карточка отеля не оптимизирована, объект просто не появится среди вариантов.",
          },
          {
            title: "2. Роль карт и сервисов бронирования",
            body: "Google Maps, Яндекс.Карты и другие сервисы стали важными точками входа: через них смотрят фото, читают отзывы и переходят к бронированию. Карточка в картах дополняет сайт и OTA‑платформы, а в ряде случаев - конкурирует с ними.",
          },
          {
            title: "3. Доверие и репутация",
            body: "Рейтинг, количество и свежесть отзывов, фото номеров и территории, описание удобств - всё это формирует доверие к отелю и напрямую влияет на количество броней.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO для отеля",
        blocks: [
          {
            body: [
              "Рост позиций по локальным запросам («гостиница Минск», «отель возле центра», «отель рядом со мной»).",
              "Увеличение видимости в Google Maps и Яндекс.Картах.",
              "Рост прямых броней через сайт и звонки.",
              "Более равномерную загрузку в низкий сезон.",
              "Снижение зависимости от дорогой рекламы и комиссий OTA.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая стратегия локального SEO для гостиниц и отелей",
        blocks: [
          {
            title: "Шаг 1. Оптимизация сайта отеля",
            body: "Сайт должен быть быстрым, адаптивным и удобным. Важно создать отдельные страницы для типов номеров (стандарт, люкс, апартаменты и т.д.) и услуг (трансфер, завтраки, конференц‑зал, SPA, парковка, экскурсии).",
          },
          {
            title: "Шаг 2. Локальные страницы локаций",
            body: "Для каждого города или района, где есть ваш объект, полезно создать отдельную страницу с адресом, картой, описанием района, ближайшими достопримечательностями и маршрутами.",
          },
          {
            title: "Шаг 3. Единые NAP‑данные",
            body: "Название, адрес и телефон (NAP) должны быть оформлены одинаково на сайте, в картах и на сторонних площадках. Это усиливает доверие алгоритмов и помогает локальному ранжированию.",
          },
        ],
      },
      {
        title: "Карточки в картах и отзывы гостей",
        blocks: [
          {
            body: [
              "Полностью заполните карточки в Google Maps и Яндекс.Картах: фото номеров, территории, ресторанов, SPA.",
              "Опишите услуги, режим работы, правила заселения и выезда.",
              "Стимулируйте гостей оставлять честные отзывы и оперативно отвечайте на них.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для отелей",
        blocks: [
          {
            title: "Когда появятся результаты?",
            body: "При активной работе с сайтом, картами и отзывами первые заметные изменения обычно видны в течение 4–8 недель, устойчивый рост загрузки - в горизонте 3–6 месяцев.",
          },
          {
            title: "Чек‑лист",
            body: [
              "Оптимизируйте сайт отеля (номера, услуги, локации).",
              "Создайте локальные страницы для разных объектов/районов.",
              "Приведите NAP‑данные к единому формату.",
              "Заполните и регулярно обновляйте карточки в Google Maps и Яндекс.Картах.",
              "Собирайте и обрабатывайте отзывы, отслеживайте рост бронирований.",
            ],
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for hotels: why it matters, what to expect, and how to do it",
    lead: [
      "Hotels depend heavily on local search. Guests explore options on Maps, read reviews, and look at photos before they book.",
      "Local SEO helps your property show up in those results and drive more direct bookings through Google (without relying only on ads and OTA commissions).",
    ],
    sections: [
      {
        title: "Why a hotel needs local SEO",
        blocks: [
          {
            title: "1. Guests search by map and proximity",
            body: "Queries like “hotel near me”, “hotel near the airport”, or “hotel in Miami” trigger local results. If your listing isn’t optimized, your property may not appear among the top options.",
          },
          {
            title: "2. Maps and booking platforms shape demand",
            body: "Google Maps and other discovery surfaces have become key entry points: guests view photos, read reviews, and click to book. Your Maps presence complements your website and OTA profiles-and sometimes competes with them for attention.",
          },
          {
            title: "3. Trust and reputation drive bookings",
            body: "Rating, review volume and freshness, room/property photos, and amenity details build trust-and directly impact booking conversion.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Improved visibility for queries like “hotel in [city]”, “hotel near downtown”, “hotel near me”.",
              "More visibility in Google Maps and other map surfaces.",
              "More direct bookings through the website and calls.",
              "More consistent occupancy in shoulder/low seasons.",
              "Less dependency on paid ads and OTA commissions.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy for hotels",
        blocks: [
          {
            title: "Step 1. Optimize the hotel website",
            body: "Your website should be fast, mobile-friendly, and booking-ready. Create pages for room types (standard, suite, apartments, etc.) and key services (airport shuttle, breakfast, meeting rooms, spa, parking, tours).",
          },
          {
            title: "Step 2. Create local landing pages",
            body: "Build pages for key locations/areas you serve: address, map, neighborhood description, nearby attractions, and directions. This helps you rank for location-driven searches.",
          },
          {
            title: "Step 3. Keep NAP consistent",
            body: "Your name, address, and phone (NAP) should match across your website, Google, and third-party platforms. Consistency improves trust and local rankings.",
          },
        ],
      },
      {
        title: "Maps listings and guest reviews",
        blocks: [
          {
            body: [
              "Fully complete your Google Business Profile: high-quality photos of rooms, property, restaurants, and spa.",
              "Clearly describe amenities, policies, and check-in/check-out details.",
              "Encourage guests to leave honest reviews and respond quickly.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "With consistent work on the site, listings, and reviews, noticeable improvements often appear within 4–8 weeks. More stable occupancy growth typically takes 3–6 months.",
          },
          {
            title: "Checklist",
            body: [
              "Optimize the hotel website (rooms, services, locations).",
              "Create local pages for key areas/locations.",
              "Make NAP consistent everywhere.",
              "Complete and regularly update your Maps listing.",
              "Collect and manage reviews, and track booking growth.",
            ],
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "SEO מקומי למלונות: למה זה חשוב, למה לצפות ואיך עושים את זה",
    lead: [
      "מלונות תלויים מאוד בחיפוש מקומי. אורחים בודקים אפשרויות במפות, קוראים ביקורות ומסתכלים על תמונות לפני הזמנה.",
      "SEO מקומי עוזר למלון להופיע בתוצאות האלה ולהגדיל הזמנות ישירות דרך Google (במקום להסתמך רק על פרסום ועל עמלות OTA).",
    ],
    sections: [
      {
        title: "למה מלון צריך SEO מקומי",
        blocks: [
          {
            title: "1. אורחים מחפשים לפי מפה וקרבה",
            body: "חיפושים כמו “מלון קרוב אליי”, “מלון ליד שדה התעופה”, או “מלון בתל אביב” מפעילים תוצאות מקומיות. אם הכרטיס לא מאופטם, ייתכן שלא תופיעו בין האפשרויות הבולטות.",
          },
          {
            title: "2. מפות ופלטפורמות הזמנה משפיעות על הביקוש",
            body: "Google Maps וערוצים נוספים הם נקודות כניסה מרכזיות: אורחים רואים תמונות, קוראים ביקורות ולוחצים להזמנה. נוכחות במפות משלימה את האתר ואת פרופילי ה‑OTA ולעיתים גם מתחרה על תשומת לב.",
          },
          {
            title: "3. אמון ומוניטין",
            body: "דירוג, כמות ועדכניות ביקורות, תמונות חדרים/מתחם ותיאור מתקנים-בונים אמון ומשפיעים ישירות על שיעור ההזמנה.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "שיפור נראות לחיפושים כמו “מלון ב[עיר]”, “מלון ליד מרכז העיר”, “מלון קרוב אליי”.",
              "יותר נוכחות ב‑Google Maps וב‑Waze (וגם ב‑Apple Maps).",
              "יותר הזמנות ישירות דרך האתר ושיחות.",
              "תפוסה יציבה יותר בעונות חלשות.",
              "פחות תלות בפרסום ממומן ובעמלות OTA.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד למלונות",
        blocks: [
          {
            title: "שלב 1. אופטימיזציה לאתר המלון",
            body: "האתר צריך להיות מהיר ונוח במובייל עם תהליך הזמנה ברור. ליצור עמודים לסוגי חדרים (סטנדרט, סוויטה, דירות וכו’) ולעיקרי שירותים (שאטל, ארוחת בוקר, חדרי ישיבות, ספא, חניה, סיורים).",
          },
          {
            title: "שלב 2. דפי נחיתה לפי אזורים",
            body: "ליצור דפים לאזורים מרכזיים: כתובת, מפה, תיאור שכונה, אטרקציות קרובות והוראות הגעה. זה עוזר לחיפושים לפי מיקום.",
          },
          {
            title: "שלב 3. עקביות NAP",
            body: "שם/כתובת/טלפון צריכים להיות זהים באתר, ב‑Google ובפלטפורמות צד שלישי. עקביות משפרת אמון ודירוג מקומי.",
          },
        ],
      },
      {
        title: "כרטיסים במפות וביקורות אורחים",
        blocks: [
          {
            body: [
              "למלא בצורה מלאה את Google Business Profile עם תמונות איכותיות של חדרים, מתחם, מסעדות וספא.",
              "לתאר מתקנים, מדיניות ותנאי צ’ק‑אין/צ’ק‑אאוט בצורה ברורה.",
              "לעודד אורחים להשאיר ביקורות ולהגיב במהירות.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "כאשר עובדים באופן עקבי על האתר, הכרטיסים והביקורות, לרוב רואים שיפור תוך 4–8 שבועות. צמיחה יציבה בתפוסה בדרך כלל לוקחת 3–6 חודשים.",
          },
          {
            title: "צ’ק‑ליסט",
            body: [
              "לאופטימיזציה של האתר (חדרים, שירותים, אזורים).",
              "ליצור דפי נחיתה מקומיים לפי אזורים/מיקומים.",
              "לשמור על עקביות NAP בכל מקום.",
              "למלא ולעדכן את כרטיס העסק במפות.",
              "לאסוף ולנהל ביקורות ולעקוב אחרי הזמנות.",
            ],
          },
        ],
      },
    ],
  },
};

export default content;
