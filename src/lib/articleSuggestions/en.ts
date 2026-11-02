// Article suggestions map for English locale (en) - mirrors BY suggestions for now
// Each article suggests 4 related articles from different categories
// Based on user intent and complementary topics

export const ARTICLE_SUGGESTIONS: Record<string, string[]> = {
  // karty category
  "article-gmb-registration": [
    "article-seo-basics", // Need SEO foundation after setting up GMB
    "article-google-reviews", // Reviews are crucial for GMB success
    "article-local-seo-restaurants", // Industry-specific implementation
    "article-nap-audit", // Ensure consistent business data
  ],

  "article-yandex-registration": [
    "article-yandex-reviews", // Natural next step after Yandex setup
    "article-local-directories-registration", // Expand to more directories
    "article-behavioral-factors-seo", // Yandex focuses heavily on behavioral factors
    "article-local-seo-beauty-salons", // Popular Yandex business type
  ],

  "article-2gis": [
    "article-local-directories", // Expand directory presence
    "article-photo-reviews", // 2GIS users love visual content
    "article-local-seo-autoservice", // 2GIS popular for auto services
    "article-rating-in-maps", // Improve 2GIS ratings
  ],

  "article-gmb-full-setup": [
    "article-gmb-products-services", // Next step after basic setup
    "article-schema-org-org-localbusiness", // Technical enhancement
    "article-reviews-sms-email", // Systematic review collection
    "article-local-positions", // Track GMB performance
  ],

  "article-yandex-full-setup": [
    "article-yandex-maps-promotion", // Promotion after setup
    "article-internal-linking-local-seo", // Technical SEO for Yandex
    "article-city-pages-geoqueries", // Yandex loves geo-specific content
    "article-local-seo-med-clinics", // Medical is big on Yandex
  ],

  "article-photos-optimization": [
    "article-photo-reviews", // User-generated visual content
    "article-3d-tours-cards", // Advanced visual content
    "article-media-card-optimization", // Comprehensive media strategy
    "article-local-cases", // Showcase work with photos
  ],

  "article-gmb-products-services": [
    "article-services-seo-texts", // Optimize service pages
    "article-online-booking", // Convert GMB traffic
    "article-local-seo-retail", // Product-focused businesses
    "article-increase-call-route-clicks", // Maximize GMB actions
  ],

  "article-interactive-maps": [
    "article-contacts-directions", // Complete contact optimization
    "article-technical-seo-audit", // Technical implementation
    "article-mobile-optimization", // Maps are mobile-heavy
    "article-site-structure-local-seo", // Site architecture with maps
  ],

  "article-2gis-promotion": [
    "article-local-partner-link-exchange", // Local networking
    "article-local-seo-fitness", // 2GIS popular for fitness
    "article-thematic-catalogs", // Expand catalog presence
    "article-competitive-local-seo", // Beat 2GIS competitors
  ],

  "article-google-maps-seo": [
    "article-local-positions", // Track Maps performance
    "article-semantic-core", // Keyword strategy for Maps
    "article-local-guides", // Content for Maps users
    "article-seo-audit-local", // Comprehensive Maps audit
  ],

  "article-verification": [
    "article-gmb-access-recovery", // Related access issues
    "article-nap-audit", // Data consistency for verification
    "article-brand-reputation-audit", // Verify reputation too
    "article-local-directories-registration", // Verify everywhere
  ],

  "article-apple-business-connect": [
    "article-local-directories", // Expand beyond Apple
    "article-mobile-optimization", // Apple users are mobile-first
    "article-local-seo-retail", // Apple Maps popular for shopping
    "article-reviews-integration", // Apple ecosystem integration
  ],

  "article-gmb-posts-offers": [
    "article-company-news-local-events", // Content strategy
    "article-local-blog-traffic", // Drive traffic to posts
    "article-review-stimulation", // Engage post viewers
    "article-local-seo-restaurants", // Posts work great for restaurants
  ],

  "article-gmb-access-recovery": [
    "article-verification", // Prevention strategy
    "article-orm-strategy", // Reputation management during crisis
    "article-gmb-reviews-removal", // Clean up during recovery
    "article-seo-maintenance-support", // Ongoing account management
  ],

  "article-yandex-maps-promotion": [
    "article-behavioral-factors-seo", // Yandex ranking factors
    "article-local-press-releases", // PR for Yandex audience
    "article-city-content-strategy", // Yandex loves local content
    "article-local-seo-legal-firms", // Legal services popular on Yandex
  ],

  "article-maps-impressions": [
    "article-local-positions", // Track impression performance
    "article-increase-call-route-clicks", // Convert impressions
    "article-competitive-local-seo", // Steal competitor impressions
    "article-keyword-clustering", // Target right keywords for impressions
  ],

  "article-media-card-optimization": [
    "article-photos-optimization", // Photo strategy
    "article-3d-tours-cards", // Advanced media
    "article-local-cases", // Showcase media work
    "article-homepage-seo-texts", // Media-rich homepage
  ],

  // analitika-povedenie category
  "article-behavior-analysis": [
    "article-mobile-optimization", // Mobile behavior insights
    "article-increase-call-route-clicks", // Optimize based on behavior
    "article-local-seo-restaurants", // Behavior-heavy industry
    "article-reviews-rating-microdata", // Behavior influences reviews
  ],

  "article-behavioral-factors-seo": [
    "article-yandex-maps-promotion", // Yandex focuses on behavior
    "article-mobile-optimization", // Mobile behavior crucial
    "article-site-structure-local-seo", // Structure affects behavior
    "article-local-blog-traffic", // Content behavior optimization
  ],

  "article-competitive-local-seo": [
    "article-local-positions", // Track against competitors
    "article-semantic-core", // Competitive keyword research
    "article-white-linkbuilding", // Outrank competitors
    "article-seo-audit-local", // Audit vs competitors
  ],

  "article-free-listing-audit": [
    "article-nap-audit", // Data consistency check
    "article-local-directories", // Expand free listings
    "article-reviews-audit", // Review all listings
    "article-brand-reputation-audit", // Comprehensive reputation check
  ],

  "article-local-positions": [
    "article-semantic-core", // Keyword tracking setup
    "article-competitive-local-seo", // Position vs competitors
    "article-seo-maintenance-support", // Ongoing position monitoring
    "article-city-pages-geoqueries", // Geo-specific position tracking
  ],

  "article-nap-audit": [
    "article-local-directories-registration", // Fix NAP everywhere
    "article-verification", // NAP consistency helps verification
    "article-schema-org-org-localbusiness", // Technical NAP implementation
    "article-site-structure-audit", // NAP in site structure
  ],

  "article-navigators-visibility": [
    "article-2gis-promotion", // Navigator platform
    "article-mobile-optimization", // Navigator usage is mobile
    "article-local-seo-autoservice", // Heavy navigator usage
    "article-increase-call-route-clicks", // Navigator to action
  ],

  // katalogi-ssylki category
  "article-crowd-marketing": [
    "article-local-guest-posts", // Content marketing expansion
    "article-orm-strategy", // Reputation management
    "article-local-press-releases", // PR strategy
    "article-brand-reputation-audit", // Monitor crowd marketing impact
  ],

  "article-link-site-socials": [
    "article-gmb-full-setup", // Link social to GMB
    "article-company-news-local-events", // Social content strategy
    "article-reviews-integration", // Social proof integration
    "article-local-cases", // Social showcase content
  ],

  "article-local-directories-registration": [
    "article-nap-audit", // Consistent data for directories
    "article-free-listing-audit", // Audit directory presence
    "article-thematic-catalogs", // Expand to niche directories
    "article-local-seo-retail", // Retail benefits from directories
  ],

  "article-local-directories": [
    "article-local-directories-registration", // Implementation guide
    "article-white-linkbuilding", // Quality directory links
    "article-local-partner-link-exchange", // Directory partnerships
    "article-seo-basics", // Foundation for directory SEO
  ],

  "article-local-guest-posts": [
    "article-local-press-releases", // PR content strategy
    "article-city-content-strategy", // Local content approach
    "article-local-guides", // Content creation for posts
    "article-seo-copywriting", // Writing skills for posts
  ],

  "article-local-links-purchase": [
    "article-white-linkbuilding", // Quality link strategy
    "article-local-partner-link-exchange", // Alternative to purchase
    "article-seo-audit-local", // Audit link profile
    "article-site-reputation-trustrank", // Build domain authority
  ],

  "article-local-partner-link-exchange": [
    "article-local-links-purchase", // Alternative link strategy
    "article-local-directories", // Partner directories
    "article-company-news-local-events", // Partner event content
    "article-local-seo-fitness", // Partnership-heavy industry
  ],

  "article-local-press-releases": [
    "article-company-news-local-events", // News content strategy
    "article-local-guest-posts", // PR content expansion
    "article-brand-reputation-audit", // PR impact measurement
    "article-city-content-strategy", // Local PR approach
  ],

  "article-thematic-catalogs": [
    "article-local-directories", // General directory strategy
    "article-local-seo-dental", // Niche catalog example
    "article-reviews-integration", // Catalog review strategy
    "article-semantic-core", // Niche keyword research
  ],

  "article-white-linkbuilding": [
    "article-local-links-purchase", // Link acquisition strategy
    "article-site-reputation-trustrank", // Build authority
    "article-seo-maintenance-support", // Ongoing link management
    "article-technical-seo-audit", // Technical foundation for links
  ],

  // kontent-struktura category
  "article-business-card-site": [
    "article-gmb-registration", // Online presence foundation
    "article-contacts-page", // Essential business card element
    "article-mobile-optimization", // Card sites are mobile-first
    "article-local-seo-retail", // Simple sites for retail
  ],

  "article-city-content-strategy": [
    "article-city-pages-geoqueries", // Implementation of strategy
    "article-local-guides", // Content type for cities
    "article-semantic-core", // City keyword research
    "article-regions-seo-texts", // Multi-city content
  ],

  "article-city-district-pages": [
    "article-city-pages-geoqueries", // Geo-targeting strategy
    "article-regions-seo-texts", // Multi-location content
    "article-site-structure-local-seo", // Architecture for districts
    "article-local-seo-med-clinics", // District-based medical services
  ],

  "article-city-landing": [
    "article-city-pages-geoqueries", // Geo-landing strategy
    "article-services-seo-texts", // Service-focused landings
    "article-mobile-optimization", // Landing page optimization
    "article-local-seo-hotels", // Location-based landings
  ],

  "article-city-pages-geoqueries": [
    "article-semantic-core", // Geo keyword research
    "article-city-district-pages", // Granular geo-targeting
    "article-internal-linking-local-seo", // Link geo pages
    "article-regions-seo-texts", // Multi-city implementation
  ],

  "article-contacts-directions": [
    "article-contacts-page", // Complete contact strategy
    "article-interactive-maps", // Enhanced directions
    "article-mobile-optimization", // Mobile contact optimization
    "article-schema-org-org-localbusiness", // Technical contact markup
  ],

  "article-contacts-page": [
    "article-contacts-directions", // Enhanced contact info
    "article-business-card-site", // Simple contact sites
    "article-gmb-full-setup", // Consistent contact data
    "article-nap-audit", // Contact data consistency
  ],

  "article-homepage-seo-texts": [
    "article-seo-copywriting", // Writing skills
    "article-services-seo-texts", // Service page content
    "article-semantic-core", // Homepage keyword strategy
    "article-site-structure-local-seo", // Homepage in site architecture
  ],

  "article-local-blog-traffic": [
    "article-local-guides", // Blog content type
    "article-city-content-strategy", // Local content approach
    "article-seo-copywriting", // Blog writing skills
    "article-company-news-local-events", // Blog content ideas
  ],

  "article-local-cases": [
    "article-photos-optimization", // Visual case studies
    "article-local-guides", // Case study content
    "article-seo-copywriting", // Case study writing
    "article-local-seo-beauty-salons", // Visual case study industry
  ],

  "article-local-guides": [
    "article-local-blog-traffic", // Guide distribution
    "article-city-content-strategy", // Local content creation
    "article-seo-copywriting", // Guide writing skills
    "article-google-maps-seo", // Guides for Maps users
  ],

  "article-regions-seo-texts": [
    "article-city-pages-geoqueries", // Regional targeting
    "article-semantic-core", // Regional keyword research
    "article-site-structure-local-seo", // Multi-region architecture
    "article-city-district-pages", // Granular regional content
  ],

  "article-seo-copywriting": [
    "article-services-seo-texts", // Service copywriting
    "article-homepage-seo-texts", // Homepage copywriting
    "article-local-guides", // Guide copywriting
    "article-semantic-core", // Keyword-driven copywriting
  ],

  "article-services-seo-texts": [
    "article-seo-copywriting", // Writing skills
    "article-semantic-core", // Service keyword research
    "article-gmb-products-services", // Service promotion
    "article-city-landing", // Service landing pages
  ],

  "article-site-structure-audit": [
    "article-site-structure-local-seo", // Local structure optimization
    "article-technical-seo-audit", // Technical structure issues
    "article-internal-linking-seo-general", // Structure and linking
    "article-seo-maintenance-support", // Ongoing structure maintenance
  ],

  "article-site-structure-local-seo": [
    "article-city-pages-geoqueries", // Geo structure implementation
    "article-internal-linking-local-seo", // Local linking strategy
    "article-site-structure-audit", // Structure analysis
    "article-regions-seo-texts", // Multi-location structure
  ],

  // lokalnoe-seo-nishi category
  "article-local-seo-restaurants": [
    "article-gmb-posts-offers", // Restaurant promotions
    "article-photo-reviews", // Food photography reviews
    "article-online-booking", // Restaurant reservations
    "article-yandex-reviews", // Restaurant review management
  ],

  "article-local-seo-autoservice": [
    "article-2gis-promotion", // Auto services popular on 2GIS
    "article-navigators-visibility", // Auto service discovery
    "article-local-cases", // Before/after auto work
    "article-gmb-products-services", // Auto service offerings
  ],

  "article-local-seo-beauty-salons": [
    "article-photos-optimization", // Beauty visual content
    "article-online-booking", // Salon appointments
    "article-photo-reviews", // Beauty transformation photos
    "article-local-cases", // Beauty portfolio cases
  ],

  "article-local-seo-dental": [
    "article-online-booking", // Dental appointments
    "article-reviews-sms-email", // Patient review collection
    "article-thematic-catalogs", // Medical directories
    "article-local-seo-med-clinics", // Related medical SEO
  ],

  "article-local-seo-fitness": [
    "article-local-partner-link-exchange", // Fitness partnerships
    "article-company-news-local-events", // Fitness events
    "article-photo-reviews", // Fitness transformation photos
    "article-gmb-posts-offers", // Fitness promotions
  ],

  "article-local-seo-hotels": [
    "article-photo-reviews", // Hotel guest photos
    "article-city-landing", // Location-based hotel pages
    "article-reviews-integration", // Hotel review management
    "article-apple-business-connect", // Travel-focused platform
  ],

  "article-local-seo-legal-firms": [
    "article-yandex-maps-promotion", // Legal services on Yandex
    "article-thematic-catalogs", // Legal directories
    "article-brand-reputation-audit", // Legal reputation management
    "article-city-pages-geoqueries", // Legal service areas
  ],

  "article-local-seo-med-clinics": [
    "article-online-booking", // Medical appointments
    "article-local-seo-dental", // Related medical SEO
    "article-reviews-sms-email", // Patient reviews
    "article-yandex-full-setup", // Medical popular on Yandex
  ],

  "article-local-seo-retail": [
    "article-gmb-products-services", // Retail product showcase
    "article-local-directories", // Shopping directories
    "article-apple-business-connect", // Shopping on Apple Maps
    "article-business-card-site", // Simple retail sites
  ],

  // otzyvy-reputaciya category
  "article-brand-reputation-audit": [
    "article-orm-strategy", // Reputation management strategy
    "article-reviews-audit", // Review-specific audit
    "article-crowd-marketing", // Reputation through marketing
    "article-free-listing-audit", // Audit all online presence
  ],

  "article-company-news-local-events": [
    "article-local-press-releases", // PR strategy
    "article-local-blog-traffic", // News content distribution
    "article-gmb-posts-offers", // News in GMB posts
    "article-local-partner-link-exchange", // Event partnerships
  ],

  "article-gmb-reviews-removal": [
    "article-gmb-access-recovery", // GMB account issues
    "article-orm-strategy", // Crisis management
    "article-google-reviews", // Review management
    "article-reply-to-reviews", // Review response strategy
  ],

  "article-google-reviews": [
    "article-gmb-registration", // Foundation for reviews
    "article-reviews-sms-email", // Review collection
    "article-reply-to-reviews", // Review management
    "article-gmb-reviews-removal", // Problem review handling
  ],

  "article-orm-strategy": [
    "article-brand-reputation-audit", // Reputation assessment
    "article-reviews-audit", // Review component of ORM
    "article-crowd-marketing", // Proactive reputation building
    "article-site-reputation-trustrank", // Technical reputation factors
  ],

  "article-photo-reviews": [
    "article-photos-optimization", // Photo strategy
    "article-review-stimulation", // Encourage photo reviews
    "article-local-cases", // Visual case studies
    "article-local-seo-beauty-salons", // Visual industry example
  ],

  "article-rating-in-maps": [
    "article-review-stimulation", // Improve ratings
    "article-google-maps-seo", // Maps optimization
    "article-2gis-promotion", // Multi-platform ratings
    "article-reviews-sms-email", // Systematic rating improvement
  ],

  "article-reply-to-reviews": [
    "article-google-reviews", // Review platform management
    "article-yandex-reviews", // Multi-platform responses
    "article-orm-strategy", // Response as reputation strategy
    "article-review-stimulation", // Encourage positive reviews
  ],

  "article-review-stimulation": [
    "article-reviews-sms-email", // Review collection strategy
    "article-rating-in-maps", // Improve ratings
    "article-photo-reviews", // Encourage visual reviews
    "article-google-reviews", // Platform-specific stimulation
  ],

  "article-reviews-audit": [
    "article-brand-reputation-audit", // Comprehensive reputation audit
    "article-reviews-integration", // Review system optimization
    "article-orm-strategy", // Strategic review management
    "article-free-listing-audit", // Multi-platform review audit
  ],

  "article-reviews-integration": [
    "article-reviews-rating-microdata", // Technical integration
    "article-apple-business-connect", // Platform integration
    "article-reviews-audit", // Integration assessment
    "article-site-reputation-trustrank", // Reviews impact on authority
  ],

  "article-reviews-rating-microdata": [
    "article-schema-org-org-localbusiness", // Related structured data
    "article-technical-seo-audit", // Technical implementation
    "article-reviews-integration", // Review system integration
    "article-seo-basics", // SEO foundation for markup
  ],

  "article-reviews-sms-email": [
    "article-review-stimulation", // Review collection strategy
    "article-google-reviews", // Platform-specific collection
    "article-yandex-reviews", // Multi-platform collection
    "article-rating-in-maps", // Improve map ratings
  ],

  "article-site-reputation-trustrank": [
    "article-white-linkbuilding", // Build domain authority
    "article-orm-strategy", // Reputation management
    "article-technical-seo-audit", // Technical trust factors
    "article-seo-maintenance-support", // Maintain site reputation
  ],

  "article-yandex-reviews": [
    "article-yandex-registration", // Yandex platform setup
    "article-reviews-sms-email", // Yandex review collection
    "article-behavioral-factors-seo", // Yandex ranking factors
    "article-reply-to-reviews", // Yandex review management
  ],

  // tehnicheskoe-seo category
  "article-3d-tours-cards": [
    "article-photos-optimization", // Visual content strategy
    "article-media-card-optimization", // Advanced media
    "article-local-cases", // Showcase 3D work
    "article-technical-seo-audit", // Technical implementation
  ],

  "article-increase-call-route-clicks": [
    "article-gmb-full-setup", // Optimize for clicks
    "article-maps-impressions", // Convert impressions to clicks
    "article-mobile-optimization", // Mobile click optimization
    "article-navigators-visibility", // Navigator click optimization
  ],

  "article-internal-linking-local-seo": [
    "article-site-structure-local-seo", // Local site architecture
    "article-city-pages-geoqueries", // Link geo pages
    "article-internal-linking-seo-general", // General linking strategy
    "article-regions-seo-texts", // Link regional content
  ],

  "article-internal-linking-seo-general": [
    "article-internal-linking-local-seo", // Local linking application
    "article-site-structure-audit", // Structure for linking
    "article-technical-seo-audit", // Technical linking issues
    "article-seo-maintenance-support", // Maintain link structure
  ],

  "article-keyword-clustering": [
    "article-semantic-core", // Keyword foundation
    "article-competitive-local-seo", // Competitive keywords
    "article-city-pages-geoqueries", // Geo keyword clustering
    "article-maps-impressions", // Keywords for map visibility
  ],

  "article-meta-tags": [
    "article-seo-basics", // SEO foundation
    "article-technical-seo-audit", // Technical optimization
    "article-mobile-optimization", // Mobile meta optimization
    "article-homepage-seo-texts", // Meta for homepage
  ],

  "article-mobile-optimization": [
    "article-behavioral-factors-seo", // Mobile behavior
    "article-navigators-visibility", // Mobile navigation
    "article-increase-call-route-clicks", // Mobile actions
    "article-business-card-site", // Mobile-first sites
  ],

  "article-online-booking": [
    "article-gmb-products-services", // Bookable services
    "article-local-seo-beauty-salons", // Booking-heavy industry
    "article-local-seo-dental", // Medical appointments
    "article-increase-call-route-clicks", // Convert clicks to bookings
  ],

  "article-qna-in-listings": [
    "article-gmb-full-setup", // Q&A in GMB
    "article-contacts-page", // FAQ on site
    "article-review-stimulation", // Q&A engagement
    "article-local-seo-restaurants", // Q&A for restaurants
  ],

  "article-schema-org-org-localbusiness": [
    "article-reviews-rating-microdata", // Review markup
    "article-nap-audit", // Consistent data for markup
    "article-technical-seo-audit", // Technical implementation
    "article-contacts-directions", // Contact markup
  ],

  "article-semantic-core": [
    "article-keyword-clustering", // Keyword organization
    "article-competitive-local-seo", // Competitive research
    "article-city-pages-geoqueries", // Geo keyword strategy
    "article-seo-copywriting", // Keyword implementation
  ],

  "article-seo-audit-local": [
    "article-technical-seo-audit", // Technical audit component
    "article-competitive-local-seo", // Competitive audit
    "article-free-listing-audit", // Listing audit component
    "article-seo-maintenance-support", // Post-audit maintenance
  ],

  "article-seo-basics": [
    "article-meta-tags", // Basic technical SEO
    "article-semantic-core", // Keyword basics
    "article-gmb-registration", // Local SEO basics
    "article-seo-copywriting", // Content basics
  ],

  "article-seo-maintenance-support": [
    "article-seo-audit-local", // Regular audits
    "article-local-positions", // Position monitoring
    "article-technical-seo-audit", // Technical maintenance
    "article-white-linkbuilding", // Ongoing link building
  ],

  "article-technical-seo-audit": [
    "article-seo-audit-local", // Local audit component
    "article-mobile-optimization", // Technical mobile issues
    "article-schema-org-org-localbusiness", // Technical markup
    "article-site-structure-audit", // Structure audit
  ],
};
