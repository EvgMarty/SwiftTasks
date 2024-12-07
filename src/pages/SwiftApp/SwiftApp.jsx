import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth.js';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice.js';

const SwiftApp = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user');
    dispatch(removeUser());
    navigate('/');
  };

  return isAuth ? (
    <div>
      <h1>Welcome to App</h1>
      <button onClick={handleSignOut}>Log Out from {email}</button>
    </div>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default SwiftApp;
