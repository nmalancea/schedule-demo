import { shallow } from 'enzyme';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import PatientForm from './PatientForm';

describe('PatientForm', () => {
  it('should render the patient welcome message', () => {
    const component = shallow(<PatientForm />);
    expect(component.find(Typography).at(0).text()).toBe('patient_welcome_message');
  });

  it('should display unique providers for the patient to choose', () => {
    useSelector.mockReturnValueOnce([
      {
        name: 'Provider 1',
      },
      {
        name: 'Provider 2',
      },
      {
        name: 'Provider 2',
      },
    ]);
    const component = shallow(<PatientForm />);
    expect(component.find(Button)).toHaveLength(2);
    expect(component.find(Button).at(0).text()).toBe('Provider 1');
    expect(component.find(Button).at(1).text()).toBe('Provider 2');
  });

  it('should set a provider to selected when clicked updating the message', () => {
    useSelector.mockReturnValueOnce([
      {
        name: 'Provider 1',
      },
      {
        name: 'Provider 2',
      },
    ]);
    const component = shallow(<PatientForm />);
    component.find(Button).at(0).simulate('click');
    expect(component.find(Typography).at(0).text()).toBe('patient_schedule_message');
  });

  it('should render the DayTimePicker when a provider is selected, along with their valid schedules', () => {
    useSelector.mockReturnValueOnce([
      {
        name: 'Provider 1',
      },
      {
        name: 'Provider 2',
      },
    ]);
    const component = shallow(<PatientForm />);
    component.find(Button).at(0).simulate('click');
    expect(component.find(DayTimePicker)).toHaveLength(1);
  });
});
