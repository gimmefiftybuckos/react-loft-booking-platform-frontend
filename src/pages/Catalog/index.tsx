import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from '../../App/store';

import { CatalogFilterButtons } from '../../widgets/CatalogFilterButtons';
import { CatalogLofts } from '../../widgets/CatalogLofts';

export const Catalog = () => {
   const { type, date, price } = useSelector((state) => state.cards);

   const [searchParams, setSearchParams] = useSearchParams();

   const getInitParam = (param: string, searchParamKey: string) => {
      return (
         param || decodeURIComponent(searchParams.get(searchParamKey) || '')
      );
   };

   const [typeParam, setTypeParams] = useState(getInitParam(type, 'type'));
   const [dateParam, setDateParam] = useState(getInitParam(date, 'date'));
   const [priceParam, setPriceParam] = useState(getInitParam(price, 'price'));

   useEffect(() => {
      setTypeParams(getInitParam(type, 'type'));
      setDateParam(getInitParam(date, 'date'));
      setPriceParam(getInitParam(price, 'price'));
   }, [type, date, price]);

   useEffect(() => {
      // console.log(searchParams);

      console.log(type);
   }, [type, date, price]);

   return (
      <>
         <CatalogFilterButtons />
         <CatalogLofts
            params={{ typeParam, dateParam, priceParam }}
            setSearchParams={setSearchParams}
         />
      </>
   );
};
