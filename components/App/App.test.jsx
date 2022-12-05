import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from '../../themes/default';
import Container from '../Container/Container';
import Router from '../Router/Router';

describe('App', () => {
  it('should render BrowserRouter', () => {
    const component = shallow(<App />);

    expect(component.find(BrowserRouter)).toHaveLength(1);
  });

  it('should render StyledEngineProvider', () => {
    const component = shallow(<App />);

    expect(component.find(StyledEngineProvider)).toHaveLength(1);
    expect(component.find(StyledEngineProvider).prop('injectFirst')).toBeTrue();
  });

  it('should render the Container for the site', () => {
    const component = shallow(<App />);

    expect(component.find(Container)).toHaveLength(1);
  });

  it('should render ThemeProvider', () => {
    const component = shallow(<App />);

    expect(component.find(ThemeProvider)).toHaveLength(1);
    expect(component.find(ThemeProvider).prop('theme')).toEqual(theme);
  });

  it('should render CssBaseline', () => {
    const component = shallow(<App />);

    expect(component.find(CssBaseline)).toHaveLength(1);
  });

  it('should render Router', () => {
    const component = shallow(<App />);

    expect(component.find(Router)).toHaveLength(1);
  });
});
