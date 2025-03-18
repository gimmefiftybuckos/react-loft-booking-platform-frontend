import { useDispatch, useSelector } from '../../App/store';
import {
   setImageIndex,
   setIndexModal,
   setModalClose,
} from '../../App/store/slices/modalControl.ts';
import useBodyScrollLock from './useBodyScrollLock.ts';
import { useEffect } from 'react';

const useModalControl = () => {
   const dispatch = useDispatch();
   const { imageIndex: curImageIndex, controlIndex } = useSelector(
      (state) => state.modalControl
   );

   useEffect(() => {
      return () => {
         closeModal();
      };
   }, []);

   const toggleModal = (key: number) => {
      dispatch(setIndexModal(key));
   };

   const setCurImageIndex = (key: number) => {
      dispatch(setImageIndex(key));
   };

   const closeModal = () => {
      dispatch(setModalClose());
      dispatch(setImageIndex(-1));
   };

   useBodyScrollLock(controlIndex !== -1 && controlIndex < 100);

   return {
      controlIndex,
      curImageIndex,
      setCurImageIndex,
      toggleModal,
      closeModal,
   };
};

export default useModalControl;
