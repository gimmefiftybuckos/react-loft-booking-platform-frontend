import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoftInit } from '../../types';

export interface INewLoftSlice extends ILoftInit {
   originalName: string;
   phone: number;
   email: string;
   minHours: number;
   images: string[];
   workTime: string;
   weekendWorkTime: string;
}

const initialState: INewLoftSlice = {
   originalName: '',
   title: '',
   description: '',
   address: '',
   metroStation: '',
   walkingDistanceMinutes: 0,
   pricePerHour: 0,
   maxPersons: 0,
   seatingPlaces: 0,
   area: 0,
   type: [],
   rule: [],
   phone: 0,
   email: '',
   minHours: 0,
   images: [],
   workTime: '',
   weekendWorkTime: '',
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
         console.log(state);

         return { ...state, ...action.payload };
      },
   },
});

export const { updateLoftData } = newLoft.actions;

export default newLoft.reducer;
