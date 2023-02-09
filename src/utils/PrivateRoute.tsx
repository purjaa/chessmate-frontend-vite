import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  // TODO: Get authenticated state when authentication is implemented
  const isAuthenticated = false;
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

export default PrivateRoute;