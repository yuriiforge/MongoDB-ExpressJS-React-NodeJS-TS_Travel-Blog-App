import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home';
import DiariesPage from './pages/Diaries';
import AuthPage from './pages/Auth';
import { ROUTES } from './routes';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.diaries, element: <DiariesPage /> },
      { path: ROUTES.auth, element: <AuthPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
