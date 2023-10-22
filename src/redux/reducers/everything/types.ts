import { IEverythingResponse } from 'services/api/types';


export interface IEverythingStore {
  data: IEverythingResponse | null;
  loading: boolean;
}
