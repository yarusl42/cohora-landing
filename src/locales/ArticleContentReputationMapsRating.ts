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
      "Повышение рейтинга в картах: зачем это нужно, чего ожидать и как это правильно делать",
    lead: [
      "Рейтинг и отзывы в Google Maps, 2ГИС и других сервисах - один из ключевых факторов выбора компании. Высокий рейтинг с большим количеством отзывов даёт стабильный поток клиентов без рекламы, а низкий - отпугивает даже при хорошем сервисе.",
      "Ниже - зачем повышать рейтинг, каких результатов ожидать и как делать это безопасно и эффективно.",
    ],
    checklistTitle: "Чек‑лист",
    checklistItems: [
      "Приведите карточку в порядок: данные, фото, услуги.",
      "Запустите системный сбор отзывов у реальных клиентов.",
      "Быстро и профессионально отвечайте на негатив.",
      "Мотивируйте довольных клиентов делиться опытом (без стимулов).",
      "Следите за динамикой рейтинга и внедряйте изменения в сервисе.",
    ],
    sections: [
      {
        title: "Зачем нужно повышать рейтинг в картах",
        blocks: [
          {
            title: "1. Рейтинг формирует первое впечатление",
            body: "При выборе кафе в Минске, клиники в районе, СТО в Гомеле или салона красоты в Бресте пользователь в первую очередь смотрит на среднюю оценку и количество отзывов. Компании с рейтингом 4.5+ обычно получают заметно больше кликов и обращений, чем бизнесы с 3.5 и ниже.",
          },
          {
            title: "2. Рейтинг влияет на позиции",
            body: "Карты учитывают не только расстояние и релевантность, но и качество карточки. Рейтинг, свежесть отзывов и активность владельца часто коррелируют с более высокой видимостью.",
          },
          {
            title: "3. Рейтинг влияет на конверсию в визит",
            body: "При одинаковом расположении и описании пользователь чаще выбирает компанию с более высоким рейтингом и большим числом отзывов.",
          },
          {
            title: "4. Высокий рейтинг повышает доверие",
            body: "Компании с рейтингом 4.6–4.9 воспринимаются как более надёжные и профессиональные. Рейтинг становится репутационным активом.",
          },
          {
            title: "5. Органический рост без рекламы",
            body: "Хороший рейтинг часто снижает необходимость в рекламе: карточку чаще выбирают и активнее рекомендуют.",
          },
        ],
      },
      {
        title: "Чего ожидать от повышения рейтинга",
        blocks: [
          {
            body: [
              "Рост числа звонков, переходов на сайт и запросов маршрута.",
              "Улучшение позиций карточки в локальной выдаче.",
              "Лучшее соотношение просмотров к визитам: меньше сомнений у клиентов.",
              "Укрепление доверия к бренду.",
              "Меньшая чувствительность к единичным негативным отзывам при большом объёме положительных.",
            ],
          },
        ],
      },
      {
        title: "Как правильно повышать рейтинг: пошаговый подход",
        blocks: [
          {
            title: "Шаг 1. Оптимизируйте карточку компании",
            body: "Заполните карточку на 100%: адрес, график, телефон, сайт, услуги, фото, категории. Актуальная и аккуратно оформленная карточка повышает доверие ещё до работы с рейтингом.",
          },
          {
            title: "Шаг 2. Начните системно собирать отзывы",
            body: "Отзывы должны быть от реальных клиентов. Используйте QR‑коды, сообщения, просьбы после оказания услуги. Никаких накруток - это риск блокировок и потери доверия.",
          },
          {
            title: "Шаг 3. Работайте с негативом",
            body: "Быстро реагируйте: благодарите за обратную связь, извиняйтесь при необходимости, предлагайте решение и переводите диалог в личный канал. Спокойный ответ часто снижает эффект негатива.",
          },
          {
            title: "Шаг 4. Просите довольных клиентов делиться опытом",
            body: "Нельзя покупать отзывы или предлагать вознаграждения, но можно корректно и регулярно просить поделиться мнением.",
          },
          {
            title: "Шаг 5. Анализируйте динамику",
            body: "Отслеживайте средний балл, количество отзывов, распределение оценок и темы комментариев. Это помогает улучшать сервис и коммуникацию.",
          },
        ],
      },
      {
        title: "Практические советы и частые ошибки",
        blocks: [
          {
            title: "Советы",
            body: [
              "Фокусируйтесь на качестве сервиса - рейтинг всегда следствие реального опыта.",
              "Автоматизируйте сбор отзывов (CRM, сообщения) после визита/покупки.",
              "Отвечайте на все отзывы, а не только на негатив.",
              "Используйте отзывы в маркетинге: на сайте, в соцсетях, в презентациях.",
            ],
          },
          {
            title: "Ошибки",
            body: [
              "Накрутка и покупка отзывов - риск потери карточки и доверия.",
              "Игнорирование негатива или агрессивные ответы.",
              "Просьбы об отзыве до оказания услуги.",
              "Хаотичные попытки «подкрутить рейтинг» вместо системы.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "До какого рейтинга нужно стремиться?",
            body: "Оптимальный диапазон - 4.5–4.9. «Идеальные» 5.0 с малым числом отзывов часто выглядят подозрительно.",
          },
          {
            title: "Как быстро можно увидеть результат?",
            body: "При активной и честной работе первые изменения заметны за 2–8 недель, устойчивый эффект - в горизонте 2–6 месяцев.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Improving your rating on maps: why it matters and how to do it right",
    lead: [
      "Ratings and reviews on platforms like Google Maps are a major decision factor. A strong rating with steady review volume can drive consistent calls and visits, while a weak rating can kill conversion even if your service is good.",
      "This guide covers what to expect and how to improve ratings safely and sustainably.",
    ],
    checklistTitle: "Checklist",
    checklistItems: [
      "Clean up your listing: accurate info, photos, services.",
      "Build a consistent flow of reviews from real customers.",
      "Respond to negative reviews quickly and professionally.",
      "Encourage happy customers to share their experience (no incentives).",
      "Track rating trends and improve the service behind the reviews.",
    ],
    sections: [
      {
        title: "Why your map rating matters",
        blocks: [
          {
            title: "1. First impression",
            body: "In many categories, people decide based on the star rating and review count before clicking a website. A 4.5+ profile generally earns more clicks than a 3.5 profile.",
          },
          {
            title: "2. Visibility impact",
            body: "Maps rankings depend on relevance and distance, but engagement signals (reviews, responses, profile quality) often correlate with better visibility.",
          },
          {
            title: "3. Conversion",
            body: "All else equal, customers choose the higher-rated business with more reviews.",
          },
          {
            title: "4. Trust and loyalty",
            body: "A strong rating becomes a reputation asset that lowers acquisition costs.",
          },
          {
            title: "5. Organic growth",
            body: "Better ratings reduce reliance on paid ads by improving selection rate.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "More calls, website clicks, and direction requests.",
              "Improved local visibility.",
              "Higher conversion from views to visits.",
              "Stronger brand trust.",
              "Less sensitivity to a single negative review once volume is healthy.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step approach",
        blocks: [
          {
            title: "Step 1. Optimize the listing",
            body: "Complete your listing: address, hours, phone, website, services, photos, categories. A clean listing improves trust before reviews.",
          },
          {
            title: "Step 2. Collect reviews consistently",
            body: "Use QR codes, follow-ups, and post-service asks. Avoid fake reviews-high risk and low trust.",
          },
          {
            title: "Step 3. Handle negative reviews",
            body: "Respond quickly, acknowledge the issue, offer a resolution, and move to a private channel when needed.",
          },
          {
            title: "Step 4. Encourage happy customers (policy-safe)",
            body: "Don’t pay for reviews or offer incentives. Ask politely and make it easy.",
          },
          {
            title: "Step 5. Track trends",
            body: "Monitor rating, volume, and recurring themes. Fix operational issues that drive negatives.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "What rating should you aim for?",
            body: "A realistic target is 4.5–4.9. A perfect 5.0 with very few reviews can look suspicious.",
          },
          {
            title: "How fast can you see results?",
            body: "Early signals can improve in 2–8 weeks. Sustainable impact often takes 2–6 months.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "שיפור דירוג במפות: למה זה חשוב ואיך עושים נכון",
    lead: [
      "דירוגים וביקורות במפות הם גורם החלטה מרכזי. דירוג גבוה עם זרימה קבועה של ביקורות יכול להביא יותר שיחות וביקורים, ודירוג נמוך יכול לפגוע בהמרות.",
    ],
    checklistTitle: "צ׳ק־ליסט",
    checklistItems: [
      "לסדר את הכרטיס: פרטים, תמונות ושירותים.",
      "לבנות זרימה קבועה של ביקורות מלקוחות אמיתיים.",
      "להגיב מהר ובמקצועיות לשלילי.",
      "לעודד לקוחות מרוצים לשתף (בלי תמריצים).",
      "לעקוב אחרי מגמות ולשפר את השירות.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "רושם ראשון",
            body: "רבים מחליטים לפי דירוג ומספר ביקורות עוד לפני כניסה לאתר.",
          },
          {
            title: "המרה ואמון",
            body: "דירוג גבוה מעלה אמון ומגדיל סיכוי לפנייה.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "לאיזה דירוג לשאוף?",
            body: "לרוב 4.5–4.9 הוא יעד טוב. 5.0 עם מעט ביקורות יכול להיראות חשוד.",
          },
        ],
      },
    ],
  },
};

export default content;
