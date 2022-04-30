import JBNavbar from 'components/JBNavbar/JBNavbar';
import { Outlet } from 'react-router-dom';

const JBLayout: React.FC = () => {
  return (
    <div className="jb-layout">
      <JBNavbar></JBNavbar>
      <Outlet />
    </div>
  );
};

JBLayout.displayName = 'Layout';
export default JBLayout;
