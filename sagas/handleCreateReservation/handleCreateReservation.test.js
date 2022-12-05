import { put } from 'redux-saga/effects';
import handleCreateReservation from './handleCreateReservation';
import {
  setReservation,
  setReservationBookingTime,
  setReservationConfirmed,
} from '../../actions';

describe('handleCreateReservation saga', () => {
  it('should store the time slot sent', () => {
    const iterator = handleCreateReservation({ payload: 'time' });
    expect(iterator.next().value).toEqual(put(setReservation('time')));
  });

  it('should store the booking time', () => {
    const iterator = handleCreateReservation({ payload: 'time' });
    iterator.next();
    expect(iterator.next().value).toEqual(put(setReservationBookingTime(expect.any(Object))));
  });

  it('should set the reservation to unconfirmed', () => {
    const iterator = handleCreateReservation({ payload: 'time' });
    iterator.next();
    iterator.next();
    expect(iterator.next().value).toEqual(put(setReservationConfirmed(false)));
  });
});
