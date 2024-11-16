import { FiArrowLeft } from 'react-icons/fi';
import { ROUTES } from '../../routes/routes';
import ButtonLink from '../../UI/ButtonLink/ButtonLink';
import styles from './GoBack.module.scss';

const GoBack = () => {
  return (
    <div className={styles.wrapper__back}>
      <ButtonLink link={ROUTES.MAIN}>
        <FiArrowLeft className={styles.icon} />
        Back
      </ButtonLink>
    </div>
  );
};

export default GoBack;
