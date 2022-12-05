import { act } from 'react-dom/test-utils';

export default {
  waitForComponentToRender: async (component, amount = 0) => {
    await act(async () => {
      await new Promise((resolve) => { setTimeout(resolve, amount); });
      component.update();
    });
  },
};
