import clsx from 'clsx';

import styles from './index.module.sass';

import { Text } from '../../../components/ui/Text';
import { Button, ButtonVariant } from '../../../components/Button';
import { useDispatch, useSelector } from '../../../store';
import { RatingSelector } from '../../../components/RatingSelector';
import {
   getComments,
   setComment,
   setReview,
} from '../../../store/slices/comments';
import { useModalControl } from '../../../hooks/useModalControl';
import { useState } from 'react';

export const CommentForm = () => {
   const dispatch = useDispatch();
   const { closeModal } = useModalControl();

   const { card } = useSelector((state) => state.cards);
   const { userRating, userReview } = useSelector((state) => state.comments);

   const [popup, setPopup] = useState(false);

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      if (userRating === -1) {
         return setPopup(true);
      }

      dispatch(
         setComment({
            loftId: card?.id as string,
            userRating: userRating,
            userReview: userReview,
         })
      );

      closeModal();
   };

   return (
      <form onSubmit={onSubmit} className={clsx(styles.content)}>
         <div className={clsx(styles.content__cover)}></div>
         <div className={clsx(styles.content__container)}>
            <Text className={clsx(styles.content__name)} weight={500}>
               {card?.title}
            </Text>
            <Text
               className={clsx(styles.content__address)}
               size='14'
               color='gray'
            >
               {card?.metroStation}
            </Text>
            <RatingSelector popupStatus={popup} setPopup={setPopup} />
         </div>
         <textarea
            placeholder='Расскажите о впечатлениях'
            className={clsx(styles.content__input)}
            onChange={(event) => dispatch(setReview(event.currentTarget.value))}
            autoFocus
            name='review'
            id='review'
         />
         <Button type='submit' variant={ButtonVariant.ACCENT}>
            Сохранить
         </Button>
      </form>
   );
};
