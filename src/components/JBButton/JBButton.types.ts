export type JBButtonSize = 'small' | 'medium' | 'large';
export type JBButtonVariation = 'primary' | 'secondary' | 'tertiary';

export interface JBButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: JBButtonVariation;
  buttonSize: JBButtonSize;
  isDisabled?: boolean;
}
