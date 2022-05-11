import classNames from 'classnames';
import { JBHighlightProps } from './JBHighlight.types';

const JBHighlight: React.FC<JBHighlightProps> = ({
  children,
  background,
  onClick,
  className,
  ...rest
}) => {
  const style: React.CSSProperties | undefined = background
    ? { backgroundImage: `url(${background})` }
    : undefined;

  return (
    <div
      className={classNames('jb-highlight', className)}
      onClick={onClick}
      style={style}
      {...rest}
    >
      <span className="jb-highlight__content">{children}</span>
    </div>
  );
};

JBHighlight.displayName = 'JBHighlight';
export default JBHighlight;
