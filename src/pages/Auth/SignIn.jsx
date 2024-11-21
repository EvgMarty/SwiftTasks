import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { ROUTES } from '../../routes/routes';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import styles from './Auth.module.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const authUser = {
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        };
        dispatch(setUser(authUser));
        navigate('/app');
      })
      .catch((error) => {
        console.error('Registration error:', error.message);
      });
  };

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
          <input
            className={styles.form__input}
            id="email"
            type="emain"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles.form__label} htmlFor="pass">
            Password
          </label>
          <input
            className={styles.form__input}
            id="pass"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <ButtonMain
            variant="white"
            type="button"
            onClick={() => handleLogin(email, pass)}
          >
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
