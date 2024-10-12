import { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JBLayout from '@/components/JBLayout/JBLayout';
import Home from '@/pages/Home/Home';
import { ROUTE_COMPANIES, ROUTE_HOME } from '@/common/routes';
import ThemeProvider from '@/context/Theme/Theme';
import 'aos/dist/aos.css';
import Company from '@/pages/Company/Company';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      anchorPlacement: 'top-bottom',
      duration: 1000,
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path={ROUTE_HOME} element={<JBLayout />}>
            <Route index element={<Home />} />
            <Route
              path={`${ROUTE_COMPANIES}/:companyId`}
              element={<Company />}
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

App.displayName = 'App';
export default App;
