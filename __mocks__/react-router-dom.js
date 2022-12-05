import { mockNavigate } from '../__tests__/react-router-dom';

export default {
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useLocation: jest.fn(),
  useNavigate: jest.fn(() => mockNavigate),
  useSearchParams: jest.fn(),
};
