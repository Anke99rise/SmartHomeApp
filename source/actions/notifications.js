import axios from "axios";
import { FETCH_ALL_NOTIFICATIONS, UPDATE_NOTIFICATION } from "../constants/app";

const fetchNotifications = (data) => ({
  type: FETCH_ALL_NOTIFICATIONS,
  data,
});

const updateNofications = (data) => ({
  type: UPDATE_NOTIFICATION,
  data,
});

export const fetchAllNotifications = () => (dispatch) => {
  axios
    .get(
      "https://remhome-3b40d-default-rtdb.europe-west1.firebasedatabase.app/notifications.json"
    )
    .then((response) => {
      console.log(response)
      dispatch(fetchNotifications(response.data));
    });
};

export const updateNofication = (index, data) => (dispatch) => {
  axios
    .patch(
      `https://remhome-3b40d-default-rtdb.europe-west1.firebasedatabase.app/notifications/${index}.json`,
      data
    )
    .then((response) => {
      dispatch(updateNofications({ ...response.data, index }));
    });
};
