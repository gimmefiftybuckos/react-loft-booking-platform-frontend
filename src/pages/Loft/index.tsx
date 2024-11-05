import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.sass';

import { useDispatch, useSelector } from '../../store';
import useModalControl from '../../hooks/useModalControl';
import { getLoft, resetLoft } from '../../store/slices/cardCatalog';

import { Modal, ModalTypes } from '../../features/modal/Modal';
import { LoftImages } from '../../sections/LoftImages';
import { LoftDescription } from '../../sections/LoftDescription';
import { ModalContent } from '../../features/modal/ModalContent';
import { LoftComments } from '../../sections/LoftComments';
import { getComments } from '../../store/slices/comments';
import { Preloader } from '../../components/ui/Preloader';

export const Loft = () => {
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   const { controlIndex } = useModalControl();
   const { card } = useSelector((state) => state.cards);
   const { userComment } = useSelector((state) => state.comments);
   const { isAuth } = useSelector((state) => state.user);

   const loftId = pathname.split('/')[2];

   useEffect(() => {
      dispatch(getComments(loftId));

      if (!card) {
         dispatch(getLoft(loftId));
      }

      return () => {
         dispatch(resetLoft());
      };
   }, []);

   useEffect(() => {
      dispatch(getLoft(loftId));
   }, [isAuth, userComment]);

   if (!card) {
      return <Preloader className={clsx(styles.preloader)} />;
   }

   return (
      <>
         <Modal
            className={clsx(styles.modal, styles.modal__images)}
            isOpen={controlIndex >= 0 && controlIndex < 100}
         >
            <ModalContent name={'Images'} />
         </Modal>
         <Modal
            className={clsx(styles.modal, styles.modal__review)}
            isOpen={controlIndex === ModalTypes.REVIEW}
         >
            <ModalContent name='Comment' />
         </Modal>
         <LoftImages />
         <LoftDescription />
         <LoftComments />
      </>
   );
};
