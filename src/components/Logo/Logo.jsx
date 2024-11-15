import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to={ROUTES.MAIN} className={styles.logo}>
      <h1 className={styles.logo__name}>
        <span className={styles.accent}>Swift</span>Tasks
      </h1>
    </Link>
  );
};

export default Logo;
