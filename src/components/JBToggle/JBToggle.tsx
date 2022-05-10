import classNames from 'classnames';
import { JBToggleProps } from './JBToggle.types';

const JBToggle: React.FC<JBToggleProps> = ({
  isChecked,
  name,
  checkedLabel,
  uncheckedLabel,
  onChange,
  className,
  isDisabled = false,
}) => {
  return (
    <div
      className={classNames('jb-toggle', className, {
        'jb-toggle--disabled': isDisabled,
      })}
    >
      <input
        id={name}
        name={name}
        className="jb-toggle__input"
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(!isChecked)}
      />
      <label
        className="jb-toggle__label"
        htmlFor={name}
        onClick={() => onChange(!isChecked)}
      >
        <span
          className="jb-toggle__inner"
          data-yes={checkedLabel}
          data-no={uncheckedLabel}
        />
        <span className="jb-toggle__switch" />
      </label>
    </div>
  );
};

JBToggle.displayName = 'JBToggle';
export default JBToggle;
