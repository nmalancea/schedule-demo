import {
  DATA_RESERVATION, DATA_RESERVATION_BOOKING_TIME, DATA_RESERVATION_CONFIRMED,
} from '../constants';

export default {
  defaultState: {
    bookingTime: undefined,
    confirmed: false,
    slotStart: undefined,
  },
  reducers: {
    [DATA_RESERVATION]: (state, { payload }) => ({ ...state, slotStart: payload }),
    [DATA_RESERVATION_BOOKING_TIME]: (state, { payload }) => ({ ...state, bookingTime: payload }),
    [DATA_RESERVATION_CONFIRMED]: (state, { payload }) => ({ ...state, confirmed: payload }),
  },
};
