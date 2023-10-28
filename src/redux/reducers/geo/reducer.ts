import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeolocation } from 'services/api/types';
import { IGeoStore } from './types';

const initialState: IGeoStore = {
  data: null,
  loading: false,
};

const geo = createSlice({
  name: '@@geo',
  initialState,
  reducers: {
    getGeolocationRequest: (state) => {
      state.loading = true;
    },
    getGeolocationSuccess: (
      state,
      { payload }: PayloadAction<IGeolocation>
    ) => {
      state.loading = false;
      state.data = payload;
    },
  },
});

export default geo.reducer;
export const { getGeolocationRequest, getGeolocationSuccess } = geo.actions;
