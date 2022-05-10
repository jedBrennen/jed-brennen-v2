import { useContext, useState } from 'react';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu, mdiThemeLightDark } from '@mdi/js';
import JBButton from 'components/JBButton/JBButton';
import { ROUTE_HOME } from 'common/routes';
import { ThemeContext } from 'context/Theme/Theme';
import useBreakpoint from 'common/hooks/useBreakpoint';
import { JBButtonSize } from 'components/JBButton/JBButton.types';
import JBLink from 'components/JBLink/JBLink';
import useNavigateToTop from 'common/hooks/useNavigateToTop';

const JBNavbar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const navigate = useNavigateToTop();
  const breakpoint = useBreakpoint();

  const buttonSize: JBButtonSize =
    breakpoint === 'mobile' || breakpoint === 'tablet' ? 'large' : 'small';

  const handleNavigate = (route: string) => {
    navigate(route);
    setIsMenuExpanded(false);
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <nav className="jb-navbar">
      <div
        className={classNames('jb-navbar__menu', {
          'jb-navbar__menu--expanded': isMenuExpanded,
        })}
      >
        <JBLink
          linkSize={buttonSize}
          href="#home"
          onClick={() => handleNavigate(ROUTE_HOME)}
        >
          Home
        </JBLink>
        <JBLink
          linkSize={buttonSize}
          href="#home-about"
          onClick={() => handleNavigate(ROUTE_HOME)}
        >
          About
        </JBLink>
        <JBLink
          linkSize={buttonSize}
          href="#home-expertise"
          onClick={() => handleNavigate(ROUTE_HOME)}
        >
          Expertise
        </JBLink>
        <JBLink
          linkSize={buttonSize}
          href="#home-experience"
          onClick={() => handleNavigate(ROUTE_HOME)}
        >
          Experience
        </JBLink>
        <JBLink
          linkType="primary"
          linkSize={buttonSize}
          href="/files/Jed Brennen CV.pdf"
          download
        >
          Download CV
        </JBLink>
        <JBButton
          buttonType="tertiary"
          buttonSize={buttonSize}
          onClick={toggleTheme}
          className="jb-navbar__theme-toggle"
          icon={mdiThemeLightDark}
        />
      </div>
      <JBButton
        className="jb-navbar__hamburger"
        buttonType="tertiary"
        buttonSize={buttonSize}
        onClick={() => setIsMenuExpanded(!isMenuExpanded)}
        icon={isMenuExpanded ? mdiClose : mdiMenu}
      />
    </nav>
  );
};

JBNavbar.displayName = 'JBNavbar';
export default JBNavbar;
