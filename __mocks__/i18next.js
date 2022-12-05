// https://react.i18next.com/misc/testing

const mocki18n = {
  t: jest.fn((key, options) => {
    if (options) {
      return {
        key,
        options,
      };
    }
    return key;
  }),
};

export default mocki18n;
