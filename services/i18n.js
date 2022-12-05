import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '../translations/messages';

export default {
  initI18n: (locale = 'en-US') => (
    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: locale,
        interpolation: {
          escapeValue: false,
        },
      })
  ),
};
