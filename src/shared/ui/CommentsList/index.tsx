import clsx from 'clsx';
import { useEffect, useState } from 'react';

import styles from './index.module.sass';

import { useSelector } from '../../../App/store';
import { CommentItem } from '../CommentItem';

export const CommentList = ({ isShow }: { isShow: boolean }) => {
   const { comments } = useSelector((state) => state.comments);
   const [commentsState, setComments] = useState(comments.slice(0, 3));

   useEffect(() => {
      if (isShow) {
         setComments(comments);
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
