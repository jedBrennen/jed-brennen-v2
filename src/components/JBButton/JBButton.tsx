import Icon from '@mdi/react';
import classNames from 'classnames';
import { JBButtonProps, JBButtonSize } from './JBButton.types';

const JBButton: React.FC<JBButtonProps> = ({
  buttonType = 'primary',
  buttonSize = 'medium',
  isDisabled = false,
  icon,
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
        className,
        {
          'jb-button--icon-only': !!icon && !children,
        }
      )}
      disabled={isDisabled}
      {...rest}
    >
      {children && <span className="jb-button__content">{children}</span>}
      {icon && (
        <Icon
          className="jb-button__icon"
          path={icon}
          size={getIconSize(buttonSize)}
        />
      )}
    </button>
  );
};

JBButton.displayName = 'JBButton';
export default JBButton;

const getIconSize = (buttonSize: JBButtonSize) => {
  switch (buttonSize) {
    case 'large':
      return 1.8;
    case 'small':
      return 1;
    default:
      return 1.3;
  }
};
