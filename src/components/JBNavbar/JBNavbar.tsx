import { useContext } from 'react';
import { useNavigate } from 'react-router';
import JBButton from 'components/JBButton/JBButton';
import {
  ROUTE_COMPANIES,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
} from 'common/routes';
import { ThemeContext } from 'context/Theme/Theme';

const JBNavbar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <nav className="jb-navbar">
      <JBButton
        buttonType="tertiary"
        buttonSize="small"
        onClick={() => setTheme('light')}
      >
        {`Set Light${theme === 'light' ? ' (Current)' : ''}`}
      </JBButton>
      <JBButton
        buttonType="tertiary"
        buttonSize="small"
        onClick={() => setTheme('dark')}
      >
        {`Set Dark${theme === 'dark' ? ' (Current)' : ''}`}
      </JBButton>
      <JBButton
        buttonType="tertiary"
        buttonSize="small"
        onClick={() => navigate(ROUTE_HOME)}
      >
        Home
      </JBButton>
      <JBButton
        buttonType="tertiary"
        buttonSize="small"
        onClick={() => navigate(ROUTE_PORTFOLIO)}
      >
        Portfolio
      </JBButton>
      <JBButton
        buttonType="tertiary"
        buttonSize="small"
        onClick={() => navigate(ROUTE_COMPANIES)}
      >
        Companies
      </JBButton>
      <JBButton
        buttonType="tertiary"
        buttonSize="small"
        onClick={() => navigate(ROUTE_CONTACT)}
      >
        Contact
      </JBButton>
    </nav>
  );
};

JBNavbar.displayName = 'JBNavbar';
export default JBNavbar;
