// this file only exists so we have access to the react-router-dom functions that come from the hook

// eslint-disable-next-line import/prefer-default-export
export const history = {
  push: jest.fn(),
  goBack: jest.fn(),
};

export const mockNavigate = jest.fn();
