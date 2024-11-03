import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from './store';
import { getFavoritesId } from './store/slices/favorites';
import { authUser } from './store/slices/userAuth';

import { Main } from './sections/Main';
import { Layout } from './sections/Layout';
import { RoutesCatalog } from './types';

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
