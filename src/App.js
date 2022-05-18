import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles';
import Portfolio from './pages/Portfolio';
import MenuDrawer from './components/MenuDrawer';

function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#FB8500'
      },
      secondary: {
        main: '#219EBC'
      },
      // text: {
      //   primary: '#fff'
      // },
      action: {
        disabledBackground: '#fff'
      }
    },
    typography: {
      button: {
        textTransform: 'none',
        fontFamily: 'VT323',
        fontSize: '16px',
        color: '#fff'
      }
    }
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <div className="App">
          <BrowserRouter>
            <nav>
              <h1>.ZCODER</h1>

              <MenuDrawer />
            </nav>
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/about" element={<About />} />

              <Route path="/projects" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
