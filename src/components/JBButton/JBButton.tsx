import classNames from 'classnames';
import { JBButtonProps } from './JBButton.types';

const JBButton: React.FC<JBButtonProps> = ({
  buttonType = 'primary',
  buttonSize = 'medium',
  isDisabled = false,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        'jb-button',
        `jb-button--${buttonSize}`,
        `jb-button--${buttonType}`,
        className
      )}
      disabled={isDisabled}
      {...rest}
    >
      <span className="jb-button__content">{children}</span>
    </button>
  );
};

JBButton.displayName = 'JBButton';
export default JBButton;
