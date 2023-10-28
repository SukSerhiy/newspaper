/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ITopHeadlinesParams,
  ITopHeadlinesResponse,
} from '../../../services/api/types';
import { ITopHeadlinesStore } from './types';

const initialState: ITopHeadlinesStore = {
  data: null,
  loading: false,
};

const topHeadlines = createSlice({
  name: '@@topHeadlines',
  initialState,
  reducers: {
    getTopHeadlinesRequest: (
      state,
      _action: PayloadAction<ITopHeadlinesParams>
    ) => {
      state.loading = true;
    },
    getTopHeadlinesSuccess: (
      state,
      { payload }: PayloadAction<ITopHeadlinesResponse>
    ) => {
      state.loading = false;
      state.data = payload;
    },
  },
});

export default topHeadlines.reducer;
export const { getTopHeadlinesRequest, getTopHeadlinesSuccess } =
  topHeadlines.actions;
