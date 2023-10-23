import { spawn } from 'redux-saga/effects';
import { topHeadlinesSaga } from './reducers/topHeadlines/saga';
import { everythingSaga } from './reducers/everything/saga';
import { sourcesSaga } from './reducers/sources/saga';
import { geoSaga } from './reducers/geo/saga';

// ==========================================:
export default function* rootSagas() {
  yield spawn(topHeadlinesSaga);
  yield spawn(everythingSaga);
  yield spawn(sourcesSaga);
  yield spawn(geoSaga);
}
