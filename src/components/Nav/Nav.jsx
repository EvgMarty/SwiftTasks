import ButtonLink from '../../UI/ButtonLink/ButtonLink';
import Logo from '../Logo/Logo';
import { ROUTES } from '../../routes/routes';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.nav__group}>
        <ButtonLink link={ROUTES.SIGN_IN}>Login</ButtonLink>
        <ButtonLink link={ROUTES.SIGN_UP} variant="white">
          Sign Up
        </ButtonLink>
      </div>
    </nav>
  );
};

export default Nav;
