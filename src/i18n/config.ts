export type Locale = (typeof locales)[number];

export const locales = ["en", "zh-Hans", "zh-Hant"] as const;
export const defaultLocale: Locale = "en";