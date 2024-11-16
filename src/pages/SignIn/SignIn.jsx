import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <section className={styles.sign_in__section}>
      <div className={styles.form__wraper}>
        <div className={styles.form__head}>
          <h1 className={styles.title}>Sign In to SwiftTask</h1>
          <p className={styles.text}>
            Welcome back! Please sign in to continue
          </p>
        </div>
        <div className={styles.decorative_text}>
          <p className={styles.text}>or</p>
        </div>
        <form className={styles.form}>
          <label className={styles.form__label} htmlFor="email">Email address</label>
          <input className={styles.form__input} id="email" type="text" />
          <button className={styles.form__btn}  type="button">Continue</button>
        </form>
        <div className={styles.sign_in__footer}>
          <p className={styles.text}> Don’t have an account? </p>
          <Link className={styles.link} to={ROUTES.SIGN_UP}>
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
