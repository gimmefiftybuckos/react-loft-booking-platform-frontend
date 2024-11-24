import { configureStore } from '@reduxjs/toolkit';

import {
   TypedUseSelectorHook,
   useDispatch as dispatchHook,
   useSelector as selectorHook,
} from 'react-redux';

import cardReducer from './slices/cardCatalog.ts';
import modalControlReducer from './slices/modalControl.ts';
import userAuthReducer from './slices/userAuth.ts';
import favoritesReducer from './slices/favorites.ts';
import commentsReducer from './slices/comments.ts';
import newLoftReducer from './slices/newLoft.ts';

const store = configureStore({
   reducer: {
      cards: cardReducer,
      comments: commentsReducer,
      modalControl: modalControlReducer,
      user: userAuthReducer,
      favorites: favoritesReducer,
      newLoft: newLoftReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
