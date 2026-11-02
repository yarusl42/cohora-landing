import { CONTACT_BY, CONTACT_EN, CONTACT_IL } from "@/config/contact";

export default {
  by: {
    "contactPage.badge": "Связаться с нами",
    "contactPage.title": "Оставьте номер телефона",
    "contactPage.lead":
      "Расскажите, в какой нише вы работаете и в каком городе Беларуси находитесь - Минске, Бресте, Гомеле, Гродно, Могилёве или другом населённом пункте. Мы покажем, как Google Карты, Яндекс Справочник и локальное SEO могут дать больше заявок именно вашему бизнесу в вашем регионе.",
    "contact.phoneDisplay": CONTACT_BY.phoneDisplay,
    "contact.phoneHref": CONTACT_BY.phoneHref,
    "contact.email": CONTACT_BY.email,
    "contact.address": CONTACT_BY.address,
    "contact.coverage": CONTACT_BY.coverage,
  },
  il: {
    "contactPage.badge": "צור קשר",
    "contactPage.title": "השאירו מספר טלפון",
    "contactPage.lead":
      "ספרו לנו באיזו נישה אתם עובדים ובאיזו עיר בישראל אתם נמצאים - תל‑אביב, ירושלים, חיפה, ראשון לציון או כל מקום אחר. נראה לכם איך Google Maps, Waze וקידום מקומי יכולים להביא יותר פניות לעסק שלכם באזור שלכם.",
    "contact.phoneDisplay": CONTACT_IL.phoneDisplay,
    "contact.phoneHref": CONTACT_IL.phoneHref,
    "contact.email": CONTACT_IL.email,
    "contact.address": CONTACT_IL.address,
    "contact.coverage": CONTACT_IL.coverage,
  },
  en: {
    "contactPage.badge": "Contact us",
    "contactPage.title": "Leave your phone number",
    "contactPage.lead":
      "Tell us what industry you’re in and where you’re located in the U.S. - NYC, Miami, Austin, Los Angeles or anywhere else. We’ll show you how Google Maps, Apple Maps, Waze and local SEO can drive more leads in your area.",
    "contact.phoneDisplay": CONTACT_EN.phoneDisplay,
    "contact.phoneHref": CONTACT_EN.phoneHref,
    "contact.email": CONTACT_EN.email,
    "contact.address": CONTACT_EN.address,
    "contact.coverage": CONTACT_EN.coverage,
  },
} as const;
