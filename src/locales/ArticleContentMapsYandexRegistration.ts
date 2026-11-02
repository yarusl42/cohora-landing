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
    title: "Регистрация бизнеса в картах: пошаговая инструкция",
    lead: [
      "Для локального бизнеса в Беларуси присутствие в картах - важный источник обращений: люди ищут адрес, отзывы и ближайшие варианты. Если вашей карточки нет в Google Maps, 2ГИС и Apple Maps, часть аудитории просто не найдёт вас.",
      "Разберём, зачем добавлять компанию в картографические сервисы, чего ожидать после регистрации и как пройти процесс шаг за шагом - без дубликатов и ошибок.",
    ],
    sections: [
      {
        title: "Зачем бизнесу быть в картах",
        blocks: [
          {
            title: "1. Клиенты ищут адрес и отзывы",
            body: "Карты - это быстрый способ выбрать салон, клинику, сервис или кафе рядом. Если карточки нет, вы не участвуете в выборе.",
          },
          {
            title: "2. Карточка - ваша «витрина»",
            body: "Карточка показывает рейтинг, фото, часы работы, контакты и ссылку на сайт. Это базовая проверка доверия.",
          },
          {
            title: "3. Удобно связаться и доехать",
            body: "Пользователь в один клик строит маршрут, звонит или переходит на сайт. Особенно важно для ниш, где решение принимается быстро.",
          },
          {
            title: "4. Репутация через отзывы",
            body: "Отзывы и ответы владельца формируют доверие и помогают отличаться от конкурентов с «мёртвыми» карточками.",
          },
        ],
      },
      {
        title: "Чего ожидать от регистрации",
        blocks: [
          {
            body: [
              "Это не «волшебная кнопка»: карточке нужно время, чтобы набрать показы и клики.",
              "Результат сильно зависит от отзывов и поведения пользователей (звонки, маршруты, клики).",
              "Карты работают лучше в связке с сайтом, соцсетями и локальным SEO.",
              "Нужна регулярность: обновления, фото, ответы на отзывы - это процесс.",
            ],
          },
        ],
      },
      {
        title: "Как зарегистрировать бизнес в картах: пошагово",
        blocks: [
          {
            title: "Шаг 1. Подготовьте данные о компании",
            body: [
              "официальное название;",
              "адрес (единый формат для сайта и карточек);",
              "телефон для клиентов;",
              "сайт и соцсети (если есть);",
              "график работы;",
              "фото фасада, входа, интерьера, команды/процесса.",
            ],
          },
          {
            title: "Шаг 2. Проверьте, нет ли карточки уже",
            body: "Сначала найдите компанию по названию и адресу в Google Maps и 2ГИС. Если карточка уже есть, лучше запросить права, чем создавать дубликат.",
          },
          {
            title: "Шаг 3. Добавьте компанию и заполните профиль",
            body: "Создайте/заявите карточку в сервисах, заполните название, адрес, категории, описание, контакты, часы работы, услуги и добавьте фото.",
          },
          {
            title: "Шаг 4. Подтвердите права",
            body: "Подтверждение обычно проходит по телефону, письму, видео/фото или документам - зависит от платформы и типа бизнеса.",
          },
          {
            title: "Шаг 5. Проверьте карточку глазами клиента",
            body: [
              "понятно ли, чем вы занимаетесь;",
              "виден ли вход и вывеска на фото;",
              "корректно ли отображаются часы работы;",
              "нет ли опечаток и устаревших данных.",
            ],
          },
        ],
      },
      {
        title: "Работа с отзывами и рейтингом",
        blocks: [
          {
            body: [
              "попросите лояльных клиентов оставить честные отзывы;",
              "отвечайте на каждый отзыв;",
              "не используйте накрутку - это риск санкций и потери доверия;",
              "следите, чтобы контакты и часы работы были актуальными.",
            ],
          },
        ],
      },
      {
        title: "Типичные ошибки",
        blocks: [
          {
            body: [
              "дубликаты одной и той же организации;",
              "ключевые слова в названии вместо реального бренда;",
              "игнорирование отзывов, особенно негативных;",
              "неактуальные часы работы и контакты;",
              "нет реальных фото (только логотип/стоки).",
            ],
          },
        ],
      },
      {
        title: "Итоги",
        blocks: [
          {
            body: "Регистрация бизнеса в картах - обязательный шаг для компаний, которые хотят получать локальных клиентов. Это не заменяет другие каналы, но даёт устойчивую точку присутствия. Чем аккуратнее заполнены данные и чем регулярнее вы работаете с отзывами и обновлениями, тем больше пользы принесёт карточка.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Register your business on maps: a step-by-step guide",
    lead: [
      "In the U.S., map listings are a major source of local demand. People check location, hours, reviews, and nearby options. If you’re missing from Google Maps or Apple Maps, you’re invisible to part of your audience.",
      "Here’s what to expect from map listing registration and a practical step-by-step process to claim and optimize your listing without creating duplicates.",
    ],
    sections: [
      {
        title: "Why you should be on maps",
        blocks: [
          {
            title: "1. Customers search by proximity",
            body: "Many ‘near me’ searches happen directly in Maps. If you’re not there, you’re not in the shortlist.",
          },
          {
            title: "2. Your listing is your storefront",
            body: "A listing shows reviews, photos, hours, and contact info-often the first impression before a website click.",
          },
          {
            title: "3. One-tap actions",
            body: "Calls, direction requests, and website clicks often happen straight from the listing.",
          },
          {
            title: "4. Reviews build trust",
            body: "Review volume, rating stability, and owner responses directly influence conversion.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "It’s not instant: listings need time to gain visibility.",
              "Results depend heavily on reviews and engagement signals.",
              "Listings work best alongside your website and local SEO.",
              "Ongoing upkeep matters: hours, photos, and review responses.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step registration",
        blocks: [
          {
            title: "Step 1. Prepare your business info",
            body: [
              "official business name;",
              "address (consistent format);",
              "phone number;",
              "website;",
              "hours;",
              "photos: storefront, interior, team/services.",
            ],
          },
          {
            title: "Step 2. Search for an existing listing",
            body: "Search Google Maps for your business name and address. If a listing already exists, claim it instead of creating a duplicate.",
          },
          {
            title: "Step 3. Claim and complete the listing",
            body: "Use Google Business Profile to manage your listing. Fill categories, description, services, and upload high-quality photos.",
          },
          {
            title: "Step 4. Verify ownership",
            body: "Verification may happen by phone, email, video, postcard, or documents-depending on your business and platform.",
          },
          {
            title: "Step 5. Review it like a customer",
            body: [
              "is it clear what you offer;",
              "are photos accurate and helpful;",
              "are hours correct;",
              "is contact info up to date.",
            ],
          },
        ],
      },
      {
        title: "Reviews and rating",
        blocks: [
          {
            body: [
              "ask happy customers for honest reviews;",
              "respond to every review;",
              "avoid fake reviews-they can backfire;",
              "keep hours and contact info current.",
            ],
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "duplicate listings;",
              "keyword stuffing in the business name;",
              "ignoring reviews;",
              "outdated hours and phone number;",
              "no real photos.",
            ],
          },
        ],
      },
      {
        title: "Takeaways",
        blocks: [
          {
            body: "Registering your business on maps is a foundational local marketing step. It won’t replace other channels, but it creates a reliable presence. The more consistent your data and the more active you are with photos and reviews, the better results you’ll see.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "רישום העסק במפות: מדריך צעד‑אחר‑צעד",
    lead: [
      "כרטיסים במפות הם מקור חזק ללקוחות מקומיים: אנשים בודקים מיקום, שעות, ביקורות ומתקשרים ישירות מהכרטיס. אם אתם לא מופיעים במפות, חלק מהקהל לא ימצא אתכם.",
      "כאן תמצאו מה לצפות מרישום העסק במפות ותהליך מעשי כדי להקים כרטיס בלי כפילויות.",
    ],
    sections: [
      {
        title: "למה חשוב להיות במפות",
        blocks: [
          {
            title: "1. חיפוש לפי קרבה",
            body: "חיפושי ‘קרוב אליי’ מתרחשים הרבה פעמים ישירות במפות.",
          },
          {
            title: "2. הכרטיס הוא חלון הראווה",
            body: "הכרטיס מציג ביקורות, תמונות, שעות ופרטי קשר.",
          },
          {
            title: "3. פעולות בלחיצה",
            body: "שיחה, ניווט וקליק לאתר קורים לעיתים ישירות מהכרטיס.",
          },
        ],
      },
      {
        title: "תהליך מומלץ",
        blocks: [
          {
            title: "שלב 1. הכנת פרטים",
            body: "שם, כתובת, טלפון, אתר, שעות ותמונות אמיתיות.",
          },
          {
            title: "שלב 2. לבדוק אם כבר קיים כרטיס",
            body: "אם הכרטיס קיים-לבקש בעלות במקום ליצור כפילות.",
          },
          {
            title: "שלב 3. השלמת הכרטיס",
            body: "למלא קטגוריות, תיאור, שירותים ולהעלות תמונות.",
          },
          {
            title: "שלב 4. אימות",
            body: "אימות יכול להיות בטלפון/מייל/וידאו/מסמכים-תלוי בפלטפורמה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "רישום במפות הוא בסיס חשוב לשיווק מקומי. עקביות בפרטים ותהליך קבוע לביקורות ותמונות משפרים תוצאות לאורך זמן.",
          },
        ],
      },
    ],
  },
};

export default content;
