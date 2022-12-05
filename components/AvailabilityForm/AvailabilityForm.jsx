import {
  Box,
  Button, FormControl, InputLabel, MenuItem,
  Select,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';

const generateDays = () => {
  const days = [];
  _.times(90, (index) => {
    days.push(moment().add(index, 'days').startOf('day'));
  });
  return days;
};

const generateTimes = (day) => {
  const startEndTimes = [];

  if (day) {
    _.times(24, (index) => {
      startEndTimes.push(moment(day).set('hour', index));
      startEndTimes.push(moment(day).set('hour', index).set('minute', 30));
    });
  }

  return startEndTimes;
};

function AvailabilityForm({ availability, onAvailabilityChange }) {
  const { t } = useTranslation();

  const handleDayChange = (value, index) => {
    const clonedAvailability = _.cloneDeep(availability);

    clonedAvailability[index].day = value;

    if (clonedAvailability[index]?.start || clonedAvailability[index]?.end) {
      clonedAvailability[index].end = undefined;
      clonedAvailability[index].start = undefined;
    }

    onAvailabilityChange(clonedAvailability);
  };

  const handleStartChange = (value, index) => {
    const clonedAvailability = _.cloneDeep(availability);

    clonedAvailability[index].start = value;

    if (clonedAvailability[index]?.end
      && moment(value).isAfter(moment(clonedAvailability[index]?.end))) {
      clonedAvailability[index].end = moment(value).add(30, 'minutes');
    }

    onAvailabilityChange(clonedAvailability);
  };

  const handleEndChange = (value, index) => {
    const clonedAvailability = _.cloneDeep(availability);

    clonedAvailability[index].end = value;

    if (clonedAvailability[index]?.start
      && moment(value).isBefore(moment(clonedAvailability[index]?.start))) {
      clonedAvailability[index].start = moment(value).subtract(30, 'minutes');
    }

    onAvailabilityChange(clonedAvailability);
  };

  const handleAddAvailability = () => {
    const clonedAvailability = _.cloneDeep(availability);
    clonedAvailability.push({});
    onAvailabilityChange(clonedAvailability);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
      elevation={4}
    >
      {_.map(availability, (entry, entryIndex) => (
        <Box sx={{ display: 'flex', width: '100%', my: 1 }} key={entryIndex}>
          <FormControl variant="filled" sx={{ width: '33%', px: 0.5 }}>
            <InputLabel id="day_label">{t('label_day')}</InputLabel>
            <Select
              labelId="day_label"
              onChange={(e) => handleDayChange(e?.target?.value, entryIndex)}
              value={entry?.day || ''}
              renderValue={(val) => moment(val)?.format('ddd M/D')}
            >
              {_.map(generateDays(), (day) => <MenuItem key={day.format()} value={day.format()}>{day.format('ddd M/D')}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ width: '33%', px: 0.5 }} disabled={_.isNil(entry?.day)}>
            <InputLabel id="start_label">{t('label_start')}</InputLabel>
            <Select
              labelId="start_label"
              onChange={(e) => handleStartChange(e?.target?.value, entryIndex)}
              value={entry?.start || ''}
              renderValue={(val) => moment(val)?.format('h:mm A')}
            >
              {_.map(generateTimes(entry?.day), (time) => <MenuItem key={time.format()} value={time.format()}>{time.format('h:mm A')}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ width: '33%', px: 0.5 }} disabled={_.isNil(entry?.day)}>
            <InputLabel id="end_label">{t('label_end')}</InputLabel>
            <Select
              labelId="end_label"
              onChange={(e) => handleEndChange(e?.target?.value, entryIndex)}
              value={entry?.end || ''}
              renderValue={(val) => moment(val)?.format('h:mm A')}
            >
              {_.map(generateTimes(entry?.day), (time) => <MenuItem key={time.format()} value={time.format()}>{time.format('h:mm A')}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
      ))}
      <Button variant="outlined" sx={{ textAlign: 'center', mt: 2 }} onClick={handleAddAvailability}>{t('add_availability_button')}</Button>
    </Box>
  );
}

AvailabilityForm.propTypes = {
  availability: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    end: PropTypes.string,
    start: PropTypes.string,
  })).isRequired,
  onAvailabilityChange: PropTypes.func.isRequired,
};

export default AvailabilityForm;
