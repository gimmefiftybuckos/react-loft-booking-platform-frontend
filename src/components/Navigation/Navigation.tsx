import clsx from 'clsx';

import styles from './Navigation.module.sass';

import { navPoints } from '../../utils';
import { Button } from '../Button';
import { HomeButton } from '../HomeButton';

export const Navigation = () => {
   return (
      <nav className={clsx(styles.navigation)}>
         <HomeButton />
         <div className={clsx(styles.navigation__container)}>
            <div className={clsx(styles.points)}>
               {navPoints.map((item) => (
                  <Button pathTo={item.path}>{item.name}</Button>
               ))}
            </div>
            <div>
               <Button textColor='white' pathTo='/login' accented>
                  Войти
               </Button>
            </div>
         </div>
      </nav>
   );
};