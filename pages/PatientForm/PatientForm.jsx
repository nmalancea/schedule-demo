import _ from 'lodash';
import moment from 'moment';
import {
  Box,
  Button,
  Card, Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { useNavigate } from 'react-router-dom';
import { selectAvailability } from '../../selectors';
import { getConfirmationRoute } from '../../routes';
import { handleCreateReservation } from '../../actions';

function PatientForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const availability = useSelector(selectAvailability);

  const [selectedProvider, setSelectedProvider] = useState();

  const uniqueProviders = _.uniq(_.map(availability, (entry) => entry?.name));

  const selectedTimes = _.filter(availability, (entry) => entry?.name === selectedProvider);

  const validateTime = (slot) => _.some(
    selectedTimes,
    (entry) => moment(slot).isBetween(entry?.start, entry?.end) && moment(slot).isAfter(moment().add(1, 'day')),
  );

  const handleConfirm = (timeSlot) => {
    dispatch(handleCreateReservation(timeSlot));
    navigate(getConfirmationRoute());
  };

  return (
    <Card
      sx={{
        width: 600,
        minHeight: 200,
        p: 2,
      }}
      elevation={4}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>{t(selectedProvider ? 'patient_schedule_message' : 'patient_welcome_message')}</Typography>
      {_.isNil(selectedProvider) ? (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
        >
          {_.map(uniqueProviders, (provider) => <Button key={provider} variant="outlined" onClick={() => setSelectedProvider(provider)}>{provider}</Button>)}
        </Box>
      ) : (
        <DayTimePicker
          timeSlotSizeMinutes={15}
          timeSlotValidator={validateTime}
          isLoading={false}
          isDone={false}
          onConfirm={handleConfirm}
        />
      )}
    </Card>
  );
}

export default PatientForm;
