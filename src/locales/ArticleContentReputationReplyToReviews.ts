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
      "Ответы на отзывы в картах и соцсетях: зачем это нужно, чего ожидать и как делать правильно",
    lead: [
      "Онлайн‑отзывы - один из главных факторов доверия и выбора. Активные, грамотные ответы повышают кликабельность карточки, улучшают рейтинги и конверсию, помогают нейтрализовать негатив и превращать его в лояльность.",
      "Ниже - зачем отвечать, чего ожидать и как построить процесс ответов, который работает на репутацию и продажи.",
    ],
    sections: [
      {
        title: "Зачем отвечать на отзывы",
        blocks: [
          {
            title: "1. Показать, что бизнес «живой»",
            body: "Пустые карточки с отзывами многолетней давности и без ответов вызывают сомнения. Регулярные ответы демонстрируют заботу и присутствие - это первый шаг к доверию.",
          },
          {
            title: "2. Повысить доверие и конверсию",
            body: "Компании, активно отвечающие на отзывы, получают больше переходов и звонков: пользователи выбирают бренды, которые слышат клиентов и реагируют на обратную связь.",
          },
          {
            title: "3. Усилить локальное SEO",
            body: "Для Google и других карт ответы - сигнал активности: как и фото/посты/товары, это повышает полезность профиля и помогает видимости в локальной выдаче.",
          },
          {
            title: "4. Нейтрализовать негатив и извлекать пользу",
            body: "Правильный ответ снижает напряжение, показывает зрелость компании и иногда приводит к изменению оценки. Игнорирование - путь к эскалации и потере клиентов.",
          },
          {
            title: "5. Получать инсайты о сервисе",
            body: "Отзывы - бесплатная аналитика. Системные ответы и разбор тем помогают улучшать процессы и продукт.",
          },
        ],
      },
      {
        title: "Чего ожидать при запуске активной коммуникации",
        blocks: [
          {
            body: [
              "Больше новых отзывов: пользователям легче писать там, где их слышат.",
              "Рост средней оценки за счёт роста доли позитивных отзывов.",
              "Снижение числа жалоб при быстрой и корректной реакции.",
              "Рост конверсии карточки: больше звонков, переходов на сайт, заявок.",
              "Иногда - сложные диалоги: важна готовность к спокойной, профессиональной коммуникации.",
            ],
          },
        ],
      },
      {
        title: "Как отвечать на позитивные отзывы",
        blocks: [
          {
            body: "Ошибка - сухое «спасибо». Идеальный ответ персонализирован, подчёркивает ценности и приглашает вернуться.",
          },
          {
            body: [
              "Обращение по имени: «Анна, благодарим вас за отзыв!»",
              "Короткая искренняя благодарность: «Рады, что вам понравилось обслуживание».",
              "Подчёркивание детали: «Мы уделяем много внимания скорости обслуживания».",
              "Приглашение/CTA: «Будем рады видеть вас снова!»",
            ],
          },
          {
            body: "Пример: «Анна, огромное спасибо за тёплые слова! Мы стараемся делать сервис комфортным и быстрым - рады, что вы это отметили. Приходите снова - будем рады помочь!»",
          },
        ],
      },
      {
        title: "Как отвечать на негативные отзывы",
        blocks: [
          {
            body: "Главные ошибки: оправдания, спор, эмоции, попытка доказать правоту. Нужны спокойствие, признание эмоций, краткие факты и перевод общения в личный канал.",
          },
          {
            body: [
              "Спокойствие и профессионализм: пауза перед ответом.",
              "Признание эмоций: «Понимаем ваше недовольство» - половина успеха.",
              "Короткие факты без агрессии: по делу, без «простыней».",
              "Личный диалог: «Напишите нам, чтобы решить вопрос лично».",
            ],
          },
          {
            body: [
              "Конструкция: «Спасибо → Сочувствие → Решение → Приглашение».",
              "Пример: «Алексей, спасибо за обратную связь и простите за ситуацию. Мы уже разбираемся с командой. Пожалуйста, свяжитесь с нами по телефону ХХХ - постараемся компенсировать неудобства и решить вопрос.»",
            ],
          },
        ],
      },
      {
        title: "Сценарии, шаблоны и регламенты",
        blocks: [
          {
            title: "Мини‑регламент ответов",
            body: [
              "Срок реакции: до 24–48 часов. На негатив - быстрее.",
              "Тон: вежливо, по делу, без шаблонных «канцеляризмов» и маркетинга.",
              "Факты и решения вместо «виноват/невиноват».",
              "Никаких персональных данных в публичных ответах - только в личных сообщениях.",
            ],
          },
          {
            title: "Шаблоны: позитив/нейтрал/негатив",
            body: [
              "Позитив: «Имя, спасибо! Деталь/ценность. Приглашение/CTA».",
              "Нейтрал: «Имя, спасибо за оценку/замечание. Мы учтём деталь X. Будем рады видеть вас снова».",
              "Негатив: «Имя, спасибо. Сожалеем о ситуации. Мы разбираемся/готовы исправить. Связаться по каналу Y».",
            ],
          },
          {
            title: "Эскалация и сложные случаи",
            body: "Для конфликтных диалогов полезен отдельный сценарий с участием ответственного менеджера. Сохраняйте спокойствие и предлагайте конкретные шаги: диагностика, замена, возврат, скидка, компенсация - по внутренним правилам.",
          },
        ],
      },
      {
        title: "Где и как отвечать: карты и соцсети",
        blocks: [
          {
            body: [
              "Карты (Google Maps, 2ГИС): отвечайте в интерфейсе карточки, включите уведомления.",
              "Соцсети: Facebook/Instagram/VK/Telegram - кратко, по делу, без «переноса спора» в публичное поле.",
              "Площадки‑отзовики: держите тон одинаковым, давайте фактуру, а не эмоции.",
              "Сайт: публикуйте кейсы «как мы исправили ситуацию» - это повышает доверие.",
            ],
          },
        ],
      },
      {
        title: "Ошибки и что нельзя делать",
        blocks: [
          {
            body: [
              "Игнорировать отзывы - особенно негатив.",
              "Переубеждать клиента и спорить «кто прав».",
              "Переходить на личности, публиковать персональные данные.",
              "Копировать шаблоны без персонализации.",
              "Удалять/скрывать правдивый негатив вместо решения причины.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Как быстро отвечать?",
            body: "В идеале - в день публикации, на негатив - в течение нескольких часов. Включите уведомления и назначьте ответственных.",
          },
          {
            title: "Можно ли просить изменить оценку?",
            body: "Если вы исправили ситуацию и клиент доволен, мягкая просьба уместна: «Если вам не сложно, обновите, пожалуйста, оценку - это помогает нам расти». Никакого давления и тем более «покупки» отзывов.",
          },
        ],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleReplyToReviewsChecklist",
    steps: [
      {
        id: "reply-to-reviews-checklist",
        title: "",
        description: "",
        items: [
          "Назначьте ответственность и сроки ответа.",
          "Используйте структуру ответов (спасибо → сочувствие → решение → приглашение).",
          "Пишите кратко, персонально, без эмоций и споров.",
          "Переводите сложные разговоры в личные каналы.",
          "Собирайте инсайты и исправляйте корневые причины негатива.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "How to reply to reviews on Google Maps and social media: why it matters, what to expect, and how to do it right",
    lead: [
      "Online reviews are one of the strongest trust signals. Clear, consistent replies can improve profile click-through, support conversion, reduce the impact of negative feedback, and turn complaints into loyalty.",
      "Below is a practical framework for building a reply process that supports reputation and sales.",
    ],
    sections: [
      {
        title: "Why replying to reviews matters",
        blocks: [
          {
            title: "1. Show you’re active and present",
            body: "Profiles with old reviews and no owner replies feel abandoned. Consistent replies are a quick credibility signal.",
          },
          {
            title: "2. Improve trust and conversion",
            body: "Businesses that reply get more calls and visits because customers see you take feedback seriously.",
          },
          {
            title: "3. Support local visibility",
            body: "For Google Business Profile, owner activity (including replies) is a strong engagement signal-along with photos, posts, and updates.",
          },
          {
            title: "4. Reduce negative impact",
            body: "A professional response can de-escalate tension and sometimes even lead to an updated rating. Ignoring issues increases churn.",
          },
          {
            title: "5. Turn reviews into product insights",
            body: "Reviews are free research. Patterns in feedback often highlight the root causes you should fix.",
          },
        ],
      },
      {
        title: "What to expect once you start replying consistently",
        blocks: [
          {
            body: [
              "More new reviews: people write more when they feel heard.",
              "Rating improvement over time as positive share grows.",
              "Fewer escalations when issues are handled fast.",
              "Better conversion: more calls, direction requests, and site visits.",
              "Occasionally tough conversations-stay calm and professional.",
            ],
          },
        ],
      },
      {
        title: "How to reply to positive reviews",
        blocks: [
          {
            body: "A generic ‘Thanks!’ is a missed opportunity. A strong reply is short, personal, and invites the customer back.",
          },
          {
            body: [
              "Use their name.",
              "Say a genuine thank-you.",
              "Reference a specific detail.",
              "Add a simple invitation/CTA.",
            ],
          },
          {
            body: "Example: “Anna, thank you for the kind words! We’re glad you noticed our fast service. We’d love to see you again anytime.”",
          },
        ],
      },
      {
        title: "How to reply to negative reviews",
        blocks: [
          {
            body: "Common mistakes: arguing, over-explaining, emotional tone. Instead: acknowledge, stay factual, and move the conversation to a private channel.",
          },
          {
            body: [
              "Pause before replying.",
              "Acknowledge feelings.",
              "Share a short factual statement.",
              "Offer a private resolution path.",
            ],
          },
          {
            body: [
              "Structure: “Thank you → Empathy → Fix → Invitation”.",
              "Example: “Alex, thank you for the feedback-sorry about your experience. We’re reviewing this internally. Please call/text us at XXX so we can make it right.”",
            ],
          },
        ],
      },
      {
        title: "Templates and internal rules",
        blocks: [
          {
            title: "A simple response policy",
            body: [
              "Response time: within 24–48 hours (faster for negatives).",
              "Tone: polite, short, and human-no corporate fluff.",
              "Focus on solutions, not blame.",
              "Never share personal data publicly.",
            ],
          },
          {
            title: "Templates: positive / neutral / negative",
            body: [
              "Positive: “Name, thank you! Detail/value. Invitation/CTA.”",
              "Neutral: “Name, thanks for the note. We’ll improve X. Hope to see you again.”",
              "Negative: “Name, thank you. Sorry about this. We’re investigating. Please contact us via Y.”",
            ],
          },
          {
            title: "Escalation",
            body: "For complex cases, route to a responsible manager. Offer clear steps: inspection, replacement, refund, discount, or compensation-based on your policy.",
          },
        ],
      },
      {
        title: "Where to reply: maps, social, and review sites",
        blocks: [
          {
            body: [
              "Maps: reply inside your Google Business Profile dashboard and keep notifications on.",
              "Social media: Facebook/Instagram-keep it short and avoid public arguments.",
              "Review platforms: stay consistent and factual.",
              "Your site: publish ‘how we fixed it’ cases to build trust.",
            ],
          },
        ],
      },
      {
        title: "Mistakes to avoid",
        blocks: [
          {
            body: [
              "Ignoring reviews (especially negative ones).",
              "Arguing with customers publicly.",
              "Sharing personal data.",
              "Copy-pasting templates without personalization.",
              "Trying to hide real issues instead of fixing the root cause.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How fast should you reply?",
            body: "Same day is ideal. For negative reviews-within a few hours when possible. Set up notifications and clear ownership.",
          },
          {
            title: "Can you ask someone to update their rating?",
            body: "If you fixed the issue and the customer is satisfied, a polite ask is fine. Don’t pressure and never offer incentives.",
          },
        ],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleReplyToReviewsChecklist",
    steps: [
      {
        id: "reply-to-reviews-checklist",
        title: "",
        description: "",
        items: [
          "Assign clear ownership and response SLAs.",
          "Use a consistent structure (thank you → empathy → fix → invitation).",
          "Keep it short, personal, and calm.",
          "Move complex cases to private channels.",
          "Track insights and fix root causes.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "איך להגיב לביקורות במפות וברשתות חברתיות: למה זה חשוב ואיך עושים נכון",
    lead: [
      "ביקורות אונליין הן אחד ממנועי האמון החזקים ביותר. תגובה עקבית ומקצועית יכולה לשפר אמון, להגדיל פניות, ולהקטין נזק מביקורת שלילית.",
      "להלן מסגרת עבודה פשוטה לבניית תהליך תגובות שמחזק מוניטין ומכירות.",
    ],
    sections: [
      {
        title: "למה חשוב להגיב לביקורות",
        blocks: [
          {
            title: "1. להראות שהעסק פעיל",
            body: "כרטיס עם ביקורות ישנות וללא תגובות נראה נטוש. תגובות קבועות יוצרות אמון.",
          },
          {
            title: "2. לחזק אמון והמרות",
            body: "כשלקוחות רואים שאתם מגיבים, הם מרגישים שיש עם מי לדבר-וזה מעלה סיכוי לפנייה.",
          },
          {
            title: "3. לתמוך בנראות מקומית",
            body: "ב‑Google פעילות של בעל העסק (כולל תגובות) היא סיגנל מעורבות-יחד עם תמונות ועדכונים.",
          },
          {
            title: "4. לנטרל שלילי",
            body: "תגובה נכונה מורידה מתח ומראה אחריות. לפעמים זה גם מוביל לעדכון דירוג.",
          },
          {
            title: "5. ללמוד ולשפר",
            body: "ביקורות הן דאטה. אם מזהים נושאים חוזרים-זה בדרך כלל שורש בעיה שכדאי לתקן.",
          },
        ],
      },
      {
        title: "למה לצפות כשמתחילים להגיב באופן עקבי",
        blocks: [
          {
            body: [
              "יותר ביקורות חדשות.",
              "שיפור הדרגתי בדירוג.",
              "פחות הסלמות כאשר פותרים מהר.",
              "יותר פניות ושיחות.",
            ],
          },
        ],
      },
      {
        title: "איך מגיבים לביקורות חיוביות",
        blocks: [
          {
            body: "אל תסתפקו ב‘תודה’. תגובה טובה היא קצרה, אישית, ומזמינה לחזור.",
          },
          {
            body: [
              "לפנות בשם.",
              "להודות באמת.",
              "להתייחס לפרט ספציפי.",
              "להוסיף הזמנה/CTA.",
            ],
          },
        ],
      },
      {
        title: "איך מגיבים לביקורות שליליות",
        blocks: [
          {
            body: "לא להתווכח. להכיר בתחושה, להיות ענייניים, ולהציע מעבר לערוץ פרטי.",
          },
          {
            body: [
              "לעצור רגע לפני תגובה.",
              "להכיר בתחושה.",
              "לתת עובדות קצרות.",
              "להציע פתרון בערוץ פרטי.",
            ],
          },
        ],
      },
      {
        title: "איפה מגיבים",
        blocks: [
          {
            body: [
              "מפות: להגיב דרך Google Business Profile ולהפעיל התראות.",
              "רשתות חברתיות: פייסבוק/אינסטגרם-קצר וללא ויכוחים פומביים.",
              "אתרי ביקורות: עקביות וטון ענייני.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "תוך כמה זמן להגיב?",
            body: "כדאי באותו היום. לשלילי-כמה שיותר מהר. להגדיר אחריות ברורה.",
          },
        ],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleReplyToReviewsChecklist",
    steps: [
      {
        id: "reply-to-reviews-checklist",
        title: "",
        description: "",
        items: [
          "להגדיר אחריות וזמני תגובה.",
          "להשתמש במבנה קבוע (תודה → אמפתיה → פתרון → הזמנה).",
          "לכתוב קצר, אישי וללא רגש.",
          "להעביר מקרים מורכבים לערוץ פרטי.",
          "ללמוד תובנות ולתקן שורשים.",
        ],
      },
    ],
  },
};

export default content;
