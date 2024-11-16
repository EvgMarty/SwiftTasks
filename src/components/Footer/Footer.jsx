import styles from './Footer.module.scss';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.wrapper}>
        <div className={styles.logo__top}>
          <Logo />
          <p className={styles.slogo}>
            Taskly is a streamlined project management tool, <br />
            perfect for small teams and startups.
          </p>
        </div>
        <div className={styles.link__group}>
          <ul className={styles.links}>
            <p className={styles.link__title}>Application</p>
            <li className={styles.link__item}>
              <Link to={ROUTES.APP}>Dashboard</Link>
            </li>
            <li className={styles.link__item}>
              <Link to={ROUTES.APP}>Create Project</Link>
            </li>
            <li className={styles.link__item}>
              <Link to={ROUTES.APP}>Settings</Link>
            </li>
          </ul>
          <ul className={styles.links}>
            <p className={styles.link__title}>Support</p>
            <li className={styles.link__item}>
              <Link to={ROUTES.NOTFOUND}>Documentation</Link>
            </li>
            <li className={styles.link__item}>
              <Link to={ROUTES.NOTFOUND}>Privacy Policy</Link>
            </li>
            <li className={styles.link__item}>
              <Link
                to={'https://github.com/EvgMarty/SwiftTasks'}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
          </ul>
          <ul className={styles.links}>
            <p className={styles.link__title}>Authentication</p>
            <li className={styles.link__item}>
              <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li className={styles.link__item}>
              <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </section>
      <p className={styles.rights}>© 2024 Yevhenii Martyniuk. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
