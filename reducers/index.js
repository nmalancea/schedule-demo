import { combineReducers } from 'redux';
import _ from 'lodash';

import providers from './providers';
import reservations from './reservations';

// From redux
// The reducers may never return undefined for any action. Instead, they should
// return their initial state if the state passed to them was undefined, and the
// current state for any unrecognized action.
export const createReducer = ({ defaultState, reducers }) => (state, action) => {
  if (_.isUndefined(state)) {
    return defaultState;
  }

  const reducer = reducers[action.type];
  return _.isNil(reducer) ? state : reducer(state, action);
};

// https://github.com/supasate/connected-react-router#step-1
export default combineReducers({
  providers: createReducer(providers),
  reservations: createReducer(reservations),
});
