import ButtonLinkBlack from '../../UI/ButtonLinkBlack/ButtonLinkBlack';
import ButtonLinkWhite from '../../UI/ButtonLinkWhite/ButtonLinkWhite';
import Logo from '../Logo/Logo';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.nav__group}>
        <ButtonLinkBlack>Login</ButtonLinkBlack>
        <ButtonLinkWhite>Sign Up</ButtonLinkWhite>
      </div>
    </nav>
  );
};

export default Nav;
