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
      "Продвижение в Google Картах (Google Maps SEO): зачем это нужно, чего ожидать и как это делать",
    lead: [
      "SEO-оптимизация Google Maps для белорусского бизнеса - это комплекс мер по улучшению видимости локального бизнеса в Google Картах и локальном поиске в Минске, Бресте, Гомеле и других городах Беларуси. Правильно проведённая оптимизация помогает получать больше показов, кликов и обращений от белорусов, которые ищут услуги рядом с собой.",
    ],
    sections: [
      {
        title: "Зачем бизнесу нужно продвижение в Google Картах",
        blocks: [
          {
            title: "1. Клиенты всё чаще ищут услуги через карты",
            body: "Более половины локальных запросов заканчиваются визитом в точку, часто в тот же день. В картах пользователь сразу видит рейтинг, отзывы, фото, режим работы, адрес и маршрут, а также кнопку «Позвонить». Отсутствие бизнеса в Google Maps означает потерю значительной части локального спроса.",
          },
          {
            title: "2. Приоритет локальной выдачи (Local Pack)",
            body: "По запросам «рядом» и «возле меня» Google показывает блок карты с тремя компаниями (Local Pack). Эти компании забирают до 60% кликов. Попасть туда зачастую выгоднее, чем бороться за обычные позиции в органике.",
          },
          {
            title: "3. Увеличение звонков и офлайн‑визитов",
            body: "Оптимизация в картах приводит к росту звонков, маршрутов и посещений. Пользователь видит отзывы и фотографии заранее, поэтому приходит более «тёплым» и готовым к покупке.",
          },
          {
            title: "4. Относительно простая конкуренция",
            body: "В отличие от классического SEO, где конкуренты часто сильны годами, в картах можно обогнать многих соперников за счёт грамотной настройки карточки, отзывов и локального сайта.",
          },
        ],
      },
      {
        title: "Чего ожидать от Google Maps SEO",
        blocks: [
          {
            body: [
              "Рост позиций в карте и попадание в Local Pack в горизонте 2–8 недель.",
              "Увеличение количества звонков и построений маршрутов на 20–70% и более.",
              "Больше отзывов и улучшение рейтинга при системной работе с репутацией.",
              "Рост органического трафика на сайт через локальные запросы.",
              "Постоянный поток «горячих» клиентов, ищущих услуги прямо сейчас.",
            ],
          },
        ],
      },
      {
        title: "Пошаговое руководство по Google Maps SEO",
        blocks: [
          {
            title:
              "1. Создайте и подтвердите профиль в Google Business Profile",
            body: "Заполните карточку бизнеса в GBP: категории, точный адрес, телефоны, сайт, график работы и описание. Подтвердите владение (почта, телефон, видео - в зависимости от региона). Без подтверждения карточка почти не имеет шансов на серьёзное ранжирование.",
          },
          {
            title: "2. Оптимизируйте NAP‑данные (Name, Address, Phone)",
            body: "Название, адрес и телефон должны быть единообразны на сайте, в картах и каталогах. Избегайте лишних сокращений и разночтений - это снижает доверие алгоритмов и разбивает сигналы о бизнесе.",
          },
          {
            title: "3. Выберите корректные категории",
            body: "Основная категория должна максимально точно отражать вашу услугу («салон маникюра», «ремонт телефонов», «стоматологическая клиника» и т.д.). Дополнительные категории дополняют, но не должны противоречить основной.",
          },
          {
            title: "4. Заполните описание и услуги",
            body: "Напишите живое описание с упоминанием основных услуг и географии, без переспама. Добавьте карточки услуг/товаров с ценами, описаниями и ссылками на сайт, если это доступно.",
          },
        ],
      },
      {
        title: "Отзывы и рейтинг в Google Maps",
        blocks: [
          {
            body: [
              "Запустите системный сбор отзывов у реальных клиентов (SMS, email, QR‑коды, ссылки в мессенджерах).",
              "Отвечайте на отзывы: благодарите за позитив и грамотно обрабатывайте негатив.",
              "Следите за средним рейтингом и стремитесь к диапазону 4.5–4.9.",
              "Не покупайте отзывы и не занимайтесь накруткой - это риск санкций и потери карточки.",
            ],
          },
        ],
      },
      {
        title: "Связка сайта и карточки в Google Maps",
        blocks: [
          {
            body: [
              "Обеспечьте согласованность NAP‑данных между сайтом и GBP.",
              "Создайте локальные страницы («услуга + город/район») и свяжите их с карточкой.",
              "Следите за скоростью и удобством мобильной версии сайта - это влияет на локальное SEO.",
              "Используйте UTM‑метки в ссылке с карточки на сайт для анализа трафика.",
            ],
          },
        ],
      },
      {
        title: "Распространённые ошибки в Google Maps SEO",
        blocks: [
          {
            body: [
              "Неполные или некорректные данные в карточке.",
              "Отсутствие категорий или выбор слишком общих категорий.",
              "Игнорирование отзывов и отсутствие работы с репутацией.",
              "Разночтения в адресах и телефонах на сайте и в справочниках.",
              "Отсутствие локальных страниц на сайте под города/районы.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по Google Maps SEO",
        blocks: [
          {
            title: "Сколько времени занимает продвижение?",
            body: "При активной работе с карточкой и отзывами первые результаты видны через 2–8 недель, устойчивый эффект - за 2–6 месяцев.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleGoogleMapsSeoChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "google-maps-seo-checklist",
          title: "",
          description: "",
          items: [
            "Создайте и подтвердите карточку в Google Business Profile.",
            "Приведите NAP‑данные к единому формату.",
            "Выберите точные категории, заполните описание, услуги и фото.",
            "Запустите сбор и обработку отзывов.",
            "Свяжите сайт и карточку через локальные страницы и UTM‑метки.",
            "Отслеживайте звонки, маршруты, позиции и корректируйте стратегию.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title: "Google Maps SEO: why it matters, what to expect, and how to do it",
    lead: [
      "Google Maps SEO is a set of actions that improves a local business’s visibility on Google Maps and in the local pack. Done correctly, it drives more calls, direction requests, and high-intent traffic from people searching nearby.",
    ],
    sections: [
      {
        title: "Why Google Maps SEO matters",
        blocks: [
          {
            title: "1. Customers search directly on Maps",
            body: "A large share of local searches ends with a visit-often the same day. On Maps, users see your rating, reviews, photos, hours, and a Call button instantly. If you’re not visible there, you miss local demand.",
          },
          {
            title: "2. The Local Pack is prime real estate",
            body: "For ‘near me’ searches, Google often shows the map pack with three businesses. Those listings capture a major share of clicks.",
          },
          {
            title: "3. More calls and visits",
            body: "Improved visibility on Maps increases calls, direction requests, and walk-ins. Users come in warmer because they’ve already seen reviews and photos.",
          },
          {
            title: "4. More achievable than classic SEO",
            body: "Compared to traditional SEO, map rankings can move faster when you improve profile quality, reviews, and local website signals.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Improved map rankings and Local Pack visibility within ~2–8 weeks.",
              "20–70%+ growth in calls and direction requests.",
              "More reviews and stronger rating with consistent reputation work.",
              "More website traffic from local searches.",
              "A steady flow of high-intent customers.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step Google Maps SEO",
        blocks: [
          {
            title: "1. Create and verify your Google Business Profile",
            body: "Complete your profile: categories, accurate address, phone, website, hours, and description. Verify ownership (phone, email, video, etc.). Unverified listings rarely rank well.",
          },
          {
            title: "2. Keep NAP consistent",
            body: "Your name, address, and phone should match everywhere: website, profile, and citations. Inconsistencies weaken trust.",
          },
          {
            title: "3. Pick the right categories",
            body: "Choose the most precise primary category and relevant secondary ones.",
          },
          {
            title: "4. Fill description and services",
            body: "Write a natural description (no keyword stuffing) and add services/products with clear names and pricing where possible.",
          },
        ],
      },
      {
        title: "Reviews and rating",
        blocks: [
          {
            body: [
              "Collect reviews systematically (QR codes, SMS, email).",
              "Reply to every review-positive and negative.",
              "Aim for a strong average rating (often 4.5–4.9 depending on category).",
              "Avoid fake reviews: penalties can reduce visibility.",
            ],
          },
        ],
      },
      {
        title: "Website + profile alignment",
        blocks: [
          {
            body: [
              "Keep NAP consistent between the website and the profile.",
              "Create local landing pages (service + city/neighborhood) and connect them to the listing.",
              "Make the site fast and mobile-friendly.",
              "Use UTM parameters on the website link to track real performance.",
            ],
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Incomplete or inaccurate listing information.",
              "Wrong or too broad categories.",
              "Ignoring reviews and reputation.",
              "NAP inconsistencies across sources.",
              "No local landing pages on the website.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "How long does it take?",
            body: "With active work on the profile and reviews, early results often appear in 2–8 weeks. More stable growth typically takes 2–6 months.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleGoogleMapsSeoChecklist",
      title: "Checklist",
      steps: [
        {
          id: "google-maps-seo-checklist",
          title: "",
          description: "",
          items: [
            "Create and verify your Google Business Profile.",
            "Make your NAP consistent everywhere.",
            "Choose accurate categories and complete description, services, and photos.",
            "Start systematic review collection and management.",
            "Connect your website and listing with local pages and UTM tracking.",
            "Track calls, directions, rankings, and iterate.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "קידום ב‑Google Maps (Google Maps SEO): למה זה חשוב ואיך עושים את זה",
    lead: [
      "Google Maps SEO הוא סט פעולות שמטרתן לשפר נראות של עסק מקומי ב‑Google Maps ובתוצאות המקומיות. כשעושים את זה נכון, זה מגדיל שיחות, בקשות ניווט ותנועה חמה של אנשים שמחפשים ‘קרוב אליי’.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "1. לקוחות מחפשים דרך מפות",
            body: "חלק גדול מהחיפושים המקומיים מסתיים בביקור-לעיתים באותו יום. במפות רואים דירוג, ביקורות, תמונות ושעות ומתקשרים בלחיצה. בלי נוכחות חזקה-מאבדים ביקוש מקומי.",
          },
          {
            title: "2. Local Pack הוא מקום פריים",
            body: "בחיפושי ‘קרוב אליי’ Google מציגה לעיתים קרובות בלוק מפה עם שלושה עסקים בולטים. הם מקבלים חלק גדול מהקליקים.",
          },
          {
            title: "3. יותר שיחות וביקורים",
            body: "נראות גבוהה במפות מגדילה שיחות, ניווטים וביקורים. הלקוחות מגיעים ‘חמים’ יותר כי ראו ביקורות ותמונות מראש.",
          },
          {
            title: "4. לעיתים מהיר יותר מ‑SEO קלאסי",
            body: "בדירוגי מפות אפשר לראות תזוזה מהירה יותר כאשר משפרים איכות כרטיס, ביקורות ואותות אתר מקומיים.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "שיפור דירוגים ונראות ב‑Local Pack תוך 2–8 שבועות.",
              "עלייה של 20–70%+ בשיחות ובבקשות ניווט.",
              "יותר ביקורות ודירוג טוב יותר עם עבודה שיטתית.",
              "יותר תנועה לאתר מחיפושים מקומיים.",
              "זרם יציב של לקוחות בעלי כוונת רכישה גבוהה.",
            ],
          },
        ],
      },
      {
        title: "מדריך צעד‑אחר‑צעד",
        blocks: [
          {
            title: "1. ליצור ולאמת Google Business Profile",
            body: "למלא את הכרטיס: קטגוריות, כתובת, טלפון, אתר, שעות ותיאור. לבצע אימות (טלפון/אימייל/וידאו בהתאם לאפשרויות). כרטיס לא מאומת כמעט לא מדורג.",
          },
          {
            title: "2. לשמור על עקביות NAP",
            body: "שם/כתובת/טלפון צריכים להיות זהים באתר, בכרטיס ובאזכורים. חוסר עקביות מחליש אמון.",
          },
          {
            title: "3. לבחור קטגוריות מדויקות",
            body: "לבחור קטגוריה ראשית מדויקת ולהוסיף משניות רלוונטיות.",
          },
          {
            title: "4. למלא תיאור ושירותים",
            body: "לכתוב תיאור טבעי בלי דחיסת מילות מפתח ולהוסיף שירותים/מוצרים עם שמות ברורים ומחירים כשאפשר.",
          },
        ],
      },
      {
        title: "ביקורות ודירוג",
        blocks: [
          {
            body: [
              "לאסוף ביקורות בצורה שיטתית (QR, SMS, אימייל).",
              "להגיב לכל ביקורת-חיובית ושלילית.",
              "לשאוף לדירוג ממוצע חזק.",
              "להימנע מביקורות מזויפות-זה עלול לפגוע בנראות.",
            ],
          },
        ],
      },
      {
        title: "התאמה בין האתר לכרטיס",
        blocks: [
          {
            body: [
              "NAP עקבי בין האתר לכרטיס.",
              "דפי נחיתה מקומיים (שירות + עיר/שכונה).",
              "אתר מהיר ונוח במובייל.",
              "UTM לקישור מהכרטיס כדי למדוד תוצאות.",
            ],
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: [
              "מידע חסר או לא מדויק בכרטיס.",
              "קטגוריות כלליות מדי או שגויות.",
              "התעלמות מביקורות.",
              "חוסר עקביות NAP.",
              "אין דפי נחיתה מקומיים באתר.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "כמה זמן זה לוקח?",
            body: "עם עבודה עקבית על הכרטיס והביקורות רואים שיפור תוך 2–8 שבועות. צמיחה יציבה יותר בדרך כלל לוקחת 2–6 חודשים.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleGoogleMapsSeoChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "google-maps-seo-checklist",
          title: "",
          description: "",
          items: [
            "ליצור ולאמת Google Business Profile.",
            "לשמור על עקביות NAP בכל מקום.",
            "לבחור קטגוריות מדויקות ולמלא תיאור/שירותים/תמונות.",
            "להתחיל איסוף וניהול ביקורות באופן שיטתי.",
            "לחבר בין האתר לכרטיס עם דפים מקומיים ו‑UTM.",
            "לעקוב אחרי שיחות/ניווטים/דירוגים ולשפר.",
          ],
        },
      ],
    },
  },
};

export default content;
