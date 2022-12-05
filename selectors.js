// eslint-disable-next-line import/prefer-default-export
export const selectAvailability = (state) => state?.providers?.availability;
export const selectReservation = (state) => state?.reservations?.slotStart;
export const selectReservationBookingTime = (state) => state?.reservations?.bookingTime;
export const selectReservationConfirmed = (state) => state?.reservations?.confirmed;
