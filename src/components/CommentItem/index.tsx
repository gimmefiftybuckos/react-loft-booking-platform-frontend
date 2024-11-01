import clsx from 'clsx';

import styles from './index.module.sass';

import { Text } from '../ui/Text';
import { ICommentsGet } from '../../types';
import { months } from '../../services/constants';
import { capitalLetter } from '../../services/utils';

export const CommentItem = ({ data }: { data: Partial<ICommentsGet> }) => {
   const date = new Date(Date.parse(data.date || '0'));
   const dateStr = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

   return (
      <li className={clsx(styles.item)}>
         <div className={clsx(styles.item__about)}>
            <div className={clsx(styles.item__container)}>
               <Text className={clsx(styles.item__name)} as='p' weight={600}>
                  {capitalLetter(data.login)}
               </Text>
               <div aria-hidden className={clsx(styles.star)}></div>
               <Text as='p' size='14' weight={600}>
                  {data.userRating}
               </Text>
            </div>
            <Text as='p' color='gray' size='14' weight={400}>
               {dateStr}
            </Text>
         </div>
         <Text className={clsx(styles.item__review)} as='p'>
            {data.userReview}
         </Text>
      </li>
   );
};
