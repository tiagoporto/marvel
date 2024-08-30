import 'i18next'
import en from '../../public/locales/en.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: {
      en: typeof en
    }
  }
}
