import { initReactI18next } from 'react-i18next';
import i18n from "i18next"

export interface TranslationValues {
    [language: string]: {
        [namespace: string]: {
            [key: string]: string
        }
    }
}

export const initI18n = (  translations: TranslationValues,
                           defaultLng: string,
) => {
    const language = Object.keys(translations).find(
        (lng) =>
            navigator.language.substring(0, 2).toLowerCase() === lng.substring(0, 2),
    )
    
    i18n
        // pass the i18n instance to react-i18next.
        .use(initReactI18next)
        // init i18next: https://www.i18next.com/overview/configuration-options
        .init({
            lng: language || defaultLng,
            fallbackLng: defaultLng,
            debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
            nsSeparator: false,
            keySeparator: false,
            resources: translations,
            interpolation: {
                // not needed for react as it escapes by default
                escapeValue: false,
            },
        });
};