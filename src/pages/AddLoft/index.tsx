import clsx from 'clsx';

import styles from './index.module.sass';

import { AddLoftForm } from '../../shared/ui/AddLoftForm';
import { Text } from '../../shared/ui/Text';

export const AddLoft = () => {
   return (
      <>
         <Text className={clsx(styles.title)} size='50' as='h1'>
            Добавление площадки
         </Text>
         <AddLoftForm />
      </>
   );
};
