import clsx from 'clsx';

import styles from './index.module.sass';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../../App/store';
import { setRating } from '../../../App/store/slices/comments.ts';
import { Text } from '../Text';

enum StarsColor {
   FILL = '#FF9431',
   EMPTY = '#D9D9DE',
}

export const RatingSelector = ({
   popupStatus: isOpen,
   setPopup,
}: {
   popupStatus: boolean;
   setPopup: (value: boolean) => void;
}) => {
   const { userRating } = useSelector((state) => state.comments);

   const dispatch = useDispatch();

   const [hoverIndex, setHoverIndex] = useState(-1);
   const [indexState, setIndexState] = useState(-1);

   useEffect(() => {
      if (hoverIndex !== -1) {
         setIndexState(hoverIndex);
      } else {
         setIndexState(userRating - 1);
      }
   }, [userRating, hoverIndex]);

   useEffect(() => {
      if (isOpen) {
         setPopup(!isOpen);
      }

      return () => {
         setPopup(false);
      };
   }, [userRating]);

   return (
      <div className={clsx(styles.list)}>
         <div
            className={clsx(
               styles.notification,
               isOpen && styles.notification_open
            )}
         >
            <Text size='14' color='white'>
               Пожалуйста, оставьте оценку
            </Text>
         </div>
         {new Array(5).fill(0).map((_, index) => {
            return (
               <div
                  key={index}
                  className={clsx(styles.star)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                  onClick={() => dispatch(setRating(index + 1))}
               >
                  <svg
                     width='28'
                     height='28'
                     viewBox='0 0 28 28'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <g transform='scale(2)'>
                        <path
                           d='M7.83093 0.688077L9.58493 4.38808L13.1769 4.76908C13.3587 4.78672 13.5312 4.85814 13.6722 4.97423C13.8133 5.09032 13.9165 5.24581 13.9688 5.42085C14.021 5.59588 14.0199 5.78253 13.9656 5.95694C13.9114 6.13136 13.8063 6.28563 13.6639 6.40008L10.7999 8.75508L11.6859 12.7141C11.7255 12.89 11.7125 13.0738 11.6484 13.2424C11.5843 13.411 11.472 13.557 11.3255 13.6622C11.179 13.7674 11.0048 13.8272 10.8246 13.8341C10.6443 13.8411 10.466 13.7948 10.3119 13.7011L6.99993 11.6861L3.68493 13.7001C3.53073 13.7936 3.35245 13.8397 3.17225 13.8328C2.99204 13.8258 2.81786 13.766 2.67136 13.6608C2.52486 13.5557 2.41249 13.4098 2.34823 13.2413C2.28397 13.0728 2.27065 12.8891 2.30993 12.7131L3.19993 8.75508L0.335929 6.40008C0.19455 6.28532 0.0904478 6.13115 0.036833 5.95713C-0.0167817 5.78312 -0.0174921 5.59709 0.0347919 5.42267C0.0870759 5.24825 0.189997 5.09329 0.330496 4.97746C0.470995 4.86162 0.642737 4.79014 0.823929 4.77208L4.41493 4.39108L6.16893 0.688077C6.24359 0.530903 6.3613 0.398127 6.50839 0.305158C6.65548 0.21219 6.82592 0.162842 6.99993 0.162842C7.17394 0.162842 7.34438 0.21219 7.49147 0.305158C7.63856 0.398127 7.75626 0.530903 7.83093 0.688077Z'
                           fill={
                              index <= indexState
                                 ? StarsColor.FILL
                                 : StarsColor.EMPTY
                           }
                        />
                     </g>
                  </svg>
               </div>
            );
         })}
      </div>
   );
};
