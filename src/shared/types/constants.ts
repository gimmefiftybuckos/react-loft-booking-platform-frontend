import {
   CatalogFiltersType,
   ICardRules,
   ICardTypes,
   SelectionFiltersType,
} from './index.ts';

export const fontFamilyClasses = ['open-sans', 'inter', 'monrope'] as const;

export type FontFamiliesClasses = (typeof fontFamilyClasses)[number];

export const MAX_PRICE = 20000;

export const API_URL = import.meta.env.VITE_API_URL;

export const todayDate = new Date();

export const months = [
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

export const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

export const selectionFilters: SelectionFiltersType[] = [
   'Event',
   'Date',
   'Start Time',
   'End Time',
];

export const catalogFilters: CatalogFiltersType[] = [
   'Event',
   'Price',
   'Date',
   'Filters',
];

export const bannersContent = [
   {
      text: {
         accent: 'Без комиссии',
         main: ' — не переплачивайте за аренду',
      },
      iconPath: 'discount',
   },
   {
      text: {
         accent: 'Онлайн-календари',
         main: ' — выбирайте только среди свободных площадок',
      },
      iconPath: 'calendar',
   },
   {
      text: {
         accent: 'Прямые контакты площадок',
         main: ' — общение без посредников',
      },
      iconPath: 'note',
   },
];

export const cardLoftTypesList: ICardTypes[] = [
   {
      title: 'Мы рекомендуем',
      type: 'recommendations',
   },
   {
      title: 'Все площадки',
      type: '',
   },
   {
      title: 'Коворкинги',
      type: 'coworking',
   },
   {
      title: 'Банкетные залы для свадеб',
      type: 'wedding',
   },
   {
      title: 'Танцевальные залы',
      type: 'dance',
   },
   {
      title: 'Площадки для выпускных',
      type: 'graduation',
   },
   {
      title: 'Площадки для переговоров',
      type: 'meeting',
   },
   {
      title: 'Лофты для вечеринок',
      type: 'party',
   },
   {
      title: 'Бары для вечеринок',
      type: 'bars',
   },
   {
      title: 'Площадки в центре Москвы',
      type: 'central_moscow',
   },
   {
      title: 'Лофты на 15 гостей',
      type: 'lofts_15_guests',
   },
   {
      title: 'Площадки для корпоративов',
      type: 'corporate',
   },
   {
      title: 'Площадки для Дня рождения',
      type: 'birthday',
   },
   {
      title: 'Детские праздники',
      type: 'kids',
   },
];

export const cardRulesList: ICardRules[] = [
   {
      title: 'Можно принести еду',
      type: 'food',
   },
   {
      title: 'Можно взять алкоголь',
      type: 'alcohol-allowed',
   },
   {
      title: 'Кейтеринг разрешен',
      type: 'catering',
   },
   {
      title: 'Еда с собой',
      type: 'food-to-go',
   },
   {
      title: 'Нельзя шуметь после 23:00',
      type: 'quiet-time',
   },
   {
      title: 'Разрешен кальян',
      type: 'hookah',
   },
   {
      title: 'Алкогольные напитки запрещены',
      type: 'аlcohol-prohibited',
   },
];
