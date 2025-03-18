import clsx from 'clsx';

import styles from './index.module.sass';

import { Text } from '../Text';
import { ICommentsGet } from '../../types';
import { months } from '../../types/constants.ts';
import { capitalLetter } from '../../utils/utils.ts';

export const CommentItem = ({ data }: { data: Partial<ICommentsGet> }) => {
   const date = new Date(Date.parse(data.date!));
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
