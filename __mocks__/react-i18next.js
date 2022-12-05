// https://react.i18next.com/misc/testing

import mocki18n from '../__tests__/react-i18next';

export default {
  useTranslation: jest.fn(() => mocki18n),
  withTranslation: jest.fn(() => (component) => {
    // eslint-disable-next-line no-param-reassign
    component.defaultProps = { ...component.defaultProps, t: mocki18n.t };
    return component;
  }),
};
