import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/public/locales/{{lng}}/{{ns}}.json'
    },
    fallbackLng: 'en',
    debug: false,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  }).catch(err => console.log(err));
