import { shallow } from 'enzyme';
import { Route, Routes } from 'react-router-dom';

import Router from './Router';
import {
  getConfirmationRoute,
  getHomeRoute,
  getPatientRoute,
  getProviderRoute,
} from '../../routes';
import Home from '../../pages/Home/Home';
import PatientForm from '../../pages/PatientForm/PatientForm';
import ProviderForm from '../../pages/ProviderForm/ProviderForm';
import Confirmation from '../../pages/Confirmation/Confirmation';

describe('Router', () => {
  it('should have a Routes component', () => {
    const component = shallow(<Router />);
    expect(component.find(Routes)).toHaveLength(1);
  });

  it('should render the home route', () => {
    const component = shallow(<Router />);
    expect(component.find(Route).at(0).prop('path')).toEqual(getHomeRoute());
    expect(component.find(Route).at(0).prop('element')).toEqual(<Home />);
  });

  it('should render the confirmation route', () => {
    const component = shallow(<Router />);
    expect(component.find(Route).at(1).prop('path')).toEqual(getConfirmationRoute());
    expect(component.find(Route).at(1).prop('element')).toEqual(<Confirmation />);
  });

  it('should render the patient route', () => {
    const component = shallow(<Router />);
    expect(component.find(Route).at(2).prop('path')).toEqual(getPatientRoute());
    expect(component.find(Route).at(2).prop('element')).toEqual(<PatientForm />);
  });

  it('should render the provider route', () => {
    const component = shallow(<Router />);
    expect(component.find(Route).at(3).prop('path')).toEqual(getProviderRoute());
    expect(component.find(Route).at(3).prop('element')).toEqual(<ProviderForm />);
  });
});
