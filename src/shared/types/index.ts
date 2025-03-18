export interface ILoftInit {
   title: string;
   description: string;
   address: string;
   metroStation: string;
   walkingDistance: number;
   price: number;
   maxPersons: number;
   seatingPlaces: number;
   area: number;
   type: TLoftTypes[];
   rule: TLoftRules[];
}

export interface ILoft extends ILoftInit {
   id: string;
   reviewsCount: number;
   averageRating: string;
   imageUrl: string[];
   date?: Date;
}

export interface ICommentsInit {
   userId: string;
   login: string;
   userReview: string;
   userRating: number;
   date: string;
}

export type ICommentsGet = Partial<ICommentsInit>;

export interface ICommentsPost {
   loftId: string;
   userReview: string;
   userRating: number;
}

export interface ICardTypes {
   title: string;
   type: TLoftTypes;
}

export interface ICardRules {
   title: string;
   type: TLoftRules;
}

export type TLoftTypes =
   | ''
   | 'recommendations'
   | 'coworking'
   | 'wedding'
   | 'dance'
   | 'graduation'
   | 'meeting'
   | 'party'
   | 'bars'
   | 'central_moscow'
   | 'lofts_15_guests'
   | 'corporate'
   | 'birthday'
   | 'kids';

export type TLoftRules =
   | 'food'
   | 'alcohol-allowed'
   | 'catering'
   | 'food-to-go'
   | 'quiet-time'
   | 'hookah'
   | 'аlcohol-prohibited';

export type SelectionFiltersType = 'Event' | 'Date' | 'Start Time' | 'End Time';

export type CatalogFiltersType = 'Event' | 'Price' | 'Date' | 'Filters';

export type TCatalogParams = {
   type?: string;
   page?: number;
   date?: string;
   price?: string;
};

export type TUser = {
   email: string;
   login: string;
};

export enum RoutesCatalog {
   HOME = '/',
   REGISTRATION = '/registration',
   LOGIN = '/login',
   CATALOG = '/catalog',
   IDEAS = '/ideas',
   FAVORITES = '/favorites',
   LOFT = '/catalog/:id',
   PROFILE = '/profile',
   REQUESTS = '/requests',
   NOTIFICATIONS = '/notifications',
   USER_LOFTS = '/user/lofts',
   USER_STAT = '/user/statistic',
   ADD_LOFT = '/add-loft',
}
