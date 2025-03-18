import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from './store';
import { getFavoritesId } from './store/slices/favorites.ts';
import { authUser } from './store/slices/userAuth.ts';

import { Main } from '../widgets/Main';
import { Layout } from '../widgets/Layout';
import { RoutesCatalog } from '../shared/types';

function App() {
   const dispatch = useDispatch();
   const location = useLocation();

   const { isAuth, status } = useSelector((state) => state.user);
   const [isReady, setIsReady] = useState(false);
   const [hideFooter, setHideFooter] = useState(false);

   const footerHiddenRoutes = [RoutesCatalog.LOGIN, RoutesCatalog.REGISTRATION];

   useEffect(() => {
      if (isAuth) {
         dispatch(getFavoritesId());
      }
   }, [isAuth]);

   useEffect(() => {
      if (!isAuth) {
         dispatch(authUser());
      }
   }, []);

   useEffect(() => {
      if (status !== 'loading') {
         const timer = setTimeout(() => {
            setIsReady(true);
         }, 150);

         return () => clearTimeout(timer);
      }
   }, []);

   useEffect(() => {
      setHideFooter(
         footerHiddenRoutes.includes(location.pathname as RoutesCatalog)
      );
   }, [location]);

   return (
      isReady && (
         <>
            <Layout hideFooter={hideFooter}>
               <Main />
            </Layout>
         </>
      )
   );
}

export default App;
