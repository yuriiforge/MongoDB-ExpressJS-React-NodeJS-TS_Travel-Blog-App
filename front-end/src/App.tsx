import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home';
import DiariesPage from './pages/Diaries';
import AuthPage from './pages/Auth';
import { ROUTES } from './routes';
import Layout from './components/Layout';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';

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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
