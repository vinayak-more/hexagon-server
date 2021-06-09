import { axiosInstance as axios } from "./Axios";
import { ADD_FAILURE, ADD_REQUEST, ADD_SUCCESS } from "./actionTypes";

export const addRequest = (namedType) => ({
  type: `${ADD_REQUEST}_${namedType}`,
});

export const addSuccess = (namedType, payload) => ({
  type: `${ADD_SUCCESS}_${namedType}`,
  payload,
});

export const addFailure = (namedType, payload) => ({
  type: `${ADD_FAILURE}_${namedType}`,
  payload,
});

export const add = (namedType, url, payload, dispatch) => {
  dispatch(addRequest(namedType));
  axios
    .post(url, payload)
    .then((response) => dispatch(addSuccess(namedType, response.data)))
    .catch((error) => dispatch(addFailure(namedType, error.message)));
};
