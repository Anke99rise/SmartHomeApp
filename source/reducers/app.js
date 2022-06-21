import {
  FETCH_ALL_DEVICES,
  FETCH_ALL_NOTIFICATIONS,
  UPDATE_NOTIFICATION,
} from "../constants/app";

const initialState = {
  devices: [],
  notifications: [],
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DEVICES:
      return {
        ...state,
        devices: action.data,
      };
    case FETCH_ALL_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.data,
      };
    case UPDATE_NOTIFICATION:
      let notifications = state.notifications;
      let { index, ...data } = action.data;
      notifications[index] = data;
      return {
        ...state,
        notifications,
      };
    default:
      return state;
  }
};
