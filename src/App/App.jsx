import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import MainLayout from '../layouts/MainLayout';
import AppLayout from '../layouts/AppLayout';
import styles from './App.module.scss';
import NotFound from '../pages/NotFound/NotFound';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <main className={styles.app}>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainLayout />}></Route>
          <Route path={ROUTES.APP} element={<AppLayout />}></Route>
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
