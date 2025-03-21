import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './index.module.sass';

import { RoutesCatalog } from '../../../shared/types';
import { useDispatch } from '../../../App/store';

import useModalControl from '../../../shared/hooks/useModalControl';
import { logoutUser } from '../../../App/store/slices/userAuth';
import { Button, ButtonVariant } from '../../../shared/ui/Button';

const menuButtonsData = [
   {
      title: 'Мой профиль',
      route: RoutesCatalog.PROFILE,
      path: 'user',
   },
   {
      title: 'Мои заявки',
      route: RoutesCatalog.REQUESTS,
      path: 'list',
   },
   {
      title: 'Уведомления',
      route: RoutesCatalog.NOTIFICATIONS,
      path: 'notification',
   },
   {
      title: 'Мои площадки',
      route: RoutesCatalog.USER_LOFTS,
      path: 'category',
   },
   {
      title: 'Статистика',
      route: RoutesCatalog.USER_STAT,
      path: 'activity',
   },
];

export const Menu = () => {
   const dispatch = useDispatch();
   const { closeModal } = useModalControl();

   const onClickDefault = () => {
      closeModal();
   };

   return (
      <>
         <div className={clsx(styles.content)}>
            {menuButtonsData.map((item, index) => {
               return (
                  <Button
                     as={Link}
                     key={index}
                     pathTo={item.route}
                     onClick={onClickDefault}
                     className={clsx(styles.button)}
                  >
                     <img
                        className={clsx(styles.image)}
                        src={`/assets/${item.path}.svg`}
                        alt=''
                     />
                     {item.title}
                  </Button>
               );
            })}
         </div>
         <Button
            as={Link}
            pathTo={RoutesCatalog.ADD_LOFT}
            variant={ButtonVariant.ACCENT}
            onClick={onClickDefault}
            className={clsx(styles.button, styles.button_accent)}
         >
            <img className={clsx(styles.image)} src='/src/shared/assets/icons/plus.svg' alt='' />
            Добавить площадку
         </Button>
         <Button
            onClick={() => {
               dispatch(logoutUser());
               onClickDefault();
            }}
            className={clsx(styles.button, styles.button_background)}
         >
            Выйти
         </Button>
      </>
   );
};
