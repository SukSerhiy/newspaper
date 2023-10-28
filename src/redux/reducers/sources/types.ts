import { ISourcesResponse } from 'services/api/types';


export interface ISourcesStore {
  data: ISourcesResponse | null;
  loading: boolean;
}
