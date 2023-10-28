import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@redux/types';
import { ITopHeadlinesStore } from '@redux/reducers/topHeadlines/types';

const getTopHeadlinesState = (state: IStoreState): ITopHeadlinesStore => state.topHeadlines;

export const getTopHeadlinesLoading = createSelector(
  [getTopHeadlinesState],
  (topHeadlines: ITopHeadlinesStore) => topHeadlines.loading
);

export const getTopHeadlinesData = createSelector(
  [getTopHeadlinesState],
  (topHeadlines: ITopHeadlinesStore) => topHeadlines.data
);
