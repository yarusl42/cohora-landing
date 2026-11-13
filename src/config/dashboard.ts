const defaultDashboardUrl = "https://app.cohora.org";

export const dashboardUrl = (
  process.env.NEXT_PUBLIC_COHORA_DASHBOARD_URL || defaultDashboardUrl
).replace(/\/$/, "");

export const signInUrl = `${dashboardUrl}/login`;
export const signupUrl = `${dashboardUrl}/signup/owner`;
