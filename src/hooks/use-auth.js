import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector((state) => state.user);

  const { email, name, token, id } = user || {};
  return {
    isAuth: !!id,
    email,
    name,
    token,
    id,
  };
};
