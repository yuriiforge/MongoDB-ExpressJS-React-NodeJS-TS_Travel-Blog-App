import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home';
import DiariesPage from './pages/Diaries';
import AuthPage from './pages/Auth';
import { ROUTES } from './routes';
import Layout from './components/Layout';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';
import { Provider, useSelector } from 'react-redux';
import { store, type RootState } from './store';

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
  const isLoggedIn = useSelector((s: RootState) => s.auth.isLoggedIn);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
