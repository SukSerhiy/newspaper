import { combineReducers } from 'redux';
import topHeadlines from './reducers/topHeadlines/reducer';
import geo from './reducers/geo/reducer';

const rootReducer = combineReducers({
  topHeadlines,
  geo,
});

export default rootReducer;
