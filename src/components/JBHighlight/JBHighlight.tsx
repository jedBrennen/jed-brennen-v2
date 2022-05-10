import classNames from 'classnames';
import { JBHighlightProps } from './JBHighlight.types';

const JBHighlight: React.FC<JBHighlightProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <div className={classNames('jb-highlight', className)} onClick={onClick}>
      {children}
    </div>
  );
};

JBHighlight.displayName = 'JBHighlight';
export default JBHighlight;
