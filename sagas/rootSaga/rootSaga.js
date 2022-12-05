import {
  all,
  takeLatest,
} from 'redux-saga/effects';

import * as constants from '../../constants';
import handleCreateAvailability from '../handleCreateAvailability/handleCreateAvailability';
import handleCreateReservation from '../handleCreateReservation/handleCreateReservation';

export default function* rootSaga() {
  yield all([
    takeLatest(constants.HANDLE_CREATE_AVAILABILITY, handleCreateAvailability),
    takeLatest(constants.HANDLE_CREATE_RESERVATION, handleCreateReservation),
  ]);
}
