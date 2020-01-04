import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from '../types';
import api from '~/services/api';
import {
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
} from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', { email, password });
    const { user, token } = response.data;

    if (user.youtuber) {
      toast.error(
        'Verificamos que você é um youtuber, baixe o aplicativo mobile para ter acesso'
      );
      yield put(signInFailure());
      return;
    }

    yield put(signInSuccess(user, token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    history.push('/dashboard');
  } catch (error) {
    toast.error('Seus dados parecem está incorretos');
    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password, username, youtuber = false } = payload;
    yield call(api.post, 'users', {
      email,
      password,
      username,
      youtuber,
    });

    yield put(signUpSuccess());

    toast.success('Conta criada com sucesso, faça login agora mesmo');

    history.push('/');
  } catch (error) {
    toast.error('Algumas coisa está errada com seus dados');
    yield put(signUpFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
]);
