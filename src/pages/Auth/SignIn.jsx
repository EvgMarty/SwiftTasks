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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormValid = email.trim() !== '' && pass.trim() !== '';

  const handleLogin = async (email, password) => {
    if (!isFormValid) return;

    setIsLoading(true);
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const authUser = {
        email: user.email,
        id: user.uid,
        token: user.stsTokenManager.accessToken,
      };
      dispatch(setUser(authUser));
      navigate('/app');
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
          <div className={styles.input__group}>
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
          </div>

          <div className={styles.input__group}>
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
          </div>
          <ButtonMain
            variant="white"
            type="button"
            onClick={() => handleLogin(email, pass)}
            disabled={!isFormValid || isLoading}
            isLoading={isLoading}
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
