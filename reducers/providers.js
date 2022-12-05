import moment from 'moment';
import {
  DATA_AVAILABILITY,
} from '../constants';

export default {
  defaultState: {
    availability: [
      {
        start: moment().add(2, 'days').subtract(2, 'hours'),
        end: moment().add(2, 'days').add(2, 'hours'),
        name: 'Default Provider',
      },
    ],
  },
  reducers: {
    [DATA_AVAILABILITY]: (state, { payload }) => ({ ...state, availability: payload }),
  },
};
