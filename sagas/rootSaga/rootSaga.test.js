/* eslint-disable max-len */
import {
  all,
  takeLatest,
} from 'redux-saga/effects';

import rootSaga from './rootSaga';
import * as constants from '../../constants';
import handleCreateAvailability from '../handleCreateAvailability/handleCreateAvailability';
import handleCreateReservation from '../handleCreateReservation/handleCreateReservation';

describe('rootSaga', () => {
  it('should init all needed sagas from root', () => {
    const iterator = rootSaga();
    expect(iterator.next().value).toEqual(all([
      takeLatest(constants.HANDLE_CREATE_AVAILABILITY, handleCreateAvailability),
      takeLatest(constants.HANDLE_CREATE_RESERVATION, handleCreateReservation),
    ]));
  });
});
