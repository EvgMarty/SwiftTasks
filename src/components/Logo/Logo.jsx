import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import logo from '../../assets/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to={ROUTES.MAIN} className={styles.logo}>
      <img className={styles.logo__img} src={logo} alt="logo" />
      <h1 className={styles.logo__name}>Swift Tasks</h1>
    </Link>
  );
};

export default Logo;
