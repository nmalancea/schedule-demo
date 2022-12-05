import providersReducers from './providers';
import { DATA_AVAILABILITY } from '../constants';

describe('reducers - providers', () => {
  it('should handle the DATA_AVAILABILITY action', () => {
    const action = { type: DATA_AVAILABILITY, payload: [{ name: 'provider 1' }] };
    expect(providersReducers.reducers[DATA_AVAILABILITY]({}, action)).toEqual({
      availability: [{ name: 'provider 1' }],
    });
  });
});
