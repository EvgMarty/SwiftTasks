import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const loadUserFromStorage = () => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : undefined;
};

const preloadedState = {
  user: loadUserFromStorage(),
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});
