import {
  Button,
  Card, Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getPatientRoute, getProviderRoute } from '../../routes';

function Home() {
  const { t } = useTranslation();
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
      <Typography variant="h5" sx={{ textAlign: 'center' }}>{t('welcome_message')}</Typography>
      <Button component={Link} variant="outlined" to={getProviderRoute()}>{t('provider_button')}</Button>
      <Button component={Link} variant="contained" to={getPatientRoute()}>{t('patient_button')}</Button>
    </Card>
  );
}

export default Home;
