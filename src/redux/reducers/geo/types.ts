import { IGeolocation } from '@services/api/types';

export interface IGeoStore {
  data: IGeolocation | null;
  loading: boolean;
}
