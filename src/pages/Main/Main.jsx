import BgHeader from '../../components/BgHeader/BgHeader';
import Nav from '../../components/Nav/Nav';
import SwiftPresentation from '../../components/SwiftPresentation/SwiftPresentation';
import Footer from '../../components/Footer/Footer';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <>
      <header className={styles.header}>
        <Nav />
        <BgHeader />
      </header>
      <div className={styles.lending}>
        <SwiftPresentation />
        <Footer />
      </div>
    </>
  );
};

export default Main;
