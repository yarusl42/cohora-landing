export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  checklistTitle: string;
  checklistItems: string[];
  sections: ArticleSection[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Интеграция отзывов с сайта в карточки: зачем это нужно, чего ожидать и как делать правильно",
    lead: [
      "Если вы активно собираете отзывы на сайте, логичный следующий шаг - перенести эту социальную доказательную базу в карточки Google и 2ГИС. Именно там пользователи часто принимают решение о выборе ещё до перехода на сайт.",
      "Правильная интеграция повышает доверие, CTR, локальные позиции и конверсию.",
    ],
    checklistTitle: "Чек‑лист",
    checklistItems: [
      "Разметьте отзывы с сайта, удалите дубли и слабые записи.",
      "Запустите мягкие/автоматизированные запросы на дублирование в карты.",
      "Публикуйте постепенно, миксуя форматы и темы.",
      "Отвечайте на каждый отзыв, особенно на негатив.",
      "Мерьте CTR/клики/показы, корректируйте процесс.",
    ],
    sections: [
      {
        title: "Зачем интегрировать отзывы с сайта в карточки",
        blocks: [
          {
            title: "1. Больше доверия",
            body: "Отзывы на сайте важны, но внешним платформам часто доверяют сильнее. Масштабирование отзывов в картах повышает доверие.",
          },
          {
            title: "2. Рост CTR и локальной видимости",
            body: "Свежесть и объём отзывов влияют на кликабельность карточки и частоту показов в локальной выдаче.",
          },
          {
            title: "3. Больше конверсий",
            body: "Сильная карточка приводит больше целевых переходов, звонков и маршрутов при тех же затратах.",
          },
        ],
      },
      {
        title: "Чего ожидать после интеграции",
        blocks: [
          {
            body: [
              "Рост кликов за счёт доверия и объёма отзывов.",
              "Рост рейтинга (если отзывы качественные) и меньшая чувствительность к единичному негативу.",
              "Согласованная репутация: сайт и внешние площадки.",
            ],
          },
        ],
      },
      {
        title: "Как правильно интегрировать отзывы: пошаговый алгоритм",
        blocks: [
          {
            title: "Шаг 1. Аудит и подготовка базы",
            body: "Соберите отзывы с сайта, удалите дубли и подозрительные записи. Разметьте по типам: короткие/длинные, эмоциональные/фактологичные, по услугам. Нужна естественная лента.",
          },
          {
            title: "Шаг 2. Подготовка клиентов к переносу",
            body: "Просите клиента продублировать реальный опыт по прямой ссылке. Можно автоматизировать через CRM/Email/SMS с разумной частотой.",
          },
          {
            title: "Шаг 3. Публикация - постепенно и естественно",
            body: "Не публикуйте десятки отзывов в один день. Делайте равномерный график, миксуйте форматы и темы.",
          },
          {
            title: "Шаг 4. Качество и правила площадок",
            body: "Не используйте стимулирование «за отзыв», не публикуйте отзывы сотрудников, избегайте шаблонов. Факты и детали ценнее.",
          },
          {
            title: "Шаг 5. Ответы компании и модерация",
            body: "Отвечайте на каждый отзыв. Отслеживайте отклонённые публикации и корректируйте процесс.",
          },
          {
            title: "Шаг 6. Мониторинг эффекта",
            body: "Следите за динамикой: рейтинг, свежесть, клики «Позвонить/Маршрут/Сайт», показы в картах. Корректируйте темп.",
          },
        ],
      },
      {
        title: "Практические советы и частые ошибки",
        blocks: [
          {
            title: "Советы",
            body: [
              "Сначала приведите карточки в порядок (категории, NAP, фото), потом масштабируйте отзывы.",
              "Просите отзывы с текстом и по возможности с фото.",
              "Отмечайте в CRM клиентов, готовых к публичному отзыву.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Резкий массовый «вброс» отзывов - риски модерации.",
              "Шаблонные тексты без фактов.",
              "Игнорирование ответов и негатива.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Это допустимо правилами платформ?",
            body: "Просить клиента повторить свой реальный опыт - допустимо, если нет стимулирования и давления. Нельзя публиковать поддельные отзывы.",
          },
          {
            title: "Как быстро будет эффект?",
            body: "Первые изменения в CTR и кликах часто заметны через 2–8 недель при регулярной публикации и ответах.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Moving website testimonials into map listings: why it matters and how to do it safely",
    lead: [
      "If you already collect testimonials on your website, the next step is to turn that trust into public reviews where customers decide-your map listings. In the U.S., this usually means Google reviews first.",
      "Done correctly, this improves trust, click-through, and conversion without violating platform policies.",
    ],
    checklistTitle: "Checklist",
    checklistItems: [
      "Clean your website testimonials: remove duplicates and weak entries.",
      "Ask customers to repost their real experience on the map listing.",
      "Publish gradually and diversify topics.",
      "Respond to every review.",
      "Track clicks/CTR and adjust the process.",
    ],
    sections: [
      {
        title: "Why move reviews from your site to listings",
        blocks: [
          {
            title: "1. Higher trust",
            body: "People often trust third-party platforms more than on-site testimonials.",
          },
          {
            title: "2. Better visibility and CTR",
            body: "Review volume, recency, and rating influence click-through and local performance.",
          },
        ],
      },
      {
        title: "How to do it safely",
        blocks: [
          {
            title: "Step 1. Prepare your base",
            body: "Audit testimonials and keep a diverse mix of lengths, topics, and details.",
          },
          {
            title: "Step 2. Ask for a repost (no incentives)",
            body: "Thank the customer and ask them to post the same experience on Google via a direct link.",
          },
          {
            title: "Step 3. Pace the flow",
            body: "Avoid sudden spikes. A steady cadence looks natural.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Is this allowed?",
            body: "Asking customers to share their real experience is generally fine. Paying for reviews or posting fake reviews is not.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "העברת המלצות מהאתר לביקורות בכרטיסים: למה זה חשוב ואיך עושים נכון",
    lead: [
      "אם אתם אוספים המלצות באתר, שווה להפוך אותן לביקורות ציבוריות במקום שבו הלקוחות מחליטים בפועל.",
    ],
    checklistTitle: "צ׳ק־ליסט",
    checklistItems: [
      "לנקות כפילויות והמלצות חלשות.",
      "לבקש מהלקוחות לפרסם את החוויה שלהם בכרטיס.",
      "לעשות זאת בהדרגה.",
      "להגיב לביקורות.",
      "לעקוב אחרי השפעה.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            body: "ביקורות חיצוניות נתפסות כאמינות יותר מהמלצות באתר.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "זה מותר?",
            body: "לבקש מלקוח לפרסם חוויה אמיתית זה בסדר; תמריצים או זיופים אינם.",
          },
        ],
      },
    ],
  },
};

export default content;
