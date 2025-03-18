import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoftInit } from '../../../shared/types';

export interface INewLoftSlice extends ILoftInit {
   originalName: string;
   phone: number;
   email: string;
   minHours: number;
   images: string[];
}

const initialState: INewLoftSlice = {
   originalName: '',
   title: '',
   description: '',
   address: '',
   metroStation: '',
   walkingDistance: 0,
   price: 0,
   maxPersons: 0,
   seatingPlaces: 0,
   area: 0,
   type: [],
   rule: [],
   phone: 0,
   email: '',
   minHours: 0,
   images: [],
};

const newLoft = createSlice({
   name: 'addLoft',
   initialState,
   reducers: {
      updateLoftData: (
         state,
         action: PayloadAction<Partial<INewLoftSlice>>
      ) => {
         console.log(action.payload);

         return { ...state, ...action.payload };
      },
   },
});

export const { updateLoftData } = newLoft.actions;

export default newLoft.reducer;
