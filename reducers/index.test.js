const mockCombineReducers = jest.fn();
jest.mock('redux', () => ({
  combineReducers: mockCombineReducers,
}));

const { createReducer } = require('./index');

describe('reducers', () => {
  it('should return the correct shape', () => {
    require('./index'); // eslint-disable-line global-require

    expect(mockCombineReducers).toHaveBeenCalled();
    expect(mockCombineReducers.mock.calls[0][0]).toContainAllKeys([
      'providers',
      'reservations',
    ]);
  });

  describe('createReducer', () => {
    it('should return initial state when state is undefined', () => {
      const mockConstantOneReducer = jest.fn();
      const mockConstantTwoReducer = jest.fn();
      const defaultState = {
        other: 'junk',
        temp: [],
      };

      const reducer = createReducer({
        defaultState,
        reducers: {
          TEST_CONSTANT_ONE: mockConstantOneReducer,
          TEST_CONSTANT_TWO: mockConstantTwoReducer,
        },
      });

      const returnedState = reducer(undefined, { type: 'TEST_CONSTANT_ONE' });
      expect(returnedState).toBe(defaultState);
      expect(mockConstantOneReducer).not.toHaveBeenCalled();
      expect(mockConstantTwoReducer).not.toHaveBeenCalled();
    });

    it('should return state passed in when reducers do not match action', () => {
      const mockConstantOneReducer = jest.fn();
      const defaultState = {
        other: 'junk',
        temp: [],
      };
      const state = { not: 'real' };
      const reducer = createReducer({
        defaultState,
        reducers: {
          TEST_CONSTANT_ONE: mockConstantOneReducer,
        },
      });

      const returnedState = reducer(state, { type: 'TEST_CONSTANT_TWO' });
      expect(returnedState).toBe(state);
      expect(mockConstantOneReducer).not.toHaveBeenCalled();
    });

    it('should return updated state when reducers match action', () => {
      const updatedState = { new: 'junk' };
      const mockConstantOneReducer = jest.fn(() => updatedState);
      const mockConstantTwoReducer = jest.fn();
      const defaultState = {
        other: 'junk',
        temp: [],
      };

      const reducer = createReducer({
        defaultState,
        reducers: {
          TEST_CONSTANT_ONE: mockConstantOneReducer,
          TEST_CONSTANT_TWO: mockConstantTwoReducer,
        },
      });

      const returnedState = reducer({}, { type: 'TEST_CONSTANT_ONE' });
      expect(returnedState).toBe(updatedState);
      expect(mockConstantOneReducer).toHaveBeenCalledWith({}, { type: 'TEST_CONSTANT_ONE' });
      expect(mockConstantTwoReducer).not.toHaveBeenCalled();
    });
  });
});
