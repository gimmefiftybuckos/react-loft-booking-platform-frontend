import { cardLoftTypesList } from '../../services/constants';

import { HomeCover } from '../../sections/HomeCover';
import { HomeBanner } from '../../sections/HomeBanner';
import { HomeCardBlock } from '../../sections/HomeCardBlocks';
import { HomeCards } from '../../sections/HomeCards';
import { useDispatch } from '../../store';
import { resetFilters } from '../../store/slices/cardCatalog';
import { useEffect } from 'react';

export const Home = () => {
   const dispatch = useDispatch();

   const { title: mainSectionTitle, type: mainSectionParam } =
      cardLoftTypesList[0];

   const blockSectionCards = cardLoftTypesList.slice(1, 11);
   const cardsSection = cardLoftTypesList.slice(11, 100);

   useEffect(() => {
      dispatch(resetFilters());
   }, []);

   return (
      <>
         <HomeCover />
         <HomeBanner />
         <HomeCards title={mainSectionTitle} type={mainSectionParam} />
         <HomeCardBlock data={blockSectionCards} />
         {cardsSection.map((item, index) => {
            return (
               <HomeCards key={index} title={item.title} type={item.type} />
            );
         })}
      </>
   );
};
