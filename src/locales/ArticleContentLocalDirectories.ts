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
      "Добавление бизнеса в локальные отраслевые каталоги: когда это нужно и как делать с пользой",
    lead: [
      "Локальные каталоги и справочники - это одно из самых недооценённых направлений локального SEO. Многие бизнесы сосредоточены на Google My Business и Яндекс.Справочнике, но забывают про десятки других площадок, где люди ищут компании и услуги. Присутствие в локальных каталогах не только даёт дополнительные точки контакта с клиентами, но и усиливает общий авторитет сайта в глазах поисковых систем.",
      "Добавление в локальные отраслевые каталоги Беларуси - это один из наиболее эффективных способов укрепления локального SEO в Минске, Бресте, Гомеле и других городах и получения качественных тематических ссылок. Правильно подобранные белорусские каталоги помогают повысить доверие Google и Яндекса и улучшить позиции в локальном поиске.",
      "Локальные отраслевые каталоги и справочники - это не «магический» инструмент SEO, как их иногда продают, но и не бессмысленный пережиток прошлого. При грамотном подходе они помогают укрепить видимость бизнеса в поиске, добавить ещё одну точку контакта с клиентами и усилить доверие. Разберём, зачем вообще туда добавляться, чего от этого ожидать и как делать это без спама и лишних затрат.",
    ],
    sections: [
      {
        title: "Зачем бизнесу локальные отраслевые каталоги",
        blocks: [
          {
            title: "1. Дополнительная точка присутствия в поиске",
            body: "Во многих нишах по запросу клиента в поиске появляются не только сайты и карты, но и подборки с отраслевыми справочниками: каталоги клиник, салонов, частных специалистов, сервисов и т.п. Если вы представлены в таких каталогах, вы получаете шанс «выйти на арену» даже там, где на первой странице доминируют крупные агрегаторы и бренды.",
          },
          {
            title: "2. Укрепление доверия за счёт упоминаний",
            body: "Когда о вашем бизнесе можно найти информацию не только на собственном сайте, но и в сторонних источниках, у клиента возникает ощущение устойчивости и «реальности» компании. Особенно это важно в отраслях с высоким уровнем недоверия: медицина, ремонт, услуги для дома, обучение.",
          },
          {
            title: "3. Дополнительные сигналы для локального SEO",
            body: "Для поисковых систем факты о бизнесе, повторяющиеся в разных авторитетных источниках, служат сигналом, что данные достоверны. Единообразное упоминание названия, адреса и телефона (NAP) в локальных каталогах помогает укрепить «каркас» локального SEO.",
          },
          {
            title: "4. Живые переходы и заявки из самих каталогов",
            body: "В некоторых тематиках и городах отраслевые каталоги действительно приводят трафик: люди ищут подрядчика не через поисковик, а прямо в знакомом справочнике. Это особенно заметно там, где давно существуют сильные местные порталы: городские сервисы услуг, каталоги врачей, учебных центров, автомастерских.",
          },
        ],
      },
      {
        title: "Чего ожидать от добавления в каталоги",
        blocks: [
          {
            body: "Здесь важно не завышать ожидания. Добавление в каталоги - это поддерживающая мера, а не основной канал лидов.",
          },
          {
            body: [
              "Не будет мгновенного всплеска заявок. Один‑два новых каталога редко «переворачивают» ситуацию. Эффект обычно распределён во времени и поддерживает уже выстроенную систему маркетинга.",
              "Сильнее влияет качество, а не количество. Десять нормальных живых каталогов полезнее, чем сотни слабых и заспамленных.",
              "Важен локальный контекст. В одних городах и отраслях каталоги популярны, в других почти не используются. Это нужно учитывать при выборе площадок.",
            ],
          },
        ],
      },
      {
        title: "Как выбрать каталоги: не всё подряд",
        blocks: [
          {
            body: "Добавляться «куда угодно, лишь бы была ссылка» - плохая стратегия. Лучше потратить время на отбор 5–20 действительно подходящих площадок.",
          },
          {
            body: [
              "смотрите, появляются ли каталоги по вашим ключевым запросам в поиске (особенно в регионе);",
              "оценивайте живость: есть ли свежие записи, отзывы, активные компании;",
              "проверяйте репутацию: нет ли у каталога «токсичного» имиджа и спама;",
              "отдавайте приоритет тематическим и региональным площадкам, а не абстрактным свалкам ссылок.",
            ],
          },
        ],
      },
      {
        title: "Как готовиться к размещению: NAP и описание",
        blocks: [
          {
            body: "Прежде чем массово заполнять анкеты, имеет смысл подготовить единый «пакет» данных о компании. Это экономит время и снижает риск ошибок.",
          },
          {
            body: [
              "единое название компании, которое вы будете использовать везде;",
              "корректный адрес и при необходимости - пояснения, как до вас добраться;",
              "основной телефон и, возможно, отдельный номер для запросов из интернета;",
              "ссылку на сайт и ключевые соцсети;",
              "краткое и развернутое описание деятельности для разных форм;",
              "подборку фотографий (логотип, фасад, интерьер, команда, результаты работ).",
            ],
          },
        ],
      },
      {
        title: "Пошагово: как добавляться в каталоги",
        blocks: [
          {
            body: "Общий алгоритм выглядит так:",
          },
          {
            title: "Шаг 1. Составьте список приоритетных площадок",
            body: "На этом шаге вы определяете, куда вообще имеет смысл идти. Хорошая практика - сделать таблицу с названиями каталогов, ссылками на раздел добавления организации и примечаниями по условиям размещения.",
          },
          {
            title: "Шаг 2. Проверьте, нет ли вас там уже",
            body: "В некоторых справочниках вашу компанию могли добавить клиенты или предыдущий подрядчик. Дубликаты вредят и клиентам, и SEO.",
          },
          {
            body: [
              "ищите по названию, адресу, телефону;",
              "если карточка уже существует, лучше запросить права или обновить её, а не создавать новую.",
            ],
          },
          {
            title: "Шаг 3. Заполняйте анкету внимательно",
            body: "При добавлении в каталог не относитесь к форме как к «обязательной рутине». От того, насколько аккуратно вы заполните поля, зависит, как бизнес будет выглядеть в глазах клиентов.",
          },
          {
            body: [
              "используйте подготовленные NAP‑данные;",
              "адаптируйте описание под формат каталога: где‑то нужен короткий абзац, где‑то - расширенный текст;",
              "по возможности выбирайте релевантные рубрики и подкатегории;",
              "добавляйте живые фотографии, а не только логотип.",
            ],
          },
          {
            title: "Шаг 4. Следите за модерацией и обновляйте данные",
            body: "После добавления проверьте, как выглядит карточка на самой площадке:",
          },
          {
            body: [
              "нет ли ошибок в названии, адресе, телефоне;",
              "корректно ли отображается график работы;",
              "правильно ли подгрузились фото.",
            ],
          },
          {
            body: "В дальнейшем время от времени возвращайтесь к этим карточкам: обновляйте режим работы, услуги, цены, если они поменялись.",
          },
        ],
      },
      {
        title: "Типичные ошибки при работе с каталогами",
        blocks: [
          {
            body: "То, чего лучше избегать:",
          },
          {
            body: [
              "массовая регистрация в десятках слабых каталогов ради «количества ссылок»;",
              "несогласованные названия и контакты в разных анкетах;",
              "полное отсутствие контроля за уже созданными карточками;",
              "копированный «продажный» текст с набором ключевых слов во всех описаниях;",
              "отсутствие реальных фотографий - только логотип и стоковые картинки.",
            ],
          },
        ],
      },
      {
        title: "Краткий итог",
        blocks: [
          {
            body: "Локальные отраслевые каталоги - это полезный, но вспомогательный инструмент. Они помогают усилить вашу видимость в поиске, добавить доверия за счёт сторонних упоминаний и привести дополнительных клиентов из тех площадок, которыми люди реально пользуются. Максимальную отдачу дают не «сотни ссылок где угодно», а аккуратная работа с несколькими осмысленными площадками, где у вас корректно заполнены данные и поддерживается актуальность.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Adding a business to local niche directories: when it helps and how to do it properly",
    lead: [
      "Local directories are one of the most underrated areas of local SEO. Many businesses focus only on Google Business Profile and major map listings, but forget about dozens of other platforms where people search for companies and services.",
      "Being present in niche directories can create additional customer touchpoints and strengthen overall trust signals in the eyes of search engines.",
      "Directories are not a ‘magic’ SEO hack-and not useless either. With a smart approach, they can improve visibility, add trust through third‑party mentions, and bring incremental leads without spam or wasted effort.",
    ],
    sections: [
      {
        title: "Why local niche directories matter",
        blocks: [
          {
            title: "1. Additional visibility in search",
            body: "In many industries, the SERP contains not only websites and Maps, but also curated directory lists: clinics, salons, specialists, repair services, etc. If you’re listed there, you can appear even when the first page is dominated by big aggregators.",
          },
          {
            title: "2. Trust through third‑party mentions",
            body: "When customers can find consistent information about you outside your website, the business feels more real and stable. This is especially important in high-trust niches like healthcare, home repair, education, and local services.",
          },
          {
            title: "3. Stronger local entity signals (NAP)",
            body: "For search engines, repeated business facts across reputable sources signal data reliability. Consistent Name–Address–Phone (NAP) citations help strengthen the local SEO foundation.",
          },
          {
            title: "4. Real traffic from directories themselves",
            body: "In some markets, directories can drive meaningful traffic because users search directly inside them. This is common when strong local portals exist for specific categories like doctors, training centers, and auto services.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: "Don’t overestimate the impact. Directory listings are a supporting channel, not the main lead source.",
          },
          {
            body: [
              "No instant lead spike. One or two directories rarely change everything. The effect is gradual and supports an existing marketing system.",
              "Quality matters more than quantity. Ten real directories are better than hundreds of spammy ones.",
              "Local context matters. In some cities or industries directories are popular; in others they’re ignored. Choose accordingly.",
            ],
          },
        ],
      },
      {
        title: "How to choose directories (not everything at once)",
        blocks: [
          {
            body: "Submitting ‘anywhere as long as there is a link’ is a bad strategy. Instead, pick 5–20 platforms that actually fit.",
          },
          {
            body: [
              "check if directories show up for your target keywords (especially local queries);",
              "evaluate activity: fresh listings, reviews, active businesses;",
              "review reputation: avoid platforms known for spam;",
              "prioritize niche + local platforms over random link dumps.",
            ],
          },
        ],
      },
      {
        title: "Prepare before you submit: NAP and description",
        blocks: [
          {
            body: "Before filling out many forms, prepare a single ‘business data pack’. It saves time and reduces mistakes.",
          },
          {
            body: [
              "one consistent business name;",
              "address formatting (and directions if needed);",
              "primary phone (and possibly a separate tracking number);",
              "website and key social links;",
              "short and long descriptions for different forms;",
              "a set of photos (logo, storefront/office, interior, team, work examples).",
            ],
          },
        ],
      },
      {
        title: "Step-by-step: how to submit to directories",
        blocks: [
          { body: "A practical process looks like this:" },
          {
            title: "Step 1. Build a priority list",
            body: "Create a spreadsheet with directory names, submission links, pricing/requirements, and notes.",
          },
          {
            title: "Step 2. Check if you already exist",
            body: "Sometimes customers or a previous contractor already created a listing. Duplicates hurt both users and SEO.",
          },
          {
            body: [
              "search by name, address, and phone;",
              "if a listing exists, claim it or update it instead of creating a new one.",
            ],
          },
          {
            title: "Step 3. Fill the form carefully",
            body: "Treat the form as customer-facing content. Quality of fields affects how you look to real people.",
          },
          {
            body: [
              "use your prepared NAP template;",
              "adapt description to the directory format;",
              "choose relevant categories/subcategories;",
              "use real photos, not only a logo.",
            ],
          },
          {
            title: "Step 4. Review moderation and keep data updated",
            body: "After publishing, check the listing:",
          },
          {
            body: [
              "no typos in name/address/phone;",
              "correct hours;",
              "photos display correctly.",
            ],
          },
          {
            body: "Then revisit periodically and update services, pricing, and hours whenever they change.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          { body: "Avoid the following:" },
          {
            body: [
              "mass submissions to low-quality directories for ‘link count’;",
              "inconsistent names and contact details;",
              "no control over existing listings;",
              "copy-pasted salesy keyword-stuffed text everywhere;",
              "no real photos (only logos or stock images).",
            ],
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Local niche directories are a helpful-but secondary-tool. They can improve visibility, increase trust through third‑party mentions, and bring incremental customers from platforms people actually use. The best results come from careful work on a small set of meaningful platforms, with consistent data and ongoing updates.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "הוספת עסק למדריכים מקצועיים מקומיים: מתי זה עוזר ואיך עושים זאת נכון",
    lead: [
      "מדריכים וקטלוגים מקומיים הם אחד התחומים הכי פחות מוערכים ב‑SEO מקומי. עסקים רבים מתמקדים רק ב‑Google Business Profile ובמפות, אבל מפספסים עשרות פלטפורמות שבהן אנשים מחפשים שירותים.",
      "נוכחות במדריכים מקצועיים יכולה ליצור נקודות מגע נוספות עם לקוחות ולחזק אותות אמון עבור Google.",
      "זה לא ‘קסם’-וגם לא חסר ערך. בגישה נכונה, מדריכים יכולים לשפר נראות, להוסיף אמון דרך אזכורים חיצוניים, ולהביא פניות נוספות בלי ספאם.",
    ],
    sections: [
      {
        title: "למה מדריכים מקצועיים מקומיים חשובים",
        blocks: [
          {
            title: "1. נראות נוספת בחיפוש",
            body: "בענפים רבים תוצאות החיפוש כוללות גם רשימות מדריכים: מרפאות, סלונים, בעלי מקצוע, שירותי תיקון ועוד. כשאתם רשומים שם, יש לכם סיכוי להופיע גם כשהעמוד הראשון נשלט על ידי אגרגטורים גדולים.",
          },
          {
            title: "2. אמון דרך אזכורים חיצוניים",
            body: "כשאפשר למצוא מידע עקבי על העסק גם מחוץ לאתר, זה נראה אמין ו‘אמיתי’ יותר. זה חשוב במיוחד בתחומים שדורשים אמון גבוה כמו בריאות, תיקונים, שירותי בית וחינוך.",
          },
          {
            title: "3. אותות NAP ואימות ישות מקומית",
            body: "חזרות עקביות של שם–כתובת–טלפון (NAP) במקורות אמינים מסייעות ל‑Google לאמת פרטי עסק ולחזק בסיס SEO מקומי.",
          },
          {
            title: "4. תנועה ישירה מהמדריכים",
            body: "בחלק מהענפים אנשים מחפשים ישירות בתוך מדריכים. בישראל זה יכול להיות מורגש במדריכים מקומיים ובענפיים (למשל: d.co.il, Zap, b144, Easy), בהתאם לענף.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: "חשוב לא להגזים בציפיות: מדריכים הם ערוץ תומך ולא מקור הלידים המרכזי.",
          },
          {
            body: [
              "לא תהיה קפיצה מיידית בפניות. ההשפעה מצטברת ותומכת במערכת שיווק קיימת.",
              "איכות חשובה יותר מכמות. כמה מדריכים חיים עדיפים על מאות חלשים.",
              "הקשר מקומי חשוב. יש ענפים שבהם מדריכים חזקים, ויש כאלה שכמעט לא משתמשים בהם.",
            ],
          },
        ],
      },
      {
        title: "איך לבחור מדריכים (לא הכול ביחד)",
        blocks: [
          {
            body: "להירשם ‘בכל מקום רק בשביל קישור’ זו אסטרטגיה גרועה. עדיף לבחור 5–20 פלטפורמות שבאמת מתאימות.",
          },
          {
            body: [
              "לבדוק אם מדריכים מופיעים בביטויי היעד שלכם בגוגל;",
              "לבחון פעילות: רשומות חדשות, ביקורות, עסקים פעילים;",
              "לוודא מוניטין טוב ולהימנע מספאם;",
              "להעדיף מדריכים ענפיים ומקומיים על פני ‘מזבלות קישורים’.",
            ],
          },
        ],
      },
      {
        title: "הכנה לפני הרישום: NAP ותיאור",
        blocks: [
          {
            body: "לפני שממלאים הרבה טפסים, להכין ‘חבילת נתונים’ אחת של העסק. זה חוסך זמן ומפחית טעויות.",
          },
          {
            body: [
              "שם עסק אחיד;",
              "פורמט כתובת קבוע (והנחיות הגעה אם צריך);",
              "טלפון ראשי (ואולי מספר נפרד למדידה);",
              "אתר וקישורי סושיאל עיקריים;",
              "תיאורים קצרים וארוכים לטפסים שונים;",
              "סט תמונות (לוגו, מקום, צוות, דוגמאות עבודה).",
            ],
          },
        ],
      },
      {
        title: "צעד אחר צעד: איך להירשם למדריכים",
        blocks: [
          { body: "כך זה נראה בפועל:" },
          {
            title: "שלב 1. לבנות רשימת עדיפויות",
            body: "לבנות טבלה עם שמות המדריכים, קישורי הרשמה, תנאים ועלויות.",
          },
          {
            title: "שלב 2. לבדוק אם כבר קיימים",
            body: "לפעמים לקוחות או ספק קודם יצרו רשומה. כפילויות מזיקות.",
          },
          {
            body: [
              "לחפש לפי שם, כתובת וטלפון;",
              "אם יש רשומה, עדיף לתבוע בעלות או לעדכן במקום ליצור חדשה.",
            ],
          },
          {
            title: "שלב 3. למלא בקפידה",
            body: "להתייחס לטופס כתוכן שמיועד ללקוחות. איכות הפרטים משפיעה על אמון.",
          },
          {
            body: [
              "להשתמש בתבנית NAP;",
              "להתאים את התיאור לפורמט;",
              "לבחור קטגוריות רלוונטיות;",
              "להוסיף תמונות אמיתיות.",
            ],
          },
          {
            title: "שלב 4. לבדוק אחרי אישור ולעדכן",
            body: "אחרי פרסום לבדוק:",
          },
          {
            body: [
              "אין טעויות בשם/כתובת/טלפון;",
              "שעות פעילות נכונות;",
              "התמונות מופיעות.",
            ],
          },
          {
            body: "לאחר מכן לחזור מדי פעם ולעדכן שירותים, מחירים ושעות כשמשתנים.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          { body: "ממה להימנע:" },
          {
            body: [
              "רישום המוני במדריכים חלשים רק בשביל ‘כמות קישורים’;",
              "חוסר עקביות בפרטי קשר;",
              "אי-שליטה ברשומות קיימות;",
              "תיאור מכירתי מועתק ומלא מילות מפתח;",
              "אין תמונות אמיתיות (רק לוגו/סטוק).",
            ],
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "מדריכים מקצועיים מקומיים הם כלי תומך. הם יכולים לחזק נראות ואמון ולהביא פניות נוספות ממקומות שאנשים באמת משתמשים בהם. התוצאות הטובות מגיעות מעבודה מדויקת על מספר פלטפורמות משמעותיות, עם נתונים עקביים ותחזוקה שוטפת.",
          },
        ],
      },
    ],
  },
};

export default content;
