import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '@services/api';
import {
  ITopHeadlinesParams,
  ITopHeadlinesResponse,
} from '@services/api/types';
import { getTopHeadlinesRequest, getTopHeadlinesSuccess } from './reducer';

// =============================================================:
function* getTopHeadlinesWorker({
  payload,
}: PayloadAction<ITopHeadlinesParams>) {
  const { country } = payload;

  try {
    const response: ITopHeadlinesResponse = yield call(api.getTopHeadlines, {
      country,
    });

    yield put(getTopHeadlinesSuccess(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // responseErrors(error);
    }
  }
}

// =============================================================:
export function* topHeadlinesSaga() {
  yield takeEvery(getTopHeadlinesRequest.type, getTopHeadlinesWorker);
}
