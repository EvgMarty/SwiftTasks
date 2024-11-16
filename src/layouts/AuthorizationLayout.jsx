import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const AppLayout = () => {
  return (
    <>
      <h1>Autorization</h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
