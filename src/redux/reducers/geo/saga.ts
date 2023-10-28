import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from 'services/api';
import { IGeolocation } from 'services/api/types';
import { showError } from 'services/utils/error';
import { getGeolocationRequest, getGeolocationSuccess } from './reducer';

// =============================================================:
function* getGolocationWorker() {
  try {
    const response: IGeolocation = yield call(api.getGeolocation);

    yield put(getGeolocationSuccess(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (axios.isAxiosError(error)) {
        showError(error);
      }
    }
  }
}

// =============================================================:
export function* geoSaga() {
  yield takeEvery(getGeolocationRequest.type, getGolocationWorker);
}
