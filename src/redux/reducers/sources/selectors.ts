import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@redux/types';
import { ISourcesStore } from '@redux/reducers/sources/types';

const getSourcesState = (state: IStoreState): ISourcesStore => state.sources;

export const getSourcesLoading = createSelector(
  [getSourcesState],
  (sources: ISourcesStore) => sources.loading
);

export const getSourcesData = createSelector(
  [getSourcesState],
  (sources: ISourcesStore) => sources.data
);
