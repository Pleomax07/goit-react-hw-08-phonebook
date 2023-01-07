import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppBar } from './AppBar/AppBar';
import RegisterView from '../view/RegisterView/RegisterView';
import LoginView from '../view/LoginViev/LoginView';
import { ContactsView } from '../view/ContactsView/ContactsView';
import authOperations from '../redux/Auth/authOperations';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import NotFound from '../components/NotFound/NotFound'

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterView />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginView />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
