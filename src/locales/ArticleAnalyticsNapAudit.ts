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
      "Анализ картографических данных (NAP‑аудит): зачем он нужен, чего ожидать и как его проводить",
    lead: [
      "NAP‑аудит и анализ картографических данных для белорусского бизнеса - это комплексная проверка корректности контактной информации в Минске, Бресте, Гомеле и других городах Беларуси в Google Картах, Яндекс Бизнесе, 2ГИС и других площадках. Такой аудит помогает найти несоответствия и усилить локальное SEO на белорусском рынке.",
      "Для локального бизнеса корректность контактных данных - один из ключевых факторов успеха в поиске и картах. В отличие от «общего» SEO, где фокус на ссылках, структуре и контенте, локальное SEO во многом зависит от того, насколько точно поисковые системы понимают, кто вы, где вы и как с вами связаться. От этого зависят показы в картах, попадание в локальный «топ‑3» и клики по кнопкам «Позвонить», «Маршрут», «Сайт».",
    ],
    sections: [
      {
        title: "Что такое NAP и почему это важно",
        blocks: [
          {
            title: "Расшифровка и расширение сокращения",
            body: "NAP - это Name (название компании), Address (адрес), Phone (телефон). Иногда добавляют Website (сайт) и Hours (часы работы). Всё вместе - это «цифровая идентичность» бизнеса, по которой алгоритмы сопоставляют карточки, отзывы, упоминания и сайт.",
          },
          {
            body: "Если в разных источниках - на картах, в каталогах, отзовиках, агрегаторах и соцсетях - данные отличаются, поисковики не могут однозначно определить, что речь об одной и той же компании. В итоге падает доверие к карточке, ухудшаются позиции, «размазываются» поведенческие сигналы и отзывы, а пользователи получают противоречивую информацию.",
          },
        ],
      },
      {
        title: "Зачем нужен NAP‑аудит",
        blocks: [
          {
            body: [
              "Повысить видимость в локальном поиске: совпадение данных в ключевых источниках усиливает доверие Google и Яндекса и помогает чаще попадать в локальные блоки и карты.",
              "Сделать путь клиента короче: верный адрес, понятный вход, правильный телефон и режим работы - меньше негатива и больше целевых звонков.",
              "Выявить и устранить дубли: дубликаты карточек крадут показы, делят отзывы и сбивают аналитику.",
              "Создать прочный фундамент для SEO: без «чистых» NAP‑данных любая стратегия продвижения работает хуже - от контента до поведенческих факторов.",
            ],
          },
        ],
      },
      {
        title: "Из чего состоит полноценный NAP‑аудит",
        blocks: [
          {
            body: [
              "Проверка базовых карточек Google Business Profile и Яндекс Бизнес: название, категория, адрес, телефон, часы, URL, фото и структура контента. Итог - детальный чек‑лист по секциям.",
              "Поиск всех упоминаний компании: Google Maps, Яндекс Карты, 2ГИС, профкаталоги, агрегаторы, сайты отзывов, соцсети - обычно десятки площадок.",
              "Сравнение данных между источниками: точность названия (до дефисов и пробелов), адрес, телефон, URL и часы. Любое расхождение фиксируется.",
              "Поиск и анализ дублей карточек: совпадающие по названию, со старыми данными или созданные автоматически.",
              "Проверка геометки: булавка часто стоит в соседнем доме/на парковке/у другого входа - это напрямую влияет на конверсию.",
              "Анализ категорий и подкатегорий: рекомендации по основной/дополнительным категориям, описанию, географическому охвату и атрибутам.",
            ],
          },
        ],
      },
      {
        title: "Что считать результатом аудита",
        blocks: [
          {
            body: [
              "Сводная таблица с актуальными и целевыми NAP‑данными по всем источникам.",
              "Список дублей и «призрачных» карточек с рекомендациями: удалить, объединить, запросить права.",
              "Чек‑лист правок в основных профилях и на сайте: от категорий до атрибутов и фото.",
              "Рекомендации по геометке и отображению на панорамах/мобильных устройствах.",
              "Первичные метрики и точки контроля: показы, клики, звонки, маршруты, брендовые запросы.",
            ],
          },
        ],
      },
      {
        title: "Как провести NAP‑аудит самостоятельно: пошагово",
        blocks: [
          {
            body: "Ниже - практический сценарий для владельца локального бизнеса или маркетолога. Он не заменяет опыт специалиста, но позволяет навести порядок и избежать самых частых ошибок.",
          },
          {
            title: "Шаг 1. Зафиксируйте «единую версию правды»",
            body: "Выпишите точное название компании, адрес с уточнениями (этаж, офис, вход со двора), основной телефон, сайт и часы работы по дням. Эти данные должны совпадать во всех источниках. Избегайте вариативности: «ул.» vs «улица», «оф.» vs «офис», разные форматирования телефона - всё это важно.",
          },
          {
            title: "Шаг 2. Найдите все упоминания",
            body: "Пройдите по Google/Яндекс, 2ГИС, отраслевым каталогам и соцсетям. Ищите по названию, телефону и адресу. Сохраните ссылки в таблицу и отметьте статус: «актуально», «нужно править», «дубль», «запросить права».",
          },
          {
            title: "Шаг 3. Сравните поля и зафиксируйте расхождения",
            body: "Для каждой площадки проверьте: точность названия, адрес, телефон, сайт, часы, категории, фотографии. Любое несовпадение помечайте. Не забывайте про микро‑детали: «ООО», регистр букв, дефисы, формат номера.",
          },
          {
            title: "Шаг 4. Наведите порядок с доступами и дублями",
            body: "Запросите права на карточки, созданные «кем‑то раньше», отправьте жалобы на ошибочные профили и заявки на объединение дублей там, где это возможно. Зафиксируйте, из каких аккаунтов ведутся карточки и кто отвечает.",
          },
          {
            title: "Шаг 5. Приведите к единому NAP",
            body: "Начните с ключевых площадок (Google, Яндекс, 2ГИС), затем пройдитесь по остальным. Синхронизируйте поля, заполните описание, выберите корректные категории и атрибуты, добавьте ссылки и часы, проверьте геометку.",
          },
          {
            title: "Шаг 6. Проверьте геопозицию и отображение",
            body: "Убедитесь, что метка стоит на правильном здании и у нужного входа, фасад читается на панорамах, карточка корректно отображается на мобильных устройствах (Android/iOS). При необходимости уточните точку входа.",
          },
          {
            title: "Шаг 7. Зафиксируйте базовые метрики",
            body: "Добавьте UTM‑метки к ссылке на сайт из карточек, снимите стартовые показатели: показы, клики, звонки, маршруты. Через 2–4 недели повторите снятие метрик, чтобы увидеть динамику.",
          },
        ],
      },
      {
        title: "Типичные ошибки и как их избежать",
        blocks: [
          {
            body: [
              "Разные телефоны, адреса и названия в разных сервисах - падает доверие и видимость.",
              "Неверно выбранные или слишком общие категории - профиль «не туда» ранжируется и теряет трафик.",
              "Шаблонное описание без полезных деталей и реальных запросов - низкий CTR и конверсия.",
              "Старые или стоковые фотографии - снижается доверие и привлекательность карточки.",
              "Игнорирование дублей - отзывы и рейтинг размазываются, а алгоритмы путаются.",
              "Несоответствие данных сайта и карточек - поисковики видят конфликт и снижают уверенность.",
            ],
          },
        ],
      },
      {
        title: "Связка с сайтом: почему NAP важен для всего SEO",
        blocks: [
          {
            body: "NAP‑аудит - это не только про карты. Когда сайт и карточки согласованы по данным и структуре, поисковые системы получают чёткий сигнал: «этот бизнес действительно оказывает эти услуги в этом городе». Сайт усиливает релевантность, карточки - поведенческие и локальные сигналы, а вместе они создают устойчивую видимость и в органике, и в картах.",
          },
          {
            body: "На стороне сайта важно, чтобы названия услуг, адрес и телефон совпадали с картами, а страницы под услуги и районы были оформлены понятно: заголовки, описание, примеры работ, блоки доказательств, удобные способы связи. Это влияет и на конверсию, и на скорость роста.",
          },
        ],
      },
      {
        title: "Чего ожидать после наведения порядка",
        blocks: [
          {
            body: [
              "Более ровная и предсказуемая видимость по брендовым и базовым локальным запросам.",
              "Рост кликов по кнопкам «Позвонить», «Маршрут», «Сайт» и увеличение доли целевых обращений.",
              "Снижение количества негативных отзывов, связанных с путаницей в адресе/графике/телефоне.",
              "Проще масштабировать SEO: добавлять страницы под услуги/районы и подключать ссылочные сигналы.",
            ],
          },
        ],
      },
      {
        title: "Краткая памятка",
        blocks: [
          {
            body: [
              "Зафиксируйте единую версию NAP и используйте её везде.",
              "Соберите все упоминания и дубли в одну таблицу со статусами.",
              "Синхронизируйте поля, начните с Google/Яндекс/2ГИС.",
              "Проверьте метку на карте, панорамы и мобильную выдачу.",
              "Подключите базовую аналитику и измерьте динамику через 2–4 недели.",
            ],
          },
        ],
      },
      {
        title: "Практические примеры: что именно исправлять",
        blocks: [
          {
            title: "Пример 1. Разные телефоны и URL",
            body: "Ситуация: в Google указан старый городской номер и сайт на поддомене, а в Яндекс и 2ГИС - мобильный и новый домен. Что делаем: выбираем один основной номер (чаще - короткий и запоминающийся), везде приводим его к единому формату и указываем основной сайт. Старые адреса оставляем как дополнительную информацию (если нужно) или удаляем.",
          },
          {
            title: "Пример 2. Геометка на соседнем доме",
            body: "Ситуация: булавка стоит у 3‑го подъезда, а вход к вам - со двора у 1‑го. Клиенты теряются, появляются жалобы. Что делаем: корректируем точку на фасаде у правильного входа, добавляем фото фасада и короткую подсказку в описании (например: «Вход со стороны дворика, через арку, 1‑й подъезд»).",
          },
          {
            title: "Пример 3. Дубли после переезда",
            body: "Ситуация: переехали, но старая карточка сохранилась и продолжает собирать часть отзывов и кликов. Что делаем: запрашиваем права на старую карточку, закрываем её как переехавшую или объединяем со свежей, переносим актуальные данные, чтобы отзывы и рейтинг не были «размазаны».",
          },
        ],
      },
      {
        title: "FAQ: частые вопросы про NAP‑аудит",
        blocks: [
          {
            title: "Сколько площадок нужно проверять?",
            body: "Минимум - Google, Яндекс и 2ГИС. Далее - отраслевые каталоги, локальные справочники и крупные отзовики. В зависимости от города/ниши список может быть от 10 до 40 источников.",
          },
          {
            title: "Как часто повторять аудит?",
            body: "Базовая проверка - раз в 3–6 месяцев, а также после любых изменений: переезд, смена номера, ребрендинг, изменение графика работы или сайта.",
          },
          {
            title: "Что делать, если подрядчик потерял доступы?",
            body: "Инициировать восстановление доступа через официальные процедуры площадок: подтверждение прав через телефон, e‑mail, письма или видеоверфикацию. На будущее - храните список владельцев и менеджеров в отдельном документе.",
          },
          {
            title: "Сколько времени займут правки?",
            body: "На сбор и сверку данных уходит 1–3 дня, на наведение порядка - от нескольких дней до пары недель (зависит от модерации и количества площадок). Эффект по метрикам обычно заметен в течение 2–4 недель.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Map listings data audit (NAP audit): why it matters, what to expect, and how to do it",
    lead: [
      "A NAP audit for a U.S. business is a systematic review of how accurate and consistent your business information is across Google Business Profile / Google Maps, Apple Maps, and major directories and review platforms. A proper audit finds inconsistencies, fixes trust signals, and strengthens your local SEO in your city and surrounding neighborhoods.",
      "For local businesses, correct contact data is one of the most important ranking and conversion factors. Unlike “traditional” SEO (links, site structure, content), local SEO heavily depends on whether platforms can clearly understand who you are, where you’re located, and how to reach you. That affects Maps visibility, local pack inclusion, and clicks on “Call,” “Directions,” and “Website.”",
    ],
    sections: [
      {
        title: "What NAP means and why it matters",
        blocks: [
          {
            title: "Definition",
            body: "NAP stands for Name, Address, Phone. Many audits also include Website and Hours. Together, these form your business’s “digital identity” - the data local platforms use to connect your listings, reviews, citations, and website.",
          },
          {
            body: "When data differs across Maps, directories, review sites, and social profiles, platforms can’t confidently determine it’s the same business. The result is lower trust, weaker rankings, split reviews/signals, and customers seeing conflicting information.",
          },
        ],
      },
      {
        title: "Why you need a NAP audit",
        blocks: [
          {
            body: [
              "Improve local visibility: consistent data across primary sources increases trust and can help you show up more often in the local pack and Maps.",
              "Shorten the customer path: correct address, suite info, entry notes, phone, and hours reduce frustration and increase calls.",
              "Find and fix duplicates: duplicate listings split reviews and visibility and can break reporting.",
              "Build a reliable SEO foundation: without clean NAP signals, other work (content, links, UX) tends to perform worse.",
            ],
          },
        ],
      },
      {
        title: "What a full NAP audit includes",
        blocks: [
          {
            body: [
              "Review your core profiles (Google Business Profile and Apple Business Connect / Apple Maps): business name, categories, address, phone, hours, website URL, photos, attributes, and content completeness.",
              "Find all citations and mentions: Google Maps, Apple Maps, Yelp, Facebook, industry directories, data aggregators, and review sites - often dozens of sources.",
              "Compare fields across sources: spelling, suite numbers, address formatting, phone format, website URL, and hours. Document every mismatch.",
              "Identify duplicates and outdated listings: old locations, auto-generated profiles, or near-duplicates.",
              "Validate the map pin and entrance location (critical for malls and multi-tenant buildings).",
              "Evaluate categories and subcategories: recommendations for primary category, secondary categories, service area, and attributes.",
            ],
          },
        ],
      },
      {
        title: "What the outcome should look like",
        blocks: [
          {
            body: [
              "A single “source of truth” table with your correct NAP (and website/hours) plus links to every listing.",
              "A list of duplicates/ghost profiles with clear actions: merge, remove, claim, or report.",
              "A prioritized fix checklist for your main profiles and your website.",
              "Pin/entrance recommendations for Maps and mobile navigation.",
              "Baseline metrics to track: impressions, calls, direction requests, website clicks, and branded queries.",
            ],
          },
        ],
      },
      {
        title: "How to run a NAP audit yourself (step by step)",
        blocks: [
          {
            body: "This is a practical workflow for an owner or marketer. It won’t replace a specialist, but it helps you clean up the most common issues.",
          },
          {
            title: "Step 1. Define your single source of truth",
            body: "Write down your exact business name, full address (suite/floor/entry details), primary phone, website, and hours by day. Use the same format everywhere (avoid variations like “Ste.” vs “Suite” or different phone formatting).",
          },
          {
            title: "Step 2. Find all mentions",
            body: "Search across Google, Apple Maps, Yelp, industry directories, and social platforms. Search by business name, phone, and address. Save each URL into a spreadsheet and mark status: correct, needs edits, duplicate, needs claiming.",
          },
          {
            title: "Step 3. Compare fields and record mismatches",
            body: "For each platform, verify name, address, phone, website, hours, categories, and photos. Tag every mismatch - small differences (hyphens, spacing, suite numbers) matter.",
          },
          {
            title: "Step 4. Fix access and duplicates",
            body: "Claim profiles created previously, report incorrect listings, and request merges where possible. Document which accounts own or manage each profile.",
          },
          {
            title: "Step 5. Standardize NAP",
            body: "Start with Google Business Profile and Apple Maps, then update the rest. Sync fields, fill descriptions, choose accurate categories/attributes, add URLs and hours, and verify the map pin.",
          },
          {
            title: "Step 6. Validate pin placement and mobile display",
            body: "Make sure the pin sits on the correct building and near the right entrance. Confirm the listing renders correctly on Android and iOS navigation. Add helpful entry notes when needed.",
          },
          {
            title: "Step 7. Track baseline metrics",
            body: "Add UTM tags to your website link where possible. Record baseline metrics: impressions, calls, direction requests, and website clicks. Re-check in 2–4 weeks to measure impact.",
          },
        ],
      },
      {
        title: "Common mistakes",
        blocks: [
          {
            body: [
              "Different phone numbers / addresses / names across platforms (reduces trust and visibility).",
              "Overly broad or wrong categories (you rank for the wrong intent).",
              "Generic descriptions with no real details (low CTR and conversion).",
              "Stock or outdated photos (low trust).",
              "Ignoring duplicates (splits reviews and signals).",
              "Website data not matching profile data (platforms see a conflict).",
            ],
          },
        ],
      },
      {
        title: "How your website ties in",
        blocks: [
          {
            body: "A NAP audit is not only about Maps. When your website and your listings match, platforms get a clear signal: “this business provides these services at this location.” Your site supports relevance, and your profiles support local and behavioral signals - together they improve stable visibility.",
          },
          {
            body: "On your website, make sure services, address, and phone match your listings exactly, and that service/location pages are clear: strong headings, concise descriptions, examples, proof blocks (reviews/case studies), and easy contact methods.",
          },
        ],
      },
      {
        title: "What to expect after cleanup",
        blocks: [
          {
            body: [
              "More consistent visibility for branded and core local queries.",
              "More clicks on “Call,” “Directions,” and “Website,” increasing qualified leads.",
              "Fewer negative reviews related to confusion about hours, address, or phone.",
              "Easier scaling of local SEO with new service/location pages and citation work.",
            ],
          },
        ],
      },
      {
        title: "Quick checklist",
        blocks: [
          {
            body: [
              "Define your single NAP version and reuse it everywhere.",
              "Collect all listings and duplicates into one spreadsheet.",
              "Sync core profiles first (Google Business Profile + Apple Maps), then the rest.",
              "Validate the pin and entrance; check mobile navigation.",
              "Track baseline metrics and re-measure in 2–4 weeks.",
            ],
          },
        ],
      },
      {
        title: "Examples: what to fix",
        blocks: [
          {
            title: "Example 1. Different phones and URLs",
            body: "Scenario: Google shows an old landline and a subdomain, while other platforms show a mobile number and a new domain. Fix: pick one primary phone (usually the simplest to remember), standardize formatting everywhere, and point all profiles to your primary website. Keep old numbers only if required and clearly labeled.",
          },
          {
            title: "Example 2. Pin on the wrong building",
            body: "Scenario: the pin points to a neighboring entrance, so customers can’t find you. Fix: move the pin to the correct entrance, add facade photos, and include a short entry note (e.g., “Entrance on the courtyard side, next to the archway”).",
          },
          {
            title: "Example 3. Duplicates after moving",
            body: "Scenario: you moved, but the old listing still exists and captures reviews/clicks. Fix: claim the old profile, mark it as moved/closed, or merge when supported, so reviews and signals don’t split.",
          },
        ],
      },
      {
        title: "FAQ",
        blocks: [
          {
            title: "How many platforms should you check?",
            body: "At minimum: Google Business Profile / Google Maps and Apple Maps. Then Yelp and the directories/review sites that matter for your industry. Depending on market and niche, you may audit 10–40 sources.",
          },
          {
            title: "How often should you repeat the audit?",
            body: "Every 3–6 months, and after major changes: relocation, phone number updates, rebrand, hours changes, or website changes.",
          },
          {
            title: "What if an agency lost access?",
            body: "Use the official recovery flows for each platform (phone/email verification, documentation, video verification). Going forward, keep an internal owner/manager list in a dedicated document.",
          },
          {
            title: "How long do fixes take?",
            body: "Collecting and comparing data usually takes 1–3 days. Cleanup can take from a few days to a couple of weeks depending on verification and moderation. The impact is often measurable in 2–4 weeks.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "בדיקת נתוני מפות (NAP audit): למה זה חשוב, למה לצפות ואיך לבצע את זה נכון",
    lead: [
      "בדיקת NAP לעסק בישראל היא סקירה שיטתית של דיוק ועקביות פרטי העסק שלכם ב‑Google Business Profile / Google Maps, Apple Maps (Apple Business Connect), Waze, ובספריות/אתרי ביקורות נפוצים. בדיקה נכונה מאתרת חוסר עקביות, מחזקת אמון ומשפרת SEO מקומי.",
      "לעסק מקומי, דיוק נתוני קשר הוא גורם קריטי גם לדירוג וגם להמרות. בניגוד ל‑SEO “כללי” (קישורים, מבנה ותוכן), SEO מקומי תלוי מאוד בכך שפלטפורמות יבינו בבירור מי אתם, איפה אתם נמצאים ואיך ליצור קשר. זה משפיע על נראות במפות, הופעה ב‑local pack, וקליקים על “התקשר”, “ניווט”, “אתר”.",
    ],
    sections: [
      {
        title: "מה זה NAP ולמה זה חשוב",
        blocks: [
          {
            title: "הגדרה",
            body: "NAP הם ראשי תיבות של Name (שם העסק), Address (כתובת), Phone (טלפון). לעיתים מוסיפים Website (אתר) ו‑Hours (שעות פעילות). יחד זה יוצר “זהות דיגיטלית” שממנה פלטפורמות מחברות בין כרטיסי עסק, ביקורות, אזכורים והאתר.",
          },
          {
            body: "כשנתונים שונים בין מפות, ספריות, אתרי ביקורות ורשתות חברתיות - למנועי החיפוש קשה לוודא שמדובר באותו עסק. התוצאה: פחות אמון, דירוג נמוך יותר, ביקורות וסיגנלים מתפצלים, ומשתמשים רואים מידע סותר.",
          },
        ],
      },
      {
        title: "למה צריך בדיקת NAP",
        blocks: [
          {
            body: [
              "לשפר נראות מקומית: עקביות בנתונים בפלטפורמות מרכזיות מחזקת אמון ועוזרת להופיע יותר במפות וב‑local pack.",
              "לקצר את המסלול ללקוח: כתובת נכונה, פרטי כניסה, טלפון ושעות - פחות תסכול ויותר שיחות.",
              "לאתר כפילויות: כרטיסים כפולים מפצלים ביקורות ונראות ומקשים על מדידה.",
              "לבנות בסיס יציב ל‑SEO: בלי NAP נקי, גם עבודה על תוכן/חוויית משתמש תעבוד פחות טוב.",
            ],
          },
        ],
      },
      {
        title: "מה כוללת בדיקה מלאה",
        blocks: [
          {
            body: [
              "בדיקת כרטיסים מרכזיים: Google Business Profile וגם Apple Business Connect/Apple Maps - שם, קטגוריות, כתובת, טלפון, שעות, אתר, תמונות ואטריבוטים.",
              "איתור כל האזכורים: Google Maps, Apple Maps, Waze, פייסבוק, ספריות ענפיות ואתרי ביקורות - לעיתים עשרות מקורות.",
              "השוואת שדות: כתובת (כולל דירה/קומה/כניסה), פורמט טלפון, URL ושעות - ותיעוד כל חוסר התאמה.",
              "זיהוי כפילויות וכרטיסים ישנים.",
              "בדיקת מיקום הסיכה והכניסה (חשוב במיוחד בקניונים ובבניינים משותפים).",
              "בדיקת קטגוריות ותתי‑קטגוריות והמלצות לשיפור.",
            ],
          },
        ],
      },
      {
        title: "מה נחשב תוצאה טובה",
        blocks: [
          {
            body: [
              "טבלת “גרסת אמת אחת” עם NAP נכון + קישורים לכל הכרטיסים.",
              "רשימת כפילויות/כרטיסים “רפאים” עם פעולה: איחוד, הסרה, דרישת בעלות או דיווח.",
              "צ’ק‑ליסט תיקונים לפי עדיפות לכרטיסים ולאתר.",
              "המלצות לסיכה/כניסה ולתצוגה במובייל.",
              "מדדי בסיס: חשיפות, שיחות, בקשות ניווט, קליקים לאתר ושאילתות מותג.",
            ],
          },
        ],
      },
      {
        title: "איך לבצע בדיקה לבד (שלב‑אחר‑שלב)",
        blocks: [
          {
            body: "זהו תהליך פרקטי לבעל עסק או למשווק. הוא לא מחליף מומחה, אבל מאפשר לנקות את הבעיות הנפוצות ביותר.",
          },
          {
            title: "שלב 1. להגדיר “גרסת אמת אחת”",
            body: "רשמו שם עסק מדויק, כתובת מלאה (כולל קומה/כניסה), טלפון ראשי, אתר ושעות לפי ימים. שמרו על פורמט אחיד בכל מקום.",
          },
          {
            title: "שלב 2. לאתר את כל האזכורים",
            body: "חפשו בגוגל, Apple Maps, Waze, ספריות ענפיות ורשתות חברתיות לפי שם/טלפון/כתובת. שמרו את הקישורים בגיליון וסמנו סטטוס: תקין, לתיקון, כפול, דורש בעלות.",
          },
          {
            title: "שלב 3. להשוות שדות ולתעד חוסר התאמות",
            body: "בדקו בכל מקור: שם, כתובת, טלפון, אתר, שעות, קטגוריות ותמונות. גם פרטים קטנים (מקפים, רווחים, מספר דירה) חשובים.",
          },
          {
            title: "שלב 4. לטפל בהרשאות ובכפילויות",
            body: "דרשו בעלות על כרטיסים ישנים, דווחו על כרטיסים שגויים ובקשו איחוד כשאפשר. תעדו מי מנהל כל כרטיס ובאיזה חשבון.",
          },
          {
            title: "שלב 5. ליישר NAP",
            body: "התחילו מכרטיסי הליבה (Google Business Profile, Apple Maps/Waze), ואז עדכנו את השאר. מלאו תיאור, קטגוריות, אטריבוטים, קישורים ושעות, וודאו שהסיכה נכונה.",
          },
          {
            title: "שלב 6. לבדוק סיכה ותצוגה במובייל",
            body: "וודאו שהסיכה על הבניין הנכון ובכניסה הנכונה. בדקו ניווט במובייל. הוסיפו הערת כניסה קצרה כשצריך.",
          },
          {
            title: "שלב 7. למדוד מדדי בסיס",
            body: "הוסיפו UTM לקישור לאתר כשאפשר. רשמו מדדי בסיס: חשיפות, קליקים, שיחות וניווט. מדדו שוב אחרי 2–4 שבועות.",
          },
        ],
      },
      {
        title: "טעויות נפוצות",
        blocks: [
          {
            body: [
              "טלפונים/כתובות/שמות שונים בין מקורות (פוגע באמון ובנראות).",
              "קטגוריות כלליות מדי או לא נכונות.",
              "תיאור גנרי בלי פרטים אמיתיים.",
              "תמונות סטוק/ישנות.",
              "התעלמות מכפילויות.",
              "אי התאמה בין האתר לכרטיסים.",
            ],
          },
        ],
      },
      {
        title: "הקשר לאתר",
        blocks: [
          {
            body: "בדיקת NAP היא לא רק מפות. כשהאתר והכרטיסים תואמים, הפלטפורמות מקבלות איתות ברור שהעסק אכן מספק שירותים במיקום הזה. האתר מחזק רלוונטיות, והכרטיסים מחזקים סיגנלים מקומיים והתנהגותיים.",
          },
          {
            body: "באתר חשוב שהשירותים, הכתובת והטלפון יתאימו בדיוק לכרטיסים, ושעמודי שירות/אזור יהיו ברורים עם כותרות, תיאור, דוגמאות, הוכחות (ביקורות/מקרים) ודרכי יצירת קשר.",
          },
        ],
      },
      {
        title: "למה לצפות אחרי ניקוי",
        blocks: [
          {
            body: [
              "נראות יציבה יותר בשאילתות מותג וביטויים מקומיים מרכזיים.",
              "יותר קליקים על “התקשר/ניווט/אתר” והגדלת פניות איכותיות.",
              "פחות ביקורות שליליות שנובעות מבלבול בשעות/כתובת/טלפון.",
              "יותר קל להרחיב SEO מקומי עם עמודים חדשים ועבודה על אזכורים.",
            ],
          },
        ],
      },
      {
        title: "צ’ק‑ליסט קצר",
        blocks: [
          {
            body: [
              "הגדירו גרסת NAP אחת.",
              "רכזו את כל הכרטיסים והכפילויות בגיליון.",
              "יישרו קודם את כרטיסי הליבה (Google + Apple Maps/Waze).",
              "בדקו סיכה וכניסה וניווט במובייל.",
              "מדדו מדדי בסיס וחזרו למדידה אחרי 2–4 שבועות.",
            ],
          },
        ],
      },
      {
        title: "דוגמאות לתיקונים",
        blocks: [
          {
            title: "דוגמה 1. טלפונים ו‑URL שונים",
            body: "מצב: מקור אחד מציג מספר ישן או אתר לא עדכני. תיקון: בחרו מספר ראשי אחד, אחידות בפורמט, וקישור לאתר הראשי בכל מקום.",
          },
          {
            title: "דוגמה 2. סיכה בבניין הלא נכון",
            body: "מצב: הסיכה מצביעה על כניסה אחרת והלקוחות לא מוצאים. תיקון: להזיז סיכה לכניסה הנכונה, להוסיף תמונות חזית והערת כניסה קצרה.",
          },
          {
            title: "דוגמה 3. כפילויות אחרי מעבר",
            body: "מצב: עברתם מקום והכרטיס הישן נשאר פעיל. תיקון: לדרוש בעלות, לסמן כעבר/נסגר או לאחד - כדי שהביקורות והסיגנלים לא יתפצלו.",
          },
        ],
      },
      {
        title: "שאלות נפוצות",
        blocks: [
          {
            title: "כמה מקורות צריך לבדוק?",
            body: "מינימום: Google Maps/Google Business Profile ו‑Apple Maps. לאחר מכן Waze ואתרי ביקורות/ספריות רלוונטיים לענף. לרוב זה 10–40 מקורות.",
          },
          {
            title: "כל כמה זמן לחזור על בדיקה?",
            body: "כל 3–6 חודשים, וגם אחרי שינויים משמעותיים: מעבר, שינוי טלפון, מיתוג מחדש, שינוי שעות, שינוי אתר.",
          },
          {
            title: "מה אם סוכנות איבדה גישה?",
            body: "להשתמש בתהליכי שחזור רשמיים של כל פלטפורמה (אימות טלפון/מייל/מסמכים/וידאו). מומלץ לשמור מסמך פנימי של בעלי/מנהלים.",
          },
          {
            title: "כמה זמן לוקחים תיקונים?",
            body: "איסוף והשוואה לרוב 1–3 ימים. ניקוי יכול לקחת ימים עד שבועות לפי אימות ומודרציה. השפעה נמדדת לעיתים בתוך 2–4 שבועות.",
          },
        ],
      },
    ],
  },
};

export default content;
