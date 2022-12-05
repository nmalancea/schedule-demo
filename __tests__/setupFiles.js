import moment from 'moment';
import 'moment-timezone';

moment.tz.setDefault('UTC');
moment.tz.guess = jest.fn().mockReturnValue('UTC');
