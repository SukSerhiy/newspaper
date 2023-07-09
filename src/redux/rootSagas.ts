import { spawn } from 'redux-saga/effects';
import { topHeadlinesSaga } from './reducers/topHeadlines/saga';
import { geoSaga } from './reducers/geo/saga';

// ==========================================:
export default function* rootSagas() {
  yield spawn(topHeadlinesSaga);
  yield spawn(geoSaga);
}
