// Article suggestions map (used for by/il/en locales) - each article suggests 4 related articles from different categories
// Based on user intent and complementary topics

export const ARTICLE_SUGGESTIONS: Record<string, string[]> = {
  // karty category
  "article-gmb-registration": [
    "article-seo-basics",
    "article-google-reviews",
    "article-local-seo-restaurants",
    "article-nap-audit",
  ],

  "article-yandex-registration": [
    "article-yandex-reviews",
    "article-local-directories-registration",
    "article-behavioral-factors-seo",
    "article-local-seo-beauty-salons",
  ],

  "article-2gis": [
    "article-local-directories",
    "article-photo-reviews",
    "article-local-seo-autoservice",
    "article-rating-in-maps",
  ],

  "article-gmb-full-setup": [
    "article-gmb-products-services",
    "article-schema-org-org-localbusiness",
    "article-reviews-sms-email",
    "article-local-positions",
  ],

  "article-yandex-full-setup": [
    "article-yandex-maps-promotion",
    "article-internal-linking-local-seo",
    "article-city-pages-geoqueries",
    "article-local-seo-med-clinics",
  ],

  "article-photos-optimization": [
    "article-photo-reviews",
    "article-3d-tours-cards",
    "article-media-card-optimization",
    "article-local-cases",
  ],

  "article-gmb-products-services": [
    "article-services-seo-texts",
    "article-online-booking",
    "article-local-seo-retail",
    "article-increase-call-route-clicks",
  ],

  "article-interactive-maps": [
    "article-contacts-directions",
    "article-technical-seo-audit",
    "article-mobile-optimization",
    "article-site-structure-local-seo",
  ],

  "article-2gis-promotion": [
    "article-local-partner-link-exchange",
    "article-local-seo-fitness",
    "article-thematic-catalogs",
    "article-competitive-local-seo",
  ],

  "article-google-maps-seo": [
    "article-local-positions",
    "article-semantic-core",
    "article-local-guides",
    "article-seo-audit-local",
  ],

  "article-verification": [
    "article-gmb-access-recovery",
    "article-nap-audit",
    "article-brand-reputation-audit",
    "article-local-directories-registration",
  ],

  "article-apple-business-connect": [
    "article-local-directories",
    "article-mobile-optimization",
    "article-local-seo-retail",
    "article-reviews-integration",
  ],

  "article-gmb-posts-offers": [
    "article-company-news-local-events",
    "article-local-blog-traffic",
    "article-review-stimulation",
    "article-local-seo-restaurants",
  ],

  "article-gmb-access-recovery": [
    "article-verification",
    "article-orm-strategy",
    "article-gmb-reviews-removal",
    "article-seo-maintenance-support",
  ],

  "article-yandex-maps-promotion": [
    "article-behavioral-factors-seo",
    "article-local-press-releases",
    "article-city-content-strategy",
    "article-local-seo-legal-firms",
  ],

  "article-maps-impressions": [
    "article-local-positions",
    "article-increase-call-route-clicks",
    "article-competitive-local-seo",
    "article-keyword-clustering",
  ],

  "article-media-card-optimization": [
    "article-photos-optimization",
    "article-3d-tours-cards",
    "article-local-cases",
    "article-homepage-seo-texts",
  ],

  // analitika-povedenie category
  "article-behavior-analysis": [
    "article-mobile-optimization",
    "article-increase-call-route-clicks",
    "article-local-seo-restaurants",
    "article-reviews-rating-microdata",
  ],

  "article-behavioral-factors-seo": [
    "article-yandex-maps-promotion",
    "article-mobile-optimization",
    "article-site-structure-local-seo",
    "article-local-blog-traffic",
  ],

  "article-competitive-local-seo": [
    "article-local-positions",
    "article-semantic-core",
    "article-white-linkbuilding",
    "article-seo-audit-local",
  ],

  "article-free-listing-audit": [
    "article-nap-audit",
    "article-local-directories",
    "article-reviews-audit",
    "article-brand-reputation-audit",
  ],

  "article-local-positions": [
    "article-semantic-core",
    "article-competitive-local-seo",
    "article-seo-maintenance-support",
    "article-city-pages-geoqueries",
  ],

  "article-nap-audit": [
    "article-local-directories-registration",
    "article-verification",
    "article-schema-org-org-localbusiness",
    "article-site-structure-audit",
  ],

  "article-navigators-visibility": [
    "article-2gis-promotion",
    "article-mobile-optimization",
    "article-local-seo-autoservice",
    "article-increase-call-route-clicks",
  ],

  // katalogi-ssylki category
  "article-crowd-marketing": [
    "article-local-guest-posts",
    "article-orm-strategy",
    "article-local-press-releases",
    "article-brand-reputation-audit",
  ],

  "article-link-site-socials": [
    "article-gmb-full-setup",
    "article-company-news-local-events",
    "article-reviews-integration",
    "article-local-cases",
  ],

  "article-local-directories-registration": [
    "article-nap-audit",
    "article-free-listing-audit",
    "article-thematic-catalogs",
    "article-local-seo-retail",
  ],

  "article-local-directories": [
    "article-local-directories-registration",
    "article-white-linkbuilding",
    "article-local-partner-link-exchange",
    "article-seo-basics",
  ],

  "article-local-guest-posts": [
    "article-local-press-releases",
    "article-city-content-strategy",
    "article-local-guides",
    "article-seo-copywriting",
  ],

  "article-local-links-purchase": [
    "article-white-linkbuilding",
    "article-local-partner-link-exchange",
    "article-seo-audit-local",
    "article-site-reputation-trustrank",
  ],

  "article-local-partner-link-exchange": [
    "article-local-links-purchase",
    "article-local-directories",
    "article-company-news-local-events",
    "article-local-seo-fitness",
  ],

  "article-local-press-releases": [
    "article-company-news-local-events",
    "article-local-guest-posts",
    "article-brand-reputation-audit",
    "article-city-content-strategy",
  ],

  "article-thematic-catalogs": [
    "article-local-directories",
    "article-local-seo-dental",
    "article-reviews-integration",
    "article-semantic-core",
  ],

  "article-white-linkbuilding": [
    "article-local-links-purchase",
    "article-site-reputation-trustrank",
    "article-seo-maintenance-support",
    "article-technical-seo-audit",
  ],

  // kontent-struktura category
  "article-business-card-site": [
    "article-gmb-registration",
    "article-contacts-page",
    "article-mobile-optimization",
    "article-local-seo-retail",
  ],

  "article-city-content-strategy": [
    "article-city-pages-geoqueries",
    "article-local-guides",
    "article-semantic-core",
    "article-regions-seo-texts",
  ],

  "article-city-district-pages": [
    "article-city-pages-geoqueries",
    "article-regions-seo-texts",
    "article-site-structure-local-seo",
    "article-local-seo-med-clinics",
  ],

  "article-city-landing": [
    "article-city-pages-geoqueries",
    "article-services-seo-texts",
    "article-mobile-optimization",
    "article-local-seo-hotels",
  ],

  "article-city-pages-geoqueries": [
    "article-semantic-core",
    "article-city-district-pages",
    "article-internal-linking-local-seo",
    "article-regions-seo-texts",
  ],

  "article-contacts-directions": [
    "article-contacts-page",
    "article-interactive-maps",
    "article-mobile-optimization",
    "article-schema-org-org-localbusiness",
  ],

  "article-contacts-page": [
    "article-contacts-directions",
    "article-business-card-site",
    "article-gmb-full-setup",
    "article-nap-audit",
  ],

  "article-homepage-seo-texts": [
    "article-seo-copywriting",
    "article-services-seo-texts",
    "article-semantic-core",
    "article-site-structure-local-seo",
  ],

  "article-local-blog-traffic": [
    "article-local-guides",
    "article-city-content-strategy",
    "article-seo-copywriting",
    "article-company-news-local-events",
  ],

  "article-local-cases": [
    "article-photos-optimization",
    "article-local-guides",
    "article-seo-copywriting",
    "article-local-seo-beauty-salons",
  ],

  "article-local-guides": [
    "article-local-blog-traffic",
    "article-city-content-strategy",
    "article-seo-copywriting",
    "article-google-maps-seo",
  ],

  "article-regions-seo-texts": [
    "article-city-pages-geoqueries",
    "article-semantic-core",
    "article-site-structure-local-seo",
    "article-city-district-pages",
  ],

  "article-seo-copywriting": [
    "article-services-seo-texts",
    "article-homepage-seo-texts",
    "article-local-guides",
    "article-semantic-core",
  ],

  "article-services-seo-texts": [
    "article-seo-copywriting",
    "article-semantic-core",
    "article-gmb-products-services",
    "article-city-landing",
  ],

  "article-site-structure-audit": [
    "article-site-structure-local-seo",
    "article-technical-seo-audit",
    "article-internal-linking-seo-general",
    "article-seo-maintenance-support",
  ],

  "article-site-structure-local-seo": [
    "article-city-pages-geoqueries",
    "article-internal-linking-local-seo",
    "article-site-structure-audit",
    "article-regions-seo-texts",
  ],

  // lokalnoe-seo-nishi category
  "article-local-seo-restaurants": [
    "article-gmb-posts-offers",
    "article-photo-reviews",
    "article-online-booking",
    "article-yandex-reviews",
  ],

  "article-local-seo-autoservice": [
    "article-2gis-promotion",
    "article-navigators-visibility",
    "article-local-cases",
    "article-gmb-products-services",
  ],

  "article-local-seo-beauty-salons": [
    "article-photos-optimization",
    "article-online-booking",
    "article-photo-reviews",
    "article-local-cases",
  ],

  "article-local-seo-dental": [
    "article-online-booking",
    "article-reviews-sms-email",
    "article-thematic-catalogs",
    "article-local-seo-med-clinics",
  ],

  "article-local-seo-fitness": [
    "article-local-partner-link-exchange",
    "article-company-news-local-events",
    "article-photo-reviews",
    "article-gmb-posts-offers",
  ],

  "article-local-seo-hotels": [
    "article-photo-reviews",
    "article-city-landing",
    "article-reviews-integration",
    "article-apple-business-connect",
  ],

  "article-local-seo-legal-firms": [
    "article-yandex-maps-promotion",
    "article-thematic-catalogs",
    "article-brand-reputation-audit",
    "article-city-pages-geoqueries",
  ],

  "article-local-seo-med-clinics": [
    "article-online-booking",
    "article-local-seo-dental",
    "article-reviews-sms-email",
    "article-yandex-full-setup",
  ],

  "article-local-seo-retail": [
    "article-gmb-products-services",
    "article-local-directories",
    "article-apple-business-connect",
    "article-business-card-site",
  ],

  // otzyvy-reputaciya category
  "article-brand-reputation-audit": [
    "article-orm-strategy",
    "article-reviews-audit",
    "article-crowd-marketing",
    "article-free-listing-audit",
  ],

  "article-company-news-local-events": [
    "article-local-press-releases",
    "article-local-blog-traffic",
    "article-gmb-posts-offers",
    "article-local-partner-link-exchange",
  ],

  "article-gmb-reviews-removal": [
    "article-gmb-access-recovery",
    "article-orm-strategy",
    "article-google-reviews",
    "article-reply-to-reviews",
  ],

  "article-google-reviews": [
    "article-gmb-registration",
    "article-reviews-sms-email",
    "article-reply-to-reviews",
    "article-gmb-reviews-removal",
  ],

  "article-orm-strategy": [
    "article-brand-reputation-audit",
    "article-reviews-audit",
    "article-crowd-marketing",
    "article-site-reputation-trustrank",
  ],

  "article-photo-reviews": [
    "article-photos-optimization",
    "article-review-stimulation",
    "article-local-cases",
    "article-local-seo-beauty-salons",
  ],

  "article-rating-in-maps": [
    "article-review-stimulation",
    "article-google-maps-seo",
    "article-2gis-promotion",
    "article-reviews-sms-email",
  ],

  "article-reply-to-reviews": [
    "article-google-reviews",
    "article-yandex-reviews",
    "article-orm-strategy",
    "article-review-stimulation",
  ],

  "article-review-stimulation": [
    "article-reviews-sms-email",
    "article-rating-in-maps",
    "article-photo-reviews",
    "article-google-reviews",
  ],

  "article-reviews-audit": [
    "article-brand-reputation-audit",
    "article-reviews-integration",
    "article-orm-strategy",
    "article-free-listing-audit",
  ],

  "article-reviews-integration": [
    "article-reviews-rating-microdata",
    "article-apple-business-connect",
    "article-reviews-audit",
    "article-site-reputation-trustrank",
  ],

  "article-reviews-rating-microdata": [
    "article-schema-org-org-localbusiness",
    "article-technical-seo-audit",
    "article-reviews-integration",
    "article-seo-basics",
  ],

  "article-reviews-sms-email": [
    "article-review-stimulation",
    "article-google-reviews",
    "article-yandex-reviews",
    "article-rating-in-maps",
  ],

  "article-site-reputation-trustrank": [
    "article-white-linkbuilding",
    "article-orm-strategy",
    "article-technical-seo-audit",
    "article-seo-maintenance-support",
  ],

  "article-yandex-reviews": [
    "article-yandex-registration",
    "article-reviews-sms-email",
    "article-behavioral-factors-seo",
    "article-reply-to-reviews",
  ],

  // tehnicheskoe-seo category
  "article-3d-tours-cards": [
    "article-photos-optimization",
    "article-media-card-optimization",
    "article-local-cases",
    "article-technical-seo-audit",
  ],

  "article-increase-call-route-clicks": [
    "article-gmb-full-setup",
    "article-maps-impressions",
    "article-mobile-optimization",
    "article-navigators-visibility",
  ],

  "article-internal-linking-local-seo": [
    "article-site-structure-local-seo",
    "article-city-pages-geoqueries",
    "article-internal-linking-seo-general",
    "article-regions-seo-texts",
  ],

  "article-internal-linking-seo-general": [
    "article-internal-linking-local-seo",
    "article-site-structure-audit",
    "article-technical-seo-audit",
    "article-seo-maintenance-support",
  ],

  "article-keyword-clustering": [
    "article-semantic-core",
    "article-competitive-local-seo",
    "article-city-pages-geoqueries",
    "article-maps-impressions",
  ],

  "article-meta-tags": [
    "article-seo-basics",
    "article-technical-seo-audit",
    "article-mobile-optimization",
    "article-homepage-seo-texts",
  ],

  "article-mobile-optimization": [
    "article-behavioral-factors-seo",
    "article-navigators-visibility",
    "article-increase-call-route-clicks",
    "article-business-card-site",
  ],

  "article-online-booking": [
    "article-gmb-products-services",
    "article-local-seo-beauty-salons",
    "article-local-seo-dental",
    "article-increase-call-route-clicks",
  ],

  "article-qna-in-listings": [
    "article-gmb-full-setup",
    "article-contacts-page",
    "article-review-stimulation",
    "article-local-seo-restaurants",
  ],

  "article-schema-org-org-localbusiness": [
    "article-reviews-rating-microdata",
    "article-nap-audit",
    "article-technical-seo-audit",
    "article-contacts-directions",
  ],

  "article-semantic-core": [
    "article-keyword-clustering",
    "article-competitive-local-seo",
    "article-city-pages-geoqueries",
    "article-seo-copywriting",
  ],

  "article-seo-audit-local": [
    "article-technical-seo-audit",
    "article-competitive-local-seo",
    "article-free-listing-audit",
    "article-seo-maintenance-support",
  ],

  "article-seo-basics": [
    "article-meta-tags",
    "article-semantic-core",
    "article-gmb-registration",
    "article-seo-copywriting",
  ],

  "article-seo-maintenance-support": [
    "article-seo-audit-local",
    "article-local-positions",
    "article-technical-seo-audit",
    "article-white-linkbuilding",
  ],

  "article-technical-seo-audit": [
    "article-seo-audit-local",
    "article-mobile-optimization",
    "article-schema-org-org-localbusiness",
    "article-site-structure-audit",
  ],
};
