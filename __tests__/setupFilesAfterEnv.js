import * as matchers from 'jest-extended';
import enableHooks from 'jest-react-hooks-shallow';
import mockFetch from 'jest-fetch-mock';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// https://enzymejs.github.io/enzyme/docs/guides/jsdom.html
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html lang="en"><body></body></html>', { url: 'http://localhost/' });
const { window } = jsdom;

// this is intentionally the "old" way to do this. Using the copyProps
// method in the docs threw errors when loading MUI Forms
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.window.URL.createObjectURL = jest.fn();

global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.UserVoice = {
  push: jest.fn(),
};
global.requestAnimationFrame = function __requestAnimationFrame(callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function __cancelAnimationFrame(id) {
  clearTimeout(id);
};
copyProps(window, global);

configure({ adapter: new Adapter() });

enableHooks(jest);

mockFetch.enableMocks();

expect.extend(matchers);
