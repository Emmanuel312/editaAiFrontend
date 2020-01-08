import {
  GET_NOTIFICATIONS_REQUEST,
  GET_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATIONS_SUCCESS,
  CONFIRM_NOTIFICATIONS_FAILURE,
  CONFIRM_NOTIFICATIONS_REQUEST,
  CONFIRM_NOTIFICATIONS_SUCCESS,
} from '../types';

export function getNotificationsRequest() {
  return {
    type: GET_NOTIFICATIONS_REQUEST,
  };
}

export function getNotificationsSuccess(notifications) {
  return {
    type: GET_NOTIFICATIONS_SUCCESS,
    payload: { notifications },
  };
}

export function getNotificationsFailure() {
  return {
    type: GET_NOTIFICATIONS_FAILURE,
  };
}

// eslint-disable-next-line camelcase
export function confirmNotificationsRequest(service_id) {
  return {
    type: CONFIRM_NOTIFICATIONS_REQUEST,
    payload: { service_id },
  };
}

export function confirmNotificationsSuccess(id) {
  return {
    type: CONFIRM_NOTIFICATIONS_SUCCESS,
    payload: { id },
  };
}

export function confirmNotificationsFailure() {
  return {
    type: CONFIRM_NOTIFICATIONS_FAILURE,
  };
}
