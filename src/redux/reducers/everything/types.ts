import { IEverythingResponse } from 'services/api/types';


export interface IEverythingStore {
  search: string;
  data: IEverythingResponse | null;
  loading: boolean;
}
