import { combineReducers } from 'redux';
import topHeadlines from './reducers/topHeadlines/reducer';
import everything from './reducers/everything/reducer';
import geo from './reducers/geo/reducer';

const rootReducer = combineReducers({
  topHeadlines,
  everything,
  geo,
});

export default rootReducer;
