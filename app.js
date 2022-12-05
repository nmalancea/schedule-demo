/* eslint-disable react/jsx-filename-extension */

import 'promise-polyfill/src/polyfill';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import store from './store';
import i18n from './services/i18n';

import './static/css/app.css';

(async () => {
  await i18n.initI18n();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
})();
