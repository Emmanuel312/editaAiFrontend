import produce from 'immer';
import { SIGN_IN_SUCCESS } from '../types';

const INITIAL_STATE = {
  profile: null,
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }

      default:
    }
  });
}
