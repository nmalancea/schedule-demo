import { put } from 'redux-saga/effects';
import moment from 'moment';
import handleCreateAvailability from './handleCreateAvailability';
import { setAvailability } from '../../actions';

describe('handleCreateAvailability saga', () => {
  it('should map and store the availability sent', () => {
    const start = moment().startOf('day');
    const end = moment().startOf('hour');
    const iterator = handleCreateAvailability({ payload: { availability: [{ start, end }], name: 'Provider 1' } });
    expect(iterator.next().value).toEqual(put(setAvailability([{ start, end, name: 'Provider 1' }])));
  });
});
