import {
  JBButtonSize,
  JBButtonVariation,
} from 'components/JBButton/JBButton.types';

export interface JBLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkType?: JBButtonVariation;
  linkSize?: JBButtonSize;
  isDisabled?: boolean;
}
