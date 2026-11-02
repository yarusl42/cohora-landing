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
      "Локальное SEO для автосервисов: зачем это нужно, чего ожидать и как это делать",
    lead: [
      "Автосервисы, СТО, шиномонтажи и мастерские по ремонту автомобилей зависят от локальных клиентов. Водители ищут ближайший сервис «здесь и сейчас» - через карты и локальные запросы.",
      "Локальное SEO помогает вашему автосервису попадать в топ выдачи и в карты, когда у клиента случилась проблема и нужно быстро принять решение.",
    ],
    sections: [
      {
        title: "Зачем автосервису нужно локальное SEO",
        blocks: [
          {
            title: "1. Водители ищут по геолокации",
            body: "Большая часть запросов строится вокруг «рядом» и «возле меня». Поисковые системы показывают ближайшие сервисы с хорошими отзывами, актуальной информацией и понятной карточкой. Без локального SEO ваш сервис просто не окажется в этой выдаче.",
          },
          {
            title: "2. Google и Яндекс усиливают локальное ранжирование",
            body: "Алгоритмы учитывают точность адреса, категории, рейтинг, отзывы, NAP‑данные и локальные ссылки. В конкурентной нише СТО это становится критическим фактором.",
          },
          {
            title: "3. Рост доверия и заказов",
            body: "Оптимизированная карточка с отзывами, фото мастерской, прозрачным описанием услуг и цен повышает доверие и конверсию в звонок или запись.",
          },
        ],
      },
      {
        title: "Чего ожидать от локального SEO для автосервиса",
        blocks: [
          {
            body: [
              "Рост позиций по запросам вроде «автосервис Партизанский район», «шиномонтаж рядом», «замена тормозов Минск».",
              "Лучшее присутствие в Google Maps и Яндекс.Картах (локальная тройка, подборки «лучшие рядом»).",
              "Увеличение числа звонков и заявок за счёт видимости в момент потребности.",
              "Усиление репутации и рейтинга за счёт отзывов.",
              "Снижение зависимости от платной рекламы.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая стратегия локального SEO для автосервиса",
        blocks: [
          {
            title: "Шаг 1. Оптимизация сайта автосервиса",
            body: "Сайт должен быть быстрым, адаптивным и понятным с телефона. Важно сделать отдельные страницы для ключевых услуг: замена масла, диагностика, ремонт двигателя, ходовой, шиномонтаж, кондиционер, тормоза и т.д.",
          },
          {
            title: "Шаг 2. Работа с локальными запросами",
            body: "Тексты и мета‑теги должны учитывать географию: район, город, ориентиры. Например, для автосервиса в Минске полезно упоминать районы (Центральный, Советский, Партизанский), станции метро и крупные объекты. Это помогает ранжироваться по запросам «услуга + район/город».",
          },
          {
            title: "Шаг 3. Настройка карточек в картах",
            body: "Для Google Maps и Яндекс.Карт важно заполнить все поля: точный адрес, график, контакты, перечень услуг, фото, категории, ссылку на сайт, способы оплаты. Регулярно обновляйте данные и публикуйте актуальные фото.",
          },
        ],
      },
      {
        title: "Отзывы и репутация автосервиса",
        blocks: [
          {
            body: [
              "Запрашивайте отзывы у реальных клиентов после обслуживания.",
              "Работайте с негативом: отвечайте, предлагайте решения, переносите диалог в личные каналы.",
              "Показывайте фото до/после, реальные кейсы и результаты ремонтов.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для автосервисов",
        blocks: [
          {
            title: "Когда ждать результат?",
            body: "Обычно первые сдвиги по локальной выдаче и картам видны в течение 4–8 недель после начала работы, устойчивый рост - в горизонте 3–6 месяцев.",
          },
          {
            title: "Чек‑лист",
            body: [
              "Сделайте сайт автосервиса быстрым и удобным для мобильных.",
              "Создайте отдельные страницы под ключевые услуги и оптимизируйте их под локальные запросы.",
              "Заполните и регулярно обновляйте карточки в Google Maps и Яндекс.Картах.",
              "Собирайте и обрабатывайте отзывы клиентов.",
              "Отслеживайте звонки, заявки, рейтинг и позиции по локальным запросам.",
            ],
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Local SEO for auto repair shops: why it matters, what to expect, and how to do it",
    lead: [
      "Auto repair shops, tire services, and mechanic workshops rely heavily on local customers. Drivers search “near me” when something breaks-and they usually choose from Maps results.",
      "Local SEO helps your shop show up in the map pack and local rankings at the exact moment the customer needs help.",
    ],
    sections: [
      {
        title: "Why auto repair needs local SEO",
        blocks: [
          {
            title: "1. Drivers search by location",
            body: "Most queries are built around “near me”. Search engines surface nearby shops with good reviews, accurate info, and strong listings. Without local SEO, your shop simply won’t appear in those results.",
          },
          {
            title: "2. Local ranking factors are getting stronger",
            body: "Google looks at your address accuracy, categories, ratings, reviews, NAP consistency, and local mentions/links. In competitive markets, these details make a real difference.",
          },
          {
            title: "3. More trust and more booked jobs",
            body: "A complete profile with photos, clear services, transparent pricing signals, and strong reviews increases trust and improves call/booking conversion.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Higher visibility for searches like “auto repair near me”, “brake replacement in Austin”, “tire shop Brooklyn”.",
              "Better presence in Google Maps and Apple Maps (and more actions: calls, directions, website clicks).",
              "More inbound calls and quote requests when the need is urgent.",
              "Stronger reputation and higher ratings through reviews.",
              "Less dependency on paid ads over time.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy",
        blocks: [
          {
            title: "Step 1. Optimize your website",
            body: "Your site should be fast, mobile-friendly, and easy to use on a phone. Create dedicated pages for key services: oil change, diagnostics, engine repair, suspension, tire service, AC, brakes, etc.",
          },
          {
            title: "Step 2. Target local intent keywords",
            body: "Write titles and content with geo modifiers: city, neighborhood, landmarks. In the US, think “Downtown”, “Midtown”, “near the airport”, “close to I‑95”, etc. This helps you rank for “service + city/area” queries.",
          },
          {
            title: "Step 3. Set up and maintain listings",
            body: "Fully complete your Google Business Profile, and also make sure you’re correct on Apple Maps, Bing Places, and relevant industry platforms (where it makes sense). Keep hours, services, photos, and attributes up to date.",
          },
        ],
      },
      {
        title: "Reviews and reputation",
        blocks: [
          {
            body: [
              "Ask real customers for reviews after service.",
              "Reply to negative feedback professionally and offer a resolution.",
              "Show before/after photos and real repair cases.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "Initial improvements in local rankings and Maps visibility often appear within 4–8 weeks. More stable growth usually takes 3–6 months.",
          },
          {
            title: "Checklist",
            body: [
              "Make your site fast and mobile-friendly.",
              "Create separate pages for key services and optimize them for local intent.",
              "Complete and regularly update your Google Business Profile and other key listings.",
              "Collect and manage customer reviews.",
              "Track calls, leads, ratings, and local keyword visibility.",
            ],
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "SEO מקומי למוסכים ושירותי רכב: למה זה חשוב, למה לצפות ואיך עושים את זה",
    lead: [
      "מוסכים, פנצ’ריות ושירותי תיקון רכב תלויים מאוד בלקוחות מקומיים. נהגים מחפשים “קרוב אליי” כשיש תקלה-ולרוב בוחרים מתוך תוצאות במפות.",
      "SEO מקומי עוזר למוסך להופיע בתוצאות המקומיות ובמפות בדיוק ברגע שהלקוח צריך פתרון.",
    ],
    sections: [
      {
        title: "למה מוסך צריך SEO מקומי",
        blocks: [
          {
            title: "1. נהגים מחפשים לפי מיקום",
            body: "רוב החיפושים הם סביב “קרוב אליי”. Google מציגה עסקים קרובים עם ביקורות טובות ופרטים מדויקים. בלי SEO מקומי אתם פשוט לא תופיעו בתוצאות האלה.",
          },
          {
            title: "2. אותות דירוג מקומיים חזקים",
            body: "Google מתייחסת לדיוק כתובת, קטגוריות, דירוג, ביקורות, עקביות NAP ואזכורים מקומיים. בנישה תחרותית זה גורם קריטי.",
          },
          {
            title: "3. יותר אמון ויותר הזמנות",
            body: "כרטיס עסק מלא עם תמונות, שירותים ברורים ואותות מחיר/אמינות יחד עם ביקורות-מעלה אמון ומגדיל המרות לשיחה או קביעת תור.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר חשיפה לחיפושים כמו “מוסך קרוב אליי”, “החלפת בלמים תל אביב”, “פנצ’ריה רמת גן”.",
              "נוכחות טובה יותר ב‑Google Maps וב‑Waze (וגם ב‑Apple Maps).",
              "יותר שיחות ופניות בדיוק כשיש צורך דחוף.",
              "חיזוק מוניטין דרך ביקורות ודירוגים.",
              "פחות תלות בפרסום ממומן לאורך זמן.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד",
        blocks: [
          {
            title: "שלב 1. לשפר את האתר",
            body: "האתר צריך להיות מהיר ונוח במובייל. ליצור עמודים נפרדים לשירותים מרכזיים: החלפת שמן, דיאגנוסטיקה, מנוע, מתלים, צמיגים, מזגן, בלמים ועוד.",
          },
          {
            title: "שלב 2. לעבוד עם חיפושים מקומיים",
            body: "לשלב כותרות ותוכן עם אזורים/שכונות/נקודות ציון: עיר, שכונה, “ליד התחנה המרכזית”, “ליד כביש 4/איילון” וכד’. זה עוזר לחיפושים מסוג “שירות + אזור”.",
          },
          {
            title: "שלב 3. כרטיסים במפות ורישומים",
            body: "למלא בצורה מלאה את Google Business Profile, ולוודא נוכחות נכונה גם ב‑Waze וב‑Apple Maps. בענפים מסוימים בישראל כדאי גם להופיע במדריכים מקומיים (כמו Easy או d.co.il) בהתאם לרלוונטיות.",
          },
        ],
      },
      {
        title: "ביקורות ומוניטין",
        blocks: [
          {
            body: [
              "לבקש ביקורות מלקוחות אמיתיים אחרי טיפול.",
              "להגיב לביקורות שליליות בצורה מקצועית ולהציע פתרון.",
              "להציג תמונות לפני/אחרי וקייסים אמיתיים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "שיפורים ראשוניים בנראות המקומית ובמפות נראים לרוב תוך 4–8 שבועות. צמיחה יציבה בדרך כלל לוקחת 3–6 חודשים.",
          },
          {
            title: "צ’ק‑ליסט",
            body: [
              "להפוך את האתר למהיר ונוח במובייל.",
              "ליצור עמודים לשירותים מרכזיים ולהתאים אותם לחיפוש מקומי.",
              "למלא ולעדכן Google Business Profile ולוודא רישום נכון גם ב‑Waze וב‑Apple Maps.",
              "לאסוף ולנהל ביקורות.",
              "לעקוב אחרי שיחות, לידים, דירוגים ונראות בביטויי חיפוש מקומיים.",
            ],
          },
        ],
      },
    ],
  },
};

export default content;
