import { Link } from 'react-router-dom';
import style from './ButtonLink.module.scss';

const ButtonLink = ({
  children,
  onClick,
  title,
  link,
  variant,
  disabled = false,
}) => {
  return (
    <Link
      className={`${style.btnLink} ${style[variant]}`}
      to={link}
      title={title}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
