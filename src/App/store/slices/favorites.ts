import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   getFavoritesIdApi,
   getFavoritesLoftsApi,
   setFavoriteApi,
   TFavoritesData,
} from '../../../shared/api/api.ts';
import { logoutUser } from './userAuth.ts';
import { ILoft } from '../../../shared/types';

export const setFavorite = createAsyncThunk(
   'favorites/setFavorite',
   async (loftId: string) => setFavoriteApi(loftId)
);

export const getFavoritesId = createAsyncThunk(
   'favorites/getFavoritesId',
   getFavoritesIdApi
);
export const getFavoritesLofts = createAsyncThunk(
   'favorites/getFavoritesLofts',
   getFavoritesLoftsApi
);

type TFavoritesSlice = {
   favoritesId: TFavoritesData[];
   favoritesLofts: ILoft[];
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: TFavoritesSlice = {
   favoritesId: [],
   favoritesLofts: [],
   status: 'idle',
};

const favorites = createSlice({
   name: 'favorites',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(setFavorite.fulfilled, (state, action) => {
            state.favoritesId = action.payload;
         })
         .addCase(getFavoritesId.fulfilled, (state, action) => {
            state.favoritesId = action.payload;
         })
         .addCase(getFavoritesLofts.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(getFavoritesLofts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.favoritesLofts = action.payload;
         })
         .addCase(getFavoritesLofts.rejected, (state) => {
            state.status = 'failed';
            state.favoritesLofts = [];
         })
         .addCase(logoutUser.fulfilled, (state) => {
            state.favoritesId = [];
            state.favoritesLofts = [];
         });
   },
});

export const {} = favorites.actions;

export default favorites.reducer;
