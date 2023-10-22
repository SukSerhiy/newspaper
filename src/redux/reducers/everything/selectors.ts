import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@redux/types';
import { ITopHeadlinesStore } from '@redux/reducers/topHeadlines/types';

const getEverythingState = (state: IStoreState): ITopHeadlinesStore => state.everything;

export const getEverythingLoading = createSelector(
  [getEverythingState],
  (topHeadlines: ITopHeadlinesStore) => topHeadlines.loading
);

export const getEverythingData = createSelector(
  [getEverythingState],
  (topHeadlines: ITopHeadlinesStore) => topHeadlines.data
);
