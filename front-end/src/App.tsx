import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home';
import DiariesPage from './pages/Diaries';
import AuthPage from './pages/Auth';
import { ROUTES } from './routes';
import Layout from './components/Layout';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';
import { Provider } from 'react-redux';
import { store } from './store';
import AddPage from './pages/Add';
import ProfilePage from './pages/Profile';
import DiaryUpdatePage from './pages/DiaryUpdate';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.diaries, element: <DiariesPage /> },
      { path: ROUTES.diariesUpdate, element: <DiaryUpdatePage /> },
      { path: ROUTES.auth, element: <AuthPage /> },
      { path: ROUTES.add, element: <AddPage /> },
      { path: ROUTES.profile, element: <ProfilePage /> },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
