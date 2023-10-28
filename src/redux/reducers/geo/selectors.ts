import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@redux/types';
import { IGeoStore } from '@redux/reducers/geo/types';

const getGeoState = (state: IStoreState): IGeoStore => state.geo;

export const getGeoLoading = createSelector(
  [getGeoState],
  (geo: IGeoStore) => geo.loading
);

export const getGeoData = createSelector(
  [getGeoState],
  (geo: IGeoStore) => geo.data
);
