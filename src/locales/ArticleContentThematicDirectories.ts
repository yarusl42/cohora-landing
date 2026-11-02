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
      "Размещение в тематических каталогах: простой инструмент для роста видимости и доверия",
    lead: [
      "Размещение в тематических каталогах Беларуси - это одна из наиболее эффективных стратегий локального SEO в Минске, Бресте, Гомеле и других городах для получения качественных тематических ссылок и улучшения видимости в Google и Яндексе.",
      "Правильно подобранные белорусские каталоги помогают повысить доверие поисковых систем и улучшить позиции в локальном поиске.",
    ],
    sections: [
      {
        title: "Зачем размещаться в тематических каталогах",
        blocks: [
          {
            title: "1. Укрепление локального присутствия и доверия",
            body: "Когда пользователи ищут исполнителя в своём городе или по конкретной услуге, они часто обращаются к каталогам с компаниями одной тематики. На таких площадках аудитория уже настроена на выбор, поэтому базовое доверие к размещённым компаниям выше, чем к случайным объявлениям в соцсетях.",
          },
          {
            title: "2. SEO-эффект и усиление NAP-сигналов",
            body: "Каталоги дают поисковикам дополнительные сигналы:",
          },
          {
            body: [
              "подтверждение существования компании в конкретном регионе;",
              "совпадающие NAP‑данные (название, адрес, телефон);",
              "дополнительные тематические и локальные ссылки;",
              "укрепление авторитетности домена.",
            ],
          },
          {
            body: "Google и Яндекс используют такие источники, чтобы проверять корректность информации о бизнесе.",
          },
          {
            title: "3. Прямой поток клиентов",
            body: "Для ряда ниш каталоги остаются основным каналом поиска исполнителей: ремонт техники, автосервисы, медицина, красота, юридические услуги, B2B‑сегменты. Пользователям удобно сравнивать предложения в одном интерфейсе и сразу переходить к звонку или заявке.",
          },
          {
            title: "4. Упоминание бренда и цифровой след",
            body: "Даже если конкретный каталог даёт немного трафика, он расширяет выдачу по брендовому запросу и создаёт ощущение масштаба: бренд «встречается» на разных площадках, а не только на собственном сайте.",
          },
          {
            title: "5. Повышение конверсии за счёт повторных контактов",
            body: "Пользователь может увидеть ваш сайт в поиске, а позже - ту же компанию в каталоге. Эффект повторного контакта усиливает доверие и повышает вероятность обращения.",
          },
        ],
      },
      {
        title: "Чего ожидать от размещения в тематических каталогах",
        blocks: [
          {
            title: "1. Не мгновенный, но накопительный результат",
            body: "Каталоги - это долгосрочный инструмент. Обычно через 1–3 месяца после размещения начинает расти количество переходов на сайт, звонков, видимость в поиске и узнаваемость бренда. Эффект усиливается по мере расширения списка площадок.",
          },
          {
            title: "2. Накопление отзывов",
            body: "Многие каталоги позволяют оставлять отзывы. Они ранжируются в поиске, формируют репутационный фон и влияют на решения клиентов. Даже несколько качественных отзывов могут заметно увеличить конверсию.",
          },
          {
            title: "3. Укрепление локального SEO",
            body: "Совпадающие данные о компании на десятках ресурсов помогают сайту выше ранжироваться по региональным запросам, снижая риск фильтров и усиливая шансы на попадание в локальные блоки.",
          },
          {
            title: "4. Прирост ссылок и упоминаний",
            body: "Даже если ссылки «nofollow», они всё равно помогают роботам находить сайт, формируют тематический контекст и повышают доверие при разумном количестве.",
          },
        ],
      },
      {
        title: "Как правильно работать с тематическими каталогами",
        blocks: [
          {
            title: "Шаг 1. Определите релевантные каталоги",
            body: "Выберите площадки, которые:",
          },
          {
            body: [
              "ориентированы на вашу тематику или отрасль;",
              "популярны в вашем регионе;",
              "имеют живую аудиторию и реальные отзывы;",
              "не выглядят как спам‑сетка с тысячами случайных ссылок.",
            ],
          },
          {
            title: "Шаг 2. Подготовьте единый набор данных о компании",
            body: "Используйте те же NAP‑данные, что и для локальных справочников: название, адрес, телефон, сайт, режим работы, описание услуг, логотип и фото. Это обеспечит консистентность информации.",
          },
          {
            title: "Шаг 3. Оформите профиль максимально полно",
            body: "Заполните все доступные поля: описания, категории, подкатегории, цены (если уместно), способы оплаты, зоны обслуживания. Добавьте фотографии, ссылки на соцсети и сайт. Чем информативнее карточка, тем больше доверия у пользователей и алгоритмов.",
          },
          {
            title: "Шаг 4. Следите за отзывами и обновляйте данные",
            body: "Регулярно проверяйте каталоги: отвечайте на отзывы, корректируйте режим работы, адрес или контакты при изменениях. Актуальность информации - важная часть доверия.",
          },
          {
            title: "Шаг 5. Распределяйте размещения во времени",
            body: "Не обязательно публиковаться во всех каталогах в один день. Гораздо естественнее и безопаснее распределить размещения на 1–2 месяца, постепенно расширяя присутствие бренда.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Размещение в тематических каталогах - простой и недорогой способ усилить локальное присутствие, улучшить SEO, повысить доверие и получить дополнительных клиентов. При системном подходе и работе с надёжными площадками этот канал даёт стабильный, накапливающийся эффект и становится важной частью стратегии продвижения локального бизнеса.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Listings in niche directories: a simple way to increase visibility and trust",
    lead: [
      "Getting listed in niche directories can be an effective local SEO tactic for earning relevant citations and industry context.",
      "When done properly, it can support visibility in Google, strengthen trust signals, and improve local discovery.",
    ],
    sections: [
      {
        title: "Why niche directory listings work",
        blocks: [
          {
            title: "1. Local presence and trust",
            body: "When users search for a provider in their city or for a specific service, they often use niche directories. People browsing these platforms already have high intent, so baseline trust is often higher than random social posts.",
          },
          {
            title: "2. SEO impact and NAP consistency",
            body: "Directories provide extra signals:",
          },
          {
            body: [
              "validation that the business exists in a specific location;",
              "consistent NAP (name, address, phone);",
              "additional niche/local citations and links;",
              "stronger domain/entity authority.",
            ],
          },
          {
            body: "Search engines use these sources to cross-check business information.",
          },
          {
            title: "3. Direct customers from directories",
            body: "In some industries directories remain a primary discovery channel: repairs, auto services, healthcare, beauty, legal services, and many B2B categories.",
          },
          {
            title: "4. Brand footprint",
            body: "Even if a directory sends little traffic, it expands branded SERPs and makes the brand look more established.",
          },
          {
            title: "5. Higher conversion through repeated exposure",
            body: "A user might see you in search, then later see the same business inside a directory. Repeated exposure increases trust and the chance of contact.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            title: "1. Not instant, but cumulative",
            body: "Directories are a long-term play. In 1–3 months you may see growth in referral visits, calls, visibility, and brand awareness-especially as you expand the list of quality platforms.",
          },
          {
            title: "2. Review accumulation",
            body: "Many directories allow reviews. They can rank in search and influence decision-making. Even a few strong reviews can noticeably improve conversion.",
          },
          {
            title: "3. Stronger local SEO",
            body: "Consistent business data across many platforms supports local ranking stability and helps you appear in local modules.",
          },
          {
            title: "4. More citations and mentions",
            body: "Even nofollow links can help discovery, reinforce topical context, and contribute to trust when used in moderation.",
          },
        ],
      },
      {
        title: "How to work with niche directories",
        blocks: [
          {
            title: "Step 1. Pick relevant directories",
            body: "Choose platforms that:",
          },
          {
            body: [
              "focus on your niche/industry;",
              "are popular in your region;",
              "have real users and real reviews;",
              "don’t look like spam link networks.",
            ],
          },
          {
            title: "Step 2. Prepare one consistent business data set",
            body: "Use the same NAP data you use for other listings: name, address, phone, website, hours, service description, logo, photos.",
          },
          {
            title: "Step 3. Complete the profile fully",
            body: "Fill out all fields: descriptions, categories, subcategories, pricing (if relevant), payment methods, and service areas. Add photos and links.",
          },
          {
            title: "Step 4. Monitor reviews and update details",
            body: "Check listings regularly, reply to reviews, and update hours/address/contacts when they change.",
          },
          {
            title: "Step 5. Spread submissions over time",
            body: "It’s safer and more natural to spread submissions over 1–2 months rather than creating all listings on the same day.",
          },
        ],
      },
      {
        title: "Conclusion",
        blocks: [
          {
            body: "Niche directory listings are a simple, low-cost way to strengthen local presence, improve SEO, increase trust, and earn incremental customers. With a consistent approach and quality platforms, this channel delivers stable, compounding benefits.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "רישום במדריכים נישתיים: כלי פשוט להגדלת נראות ואמון",
    lead: [
      "רישום במדריכים נישתיים יכול להיות טקטיקה יעילה ב‑SEO מקומי להשגת אזכורים רלוונטיים וחיזוק הקשר הענפי.",
      "בביצוע נכון זה תומך בנראות ב‑Google, מחזק אמון ומסייע בגילוי מקומי.",
    ],
    sections: [
      {
        title: "למה רישום במדריכים נישתיים עובד",
        blocks: [
          {
            title: "1. נוכחות מקומית ואמון",
            body: "כשאנשים מחפשים ספק בעיר או שירות מסוים, הם פונים לעיתים למדריכים ענפיים. הקהל שם בדרך כלל בעל כוונה גבוהה, ולכן האמון הבסיסי יכול להיות גבוה יותר.",
          },
          {
            title: "2. השפעה על SEO ועקביות NAP",
            body: "מדריכים מספקים סיגנלים נוספים:",
          },
          {
            body: [
              "אימות קיום העסק באזור מסוים;",
              "NAP עקבי (שם, כתובת, טלפון);",
              "אזכורים וקישורים נישתיים/מקומיים;",
              "חיזוק סמכות הישות/דומיין.",
            ],
          },
          {
            body: "מנועי חיפוש משתמשים במקורות כאלה כדי להצליב מידע על העסק.",
          },
          {
            title: "3. לקוחות ישירות מהמדריכים",
            body: "בענפים מסוימים המדריכים נשארים ערוץ גילוי מרכזי: תיקונים, רכב, בריאות, יופי, משפטים ועוד.",
          },
          {
            title: "4. טביעת רגל מותגית",
            body: "גם אם המדריך לא מביא הרבה טראפיק, הוא מרחיב נראות בחיפושי מותג ויוצר תחושת ‘נוכחות’ רחבה יותר.",
          },
          {
            title: "5. יותר המרות דרך חשיפה חוזרת",
            body: "משתמש יכול לראות אתכם בחיפוש ואז שוב במדריך. חשיפה חוזרת מחזקת אמון ומעלה סיכוי לפנייה.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            title: "1. תוצאה מצטברת",
            body: "מדריכים הם משחק לטווח ארוך. אחרי 1–3 חודשים אפשר לראות יותר תנועה, פניות, נראות ומודעות-במיוחד כשהנוכחות מתרחבת על פלטפורמות איכותיות.",
          },
          {
            title: "2. צבירת ביקורות",
            body: "מדריכים רבים מאפשרים ביקורות. הן משפיעות על החלטות ולעיתים גם מדורגות בחיפוש.",
          },
          {
            title: "3. חיזוק SEO מקומי",
            body: "נתונים עקביים על פני פלטפורמות רבות עוזרים לייצב דירוגים מקומיים ולהגדיל סיכוי להופיע בבלוקים מקומיים.",
          },
          {
            title: "4. יותר אזכורים",
            body: "גם קישורי nofollow יכולים לעזור בגילוי, לחזק הקשר נושאי ולהוסיף אמון כשעושים זאת במידה.",
          },
        ],
      },
      {
        title: "איך לעבוד נכון עם מדריכים נישתיים",
        blocks: [
          {
            title: "שלב 1. לבחור מדריכים רלוונטיים",
            body: "לבחור פלטפורמות ש:",
          },
          {
            body: [
              "ממוקדות בנישה/ענף;",
              "פופולריות באזור שלכם;",
              "כוללות משתמשים אמיתיים וביקורות אמיתיות;",
              "לא נראות כמו רשת ספאם.",
            ],
          },
          {
            title: "שלב 2. להכין סט נתונים אחיד",
            body: "להשתמש באותם נתוני NAP: שם, כתובת, טלפון, אתר, שעות, תיאור שירותים, לוגו ותמונות.",
          },
          {
            title: "שלב 3. למלא פרופיל מלא",
            body: "למלא שדות: תיאור, קטגוריות, תתי‑קטגוריות, מחירים (אם רלוונטי), אמצעי תשלום, אזורי שירות. להוסיף תמונות וקישורים.",
          },
          {
            title: "שלב 4. לעקוב אחרי ביקורות ולעדכן",
            body: "לבדוק באופן קבוע, לענות על ביקורות ולעדכן פרטים כשמשתנים.",
          },
          {
            title: "שלב 5. לפרוס את ההרשמות",
            body: "עדיף לפרוס את ההרשמות על פני 1–2 חודשים ולא לבצע הכול ביום אחד.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "רישום במדריכים נישתיים הוא דרך פשוטה וזולה לחזק נוכחות מקומית, לשפר SEO, להעלות אמון ולהביא לקוחות נוספים. עם עקביות ופלטפורמות איכותיות-האפקט מצטבר ויציב.",
          },
        ],
      },
    ],
  },
};

export default content;
