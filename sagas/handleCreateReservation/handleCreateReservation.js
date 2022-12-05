import { put } from 'redux-saga/effects';
import moment from 'moment';
import { setReservation, setReservationBookingTime, setReservationConfirmed } from '../../actions';

export default function* handleCreateReservation({ payload: timeSlot }) {
  yield put(setReservation(timeSlot));
  yield put(setReservationBookingTime(moment()));
  yield put(setReservationConfirmed(false));
}
