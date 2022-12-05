const mockInit = jest.fn();

jest.mock('i18next', () => ({ use: () => ({ init: mockInit }) }));

const i18n = require('./i18n');

describe('i18n', () => {
  it('i18next init params', async () => {
    await i18n.initI18n();

    expect(mockInit).toHaveBeenCalledWith({
      resources: { 'en-US': { translation: expect.any(Object) } },
      interpolation: {
        escapeValue: false,
      },
      lng: 'en-US',
    });
  });
});
