import { shallow } from 'enzyme';
import { Button, TextField, Typography } from '@mui/material';
import ProviderForm from './ProviderForm';
import AvailabilityForm from '../../components/AvailabilityForm/AvailabilityForm';
import mockDispatch from '../../__tests__/react-redux';
import { handleCreateAvailability } from '../../actions';

describe('ProviderForm', () => {
  it('should render the provider message', () => {
    const component = shallow(<ProviderForm />);
    expect(component.find(Typography).at(0).text()).toBe('provider_message');
  });

  it('should render a text field for provider name', () => {
    const component = shallow(<ProviderForm />);
    expect(component.find(TextField).prop('label')).toBe('label_name');
  });

  it('should render the AvailabilityForm', () => {
    const component = shallow(<ProviderForm />);
    expect(component.find(AvailabilityForm)).toHaveLength(1);
  });

  it('should render the submit availability button', () => {
    const component = shallow(<ProviderForm />);
    expect(component.find(Button)).toHaveLength(1);
    expect(component.find(Button).text()).toBe('submit_availability_button');
  });

  it('should dispatch a create availability action with defaults when the availability button is fired', () => {
    const component = shallow(<ProviderForm />);
    component.find(Button).prop('onClick')();
    expect(mockDispatch).toHaveBeenCalledWith(handleCreateAvailability({ availability: [], name: '' }));
  });
});
