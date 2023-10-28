/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ISourcesParams,
  ISourcesResponse,
} from '../../../services/api/types';
import { ISourcesStore } from './types';

const initialState: ISourcesStore = {
  data: null,
  loading: false,
};

const everything = createSlice({
  name: '@@sources',
  initialState,
  reducers: {
    getSourcesRequest: (
      state,
      _action: PayloadAction<ISourcesParams>
    ) => {
      state.loading = true;
    },
    getSourcesSuccess: (
      state,
      { payload }: PayloadAction<ISourcesResponse>
    ) => {
      state.loading = false;
      state.data = payload;
    },
  },
});

export default everything.reducer;
export const { getSourcesRequest, getSourcesSuccess } =
  everything.actions;
