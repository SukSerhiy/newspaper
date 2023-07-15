import { ITopHeadlinesResponse } from 'services/api/types';


export interface ITopHeadlinesStore {
  data: ITopHeadlinesResponse | null;
  loading: boolean;
}
