import style from './ButtonMain.module.scss';

const ButtonMain = ({
  children,
  onClick,
  title,
  type,
  variant,
  disabled = false,
}) => {
  return (
    <button
      className={`${style.btnMain} ${style[variant]}`}
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
