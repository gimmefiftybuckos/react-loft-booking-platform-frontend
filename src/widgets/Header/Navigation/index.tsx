import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../App/store';

import styles from './index.module.sass';

import { RoutesCatalog } from '../../../shared/types';
import { createNavPoints } from '../../../shared/utils/utils.ts';
import useModalControl from '../../../shared/hooks/useModalControl';

import { Button, ButtonVariant } from '../../../shared/ui/Button';
import { HomeButton } from '../HomeButton';
import { Modal } from '../../../features/modal/Modal';
import { ModalContent } from '../../../features/modal/ModalContent';
import { ModalTypes } from '../../../features/modal/Modal';
import { Arrow } from '../../../shared/ui/Arrow';

export const Navigation = () => {
   const dispatch = useDispatch();
   const { isAuth, userData } = useSelector((state) => state.user);
   const navPoints = createNavPoints(dispatch);
   const { toggleModal, controlIndex } = useModalControl();

   return (
      <nav className={clsx(styles.navigation)}>
         <HomeButton />
         <div className={clsx(styles.navigation__container)}>
            <div className={clsx(styles.points)}>
               {navPoints.map((item, index) => (
                  <Button
                     as={Link}
                     pathTo={item.path}
                     key={index}
                     onClick={item.onClick}
                  >
                     {item.name}
                  </Button>
               ))}
            </div>
            <div className={clsx(styles.container)}>
               {isAuth ? (
                  <>
                     <Button onClick={() => toggleModal(ModalTypes.MENU)}>
                        <img src='.' alt='' />
                        {userData.login}
                        <Arrow className={clsx(styles.arrow)} />
                     </Button>
                  </>
               ) : (
                  <Button
                     as={Link}
                     pathTo={RoutesCatalog.LOGIN}
                     variant={ButtonVariant.ACCENT}
                  >
                     Войти
                  </Button>
               )}
               <Modal
                  className={clsx(styles.modal)}
                  isOpen={controlIndex === ModalTypes.MENU}
               >
                  <ModalContent name={'Menu'} />
               </Modal>
            </div>
         </div>
      </nav>
   );
};
