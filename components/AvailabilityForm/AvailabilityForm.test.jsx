import { shallow } from 'enzyme';
import {
  Button, FormControl, MenuItem, Select,
} from '@mui/material';
import moment from 'moment';
import AvailabilityForm from './AvailabilityForm';

describe('AvailabilityForm', () => {
  it('should render a button to allow availability entries to be added', () => {
    const component = shallow(
      <AvailabilityForm
        availability={[]}
        onAvailabilityChange={jest.fn()}
      />,
    );

    expect(component.find(Button)).toHaveLength(1);
    expect(component.find(Button).text()).toBe('add_availability_button');
  });

  it('should add a new entry to availability when the add availability button is clicked', () => {
    const mockChange = jest.fn();
    const component = shallow(
      <AvailabilityForm
        availability={[]}
        onAvailabilityChange={mockChange}
      />,
    );

    component.find(Button).simulate('click');

    expect(mockChange).toHaveBeenCalledWith([{}]);
  });

  it('should render 90 days worth of availability options starting with today', () => {
    const component = shallow(
      <AvailabilityForm
        availability={[{}]}
        onAvailabilityChange={jest.fn()}
      />,
    );

    const daySelect = component.find(Select).at(0);

    expect(daySelect.find(MenuItem)).toHaveLength(90);
    expect(daySelect.find(MenuItem).at(0).text()).toBe(moment().startOf('day').format('ddd M/D'));
  });

  it('should update the day when an option is selected', () => {
    const mockChange = jest.fn();
    const component = shallow(
      <AvailabilityForm
        availability={[{}]}
        onAvailabilityChange={mockChange}
      />,
    );

    const daySelect = component.find(Select).at(0);
    daySelect.simulate('change', { target: { value: moment().startOf('day') } });

    expect(mockChange).toHaveBeenCalledWith([{ day: moment().startOf('day') }]);
  });

  it('should disable the start and end time options when no day is selected', () => {
    const component = shallow(
      <AvailabilityForm
        availability={[{}]}
        onAvailabilityChange={jest.fn()}
      />,
    );

    const startSelect = component.find(FormControl).at(1);
    const endSelect = component.find(FormControl).at(2);

    expect(startSelect.prop('disabled')).toBeTrue();
    expect(endSelect.prop('disabled')).toBeTrue();
  });

  it('should render 30 minute time slot options for start time availability', () => {
    const component = shallow(
      <AvailabilityForm
        availability={[{ day: moment().startOf('day').format() }]}
        onAvailabilityChange={jest.fn()}
      />,
    );

    const startSelect = component.find(Select).at(1);

    expect(startSelect.find(MenuItem)).toHaveLength(48);
    expect(startSelect.find(MenuItem).at(0).text()).toBe(moment().startOf('day').format('h:mm A'));
  });

  it('should update the start time when an option is selected', () => {
    const mockChange = jest.fn();
    const component = shallow(
      <AvailabilityForm
        availability={[{ day: moment().startOf('day').format() }]}
        onAvailabilityChange={mockChange}
      />,
    );

    const startSelect = component.find(Select).at(1);
    startSelect.simulate('change', { target: { value: moment().startOf('day') } });

    expect(mockChange).toHaveBeenCalledWith([{ day: moment().startOf('day').format(), start: moment().startOf('day') }]);
  });

  it('should render 30 minute time slot options for end time availability', () => {
    const component = shallow(
      <AvailabilityForm
        availability={[{ day: moment().startOf('day').format() }]}
        onAvailabilityChange={jest.fn()}
      />,
    );

    const endSelect = component.find(Select).at(2);

    expect(endSelect.find(MenuItem)).toHaveLength(48);
    expect(endSelect.find(MenuItem).at(0).text()).toBe(moment().startOf('day').format('h:mm A'));
  });

  it('should update the end time when an option is selected', () => {
    const mockChange = jest.fn();
    const component = shallow(
      <AvailabilityForm
        availability={[{ day: moment().startOf('day').format() }]}
        onAvailabilityChange={mockChange}
      />,
    );

    const endSelect = component.find(Select).at(2);
    endSelect.simulate('change', { target: { value: moment().startOf('day') } });

    expect(mockChange).toHaveBeenCalledWith([{ day: moment().startOf('day').format(), end: moment().startOf('day') }]);
  });
});
