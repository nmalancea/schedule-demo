import reservationsReducers from './reservations';
import {
  DATA_RESERVATION,
  DATA_RESERVATION_BOOKING_TIME,
  DATA_RESERVATION_CONFIRMED,
} from '../constants';

describe('reducers - reservations', () => {
  it('should handle the DATA_RESERVATION action', () => {
    const action = { type: DATA_RESERVATION, payload: 'time stamp' };
    expect(reservationsReducers.reducers[DATA_RESERVATION]({}, action)).toEqual({
      slotStart: 'time stamp',
    });
  });

  it('should handle the DATA_RESERVATION_BOOKING_TIME action', () => {
    const action = { type: DATA_RESERVATION_BOOKING_TIME, payload: 'time stamp' };
    expect(reservationsReducers.reducers[DATA_RESERVATION_BOOKING_TIME]({}, action)).toEqual({
      bookingTime: 'time stamp',
    });
  });

  it('should handle the DATA_RESERVATION_CONFIRMED action', () => {
    const action = { type: DATA_RESERVATION_CONFIRMED, payload: false };
    expect(reservationsReducers.reducers[DATA_RESERVATION_CONFIRMED]({}, action)).toEqual({
      confirmed: false,
    });
  });
});
