import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import AuthorizationLayout from '../layouts/AuthorizationLayout';
import AppLayout from '../layouts/AppLayout';
import styles from './App.module.scss';
import NotFound from '../pages/NotFound/NotFound';
import Main from '../pages/Main/Main';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import SwiftApp from '../pages/SwiftApp/SwiftApp';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <main className={styles.app}>
        <Routes>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route element={<AuthorizationLayout />}>
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          </Route>
          <Route path={ROUTES.APP} element={<AppLayout />}>
            <Route index element={<SwiftApp />} />
          </Route>
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
