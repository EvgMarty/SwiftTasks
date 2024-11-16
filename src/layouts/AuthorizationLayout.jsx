import { Outlet } from 'react-router-dom';
import GoBack from '../components/GoBack/GoBack';
import Footer from '../components/Footer/Footer';

const AppLayout = () => {
  return (
    <>
      <GoBack />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
