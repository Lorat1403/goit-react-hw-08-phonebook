import { lazy, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { authOperations, authSelectors } from 'redux/auth';
// COMPONENTS
import { GlobalStyle } from './GlobalStyle';
import { Section } from './App.styled';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import Toast from 'components/Toast/Toast';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Error = lazy(() => import('pages/Error/Error'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);

  useEffect(() => {
    dispatch(authOperations.fetchUser());
  }, [dispatch]);

  return (
    <Section>
      <GlobalStyle />
      <Toast />
      {isFetchingUser ? (
        <Loader size={30} />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout user={isLoggedIn} />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute user={isLoggedIn}>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  user={isLoggedIn}
                >
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  user={isLoggedIn}
                >
                  <Register />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      )}
    </Section>
  );
};
