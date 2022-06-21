import axios from "axios";
import { FETCH_ALL_DEVICES } from "../constants/app";

const fetchDevices = (data) => ({
  type: FETCH_ALL_DEVICES,
  data,
});

const addOneDevice = (data) => ({
  data
});

export const fetchAllDevices = () => (dispatch) => {
  
  axios
    .get(
      "localhost:3001/api/device"
    )
    .then((response) => {
      console.log(response)
      dispatch(fetchDevices(response.data));
    });
};

export const addDevice = () => (dispatch) => {
     axios.post('localhost:3001/api/device', device)
    .then(response => element.innerHTML = response.data.id);
}