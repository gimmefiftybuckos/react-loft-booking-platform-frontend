import { useDispatch, useSelector } from '../../../App/store';
import clsx from 'clsx';

import styles from './index.module.sass';

import { ICardTypes } from '../../../shared/types';
import { cardLoftTypesList } from '../../../shared/types/constants.ts';
import { setType } from '../../../App/store/slices/cardCatalog';

import { Button } from '../../../shared/ui/Button';
import useModalControl from '../../../shared/hooks/useModalControl';

export const SearchList = () => {
   const dispatch = useDispatch();
   const { closeModal } = useModalControl();

   const cardLoftTypesListSlice = cardLoftTypesList.slice(2, 100);
   const { type } = useSelector((state) => state.cards);

   const onClick = (item: ICardTypes) => {
      dispatch(setType(item.type));
      closeModal();
   };

   return (
      <ul className={clsx(styles.list)}>
         {cardLoftTypesListSlice.map((item, index) => {
            return (
               <li key={index} className={clsx(styles.list__item)}>
                  <Button
                     onClick={() => onClick(item)}
                     className={clsx(
                        styles.list__button,
                        item.type === type && styles.list__button_selected
                     )}
                  >
                     {item.title}
                  </Button>
               </li>
            );
         })}
      </ul>
   );
};
