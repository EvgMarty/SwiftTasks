import ButtonLink from '../../UI/ButtonLink/ButtonLink';
import Logo from '../Logo/Logo';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.nav__group}>
        <ButtonLink>Login</ButtonLink>
        <ButtonLink variant="white">Sign Up</ButtonLink>
      </div>
    </nav>
  );
};

export default Nav;
