import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_NOTIFICATIONS_REQUEST,
  CONFIRM_NOTIFICATIONS_REQUEST,
} from '../types';
import api from '~/services/api';
import {
  getNotificationsFailure,
  getNotificationsSuccess,
  confirmNotificationsFailure,
  confirmNotificationsSuccess,
} from './actions';

export function* getNotifications() {
  try {
    const response = yield call(api.get, 'requestNotifications');

    yield put(getNotificationsSuccess(response.data));
  } catch (error) {
    yield put(getNotificationsFailure());
  }
}

export function* confirmNotifications({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { service_id } = payload;
    // eslint-disable-next-line camelcase
    const response = yield call(api.put, `services/${service_id}`);

    yield put(confirmNotificationsSuccess(response.data.id));
  } catch (error) {
    console.tron(error);
    yield put(confirmNotificationsFailure());
  }
}

export default all([
  takeLatest(GET_NOTIFICATIONS_REQUEST, getNotifications),
  takeLatest(CONFIRM_NOTIFICATIONS_REQUEST, confirmNotifications),
]);
