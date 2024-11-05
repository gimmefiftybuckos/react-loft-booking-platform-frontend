import clsx from 'clsx';
import { useDispatch, useSelector } from '../../store';
import { useEffect, useState } from 'react';

import styles from './index.module.sass';

import { Text } from '../../components/ui/Text';
import { Button, ButtonVariant } from '../../components/Button';
import { CommentList } from '../../components/CommentsList';
import { Stars } from '../../components/Stars';
import useModalControl from '../../hooks/useModalControl';
import { ModalTypes } from '../../features/modal/Modal';
import {
   resetComments,
   resetUserComment,
   setCommentState,
   setUserComment,
} from '../../store/slices/comments';
import { CommentUser } from '../../components/CommentUser';

export const LoftComments = () => {
   const { toggleModal } = useModalControl();
   const dispatch = useDispatch();

   const { card } = useSelector((state) => state.cards);
   const { userData } = useSelector((state) => state.user);
   const { userComment, comments } = useSelector((state) => state.comments);
   const [isShow, setShow] = useState(false);

   const averageRating = card?.averageRating
      ? parseFloat(card.averageRating)
      : 0;

   useEffect(() => {
      const userComment = comments.find(
         (item) => item.login === userData.login
      );

      if (userComment) {
         dispatch(setUserComment(userComment));
      }

      const otherComments = comments.filter(
         (item) => item.login !== userData.login
      );

      dispatch(setCommentState(otherComments));

      if (otherComments.length <= 3) {
         setShow(true);
      }

      return () => {
         dispatch(resetComments());
         dispatch(resetUserComment());
         setShow(false);
      };
   }, []);

   const showMore = () => {
      setShow(true);
   };

   return (
      <section className={clsx(styles.container)}>
         <Text as='h2' size='24' weight={500}>
            Отзывы
         </Text>
         <div
            className={clsx(
               styles.rating,
               userComment.login && styles.rating_user
            )}
         >
            <div className={clsx(styles.rating__container)}>
               <Text as='p' size='32' weight={600}>
                  {averageRating.toFixed(1)}
               </Text>
               <Stars size averageRating={card?.averageRating} />
               <Text color='gray' weight={400}>
                  {card?.reviewsCount} отзывов
               </Text>
            </div>

            {!userComment.login && (
               <Button
                  variant={ButtonVariant.ACCENT}
                  onClick={() => toggleModal(ModalTypes.REVIEW)}
               >
                  Оставить отзыв
               </Button>
            )}
         </div>
         {userComment.login && <CommentUser data={userComment} />}

         <CommentList isShow={isShow} />
         {!isShow && (
            <Button
               onClick={showMore}
               className={clsx(styles.button)}
               variant={ButtonVariant.OUTLINED}
            >
               Показать все отзывы
            </Button>
         )}
      </section>
   );
};
