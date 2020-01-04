import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../types';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(user, token) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: SIGN_IN_FAILURE,
  };
}

export function signUpRequest(data) {
  return {
    type: SIGN_UP_REQUEST,
    payload: data,
  };
}

export function signUpSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
  };
}

export function signUpFailure() {
  return {
    type: SIGN_UP_FAILURE,
  };
}
