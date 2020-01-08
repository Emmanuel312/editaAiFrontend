import {
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
} from '../types';

export function getCommentsRequest(id) {
  return {
    type: GET_COMMENTS_REQUEST,
    payload: { id },
  };
}

export function getCommentsSuccess(data) {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: {
      comments: data.service.comments,
      youtuberUsername: data.youtuberUsername,
    },
  };
}

export function getCommentsFailure() {
  return {
    type: GET_COMMENTS_FAILURE,
  };
}

// eslint-disable-next-line camelcase
export function addCommentRequest(content, service_id) {
  return {
    type: ADD_COMMENT_REQUEST,
    payload: { content, service_id },
  };
}

export function addCommentSuccess(comment) {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload: {
      comment,
    },
  };
}

export function addCommentFailure() {
  return {
    type: ADD_COMMENT_FAILURE,
  };
}
