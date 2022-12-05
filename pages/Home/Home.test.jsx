import { shallow } from 'enzyme';
import { Button, Typography } from '@mui/material';
import Home from './Home';
import { getPatientRoute, getProviderRoute } from '../../routes';

describe('Home', () => {
  it('should render a welcome message', () => {
    const component = shallow(<Home />);
    expect(component.find(Typography).text()).toBe('welcome_message');
  });

  it('should render the provider button', () => {
    const component = shallow(<Home />);
    expect(component.find(Button).at(0).text()).toBe('provider_button');
    expect(component.find(Button).at(0).prop('to')).toBe(getProviderRoute());
  });

  it('should render the patient button', () => {
    const component = shallow(<Home />);
    expect(component.find(Button).at(1).text()).toBe('patient_button');
    expect(component.find(Button).at(1).prop('to')).toBe(getPatientRoute());
  });
});
