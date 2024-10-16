import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin } from '@mdi/js';
import JBLink from '@/components/JBLink/JBLink';

const JBFooter: React.FC = () => {
  return (
    <footer className="jb-footer">
      <div className="jb-footer__links">
        <JBLink
          linkSize="medium"
          href="https://github.com/jedBrennen"
          target="_blank"
        >
          <Icon path={mdiGithub} size={2} />
        </JBLink>
        <JBLink
          linkSize="medium"
          href="https://www.linkedin.com/in/jedbrennen/"
          target="_blank"
        >
          <Icon path={mdiLinkedin} size={2} />
        </JBLink>
      </div>
    </footer>
  );
};

JBFooter.displayName = 'JBFooter';
export default JBFooter;
