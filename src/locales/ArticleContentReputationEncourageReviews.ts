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
      "Как стимулировать клиентов оставлять отзывы: честная и эффективная система",
    lead: [
      "Отзывы - один из самых сильных инструментов доверия. Люди читают отзывы перед тем, как записаться на услугу или выбрать подрядчика, но оставляют их редко. В результате хороший сервис может выглядеть слабее конкурентов, у которых отзывов больше.",
      "Ниже - практические методы, как выстроить этичную систему сбора отзывов без накруток и нарушений правил площадок.",
    ],
    sections: [
      {
        title: "Зачем стимулировать клиентов к отзывам",
        blocks: [
          {
            title: "1. Доверие и конверсия",
            body: "Когда отзывов больше и они свежие, бизнес выглядит надёжнее. На фоне конкурентов с большим количеством отзывов карточка с 10 оценками проигрывает ещё до знакомства с сервисом.",
          },
          {
            title: "2. Видимость в картах и локальном поиске",
            body: "Платформы вроде Google Maps и 2ГИС учитывают активность профиля. Количество и свежесть отзывов, ответы владельца и взаимодействия пользователей влияют на видимость.",
          },
          {
            title: "3. Снижение влияния единичного негатива",
            body: "Один резкий негативный отзыв на фоне малого количества оценок сильно бьёт по восприятию. Когда поток отзывов стабилен, отдельные минусы воспринимаются как нормальная часть реальной картины.",
          },
          {
            title: "4. Улучшение качества сервиса",
            body: "Отзывы - это обратная связь. Стабильный поток мнений помогает понять, что нравится клиентам и что нужно улучшить.",
          },
        ],
      },
      {
        title: "Чего ожидать от внедрения системы",
        blocks: [
          {
            body: "Система не даёт результата за один день, но за 1–3 месяца может заметно изменить картину.",
          },
          {
            body: [
              "рост количества отзывов в несколько раз;",
              "рост доверия и обращений;",
              "стабильный поток новых отзывов без постоянных ручных просьб;",
              "часто - рост среднего рейтинга за счёт того, что довольным клиентам проще оставить отзыв.",
            ],
          },
        ],
      },
      {
        title: "Как стимулировать отзывы честно и эффективно",
        blocks: [
          {
            title: "1. Правильные прямые просьбы",
            body: "Люди чаще оставляют отзыв, если их попросить корректно. Лучше работает связка: благодарность → просьба → объяснение пользы.",
          },
          {
            title: "2. Прямые ссылки на форму отзыва",
            body: "Чем меньше шагов, тем выше конверсия. Вместо «найдите нас и оставьте отзыв» давайте прямую ссылку на форму. Для Google Business Profile это review link, для других площадок - прямая ссылка на раздел отзывов.",
          },
          {
            title: "3. QR‑коды для офлайн‑бизнеса",
            body: "Для салонов, клиник и кафе в Минске, Бресте и Гомеле хорошо работают QR‑коды на стойке, визитках, чеке или упаковке - с переходом прямо к форме отзыва.",
          },
          {
            title: "4. SMS и e‑mail напоминания",
            body: "Аккуратные напоминания после визита повышают долю отзывов. Важно соблюдать согласия на коммуникацию и не превращать сообщения в спам.",
          },
          {
            title: "5. Интеграция с CRM и онлайн‑записью",
            body: "Автоматическая отправка приглашений после закрытия визита/заказа снимает нагрузку с персонала и делает процесс системным.",
          },
          {
            title: "6. Мотивация без нарушения правил",
            body: "Многие площадки запрещают вознаграждение «за отзыв» или «за пятёрку». Вместо этого используйте мягкую мотивацию: объяснение ценности обратной связи, помощь другим клиентам, розыгрыш призов среди всех участников без привязки к оценке.",
          },
        ],
      },
      {
        title: "Типичные ошибки",
        blocks: [
          {
            title: "1. Накрутка и покупка отзывов",
            body: "Это риск санкций и потери доверия. Площадки распознают аномалии, а клиенты считывают «слишком идеальные» профили.",
          },
          {
            title: "2. Давление на клиентов",
            body: "Просьба должна быть мягкой, а отказ - допустимым. Давление часто вызывает негатив.",
          },
          {
            title: "3. Просить отзыв только у довольных",
            body: "Честная система предполагает готовность услышать разное. Иначе вы теряете сигнал о том, что улучшить.",
          },
          {
            title: "4. Не отвечать на отзывы",
            body: "Собирать отзывы и не отвечать - ошибка. Нужны благодарности за позитив и спокойные ответы по делу на негатив.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Стимуляция отзывов - не про манипуляции, а про то, чтобы реальный опыт клиентов стал видимым. Сделайте процесс простым, напоминайте уважительно и регулярно работайте с обратной связью - так вы получите устойчивый источник доверия и обращений.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "How to encourage customers to leave reviews: an ethical, effective system",
    lead: [
      "Reviews are one of the strongest trust signals. Customers rely on other people’s experience before booking a service or choosing a provider-but most happy customers don’t leave reviews unless you make it easy.",
      "This guide covers practical, policy-safe ways to increase review volume without fake reviews or pressure tactics.",
    ],
    sections: [
      {
        title: "Why review collection matters",
        blocks: [
          {
            title: "1. Trust and conversion",
            body: "Fresh reviews and a healthy volume make a business feel more established. When a competitor has hundreds of reviews and you have ten, customers often decide before they even contact you.",
          },
          {
            title: "2. Local visibility",
            body: "Platforms like Google can use review volume, recency, and owner responses as engagement signals. Better engagement often translates into more actions.",
          },
          {
            title: "3. Less impact from one negative review",
            body: "With a steady stream of honest reviews, a few negatives don’t dominate perception.",
          },
          {
            title: "4. Service improvement",
            body: "Reviews are feedback. A consistent inflow helps you find patterns and fix operational issues.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: "It’s not instant, but a simple system can change the picture in 1–3 months.",
          },
          {
            body: [
              "multiple times more reviews;",
              "higher trust and more inbound leads;",
              "a repeatable flow instead of ad-hoc asks;",
              "often, a rating lift because happy customers finally speak up.",
            ],
          },
        ],
      },
      {
        title: "Ethical ways to increase reviews",
        blocks: [
          {
            title: "1. Ask the right way",
            body: "A simple request works better when it’s framed with gratitude and a reason: it helps small businesses and helps other customers decide.",
          },
          {
            title: "2. Use direct review links",
            body: "Reduce friction. Send a direct link to your Google review form (or the exact review page on another platform) instead of asking customers to search for you.",
          },
          {
            title: "3. Use QR codes in-store",
            body: "For brick-and-mortar businesses (salons, clinics, restaurants), QR codes at the register or on receipts can drive a lot of reviews-if they open the review form directly.",
          },
          {
            title: "4. Follow-up texts and emails",
            body: "A polite follow-up after the visit increases response rate. Make sure you have consent and keep messaging non-spammy.",
          },
          {
            title: "5. CRM automation",
            body: "If you use a CRM or booking system, automate review requests after a closed appointment/order.",
          },
          {
            title: "6. Incentives without violating policies",
            body: "Many platforms prohibit ‘discount for a review’ or incentives tied to a 5-star rating. Safer options include emphasizing feedback value, or running a general giveaway not tied to rating.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            title: "1. Fake or purchased reviews",
            body: "Risky and often detectable. It can lead to removals, suspension, and trust damage.",
          },
          {
            title: "2. Pressuring customers",
            body: "Forcing someone to review ‘right now’ can backfire. Always make it optional.",
          },
          {
            title: "3. Only asking happy customers",
            body: "A healthy system should be fair and consistent, otherwise you lose valuable feedback.",
          },
          {
            title: "4. Not responding",
            body: "Collecting reviews without responding sends the wrong signal. Reply to positives and handle negatives professionally.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Review collection is about making real customer experience visible. Make it easy, ask respectfully, and respond consistently-then your reputation becomes a compounding growth asset.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "איך לעודד לקוחות להשאיר ביקורות: מערכת אתית ואפקטיבית",
    lead: [
      "ביקורות הן אחד מסיגנלי האמון החזקים ביותר. לקוחות קוראים ביקורות לפני החלטה, אבל לרוב לא משאירים אחת בלי תזכורת והנגשה.",
      "כאן תמצאו שיטות פרקטיות להגדלת ביקורות בצורה בטוחה ואתית.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "אמון והמרה",
            body: "יותר ביקורות טריות מגדילות אמון ומעלות סיכוי לפנייה.",
          },
          {
            title: "נראות מקומית",
            body: "פעילות וביקורות בכרטיס יכולות להשפיע על מעורבות.",
          },
        ],
      },
      {
        title: "שיטות מומלצות",
        blocks: [
          {
            title: "לבקש בצורה נכונה",
            body: "להודות, להסביר למה זה חשוב, ולהשאיר את זה אופציונלי.",
          },
          {
            title: "לינק ישיר ו‑QR",
            body: "להפחית צעדים: לינק ישיר לטופס + QR בעסק.",
          },
          {
            title: "מעקב ועדכונים",
            body: "להגיב לביקורות ולתחזק עקביות.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "להנגיש, לבקש בכבוד, ולהגיב בעקביות - זה בונה אמון לאורך זמן.",
          },
        ],
      },
    ],
  },
};

export default content;
