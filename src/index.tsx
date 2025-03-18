import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './shared/styles/index.sass';
import './shared/assets/fonts/font.sass';

import store from './App/store/index.ts';

import App from './App/App.tsx';
import { Catalog } from './pages/Catalog/index.tsx';
import { Loft } from './pages/Loft/index.tsx';
import { Home } from './pages/Home/index.tsx';
import { Favorites } from './pages/Favorites/index.tsx';
import { Registration } from './pages/Registration/index.tsx';
import { Login } from './pages/Login';
import { AddLoft } from './pages/AddLoft/index.tsx';

const router = createBrowserRouter([
   {
      path: '/*',
      element: <App />,
      children: [
         {
            element: <Home />,
         },
         {
            path: 'registration',
            element: <Registration />,
         },
         { path: 'login', element: <Login /> },
         {
            path: 'catalog',
            element: <Catalog />,
         },
         {
            path: 'catalog/:id',
            element: <Loft />,
         },
         {
            path: 'favorites',
            element: <Favorites />,
         },
         {
            path: 'add-loft',
            element: <AddLoft />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
);
