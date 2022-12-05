import {
  Route,
  Routes,
} from 'react-router-dom';

import * as routes from '../../routes';
import Home from '../../pages/Home/Home';
import ProviderForm from '../../pages/ProviderForm/ProviderForm';
import PatientForm from '../../pages/PatientForm/PatientForm';
import Confirmation from '../../pages/Confirmation/Confirmation';

function RouterComponent() {
  return (
    <Routes>
      <Route
        path={routes.getHomeRoute()}
        element={<Home />}
      />
      <Route
        path={routes.getConfirmationRoute()}
        element={<Confirmation />}
      />
      <Route
        path={routes.getPatientRoute()}
        element={<PatientForm />}
      />
      <Route
        path={routes.getProviderRoute()}
        element={<ProviderForm />}
      />
    </Routes>
  );
}

export default RouterComponent;
