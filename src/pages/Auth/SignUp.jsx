import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { ROUTES } from '../../routes/routes';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import styles from './Auth.module.scss';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password, userName) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const newUser = {
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          name: userName,
        };
        dispatch(setUser(newUser));
        navigate('/sign-in');
      })
      .catch((error) => {
        console.error('Registration error:', error.message);
      });
  };

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
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(email, pass, userName);
          }}
        >
          <label className={styles.form__label} htmlFor="userName">
            Username
          </label>
          <input
            className={styles.form__input}
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className={styles.form__label} htmlFor="email">
            Email address
          </label>
          <input
            className={styles.form__input}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.form__label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.form__input}
            id="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <ButtonMain variant="white" type="submit">
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
