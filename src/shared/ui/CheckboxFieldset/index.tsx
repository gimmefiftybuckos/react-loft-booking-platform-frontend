import clsx from 'clsx';

import styles from './index.module.sass';

import { ICardRules, ICardTypes, TLoftRules, TLoftTypes } from '../../types';

import { Text } from '../Text';
import { Checkbox } from '../Checkbox';

export const CheckboxFieldset = ({
   legend,
   reduxState,
   data,
   dispatch,
}: {
   legend: string;
   reduxState: (TLoftTypes | TLoftRules)[];
   data: ICardRules[] | ICardTypes[];
   dispatch: (value: (TLoftTypes | TLoftRules)[]) => void;
}) => {
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value as TLoftTypes | TLoftRules;

      if (!reduxState.includes(inputValue)) {
         const newType = [...reduxState, inputValue];
         dispatch(newType);
      } else {
         const newType = reduxState.filter((item) => item !== inputValue);
         dispatch(newType);
      }
   };

   return (
      <fieldset className={clsx(styles.fieldset)}>
         <Text className={clsx(styles.title)} size='20' as='legend'>
            {legend}
         </Text>
         {data.map((item) => {
            return (
               <>
                  <div className={clsx(styles.container)}>
                     <Checkbox
                        id={item.type}
                        value={item.type}
                        checked={reduxState.includes(item.type)}
                        onChange={onChange}
                     />
                     <Text htmlFor={item.type} size='14' as='label'>
                        {item.title}
                     </Text>
                  </div>
               </>
            );
         })}
      </fieldset>
   );
};
