import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import authSelectors from '../redux/Auth/authSelectors';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

const RestrictedRoute = ({ children }) => {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
return isLoggedIn ? <Navigate to="/contacts" /> : children ;
} 
export { RestrictedRoute }