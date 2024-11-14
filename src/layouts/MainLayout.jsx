import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h1>Main</h1>
      <Outlet />
    </>
  );
};

export default MainLayout;
