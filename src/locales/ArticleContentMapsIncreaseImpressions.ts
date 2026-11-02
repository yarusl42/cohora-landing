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
      "Увеличение показов в картографических сервисах: как стать заметнее на карте и получать больше клиентов",
    lead: [
      "Увеличение показов в картах для белорусского бизнеса - это комплекс мер по оптимизации профиля локального бизнеса для повышения видимости в Google Картах, 2ГИС, Apple Maps и других сервисах в Минске, Бресте, Гомеле и других городах Беларуси. Правильно настроенные карточки помогают получать больше показов, кликов и обращений от местных клиентов.",
      "Современные пользователи проводят много времени в навигационных приложениях: ищут компании, строят маршруты, сравнивают варианты поблизости. Для локального бизнеса карты стали полноценной витриной. Если вас плохо видно в Google Картах, 2ГИС, Apple Maps и других сервисах - для части аудитории вы просто не существуете.",
    ],
    sections: [
      {
        title: "Зачем увеличивать показы в картографических сервисах",
        blocks: [
          {
            title: "1. Карты как аналог главной страницы бизнеса",
            body: "Для запросов вроде «салон красоты рядом», «ремонт телефонов», «врач рядом» пользователи чаще открывают не обычный поиск, а карту. Если компания не отображается в списке рядом или её сложно найти по нужным категориям, идеальный сайт и активные соцсети не спасут - вы просто не участвуете в выборе.",
          },
          {
            title: "2. Самый «тёплый» трафик",
            body: "Показ на карте - это момент, когда человек уже готов к действию. Он ищет, где поесть прямо сейчас, куда отнести технику в ремонт, в какую клинику записаться. Это не холодные просмотры, а пользователи с максимально конкретным и срочным запросом.",
          },
          {
            title: "3. Больше показов → больше действий",
            body: "Чем чаще ваша карточка появляется по релевантным запросам, тем больше будет кликов по карточке, переходов на сайт, звонков, маршрутов и реальных визитов. Эти действия можно и нужно отслеживать в статистике карт и веб‑аналитике.",
          },
          {
            title: "4. Влияние на SEO в целом",
            body: "Поисковые алгоритмы учитывают поведение пользователей в картах. Если вашу точку активно просматривают, строят маршруты, звонят и переходят на сайт, это усиливает «авторитет» бизнеса в локальной выдаче и позитивно влияет на позиции.",
          },
        ],
      },
      {
        title: "Чего ожидать после роста показов в картах",
        blocks: [
          {
            title: "Рост посещаемости карточки",
            body: "Когда карточка становится заметнее, растёт количество просмотров, кликов по фото и описанию, время изучения информации. Пользователи чаще сравнивают вас с конкурентами и переходят к действиям.",
          },
          {
            title: "Больше звонков и переходов на сайт",
            body: "Типичная динамика после оптимизации - рост звонков на 20–80% за счёт того, что ваша точка становится более заметной в нужных запросах. Растёт и количество переходов на сайт.",
          },
          {
            title: "Рост количества маршрутов",
            body: "Кнопка «Как добраться» - один из ключевых индикаторов. Чем чаще строят маршрут, тем больше реальных визитов.",
          },
          {
            title: "Стабильный поток из локального поиска",
            body: "В отличие от платной рекламы, правильно настроенные карточки дают долгосрочный эффект. Оптимизация работает месяцами и годами, поддерживая стабильный поток клиентов без постоянных расходов на клики.",
          },
        ],
      },
      {
        title:
          "Как увеличить количество показов в картографических сервисах: пошаговая стратегия",
        blocks: [
          {
            title: "1. Оптимизируйте основную информацию (NAP)",
            body: "NAP (Name, Address, Phone) должен быть точным и единообразным во всех источниках: на сайте, в карточках Google, 2ГИС, Apple Maps (через Apple Business Connect) и в каталогах/соцсетях. Проверьте название (без спама), адрес (единый формат), телефон (актуальный), часы работы.",
          },
          {
            title: "2. Настройте категории и подкатегории",
            body: "Категории определяют, по каким запросам вас будут показывать. Выберите точную основную категорию и релевантные дополнительные. Неправильно выбранная категория может сократить количество показов в разы.",
          },
          {
            title: "3. Сделайте полезное и SEO‑ориентированное описание",
            body: "В нескольких абзацах объясните: кто вы, где работаете, какие услуги оказываете и чем отличаетесь. Используйте ключевые фразы разумно - без переспама.",
          },
          {
            title: "4. Работайте с фото и визуальным контентом",
            body: "Добавляйте и обновляйте фото фасада и входа, интерьера, команды, примеров работ/блюд/товаров. Живые фото повышают взаимодействия и косвенно влияют на показы.",
          },
          {
            title: "5. Развивайте отзывы и рейтинг",
            body: "Регулярный приток честных отзывов и адекватный рейтинг - один из сильнейших факторов. Просите клиентов делиться впечатлениями, отвечайте на отзывы и аккуратно отрабатывайте негатив.",
          },
          {
            title: "6. Синхронизируйте данные между сервисами",
            body: "Следите, чтобы данные в Google Maps, 2ГИС, Apple Maps и на сайте совпадали. Расхождения снижают доверие алгоритмов и могут запутать клиентов.",
          },
        ],
      },
      {
        title: "Итоги",
        blocks: [
          {
            body: "Увеличение показов в картографических сервисах - это не «разовая настройка», а системная работа над карточками, репутацией и данными. При грамотном подходе карты становятся одним из самых стабильных и предсказуемых источников локальных клиентов.",
          },
          {
            body: "Чем раньше вы приведёте в порядок NAP‑данные, категории, описания, фото и отзывы, тем быстрее карточка начнёт появляться в большем количестве запросов, генерируя звонки, маршруты и реальные визиты.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Increase visibility on map platforms: how to get more impressions and more customers",
    lead: [
      "Increasing map impressions is a set of optimizations that make your local business more visible on platforms like Google Maps (and often Apple Maps, Bing Places, and major local directories). A well-optimized listing drives more impressions, actions, and real visits.",
      "People spend a lot of time in navigation apps: searching, comparing nearby options, and getting directions. For local businesses, maps are a storefront. If you’re hard to find on Maps, for part of your audience you effectively don’t exist.",
    ],
    sections: [
      {
        title: "Why increasing map impressions matters",
        blocks: [
          {
            title: "1. Maps are your new homepage",
            body: "For queries like “hair salon near me” or “phone repair”, users often open Maps instead of browsing websites. If you don’t show up nearby or in the right categories, a great website won’t save you-you’re not in the shortlist.",
          },
          {
            title: "2. The warmest traffic",
            body: "A map impression happens when someone is ready to act: eat now, book an appointment, fix something today. That’s high-intent demand.",
          },
          {
            title: "3. More impressions → more actions",
            body: "More visibility leads to more listing clicks, calls, website visits, direction requests, and real walk-ins. Track these actions in profile insights and analytics.",
          },
          {
            title: "4. It supports local SEO",
            body: "User behavior on Maps (calls, directions, clicks) can be a strong local signal. When people interact with your listing, it often correlates with stronger local visibility.",
          },
        ],
      },
      {
        title: "What you can expect",
        blocks: [
          {
            title: "More listing views",
            body: "As visibility improves, you’ll see more profile views, more photo views, and more time spent exploring your listing.",
          },
          {
            title: "More calls and website clicks",
            body: "A common result of listing optimization is a measurable lift in calls and site clicks, because you appear for more relevant searches.",
          },
          {
            title: "More direction requests",
            body: "Direction requests are a key indicator for offline businesses. More routes usually means more visits.",
          },
          {
            title: "A steady stream of local demand",
            body: "Unlike paid ads, a well-maintained listing can produce long-term results for months.",
          },
        ],
      },
      {
        title: "Step-by-step strategy to increase impressions",
        blocks: [
          {
            title: "1. Fix and standardize NAP",
            body: "Make sure your Name, Address, and Phone are accurate and consistent across your website, Google Business Profile, Apple Maps, and major directories. Consistency builds trust.",
          },
          {
            title: "2. Choose accurate categories",
            body: "Categories control which searches you appear for. Pick a precise primary category and relevant secondary ones.",
          },
          {
            title: "3. Write a useful description",
            body: "Explain who you are, where you serve, what you offer, and what makes you different. Use keywords naturally.",
          },
          {
            title: "4. Improve photos",
            body: "Upload and refresh real photos: storefront/entrance, interior, team, and examples of work. Strong visuals increase engagement.",
          },
          {
            title: "5. Build reviews and rating",
            body: "A steady flow of honest reviews is one of the strongest map ranking signals. Ask customers, reply to reviews, and handle negative feedback professionally.",
          },
          {
            title: "6. Keep data aligned across platforms",
            body: "Make sure your hours, phone, and address match across Google, Apple, and other sources. Mismatches reduce trust and can confuse customers.",
          },
        ],
      },
      {
        title: "Takeaways",
        blocks: [
          {
            body: "Increasing map impressions isn’t a one-time action-it’s a system: listing quality, reputation, and consistent business data. Done well, maps become one of the most predictable sources of local customers.",
          },
          {
            body: "The earlier you improve NAP, categories, descriptions, photos, and reviews, the faster you’ll start showing up for more searches-driving calls, directions, and real visits.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "איך להגדיל חשיפות במפות: להיות יותר בולטים ולקבל יותר לקוחות",
    lead: [
      "הגדלת חשיפות במפות היא סט פעולות שמטרתן לשפר נראות של עסק מקומי בפלטפורמות כמו Google Maps וגם Waze ו‑Apple Maps. כרטיס שמנוהל היטב מייצר יותר חשיפות, יותר פעולות ויותר ביקורים בפועל.",
      "אנשים מבלים הרבה זמן באפליקציות ניווט: מחפשים, משווים אפשרויות קרובות ובונים מסלולים. לעסק מקומי מפות הן חלון ראווה. אם קשה למצוא אתכם במפות-חלק מהקהל פשוט לא יראה אתכם.",
    ],
    sections: [
      {
        title: "למה חשוב להגדיל חשיפות במפות",
        blocks: [
          {
            title: "1. מפות הן דף הבית החדש",
            body: "בחיפושים כמו “מספרה קרוב אליי” או “תיקון טלפונים”, אנשים פותחים מפות במקום לגלוש בין אתרים. אם אתם לא מופיעים קרוב ובקטגוריה הנכונה-אתם לא ברשימה.",
          },
          {
            title: "2. תנועה הכי חמה",
            body: "חשיפה במפה מגיעה כשמישהו מוכן לפעולה: לאכול עכשיו, להזמין תור, לתקן היום. זו כוונת רכישה גבוהה.",
          },
          {
            title: "3. יותר חשיפות → יותר פעולות",
            body: "יותר נראות מייצרת יותר קליקים בכרטיס, שיחות, כניסות לאתר, ניווטים וביקורים. מומלץ לעקוב אחרי זה בסטטיסטיקות של הכרטיס.",
          },
          {
            title: "4. השפעה על SEO מקומי",
            body: "התנהגות משתמשים במפות (שיחות/ניווטים/קליקים) היא סיגנל מקומי חשוב. כשאנשים מתקשרים ובונים מסלול, זה לרוב מתקשר לנראות חזקה יותר.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            title: "יותר צפיות בכרטיס",
            body: "כשהנראות עולה, בדרך כלל רואים יותר צפיות בכרטיס, יותר צפיות בתמונות ויותר זמן התעמקות.",
          },
          {
            title: "יותר שיחות וקליקים לאתר",
            body: "אופטימיזציה נכונה יכולה להביא עלייה ניכרת בשיחות ובכניסות לאתר כי מופיעים יותר בחיפושים רלוונטיים.",
          },
          {
            title: "יותר בקשות ניווט",
            body: "בקשות ניווט הן מדד חשוב לעסקים פיזיים. יותר מסלולים = יותר ביקורים.",
          },
          {
            title: "זרם יציב של ביקוש מקומי",
            body: "בניגוד לפרסום ממומן, כרטיס מתוחזק יכול לתת תוצאות לטווח ארוך.",
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד להגדלת חשיפות",
        blocks: [
          {
            title: "1. עקביות NAP",
            body: "שם/כתובת/טלפון חייבים להיות מדויקים וזהים באתר, בכרטיס Google, ב‑Apple Maps ובמקורות מרכזיים. עקביות בונה אמון.",
          },
          {
            title: "2. קטגוריות מדויקות",
            body: "הקטגוריות קובעות באילו חיפושים תופיעו. בחרו קטגוריה ראשית מדויקת ומשניות רלוונטיות.",
          },
          {
            title: "3. תיאור שימושי",
            body: "להסביר מי אתם, איפה אתם עובדים, מה אתם מציעים ומה הבידול שלכם. להשתמש במילות מפתח באופן טבעי.",
          },
          {
            title: "4. תמונות",
            body: "להעלות ולרענן תמונות אמיתיות: חזית/כניסה, פנים, צוות ודוגמאות עבודה. ויזואל חזק מגדיל מעורבות.",
          },
          {
            title: "5. ביקורות ודירוג",
            body: "זרם קבוע של ביקורות אמיתיות הוא אחד הסיגנלים החזקים. לבקש ביקורות, להגיב, ולטפל בשלילי בצורה מקצועית.",
          },
          {
            title: "6. התאמה בין פלטפורמות",
            body: "לוודא ששעות/טלפון/כתובת זהים בכל מקום. אי‑התאמות פוגעות באמון ומבלבלות לקוחות.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "הגדלת חשיפות במפות היא לא פעולה חד‑פעמית אלא מערכת: איכות כרטיס, מוניטין ועקביות נתונים. כשעושים את זה נכון, מפות הופכות לאחד המקורות היציבים ביותר ללקוחות מקומיים.",
          },
          {
            body: "ככל שמקדימים לסדר NAP, קטגוריות, תיאורים, תמונות וביקורות-כך מתחילים להופיע ביותר חיפושים ולהגדיל שיחות, ניווטים וביקורים.",
          },
        ],
      },
    ],
  },
};

export default content;
