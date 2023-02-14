import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../app/utils/appUtils';
import { selectCurrentAuthToken } from '../app/utils/authUtils';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const token = useAppSelector(selectCurrentAuthToken);
  const isAuthenticated = !!token;
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

export default PrivateRoute;