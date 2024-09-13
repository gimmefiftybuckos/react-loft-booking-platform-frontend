import {
   CatalogFiltersType,
   ICardSection,
   SelectionFiltersType,
} from '../types';
import { resetFilters } from '../store/cardCatalogSlice';
import { useSelector, AppDispatch } from '../store';
import { cardSectionList } from './constants';

export const createNavPoints = (dispatch: AppDispatch) => [
   {
      name: 'Все лофты',
      path: '/catalog',
      onClick: () => dispatch(resetFilters()),
   },
   { name: 'Идеи', path: '/ideas' },
   { name: 'Избранное', path: '/favorite' },
];

export const formatDate = (fullDate: string): string | null => {
   const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
   ];

   const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

   const [day, month, year] = fullDate.split(':').map(Number);

   if (!day || !month || !year) {
      return null;
   }

   const jsDate = new Date(year, month - 1, day);
   const dayOfWeek = daysOfWeek[jsDate.getDay()];

   const formattedDate = `${day} ${months[month - 1]}, ${dayOfWeek}`;

   return formattedDate;
};

export const getValueByAnother = (
   typeParam: string,
   cardSectionList: ICardSection[]
) => {
   return cardSectionList.find((item) => item.type === typeParam)?.title || '';
};

export const todayDate = new Date();

export const getTitleByFilter = (
   filter: SelectionFiltersType | CatalogFiltersType
) => {
   const { type, date, price } = useSelector((state) => state.cards);

   const newDate = formatDate(date);
   const newPrice = price.split(':');

   switch (filter) {
      case 'Event':
         return type ? getValueByAnother(type, cardSectionList) : null;
      case 'Date':
         return newDate;
      case 'Price':
         if (price) {
            return `${newPrice[0]} - ${newPrice[1]} руб.`;
         }
         return null;
      default:
         return null;
   }
};
