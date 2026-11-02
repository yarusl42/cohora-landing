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
      "Восстановление доступа к карточке Google Business Profile: зачем это нужно и как пройти процесс без лишних нервов",
    lead: [
      "Восстановление доступа к Google Business Profile для белорусского бизнеса - одна из самых частых проблем, с которой сталкиваются владельцы локального бизнеса в Минске, Бресте, Гомеле и других городах Беларуси. Потеря доступа может произойти по разным причинам, но в большинстве случаев её можно решить самостоятельно или с помощью специалистов.",
      "Потеря доступа к карточке Google Business Profile (бывший Google My Business, GMB) - одна из самых частых проблем, с которыми сталкиваются локальные бизнесы, маркетологи и агентства. Карточку могли создать много лет назад, под личную почту сотрудника, старого подрядчика или даже клиента. Контакты теряются, люди уходят, а карточка остаётся - и продолжает жить своей жизнью. В этой статье разберём, зачем вообще восстанавливать доступ, чего ожидать от процесса и как пройти его максимально спокойно и эффективно.",
    ],
    sections: [
      {
        title: "Зачем восстанавливать доступ к карточке GMB",
        blocks: [
          {
            title: "1. Контроль информации о компании",
            body: "Без доступа вы по сути не управляете тем, что видят клиенты в поиске и на картах. Вы не можете быстро поменять адрес, телефон, график работы, описание, фото и услуги. Алгоритмы Google периодически «подчищают» или дополняют данные автоматически, ориентируясь на сторонние источники и пользовательские правки. Иногда это помогает, но нередко приводит к ошибкам: неверный номер, старый адрес, неправильная рубрика. Если карточка не управляется владельцем, информация в ней постепенно устаревает, а часть клиентов просто перестаёт до вас доходить.",
          },
          {
            title: "2. Влияние на ранжирование и показы",
            body: "Google любит живые карточки, которыми кто‑то реально занимается. Когда владелец подтверждён, данные обновляются, появляются новые фото и посты, карточка чаще попадает в локальную выдачу. Это означает больше показов по целевым запросам, выше позиции в локальной выдаче и картах, больше кликов и звонков, больше маршрутов до вашей точки.",
          },
          {
            title: "3. Защита от подмены и ошибок",
            body: "Пока у вас нет контроля, карточка уязвима: пользователи могут предлагать правки, кто‑то может поменять категорию или телефон, появляются дубликаты. В худшем сценарии карточкой управляет бывший подрядчик или сотрудник, и вы об этом даже не знаете.",
          },
          {
            body: [
              "Оперативно отклонять неверные правки.",
              "Корректировать спорные моменты.",
              "Отслеживать, не появляются ли дубли и странные изменения.",
              "При необходимости обращаться в поддержку от имени подтверждённого владельца.",
            ],
          },
          {
            title: "4. Полноценная работа с карточкой",
            body: "Посты, кнопки записи/бронирования, подробное описание, услуги, фото команды и интерьера заметно повышают кликабельность и конверсию карточки. Но использовать эти инструменты в полной мере можно только тогда, когда вы владелец профиля, а не сторонний «редактор».",
          },
          {
            title: "5. Локальное SEO без полноценной карточки не работает",
            body: "В локальном SEO карточка Google - центральный элемент. Сайт, отзывы, поведение пользователей, упоминания в каталогах - всё это связывается вокруг неё. Если профиль «висячий» и неуправляемый, часть органического трафика просто не доходит до вас. Поэтому восстановление доступа - не технический вопрос «для галочки», а база для любой работы с локальным поиском.",
          },
        ],
      },
      {
        title: "Чего ожидать в процессе восстановления доступа",
        blocks: [
          {
            title: "1. По времени - от пары дней до нескольких недель",
            body: "В простых случаях всё решается быстро: текущий владелец подтверждает ваш запрос, и вы получаете права за несколько дней. Но если владелец не отвечает, есть подозрения на нарушения или требуется ручная проверка, процесс может растянуться на недели. Это нормально - важно заранее закладывать время.",
          },
          {
            title: "2. Google может попросить доказательства",
            body: "Чтобы убедиться, что вы действительно представляете бизнес, Google может запросить документы о регистрации, договор аренды, коммунальные квитанции, фото вывески и фасада, фото интерьера и оборудования, подтверждение владения доменом сайта.",
          },
          {
            title: "3. Разные сценарии",
            body: "Возможны разные варианты: владелец подтверждает быстро; владелец не реагирует и Google передаёт права; карточка принадлежит бывшему подрядчику/сотруднику и требует дополнительных проверок; профиль ограничен/заблокирован и нужна апелляция.",
          },
          {
            title: "4. Видеоподтверждение стало нормой",
            body: "В 2024–2025 годах Google активно использует видеоподтверждение. Обычно нужно снять короткое видео: фасад, адрес на табличке/двери, вывеску, вход и доступ внутрь, интерьер и рабочее пространство, оборудование или товар, связанный с бизнесом.",
          },
        ],
      },
      {
        title: "Пошаговая инструкция: как восстановить доступ к карточке",
        blocks: [
          {
            title: "Шаг 1. Найдите карточку",
            body: "Зайдите в Google Business Profile Manager и попробуйте найти карточку по названию, адресу и телефону. Параллельно полезно поискать себя в Google Maps вручную. Если карточка существует, вы увидите возможность «Запросить доступ». Если система пишет, что карточки нет, это ещё не гарантирует её отсутствие: иногда профиль скрыт или создан с отличиями в названии.",
          },
          {
            title: "Шаг 2. Нажмите «Запросить доступ»",
            body: "После выбора карточки Google покажет частично скрытую почту текущего владельца и его права. Заполните форму, опишите отношение к бизнесу и отправьте запрос на передачу прав.",
          },
          {
            title: "Шаг 3. Подождите реакции владельца",
            body: "Google даёт текущему владельцу 3–7 дней, чтобы отреагировать: он подтверждает запрос; он ничего не делает и Google может передать права; он отклоняет запрос и появляется опция апелляции.",
          },
          {
            title:
              "Шаг 4. При отсутствии реакции подтвердите владение самостоятельно",
            body: "Если владелец не ответил, система предложит самостоятельное подтверждение. Методы могут включать SMS/звонок, письмо на e‑mail с доменом компании, видеоподтверждение, загрузку документов. Видеоподтверждение часто самый надёжный вариант.",
          },
          {
            title: "Шаг 5. Подготовьте документы",
            body: "Если нужны доказательства, подойдут: договор аренды, коммунальные квитанции с адресом, свидетельство о регистрации, счета на компанию и любые официальные документы, где совпадают название и адрес. Главное - чтобы данные не противоречили карточке.",
          },
          {
            title: "Шаг 6. Пройдите видеопроверку",
            body: "Снимайте днём. Покажите здание и вывеску, табличку с адресом, войдите внутрь и покажите интерьер и рабочие зоны, а также оборудование/товар. Чем прозрачнее видео, тем проще модератору принять решение.",
          },
          {
            title: "Шаг 7. Дождитесь модерации",
            body: "Автоматические проверки обычно занимают до суток, ручные - 2–7 дней. В сложных случаях процесс может растянуться до пары недель. Важно не вносить резких противоречивых изменений в данные.",
          },
          {
            title: "Шаг 8. После получения доступа доведите карточку до ума",
            body: "После восстановления прав проверьте и выровняйте название и адрес, удалите нерелевантные фото, добавьте свежие фотографии, заполните описание и услуги, уточните график (включая праздники), настройте ссылки и атрибуты и опубликуйте первый пост.",
          },
        ],
      },
      {
        title: "Частые проблемы и что с ними делать",
        blocks: [
          {
            title: "Карточка «не находится»",
            body: "Попробуйте разные варианты: старые названия, старые телефоны и адреса, разные написания на русском и английском, поиск прямо в Google Maps по району.",
          },
          {
            title: "Карточка подтверждена другим человеком",
            body: "Если частично видимая почта похожа на бывшего сотрудника или агентство, всё равно оформляйте официальный запрос на доступ. Даже если человек не отвечает, со временем Google будет рассматривать именно вас как претендента на владение.",
          },
          {
            title: "Владелец отклонил запрос",
            body: "Тогда остаётся идти в апелляцию. Максимально подробно объясните, почему вы представляете реальный бизнес: приложите документы, ссылки на сайт/соцсети, фото точки. На практике Google чаще встаёт на сторону фактического владельца бизнеса.",
          },
          {
            title: "Сложности с видеоподтверждением",
            body: "Если видео отклоняют, обычно что‑то недостаточно видно: адрес, вывеска, связь между помещением и бизнесом. Переснимите днём, уделите внимание табличкам и входу.",
          },
          {
            title: "Нет «идеального» набора документов",
            body: "Не всегда у бизнеса есть полный пакет бумаг. Используйте то, что есть: коммунальные счета, письма от арендодателя, счета на компанию. Задача - показать, что вы реально существуете по адресу и ведёте деятельность.",
          },
        ],
      },
      {
        title: "Что делать после успешного восстановления",
        blocks: [
          {
            body: "Когда контроль над карточкой вернулся, важно не ограничиваться фактом «доступ есть». Настоящая работа только начинается.",
          },
          {
            body: [
              "Максимально заполните профиль: фото, описание, услуги, категории.",
              "Проверьте и устраните дубликаты.",
              "Начните системно работать с отзывами и отвечать на них.",
              "Следите за графиком работы, особенно в праздники.",
              "Подключите UTM‑метки к ссылкам на сайт.",
              "Планируйте посты и обновления хотя бы раз в 1–2 недели.",
            ],
          },
          {
            body: "Восстановление доступа к GMB - стратегический шаг: вы возвращаете себе контроль над одним из ключевых инструментов локального маркетинга. Процесс может занять время, но в обмен вы получаете полноценную управляемую точку присутствия в экосистеме Google, которая способна стабильно приводить клиентов из поиска и карт.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Recovering access to a Google Business Profile: why it matters and how to do it without unnecessary stress",
    lead: [
      "Losing access to a Google Business Profile is common-especially when the listing was created years ago under a former employee, contractor, or agency account. The good news: in most cases, you can recover access with a clear process.",
      "In this guide, we’ll cover why access recovery matters, what the process looks like, and a step-by-step approach to get ownership back.",
    ],
    sections: [
      {
        title: "Why you should recover access",
        blocks: [
          {
            title: "1. Control your business information",
            body: "Without access, you can’t reliably update address, phone, hours, description, photos, or services. Google may auto-update information based on third-party sources or user edits-which sometimes leads to wrong phone numbers, outdated addresses, or incorrect categories.",
          },
          {
            title: "2. Visibility and ranking impact",
            body: "Google rewards active, owner-managed profiles. When a listing is maintained (updates, photos, posts), it’s more likely to show for relevant local searches-driving more impressions, clicks, calls, and direction requests.",
          },
          {
            title: "3. Protection from edits and hijacking",
            body: "Without ownership, the listing is vulnerable: users can propose edits, categories and phone numbers can change, duplicates can appear, and sometimes a former contractor still has control.",
          },
          {
            body: [
              "Reject incorrect edits quickly.",
              "Fix disputed details.",
              "Monitor duplicates and strange changes.",
              "Contact support as a verified owner if needed.",
            ],
          },
          {
            title: "4. Full use of profile features",
            body: "Posts, booking buttons, services, and strong visuals improve conversion-but you need ownership to use these tools fully.",
          },
          {
            title: "5. Local SEO depends on the profile",
            body: "For local SEO, the Google profile is a core asset that ties together reviews, website signals, and citations. If the listing is unmanaged, you lose a portion of local demand.",
          },
        ],
      },
      {
        title: "What to expect during access recovery",
        blocks: [
          {
            title: "1. Timeline: days to weeks",
            body: "If the current owner approves your request, recovery can be quick. If they don’t respond, if the listing is restricted, or if manual review is needed, the process can take weeks.",
          },
          {
            title: "2. Proof may be required",
            body: "Google may ask for business registration documents, lease, utility bills, storefront signage photos, interior photos, or website domain proof.",
          },
          {
            title: "3. Multiple scenarios",
            body: "Owner approves; owner doesn’t respond and Google transfers ownership; the listing belongs to a former contractor and needs extra checks; the profile is suspended and requires an appeal.",
          },
          {
            title: "4. Video verification is common",
            body: "Video verification often includes: building exterior, visible address, business signage, entrance, interior/workspace, and equipment/products related to the business.",
          },
        ],
      },
      {
        title: "Step-by-step: how to recover access",
        blocks: [
          {
            title: "Step 1. Find the listing",
            body: "Use the Google Business Profile manager to search by name, address, and phone. Also search directly in Google Maps. If it exists, you’ll see an option to request access.",
          },
          {
            title: "Step 2. Request access",
            body: "Google will show a partially hidden email of the current owner. Fill out the request form and explain your relationship to the business.",
          },
          {
            title: "Step 3. Wait for the owner response",
            body: "Google gives 3–7 days. Outcomes: approved; no response and Google may transfer; rejected and you can appeal.",
          },
          {
            title: "Step 4. Verify ownership yourself (if needed)",
            body: "If there’s no response, you may be offered verification methods: phone/SMS, domain email, video, or documents. Video is often the most reliable.",
          },
          {
            title: "Step 5. Prepare documents",
            body: "Provide consistent proof of name and address: lease, utility bills, registration, invoices, or other official documents.",
          },
          {
            title: "Step 6. Complete video verification",
            body: "Record in daylight. Show signage, address, entrance, interior/work areas, and relevant equipment/products.",
          },
          {
            title: "Step 7. Wait for review",
            body: "Automated checks can be fast; manual review may take several days. Avoid making conflicting changes during review.",
          },
          {
            title: "Step 8. Optimize after access is restored",
            body: "Clean up the listing: standardize name/address, remove irrelevant photos, add fresh images, update services and description, confirm hours (including holidays), set action links and attributes, and publish a first post.",
          },
        ],
      },
      {
        title: "Common issues and fixes",
        blocks: [
          {
            title: "The listing can’t be found",
            body: "Try old names, old phone numbers/addresses, alternative spellings, and searching by area in Google Maps.",
          },
          {
            title: "The listing is owned by someone else",
            body: "Even if the email looks like an ex-employee or agency, submit the official request. If they don’t respond, Google may still consider you as the rightful owner.",
          },
          {
            title: "The owner rejected the request",
            body: "Submit an appeal with strong proof (documents, website/social links, location photos). Google often sides with the real operating business.",
          },
          {
            title: "Video verification problems",
            body: "Re-record in better lighting and ensure the address, signage, and connection to the business are clearly visible.",
          },
          {
            title: "No perfect document set",
            body: "Use what you have: utility bills, landlord letters, invoices-anything that proves you operate at the stated address.",
          },
        ],
      },
      {
        title: "After successful recovery",
        blocks: [
          {
            body: "Once access is back, don’t stop at “we have access”. Real improvement comes from ongoing maintenance.",
          },
          {
            body: [
              "Complete the profile with photos, services, and categories.",
              "Remove duplicates.",
              "Start systematic review management.",
              "Keep hours accurate (especially holidays).",
              "Add UTM tracking to your website link.",
              "Plan updates/posts every 1–2 weeks.",
            ],
          },
          {
            body: "Access recovery is a strategic step: it returns control over a key local marketing asset that can consistently drive calls and visits from Search and Maps.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "שחזור גישה ל‑Google Business Profile: למה זה חשוב ואיך לעבור את התהליך בלי לחץ מיותר",
    lead: [
      "אובדן גישה ל‑Google Business Profile הוא מצב נפוץ-במיוחד כשהכרטיס נפתח לפני שנים על חשבון של עובד לשעבר, קבלן או סוכנות. ברוב המקרים אפשר לשחזר גישה אם פועלים בצורה מסודרת.",
      "במדריך הזה נסביר למה חשוב לשחזר בעלות, למה לצפות בתהליך ואיך לבצע את זה שלב‑אחר‑שלב.",
    ],
    sections: [
      {
        title: "למה חשוב לשחזר גישה",
        blocks: [
          {
            title: "1. שליטה במידע",
            body: "בלי גישה אי אפשר לעדכן כתובת, טלפון, שעות, תיאור, תמונות ושירותים בצורה אמינה. Google עלולה לשנות מידע אוטומטית או לקבל עריכות של משתמשים-וזה לפעמים מוביל לטעויות.",
          },
          {
            title: "2. השפעה על נראות ודירוג",
            body: "Google מעדיפה כרטיסים פעילים שמנוהלים על ידי בעלים: עדכונים, תמונות ופוסטים יכולים להגדיל חשיפות, קליקים, שיחות ובקשות ניווט.",
          },
          {
            title: "3. הגנה מפני עריכות והשתלטות",
            body: "בלי בעלות הכרטיס פגיע: שינוי קטגוריה/טלפון, הופעת כפילויות, ולעיתים שליטה נשארת אצל קבלן לשעבר.",
          },
          {
            body: [
              "לדחות עריכות לא נכונות מהר.",
              "לתקן פרטים שנויים במחלוקת.",
              "לעקוב אחרי כפילויות ושינויים מוזרים.",
              "לפנות לתמיכה כבעלים מאומת.",
            ],
          },
          {
            title: "4. שימוש מלא בכלים",
            body: "פוסטים, שירותים, כפתורי הזמנה ותוכן ויזואלי משפרים המרה-אבל צריך בעלות כדי להשתמש בהם במלואם.",
          },
          {
            title: "5. SEO מקומי תלוי בכרטיס",
            body: "הכרטיס הוא נכס מרכזי שמחבר ביקורות, אתר ואזכורים. כרטיס לא מנוהל עלול לגרום לאיבוד ביקוש מקומי.",
          },
        ],
      },
      {
        title: "למה לצפות בתהליך השחזור",
        blocks: [
          {
            title: "1. זמן: ימים עד שבועות",
            body: "אם הבעלים הנוכחי מאשר, זה יכול להיות מהיר. אם אין תגובה או יש צורך בבדיקה ידנית, זה יכול לקחת שבועות.",
          },
          {
            title: "2. ייתכן שידרשו הוכחות",
            body: "Google יכולה לבקש מסמכי רישום עסק, חוזה שכירות, חשבונות עם כתובת, תמונות שילוט, תמונות פנים או הוכחת דומיין.",
          },
          {
            title: "3. כמה תרחישים",
            body: "אישור מהיר; אין תגובה והעברת בעלות; צורך בבדיקות נוספות מול סוכנות/עובד לשעבר; כרטיס חסום שדורש ערעור.",
          },
          {
            title: "4. אימות וידאו נפוץ",
            body: "אימות וידאו כולל לרוב: חזית הבניין, כתובת, שילוט העסק, כניסה, פנים/אזור עבודה, ציוד או מוצרים רלוונטיים.",
          },
        ],
      },
      {
        title: "שלב‑אחר‑שלב: איך לשחזר גישה",
        blocks: [
          {
            title: "שלב 1. למצוא את הכרטיס",
            body: "חפשו במנהל הכרטיסים לפי שם/כתובת/טלפון וגם ישירות ב‑Google Maps. אם הכרטיס קיים, תופיע אפשרות לבקש גישה.",
          },
          {
            title: "שלב 2. לבקש גישה",
            body: "תראו אימייל מוסתר חלקית של הבעלים. מלאו טופס והסבירו את הקשר לעסק.",
          },
          {
            title: "שלב 3. להמתין לתגובה",
            body: "Google נותנת 3–7 ימים. אפשרויות: אישור; אין תגובה והעברת בעלות; דחייה וערעור.",
          },
          {
            title: "שלב 4. לאמת לבד (אם צריך)",
            body: "אם אין תגובה, ייתכנו שיטות אימות: טלפון/SMS, אימייל דומיין, וידאו או מסמכים. וידאו לרוב הכי אמין.",
          },
          {
            title: "שלב 5. להכין מסמכים",
            body: "הציגו הוכחות עקביות לשם וכתובת: חוזה שכירות, חשבונות, רישום, חשבוניות או מסמך רשמי אחר.",
          },
          {
            title: "שלב 6. לבצע אימות וידאו",
            body: "לצלם באור יום ולהראות שילוט, כתובת, כניסה, אזורי עבודה וציוד/מוצרים.",
          },
          {
            title: "שלב 7. להמתין לבדיקה",
            body: "בדיקות אוטומטיות יכולות להיות מהירות; ידניות לוקחות כמה ימים. הימנעו משינויים סותרים בזמן הבדיקה.",
          },
          {
            title: "שלב 8. אופטימיזציה אחרי שחזור",
            body: "לאחד שם/כתובת, להסיר תמונות לא רלוונטיות, להוסיף תמונות חדשות, לעדכן שירותים ותיאור, לאשר שעות (כולל חגים), להגדיר קישורי פעולה ומאפיינים ולפרסם פוסט ראשון.",
          },
        ],
      },
      {
        title: "בעיות נפוצות ופתרונות",
        blocks: [
          {
            title: "הכרטיס לא נמצא",
            body: "לנסות שמות ישנים, טלפונים/כתובות ישנים, איותים שונים וחיפוש לפי אזור.",
          },
          {
            title: "הכרטיס בבעלות מישהו אחר",
            body: "גם אם זה נראה כמו עובד לשעבר או סוכנות, עדיין להגיש בקשה רשמית. אם אין תגובה, Google עשויה להעביר בעלות.",
          },
          {
            title: "הבעלים דחה",
            body: "להגיש ערעור עם הוכחות חזקות: מסמכים, קישורים לאתר/רשתות ותמונות מהמקום.",
          },
          {
            title: "בעיות באימות וידאו",
            body: "לצלם שוב באור טוב ולהקפיד שהכתובת, השילוט והקשר לעסק יהיו ברורים.",
          },
          {
            title: "אין סט מסמכים מושלם",
            body: "להשתמש במה שיש: חשבונות, מכתבים מהמשכיר, חשבוניות-כל דבר שמוכיח פעילות בכתובת.",
          },
        ],
      },
      {
        title: "אחרי שחזור מוצלח",
        blocks: [
          {
            body: "אחרי שחזרה גישה, לא לעצור ב’יש גישה’. תחזוקה שוטפת היא מה שמייצר תוצאות.",
          },
          {
            body: [
              "למלא את הכרטיס: תמונות, תיאור, שירותים וקטגוריות.",
              "להסיר כפילויות.",
              "להתחיל ניהול ביקורות באופן שיטתי.",
              "להקפיד על שעות-במיוחד בחגים.",
              "להוסיף UTM לקישור לאתר.",
              "לתכנן פוסטים/עדכונים כל 1–2 שבועות.",
            ],
          },
          {
            body: "שחזור גישה הוא צעד אסטרטגי שמחזיר שליטה על נכס שיכול להביא פניות באופן יציב מחיפוש מקומי ומפות.",
          },
        ],
      },
    ],
  },
};

export default content;
