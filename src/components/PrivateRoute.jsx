import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import authSelectors from '../redux/Auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />;
};
export { PrivateRoute };
