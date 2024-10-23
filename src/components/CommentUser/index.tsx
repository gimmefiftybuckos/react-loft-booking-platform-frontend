import clsx from 'clsx';

import styles from './index.module.sass';

import { Text } from '../ui/Text';
import { ICommentsGet } from '../../types';
import { months } from '../../services/constants';
import { Stars } from '../Stars';
import { capitalLetter } from '../../services/utils';

export const CommentUser = ({ data }: { data: Partial<ICommentsGet> }) => {
   const date = new Date(Date.parse(data.date || '0'));
   const dateStr = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

   return (
      <div className={clsx(styles.item)}>
         <div className={clsx(styles.item__container)}>
            <Text
               className={clsx(styles.item__name)}
               size='24'
               as='p'
               weight={600}
            >
               {capitalLetter(data.login)}
            </Text>
            <Stars averageRating={data.userRating} />
            <Text
               className={clsx(styles.item__date)}
               as='p'
               color='gray'
               size='14'
               weight={400}
            >
               {dateStr}
            </Text>
         </div>
         <div className={clsx(styles.text)}>
            <Text className={clsx(styles.text__review)} as='p'>
               {data.userReview}
            </Text>
         </div>
      </div>
   );
};
