import { Route, Routes } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.sass';

import { RoutesCatalog } from '../../types';
import { ProtectedRoute } from '../../features/auths/ProtectedRoute';

import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Registration } from '../../pages/Registration';
import { Catalog } from '../../pages/Catalog';
import { Loft } from '../../pages/Loft';
import { Favorites } from '../../pages/Favorites';
import { AddLoft } from '../../pages/AddLoft';
import { NotFound } from '../../pages/NotFound';

export const Main = () => {
   return (
      <main className={clsx(styles.main)}>
         <Routes>
            <Route path={RoutesCatalog.HOME} element={<Home />} />
            <Route path={RoutesCatalog.CATALOG} element={<Catalog />} />
            <Route path={RoutesCatalog.LOFT} element={<Loft />} />
            <Route
               path={RoutesCatalog.LOGIN}
               element={
                  <ProtectedRoute>
                     <Login />
                  </ProtectedRoute>
               }
            />
            <Route
               path={RoutesCatalog.REGISTRATION}
               element={
                  <ProtectedRoute>
                     <Registration />
                  </ProtectedRoute>
               }
            />
            <Route
               path={RoutesCatalog.FAVORITES}
               element={
                  <ProtectedRoute authRequired>
                     <Favorites />
                  </ProtectedRoute>
               }
            />
            <Route
               path={RoutesCatalog.ADD_LOFT}
               element={
                  <ProtectedRoute authRequired>
                     <AddLoft />
                  </ProtectedRoute>
               }
            />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </main>
   );
};
