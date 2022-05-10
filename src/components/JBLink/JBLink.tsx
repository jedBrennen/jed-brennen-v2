import classNames from 'classnames';
import { JBLinkProps } from './JBLink.types';

const JBLink: React.FC<JBLinkProps> = ({
  linkType = 'tertiary',
  linkSize = 'medium',
  isDisabled = false,
  className,
  children,
  ...rest
}) => {
  return (
    <a
      className={classNames(
        'jb-link',
        `jb-button--${linkType}`,
        `jb-button--${linkSize}`,
        className,
        {
          'jb-link--disabled': isDisabled,
        }
      )}
      {...rest}
    >
      <span className="jb-link__content">{children}</span>
    </a>
  );
};

JBLink.displayName = 'JBLink';
export default JBLink;
