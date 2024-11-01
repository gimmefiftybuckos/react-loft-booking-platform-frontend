import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from '../../store';
import { getFavoritesLofts } from '../../store/slices/favorites';

import { CardsList } from '../../components/CardsList';

export const FavoritesLofts = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { favoritesLofts, status } = useSelector((state) => state.favorites);
   const { isAuth } = useSelector((state) => state.user);
   const [hasMore, setHasMore] = useState(true);

   useEffect(() => {
      if (!isAuth) {
         navigate('/login');
      }

      if (isAuth) {
         dispatch(getFavoritesLofts());
      }
   }, []);

   useEffect(() => {
      if (status !== 'loading') {
         setHasMore(false);
      }

      if (status === 'loading') {
         setHasMore(true);
      }
   }, [status]);

   return (
      <section>
         <CardsList
            title={'Избранное'}
            hasMore={hasMore}
            loftsState={favoritesLofts}
         />
      </section>
   );
};
