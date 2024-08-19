import clsx from 'clsx';

import styles from './MainSection.module.sass';

import { selectionParams } from '../../utils';

import { Button } from '../_reusable/Button';

export const MainSection = () => {
   return (
      <section className={clsx(styles['cover-container'])}>
         <h1 className={clsx(styles.title)}>
            Более 500 площадок для вашего мероприятия
         </h1>
         <div className={clsx(styles.container)}>
            {selectionParams.map((item, index) => {
               let stylesList = clsx(styles.button);
               if (index > 1) {
                  stylesList = clsx(styles.button, styles.button_smaller);
               }

               return (
                  <button key={index} className={stylesList}>
                     {item.name}
                     <img
                        src='/assets/down.svg'
                        alt='Dropdown Icon'
                        width='16'
                        height='16'
                     />
                  </button>
               );
            })}

            <Button textColor='white' accented pathTo={''}>
               Найти
            </Button>
         </div>
      </section>
   );
};
