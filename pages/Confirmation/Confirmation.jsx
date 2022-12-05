import {
  Button,
  Card, Typography,
} from '@mui/material';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeRoute, getPatientRoute } from '../../routes';
import {
  selectReservation,
  selectReservationBookingTime,
  selectReservationConfirmed,
} from '../../selectors';
import { setReservationConfirmed } from '../../actions';

function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reservation = useSelector(selectReservation);
  const bookingTime = useSelector(selectReservationBookingTime);
  const confirmed = useSelector(selectReservationConfirmed);

  const handleConfirm = () => {
    dispatch(setReservationConfirmed(true));
    navigate(getHomeRoute());
  };

  const handleReschedule = () => {
    navigate(getPatientRoute());
  };

  const isExpired = moment().isAfter(moment(bookingTime).add(30, 'minutes'));

  return (
    <Card
      sx={{
        width: 600,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        p: 2,
      }}
      elevation={4}
    >
      {isExpired ? (
        <>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>{t('expired_message')}</Typography>
          <Button variant="outlined" onClick={handleReschedule}>{t('reschedule_button')}</Button>
        </>
      ) : (
        <>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>{t('confirmation_message', { time: moment(reservation).format('ddd M/D h:mm A') })}</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>{t('confirmation_expiration_message')}</Typography>
          <Button variant="contained" onClick={handleConfirm} disabled={confirmed}>{t('confirm_button')}</Button>
        </>
      )}
    </Card>
  );
}

export default Home;
