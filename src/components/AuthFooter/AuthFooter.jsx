import { Link } from 'react-router-dom';
import styles from './AuthFooter.module.scss';

const AuthFooter = ({ link, text, namePage }) => {
  return (
    <div className={styles.auth__footer}>
      <p className={styles.text}> {text}</p>
      <Link className={styles.link} to={link}>
        {namePage}
      </Link>
    </div>
  );
};

export default AuthFooter;
