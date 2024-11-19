import { FcGoogle } from 'react-icons/fc';
import { ROUTES } from '../../routes/routes';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import styles from './Auth.module.scss';

const SignUp = () => {
  return (
    <section className={styles.auth__section}>
      <div className={styles.form__wraper}>
        <div className={styles.form__head}>
          <h1 className={styles.title}>Create your account</h1>
          <p className={styles.text}>
            Welcome! Please fill in the details to get started.
          </p>
        </div>
        <ButtonMain variant="black__white">
          <FcGoogle className={styles.icon} /> Continue with Googl
        </ButtonMain>
        <div className={styles.decorative_text}>
          <p className={styles.text}>or</p>
        </div>
        <form className={styles.form}>
          <label className={styles.form__label} htmlFor="userName">
            Username
          </label>
          <input className={styles.form__input} id="userName" type="text" />
          <label className={styles.form__label} htmlFor="email">
            Email address
          </label>
          <input className={styles.form__input} id="email" type="email" />
          <label className={styles.form__label} htmlFor="password">
            Password
          </label>
          <input className={styles.form__input} id="password" type="password" />
          <ButtonMain variant="white" type="button">
            Continue
          </ButtonMain>
        </form>
        <AuthFooter
          text="Already have an account? "
          namePage="Sign In"
          link={ROUTES.SIGN_IN}
        />
      </div>
    </section>
  );
};

export default SignUp;
