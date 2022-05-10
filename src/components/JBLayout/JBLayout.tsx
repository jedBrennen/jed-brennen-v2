import { Outlet } from 'react-router-dom';
import JBFooter from 'components/JBFooter/JBFooter';
import JBNavbar from 'components/JBNavbar/JBNavbar';

const JBLayout: React.FC = () => {
  return (
    <div className="jb-layout">
      <JBNavbar />
      <div className="jb-layout__content">
        <Outlet />
      </div>
      <JBFooter />
    </div>
  );
};

JBLayout.displayName = 'Layout';
export default JBLayout;
