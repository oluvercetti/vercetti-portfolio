// Define environment variiables which for live mode and test mode fallback
export const liveEnv = {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
    FILESTACK: process.env.FILESTACK || "A7cQku57kRoGAs6V4DTD6z",
    API_URL: process.env.API_URL || "https://api-koporke.herokuapp.com",
    TRANSFERS_KEY: process.env.TRANSFERS_KEY || "FLWPUBK-50e19eb0c05bdad437928beb9f102d29-X",
    TRANSFERS_KEY_TEST: process.env.TRANSFERS_KEY_TEST || "FLWPUBK_TEST-3ef40a01b05638b93494957ec69f2650-X",
    CC_API_URL: process.env.CC_API_URL || "https://rave-cc-api-staging.herokuapp.com/cc",
    CHARGE_API: process.env.CHARGE_API || "https://rave-api.pilot-flutterwave.com",
    CHECKOUT_SCRIPT_URL: process.env.CHECKOUT_SCRIPT_URL || "https://checkout-testing.herokuapp.com/inline-rave.js",
    EVENTS_PAGE_URL: process.env.EVENTS_PAGE_URL || "https://afriticket-staging.herokuapp.com",
    PAYMENT_LINK_URL: process.env.PAYMENT_LINK_URL || "https://flw-web-v3.herokuapp.com",
    STORE_DOMAIN_URL: process.env.STORE_DOMAIN_URL || "https://flw-web-v3.herokuapp.com/store",
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY || "6Lclf-IZAAAAAL5sYE7JGcsh_FNeTodPHIOF0M7t",
    RECAPTCHA_URL: process.env.RECAPTCHA_URL || "https://ravesandboxapi.flutterwave.com",
    MIXPANEL_KEY: process.env.MIXPANEL_KEY || "35f81495f3cbbba8f370327757e3e304",
    V2_DASHBOARD_URL: process.env.V2_DASHBOARD_URL || "https://dashboard.flutterwave.com",
    APP_ENV: process.env.APP_ENV || "development",
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY || "xxxxxxx",
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID || "xxxxxxx",
    ONBOARDING_EMAIL: process.env.ONBOARDING_EMAIL || "onboarding@flutterwavego.com",
    SENTRY_DSN: process.env.SENTRY_DSN || "https://69110ddc06534e3186f9e4d07d582bb1@o1039424.ingest.sentry.io/6008357",
    CONTACT_US_KEY: process.env.CONTACT_US_KEY || "yzqkejsexrxyuoai",
    FLW_WEBSITE: process.env.FLW_WEBSITE || "https://flw-web-v3.herokuapp.com",
    GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY || "AIzaSyAnupBbQs3iUjsndSw6AYjtoJcNDUIi4wQ",
    // GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY || "AIzaSyAnupBbQs3iUjsndSw6AYjtoJcNDUIi4wQ",
    WOOTRICK_TOKEN: (process.env.WOOTRICK_TOKEN),
};

// Define test mode specific environment variables which here which might differ when merchant is in test mode
// E.g staging domain urls, staging specific keys etc. staging speficic redirect urls.
// Environment variables not defined / found here should use the live mode envrionments.

export const testEnv = {
    TRANSFERS_KEY: "FLWPUBK_TEST-3ef40a01b05638b93494957ec69f2650-X",
    TRANSFERS_KEY_TEST: "FLWPUBK_TEST-3ef40a01b05638b93494957ec69f2650-X",
    CHECKOUT_SCRIPT_URL: "https://checkout-testing.herokuapp.com/v3.js",
    EVENTS_PAGE_URL: "https://alpha-events-staging-fe.herokuapp.com",
    PAYMENT_LINK_URL: "https://sandbox-flw-web-v3.herokuapp.com",
    STORE_DOMAIN_URL: "https://sandbox-flw-web-v3.herokuapp.com/store",
};