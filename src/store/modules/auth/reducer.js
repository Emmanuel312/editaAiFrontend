import produce from 'immer';
import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  loading: false,
  token: null,
  signed: false,
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case SIGN_IN_FAILURE: {
        draft.loading = false;
        break;
      }

      case SIGN_UP_REQUEST: {
        draft.loading = true;
        break;
      }

      case SIGN_UP_SUCCESS: {
        draft.loading = false;
        break;
      }

      case SIGN_UP_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
