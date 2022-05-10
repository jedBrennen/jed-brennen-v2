export interface JBToggleProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'checked' | 'disabled'
  > {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  isDisabled?: boolean;
  checkedLabel?: string;
  uncheckedLabel?: string;
}
