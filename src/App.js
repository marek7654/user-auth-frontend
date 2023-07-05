import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import { action as authAction } from './actions/auth-actions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage />, action: authAction },
      { path: 'signup', element: <SignupPage />, action: authAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
