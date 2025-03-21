import clsx from 'clsx';

import styles from './index.module.sass';

import { ILoft } from '../../types';

import { Text } from '../Text';
import { Price } from './Price';
import { Rating } from './Rating';
import { Room, RoomInfoVariant } from './Room';
import { Distance } from './Distance';
import { ImagesGallery } from './ImagesGallery';

type CardProps = {
   cardData: ILoft;
   wide?: boolean;
};

export const Card: React.FC<CardProps> = ({ cardData, wide }) => {
   const size = wide ? '_wide' : '';

   const template = wide ? (
      <>
         <Room
            variant={size && RoomInfoVariant.CATALOG}
            area={cardData.area}
            persons={cardData.maxPersons}
            seats={cardData.seatingPlaces}
         />
         <div className={clsx(styles.details)}>
            <Price price={cardData.price} />
            <Rating
               averageRating={cardData.averageRating}
               reviewsCount={cardData.reviewsCount}
            />
         </div>
      </>
   ) : (
      <>
         <Rating
            averageRating={cardData.averageRating}
            reviewsCount={cardData.reviewsCount}
         />
         <Price outline price={cardData.price} />
         <Room
            area={cardData.area}
            persons={cardData.maxPersons}
            seats={cardData.seatingPlaces}
         />
      </>
   );

   const onClick = () => {
      window.open(`/catalog/${cardData.id}`, '_blank');
   };

   return (
      <article
         onClick={onClick}
         className={clsx(styles.card, styles[`card${size}`])}
      >
         <ImagesGallery cardData={cardData} wide={size} />
         <div
            className={clsx(
               styles.card__content,
               styles[`card__content${size}`]
            )}
         >
            <Text
               className={clsx(styles.title, wide && styles.title_wide)}
               weight={600}
               as={'h3'}
            >
               {cardData.title}
            </Text>
            <Distance
               metro={cardData.metroStation}
               time={cardData.walkingDistance}
            />
            {template}
         </div>
      </article>
   );
};
