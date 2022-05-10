import JBNavbar from 'components/JBNavbar/JBNavbar';
import { Outlet } from 'react-router-dom';

const JBLayout: React.FC = () => {
  return (
    <div className="jb-layout">
      <JBNavbar />
      <div className="jb-layout__content">
        <Outlet />
      </div>
    </div>
  );
};

JBLayout.displayName = 'Layout';
export default JBLayout;
