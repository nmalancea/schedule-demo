import dispatch from '../__tests__/react-redux';

export default {
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => dispatch),
};
