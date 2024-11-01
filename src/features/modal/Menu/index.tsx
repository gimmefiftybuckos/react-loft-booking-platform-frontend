import clsx from 'clsx';

import styles from './index.module.sass';

import { Button, ButtonVariant } from '../../../components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from '../../../store';
import { logoutUser } from '../../../store/slices/userAuth';
import { useModalControl } from '../../../hooks/useModalControl';
import { RoutesCatalog } from '../../../types';

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
            pathTo={RoutesCatalog.NEW_LOFT}
            variant={ButtonVariant.ACCENT}
            onClick={onClickDefault}
            className={clsx(styles.button, styles.button_accent)}
         >
            <img className={clsx(styles.image)} src='/assets/plus.svg' alt='' />
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
