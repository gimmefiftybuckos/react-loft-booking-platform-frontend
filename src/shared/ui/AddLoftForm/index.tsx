import clsx from 'clsx';
import { useSelector } from '../../../App/store';

import styles from './index.module.sass';

import { getCommonFormComponents } from './utils.tsx';

import { Text } from '../Text';
import { Button, ButtonVariant } from '../Button';

export const AddLoftForm = () => {
   const { commonFields, addressFields, facilitiesFields } =
      getCommonFormComponents();
   const newLoft = useSelector((state) => state.newLoft);

   return (
      <form className={clsx(styles.form)}>
         <fieldset className={clsx(styles.fieldset)}>
            <Text
               className={clsx(styles.title)}
               weight={600}
               size='24'
               as='legend'
            >
               Общее о площадке
            </Text>
            {commonFields.map((item, index) => item.component(index))}
         </fieldset>
         <fieldset className={clsx(styles.fieldset)}>
            <Text
               className={clsx(styles.title)}
               weight={600}
               size='24'
               as='legend'
            >
               Местоположение
            </Text>
            {addressFields.map((item, index) => item.component(index))}
         </fieldset>
         <fieldset className={clsx(styles.fieldset)}>
            <Text
               className={clsx(styles.title)}
               weight={600}
               size='24'
               as='legend'
            >
               Удобства
            </Text>
            {facilitiesFields.map((item, index) => item.component(index))}
         </fieldset>
         <Button
            variant={ButtonVariant.ACCENT}
            type='button'
            onClick={() => console.log(newLoft)}
         >
            Log
         </Button>
      </form>
   );
};
