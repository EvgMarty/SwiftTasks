import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <h1>App</h1>
      <Outlet />
    </>
  );
};

export default AppLayout;
