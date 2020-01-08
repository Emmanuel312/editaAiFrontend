import produce from 'immer';
import {
  GET_NOTIFICATIONS_REQUEST,
  GET_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATIONS_SUCCESS,
  CONFIRM_NOTIFICATIONS_FAILURE,
  CONFIRM_NOTIFICATIONS_REQUEST,
  CONFIRM_NOTIFICATIONS_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  loading: false,
  notifications: [],
};

export default function NotificationsReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_NOTIFICATIONS_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_NOTIFICATIONS_SUCCESS: {
        draft.notifications = action.payload.notifications;
        draft.loading = false;
        break;
      }
      case GET_NOTIFICATIONS_FAILURE: {
        draft.loading = false;
        break;
      }

      case CONFIRM_NOTIFICATIONS_REQUEST: {
        draft.loading = true;
        break;
      }
      case CONFIRM_NOTIFICATIONS_SUCCESS: {
        const index = draft.notifications
          .map(notification => notification.service_id)
          .indexOf(action.payload.id);

        if (index !== -1) {
          draft.notifications.splice(index, 1);
        }
        draft.loading = false;
        break;
      }
      case CONFIRM_NOTIFICATIONS_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
