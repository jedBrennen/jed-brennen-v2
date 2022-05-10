import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';
import JBButton from 'components/JBButton/JBButton';
import { ROUTE_HOME } from 'common/routes';
import { ThemeContext } from 'context/Theme/Theme';
import useBreakpoint from 'common/hooks/useBreakpoint';
import { JBButtonSize } from 'components/JBButton/JBButton.types';
import JBLink from 'components/JBLink/JBLink';

const JBNavbar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();

  const handleNavigate = (route: string) => {
    navigate(route);
    setIsMenuExpanded(false);
  };

  const buttonSize: JBButtonSize =
    breakpoint === 'mobile' || breakpoint === 'tablet' ? 'large' : 'small';

  return (
    <nav className="jb-navbar">
      <div
        className={classNames('jb-navbar__menu', {
          'jb-navbar__menu--expanded': isMenuExpanded,
        })}
      >
        <JBButton
          buttonType="tertiary"
          buttonSize={buttonSize}
          onClick={() => setTheme('light')}
        >
          {`Set Light${theme === 'light' ? ' (Current)' : ''}`}
        </JBButton>
        <JBButton
          buttonType="tertiary"
          buttonSize={buttonSize}
          onClick={() => setTheme('dark')}
        >
          {`Set Dark${theme === 'dark' ? ' (Current)' : ''}`}
        </JBButton>
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
      </div>
      <JBButton
        className="jb-navbar__hamburger"
        buttonType="primary"
        buttonSize={buttonSize}
        onClick={() => setIsMenuExpanded(!isMenuExpanded)}
      >
        <Icon path={isMenuExpanded ? mdiClose : mdiMenu} size={1.3} />
      </JBButton>
    </nav>
  );
};

JBNavbar.displayName = 'JBNavbar';
export default JBNavbar;
