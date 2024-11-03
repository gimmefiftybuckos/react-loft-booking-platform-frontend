import clsx from 'clsx';

import styles from './index.module.sass';

import { Text } from '../../components/ui/Text';

export const NotFound = () => {
   return (
      <section className={clsx(styles.section)}>
         <div className={clsx(styles.text)}>
            <Text size='50' as='h1'>
               Страница не найдена
            </Text>
            <Text size='18' as='p'>
               Была изменена (или еще не создана)
            </Text>
         </div>
      </section>
   );
};
