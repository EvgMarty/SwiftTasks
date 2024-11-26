import style from './ButtonMain.module.scss';

const ButtonMain = ({
  children,
  onClick,
  title,
  type,
  variant,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      className={`${style.btnMain} ${style[variant]} ${
        isLoading ? style.loading : ''
      }`}
      type={type}
      title={title}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && <span className={style.spinner}></span>}
      {!isLoading && children}
    </button>
  );
};

export default ButtonMain;
