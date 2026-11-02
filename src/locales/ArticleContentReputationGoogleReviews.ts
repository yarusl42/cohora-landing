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
      "Повышение количества отзывов в Google: зачем это нужно, чего ожидать и как это правильно делать",
    lead: [
      "Отзывы в Google - один из самых сильных факторов доверия и важный элемент локального продвижения. Бизнес, который стабильно получает свежие отзывы, выглядит живым и надёжным; алгоритмы учитывают объём, частоту и качество отзывов.",
    ],
    checklistTitle: "Чек‑лист",
    checklistItems: [
      "Добавьте короткую ссылку на форму отзывов и QR‑код.",
      "Просите лично + отправляйте SMS/Email с коротким текстом.",
      "Не стимулируйте материально; соблюдайте правила и тайминг.",
      "Отвечайте на отзывы и анализируйте темы.",
      "Поддерживайте карточку фото/категориями/услугами/Q&A/записью.",
    ],
    sections: [
      {
        title: "Зачем увеличивать количество отзывов",
        blocks: [
          {
            title: "1. Рейтинг = фактор доверия №1",
            body: "Перед обращением многие пользователи открывают Google. Свежие отзывы создают впечатление устойчивости и качества.",
          },
          {
            title: "2. Рост позиций в локальной выдаче",
            body: "Алгоритмы учитывают количество, частоту, средний рейтинг и активность владельца (ответы).",
          },
          {
            title: "3. Повышение конверсии",
            body: "Часто выигрывает не «идеальная пятёрка», а «надёжная 4.7» с большим числом реальных отзывов.",
          },
          {
            title: "4. Устойчивость к негативу",
            body: "Один негатив заметнее при 15 отзывах, но почти теряется на фоне 150.",
          },
          {
            title: "5. Социальное доказательство",
            body: "Люди видят, что многие уже воспользовались вашей услугой - это снижает страх ошибки.",
          },
        ],
      },
      {
        title: "Чего ожидать при росте количества отзывов",
        blocks: [
          {
            body: [
              "Рост средней оценки за счёт вытеснения старого негатива.",
              "Больше кликов «Позвонить/Сайт/Маршрут».",
              "Рост доли клиентов «из Google».",
              "Появление некоторой доли негатива - это нормально.",
              "Больше повторяющихся тем - полезная аналитика для сервиса.",
            ],
          },
        ],
      },
      {
        title: "Рабочие методы увеличения отзывов (легальные)",
        blocks: [
          {
            title: "1. Личная просьба после визита",
            body: "Самый сильный канал - человеческое обращение: искренне, без давления, с коротким объяснением, почему это важно бизнесу.",
          },
          {
            title: "2. Короткая ссылка на форму",
            body: "Дайте прямую ссылку на форму отзывов и QR‑код. Чем меньше шагов - тем выше конверсия.",
          },
          {
            title: "3. Напоминания через SMS",
            body: "Часто лучше всего работают короткие SMS со ссылкой через 10–60 минут после визита.",
          },
          {
            title: "4. Напоминания через Email",
            body: "Конверсия ниже, но всё ещё значима. Важны естественный тон и понятная кнопка.",
          },
          {
            title: "5. Карточки/плакаты в точке",
            body: "QR‑код у выхода, на чеке или визитке - простой и эффективный триггер.",
          },
          {
            title: "6. Страница «Оставить отзыв» на сайте",
            body: "Сделайте страницу с кнопкой «Оставить отзыв в Google» и короткой инструкцией. Можно отслеживать UTM‑метки.",
          },
        ],
      },
      {
        title: "Чего нельзя делать",
        blocks: [
          {
            body: [
              "Покупать отзывы или стимулировать бонусами.",
              "Писать отзывы самому себе.",
              "Просить оценку до оказания услуги.",
              "Спамить напоминаниями.",
            ],
          },
        ],
      },
      {
        title: "Стратегия: как построить долгосрочную систему",
        blocks: [
          {
            body: [
              "Определите точки запроса отзыва: на кассе, после визита, в подтверждении, в мессенджере (в Беларуси популярны Telegram и Viber).",
              "Сделайте короткую ссылку и QR‑код и проверьте, что они ведут прямо на форму.",
              "Подготовьте скрипты (личная просьба, SMS, email).",
              "Настройте тайминги и ограничения касаний.",
              "Назначьте ответственных за мониторинг и ответы.",
              "Отслеживайте метрики и ежемесячно корректируйте процесс.",
            ],
          },
        ],
      },
      {
        title: "Связанные практики для максимального эффекта",
        blocks: [
          {
            body: [
              "Ответы на отзывы.",
              "Синхронизация репутации: сайт и карточки.",
              "Q&A и онлайн‑запись.",
              "Фото/категории/услуги.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Когда ждать эффект?",
            body: "Первые сдвиги обычно видны за 2–4 недели, устойчивый результат - 1–3 месяца при регулярной работе.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Getting more Google reviews: why it matters, what to expect, and how to do it right",
    lead: [
      "Google reviews are one of the strongest trust factors in local marketing. Businesses that consistently earn fresh reviews look more credible, and review volume/recency often correlates with more calls and visits.",
    ],
    checklistTitle: "Checklist",
    checklistItems: [
      "Create a direct Google review link and a QR code.",
      "Ask in person + send a short follow-up text/email.",
      "Don’t offer incentives; follow platform policies and timing.",
      "Reply to reviews and analyze themes.",
      "Keep your profile strong: photos, categories, services, Q&A, booking.",
    ],
    sections: [
      {
        title: "Why more reviews help",
        blocks: [
          {
            title: "1. Ratings drive trust",
            body: "Before booking, most customers check Google. Fresh reviews signal activity and quality.",
          },
          {
            title: "2. Local visibility",
            body: "Review volume, recency, rating, and owner responses are strong engagement signals.",
          },
          {
            title: "3. Conversion",
            body: "A ‘reliable 4.7 with volume’ often converts better than a perfect 5.0 with few reviews.",
          },
          {
            title: "4. Negative resilience",
            body: "One bad review matters less when you have a steady flow.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "More calls and direction requests.",
              "Higher click-through from local results.",
              "More feedback themes you can use to improve service.",
            ],
          },
        ],
      },
      {
        title: "Legal methods that work",
        blocks: [
          {
            title: "1. Ask right after the visit",
            body: "A polite ask with a clear reason works best.",
          },
          {
            title: "2. Use a direct review link",
            body: "Reduce friction: send customers straight to the review form.",
          },
          {
            title: "3. Text follow-ups",
            body: "Short texts shortly after the appointment often convert well.",
          },
          {
            title: "4. In-store QR codes",
            body: "Place QR codes at checkout/receipts to open the review form.",
          },
          {
            title: "5. A ‘Leave a review’ page on your site",
            body: "Add a page with your review link and basic instructions.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "When will you see impact?",
            body: "Early movement often shows in 2–4 weeks. More stable results usually take 1–3 months.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "איך להגדיל ביקורות ב‑Google: למה זה חשוב ואיך עושים נכון",
    lead: [
      "ביקורות ב‑Google הן סיגנל אמון חזק. זרימה עקבית של ביקורות חדשות מעלה אמון ולעיתים מתרגמת ליותר שיחות והגעה.",
    ],
    checklistTitle: "צ׳ק־ליסט",
    checklistItems: [
      "ליצור לינק ישיר לביקורת ו‑QR.",
      "לבקש פנים‑אל‑פנים + לשלוח הודעת תזכורת קצרה.",
      "לא לתת תמריצים; לשמור על כללים.",
      "להגיב לביקורות.",
      "לתחזק את הכרטיס בתמונות ופרטים.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            body: "יותר ביקורות אמיתיות מגדילות אמון ומקלות על החלטה.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "מתי רואים תוצאה?",
            body: "לרוב 2–4 שבועות לתזוזה ראשונית ו‑1–3 חודשים לתוצאה יציבה.",
          },
        ],
      },
    ],
  },
};

export default content;
