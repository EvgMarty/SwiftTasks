import backgroundVideo from '../../assets/lights-background.mp4';
import styles from './BgHeader.module.scss';

const BgHeader = () => {
  return (
    <div className={styles.bgHeader}>
      <div className={styles.blur}></div>
      <video
        className={styles.video}
        src={backgroundVideo}
        autoPlay
        playsInline
        muted
        loop
        width="100%"
        height="100%"
      ></video>
    </div>
  );
};

export default BgHeader;
