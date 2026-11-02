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
      "Регистрация в локальных бизнес-справочниках: как усилить локальное SEO и привлечь клиентов",
    lead: [
      "Регистрация белорусского бизнеса в локальных справочниках часто недооценивается, хотя на практике это один из фундаментальных инструментов локального SEO в Минске, Бресте, Гомеле и других городах Беларуси.",
      "Корректные NAP‑упоминания (Name–Address–Phone) в каталогах усиливают доверие поисковых систем, помогают Google Картам и Яндекс Справочнику проверять ваши данные и приводят дополнительных белорусских клиентов, которые ищут компании именно через справочники.",
    ],
    sections: [
      {
        title: "Зачем регистрироваться в локальных бизнес-справочниках",
        blocks: [
          {
            title: "1. Укрепление локального SEO и NAP-сигналов",
            body: "Google и Яндекс используют данные локальных каталогов, чтобы убедиться, что бизнес реально существует, работает по указанному адресу в Беларуси и обладает стабильными контактами. Чем больше совпадающих корректных NAP‑записей в авторитетных справочниках, тем выше уровень доверия к вашей компании в глазах алгоритмов.",
          },
          {
            title: "2. Дополнительные точки входа клиентов",
            body: "Многие пользователи ищут услуги не через поисковые системы, а сразу в картах и каталогах: 2ГИС, Яндекс.Карты, Zoon, локальные порталы. Регистрация в таких справочниках даёт отдельный поток обращений, который не зависит напрямую от позиций сайта.",
          },
          {
            title: "3. Повышение доверия к бизнесу",
            body: "Наличие компании во всех ключевых локальных справочниках создаёт ощущение стабильности и открытости. Клиент видит бренд на разных площадках и воспринимает его как более надёжный и проверенный вариант.",
          },
          {
            title: "4. Усиление позиций в картах",
            body: "Многие карты и сервисы синхронизируются между собой и используют данные сторонних каталогов для проверки точности. Чем больше совпадающих корректных записей, тем выше доверие к вашей карточке в картах и тем лучше она ранжируется по локальным запросам.",
          },
          {
            title: "5. Укрепление бренда и узнаваемости",
            body: "Когда бизнес встречается во всех основных локальных каталогах, создаётся эффект «вы везде». Это усиливает бренд и помогает формировать позитивный цифровой след компании.",
          },
        ],
      },
      {
        title: "Чего ожидать от регистрации в бизнес-справочниках",
        blocks: [
          {
            title: "Рост локального трафика и SEO",
            body: "При корректном заполнении карточек сайт получает дополнительный трафик по локальным запросам, а NAP‑сигналы становятся более сильными и стабильными, что положительно влияет на позиции в выдаче и картах.",
          },
          {
            title: "Появление новых клиентов",
            body: "Регистрация особенно заметно влияет на бизнесы с офлайн‑точкой: медицинские центры, салоны красоты, мастерские, магазины, сервисные компании. Пользователи находят их прямо в каталогах и звонят, не заходя на сайт.",
          },
          {
            title: "Укрепление цифровой репутации",
            body: "Чем больше осмысленных упоминаний о компании в интернете, тем сложнее «стереть» её из цифрового поля. Это помогает при развитии бренда и работе с репутацией в долгую.",
          },
        ],
      },
      {
        title: "Как правильно регистрироваться в локальных бизнес-справочниках",
        blocks: [
          {
            title: "Шаг 1. Подготовьте единые NAP-данные",
            body: "Перед началом работ важно собрать единый шаблон информации о компании:",
          },
          {
            body: [
              "название компании (бренд + юридическая форма при необходимости);",
              "юридическое и фактическое наименование, если они различаются;",
              "точный адрес с указанием офиса, корпуса и т.п.;",
              "единый номер телефона (и дополнительные, если используются);",
              "адрес сайта и e‑mail;",
              "режим работы (включая выходные и перерывы);",
              "краткое описание услуг;",
              "ссылки на соцсети;",
              "логотип и базовый набор фотографий.",
            ],
          },
          {
            body: "Все эти данные должны совпадать на всех площадках. Расхождения в адресах или телефонах ослабляют локальное SEO.",
          },
          {
            title: "Шаг 2. Выберите ключевые справочники",
            body: "Начните с крупнейших площадок:",
          },
          {
            body: [
              "2ГИС;",
              "Яндекс.Справочник / Яндекс.Карты;",
              "Google Business Profile;",
              "Zoon, Yell, Flamp и другие популярные каталоги;",
              "региональные порталы и отраслевые каталоги для вашего города.",
            ],
          },
          {
            body: "Целесообразно присутствовать минимум на 10–15 площадках, уделяя приоритетное внимание тем, которые реально используют ваши клиенты.",
          },
          {
            title: "Шаг 3. Заполните карточку компании без ошибок",
            body: "При создании карточки используйте ровно те данные, которые заложены в ваш NAP‑шаблон. Следите за форматом адреса и телефона, не искажайте название и не добавляйте лишний «SEO‑спам» в поле имени компании.",
          },
          {
            title: "Шаг 4. Добавьте фотографии и описание",
            body: "Справочники и пользователи любят визуальный контент. Добавьте фотографии фасада, входа, офиса, команды, продукции или примеров работ. В описании кратко расскажите, чем вы занимаетесь, в каком городе и районах работаете, какие услуги оказываете и чем отличаетесь.",
          },
          {
            title: "Шаг 5. Подтвердите права и следите за отзывами",
            body: "На многих площадках нужно подтвердить права на карточку по телефону, SMS или документам. После этого важно регулярно отслеживать отзывы, отвечать на них и актуализировать информацию при изменениях в работе компании.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Регистрация в локальных бизнес-справочниках - недорогой и при этом крайне эффективный инструмент для усиления локального SEO, повышения доверия и привлечения новых клиентов. При аккуратной работе с NAP‑данными, выбором площадок и поддержанием актуальной информации вы получаете долгосрочный эффект и сильный фундамент для продвижения в поиске и картах.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local business directory listings: how to boost local SEO and attract customers",
    lead: [
      "Getting your business listed in local directories is often underestimated, yet it’s one of the foundational tools for local SEO.",
      "Consistent NAP (Name–Address–Phone) citations across trusted platforms help search engines verify your business, strengthen visibility in Google Maps, and bring additional customers who search directly inside directory and map apps.",
    ],
    sections: [
      {
        title: "Why list your business in local directories",
        blocks: [
          {
            title: "1. Stronger local SEO and NAP signals",
            body: "Google uses directory and citation data to validate that a business exists at a real address and has stable contact details. The more consistent citations you have across reputable platforms, the higher the trust level for your business.",
          },
          {
            title: "2. Additional customer entry points",
            body: "Many users don’t start from search-they open Maps and directory apps. Listings in platforms like Google Business Profile, Apple Maps, Yelp, Bing Places, and industry directories can bring a separate stream of leads independent from your site’s rankings.",
          },
          {
            title: "3. Increased trust",
            body: "When customers see your brand across multiple trusted platforms, it creates a sense of legitimacy and stability-especially important for service businesses.",
          },
          {
            title: "4. Better Maps performance",
            body: "Map ecosystems frequently cross-reference data. The more accurate and consistent your citations are, the stronger your map presence tends to be for local queries.",
          },
          {
            title: "5. Stronger brand awareness",
            body: "Appearing across directories creates an ‘everywhere’ effect and strengthens your digital footprint over time.",
          },
        ],
      },
      {
        title: "What to expect from directory listings",
        blocks: [
          {
            title: "More local traffic and SEO lift",
            body: "Well-optimized listings can drive incremental local traffic and strengthen citation signals, which can positively influence local rankings and Maps visibility.",
          },
          {
            title: "New customers",
            body: "Listings can be especially impactful for businesses with a physical location (clinics, salons, shops, local services). Many users call directly from directory apps without visiting a website.",
          },
          {
            title: "A stronger long-term reputation",
            body: "The more meaningful mentions your brand has online, the harder it is to ‘erase’ it. This supports long-term reputation and brand growth.",
          },
        ],
      },
      {
        title: "How to list your business correctly",
        blocks: [
          {
            title: "Step 1. Prepare a single NAP template",
            body: "Before you start, define a single source of truth for your business data:",
          },
          {
            body: [
              "official business name;",
              "address formatting (suite/unit/building) exactly as you want it everywhere;",
              "primary phone number (and secondary, if used);",
              "website and email;",
              "hours (including weekends/breaks);",
              "short description of services;",
              "social links;",
              "logo and a base set of photos.",
            ],
          },
          {
            body: "All fields should match across platforms. Inconsistent addresses or phone numbers weaken local SEO.",
          },
          {
            title: "Step 2. Choose the key platforms",
            body: "Start with the biggest platforms in your market:",
          },
          {
            body: [
              "Google Business Profile;",
              "Apple Maps Business Connect (where applicable);",
              "Bing Places;",
              "Yelp;",
              "Facebook/Instagram pages;",
              "industry and local directories relevant to your city.",
            ],
          },
          {
            body: "A practical baseline is 10–15 quality platforms, prioritizing those your customers actually use.",
          },
          {
            title: "Step 3. Fill the listing without ‘SEO spam’",
            body: "Use the exact data from your NAP template. Keep names clean, avoid stuffing keywords into the business name field, and pay attention to address/phone formatting.",
          },
          {
            title: "Step 4. Add photos and a clear description",
            body: "Directories reward strong visuals. Add photos of your storefront/office/team/products and write a short description focused on what you do and where you serve.",
          },
          {
            title: "Step 5. Verify ownership and manage reviews",
            body: "Many platforms require verification via phone, SMS, or documents. After that, monitor reviews, respond consistently, and keep listing data updated when things change.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "Directory listings are a cost-effective way to strengthen local SEO, improve trust, and drive new customers. With consistent NAP, smart platform selection, and ongoing maintenance, you build a durable foundation for local visibility in search and Maps.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "רישום במדריכי עסקים מקומיים: איך לחזק SEO מקומי ולהביא לקוחות",
    lead: [
      "רישום עסק במדריכים מקומיים הוא מהכלים הבסיסיים של SEO מקומי, אך לעיתים מזלזלים בו.",
      "אזכורי NAP עקביים (שם–כתובת–טלפון) בפלטפורמות אמינות עוזרים ל‑Google לאמת את העסק, מחזקים נראות ב‑Google Maps, ומביאים פניות ממשתמשים שמחפשים ישירות בתוך מדריכים ואפליקציות ניווט.",
    ],
    sections: [
      {
        title: "למה כדאי לרשום את העסק במדריכים מקומיים",
        blocks: [
          {
            title: "1. חיזוק אותות NAP ורלוונטיות מקומית",
            body: "Google משתמש בנתוני אזכורים ומדריכים כדי לוודא שהעסק אמיתי, נמצא בכתובת קיימת ושפרטי הקשר שלו עקביים. ככל שיש יותר אזכורים עקביים בפלטפורמות אמינות-כך עולה רמת האמון.",
          },
          {
            title: "2. נקודות כניסה נוספות ללקוחות",
            body: "לא מעט משתמשים מתחילים בחיפוש בתוך מפות ומדריכים. בישראל זה כולל בדרך כלל Google Business Profile, Google Maps, Waze, וגם מדריכים מקומיים נפוצים. רישום איכותי יכול להביא פניות גם בלי תלות מלאה בדירוגי האתר.",
          },
          {
            title: "3. יותר אמון",
            body: "כשלקוח רואה את המותג שלכם במספר פלטפורמות אמינות, נוצרת תחושה של יציבות ולגיטימיות.",
          },
          {
            title: "4. חיזוק נוכחות במפות",
            body: "אקו-סיסטם המפות נשען על הצלבות מידע. עקביות בפרטים במדריכים יכולה לתמוך בנראות במפות ולשפר ביצועים בביטויים מקומיים.",
          },
          {
            title: "5. חיזוק מותג וטביעת רגל דיגיטלית",
            body: "הופעה במספר מדריכים יוצרת אפקט ‘אתם בכל מקום’ ומחזקת את הנוכחות הדיגיטלית לאורך זמן.",
          },
        ],
      },
      {
        title: "למה לצפות מרישום במדריכים",
        blocks: [
          {
            title: "יותר תנועה מקומית ונראות",
            body: "כרטיסים מלאים ומדויקים יכולים להביא תנועה מקומית נוספת ולחזק אותות אזכורים-מה שעשוי להשפיע לטובה על נראות מקומית במפות.",
          },
          {
            title: "יותר לקוחות",
            body: "לעסקים עם מיקום פיזי (מרפאות, סלונים, חנויות ושירותים מקומיים) ההשפעה לעיתים משמעותית במיוחד: משתמשים מתקשרים ישירות מתוך האפליקציה.",
          },
          {
            title: "מוניטין חזק לטווח ארוך",
            body: "ככל שיש יותר אזכורים משמעותיים של העסק, קשה יותר ‘להעלים’ אותו מהשדה הדיגיטלי. זה תומך במוניטין ובצמיחה לאורך זמן.",
          },
        ],
      },
      {
        title: "איך לבצע רישום נכון במדריכים מקומיים",
        blocks: [
          {
            title: "שלב 1. להכין תבנית NAP אחידה",
            body: "לפני שמתחילים, להגדיר מקור אמת אחד לכל פרטי העסק:",
          },
          {
            body: [
              "שם העסק הרשמי;",
              "פורמט כתובת קבוע (דירה/יחידה/קומה);",
              "טלפון ראשי (וגיבוי אם יש);",
              "אתר ואימייל;",
              "שעות פעילות;",
              "תיאור קצר של השירותים;",
              "קישורי רשתות חברתיות;",
              "לוגו וסט תמונות בסיסי.",
            ],
          },
          {
            body: "חשוב שהכול יהיה עקבי. חוסר עקביות בכתובת/טלפון מחליש SEO מקומי.",
          },
          {
            title: "שלב 2. לבחור פלטפורמות מובילות",
            body: "להתחיל מהגדולות והנפוצות בשוק הישראלי:",
          },
          {
            body: [
              "Google Business Profile;",
              "Google Maps;",
              "Waze (כניווט נפוץ, לצד עקביות פרטי העסק);",
              "Facebook/Instagram;",
              "מדריכים מקומיים נפוצים (למשל: d.co.il, Zap, b144, Easy);",
              "מדריכים ענפיים ורלוונטיים לעיר/אזור שלכם.",
            ],
          },
          {
            body: "יעד מעשי הוא 10–15 פלטפורמות איכותיות, תוך עדיפות לפלטפורמות שהלקוחות באמת משתמשים בהן.",
          },
          {
            title: "שלב 3. למלא בלי ‘ספאם SEO’",
            body: "להשתמש בדיוק בפרטים מהתבנית, לא לדחוס מילות מפתח לשם העסק, ולשמור על פורמט אחיד של כתובת וטלפון.",
          },
          {
            title: "שלב 4. להוסיף תמונות ותיאור ברור",
            body: "להעלות תמונות של חזית/משרד/צוות/עבודות ולכתוב תיאור קצר שמסביר מה אתם עושים ואיפה אתם נותנים שירות.",
          },
          {
            title: "שלב 5. אימות וניהול ביקורות",
            body: "בפלטפורמות רבות צריך לאמת בעלות (SMS/טלפון/מסמכים). לאחר מכן חשוב לעקוב אחרי ביקורות, לענות בצורה עקבית ולעדכן פרטים כשמשתנים.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "רישום במדריכים הוא דרך משתלמת לחזק SEO מקומי, לבנות אמון ולהביא לקוחות. עם NAP עקבי, בחירת פלטפורמות נכונה ותחזוקה שוטפת-נבנה בסיס חזק לנראות מקומית בחיפוש ובמפות.",
          },
        ],
      },
    ],
  },
};

export default content;
