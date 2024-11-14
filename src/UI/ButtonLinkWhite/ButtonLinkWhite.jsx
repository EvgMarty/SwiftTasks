import { Link } from 'react-router-dom';
import style from './ButtonLinkWhite.module.scss';

const ButtonLinkWhite = ({
  children,
  onClick,
  title,
  link,
  disabled = false,
}) => {
  return (
    <Link
      className={style.btnLink__black}
      to={link}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ButtonLinkWhite;
