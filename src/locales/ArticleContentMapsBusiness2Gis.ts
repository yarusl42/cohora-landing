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
    title: "Добавление бизнеса в 2ГИС: как попасть на карту и зачем это нужно",
    lead: [
      "2ГИС остаётся одной из самых популярных картографических и справочных систем в Минске, Бресте, Гомеле, Гродно, Могилёве и других городах Беларуси. Для локального бизнеса присутствие в 2ГИС - это ещё один способ быть «на виду» у белорусских клиентов, которые ищут услуги поблизости. Разберёмся, зачем туда добавляться, чего ожидать и как пройти процедуру шаг за шагом.",
    ],
    sections: [
      {
        title: "Зачем вашему бизнесу быть в 2ГИС",
        blocks: [
          {
            title: "1. Клиенты ищут по карте и рубрикам",
            body: "Многие белорусы открывают 2ГИС, когда им нужно найти «что‑то рядом» в своём городе: салон, сервис, клиника, магазин, мастерская. Они не всегда знают конкретный бренд - им важнее локация, режим работы и отзывы. Если вас нет в 2ГИС, вы не участвуете в этом выборе.",
          },
          {
            title: "2. Дополнительный входящий канал",
            body: "2ГИС - это ещё один источник звонков, переходов на сайт и визитов по адресу. В некоторых городах пользователи почти не пользуются другими картами, полагаясь именно на 2ГИС как на «справочник по городу».",
          },
          {
            title: "3. Удобная навигация до вашей точки",
            body: "2ГИС хорошо отрисовывает дворы, проходы, подъезды. Для бизнесов в сложных локациях (офисы во дворах, мастерские на первых этажах жилых домов, вход со двора) это может быть критично: людям проще до вас добраться и меньше поводов «развернуться по пути».",
          },
          {
            title: "4. Репутация и информация в одном месте",
            body: "В карточке организации в 2ГИС клиент видит адрес, телефон, сайт, режим работы, фотографии и отзывы. Это мини‑лендинг внутри приложения, где человек принимает решение: позвонить вам, проложить маршрут или уйти к конкуренту.",
          },
        ],
      },
      {
        title: "Чего ожидать от присутствия в 2ГИС",
        blocks: [
          {
            body: "Как и с другими картографическими сервисами, важно реалистично оценивать, что даёт добавление бизнеса в 2ГИС.",
          },
          {
            body: [
              "Это не замена всем остальным каналам. 2ГИС - часть общей стратегии: сайт, соцсети, другие карты, офлайн‑вывеска и сервис.",
              "Результаты зависят от города и ниши. В одних городах 2ГИС - основной инструмент поиска, в других роль меньше. Важно учитывать локальный контекст.",
              "Нужны актуальные данные и отзывы. Пустая карточка без фото и отзывов будет работать хуже, чем живой, заполненный профиль.",
            ],
          },
        ],
      },
      {
        title: "Как добавить бизнес в 2ГИС: пошаговая инструкция",
        blocks: [
          {
            body: "Ниже - общий сценарий для офлайн‑организации с адресом. Конкретные детали могут меняться со временем, но логика процесса остаётся примерно той же.",
          },
          {
            title: "Шаг 1. Проверьте, есть ли вы уже в 2ГИС",
            body: "Откройте 2ГИС (в браузере на сайте 2gis.ru или в приложении) и попробуйте найти свою компанию по названию, адресу или телефону. Бывает, что организацию уже добавили пользователи или предыдущие владельцы.",
          },
          {
            body: [
              "Если карточки нет - вы будете добавлять компанию с нуля.",
              "Если карточка есть - важно запросить права на неё, а не создавать дубликат.",
            ],
          },
          {
            title: "Шаг 2. Подготовьте данные о компании",
            body: "Чтобы не отвлекаться в процессе заполнения, заранее подготовьте: название организации (как на вывеске и в документах), адрес с уточнениями (этаж, офис, вход со стороны двора и т.п.), телефон(ы) для клиентов, сайт и соцсети (если есть), режим работы по дням недели, описание услуг или товаров, несколько реальных фотографий фасада, интерьера, витрины, команды.",
          },
          {
            title: "Шаг 3. Подача заявки на добавление",
            body: "На сайте 2ГИС есть форма для добавления организации (через раздел «Добавить организацию» или партнёрский кабинет, например partners.2gis.com). В ней вам предложат указать название и адрес компании, выбрать рубрику (категорию) и дополнительные рубрики, заполнить контакты (телефон, сайт, e‑mail), описать вид деятельности и основные услуги, добавить фотографии.",
          },
          {
            body: "Подавая заявку, старайтесь писать честно и по делу, без излишнего «SEO‑шного» набора ключевых слов. Это упрощает модерацию и делает карточку понятнее клиентам.",
          },
          {
            title: "Шаг 4. Подтверждение данных и модерация",
            body: "Команда 2ГИС проверяет, что организация действительно существует по указанному адресу. Могут позвонить по телефону, попросить уточняющую информацию или документы. Важно быть на связи и своевременно отвечать.",
          },
          {
            title: "Шаг 5. Проверка опубликованной карточки",
            body: "После того как компания появилась в 2ГИС, посмотрите на неё глазами клиента: правильно ли отмечено местоположение на карте; понятен ли вход и как пройти; корректны ли телефон и режим работы; нет ли опечаток в названии и описании.",
          },
        ],
      },
      {
        title: "Работа с отзывами и обновлениями в 2ГИС",
        blocks: [
          {
            body: "Как и в других сервисах, отзывы в 2ГИС влияют на то, как вас воспринимают клиенты.",
          },
          {
            body: [
              "Поощряйте довольных клиентов оставлять честные отзывы.",
              "Отвечайте на обратную связь спокойно и по делу, особенно на негатив.",
              "Следите за тем, чтобы режим работы и контакты всегда были актуальными.",
              "Периодически обновляйте фото, чтобы карточка не выглядела «заброшенной».",
            ],
          },
        ],
      },
      {
        title: "Типичные ошибки при работе с 2ГИС",
        blocks: [
          {
            body: [
              "Создание нескольких карточек одной и той же организации.",
              "Указание некорректного адреса или входа, из‑за чего клиенты не могут вас найти.",
              "Отсутствие актуальных контактов или неправильный режим работы.",
              "Полное игнорирование отзывов клиентов.",
              "Загрузка стоковых фотографий вместо реальных снимков вашего бизнеса.",
              "Надежда на быстрый поток клиентов без работы над сервисом и репутацией.",
            ],
          },
        ],
      },
      {
        title: "Итоги",
        blocks: [
          {
            body: "Добавление бизнеса в 2ГИС - логичный шаг для локальных компаний в городах, где этой картой активно пользуются. Это не отдельный магический канал, а часть общей картины: качественный сервис, понятная информация, работа с отзывами и присутствие на ключевых онлайн‑площадках. Если всё это соединить, 2ГИС становится ещё одной стабильной точкой входа для новых клиентов.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "How to add your business to maps: why it matters and how to do it",
    lead: [
      "In the US, local discovery primarily happens through Google Maps (and sometimes Apple Maps). Being present on maps is a practical way to get found by nearby customers searching for services “near me”. Below is a step-by-step approach: why it matters, what to expect, and how to set it up properly.",
    ],
    sections: [
      {
        title: "Why your business should be on maps",
        blocks: [
          {
            title: "1. Customers search by map and category",
            body: "People open Maps when they need something close by: a clinic, coffee shop, auto service, store, or repair shop. They often don’t know brands-they compare location, hours, photos, and reviews. If you’re not there, you’re not in the shortlist.",
          },
          {
            title: "2. An additional inbound channel",
            body: "Maps listings generate calls, direction requests, website visits, and walk-ins. For many local businesses, the listing can be a major source of high-intent traffic.",
          },
          {
            title: "3. Better navigation and fewer lost customers",
            body: "A clear pin location, accurate entrance details, and good photos reduce friction. The easier it is to find you, the more likely customers are to actually show up.",
          },
          {
            title: "4. Reputation and information in one place",
            body: "Your listing is a mini landing page inside the map app: address, phone, hours, photos, and reviews. Customers decide quickly whether to call, visit, or choose a competitor.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: "Maps visibility is powerful, but it works best as part of a complete local strategy.",
          },
          {
            body: [
              "It’s not a replacement for every channel. Maps complements your website, social media, and other local platforms.",
              "Results depend on your city and category. Some niches are extremely competitive.",
              "Accurate info and reviews matter. Empty listings perform worse than well-maintained profiles.",
            ],
          },
        ],
      },
      {
        title: "How to add your business (step by step)",
        blocks: [
          {
            body: "Below is a general workflow for a location-based business. Details may change over time, but the logic stays similar.",
          },
          {
            title: "Step 1. Check if you already exist",
            body: "Search for your business name, address, or phone number in Google Maps / Apple Maps. Sometimes the listing already exists, created by users or data providers.",
          },
          {
            body: [
              "If it doesn’t exist - create it.",
              "If it exists - claim and verify it instead of creating a duplicate.",
            ],
          },
          {
            title: "Step 2. Prepare business data",
            body: "Gather your official name, precise address (including suite/floor/entrance details), phone number, website, social links, hours, a short description of services, and real photos (storefront, interior, team, work examples).",
          },
          {
            title: "Step 3. Submit and complete the profile",
            body: "In Google Business Profile, choose accurate categories, fill out all fields, and add services/products if available. Avoid keyword stuffing-write for humans first.",
          },
          {
            title: "Step 4. Verification",
            body: "Verification methods vary (phone, email, postcard, video, documentation). Follow the instructions carefully and keep your information consistent.",
          },
          {
            title: "Step 5. Audit the live listing",
            body: "After publication, review it like a customer: pin accuracy, entrance clarity, phone/hours correctness, and typo-free descriptions.",
          },
        ],
      },
      {
        title: "Reviews and updates",
        blocks: [
          {
            body: "Reviews influence trust and conversion in every map platform.",
          },
          {
            body: [
              "Ask happy customers for honest reviews.",
              "Reply calmly and professionally-especially to negative feedback.",
              "Keep hours and contact details current.",
              "Refresh photos periodically so the listing looks active.",
            ],
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Creating duplicates of the same location.",
              "Using an inaccurate address or unclear entrance details.",
              "Outdated phone numbers or incorrect hours.",
              "Ignoring customer reviews.",
              "Uploading stock photos instead of real business images.",
              "Expecting quick results without improving service and reputation.",
            ],
          },
        ],
      },
      {
        title: "Takeaways",
        blocks: [
          {
            body: "Adding your business to Maps is a logical step for local companies. It’s not a magic channel on its own-it works best with strong service, clear information, review management, and presence on key online platforms. Combine those elements, and Maps becomes a stable entry point for new customers.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "איך להוסיף עסק למפות: למה זה חשוב ואיך עושים את זה",
    lead: [
      "בישראל חיפוש מקומי מתבצע בעיקר דרך Google Maps ולעיתים גם דרך Waze ו‑Apple Maps. נוכחות במפות היא דרך פרקטית להופיע בפני לקוחות שמחפשים שירותים “קרוב אליי”. הנה מדריך קצר: למה זה חשוב, למה לצפות ואיך לעשות את זה נכון.",
    ],
    sections: [
      {
        title: "למה חשוב שהעסק יופיע במפות",
        blocks: [
          {
            title: "1. לקוחות מחפשים לפי מפה וקטגוריה",
            body: "אנשים פותחים מפות כשצריך משהו קרוב: מרפאה, בית קפה, שירותי רכב, חנות או תיקונים. לרוב הם לא מכירים מותגים-הם משווים מיקום, שעות, תמונות וביקורות. אם אתם לא שם, אתם לא ברשימה.",
          },
          {
            title: "2. ערוץ כניסה נוסף",
            body: "כרטיס במפות מייצר שיחות, בקשות ניווט, כניסות לאתר וביקורים בפועל. עבור עסקים מקומיים רבים זה מקור תנועה “חם”.",
          },
          {
            title: "3. ניווט ברור ופחות לקוחות שהולכים לאיבוד",
            body: "מיקום סיכה מדויק, הוראות כניסה ותמונות טובות מפחיתים חיכוך. ככל שקל יותר למצוא אתכם-כך גדל הסיכוי שיגיעו.",
          },
          {
            title: "4. מוניטין ומידע במקום אחד",
            body: "הכרטיס הוא מיני‑דף בתוך האפליקציה: כתובת, טלפון, שעות, תמונות וביקורות. הלקוח מחליט מהר אם להתקשר, להגיע או לבחור מתחרה.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: "נראות במפות עובדת הכי טוב כחלק מאסטרטגיה מקומית מלאה.",
          },
          {
            body: [
              "זה לא מחליף את כל הערוצים. מפות משלימות אתר, רשתות חברתיות ופלטפורמות מקומיות.",
              "תוצאות תלויות בעיר ובקטגוריה. בחלק מהתחומים התחרות גבוהה מאוד.",
              "דיוק וביקורות חשובים. כרטיסים ריקים עובדים פחות טוב מכרטיסים מתוחזקים.",
            ],
          },
        ],
      },
      {
        title: "איך להוסיף עסק למפות (שלב‑אחר‑שלב)",
        blocks: [
          {
            body: "להלן תהליך כללי לעסק עם מיקום פיזי. הפרטים משתנים, אבל העיקרון דומה.",
          },
          {
            title: "שלב 1. לבדוק אם כבר קיים כרטיס",
            body: "חפשו את שם העסק/כתובת/טלפון ב‑Google Maps או Apple Maps. לפעמים הכרטיס כבר קיים ונוצר על ידי משתמשים או ספקי מידע.",
          },
          {
            body: [
              "אם אין כרטיס - יוצרים חדש.",
              "אם יש כרטיס - מבקשים בעלות/אימות ולא יוצרים כפילות.",
            ],
          },
          {
            title: "שלב 2. להכין נתונים",
            body: "אספו שם רשמי, כתובת מדויקת (כולל קומה/כניסה), טלפון, אתר, קישורים חברתיים, שעות פעילות, תיאור קצר של השירותים ותמונות אמיתיות (חזית, פנים, צוות, דוגמאות).",
          },
          {
            title: "שלב 3. למלא פרטים בצורה מלאה",
            body: "ב‑Google Business Profile בחרו קטגוריות מדויקות, מלאו את כל השדות והוסיפו שירותים/מוצרים אם אפשר. הימנעו מדחיסת מילות מפתח.",
          },
          {
            title: "שלב 4. אימות",
            body: "שיטות אימות משתנות (טלפון, אימייל, גלויה, וידאו, מסמכים). עקבו אחרי ההוראות ושמרו על עקביות המידע.",
          },
          {
            title: "שלב 5. בדיקת הכרטיס לאחר פרסום",
            body: "לאחר פרסום, בדקו כמו לקוח: דיוק הסיכה, בהירות הכניסה, שעות וטלפון נכונים ותיאורים ללא שגיאות.",
          },
        ],
      },
      {
        title: "ביקורות ועדכונים",
        blocks: [
          {
            body: "ביקורות משפיעות על אמון והמרה בכל פלטפורמת מפות.",
          },
          {
            body: [
              "לבקש מלקוחות מרוצים ביקורת אמיתית.",
              "להגיב בצורה מקצועית-במיוחד לשלילי.",
              "לעדכן שעות ופרטי קשר.",
              "לרענן תמונות מדי פעם כדי שהכרטיס ייראה פעיל.",
            ],
          },
        ],
      },
      {
        title: "שגיאות נפוצות",
        blocks: [
          {
            body: [
              "יצירת כרטיסים כפולים לאותו מקום.",
              "כתובת לא מדויקת או פרטי כניסה לא ברורים.",
              "טלפון לא עדכני או שעות לא נכונות.",
              "התעלמות מביקורות.",
              "תמונות סטוק במקום תמונות אמיתיות.",
              "ציפייה לתוצאות מהירות בלי עבודה על שירות ומוניטין.",
            ],
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "הוספת עסק למפות היא צעד הגיוני לכל עסק מקומי. זה לא ערוץ קסם בפני עצמו-זה עובד טוב יותר יחד עם שירות חזק, מידע ברור, ניהול ביקורות ונוכחות בפלטפורמות מפתח. כשמשלבים, מפות הופכות לנקודת כניסה יציבה ללקוחות חדשים.",
          },
        ],
      },
    ],
  },
};

export default content;
