import produce from 'immer';
import {
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  comments: [],
  youtuberUsername: '',
  loading: false,
};

export default function CommentReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_COMMENTS_REQUEST: {
        draft.loading = true;
        break;
      }

      case GET_COMMENTS_SUCCESS: {
        draft.comments = action.payload.comments;
        draft.youtuberUsername = action.payload.youtuberUsername;
        draft.loading = false;
        break;
      }

      case GET_COMMENTS_FAILURE: {
        draft.loading = false;
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        draft.comments.push(action.payload.comment);
        break;
      }
      default:
    }
  });
}
