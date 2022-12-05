import { useSelector } from 'react-redux';
import moment from 'moment';
import { shallow } from 'enzyme';
import { Button, Typography } from '@mui/material';
import Confirmation from './Confirmation';
import { setReservationConfirmed } from '../../actions';
import mockDispatch from '../../__tests__/react-redux';

const tomorrow = moment().add(1, 'day');
const validBookingTime = moment().subtract(1, 'minute');
const expiredBookingTime = moment().subtract(1, 'hour');

describe('Confirmation', () => {
  describe('unconfirmed appointment', () => {
    it('should display the appointment time', () => {
      useSelector
        .mockReturnValueOnce(tomorrow)
        .mockReturnValueOnce(validBookingTime)
        .mockReturnValueOnce(false);

      const component = shallow(<Confirmation />);
      expect(component.find(Typography).at(0).prop('children')).toEqual({
        key: 'confirmation_message',
        options: {
          time: tomorrow.format('ddd M/D h:mm A'),
        },
      });
    });

    it('should allow the user to confirm the appointment', () => {
      useSelector
        .mockReturnValueOnce(tomorrow)
        .mockReturnValueOnce(validBookingTime)
        .mockReturnValueOnce(false);

      const component = shallow(<Confirmation />);
      component.find(Button).simulate('click');
      expect(mockDispatch).toHaveBeenCalledWith(setReservationConfirmed(true));
    });
  });

  describe('expired', () => {
    it('should notify the user the appointment has expired', () => {
      useSelector
        .mockReturnValueOnce(tomorrow)
        .mockReturnValueOnce(expiredBookingTime)
        .mockReturnValueOnce(false);

      const component = shallow(<Confirmation />);
      expect(component.find(Typography).at(0).prop('children')).toBe('expired_message');
    });
  });
});
