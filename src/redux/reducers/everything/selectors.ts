import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@redux/types';
import { IEverythingStore } from '@redux/reducers/everything/types';

const getEverythingState = (state: IStoreState): IEverythingStore => state.everything;

export const getEverythingLoading = createSelector(
  [getEverythingState],
  (everything: IEverythingStore) => everything.loading
);

export const getEverythingData = createSelector(
  [getEverythingState],
  (everything: IEverythingStore) => everything.data
);

export const getSearch = createSelector(
  [getEverythingState],
  (everything: IEverythingStore) => everything.search
);
