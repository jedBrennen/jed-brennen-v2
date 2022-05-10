import classNames from 'classnames';
import { JBHighlightProps } from './JBHighlight.types';

const JBHighlight: React.FC<JBHighlightProps> = ({ children, className }) => {
  return (
    <div className={classNames('jb-highlight', className)}>{children}</div>
  );
};

JBHighlight.displayName = 'JBHighlight';
export default JBHighlight;
