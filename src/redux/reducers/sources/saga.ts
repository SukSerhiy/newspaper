import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from 'services/api';
import { ISourcesParams, ISourcesResponse } from 'services/api/types';
import { showError } from 'services/utils/error';
import { getSourcesRequest, getSourcesSuccess } from './reducer';

// =============================================================:
function* getEverythingWorker({ payload }: PayloadAction<ISourcesParams>) {
  try {
    const response: ISourcesResponse = yield call(
      api.getSources,
      payload
    );

    yield put(getSourcesSuccess(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      showError(error);
    }
  }
}

// =============================================================:
export function* sourcesSaga() {
  yield takeEvery(getSourcesRequest.type, getEverythingWorker);
}
