// Per-locale contact configuration for by / il / en
// BY: current default (Belarus), IL: Israeli Hebrew locale, EN: English

export const CONTACT_BY = {
  phoneDisplay: "+375 (29) 863-14-65",
  phoneHref: "+375298631465",
  email: "ruslan.yakushev@skynex.digital",
  address: "пр. Независимости, 25, Минск, Беларусь",
  coverage: "Работаем по всей Беларуси",
} as const;

export const CONTACT_IL = {
  phoneDisplay: "+972 53 951 3400",
  phoneHref: "+972539513400",
  email: "info-il@skynex.digital",
  address: "רחוב רוטשילד 10, תל אביב, ישראל",
  coverage: "עובדים בכל רחבי ישראל",
} as const;

export const CONTACT_EN = {
  phoneDisplay: "+1-301-287-5849",
  phoneHref: "+13012875849",
  email: "info@skynex.digital",
  address: "123 Market Street, Suite 400, New York, NY, USA",
  coverage: "We work with clients worldwide",
} as const;

// Backward-compatible default export used across the app (BY locale)
export const CONTACT = CONTACT_BY;
