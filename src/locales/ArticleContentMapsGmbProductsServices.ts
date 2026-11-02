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
      "Добавление товаров и услуг в карточку GMB: зачем это нужно, чего ожидать и как делать правильно",
    lead: [
      "Добавление товаров и услуг в карточку Google Business Profile для белорусского бизнеса - это мощный инструмент для привлечения местных клиентов из Минска, Бреста, Гомеля и других городов Беларуси и повышения видимости в локальном поиске. Правильно оформленные товары и услуги помогают получать больше кликов, звонков и обращений от белорусских клиентов.",
      "Раздел «Товары» и «Услуги» в Google Business Profile - один из самых недооценённых элементов карточки, хотя именно он часто решает, выберет ли клиент вас или конкурента. Многие бизнесы либо вообще не заполняют эти разделы, либо делают это формально: несколько строчек без описания, цен и фотографий. А между тем, грамотно оформленные товары и услуги могут заметно повысить конверсию карточки в звонки и заявки, улучшить позиции в локальной выдаче и дать клиентам понятное представление о том, что именно вы предлагаете.",
    ],
    sections: [
      {
        title: "Зачем добавлять товары и услуги",
        blocks: [
          {
            title: "1. Усиление релевантности в локальном поиске",
            body: "Каждая позиция - это дополнительный кусок контента, который индексируется. Так Google лучше понимает, какие услуги вы оказываете, по каким запросам вас показывать и с кем сравнивать. Узкие запросы («замена масла», «аппаратный педикюр») начинают приводить больше показов и целевых действий.",
          },
          {
            title: "2. Ясное объяснение предложения для клиента",
            body: "Пользователь открывает карточку, чтобы быстро понять: «что вы делаете» и «есть ли нужная услуга у вас». Разделы товаров/услуг отвечают на эти вопросы мгновенно - без обязательного перехода на сайт. Это снижает трение и ускоряет решение.",
          },
          {
            title: "3. Рост звонков, маршрутов и переходов",
            body: "Когда нужная услуга видна прямо в карточке, клиенты чаще нажимают «Позвонить», строят маршрут и переходят на сайт. Детализация предложения повышает конверсию карточки.",
          },
          {
            title: "4. Алгоритм любит подробность",
            body: "Подробно заполненные карточки чаще растут в позициях, попадают в «Лучшие результаты», карусели рекомендаций и голосовые ответы. Цель алгоритма - дать максимум информации без лишних кликов. Помогая ему, вы получаете преимущество.",
          },
          {
            title: "5. Отстройка от конкурентов",
            body: "Большинство ограничивается фотографиями и графиком. Структурированный список услуг/товаров делает карточку профессиональной и полезной, что особенно ценно в конкурентных нишах.",
          },
        ],
      },
      {
        title: "Чего ожидать после добавления услуг/товаров",
        blocks: [
          {
            body: [
              "Рост показов по точным (узким) запросам - +20% до +300% в зависимости от ниши и конкуренции.",
              "Увеличение действий в карточке: звонки, маршруты, переходы на сайт - обычно +10–40%.",
              "Повышение доверия за счёт аккуратной структуры и понятного описания услуг.",
              "Появление карточки в новых сегментах поиска, включая голосовые сценарии.",
            ],
          },
        ],
      },
      {
        title: "Как правильно добавлять услуги в Google",
        blocks: [
          {
            title: "1. Разделяйте услуги на категории",
            body: "Google группирует услуги по разделам. Кластеризация повышает удобство и понятность. Пример: «Автосервис: замена масла, ремонт подвески, диагностика»; «Салон красоты: женская стрижка, мужская стрижка, окрашивание»; «Юристы: консультация, договоры, судебные дела».",
          },
          {
            title: "2. Короткие и точные названия",
            body: "Используйте формулировки, которыми реально ищут: «Замена тормозных колодок», «Чистка лица», «Установка межкомнатных дверей». Избегайте рекламных прилагательных и «простыней» из ключей.",
          },
          {
            title: "3. Описания по формуле «что/для кого/как/результат»",
            body: "Короткие 1–3 предложения: что включает, для кого, как проходит/сколько длится, чем полезно. Укажите ключевые ограничения и ожидаемый результат.",
          },
          {
            title: "4. Цена и варианты",
            body: "По возможности добавляйте «цена от» или диапазон. Для товаров - фото, характеристики, ссылку на сайт. Прозрачность снижает лишние вопросы.",
          },
          {
            title: "5. Соответствие категориям",
            body: "Следите, чтобы услуги не конфликтовали с основной категорией карточки. Конфликты снижают релевантность.",
          },
          {
            title: "6. Обновления и сезонность",
            body: "Пересматривайте список раз в 1–3 месяца: добавляйте сезонные услуги, убирайте устаревшие, актуализируйте цены и описания.",
          },
        ],
      },
      {
        title: "Как добавлять товары",
        blocks: [
          {
            body: [
              "Название товара = как его называют клиенты. Без маркетинговых слоганов.",
              "Фото товара: чёткое, на нейтральном фоне или в контексте использования.",
              "Цена/диапазон и ключевые характеристики. Ссылка на карточку товара на сайте (если есть).",
              "Категории товаров - логичные и короткие, не смешивайте разные линии в один раздел.",
            ],
          },
        ],
      },
      {
        title: "Частые ошибки",
        blocks: [
          {
            body: [
              "Длинные названия с ключевыми фразами и «простынями» преимуществ.",
              "Отсутствие описаний и цен: пользователю нечем опереться.",
              "Дубликаты услуг с разными формулировками - путают и пользователей, и алгоритм.",
              "Случайные категории и конфликт с основной категорией карточки.",
              "Редкие обновления: список устаревает, падает доверие и видимость.",
            ],
          },
        ],
      },
      {
        title: "FAQ и чек‑лист",
        blocks: [
          {
            title: "Сколько услуг добавлять?",
            body: "Начните с 10–20 ключевых услуг, затем расширяйтесь до 30–50 позиций по спросу. Для товаров - витрина из 12–24 позиций на старт, затем регулярные обновления.",
          },
          {
            title: "Нужны ли цены?",
            body: "Желательно - даже «от». Прозрачность снижает трение и экономит время менеджеров.",
          },
          {
            title: "Как быстро будет эффект?",
            body: "Первые сдвиги - 2–4 недели при корректном заполнении и без ошибок в карточке. Устойчивый рост - 1–3 месяца при регулярных обновлениях и работе с отзывами/фото.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleGmbProductsServicesChecklist",
      title: "Чек‑лист",
      steps: [
        {
          id: "gmb-products-services-checklist",
          title: "",
          description: "",
          items: [
            "Кластеризуйте услуги по категориям.",
            "Короткие названия, ясные описания, цены/диапазоны.",
            "Синхронизируйте формулировки с сайтом и карточками.",
            "Обновляйте список раз в 1–3 месяца, учитывайте сезонность.",
            "Отслеживайте показы, клики и конверсии в карточке.",
          ],
        },
      ],
    },
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Adding products and services to your Google Business Profile: why it matters, what to expect, and how to do it right",
    lead: [
      "Adding products and services to your Google Business Profile is a practical way to increase local visibility and conversion. Well-structured offerings help customers understand what you do-and help Google match your listing to relevant searches.",
      "The Products and Services sections are often ignored or filled out “for show”: a few lines with no descriptions, pricing, or photos. But when done well, these sections can increase calls and leads, improve relevance for specific queries, and make your listing more convincing.",
    ],
    sections: [
      {
        title: "Why add products and services",
        blocks: [
          {
            title: "1. More relevance for local search",
            body: "Each item is additional indexable content. It helps Google understand what you offer, which queries you’re relevant for, and which competitors you should be compared against. Specific searches (“brake pad replacement”, “deep facial cleansing”) can trigger more impressions and actions.",
          },
          {
            title: "2. Clearer value proposition",
            body: "Users open your listing to quickly understand what you do and whether you provide the exact service they need. Products/services answer that instantly-without forcing a website visit.",
          },
          {
            title: "3. More calls, directions, and website clicks",
            body: "When the right service is visible on the listing, customers are more likely to call, request directions, or visit the site.",
          },
          {
            title: "4. Google rewards completeness",
            body: "Detailed listings are more likely to perform well and appear in more discovery surfaces. Google’s goal is to provide maximum information with minimal friction.",
          },
          {
            title: "5. Standing out from competitors",
            body: "Many businesses stop at photos and hours. A structured list of services/products makes your listing more professional and useful.",
          },
        ],
      },
      {
        title: "What to expect",
        blocks: [
          {
            body: [
              "More impressions for specific (long-tail) queries.",
              "More actions on the listing: calls, directions, website visits.",
              "Higher trust due to clarity and structure.",
              "More visibility in new search segments, including voice searches.",
            ],
          },
        ],
      },
      {
        title: "How to add services correctly",
        blocks: [
          {
            title: "1. Group services into categories",
            body: "Cluster services by logical sections. Example: Auto service (oil change, suspension repair, diagnostics); Beauty salon (women’s haircut, men’s haircut, coloring); Lawyers (consultation, contracts, court cases).",
          },
          {
            title: "2. Short, precise names",
            body: "Use wording customers actually search for. Avoid marketing adjectives and keyword-stuffed titles.",
          },
          {
            title: "3. Use a simple description formula",
            body: "1–3 sentences: what’s included, for whom, how it works/how long it takes, and the expected outcome.",
          },
          {
            title: "4. Pricing",
            body: "If possible, include ‘starting at’ pricing or a range. Transparency reduces friction and questions.",
          },
          {
            title: "5. Match your primary category",
            body: "Avoid adding services that conflict with your main category-category mismatch can reduce relevance.",
          },
          {
            title: "6. Updates and seasonality",
            body: "Review the list every 1–3 months: add seasonal services, remove outdated ones, and refresh pricing and descriptions.",
          },
        ],
      },
      {
        title: "How to add products",
        blocks: [
          {
            body: [
              "Product names should match how customers refer to them-no slogans.",
              "Use clear photos (neutral background or real usage context).",
              "Include price/range and key characteristics; link to your site if applicable.",
              "Keep product categories short and logical.",
            ],
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Overly long, keyword-stuffed titles.",
              "No descriptions and no pricing.",
              "Duplicate services with different wording.",
              "Random categories that don’t match the listing.",
              "Rare updates that make the list stale.",
            ],
          },
        ],
      },
      {
        title: "FAQ and checklist",
        blocks: [
          {
            title: "How many services should you add?",
            body: "Start with 10–20 core services, then expand to 30–50 based on demand. For products, start with a 12–24 item showcase and update regularly.",
          },
          {
            title: "Do you need prices?",
            body: "It’s recommended-even ‘starting at’ pricing helps reduce friction and saves time.",
          },
          {
            title: "How fast will you see results?",
            body: "Early movement can appear in 2–4 weeks. More stable growth often takes 1–3 months with ongoing updates and review/photo work.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleGmbProductsServicesChecklist",
      title: "Checklist",
      steps: [
        {
          id: "gmb-products-services-checklist",
          title: "",
          description: "",
          items: [
            "Cluster services into categories.",
            "Use short names, clear descriptions, and pricing/ranges.",
            "Align wording with your website and other listings.",
            "Update every 1–3 months and account for seasonality.",
            "Track impressions, clicks, and conversions in the profile.",
          ],
        },
      ],
    },
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "הוספת מוצרים ושירותים ל‑Google Business Profile: למה זה חשוב, למה לצפות ואיך לעשות את זה נכון",
    lead: [
      "הוספת מוצרים ושירותים ל‑Google Business Profile היא דרך פרקטית לשפר נראות מקומית והמרה. הצגה מסודרת של ההיצע עוזרת ללקוחות להבין מה אתם עושים-ועוזרת ל‑Google לחבר את הכרטיס לחיפושים רלוונטיים.",
      "קטעי Products ו‑Services לעיתים מוזנחים או ממולאים בצורה שטחית: בלי תיאורים, מחירים ותמונות. אבל כשעושים את זה נכון, אפשר להגדיל שיחות ופניות, לשפר רלוונטיות לחיפושים ממוקדים ולחזק אמון בכרטיס.",
    ],
    sections: [
      {
        title: "למה להוסיף מוצרים ושירותים",
        blocks: [
          {
            title: "1. יותר רלוונטיות לחיפוש מקומי",
            body: "כל פריט הוא עוד תוכן ש‑Google יכול להבין ולאנדקס. כך הוא מזהה מה אתם מציעים ובאילו חיפושים להציג אתכם. חיפושים ספציפיים יכולים להביא יותר חשיפות ופעולות.",
          },
          {
            title: "2. הצעה ברורה יותר ללקוח",
            body: "הלקוח פותח את הכרטיס כדי להבין מהר מה אתם עושים והאם יש לכם את השירות שהוא צריך. מוצרים/שירותים עונים על זה בלי מעבר לאתר.",
          },
          {
            title: "3. יותר שיחות, ניווטים וקליקים",
            body: "כאשר השירות הנכון מוצג בכרטיס, הסיכוי לשיחה, ניווט או כניסה לאתר עולה.",
          },
          {
            title: "4. אלגוריתם אוהב כרטיסים מלאים",
            body: "כרטיסים מלאים ומפורטים נוטים להופיע יותר ולבצע טוב יותר. המטרה היא לתת מקסימום מידע עם מינימום חיכוך.",
          },
          {
            title: "5. בידול מול מתחרים",
            body: "רבים מסתפקים בתמונות ושעות פעילות. רשימה מסודרת של שירותים/מוצרים הופכת את הכרטיס למקצועי ושימושי יותר.",
          },
        ],
      },
      {
        title: "למה לצפות",
        blocks: [
          {
            body: [
              "יותר חשיפות לחיפושים ממוקדים.",
              "יותר פעולות בכרטיס: שיחות, ניווטים, ביקורים באתר.",
              "יותר אמון בגלל בהירות וסדר.",
              "נראות גם בסגמנטים נוספים, כולל חיפוש קולי.",
            ],
          },
        ],
      },
      {
        title: "איך להוסיף שירותים נכון",
        blocks: [
          {
            title: "1. לחלק לקטגוריות",
            body: "לקבץ שירותים לפי תחומים. לדוגמה: מוסך (החלפת שמן, תיקון מתלים); קוסמטיקה (תספורת, צבע); עורכי דין (ייעוץ, חוזים).",
          },
          {
            title: "2. שמות קצרים ומדויקים",
            body: "להשתמש בניסוחים שמחפשים באמת ולהימנע מכותרות ארוכות עם מילות מפתח.",
          },
          {
            title: "3. תיאורים קצרים",
            body: "1–3 משפטים: מה כולל, למי מתאים, איך מתבצע/כמה זמן, ומה התוצאה.",
          },
          {
            title: "4. מחירים",
            body: "כדאי להוסיף מחיר ‘החל מ‑’ או טווח. שקיפות חוסכת שאלות.",
          },
          {
            title: "5. התאמה לקטגוריה הראשית",
            body: "שירותים שלא מתאימים לקטגוריה הראשית עלולים לפגוע ברלוונטיות.",
          },
          {
            title: "6. עדכונים ועונתיות",
            body: "לעדכן כל 1–3 חודשים: להוסיף שירותים עונתיים, להסיר ישנים ולעדכן תיאורים ומחירים.",
          },
        ],
      },
      {
        title: "איך להוסיף מוצרים",
        blocks: [
          {
            body: [
              "שם מוצר כמו שהלקוחות קוראים לו-בלי סלוגנים.",
              "תמונות ברורות (רקע ניטרלי או שימוש אמיתי).",
              "מחיר/טווח ומאפיינים; קישור לאתר אם יש.",
              "קטגוריות קצרות והגיוניות.",
            ],
          },
        ],
      },
      {
        title: "שגיאות נפוצות",
        blocks: [
          {
            body: [
              "כותרות ארוכות ודחיסת מילות מפתח.",
              "אין תיאורים ואין מחירים.",
              "כפילויות של שירותים עם ניסוחים שונים.",
              "קטגוריות אקראיות שלא מתאימות.",
              "עדכונים נדירים שמייצרים רשימה לא עדכנית.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות וצ’ק‑ליסט",
        blocks: [
          {
            title: "כמה שירותים להוסיף?",
            body: "להתחיל עם 10–20 שירותים מרכזיים ולהתרחב ל‑30–50 לפי ביקוש. למוצרים-להתחיל עם 12–24 פריטים ולעדכן באופן קבוע.",
          },
          {
            title: "צריך מחירים?",
            body: "מומלץ-even ‘החל מ‑’ מפחית חיכוך וחוסך זמן.",
          },
          {
            title: "מתי רואים תוצאות?",
            body: "שינויים ראשונים יכולים להופיע תוך 2–4 שבועות. צמיחה יציבה יותר בדרך כלל לוקחת 1–3 חודשים עם תחזוקה שוטפת.",
          },
        ],
      },
    ],
    checklist: {
      storageKey: "articleGmbProductsServicesChecklist",
      title: "צ’ק‑ליסט",
      steps: [
        {
          id: "gmb-products-services-checklist",
          title: "",
          description: "",
          items: [
            "לקבץ שירותים לפי קטגוריות.",
            "שמות קצרים, תיאורים ברורים ומחירים/טווחים.",
            "לתאם ניסוחים עם האתר ועם כרטיסים נוספים.",
            "לעדכן כל 1–3 חודשים ולהתחשב בעונתיות.",
            "לעקוב אחרי חשיפות, קליקים והמרות בכרטיס.",
          ],
        },
      ],
    },
  },
};

export default content;
