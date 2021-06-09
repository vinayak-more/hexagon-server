import { axiosInstance as axios } from "./Axios";
import { DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS } from "./actionTypes";

export const deleteRequest = (namedType) => ({
  type: `${DELETE_REQUEST}_${namedType}`,
});

export const deleteSuccess = (namedType, payload) => ({
  type: `${DELETE_SUCCESS}_${namedType}`,
  payload,
});

export const deleteFailure = (namedType, payload) => ({
  type: `${DELETE_FAILURE}_${namedType}`,
  payload,
});

export const deleteFn = (namedType, url, payload, dispatch) => {
  dispatch(deleteRequest(namedType));
  axios
    .delete(url + `/${payload.id}`, payload)
    .then((response) => dispatch(deleteSuccess(namedType, response.data)))
    .catch((error) => dispatch(deleteFailure(namedType, error.message)));
};
