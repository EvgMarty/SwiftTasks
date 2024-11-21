import { MdExpandCircleDown, MdError } from 'react-icons/md';
import styles from './ValidationMessage.module.scss';

const ValidationMessage = ({ isValid, password }) => {
  const isEmpty = password.length === 0;

  if (isEmpty) return null;
  
  return (
    <div className={styles.validation}>
      {isValid ? (
        <>
          <MdExpandCircleDown className={styles.icon__info} />
          <span>Your password meets all the necessary requirements.</span>
        </>
      ) : (
        <>
          <MdError className={styles.icon__error} />
          <span className={styles.error}>
            Your password must contain 8 or more characters.
          </span>
        </>
      )}
    </div>
  );
};

export default ValidationMessage;
