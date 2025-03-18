import { cardLoftTypesList } from '../../shared/types/constants.ts';

import { HomeCover } from '../../widgets/HomeCover';
import { HomeBanner } from '../../widgets/HomeBanner';
import { HomeCardBlock } from '../../widgets/HomeCardBlocks';
import { HomeCards } from '../../widgets/HomeCards';
import { useDispatch } from '../../App/store';
import { resetFilters } from '../../App/store/slices/cardCatalog';
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
