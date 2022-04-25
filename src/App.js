import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
  Router
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Article } from './pages/Article';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles';
import Portfolio from './pages/Portfolio';

function App() {
  let history = useHistory();
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#FB8500'
      },
      secondary: {
        main: '#219EBC'
      },
      text: {
        primary: '#fff'
      },
      action: {
        disabledBackground: '#fff'
      }
    },
    typography: {
      button: {
        textTransform: 'none',

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
              <NavLink to="/" exact>
                Home
              </NavLink>
              <NavLink to="/about">About me</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              {/* <NavLink to="/contact">Contact</NavLink> */}
            </nav>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Portfolio />
              </Route>
              <Route path="/articles/:id">
                <Article />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
