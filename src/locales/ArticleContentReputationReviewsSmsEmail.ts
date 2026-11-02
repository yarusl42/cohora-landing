export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type HowToStepContent = {
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
  checklistTitle: string;
  howToStorageKey: string;
  steps: readonly HowToStepContent[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Настройка сбора отзывов с SMS и Email‑напоминаниями: зачем это нужно, чего ожидать и как правильно всё настроить",
    lead: [
      "Системный сбор отзывов - фундамент локального SEO и доверия клиентов. Автоматизированные напоминания через SMS и Email создают стабильный поток свежих отзывов, повышают рейтинг, улучшают позиции в картах и снижают стоимость привлечения.",
      "Ниже - почему это важно, каких результатов ждать и пошаговый план настройки без ошибок.",
    ],
    sections: [
      {
        title: "Зачем собирать отзывы через SMS и Email",
        blocks: [
          {
            title: "1. В разы больше отзывов",
            body: "Большинство клиентов готовы делиться опытом, но забывают. Напоминание повышает вероятность отзыва. Как правило, SMS даёт более высокую конверсию в переход, Email - ниже, а вместе они усиливают друг друга.",
          },
          {
            title: "2. Рост доверия и позиций",
            body: "Карточки с большим числом свежих отзывов ранжируются выше и конвертируют лучше. Во многих нишах ориентир - рейтинг около 4.6+ и свежие отзывы за последние 30 дней.",
          },
          {
            title: "3. Сигнал активности для карт",
            body: "Регулярные отзывы - признак «живого» бизнеса. Для Google и других карт это сигнал активности: карточка чаще появляется и удерживает позиции.",
          },
          {
            title: "4. Контроль негатива",
            body: "Двухуровневый сценарий позволяет поймать недовольство до публичного отзыва: негатив уходит в личный диалог, позитив - на карты.",
          },
          {
            title: "5. Автоматизация",
            body: "Один раз настроили - и система работает ежедневно: меньше ручной работы и меньше «человеческого фактора».",
          },
        ],
      },
      {
        title: "Что ожидать после внедрения",
        blocks: [
          {
            body: [
              "Рост среднего рейтинга при качественном сервисе.",
              "Увеличение количества оценок и отзывов.",
              "Рост показов и кликов в картах за счёт свежести.",
              "Больше конверсий новых клиентов благодаря social proof.",
              "Меньше публичного негатива при двухуровневом сценарии.",
            ],
          },
        ],
      },
      {
        title: "Частые ошибки",
        blocks: [
          {
            body: [
              "Голая «сырая» ссылка на отзыв в SMS - используйте короткую брендовую ссылку или мини‑лендинг.",
              "Слишком длинные сообщения - никто не читает «простыни».",
              "Просьба об отзыве до оказания услуги - нарушение правил платформ.",
              "Игнорирование согласий и предпочтений клиента по каналам.",
              "Отправка сразу после визита - дайте времени на впечатление, пришлите напоминание позже.",
            ],
          },
        ],
      },
      {
        title: "Пошаговая настройка SMS/Email‑сборщика отзывов",
        blocks: [
          {
            title: "Шаг 1 - Подготовьте ссылку(и) для отзывов",
            body: "Сделайте короткую ссылку (например, вашдомен.by/review) с редиректом на нужные площадки. Ещё лучше - мини‑страница с кнопками «Оставить отзыв» для разных платформ.",
          },
          {
            title: "Шаг 2 - Двухуровневый сценарий",
            body: "На мини‑странице: 👍 «Всё понравилось» → карты; 👎 «Есть замечания» → форма связи с менеджером. Так вы фильтруете негатив и обрабатываете его персонально.",
          },
          {
            title: "Шаг 3 - Подготовьте тексты",
            body: [
              "SMS (коротко и мягко): «Спасибо за визит в “Название компании”! Нам важно ваше мнение. Оцените, пожалуйста: {ссылка}»",
              "Email (чуть длиннее): Тема: «Нам важно ваше мнение!» Текст: «Здравствуйте! Спасибо, что выбрали “Название компании”. Мы улучшаем сервис и будем благодарны за отзыв: {ссылка}»",
            ],
          },
          {
            title: "Шаг 4 - Тайминги и частота",
            body: [
              "Первое напоминание: через 6–24 часа после услуги.",
              "Повторное (если нет реакции): через 3–5 дней.",
              "Не более 2–3 касаний по одной услуге. Учитывайте «тишину» ночью/в праздники.",
            ],
          },
          {
            title: "Шаг 5 - Каналы и персонализация",
            body: "Используйте имя клиента и название услуги, если возможно. Предлагайте канал по предпочтениям: кому‑то удобнее SMS, кому‑то Email.",
          },
          {
            title: "Шаг 6 - Отслеживание и метрики",
            body: [
              "Переходы по ссылкам (UTM, короткие ссылки), доля оставивших отзыв.",
              "Динамика среднего рейтинга и распределение тональностей.",
              "Доля 1★, скорость реакции менеджера по ветке «недоволен».",
            ],
          },
        ],
      },
      {
        title: "Инструменты и интеграции",
        blocks: [
          {
            body: [
              "CRM‑триггеры после закрытия заказа/визита: автоотправка SMS/Email.",
              "Transactional Email и SMS‑шлюзы с трекингом ссылок.",
              "Мини‑лендинг для отзывов с кнопками на Google и другие релевантные площадки.",
              "Шаблоны для менеджеров на случаи «недоволен» (скрипты, SLA, компенсация).",
            ],
          },
        ],
      },
      {
        title: "Правовые аспекты и этика",
        blocks: [
          {
            body: [
              "Собирайте согласия на коммуникации и храните источники согласия.",
              "Уважайте «отписку» и предпочтения клиента по каналам/времени.",
              "Не стимулируйте отзывы подарками/скидками - это нарушает правила платформ и бьёт по доверию.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Когда ждать эффект?",
            body: "Первые сдвиги обычно видны за 2–4 недели: растёт число отзывов и CTR карточки. Устойчивый эффект - за 1–3 месяца.",
          },
        ],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleReviewsSmsEmailChecklist",
    steps: [
      {
        id: "reviews-sms-email-checklist",
        title: "",
        description: "",
        items: [
          "Создайте короткую ссылку/мини‑лендинг для отзывов.",
          "Запустите двухуровневый сценарий: «доволен» → карты, «недоволен» → менеджер.",
          "Подготовьте короткие шаблоны SMS и Email.",
          "Настройте тайминги (6–24 ч, повтор 3–5 дней) и ограничение касаний.",
          "Ставьте UTM и метрики, отслеживайте рейтинг/тональности.",
          "Соблюдайте согласия и этику - только честные отзывы.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Automated review requests via text and email: why it matters, what to expect, and how to set it up",
    lead: [
      "A consistent review request system is a foundation for local visibility and trust. Automated text and email follow-ups create a steady flow of fresh reviews, support ratings, and improve conversion.",
      "Here’s what to expect and how to implement it without common mistakes.",
    ],
    sections: [
      {
        title: "Why text/email review requests work",
        blocks: [
          {
            title: "1. More reviews (consistently)",
            body: "Most customers are willing to share feedback-they just forget. A short follow-up makes it easy.",
          },
          {
            title: "2. More trust and better conversion",
            body: "Listings with fresh reviews tend to convert better. In many categories, staying above ~4.6 with recent feedback helps.",
          },
          {
            title: "3. Activity signal",
            body: "Regular reviews signal an active business to Google and other local platforms.",
          },
          {
            title: "4. Catch negative feedback privately",
            body: "A two-step flow can route unhappy customers to a manager before they post publicly.",
          },
          {
            title: "5. Automation",
            body: "Set it up once-then it runs with minimal manual work.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Rating lift over time when service quality is strong.",
              "More total reviews and written feedback.",
              "More profile actions (calls, clicks, directions).",
              "Less damage from isolated negative reviews.",
            ],
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Sending a raw long link-use a branded short link or a simple landing page.",
              "Overly long messages.",
              "Asking before the service is delivered.",
              "Ignoring opt-in/consent and customer preferences.",
              "Messaging too soon-give customers time to form an opinion.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step setup",
        blocks: [
          {
            title: "Step 1 - Create a review link hub",
            body: "Use a branded short URL (e.g., yourdomain.com/review) that redirects to your review options. A small landing page with buttons works best.",
          },
          {
            title: "Step 2 - Two-step flow",
            body: "On the landing page: 👍 ‘Happy’ → review links; 👎 ‘Not happy’ → a manager contact form. This reduces public negatives.",
          },
          {
            title: "Step 3 - Write templates",
            body: [
              "Text: “Thanks for visiting {Business Name}! If you have a moment, please leave a quick review: {link}”",
              "Email: Subject: “We’d love your feedback” Body: “Thanks for choosing {Business Name}. Please share your experience here: {link}”",
            ],
          },
          {
            title: "Step 4 - Timing",
            body: [
              "First message: 6–24 hours after the appointment/order.",
              "Follow-up (if no action): 3–5 days later.",
              "Limit to 2–3 touches per visit.",
            ],
          },
          {
            title: "Step 5 - Personalization",
            body: "Use the customer’s name and service when possible. Respect preferred channel (text vs email).",
          },
          {
            title: "Step 6 - Measurement",
            body: [
              "Link clicks (UTM, short links) and review conversion.",
              "Rating trend and sentiment distribution.",
              "Response time for the ‘not happy’ branch.",
            ],
          },
        ],
      },
      {
        title: "Tools and integrations",
        blocks: [
          {
            body: [
              "CRM triggers after closed jobs/appointments.",
              "Transactional email provider + SMS gateway with link tracking.",
              "A review hub page linking to Google and other relevant platforms.",
              "Manager scripts and SLAs for unhappy customers.",
            ],
          },
        ],
      },
      {
        title: "Legal and ethics",
        blocks: [
          {
            body: [
              "Collect consent for messaging and store proof.",
              "Honor opt-outs and quiet hours.",
              "Never offer gifts/discounts for reviews-most platforms prohibit incentives.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "When will you see impact?",
            body: "Early movement often shows in 2–4 weeks. More stable results typically take 1–3 months.",
          },
        ],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleReviewsSmsEmailChecklist",
    steps: [
      {
        id: "reviews-sms-email-checklist",
        title: "",
        description: "",
        items: [
          "Create a branded short link or a review hub page.",
          "Implement a two-step flow: happy → reviews, unhappy → manager.",
          "Write short text and email templates.",
          "Set timing (6–24h + follow-up 3–5 days) and limit touches.",
          "Track via UTM and link analytics.",
          "Respect opt-in/consent and keep it ethical.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "איסוף ביקורות עם הודעות SMS ואימייל: למה זה חשוב ואיך מגדירים נכון",
    lead: [
      "מערכת עקבית לבקשת ביקורות היא בסיס לאמון ונראות מקומית. הודעות SMS ואימייל אחרי שירות מייצרות זרימה יציבה של משוב עדכני ותומכות בהמרות.",
      "להלן מה לצפות ואיך להגדיר בלי טעויות נפוצות.",
    ],
    sections: [
      {
        title: "למה זה עובד",
        blocks: [
          {
            title: "1. יותר ביקורות בצורה יציבה",
            body: "רוב הלקוחות מוכנים להשאיר משוב-פשוט שוכחים. תזכורת קצרה פותרת את זה.",
          },
          {
            title: "2. יותר אמון",
            body: "כרטיס עם ביקורות טריות לרוב ממיר טוב יותר.",
          },
          {
            title: "3. מסלול שלילי לערוץ פרטי",
            body: "תהליך דו‑שלבי מאפשר להעביר לקוחות לא מרוצים למנהל לפני שהם מפרסמים בפומבי.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [
          {
            body: "השתמשו בצ׳ק־ליסט למטה כדי להגדיר את התהליך.",
          },
        ],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleReviewsSmsEmailChecklist",
    steps: [
      {
        id: "reviews-sms-email-checklist",
        title: "",
        description: "",
        items: [
          "ליצור לינק ממותג/עמוד ביקורות.",
          "להפעיל תהליך דו‑שלבי: מרוצה → ביקורות, לא מרוצה → מנהל.",
          "להכין תבניות קצרות ל‑SMS ואימייל.",
          "להגדיר תזמון ולהגביל מספר הודעות.",
          "למדוד עם UTM ואנליטיקס.",
          "לכבד הסכמות ו‑opt-out.",
        ],
      },
    ],
  },
};

export default content;
