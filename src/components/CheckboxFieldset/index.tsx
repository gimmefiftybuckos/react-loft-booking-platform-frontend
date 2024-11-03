import clsx from 'clsx';
import { useDispatch, useSelector } from '../../store';

import styles from './index.module.sass';

import { TParamsTypes } from '../../types';
import { cardSectionList } from '../../services/constants';
import { updateLoftData } from '../../store/slices/newLoft';

import { Text } from '../ui/Text';
import { Checkbox } from '../Checkbox';

export const CheckboxFieldset = () => {
   const dispatch = useDispatch();
   const { type } = useSelector((state) => state.newLoft);

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value as TParamsTypes;

      if (!type.includes(inputValue)) {
         const newType = [...type, inputValue];
         dispatch(updateLoftData({ type: newType }));
      } else {
         const newType = type.filter((item) => item !== inputValue);
         dispatch(updateLoftData({ type: newType }));
      }
   };

   return (
      <fieldset className={clsx(styles.fieldset)}>
         <Text className={clsx(styles.title)} size='20' as='legend'>
            Тип площадки
         </Text>
         {cardSectionList.map((item) => {
            return (
               <>
                  <div className={clsx(styles.container)}>
                     <Checkbox
                        id={item.type}
                        value={item.type}
                        checked={type.includes(item.type)}
                        onChange={onChange}
                     />
                     <Text htmlFor={item.type} as='label'>
                        {item.title}
                     </Text>
                  </div>
               </>
            );
         })}
      </fieldset>
   );
};
