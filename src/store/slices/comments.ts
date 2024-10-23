import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICommentsGet, ICommentsPost } from '../../types';
import { getCommentsApi, setCommentApi } from '../../services/api';

type TCommentsSlice = {
   comments: ICommentsGet[];
   userComment: Partial<ICommentsGet>;
   loftId: string;
   userRating: number;
   userReview: string;
   error: string | unknown;
};

const initialState: TCommentsSlice = {
   comments: [],
   userComment: {},
   loftId: '',
   userRating: -1,
   userReview: '',
   error: '',
};

export const setComment = createAsyncThunk(
   'setComment',
   async (data: ICommentsPost) => setCommentApi(data)
);

export const getComments = createAsyncThunk(
   'getComments',
   async (loftId: string) => getCommentsApi(loftId)
);

const comments = createSlice({
   name: 'comments',
   initialState,
   reducers: {
      setRating: (state, action) => {
         state.userRating = action.payload;
      },
      setReview: (state, action) => {
         state.userReview = action.payload;
      },
      resetCommentState: (state) => {
         state.userRating = -1;
         state.userReview = '';
      },
      setUserComment: (state, action) => {
         state.userComment = action.payload;
      },
      resetComments: (state) => {
         state.comments = [];
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(setComment.fulfilled, (state, action) => {
            if (action.payload) {
               state.userComment = action.payload;
               state.comments.unshift(action.payload);
            }
         })
         .addCase(setComment.rejected, (state, action) => {
            state.error = action.payload;
         })
         .addCase(getComments.fulfilled, (state, action) => {
            state.comments = action.payload;
         });
   },
});

export const {
   setRating,
   setReview,
   resetCommentState,
   setUserComment,
   resetComments,
} = comments.actions;

export default comments.reducer;

// ddf4f3d9d62949fd17416e4359b7a253e588e7b790e40eb690d32cb77df06d98dd362b9a1451a82eb18e236b03595158
