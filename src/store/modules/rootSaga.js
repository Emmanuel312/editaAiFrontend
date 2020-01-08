import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import comment from './comments/sagas';
import notification from './notifications/sagas';

export default function* rootSaga() {
  yield all([auth, comment, notification]);
}
