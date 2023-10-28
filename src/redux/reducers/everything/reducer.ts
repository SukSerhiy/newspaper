/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IEverythingParams,
  IEverythingResponse,
} from '../../../services/api/types';
import { IEverythingStore } from './types';

const initialState: IEverythingStore = {
  search: '',
  data: null,
  loading: false,
};

const everything = createSlice({
  name: '@@everything',
  initialState,
  reducers: {
    getEverythingRequest: (
      state,
      _action: PayloadAction<IEverythingParams>
    ) => {
      state.loading = true;
    },
    getEverythingSuccess: (
      state,
      { payload }: PayloadAction<IEverythingResponse>
    ) => {
      state.loading = false;
      state.data = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    clearSearch: (state) => {
      state.search = '';
      state.data = null;
    },
  },
});

export default everything.reducer;
export const { getEverythingRequest, getEverythingSuccess, setSearch, clearSearch } =
  everything.actions;
