import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <div className={styles.errorMessage}>{message}</div>;
};

export default ErrorMessage;
