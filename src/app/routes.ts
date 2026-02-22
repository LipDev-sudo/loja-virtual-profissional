import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { AdminPanel } from './pages/AdminPanel';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/product/:id',
    Component: ProductPage,
  },
  {
    path: '/admin',
    Component: AdminPanel,
  },
]);
