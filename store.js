/* eslint-disable */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas/rootSaga/rootSaga';

// https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md
// https://github.com/redux-saga/redux-saga#mainjs
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  // https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

let sagaTask = sagaMiddleware.run(rootSaga);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });

  module.hot.accept('./sagas/rootSaga/rootSaga', () => {
    // eslint-disable-next-line global-require
    const newSaga = require('./sagas/rootSaga/rootSaga').default;
    sagaTask.cancel();
    sagaTask.toPromise().then(() => {
      sagaTask = sagaMiddleware.run(function* replacedSaga() {
        yield newSaga;
      });
    });
  });
}

export default store;
