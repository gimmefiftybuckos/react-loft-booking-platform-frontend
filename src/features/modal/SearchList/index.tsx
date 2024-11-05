import { useDispatch, useSelector } from '../../../store';
import clsx from 'clsx';

import styles from './index.module.sass';

import { ICardTypes } from '../../../types';
import { cardLoftTypesList } from '../../../services/constants';
import { setType } from '../../../store/slices/cardCatalog';

import { Button } from '../../../components/Button';
import useModalControl from '../../../hooks/useModalControl';

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
