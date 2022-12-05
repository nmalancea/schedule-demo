import * as constants from './constants';

function actionCreator(type) {
  return (payload) => ({
    type,
    payload,
  });
}

export const setAvailability = actionCreator(constants.DATA_AVAILABILITY);
export const setReservation = actionCreator(constants.DATA_RESERVATION);
export const setReservationBookingTime = actionCreator(constants.DATA_RESERVATION_BOOKING_TIME);
export const setReservationConfirmed = actionCreator(constants.DATA_RESERVATION_CONFIRMED);

export const handleCreateAvailability = actionCreator(constants.HANDLE_CREATE_AVAILABILITY);
export const handleCreateReservation = actionCreator(constants.HANDLE_CREATE_RESERVATION);
