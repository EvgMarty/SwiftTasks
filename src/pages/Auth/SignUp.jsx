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
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Validation
  const isEmpty = pass.length === 0;
  const isValid = pass.length >= 8;
  const [isTouched, setIsTouched] = useState(false);

  const handleRegister = async (email, password, userName) => {
    if (!email || !password) {
      console.error('Email and password are required.');
      return;
    }
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      const newUser = {
        email: user.email,
        id: user.uid,
        token: user.stsTokenManager.accessToken,
        name: userName,
      };

      dispatch(setUser(newUser));
      navigate(ROUTES.SIGN_IN);
    } catch (error) {
      console.error('Registration error:', error.code, error.message);

      if (error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters.');
      } else if (error.code === 'auth/email-already-in-use') {
        alert('This email is already registered.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
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
          <div className={styles.input__group}>
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
          </div>

          <div className={styles.input__group}>
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
          </div>

          <div className={styles.input__group}>
            <label className={styles.form__label} htmlFor="password">
              Password
            </label>
            <input
              className={`${styles.form__input} ${
                isTouched && !isEmpty
                  ? isValid
                    ? styles.valid
                    : styles.invalid
                  : ''
              }`}
              id="password"
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                if (!isTouched) setIsTouched(true);
              }}
            />

            {isTouched && (
              <ValidationMessage isValid={isValid} isEmpty={isEmpty} />
            )}
          </div>

          <ButtonMain variant="white" type="submit" disabled={!isValid}>
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
