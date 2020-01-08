import { all, takeLatest, call, put } from 'redux-saga/effects';

import { GET_COMMENTS_REQUEST, ADD_COMMENT_REQUEST } from '../types';
import api from '~/services/api';
import {
  getCommentsFailure,
  getCommentsSuccess,
  addCommentFailure,
  addCommentSuccess,
} from './actions';

export function* getComments({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `service/${id}/comments`);

    yield put(getCommentsSuccess(response.data));
  } catch (error) {
    yield put(getCommentsFailure());
  }
}

export function* addComment({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { content, service_id } = payload;

    const response = yield call(api.post, 'comments', { content, service_id });

    yield put(addCommentSuccess(response.data));
  } catch (error) {
    yield put(addCommentFailure());
  }
}

export default all([
  takeLatest(GET_COMMENTS_REQUEST, getComments),
  takeLatest(ADD_COMMENT_REQUEST, addComment),
]);
