import { BrowserRouter } from 'react-router-dom';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../../themes/default';
import Router from '../Router/Router';
import Container from '../Container/Container';

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Container>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
          </ThemeProvider>
        </Container>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
