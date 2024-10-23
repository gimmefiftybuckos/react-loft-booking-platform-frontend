import clsx from 'clsx';
import { useEffect, useState } from 'react';

import styles from './index.module.sass';

import { useSelector } from '../../store';
import { CommentItem } from '../CommentItem';

export const CommentList = ({ isShow }: { isShow: boolean }) => {
   const { comments, userComment } = useSelector((state) => state.comments);

   const filteredComments = comments.filter(
      (item) => item.userId !== userComment.userId
   );

   const [commentsState, setComments] = useState(filteredComments.slice(0, 3));

   useEffect(() => {
      if (isShow) {
         setComments(filteredComments);
      }
   }, [isShow]);

   return (
      <ul className={clsx(styles.list)}>
         {commentsState?.map((item) => (
            <CommentItem key={item.userId} data={item} />
         ))}
      </ul>
   );
};
