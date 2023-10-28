import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from 'services/api';
import { IEverythingParams, IEverythingResponse } from 'services/api/types';
import { showError } from 'services/utils/error';
import { getEverythingRequest, getEverythingSuccess } from './reducer';

// =============================================================:
function* getEverythingWorker({ payload }: PayloadAction<IEverythingParams>) {
  try {
    const response: IEverythingResponse = yield call(
      api.getEverything,
      payload
    );

    yield put(getEverythingSuccess(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      showError(error);
    }
  }
}

// =============================================================:
export function* everythingSaga() {
  yield takeEvery(getEverythingRequest.type, getEverythingWorker);
}
