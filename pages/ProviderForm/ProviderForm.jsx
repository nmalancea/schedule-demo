import _ from 'lodash';
import {
  Button,
  Card, TextField, Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AvailabilityForm from '../../components/AvailabilityForm/AvailabilityForm';
import { handleCreateAvailability } from '../../actions';
import { getHomeRoute } from '../../routes';

function ProviderForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [availability, setAvailability] = useState([]);
  const [name, setName] = useState('');

  const handleSubmitAvailability = () => {
    dispatch(handleCreateAvailability({ availability, name }));
    navigate(getHomeRoute());
  };

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
      <Typography variant="h5" sx={{ textAlign: 'center' }}>{t('provider_message')}</Typography>
      <TextField variant="outlined" onChange={(e) => setName(e?.target?.value)} value={name} label={t('label_name')} />
      <AvailabilityForm availability={availability} onAvailabilityChange={setAvailability} />
      <Button variant="contained" sx={{ textAlign: 'center', my: 2 }} disabled={_.isEmpty(availability) || _.isEmpty(name)} onClick={handleSubmitAvailability}>{t('submit_availability_button')}</Button>
    </Card>
  );
}

export default ProviderForm;
