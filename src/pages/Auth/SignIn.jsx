import { FcGoogle } from 'react-icons/fc';
import { ROUTES } from '../../routes/routes';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import styles from './Auth.module.scss';

const SignIn = () => {
  return (
    <section className={styles.auth__section}>
      <div className={styles.form__wraper}>
        <div className={styles.form__head}>
          <h1 className={styles.title}>Sign In to SwiftTask</h1>
          <p className={styles.text}>
            Welcome back! Please sign in to continue
          </p>
        </div>
        <ButtonMain variant="black__white">
          <FcGoogle className={styles.icon} /> Continue with Googl
        </ButtonMain>
        <div className={styles.decorative_text}>
          <p className={styles.text}>or</p>
        </div>
        <form className={styles.form}>
          <label className={styles.form__label} htmlFor="email">
            Email address
          </label>
          <input className={styles.form__input} id="email" type="emain" />
          <ButtonMain variant="white" type="button">
            Continue
          </ButtonMain>
        </form>
        <AuthFooter
          text="Don’t have an account? "
          namePage="Sign Up"
          link={ROUTES.SIGN_UP}
        />
      </div>
    </section>
  );
};

export default SignIn;
