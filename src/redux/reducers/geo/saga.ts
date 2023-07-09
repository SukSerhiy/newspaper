import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '@services/api';
import { IGeolocation } from '@services/api/types';
import { getGeolocationRequest, getGeolocationSuccess } from './reducer';

// =============================================================:
function* getGolocationWorker() {
  try {
    const response: IGeolocation = yield call(api.getGeolocation);

    yield put(getGeolocationSuccess(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // responseErrors(error);
    }
  }
}

// =============================================================:
export function* geoSaga() {
  yield takeEvery(getGeolocationRequest.type, getGolocationWorker);
}
