import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import DashboardPage, { loader as dashboardLoader } from './pages/Dashboard';
import { action as authAction } from './actions/auth-actions';
import { action as logoutAction } from './actions/logout-action';
import { loadToken } from './actions/util';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: loadToken,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage />, action: authAction },
      { path: 'signup', element: <SignupPage />, action: authAction },
      {
        path: '/dashboard',
        element: <DashboardPage />,
        loader: dashboardLoader,
      },
      { path: 'logout', action: logoutAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
