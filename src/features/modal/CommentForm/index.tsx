import { useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.sass';

import { useDispatch, useSelector } from '../../../App/store';

import { Text } from '../../../shared/ui/Text';
import { Button, ButtonVariant } from '../../../shared/ui/Button';
import { RatingSelector } from '../../../shared/ui/RatingSelector';
import { setComment, setReview } from '../../../App/store/slices/comments';
import useModalControl from '../../../shared/hooks/useModalControl';

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
            loftId: card?.id!,
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
