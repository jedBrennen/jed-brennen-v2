import { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JBLayout from 'components/JBLayout/JBLayout';
import Home from 'pages/Home/Home';
import {
  ROUTE_COMPANIES,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
} from 'common/routes';
import ThemeProvider from 'context/Theme/Theme';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path={ROUTE_HOME} element={<JBLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTE_PORTFOLIO} element={<div>Portfolio</div>} />
            <Route path={ROUTE_COMPANIES} element={<div>Companies</div>} />
            <Route path={ROUTE_CONTACT} element={<div>Contact</div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

App.displayName = 'App';
export default App;
