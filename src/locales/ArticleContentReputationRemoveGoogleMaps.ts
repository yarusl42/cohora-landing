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
      "Удаление ложных и негативных отзывов в Google Картах: как защищать репутацию легально",
    lead: [
      "Работа с отзывами - важнейшая часть онлайн‑репутации. Но иногда в Google Картах появляются откровенно ложные, накрученные или клеветнические отзывы, которые искажают картину и реально вредят бизнесу.",
      "Хорошая новость: у Google есть официальные инструменты для борьбы с таким контентом. Важно понимать, какие отзывы можно удалить, чего ожидать от процесса и как действовать, чтобы жалобы действительно работали.",
    ],
    sections: [
      {
        title: "Зачем добиваться удаления ложных отзывов",
        blocks: [
          {
            title: "1. Несправедливые отзывы напрямую бьют по бизнесу",
            body: "Люди редко читают всё подряд: чаще смотрят 3–5 последних отзывов. Один‑два ложных комментария - и уже создаётся ощущение, что с компанией «что‑то не так». Если отзыв нарушает правила, его важно оспаривать: он искажает реальную картину и снижает доверие.",
          },
          {
            title: "2. Ложные отзывы влияют на видимость в картах",
            body: [
              "уронить средний рейтинг;",
              "снизить кликабельность карточки;",
              "уменьшить количество звонков и переходов;",
              "со временем ухудшить видимость карточки в картах.",
            ],
          },
          {
            title: "3. Недобросовестная конкуренция - реальность",
            body: "В Беларуси подобные атаки встречаются: конкуренты могут накручивать негатив, оставлять отзывы с фейковых аккаунтов или запускать «чёрный PR». Иногда появляются мошенники, которые сначала пишут негатив, а затем предлагают «за деньги решить вопрос».",
          },
          {
            title: "4. У Google есть правила, на которые можно опираться",
            body: "Политика Google запрещает спам, рекламу, фейковые отзывы, угрозы, дискриминацию и конфликт интересов. Если отзыв нарушает правила, вы имеете право добиваться удаления - главное, правильно указать нарушение и подать жалобу без эмоций.",
          },
        ],
      },
      {
        title: "Чего ожидать от процесса удаления",
        blocks: [
          {
            body: "Google не удаляет отзыв просто потому, что он неприятный или кажется несправедливым. Удаление возможно, когда есть нарушение правил.",
          },
          {
            body: [
              "Быстро (24–72 часа) - при очевидном спаме/рекламе/бессмысленном тексте.",
              "Несколько дней или недель - если нужна проверка модератором.",
              "Отказ - если отзыв выглядит как субъективный опыт и формально не нарушает правила.",
              "Вторая попытка - через поддержку Google Business Profile с более сильными доказательствами.",
            ],
          },
        ],
      },
      {
        title: "Какие отзывы Google действительно удаляет",
        blocks: [
          {
            title: "1. Отзывы от людей, которые не были клиентами",
            body: "Формат «я там не был, но слышал» - прямое нарушение. Такие отзывы чаще удаляются при грамотной жалобе.",
          },
          {
            title: "2. Отзывы конкурентов и конфликт интересов",
            body: "Если автор явно продвигает другой бизнес или связан с конкурентом, это конфликт интересов и основание для удаления.",
          },
          {
            title: "3. Накрученные отзывы от фейковых аккаунтов",
            body: [
              "аккаунт создан недавно;",
              "нет фото и активности;",
              "массовые однотипные «1★»;",
              "подозрительно одинаковые формулировки.",
            ],
          },
          {
            title: "4. Оскорбления, угрозы и токсичное поведение",
            body: "Мат, дискриминация, угрозы и переход на личности - нарушения, которые часто удаляются.",
          },
          {
            title: "5. Клевета и заведомо ложные утверждения",
            body: "Обвинения в мошенничестве или незаконной деятельности без фактов могут быть основанием для удаления, особенно если у вас есть документы, опровергающие утверждения.",
          },
          {
            title: "6. Перепутанные компании и локации",
            body: "Иногда люди ошибаются адресом/названием и пишут не о том бизнесе. Если видно, что речь о другой компании, это можно оспорить.",
          },
          {
            title: "7. Личные данные и чувствительная информация",
            body: "Телефоны, e‑mail, номера авто/документов, фото людей без согласия - почти всегда удаляются.",
          },
        ],
      },
      {
        title: "Как правильно подать жалобу на отзыв",
        blocks: [
          {
            title: "Быстрый вариант: жалоба через Google Maps",
            body: [
              "откройте отзыв в Google Картах;",
              "нажмите на значок с тремя точками;",
              "выберите «Пожаловаться»;",
              "укажите причину (спам, конфликт интересов, неподходящий контент и т.д.).",
            ],
          },
          {
            title:
              "Расширенный вариант: через поддержку Google Business Profile",
            body: [
              "чётко укажите, какой пункт правил нарушен;",
              "приведите факты и аргументы;",
              "при необходимости приложите скриншоты, документы, ссылки.",
            ],
          },
          {
            body: "Чем меньше эмоций и больше конкретики - тем выше шанс положительного решения.",
          },
        ],
      },
      {
        title: "Что делать, если Google отказал",
        blocks: [
          {
            body: [
              "перечитать правила и ещё раз оценить, действительно ли есть нарушение;",
              "собрать более сильные доказательства (документы, внутренние записи, переписку);",
              "подать новое обращение через поддержку с более развёрнутым описанием;",
              "параллельно оставить спокойный аргументированный ответ от имени компании.",
            ],
          },
          {
            body: "Если удалить отзыв не удаётся, важно показать потенциальным клиентам, что вы слышите критику, проверяете факты и открыты к диалогу.",
          },
        ],
      },
      {
        title: "Профилактика: как снижать риск появления ложных отзывов",
        blocks: [
          {
            body: [
              "регулярно просите реальных клиентов оставлять честные отзывы;",
              "отвечайте на все отзывы;",
              "поддерживайте актуальность данных в карточке;",
              "обучите персонал корректно реагировать на конфликты до публикации отзыва.",
            ],
          },
          {
            body: "Чем больше у вас честных положительных и нейтральных отзывов, тем меньше веса у единичных несправедливых комментариев, даже если удалить их не удаётся.",
          },
        ],
      },
      {
        title: "Итог",
        blocks: [
          {
            body: "Удаление ложных и негативных отзывов - это не «серые схемы» и не попытка зачистить любую критику. Это защита бизнеса от контента, который нарушает правила платформы.",
          },
          {
            body: "При этом даже идеальная стратегия удаления не заменяет работу с сервисом и реальными отзывами. Лучше всего защищает устойчивый поток довольных клиентов, готовых оставить честное хорошее слово.",
          },
        ],
      },
    ],
  },

  en: {
    backToHome: "← Back to home",
    title:
      "Removing fake and harmful Google Maps reviews: how to protect your reputation legally",
    lead: [
      "Reviews are a core part of online reputation. But sometimes Google Maps/Google Business Profile gets hit with fake, incentivized, or defamatory reviews that distort reality and hurt the business.",
      "The good news: Google provides official tools to report policy violations. The key is knowing what can be removed, what to expect, and how to file a clean, evidence-based report.",
    ],
    sections: [
      {
        title: "Why removing fake reviews matters",
        blocks: [
          {
            title: "1. A few unfair reviews can change perception",
            body: "Most people read only a handful of recent reviews. One or two fake or abusive posts can create a ‘something’s wrong’ impression, especially in competitive categories.",
          },
          {
            title: "2. Fake reviews can hurt local visibility",
            body: [
              "drop your average rating;",
              "reduce click-through in map results;",
              "lower calls and website visits;",
              "impact local visibility over time.",
            ],
          },
          {
            title: "3. Bad-faith attacks happen",
            body: "Competitors or scammers may post fake negatives, coordinate 1-star bursts, or attempt extortion. Treat it as a risk category and respond with a process.",
          },
          {
            title: "4. Google has policies you can rely on",
            body: "Google policies prohibit spam, fake engagement, conflicts of interest, hate, threats, and personal data. If a review violates policy, you can report it-just be specific and factual.",
          },
        ],
      },
      {
        title: "What to expect from the removal process",
        blocks: [
          {
            body: "Google doesn’t remove reviews just because they feel unfair. Removal is typically tied to clear policy violations.",
          },
          {
            body: [
              "Fast (24–72 hours) for obvious spam, ads, nonsense, or self-admitted non-customer reviews.",
              "Days or weeks if the case needs moderator review.",
              "Denial if it looks like a subjective customer experience that doesn’t violate policy.",
              "Second attempt via Google Business Profile support with stronger evidence.",
            ],
          },
        ],
      },
      {
        title: "What Google typically removes",
        blocks: [
          {
            title: "1. Reviews from non-customers",
            body: "‘I’ve never been there but…’ is a policy violation and can often be removed.",
          },
          {
            title: "2. Conflicts of interest",
            body: "Reviews posted by competitors, employees, or anyone with a conflict of interest may be removed.",
          },
          {
            title: "3. Fake accounts and coordinated bursts",
            body: [
              "new accounts with no activity;",
              "copy-pasted wording across multiple businesses;",
              "sudden 1-star waves;",
              "no meaningful context.",
            ],
          },
          {
            title: "4. Harassment, hate, threats",
            body: "Personal attacks, slurs, threats, and abusive language are removable.",
          },
          {
            title: "5. Defamation and false claims",
            body: "Claims of fraud or illegal activity without evidence may qualify-especially when you can provide documentation.",
          },
          {
            title: "6. Wrong place/wrong business",
            body: "If it’s clearly about a different company or location, you can report it as a mismatch.",
          },
          {
            title: "7. Personal information",
            body: "Phone numbers, emails, license plates, documents, or photos of people without consent are usually removed.",
          },
        ],
      },
      {
        title: "How to report a review correctly",
        blocks: [
          {
            title: "Quick option: report in Google Maps",
            body: [
              "open the review in Google Maps;",
              "click the three-dot menu;",
              "choose ‘Report review’;",
              "select the violation reason (spam, conflict of interest, etc.).",
            ],
          },
          {
            title: "Escalation: Google Business Profile support",
            body: [
              "name the exact policy that is violated;",
              "share facts and a short timeline;",
              "attach screenshots, receipts, logs, or other evidence when relevant.",
            ],
          },
          {
            body: "Less emotion, more specificity. That’s what gets decisions.",
          },
        ],
      },
      {
        title: "What to do if Google denies removal",
        blocks: [
          {
            body: [
              "re-check policies and confirm the violation;",
              "gather stronger evidence;",
              "submit a new request with clearer reasoning;",
              "post a calm, factual public reply in parallel.",
            ],
          },
          {
            body: "Sometimes removal won’t happen. In that case, your response should reassure future customers that you take feedback seriously and are open to resolution.",
          },
        ],
      },
      {
        title: "Prevention: reduce the risk of fake reviews",
        blocks: [
          {
            body: [
              "ask real customers for honest reviews regularly;",
              "reply to every review;",
              "keep your business info accurate;",
              "train staff to de-escalate conflicts before they go public.",
            ],
          },
          {
            body: "A steady stream of genuine feedback reduces the impact of isolated unfair reviews-even when removal isn’t possible.",
          },
        ],
      },
      {
        title: "Summary",
        blocks: [
          {
            body: "Removing fake reviews isn’t about hiding criticism-it’s about protecting your business from content that violates platform policy.",
          },
          {
            body: "Even the best reporting process can’t replace great service and consistent review generation. The strongest defense is a stable base of real customers willing to share honest feedback.",
          },
        ],
      },
    ],
  },

  il: {
    backToHome: "← חזרה לעמוד הבית",
    title:
      "הסרת ביקורות מזויפות ושליליות ב‑Google Maps: איך מגנים על המוניטין בצורה חוקית",
    lead: [
      "ביקורות הן חלק מרכזי מהמוניטין האונליין. לפעמים מופיעות ביקורות מזויפות, מתואמות או פוגעניות שמזיקות לעסק.",
      "החדשות הטובות: ל‑Google יש כלים רשמיים לדיווח על הפרות מדיניות. חשוב להבין מה ניתן להסיר ואיך לפעול בצורה מדויקת ומבוססת עובדות.",
    ],
    sections: [
      {
        title: "למה חשוב להסיר ביקורות מזויפות",
        blocks: [
          {
            title: "1. כמה ביקורות יכולות לשנות תפיסה",
            body: "רוב האנשים קוראים רק כמה ביקורות אחרונות. ביקורת מזויפת אחת או שתיים יכולות לייצר רושם שלילי ולהוריד אמון.",
          },
          {
            title: "2. זה משפיע גם על נראות במפות",
            body: [
              "ירידה בדירוג הממוצע;",
              "פחות הקלקות על הכרטיס;",
              "פחות שיחות ופניות;",
              "פגיעה בנראות מקומית לאורך זמן.",
            ],
          },
          {
            title: "3. התקפות וקמפיינים שליליים קיימים",
            body: "מתחרים או נוכלים עשויים לייצר גל של 1 כוכב או לנסות סחיטה. חשוב לטפל בזה בתהליך מסודר.",
          },
          {
            title: "4. יש מדיניות ברורה",
            body: "Google אוסרת ספאם, פרסום, זיופים, איום/שנאה, קונפליקט עניינים וחשיפת פרטים אישיים. כשיש הפרה-אפשר לדווח ולהציג עובדות.",
          },
        ],
      },
      {
        title: "למה לצפות מתהליך ההסרה",
        blocks: [
          {
            body: "Google לא מסירה ביקורת רק כי היא לא נעימה. הסרה מתבצעת בעיקר כשיש הפרת מדיניות.",
          },
          {
            body: [
              "24–72 שעות כשמדובר בספאם ברור/פרסום/טקסט חסר משמעות.",
              "ימים עד שבועות כאשר נדרשת בדיקת מודרטור.",
              "סירוב אם זו חוויה סובייקטיבית ללא הפרה.",
              "ניסיון חוזר דרך התמיכה עם הוכחות חזקות יותר.",
            ],
          },
        ],
      },
      {
        title: "מה בדרך כלל ניתן להסיר",
        blocks: [
          {
            title: "1. ביקורות ממי שלא היה לקוח",
            body: "‘לא הייתי שם אבל…’ הוא לרוב הפרת מדיניות.",
          },
          {
            title: "2. קונפליקט עניינים",
            body: "ביקורות של מתחרים/עובדים/גורמים עם אינטרס יכולות להימחק.",
          },
          {
            title: "3. זיופים וחשבונות חשודים",
            body: [
              "חשבון חדש ללא פעילות;",
              "ניסוחים זהים לעסקים רבים;",
              "גל פתאומי של 1 כוכב;",
              "חוסר פירוט.",
            ],
          },
          {
            title: "4. קללות/איומים/הטרדה",
            body: "שפה פוגענית ואיומים הם בסיס להסרה.",
          },
          {
            title: "5. פרטים אישיים",
            body: "מספרי טלפון, אימיילים, לוחיות רישוי, מסמכים או תמונות ללא הסכמה-לרוב יוסרו.",
          },
        ],
      },
      {
        title: "איך מדווחים נכון",
        blocks: [
          {
            title: "דיווח מהיר דרך Google Maps",
            body: [
              "לפתוח את הביקורת;",
              "ללחוץ על שלוש נקודות;",
              "לבחור Report;",
              "לבחור סיבת הפרה.",
            ],
          },
          {
            title: "הסלמה דרך תמיכת Google Business Profile",
            body: [
              "לציין סעיף מדיניות;",
              "לתת עובדות והקשר;",
              "לצרף הוכחות במידת הצורך.",
            ],
          },
          {
            body: "כמה שפחות רגש וכמה שיותר דיוק-כך הסיכוי עולה.",
          },
        ],
      },
      {
        title: "סיכום",
        blocks: [
          {
            body: "הסרת ביקורות מזויפות אינה ‘מחיקת ביקורת’ אלא הגנה מפני הפרות מדיניות. במקביל, ההגנה הטובה ביותר היא שירות טוב וזרימה עקבית של ביקורות אמיתיות.",
          },
        ],
      },
    ],
  },
};

export default content;
