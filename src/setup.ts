import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

/**
 * Setup application by initializing the required resources.
 */
export default function setup(): void {
    setupI18next()
}

/**
 * Setup i18next library for internationalization.
 */
function setupI18next(): void {
    i18n
        .use(Backend)
        .use(initReactI18next)
        .init({
            lng: "en",
            fallbackLng: "en",
            load: "languageOnly",
            interpolation: {
                escapeValue: false
            },
            react: {
                useSuspense: true
            }
        });
}
