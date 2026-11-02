export type ArticleSection = {
  title: string;
  blocks: Array<{ title?: string; body: string | string[] }>;
};

export type ArticleContent = {
  backToHome: string;
  title: string;
  lead: string[];
  codeExampleOrganization: string;
  codeExampleLocalBusiness: string;
  sections: ArticleSection[];
};

const content: Record<"by" | "il" | "en", ArticleContent> = {
  by: {
    backToHome: "← Назад на главную",
    title:
      "Внедрение микроразметки Schema.org (Organization, LocalBusiness): полное руководство",
    lead: [
      "Микроразметка Schema.org - один из технических инструментов, которые почти не видят клиенты, но хорошо «чувствуют» поисковые системы.",
      "Для локального бизнеса в Беларуси и странах СНГ это способ объяснить Google и Яндексу, кто вы, где находитесь, чем занимаетесь и как с вами связаться.",
      "Компании, которые грамотно используют структурированные данные, получают более заметные сниппеты, лучше ранжируются в локальной выдаче и быстрее обновляют информацию о себе в поиске.",
    ],
    codeExampleOrganization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Название компании",
  "url": "https://site.by",
  "logo": "https://site.by/logo.png",
  "sameAs": [
    "https://instagram.com/company",
    "https://facebook.com/company",
    "https://t.me/company"
  ]
}`,
    codeExampleLocalBusiness: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Название компании",
  "image": "https://site.by/photo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Ленина 10",
    "addressLocality": "Минск",
    "addressCountry": "BY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.9,
    "longitude": 27.5667
  },
  "openingHours": "Mo-Su 09:00-21:00",
  "telephone": "+375-29-000-00-00",
  "priceRange": "$$",
  "url": "https://site.by"
}`,
    sections: [
      {
        title: "1. Зачем внедрять микроразметку Schema.org",
        blocks: [
          {
            title: "1.1. Чёткое понимание бизнеса поисковиками",
            body: "Структурированные данные в формате JSON‑LD позволяют поисковым системам однозначно понять название компании, адрес, график работы, контакты, ссылки на соцсети и другие важные параметры. Без микроразметки поисковик во многом «догадывается», с микроразметкой - получает машинно‑читаемый профиль.",
          },
          {
            title: "1.2. Улучшение rich‑сниппетов",
            body: "Корректно внедрённая Schema.org помогает показывать расширенные сниппеты: логотип, название, время работы, ссылку на сайт, иногда рейтинг и количество отзывов. Такой результат выделяется и повышает CTR.",
          },
          {
            title: "1.3. Усиление локального SEO и карт",
            body: "Микроразметка помогает связать воедино сайт, Google Business Profile, Яндекс Бизнес, соцсети, филиалы и точки на картах. Чем точнее поисковик «склеивает» эти данные, тем стабильнее ранжирование.",
          },
          {
            title: "1.4. Повышение доверия поисковых систем",
            body: "Когда Google и Яндекс видят, что информация о компании совпадает в разных источниках (сайт → карты → каталоги → соцсети), доверие к бренду растёт. Это отражается на позициях и скорости обновления данных.",
          },
        ],
      },
      {
        title: "2. Чего ожидать после внедрения микроразметки",
        blocks: [
          {
            title: "2.1. Рост видимости и кликабельности",
            body: "Расширенные сниппеты обычно привлекают больше внимания. CTR таких результатов часто растёт на 15–40%.",
          },
          {
            title: "2.2. Быстрее обновляются данные",
            body: "Структурированные данные помогают поисковикам быстрее подхватывать изменения адреса, телефона или часов работы и синхронизировать их с картами и выдачей.",
          },
          {
            title: "2.3. Усиление локальных позиций",
            body: "Schema.org не заменяет контент и ссылки, но укрепляет релевантность к локальным запросам и повышает качество представления компании в мобильной выдаче.",
          },
          {
            title: "2.4. Рост доверия со стороны клиентов",
            body: "Аккуратные сниппеты с логотипом и графиком работы воспринимаются как признак «настоящего» бизнеса, повышая вероятность клика и обращения.",
          },
        ],
      },
      {
        title: "3. Какие схемы использовать: Organization и LocalBusiness",
        blocks: [
          {
            title: "3.1. Organization",
            body: "Тип Organization подходит для корпоративных сайтов, сетей филиалов и брендов, которые работают по всей стране или онлайн. Он описывает «зонтичную» организацию: название, бренд, логотип, контакты и социальные сети.",
          },
          {
            title: "3.2. LocalBusiness",
            body: "Тип LocalBusiness описывает конкретную точку присутствия: офис, салон, клинику, магазин, сервисный центр. В разметке указываются адрес, координаты, телефоны, время работы и другие параметры конкретного подразделения.",
          },
        ],
      },
      {
        title: "4. Пошаговое внедрение микроразметки Schema.org",
        blocks: [
          {
            title: "Шаг 1. Соберите данные о компании",
            body: [
              "полное и публичное название компании;",
              "адрес в формате NAP (Name, Address, Phone);",
              "телефоны и email;",
              "домен сайта;",
              "ссылки на соцсети и мессенджеры;",
              "логотип и основные фотографии;",
              "список услуг или категорий;",
              "график работы;",
              "данные по филиалам и ссылкам на карточки в Google/Яндекс (если есть).",
              "Важно, чтобы данные совпадали с тем, что указано на сайте, в картах и каталогах - это основа NAP‑консистентности.",
            ],
          },
          {
            title: "Шаг 2. Добавьте Organization на главную (JSON‑LD)",
            body: 'Разместите JSON‑LD блок Organization на главной странице в теге <script type="application/ld+json">. Он не виден пользователям, но читается поисковыми роботами.',
          },
          {
            title: "JSON‑LD пример: Organization",
            body: "",
          },
          {
            title: "Шаг 3. Описывайте филиалы через LocalBusiness (JSON‑LD)",
            body: "На странице контактов или отдельных страницах филиалов используйте LocalBusiness. Важно, чтобы координаты, адрес и телефон совпадали с данными в картах.",
          },
          {
            title: "JSON‑LD пример: LocalBusiness",
            body: "",
          },
          {
            title: "Шаг 4. Добавьте услуги и отзывы при необходимости",
            body: "Поверх базовой разметки можно описывать услуги через Service и подключать AggregateRating/Review для звёзд и рейтингов, если на сайте есть реальные отзывы.",
          },
          {
            title: "Шаг 5. Проверьте разметку",
            body: "Проверьте JSON‑LD через Rich Results Test и валидаторы Schema.org. Ошибки и предупреждения лучше исправлять сразу.",
          },
        ],
      },
      {
        title: "5. Практические советы и частые ошибки",
        blocks: [
          {
            title: "Не искажайте данные ради SEO",
            body: "Информация в микроразметке должна совпадать с тем, что видит пользователь. Несоответствия телефонов, адресов или графика могут снизить доверие поисковика.",
          },
          {
            title: "Используйте JSON‑LD",
            body: "Google рекомендует JSON‑LD как основной способ внедрения Schema.org. Он проще в поддержке и не ломает вёрстку.",
          },
          {
            title: "Следите за обновлениями схем",
            body: "Schema.org и требования поисковиков меняются. Раз в несколько месяцев проверяйте, нет ли новых рекомендованных полей для ваших типов.",
          },
        ],
      },
      {
        title: "Итоги",
        blocks: [
          {
            body: [
              "улучшать видимость и кликабельность сниппетов;",
              "ускорять обновление информации о компании;",
              "усиливать локальное SEO и присутствие в картах;",
              "повышать доверие к бренду и конверсию из поиска.",
            ],
          },
          {
            body: "Один раз аккуратно настроенная микроразметка даёт долгосрочный эффект и становится частью технического фундамента.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Schema.org structured data (Organization, LocalBusiness): a practical guide",
    lead: [
      "Schema.org structured data is a technical SEO tool that customers don’t see-but search engines do.",
      "For U.S. local SEO, it helps Google understand who you are, where you are, what you offer, and how to contact you, and it can support richer snippets and cleaner data alignment with Google Business Profile.",
    ],
    codeExampleOrganization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": [
    "https://instagram.com/company",
    "https://facebook.com/company",
    "https://www.linkedin.com/company/company"
  ]
}`,
    codeExampleLocalBusiness: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Company Name",
  "image": "https://example.com/photo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2672,
    "longitude": -97.7431
  },
  "openingHours": "Mo-Su 09:00-21:00",
  "telephone": "+1-555-555-5555",
  "priceRange": "$$",
  "url": "https://example.com"
}`,
    sections: [
      {
        title: "1. Why add Schema.org",
        blocks: [
          {
            title: "1.1. Clear business understanding",
            body: "JSON‑LD structured data helps search engines read your name, address, hours, contact details, social links, and more in a machine-friendly format.",
          },
          {
            title: "1.2. Rich snippet potential",
            body: "Correct Schema can support enhanced results (brand info, sometimes ratings) and improve CTR.",
          },
          {
            title: "1.3. Stronger local alignment",
            body: "It helps connect your website with your Google Business Profile and other trusted sources by reinforcing consistent NAP information.",
          },
        ],
      },
      {
        title: "2. What to expect",
        blocks: [
          {
            body: [
              "Better snippet clarity and potentially higher CTR.",
              "Faster, cleaner understanding of your updated info.",
              "Stronger local relevance signals (as part of a wider SEO system).",
            ],
          },
        ],
      },
      {
        title: "3. Which types to use",
        blocks: [
          {
            title: "3.1. Organization",
            body: "Use Organization for the overall brand/corporate entity (homepage is common).",
          },
          {
            title: "3.2. LocalBusiness",
            body: "Use LocalBusiness for a specific physical location. Put it on contact or location pages.",
          },
        ],
      },
      {
        title: "4. Step-by-step implementation",
        blocks: [
          {
            title: "Step 1. Collect your business data",
            body: "Make sure your name, address, phone, hours, website, social links, and location data are consistent across the site and Google Business Profile.",
          },
          {
            title: "Step 2. Add Organization JSON‑LD",
            body: 'Place Organization JSON‑LD on the homepage inside <script type="application/ld+json">.',
          },
          {
            title: "JSON‑LD example: Organization",
            body: "",
          },
          {
            title: "Step 3. Add LocalBusiness JSON‑LD",
            body: "Add LocalBusiness to contact/location pages. Keep coordinates and address consistent with your listing.",
          },
          {
            title: "JSON‑LD example: LocalBusiness",
            body: "",
          },
          {
            title: "Step 4. Add services and ratings (when valid)",
            body: "Add Service and AggregateRating/Review only if the site has real, visible reviews and data is accurate.",
          },
          {
            title: "Step 5. Validate",
            body: "Test with Google’s Rich Results Test and Schema.org validators.",
          },
        ],
      },
      {
        title: "5. Tips and common mistakes",
        blocks: [
          {
            title: "Don’t fake data",
            body: "Structured data must match what users see. Mismatches reduce trust.",
          },
          {
            title: "Use JSON‑LD",
            body: "JSON‑LD is easier to maintain and is Google’s recommended format.",
          },
          {
            title: "Keep up with updates",
            body: "Check for new required/recommended fields every few months.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Schema.org is a long-term technical foundation that improves clarity, supports local SEO signals, and helps search engines interpret your business data consistently.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title: "Schema.org (Organization, LocalBusiness): מדריך פרקטי",
    lead: [
      "נתונים מובנים (Schema.org) הם כלי טכני שמנועי חיפוש מבינים היטב. הוא עוזר ל‑Google להבין מי אתם, איפה אתם ומה שעות הפעילות.",
      "זה לא מחליף תוכן וקישורים, אבל מחזק עקביות ויכול לשפר תצוגה בתוצאות.",
    ],
    codeExampleOrganization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "שם החברה",
  "url": "https://example.co.il",
  "logo": "https://example.co.il/logo.png",
  "sameAs": [
    "https://instagram.com/company",
    "https://facebook.com/company"
  ]
}`,
    codeExampleLocalBusiness: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "שם העסק",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "דיזנגוף 10",
    "addressLocality": "תל אביב",
    "addressCountry": "IL"
  },
  "openingHours": "Mo-Su 09:00-21:00",
  "telephone": "+972-3-000-0000",
  "url": "https://example.co.il"
}`,
    sections: [
      {
        title: "למה זה חשוב",
        blocks: [
          {
            body: "Schema.org מספק ל‑Google מידע מובנה על העסק: שם, כתובת, טלפון, שעות, קישורים.",
          },
        ],
      },
      {
        title: "איך ליישם",
        blocks: [
          {
            title: "דוגמה: Organization JSON‑LD",
            body: "",
          },
          {
            title: "דוגמה: LocalBusiness JSON‑LD",
            body: "",
          },
          {
            title: "בדיקה",
            body: "לבדוק בכלים של Google (Rich Results Test) ובוולידטורים של Schema.org.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "Schema.org הוא בסיס טכני שמחזק עקביות ויכול לשפר תצוגה והבנה של העסק בתוצאות.",
          },
        ],
      },
    ],
  },
};

export default content;
