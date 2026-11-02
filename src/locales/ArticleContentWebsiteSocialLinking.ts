import { type HowToStep } from "@/components/HowToChecklist";

export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleChecklist = {
  title: string;
  storageKey: string;
  steps: readonly HowToStep[];
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  sections: ArticleSection[];
  checklist: ArticleChecklist;
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Привязка сайта и соцсетей к карточкам бизнеса: зачем это нужно, чего ожидать и как правильно всё настроить",
    lead: [
      "Связывание сайта и соцсетей для белорусского бизнеса - это одна из наиболее эффективных стратегий локального продвижения в Минске, Бресте, Гомеле и других городах Беларуси для укрепления онлайн‑присутствия и повышения доверия Google и Яндекса.",
      "Правильно организованная связка помогает улучшить позиции в локальном поиске и привлечь больше местных клиентов.",
    ],
    sections: [
      {
        title: "Зачем привязывать сайт и соцсети",
        blocks: [
          {
            title: "1. Больше доверия клиентов",
            body: "Сайт подтверждает, что бизнес реальный, а соцсети показывают активность: посты, фото, отзывы. Клиент быстро видит примеры работ, цены и контакты - это снимает сомнения.",
          },
          {
            title: "2. Усиление локального SEO",
            body: "Алгоритмы учитывают внешние сигналы: совпадение NAP (Name, Address, Phone), описаний и категорий, подтверждение активности. Это повышает шансы карточки на более высокие позиции в локальной выдаче.",
          },
          {
            title: "3. Рост трафика и конверсий",
            body: "Из карточки пользователь может перейти на сайт (заявка/запись), в соцсети (портфолио), в мессенджеры. Полноценная связка превращает карточку в удобную точку входа.",
          },
          {
            title: "4. Укрепление репутации",
            body: "Аккуратные соцсети и современный сайт формируют ощущение серьёзности. Особенно важно для медицины, бьюти, ремонта, строительства, ресторанов.",
          },
          {
            title: "5. Быстрее модерация правок",
            body: "Аккаунты, привязанные к активному сайту, реже попадают под блокировки, а изменения подтверждаются быстрее.",
          },
        ],
      },
      {
        title: "Что меняется после привязки",
        blocks: [
          {
            body: [
              "Рост CTR карточки: она выглядит полнее и полезнее.",
              "Больше заявок: переходы на лендинг/услуги/мессенджеры.",
              "Меньше «пустых» звонков: базовые ответы - на сайте и в соцсетях.",
              "Единая экосистема «карточка ↔ сайт ↔ соцсети» усиливает бренд.",
              "Меньше проблем с модерацией за счёт внешних подтверждений.",
            ],
          },
        ],
      },
      {
        title: "Какие соцсети привязывать",
        blocks: [
          {
            title: "Минимальный набор",
            body: [
              "Instagram - визуальные кейсы, портфолио, отзывы.",
              "Facebook / Meta Page - для локальных услуг и коммуникации.",
              "YouTube - обзоры, видеоинструкции, кейсы.",
            ],
          },
          {
            title: "Дополнительно",
            body: [
              "TikTok - визуальные ниши, короткие демонстрации.",
              "Pinterest - интерьер, красота, ремонт.",
              "LinkedIn - B2B‑коммуникация.",
            ],
          },
        ],
      },
      {
        title: "Частые ошибки",
        blocks: [
          {
            body: [
              "Разные телефоны/адреса на сайте и в соцсетях - падение доверия.",
              "Медленный или устаревший сайт - пользователи уходят сразу.",
              "Нет HTTPS - дополнительный риск понижения.",
              "«Мёртвые» соцсети - лучше отсутствие, чем заброшенные профили.",
              "Слишком много ссылок - выберите 1–3 ключевых площадки.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая инструкция привязки",
        blocks: [
          {
            title: "Шаг 1 - Подготовьте сайт",
            body: "Проверьте HTTPS, корректные NAP‑данные, страницу контактов и «О компании», скорость загрузки. Данные должны совпадать с карточкой.",
          },
          {
            title: "Шаг 2 - Проверьте соцсети",
            body: "Оформление, актуальные контакты, правильные категории, логотип/фирстиль, живой контент за последние недели.",
          },
          {
            title: "Шаг 3 - Откройте управление Google Business Profile",
            body: "Введите бренд в поиске → «Профиль компании» → настройки карточки.",
          },
          {
            title: "Шаг 4 - Добавьте сайт и ссылки на соцсети",
            body: "Раздел «Сайт» - укажите основной домен с UTM‑метками для аналитики. Разделы «Соцсети/Профили» - добавьте Instagram, Facebook, YouTube и другие ключевые площадки.",
          },
          {
            title: "Шаг 5 - Согласуйте данные",
            body: "Убедитесь, что название, адрес и телефон совпадают между карточкой, сайтом и соцсетями. При необходимости обновите.",
          },
          {
            title: "Шаг 6 - Проверьте отображение",
            body: "Посмотрите карточку на мобильных и десктопе. Перейдите по всем ссылкам, проверьте UTM и корректность страниц назначения.",
          },
        ],
      },
      {
        title: "Лучшие практики",
        blocks: [
          {
            body: [
              "Единый фирстиль и актуальные контакты в карточке, на сайте и в соцсетях.",
              "UTM‑метки на ссылке «Сайт» и в кнопках соцсетей - фиксируйте вклад каналов.",
              "Выделенная страница «Контакты» со схемой и кликабельными кнопками.",
              "Периодический аудит соответствия данных (раз в 3–6 месяцев).",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Повлияет ли это на ранжирование?",
            body: "Напрямую - не всегда, но через CTR, доверие, согласованность NAP и поведенческие сигналы - да, в лучшую сторону.",
          },
        ],
      },
    ],
    checklist: {
      title: "Чек‑лист",
      storageKey: "articleLinkSiteSocialsChecklist",
      steps: [
        {
          id: "link-site-socials-checklist",
          title: "",
          description: "",
          items: [
            "HTTPS, быстрый сайт, корректный NAP.",
            "Живые и оформленные соцсети.",
            "Ссылки на сайт и соцсети в карточке + UTM.",
            "Совпадение данных между всеми источниками.",
            "Проверка отображения и периодический аудит.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Linking your website and social profiles to business listings: why it matters and how to set it up",
    lead: [
      "Connecting your website and social profiles to your business listing is an effective local growth tactic that strengthens your online presence and trust.",
      "A well-structured setup can support local visibility in Google, improve conversion, and bring more local customers.",
    ],
    sections: [
      {
        title: "Why link your website and social profiles",
        blocks: [
          {
            title: "1. More customer trust",
            body: "A website confirms the business is real, while social profiles show activity: posts, photos, reviews. Customers can quickly see examples, pricing context, and contact options.",
          },
          {
            title: "2. Stronger local SEO signals",
            body: "Algorithms look at external consistency: NAP (Name, Address, Phone), descriptions, categories, and activity signals. Consistency can improve performance in local results.",
          },
          {
            title: "3. More traffic and conversions",
            body: "From a listing, users can go to your website (book/contact), social profiles (portfolio), or messaging apps. A connected ecosystem turns the listing into a strong entry point.",
          },
          {
            title: "4. Reputation reinforcement",
            body: "Clean, active social profiles and a modern website increase perceived professionalism-especially important for healthcare, beauty, home services, construction, and restaurants.",
          },
          {
            title: "5. Faster verification and fewer moderation issues",
            body: "Listings connected to active, consistent web properties tend to have fewer trust issues and updates may be confirmed faster.",
          },
        ],
      },
      {
        title: "What changes after linking",
        blocks: [
          {
            body: [
              "Higher listing CTR: it looks more complete and useful.",
              "More inquiries: clicks to landing pages/services/messengers.",
              "Fewer low-quality calls: basic answers live on your website and socials.",
              "A unified ecosystem ‘listing ↔ website ↔ socials’ strengthens brand.",
              "Fewer moderation problems thanks to external confirmation.",
            ],
          },
        ],
      },
      {
        title: "Which social profiles to link",
        blocks: [
          {
            title: "Minimum set",
            body: [
              "Instagram - visual cases, portfolio, reviews.",
              "Facebook / Meta Page - local communication and services.",
              "YouTube - reviews, how-to videos, cases.",
            ],
          },
          {
            title: "Optional",
            body: [
              "TikTok - short demos for visual niches.",
              "Pinterest - interior/beauty/renovation.",
              "LinkedIn - B2B communication.",
            ],
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Different phone/address across website and socials → trust drops.",
              "Slow or outdated website → users bounce.",
              "No HTTPS → additional trust/ranking risk.",
              "Dead social profiles → better none than abandoned.",
              "Too many links → stick to 1–3 key platforms.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step setup",
        blocks: [
          {
            title: "Step 1 - Prepare your website",
            body: "Check HTTPS, correct NAP, a clear Contact/About page, and page speed. Data should match the listing.",
          },
          {
            title: "Step 2 - Audit your social profiles",
            body: "Branding, accurate contacts, correct categories, logo, and recent content.",
          },
          {
            title: "Step 3 - Open Google Business Profile management",
            body: "Search your brand → open the Business Profile → go to listing settings.",
          },
          {
            title: "Step 4 - Add website and social links",
            body: "In the Website section, add your main domain with UTM parameters. In Social profiles, add Instagram/Facebook/YouTube and other key platforms.",
          },
          {
            title: "Step 5 - Align business data",
            body: "Make sure name/address/phone match across the listing, website, and socials. Update if needed.",
          },
          {
            title: "Step 6 - Verify display",
            body: "Check the listing on mobile and desktop. Click every link, confirm UTM tracking and landing pages.",
          },
        ],
      },
      {
        title: "Best practices",
        blocks: [
          {
            body: [
              "Use consistent branding and contacts across listing, website, and socials.",
              "Use UTM parameters on the Website link and key social buttons.",
              "Have a dedicated Contact page with map/CTA buttons.",
              "Audit consistency every 3–6 months.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Will it impact rankings?",
            body: "Not always directly, but through CTR, trust, NAP consistency, and behavioral signals it can have a positive effect.",
          },
        ],
      },
    ],
    checklist: {
      title: "Checklist",
      storageKey: "articleLinkSiteSocialsChecklist",
      steps: [
        {
          id: "link-site-socials-checklist",
          title: "",
          description: "",
          items: [
            "HTTPS, fast site, correct NAP.",
            "Active and well-designed social profiles.",
            "Website + social links in the listing (with UTM).",
            "Data consistency across all sources.",
            "Verify display and run periodic audits.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "חיבור אתר ורשתות חברתיות לכרטיס העסק: למה זה חשוב ואיך להגדיר נכון",
    lead: [
      "חיבור האתר והרשתות החברתיות לכרטיס העסק הוא מהלך יעיל שמחזק נוכחות דיגיטלית ואמון.",
      "הגדרה נכונה יכולה לתמוך בנראות מקומית ב‑Google, לשפר המרות ולהביא יותר לקוחות מקומיים.",
    ],
    sections: [
      {
        title: "למה לחבר אתר ורשתות חברתיות",
        blocks: [
          {
            title: "1. יותר אמון מצד לקוחות",
            body: "האתר מאשר שהעסק אמיתי, והרשתות מציגות פעילות: פוסטים, תמונות, ביקורות. לקוחות רואים מהר דוגמאות, הקשר למחיר ודרכי יצירת קשר.",
          },
          {
            title: "2. חיזוק אותות SEO מקומי",
            body: "אלגוריתמים בוחנים עקביות חיצונית: NAP (שם, כתובת, טלפון), תיאורים, קטגוריות וסיגנלי פעילות. עקביות יכולה לשפר ביצועים בתוצאות מקומיות.",
          },
          {
            title: "3. יותר תנועה והמרות",
            body: "מהכרטיס אפשר לעבור לאתר (הזמנה/פנייה), לרשתות (פורטפוליו), או לאפליקציות הודעות. אקו‑סיסטם מחובר הופך את הכרטיס לנקודת כניסה חזקה.",
          },
          {
            title: "4. חיזוק מוניטין",
            body: "רשתות פעילות ואתר מודרני משדרים מקצועיות-חשוב במיוחד לבריאות, ביוטי, שירותי בית, בנייה ומסעדות.",
          },
          {
            title: "5. פחות בעיות אימות ומודרציה",
            body: "כרטיסים שמחוברים לנכסים דיגיטליים עקביים נוטים לפחות בעיות אמון ולעיתים עדכונים מאושרים מהר יותר.",
          },
        ],
      },
      {
        title: "מה משתנה אחרי החיבור",
        blocks: [
          {
            body: [
              "CTR גבוה יותר: הכרטיס נראה מלא ושימושי.",
              "יותר פניות: קליקים לדפי נחיתה/שירותים/מסנג’רים.",
              "פחות שיחות ‘ריקות’: תשובות בסיסיות נמצאות באתר וברשתות.",
              "אקו‑סיסטם ‘כרטיס ↔ אתר ↔ רשתות’ מחזק מותג.",
              "פחות בעיות מודרציה בזכות אישור חיצוני.",
            ],
          },
        ],
      },
      {
        title: "אילו רשתות לחבר",
        blocks: [
          {
            title: "מינימום",
            body: [
              "Instagram - תיק עבודות/ויזואלים/ביקורות.",
              "Facebook / Meta Page - תקשורת ושירותים מקומיים.",
              "YouTube - סרטוני סקירה/הדרכות/קייסים.",
            ],
          },
          {
            title: "בנוסף",
            body: [
              "TikTok - הדגמות קצרות לנישות ויזואליות.",
              "Pinterest - עיצוב/יופי/שיפוץ.",
              "LinkedIn - תקשורת B2B.",
            ],
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: [
              "טלפון/כתובת שונים בין אתר לרשתות → ירידת אמון.",
              "אתר איטי/מיושן → נטישה.",
              "ללא HTTPS → סיכון נוסף.",
              "רשתות ‘מתות’ → עדיף לא לחבר מאשר פרופיל נטוש.",
              "יותר מדי קישורים → לבחור 1–3 פלטפורמות מרכזיות.",
            ],
          },
        ],
      },
      {
        title: "הגדרה צעד‑אחר‑צעד",
        blocks: [
          {
            title: "שלב 1 - להכין את האתר",
            body: "לוודא HTTPS, NAP נכון, דף צור קשר/אודות ברור ומהירות טעינה. הנתונים צריכים להתאים לכרטיס.",
          },
          {
            title: "שלב 2 - לבדוק את הרשתות",
            body: "מיתוג, פרטי קשר מדויקים, קטגוריות נכונות, לוגו ותוכן עדכני.",
          },
          {
            title: "שלב 3 - לפתוח ניהול Google Business Profile",
            body: "לחפש את שם העסק → לפתוח Business Profile → להיכנס להגדרות.",
          },
          {
            title: "שלב 4 - להוסיף אתר וקישורי רשתות",
            body: "ב’Website’ להוסיף דומיין עם UTM. ב’Social profiles’ להוסיף Instagram/Facebook/YouTube ועוד פלטפורמות מרכזיות.",
          },
          {
            title: "שלב 5 - ליישר נתונים",
            body: "לוודא ששם/כתובת/טלפון תואמים בין הכרטיס, האתר והרשתות. לעדכן במידת הצורך.",
          },
          {
            title: "שלב 6 - לבדוק תצוגה",
            body: "לבדוק מובייל ודסקטופ, ללחוץ על כל קישור, לוודא UTM ודפי נחיתה.",
          },
        ],
      },
      {
        title: "פרקטיקות מומלצות",
        blocks: [
          {
            body: [
              "מיתוג אחיד ופרטי קשר מעודכנים בכל הערוצים.",
              "להשתמש ב‑UTM בקישור לאתר ובכפתורי רשתות.",
              "דף צור קשר ייעודי עם מפה וכפתורי פעולה.",
              "אודיט עקביות כל 3–6 חודשים.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "האם זה משפיע על הדירוג?",
            body: "לא תמיד ישירות, אבל דרך CTR, אמון, עקביות NAP ואותות התנהגות-כן, לרוב לטובה.",
          },
        ],
      },
    ],
    checklist: {
      title: "צ’ק‑ליסט",
      storageKey: "articleLinkSiteSocialsChecklist",
      steps: [
        {
          id: "link-site-socials-checklist",
          title: "",
          description: "",
          items: [
            "HTTPS, אתר מהיר, NAP נכון.",
            "רשתות פעילות וממותגות.",
            "קישורים לאתר ולרשתות בכרטיס + UTM.",
            "עקביות נתונים בין כל המקורות.",
            "בדיקת תצוגה ואודיט תקופתי.",
          ],
        },
      ],
    },
  },
};

export default content;
