import { JBButtonSize } from 'components/JBButton/JBButton.types';

export interface JBLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkSize: JBButtonSize;
  isDisabled?: boolean;
}
