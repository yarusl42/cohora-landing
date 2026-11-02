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
      "Оптимизация сайта для мобильных устройств: зачем это нужно, чего ожидать и как правильно сделать",
    lead: [
      "Оптимизация под мобильные устройства давно перестала быть опцией «по желанию». При mobile‑first индексе Google и высокой доле мобильного трафика удобство и скорость сайта на телефоне напрямую влияют и на SEO, и на конверсию, и на доверие.",
      "Ниже разберём, зачем это нужно, каких результатов ждать и как подойти к мобильной версии системно.",
    ],
    sections: [
      {
        title: "Зачем нужна оптимизация под мобильные устройства",
        blocks: [
          {
            title: "1. Большая часть трафика приходит со смартфонов",
            body: "Смартфон - основной инструмент поиска: люди ищут клиники, мастеров, магазины, маршруты и контакты прямо с телефона. Если сайт грузится медленно, текст мелкий, кнопки трудно нажать, пользователь закрывает вкладку и уходит к конкуренту.",
          },
          {
            title: "2. Mobile‑first индекс Google",
            body: "Google оценивает сайт по мобильной версии. Проблемы со скоростью, адаптивностью, кликабельностью элементов и вёрсткой приводят к просадке позиций даже при нормальной десктопной версии.",
          },
          {
            title: "3. Рост конверсии и простота взаимодействия",
            body: "Мобильный пользователь действует быстро: не будет масштабировать страницу и искать спрятанные кнопки. Удобная мобильная версия помогает быстрее понять предложение, найти контакты и выполнить нужное действие.",
          },
          {
            title: "4. Доверие и образ бренда",
            body: "Аккуратный и современный мобильный сайт создаёт ощущение профессионализма и заботы. Неудобная мобильная версия, наоборот, вызывает сомнения.",
          },
          {
            title: "5. Снижение отказов и улучшение поведенческих факторов",
            body: "Когда на телефоне удобно читать, кликать и заполнять формы, пользователи дольше остаются на сайте и чаще совершают целевые действия - это положительно влияет на SEO.",
          },
        ],
      },
      {
        title: "Чего ожидать после мобильной оптимизации",
        blocks: [
          {
            body: [
              "Ускорение загрузки страниц до 1–2 секунд на мобильных.",
              "Снижение отказов с высоких значений до более здоровых уровней.",
              "Рост заявок, звонков и переходов в мессенджеры благодаря удобным кнопкам.",
              "Улучшение позиций в мобильной выдаче Google и рост локальной видимости.",
              "Усиление доверия со стороны пользователей.",
            ],
          },
        ],
      },
      {
        title: "Ключевые элементы мобильной оптимизации",
        blocks: [
          {
            title: "1. Адаптивная вёрстка",
            body: "Сайт должен корректно отображаться на разных экранах: без горизонтальной прокрутки, с адекватным масштабом шрифтов и блоков. Используйте адаптивные сетки и медиазапросы, проверяйте критические страницы на нескольких устройствах.",
          },
          {
            title: "2. Скорость загрузки",
            body: "Оптимизируйте изображения (WebP/AVIF, сжатие, lazy‑load), минимизируйте лишние скрипты и стили, уменьшайте количество запросов. Используйте Lighthouse или PageSpeed Insights для контроля.",
          },
          {
            title: "3. Удобная навигация",
            body: "Меню должно быть доступно «большим пальцем», основные разделы - в 1–2 клика, а важные CTA - всегда под рукой. Избегайте мелких кликабельных областей и сложных выпадающих меню.",
          },
          {
            title: "4. Читаемость текста",
            body: "Используйте достаточно крупный шрифт, контрастный текст, короткие абзацы и подзаголовки. Пользователь не должен масштабировать страницу, чтобы прочитать оффер.",
          },
          {
            title: "5. Удобные формы и CTA",
            body: "Формы должны заполняться быстро: минимум полей, удобные списки, автозаполнение. Кнопки «Позвонить» и «Написать» должны быть заметны на ключевых экранах.",
          },
        ],
      },
      {
        title: "Типичные ошибки мобильной версии",
        blocks: [
          {
            body: [
              "Использование отдельной «m.»‑версии без синхронизации с основной.",
              "Непрозрачные pop‑up окна, перекрывающие контент.",
              "Чрезмерно тяжёлые слайдеры и анимации.",
              "Маленькие кликабельные зоны.",
              "Скрытие важных блоков «ради красоты».",
            ],
          },
        ],
      },
      {
        title: "Пошаговый подход к мобильной оптимизации",
        blocks: [
          {
            title: "Шаг 1. Анализ текущего состояния",
            body: "Проверьте сайт через Lighthouse/PageSpeed, откройте ключевые страницы на нескольких устройствах, зафиксируйте проблемы: скорость, адаптивность, удобство форм и навигации.",
          },
          {
            title: "Шаг 2. Планирование правок",
            body: "Определите приоритетные страницы (главная, услуги, контакты, корзина/заявка) и составьте список задач: оптимизация медиа, доработка вёрстки, упрощение меню, правки форм.",
          },
          {
            title: "Шаг 3. Внедрение и тестирование",
            body: "Внедряйте правки поэтапно, после каждого этапа проверяйте сайт на реальных устройствах и повторно прогоняйте метрики производительности.",
          },
          {
            title: "Шаг 4. Мониторинг и доработка",
            body: "Следите за отказами, временем на сайте, глубиной просмотров и конверсиями. При необходимости продолжайте оптимизацию.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Нужна ли отдельная мобильная версия?",
            body: "В большинстве случаев достаточно хорошей адаптивной вёрстки. Отдельная m‑версия усложняет поддержку и может навредить SEO, если настроена неправильно.",
          },
          {
            title: "Как часто заниматься оптимизацией?",
            body: "Минимум раз в 6–12 месяцев стоит пересматривать сайт с точки зрения мобильного UX и производительности, а также после крупных обновлений контента или дизайна.",
          },
        ],
      },
      {
        title: "Чек‑лист",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Чек‑лист",
    howToStorageKey: "articleMobileOptimizationChecklist",
    steps: [
      {
        id: "mobile-optimization-checklist",
        title: "",
        description: "",
        items: [
          "Проверьте сайт на мобильных устройствах и через PageSpeed.",
          "Обеспечьте адаптивную вёрстку без горизонтального скролла.",
          "Оптимизируйте скорость: изображения, скрипты, шрифты.",
          "Сделайте меню, текст, формы и CTA удобными для пальца и глаза.",
          "Отслеживайте поведение пользователей и корректируйте сайт регулярно.",
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title: "Mobile optimization: why it matters and how to do it right",
    lead: [
      "Mobile optimization isn’t optional anymore. With mobile-first indexing and a high share of mobile traffic, mobile speed and usability directly impact SEO, conversion, and trust.",
      "Below is what to expect and a practical framework for improving the mobile experience.",
    ],
    sections: [
      {
        title: "Why mobile optimization matters",
        blocks: [
          {
            title: "1. Most traffic is mobile",
            body: "People search for services and contact details on their phones. If your site loads slowly or is hard to tap/read, they leave and choose a competitor.",
          },
          {
            title: "2. Mobile-first indexing",
            body: "Google evaluates your site primarily through its mobile experience. Speed and usability issues can hurt rankings even if desktop looks fine.",
          },
          {
            title: "3. Better conversion",
            body: "Mobile users act fast. A clean mobile layout makes it easy to understand the offer, find contacts, and take action.",
          },
          {
            title: "4. Trust",
            body: "A modern mobile site signals professionalism. A broken mobile UX reduces trust.",
          },
          {
            title: "5. Lower bounce rate",
            body: "Better readability and tap targets improve engagement and can support SEO indirectly.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "Faster load times (often near 1–2 seconds).",
              "Lower bounce rate.",
              "More calls, form submissions, and messages.",
              "Improved mobile rankings and local visibility.",
              "Higher customer trust.",
            ],
          },
        ],
      },
      {
        title: "Key elements",
        blocks: [
          {
            title: "1. Responsive layout",
            body: "No horizontal scroll, readable font sizes, and flexible grids. Test critical pages on multiple devices.",
          },
          {
            title: "2. Speed",
            body: "Optimize images (WebP/AVIF, compression, lazy-loading), reduce scripts, and monitor with Lighthouse/PageSpeed.",
          },
          {
            title: "3. Navigation",
            body: "Make menus thumb-friendly, keep key actions within 1–2 taps, and avoid tiny tap targets.",
          },
          {
            title: "4. Readability",
            body: "Use short paragraphs, strong contrast, and clear headings.",
          },
          {
            title: "5. Forms and CTAs",
            body: "Minimize fields, support autofill, and make Call/Message buttons prominent.",
          },
        ],
      },
      {
        title: "Common mobile mistakes",
        blocks: [
          {
            body: [
              "Maintaining a separate m-dot site.",
              "Intrusive pop-ups that block content.",
              "Heavy sliders and animations.",
              "Tiny tap targets.",
              "Hiding important content on mobile.",
            ],
          },
        ],
      },
      {
        title: "Step-by-step approach",
        blocks: [
          {
            title: "Step 1. Measure",
            body: "Use Lighthouse/PageSpeed and real device testing to list issues.",
          },
          {
            title: "Step 2. Plan fixes",
            body: "Prioritize key pages (home, services, contact, checkout/forms) and define tasks.",
          },
          {
            title: "Step 3. Implement and test",
            body: "Ship improvements in iterations and re-test after each step.",
          },
          {
            title: "Step 4. Monitor",
            body: "Track bounce rate, engagement, and conversion changes.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "Do you need a separate mobile site?",
            body: "Usually no-responsive design is best. Separate m-dot versions increase maintenance and SEO risk.",
          },
          {
            title: "How often should you optimize?",
            body: "Review mobile UX and performance at least every 6–12 months and after major redesigns.",
          },
        ],
      },
      {
        title: "Checklist",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "Checklist",
    howToStorageKey: "articleMobileOptimizationChecklist",
    steps: [
      {
        id: "mobile-optimization-checklist",
        title: "",
        description: "",
        items: [
          "Test on real devices and with PageSpeed.",
          "Ensure responsive layout with no horizontal scroll.",
          "Improve speed (images, scripts, fonts).",
          "Make menus, text, forms, and CTAs thumb-friendly.",
          "Track behavior and iterate regularly.",
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "אופטימיזציה למובייל: למה זה חשוב ואיך עושים נכון",
    lead: [
      "אופטימיזציה למובייל היא חובה: נוחות ומהירות במובייל משפיעות על SEO, המרות ואמון.",
      "להלן למה זה חשוב ומה עושים בפועל.",
    ],
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            title: "1. רוב התנועה במובייל",
            body: "אם האתר איטי או לא נוח לקריאה/הקלקה, המשתמשים יוצאים ועוברים למתחרה.",
          },
          {
            title: "2. Mobile-first",
            body: "Google בוחנת את החוויה במובייל. בעיות מהירות ושימושיות פוגעות בדירוג.",
          },
        ],
      },
      {
        title: "צ׳ק־ליסט",
        blocks: [{ body: "" }],
      },
    ],
    checklistTitle: "צ׳ק־ליסט",
    howToStorageKey: "articleMobileOptimizationChecklist",
    steps: [
      {
        id: "mobile-optimization-checklist",
        title: "",
        description: "",
        items: [
          "לבדוק את האתר במובייל וב‑PageSpeed.",
          "להבטיח עיצוב רספונסיבי בלי גלילה אופקית.",
          "לשפר מהירות: תמונות, סקריפטים, פונטים.",
          "להפוך תפריט, טקסט, טפסים ו‑CTA לנוחים.",
          "לעקוב אחרי התנהגות ולשפר באופן קבוע.",
        ],
      },
    ],
  },
};

export default content;
