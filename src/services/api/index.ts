import endpoints from '../endpoints';
import { http, geoHttp } from '@services/http';
import { IApi } from './types';

export const api: IApi = {
  getGeolocation: () =>
    geoHttp.get(endpoints.IP_INFO).then((response) => response.data),
  getTopHeadlines: (params) =>
    http
      .get(endpoints.TOP_HEADLINES, { params })
      .then((response) => response.data),
};
