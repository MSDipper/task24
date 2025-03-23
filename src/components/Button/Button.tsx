import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonSize = 'small' | 'big';
type ButtonStyles = 'primary' | 'accent';

interface ButtonProps {
  className?: string;
  style?: ButtonStyles
  onClick?: () => void;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button = ({ onClick, className, style, children, size }: ButtonProps) => {
  const btnStyle = styles[`component-${style}`]
  const btnSize = styles[`component-${size}`]
  const btnAllStyles = classNames(
    styles.component,
    btnStyle,
    btnSize,
    className,
  )

  return (
    <button className={btnAllStyles} onClick={onClick}>
      {children}
    </button>
  );
};
