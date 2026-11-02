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
      "Анализ видимости в навигаторах (2ГИС, Apple Maps): зачем это нужно, что ожидать и как правильно проводить аудит",
    lead: [
      "Анализ видимости белорусского бизнеса в навигаторах 2ГИС, Apple Maps, Яндекс Карты и других картографических сервисах - это комплексная оценка присутствия локального бизнеса в Минске, Бресте, Гомеле и других городах Беларуси. Правильно проведённый анализ помогает выявить проблемы и возможности для улучшения локального SEO на белорусском рынке.",
      "Локальный поиск - это не только Google и Яндекс. Значимая доля клиентов приходит через навигаторы: 2ГИС и Apple Maps становятся решающими для водителей, пешеходов, туристов и жителей района. Аудит видимости в навигаторах - это не просто проверка наличия на карте, а оценка карточки, рейтинга, позиционирования, геопривязки и факторов ранжирования.",
    ],
    sections: [
      {
        title: "Зачем бизнесу анализ видимости в навигаторах",
        blocks: [
          {
            title: "1. Навигаторы дают самый «горячий» трафик",
            body: "Пользователь открывает карту с понятным намерением: найти ближайший сервис, сравнить альтернативы и сразу построить маршрут. Это финальная стадия воронки: выбор → маршрут → визит. Если вас плохо видно - вы теряете самый дешёвый источник целевых клиентов.",
          },
          {
            title: "2. 2ГИС и Apple Maps сильно влияют на поток",
            body: "2ГИС - один из ключевых справочников в городах Беларуси, а также России и других стран СНГ: рейтинги по району, сравнение компаний, навигация по дворам и входам. Apple Maps - стандарт для iPhone‑аудитории. Ошибки в карточке здесь = упущенная доля платёжеспособной аудитории.",
          },
          {
            title: "3. Алгоритмы учитывают десятки факторов",
            body: "На позиции влияют корректность NAP, категория, отзывы и рейтинг, качество фото, наличие сайта, расписание, описания и атрибуты, филиалы, геопривязка и активность пользователей. Аудит помогает понять, что именно тормозит рост видимости.",
          },
          {
            title: "4. Ошибки в данных - прямые потери",
            body: "Неверные часы, телефон, адрес, категория, точка входа, фотографии - всё это приводит к тому, что пользователь выбирает конкурента. Даже одна существенная ошибка способна снизить посещаемость на 20–40%.",
          },
          {
            title: "5. Понимание конкурентов",
            body: "Аудит раскрывает, кто выше в рейтинге, почему они выигрывают, как часто получают отзывы, как оформляют карточки и какие маркеры используют. Это база для стратегии обгона.",
          },
        ],
      },
      {
        title: "Из чего состоит полноценный аудит видимости",
        blocks: [
          {
            title: "1. Карта всех точек и корректность геопривязки",
            body: "Проверяем координаты, принадлежность к зданию, точку входа, дубли и ошибки адреса. Частая проблема: булавка стоит «не там» - клиенты теряются, снижается конверсия, растёт негатив.",
          },
          {
            title: "2. Категория бизнеса и релевантность",
            body: "Категория влияет на выдачу не меньше, чем ключевые слова. Неверная категория = невидимость для целевой аудитории. Пример: автомойка с категорией «магазин» будет почти не видна по релевантным запросам.",
          },
          {
            title: "3. Аудит карточки",
            body: "Описание, фото, логотип, сайт, телефоны, атрибуты услуг, часы, ссылки на соцсети, соответствие реальным данным. Чем полнее и точнее карточка - тем выше доверие и конверсия.",
          },
          {
            title: "4. Рейтинг и отзывы",
            body: "Анализ среднего рейтинга, количества и свежести отзывов, тематики негатива, скорости ответов и динамики. Сравниваем с конкурентами. Отзывы - один из ключевых факторов доверия.",
          },
          {
            title: "5. Конкурентное окружение",
            body: "Ближайшие конкуренты в радиусе 1–2 км, их карточки, категории, фото, метки, активность. Часто ТОП достигается не только сервисом, но и грамотным оформлением карточек.",
          },
          {
            title: "6. Видимость по типовым запросам",
            body: "Замеряем видимость по кластерам «услуга + район/город», «рядом со мной», брендовым и околокоммерческим запросам - отдельно в 2ГИС и Apple Maps, с учётом мобильной специфики и геолокации.",
          },
        ],
      },
      {
        title: "Пошаговый алгоритм самостоятельного аудита",
        blocks: [
          {
            title: "Шаг 1. Зафиксируйте единую версию NAP",
            body: "Название, адрес (с уточнениями входа), телефон, часы и сайт. Эти данные должны быть едиными в 2ГИС, Apple Maps, на сайте и в соцсетях. Любые расхождения снижают доверие алгоритмов.",
          },
          {
            title: "Шаг 2. Проверьте карточки и категорию",
            body: "Заполните все поля, проверьте релевантность категории и дополнительных рубрик, добавьте реальное описание, понятные фото фасада/интерьера/команды и ссылки на сайт/мессенджеры.",
          },
          {
            title: "Шаг 3. Геометка и точка входа",
            body: "Убедитесь, что булавка на нужном входе, особенно для ТЦ и бизнес‑центров. Добавьте фото, поясняющие вход, и краткую подсказку в описании.",
          },
          {
            title: "Шаг 4. Снимите видимость по кластерам",
            body: "Проверьте позиции по «услуга + район/город», «рядом со мной» и бренду. Сравните 2ГИС и Apple Maps и учтите различия интерфейсов и логики выдачи.",
          },
          {
            title: "Шаг 5. Проработайте отзывы",
            body: "Стабильно собирайте честные отзывы с текстом и фото, отвечайте на негатив по делу и закрывайте повторяющиеся проблемы на стороне сервиса. Это один из самых быстрых рычагов роста видимости.",
          },
          {
            title: "Шаг 6. Мониторинг и итерации",
            body: "Повторяйте замеры раз в 2–4 недели, фиксируйте изменения, тестируйте формулировки описаний и подбор фото. Смотрите на динамику и обратную связь пользователей.",
          },
        ],
      },
      {
        title: "Практические примеры и частые ошибки",
        blocks: [
          {
            title: "Пример 1. Неверная геометка",
            body: "Булавка стояла у соседнего подъезда, клиенты звонили «не могу найти вход». Перенос точки, фото фасада и подсказка в описании вернули до 30% потерянных визитов.",
          },
          {
            title: "Пример 2. Неполная карточка",
            body: "Не было фото, расписания и сайта. Заполнение карточки, добавление 8–12 реальных фото и корректной категории повысили видимость и CTR в 2ГИС/Apple Maps в 1.5–2 раза.",
          },
          {
            title: "Частые ошибки",
            body: [
              "Разные телефоны/часы в карточках и на сайте.",
              "Категория «мимо» - профиль показывается не тем пользователям.",
              "Отсутствие отзывов и ответов на них - низкое доверие и позиции.",
              "Стоковые фото вместо реальных - снижение конверсии.",
              "Игнорирование точки входа и панорам - потеря тёплых лидов.",
            ],
          },
        ],
      },
      {
        title: "FAQ: коротко о важном",
        blocks: [
          {
            title: "Как часто проводить аудит?",
            body: "Базово - раз в 3–6 месяцев или при любых изменениях: переезд, смена телефона, новый сайт, ребрендинг.",
          },
          {
            title: "С чего начать, если «всё плохо»?",
            body: "С NAP и геометки. Затем - категория, карточка, отзывы. После этого - замеры видимости и итерации.",
          },
          {
            title: "Когда ждать результат?",
            body: "Первые улучшения видимости возможны в течение 2–4 недель после исправления критичных ошибок. Устойчивый рост достигается регулярной работой в горизонте 1–3 месяцев.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Navigation & map apps visibility audit (Apple Maps, Waze): why it matters and how to do it",
    lead: [
      "For a U.S. business, visibility in navigation and map apps is not only about Google Maps. Apple Maps (via Apple Business Connect) and Waze can drive high-intent customers who are ready to visit or call. A visibility audit helps you identify data issues, weak listing content, reputation gaps, and ranking blockers.",
      "Map app traffic is the hottest kind of local traffic: the user is already looking for a nearby option and wants directions now. If your listing is incomplete or inaccurate, you lose the easiest conversions to competitors.",
    ],
    sections: [
      {
        title: "Why map apps visibility matters",
        blocks: [
          {
            title: "1. Map apps bring high-intent traffic",
            body: "Users open a map with clear intent: find the closest option, compare alternatives, and get directions. This is the final stage of the funnel. Low visibility means you’re losing the cheapest qualified visits.",
          },
          {
            title: "2. Apple Maps + Waze can materially impact leads",
            body: "Apple Maps is the default for iPhone users and is heavily used for driving and walking directions. Waze is popular for navigation and discovery while driving. Mistakes in these listings translate into missed visits from valuable audiences.",
          },
          {
            title: "3. Ranking depends on many signals",
            body: "Positions are influenced by NAP accuracy, business category, reviews/ratings, photo quality, website presence, hours, description, attributes, service areas, and real user engagement. An audit shows what’s holding you back.",
          },
          {
            title: "4. Data errors cause direct losses",
            body: "Wrong hours, phone, address, category, entrance notes, or photos can push users to a competitor instantly. One critical error can reduce visits significantly.",
          },
          {
            title: "5. Competitor context",
            body: "An audit reveals who ranks above you, why they win, how they collect reviews, and how they structure their listings. That becomes your roadmap to outperform.",
          },
        ],
      },
      {
        title: "What a full visibility audit includes",
        blocks: [
          {
            title: "1. Location coverage and pin accuracy",
            body: "Check coordinates, building assignment, entrance location, duplicates, and address errors. A common issue is the pin being slightly off - customers get lost, conversions drop, and negative feedback increases.",
          },
          {
            title: "2. Category relevance",
            body: "Category choice affects discovery as much as keywords. The wrong category means you won’t appear for your best queries.",
          },
          {
            title: "3. Listing quality",
            body: "Review descriptions, photos, logo, website link, phone numbers, attributes, hours, social links, and alignment with reality. More complete listings tend to convert better.",
          },
          {
            title: "4. Reviews & ratings",
            body: "Analyze average rating, volume, recency, themes in negative feedback, and response speed. Reviews are major trust and ranking signals.",
          },
          {
            title: "5. Local competitors",
            body: "Look at competitors within 1–2 miles: their categories, photos, listing completeness, and activity. Often the winner is not the best business - it’s the best-presented profile.",
          },
          {
            title: "6. Visibility measurements",
            body: "Measure visibility for clusters like “service + city/neighborhood,” “near me,” and branded queries - specifically in Apple Maps and Waze, and from mobile contexts.",
          },
        ],
      },
      {
        title: "Step-by-step: DIY audit",
        blocks: [
          {
            title: "Step 1. Lock down your NAP",
            body: "Standardize name, address (including suite/entrance notes), phone, hours, and website across Apple Maps, Waze, your website, and social profiles.",
          },
          {
            title: "Step 2. Fix listing fields and category",
            body: "Fill every field, validate primary and secondary categories, add a real description, and upload clear photos (exterior, interior, team) plus links.",
          },
          {
            title: "Step 3. Pin and entrance accuracy",
            body: "Confirm the pin points to the correct entrance (critical for malls and multi-tenant buildings). Add entry guidance text if needed.",
          },
          {
            title: "Step 4. Measure visibility",
            body: "Check rankings for your query clusters and compare results across apps. Consider device, location, and time (some results are contextual).",
          },
          {
            title: "Step 5. Work reviews",
            body: "Collect honest reviews consistently, respond to negatives with specifics, and address repeat issues operationally.",
          },
          {
            title: "Step 6. Iterate",
            body: "Re-check every 2–4 weeks, log changes, test different descriptions and photo sets, and track conversion actions.",
          },
        ],
      },
      {
        title: "Examples and common mistakes",
        blocks: [
          {
            title: "Example 1. Wrong pin",
            body: "If the pin points to a neighboring entrance, customers can’t find you. Fix: move the pin, add exterior photos, and include a short entry note.",
          },
          {
            title: "Example 2. Incomplete listing",
            body: "No photos, no hours, no website. Completing the listing, adding 8–12 real photos, and correcting the category can significantly improve visibility and CTR.",
          },
          {
            title: "Common mistakes",
            body: [
              "Different phones/hours between listings and your website.",
              "Wrong category (you show up for the wrong audience).",
              "No review strategy.",
              "Stock photos instead of real images.",
              "Ignoring entrance/pin details.",
            ],
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How often should you audit?",
            body: "Every 3–6 months, and after changes like relocation, phone updates, a new website, or rebranding.",
          },
          {
            title: "Where to start if it’s a mess?",
            body: "Start with NAP and pin accuracy. Then fix category and listing fields. Then reviews. After that, measure and iterate.",
          },
          {
            title: "When should you expect results?",
            body: "Initial improvements can show up within 2–4 weeks after critical fixes. Stable growth usually takes 1–3 months of consistent work.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "בדיקת נראות באפליקציות ניווט (Apple Maps, Waze): למה זה חשוב ואיך לבצע audit",
    lead: [
      "לעסק בישראל, נראות באפליקציות ניווט היא לא רק “להופיע בגוגל”. Apple Maps (דרך Apple Business Connect) ו‑Waze יכולים להביא לקוחות עם כוונה גבוהה שממש עכשיו רוצים להגיע או להתקשר. בדיקת נראות עוזרת לאתר שגיאות נתונים, כרטיסים חלשים, פערים במוניטין וחסמים בדירוג.",
      "תנועה מאפליקציות ניווט היא הכי “חמה”: המשתמש כבר מחפש משהו קרוב ורוצה מסלול מיד. אם הכרטיס לא שלם או לא מדויק - המשתמש עובר למתחרה.",
    ],
    sections: [
      {
        title: "למה נראות באפליקציות ניווט חשובה",
        blocks: [
          {
            title: "1. זה תנועה עם כוונה גבוהה",
            body: "המשתמש נכנס למפה כדי למצוא פתרון קרוב, להשוות ולבנות מסלול. זו נקודת ההחלטה. נראות נמוכה משמעה איבוד ביקורים קלים.",
          },
          {
            title: "2. Apple Maps ו‑Waze משפיעות על פניות",
            body: "Apple Maps היא ברירת המחדל באייפון ומשמשת נהגים והולכי רגל. Waze נפוצה מאוד לניווט ולגילוי עסקים בזמן נסיעה. טעויות בכרטיס גורמות לאובדן לקוחות איכותיים.",
          },
          {
            title: "3. האלגוריתמים מסתכלים על הרבה אותות",
            body: "NAP, קטגוריות, ביקורות ודירוג, איכות תמונות, אתר, שעות, תיאור, אטריבוטים, אזורי שירות ואינטראקציות אמיתיות - כל אלה משפיעים.",
          },
          {
            title: "4. טעויות נתונים = הפסד ישיר",
            body: "שעות לא נכונות, טלפון שגוי, כתובת, קטגוריה או הנחיות כניסה - גורמים למשתמש לבחור מתחרה מיד.",
          },
          {
            title: "5. להבין את המתחרים",
            body: "הבדיקה חושפת מי מעליכם ולמה, איך הם אוספים ביקורות ואיך הכרטיסים שלהם בנויים. מכאן בונים תוכנית עקיפה.",
          },
        ],
      },
      {
        title: "מה כוללת בדיקת נראות מלאה",
        blocks: [
          {
            title: "1. כיסוי נקודות וסיכה נכונה",
            body: "בדיקת קואורדינטות, שיוך לבניין, נקודת כניסה, כפילויות ושגיאות כתובת. בעיה נפוצה: סיכה לא מדויקת → לקוחות הולכים לאיבוד.",
          },
          {
            title: "2. קטגוריה רלוונטית",
            body: "קטגוריה לא נכונה יכולה להפוך את העסק לבלתי נראה לקהל הנכון.",
          },
          {
            title: "3. איכות הכרטיס",
            body: "תיאור, תמונות, לוגו, אתר, טלפונים, אטריבוטים, שעות וקישורים - ככל שהכרטיס מלא ומדויק יותר, כך האמון וההמרות עולים.",
          },
          {
            title: "4. ביקורות ודירוגים",
            body: "בדיקה של דירוג ממוצע, כמות, טריות, נושאים שליליים ומהירות תגובה. ביקורות הן אות אמון מרכזי.",
          },
          {
            title: "5. מתחרים באזור",
            body: "מתחרים במרחק 1–2 ק״מ: קטגוריות, תמונות, איכות כרטיס ופעילות. לעיתים מי שמוביל הוא מי שמציג את הכרטיס הכי טוב.",
          },
          {
            title: "6. מדידות נראות",
            body: "מדידה לפי אשכולות כמו “שירות + עיר/שכונה”, “קרוב אליי”, ומותג - ספציפית ב‑Apple Maps וב‑Waze ובתרחיש מובייל.",
          },
        ],
      },
      {
        title: "שלב‑אחר‑שלב: audit עצמאי",
        blocks: [
          {
            title: "שלב 1. ליישר NAP",
            body: "אחידות בשם, כתובת (כולל כניסה), טלפון, שעות ואתר בין Apple Maps, Waze, האתר והרשתות החברתיות.",
          },
          {
            title: "שלב 2. למלא שדות וקטגוריות",
            body: "להשלים את כל השדות, לבחור קטגוריה נכונה, להוסיף תיאור אמיתי ותמונות ברורות (חזית/פנים/צוות) וקישורים.",
          },
          {
            title: "שלב 3. סיכה וכניסה",
            body: "לוודא שהסיכה בכניסה הנכונה, במיוחד בקניונים ובבניינים עם הרבה עסקים.",
          },
          {
            title: "שלב 4. למדוד נראות",
            body: "לבדוק דירוגים לפי אשכולות חיפוש ולהשוות בין האפליקציות, תוך התחשבות במיקום ובמכשיר.",
          },
          {
            title: "שלב 5. לעבוד עם ביקורות",
            body: "לאסוף ביקורות אמינות באופן קבוע ולהגיב בצורה עניינית, ולפתור בעיות שחוזרות ברמה התפעולית.",
          },
          {
            title: "שלב 6. איטרציה",
            body: "לחזור למדידה כל 2–4 שבועות, לתעד שינויים, ולבדוק ניסוחים שונים ותמונות שונות.",
          },
        ],
      },
      {
        title: "דוגמאות וטעויות נפוצות",
        blocks: [
          {
            title: "דוגמה 1. סיכה לא נכונה",
            body: "אם הסיכה על כניסה אחרת, הלקוחות לא מוצאים. פתרון: להזיז סיכה, להוסיף תמונות חזית, ולהוסיף הערת כניסה קצרה.",
          },
          {
            title: "דוגמה 2. כרטיס לא שלם",
            body: "אין תמונות/שעות/אתר. השלמה מלאה, הוספת 8–12 תמונות אמיתיות ותיקון קטגוריה יכולים להעלות נראות ו‑CTR משמעותית.",
          },
          {
            title: "טעויות נפוצות",
            body: [
              "טלפונים/שעות שונים בין כרטיסים לאתר.",
              "קטגוריה לא נכונה.",
              "אין אסטרטגיית ביקורות.",
              "תמונות סטוק.",
              "התעלמות מנקודת כניסה/סיכה.",
            ],
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "כל כמה זמן לבצע בדיקה?",
            body: "כל 3–6 חודשים, וגם אחרי מעבר, שינוי טלפון, אתר חדש או מיתוג מחדש.",
          },
          {
            title: "מאיפה מתחילים אם “הכול גרוע”?",
            body: "מ‑NAP ומיקום הסיכה. אחר כך קטגוריות ושדות הכרטיס. אחר כך ביקורות. ואז מדידה ואיטרציות.",
          },
          {
            title: "מתי רואים תוצאה?",
            body: "שיפור ראשוני יכול להופיע תוך 2–4 שבועות אחרי תיקונים קריטיים. צמיחה יציבה לרוב דורשת 1–3 חודשים של עבודה עקבית.",
          },
        ],
      },
    ],
  },
};

export default content;
