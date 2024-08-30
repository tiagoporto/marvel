import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

export const i18nInit = () => {
  i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
      backend: {
        loadPath: './locales/{{lng}}.json',
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })
}
