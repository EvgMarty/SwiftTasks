import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <h1>Autorization</h1>
      <Outlet />
    </>
  );
};

export default AppLayout;
