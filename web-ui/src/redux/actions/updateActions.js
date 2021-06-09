import { axiosInstance as axios } from "./Axios";
import { UPDATE_FAILURE, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionTypes";

export const updateRequest = (namedType) => ({
  type: `${UPDATE_REQUEST}_${namedType}`,
});

export const updateSuccess = (namedType, payload) => ({
  type: `${UPDATE_SUCCESS}_${namedType}`,
  payload,
});

export const updateFailure = (namedType, payload) => ({
  type: `${UPDATE_FAILURE}_${namedType}`,
  payload,
});

export const update = (namedType, url, payload, dispatch) => {
  dispatch(updateRequest(namedType));
  axios
    .put(url + `/${payload.id}`, payload)
    .then((response) => dispatch(updateSuccess(namedType, response.data)))
    .catch((error) => dispatch(updateFailure(namedType, error.message)));
};
