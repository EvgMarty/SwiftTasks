import { MdExpandCircleDown, MdError } from 'react-icons/md';
import styles from './ValidationMessage.module.scss';

const ValidationMessage = ({ isValid, isEmpty }) => {
  return (
    <div className={styles.validation}>
      {isEmpty ? (
        // defolt
        <span className={styles.default}>
          Your password must contain 8 or more characters.
        </span>
      ) : isValid ? (
        // success massage
        <>
          <MdExpandCircleDown className={styles.icon__info} />
          <span>Your password meets all the necessary requirements.</span>
        </>
      ) : (
        //  invalid massage
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
