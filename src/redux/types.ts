import { ITopHeadlinesStore } from './reducers/topHeadlines/types';
import { IEverythingStore } from './reducers/everything/types';
import { ISourcesStore } from './reducers/sources/types';
import { IGeoStore } from './reducers/geo/types';

// ==========================================:
export interface IStoreState {
	topHeadlines: ITopHeadlinesStore;
	everything: IEverythingStore;
	sources: ISourcesStore;
	geo: IGeoStore;
}
