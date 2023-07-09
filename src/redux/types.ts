import { ITopHeadlinesStore } from './reducers/topHeadlines/types';
import { IGeoStore } from './reducers/geo/types';

// ==========================================:
export interface IStoreState {
	topHeadlines: ITopHeadlinesStore;
	geo: IGeoStore;
}
