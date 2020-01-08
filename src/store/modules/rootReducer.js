import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import comment from './comments/reducer';
import notification from './notifications/reducer';

const reducers = combineReducers({ auth, user, comment, notification });

export default reducers;
