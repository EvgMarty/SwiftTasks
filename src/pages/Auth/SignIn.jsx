import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { ROUTES } from '../../routes/routes';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import styles from './Auth.module.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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

      localStorage.setItem('user', JSON.stringify(authUser));
      dispatch(setUser(authUser));
      navigate('/app');
    } catch (error) {
      console.error('Login error:', error.code, error.message);

      switch (error.code) {
        case 'auth/user-not-found':
          setErrorMessage('User not found. Please register first.');
          break;
        case 'auth/wrong-password':
          setErrorMessage('Incorrect password. Please try again.');
          break;
        case 'auth/invalid-email':
          setErrorMessage('Invalid email format.');
          break;
        case 'auth/user-disabled':
          setErrorMessage('Your account has been disabled.');
          break;
        case 'auth/too-many-requests':
          setErrorMessage('Too many login attempts. Please try again later.');
          break;
        default:
          setErrorMessage('An unknown error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const authUser = {
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      };

      localStorage.setItem('user', JSON.stringify(authUser));
      dispatch(setUser(authUser));
      navigate('/app');
    } catch (error) {
      console.error('Google Login Error:', error);
      setErrorMessage('Google login failed. Please try again.');
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
        <ButtonMain
          variant="black__white"
          onClick={handleGoogleLogin}
          isLoading={isLoading}
        >
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
          <ErrorMessage message={errorMessage} />
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
