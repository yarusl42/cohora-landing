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
      "Локальное SEO для розничных магазинов: как привлечь больше покупателей рядом с вами",
    lead: [
      "Локальное SEO помогает розничным магазинам становиться видимыми для людей поблизости. Покупатели всё реже «гуляют в поисках» и всё чаще сначала гуглят, читают отзывы и смотрят карты. Если ваш магазин не отображается в локальной выдаче, вы теряете горячих клиентов, готовых купить уже сегодня.",
    ],
    sections: [
      {
        title: "Зачем розничным магазинам нужно локальное SEO",
        blocks: [
          {
            title: "1. Чтобы вас находили рядом",
            body: "Более 80% локальных поисков заканчиваются визитом в магазин в течение суток. Если ваш магазин не виден в локальной выдаче, покупатель просто идёт к конкуренту, которого показали Google или Яндекс.",
          },
          {
            title: "2. Конкуренция видимостью, а не бюджетом",
            body: "Многие магазины вообще не занимаются локальным SEO. Даже минимальная оптимизация позволяет попасть в топ локальной выдачи и получать бесплатный трафик, за который бренды платят в рекламе.",
          },
          {
            title: "3. Доверие через отзывы",
            body: "Люди читают отзывы о качестве товаров, уровне сервиса и атмосфере в магазине. Локальное SEO помогает собирать и управлять такими отзывами.",
          },
        ],
      },
      {
        title: "Каких результатов ожидать",
        blocks: [
          {
            body: [
              "Рост посещаемости магазина на 20–60% за счёт локальных запросов.",
              "Увеличение звонков и запросов о наличии и цене товаров.",
              "Лучшие позиции в Google Maps и Яндекс.Картах и попадание в локальный пакет (топ‑3).",
              "Рост продаж за счёт более тёплого трафика.",
              "Укрепление рейтинга и доверия через отзывы.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая стратегия локального SEO для розничного магазина",
        blocks: [
          {
            title: "Шаг 1. Карточка в картах (Google/Яндекс)",
            body: "Создайте или актуализируйте карточку магазина: название, адрес, телефон, график работы, категория и подкатегории, описание, фото витрины, ассортимента и интерьера. Добавьте товары и услуги, если это доступно.",
          },
          {
            title: "Шаг 2. Работа с отзывами",
            body: "Используйте QR‑код на кассе, чек, email или SMS после покупки, чтобы просить клиентов оставить отзыв. Отвечайте на все отзывы - и позитивные, и негативные - вежливо и по делу.",
          },
          {
            title: "Шаг 3. Оптимизация сайта (если есть)",
            body: "Если у магазина есть сайт, важно указать точный адрес, карту, часы работы, фото и описания основных категорий товаров. NAP‑данные на сайте и в карточке должны совпадать.",
          },
        ],
      },
      {
        title: "FAQ и чек‑лист по локальному SEO для розницы",
        blocks: [
          {
            title: "Когда ждать результата?",
            body: "Первые изменения по видимости и посещаемости обычно видны через 4–12 недель. Дальнейший рост зависит от качества отзывов и регулярности работы с карточкой и сайтом.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoRetailChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "local-seo-retail-checklist",
          title: "",
          description: "",
          items: [
            "Создайте и заполните карточку в Google и Яндексе.",
            "Убедитесь в совпадении NAP‑данных на всех площадках.",
            "Собирайте и обрабатывайте отзывы клиентов.",
            "Обновляйте фото и описание ассортимента.",
            "Отслеживайте звонки, визиты и продажи, корректируя стратегию.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title: "Local SEO for retail stores: how to attract more nearby customers",
    lead: [
      "Local SEO helps retail stores get discovered by people nearby. Shoppers are less likely to “walk around and browse” and more likely to search first, read reviews, and check Maps. If your store doesn’t show up in local results, you lose ready-to-buy customers.",
    ],
    sections: [
      {
        title: "Why retail stores need local SEO",
        blocks: [
          {
            title: "1. So people can find you nearby",
            body: "A large share of local searches end with an in-store visit within a day. If your store isn’t visible in local results, shoppers go to the competitor Google shows first.",
          },
          {
            title: "2. Compete with visibility, not only budget",
            body: "Many stores don’t actively work on local SEO. Even basic optimization can get you into the local pack and generate free traffic that brands otherwise pay for with ads.",
          },
          {
            title: "3. Reviews build trust",
            body: "People read reviews about product quality, service, and the overall shopping experience. Local SEO helps you generate and manage that reputation.",
          },
        ],
      },
      {
        title: "What results to expect",
        blocks: [
          {
            body: [
              "20–60% more store visits from local intent searches.",
              "More calls and questions about availability and prices.",
              "Better visibility in Google Maps and the local pack (top 3).",
              "More sales from warmer traffic.",
              "Stronger ratings and trust through reviews.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step local SEO strategy for a retail store",
        blocks: [
          {
            title: "Step 1. Google Business Profile",
            body: "Create or update your listing: name, address, phone, hours, primary and secondary categories, description, and photos (storefront, products, interior). Add products/services if available.",
          },
          {
            title: "Step 2. Review generation and management",
            body: "Use a QR code at checkout, a receipt message, email, or SMS after purchase to ask for reviews. Reply to all reviews-positive and negative-politely and with specifics.",
          },
          {
            title: "Step 3. Website optimization (if you have one)",
            body: "If your store has a website, add a clear address, map, business hours, photos, and descriptions of key product categories. Your NAP should match your listing exactly.",
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "When will you see results?",
            body: "First improvements in visibility and store visits are often noticeable within 4–12 weeks. Further growth depends on review quality and consistent work on the listing and the website.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoRetailChecklist",
      title: "Checklist",
      steps: [
        {
          id: "local-seo-retail-checklist",
          title: "",
          description: "",
          items: [
            "Create and complete your Google Business Profile.",
            "Make sure your NAP matches across all platforms.",
            "Collect and manage customer reviews.",
            "Update photos and product assortment descriptions.",
            "Track calls, visits, and sales and adjust your strategy.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "SEO מקומי לחנויות קמעונאיות: איך למשוך יותר לקוחות בקרבת מקום",
    lead: [
      "SEO מקומי עוזר לחנויות קמעונאיות להיות נראות לאנשים קרובים. קונים פחות “מטיילים ומחפשים” ויותר מחפשים מראש, קוראים ביקורות ובודקים מפות. אם החנות לא מופיעה בתוצאות מקומיות-אתם מפסידים לקוחות שמוכנים לקנות כבר היום.",
    ],
    sections: [
      {
        title: "למה חנויות קמעונאיות צריכות SEO מקומי",
        blocks: [
          {
            title: "1. כדי שימצאו אתכם ליד הבית",
            body: "חלק גדול מהחיפושים המקומיים מסתיים בביקור בחנות תוך יום. אם העסק לא מופיע בתוצאות המקומיות, הלקוחות הולכים למתחרה ש‑Google מציג ראשון.",
          },
          {
            title: "2. להתחרות עם נראות-לא רק עם תקציב",
            body: "הרבה חנויות לא עובדות בכלל על SEO מקומי. אפילו אופטימיזציה בסיסית יכולה להכניס אתכם לתוצאות המובילות ולייצר תנועה חינמית שבדרך כלל משלמים עליה בפרסום.",
          },
          {
            title: "3. ביקורות בונות אמון",
            body: "אנשים קוראים ביקורות על איכות מוצרים, שירות וחוויית הקנייה. SEO מקומי עוזר לייצר ולנהל מוניטין כזה.",
          },
        ],
      },
      {
        title: "אילו תוצאות לצפות",
        blocks: [
          {
            body: [
              "עלייה של 20–60% בביקורים בחנות מחיפושים מקומיים.",
              "יותר שיחות ושאלות על מלאי ומחירים.",
              "יותר נראות ב‑Google Maps וגם ב‑Waze (וגם ב‑Apple Maps).",
              "יותר מכירות מתנועה חמה יותר.",
              "חיזוק דירוג ואמון באמצעות ביקורות.",
            ],
          },
        ],
      },
      {
        title: "אסטרטגיה צעד‑אחר‑צעד ל‑SEO מקומי לחנות",
        blocks: [
          {
            title: "שלב 1. כרטיס עסק במפות",
            body: "צרו או עדכנו כרטיס: שם, כתובת, טלפון, שעות פעילות, קטגוריות, תיאור ותמונות (חזית, מוצרים, פנים החנות). הוסיפו מוצרים/שירותים אם אפשר.",
          },
          {
            title: "שלב 2. איסוף וניהול ביקורות",
            body: "השתמשו ב‑QR בקופה, הודעה על הקבלה, אימייל או SMS אחרי רכישה כדי לבקש ביקורות. הגיבו לכל הביקורות-חיוביות ושליליות-בצורה עניינית ומכבדת.",
          },
          {
            title: "שלב 3. אופטימיזציה לאתר (אם יש)",
            body: "אם יש אתר, חשוב להציג כתובת ברורה, מפה, שעות פעילות, תמונות ותיאורים של קטגוריות מוצרים מרכזיות. NAP חייב להיות זהה לאופן שבו הוא מופיע בכרטיס.",
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "מתי רואים תוצאות?",
            body: "שיפורים ראשונים בנראות ובביקורים לרוב ניכרים תוך 4–12 שבועות. המשך הצמיחה תלוי באיכות הביקורות ובעבודה עקבית על הכרטיס והאתר.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleLocalSeoRetailChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "local-seo-retail-checklist",
          title: "",
          description: "",
          items: [
            "ליצור ולמלא Google Business Profile.",
            "לוודא עקביות NAP בכל הפלטפורמות.",
            "לאסוף ולנהל ביקורות לקוחות.",
            "לעדכן תמונות ותיאור של המוצרים/המלאי.",
            "לעקוב אחרי שיחות, ביקורים ומכירות ולשפר את האסטרטגיה.",
          ],
        },
      ],
    },
  },
};

export default content;
