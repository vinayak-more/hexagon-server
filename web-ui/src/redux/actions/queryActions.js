import { axiosInstance as axios } from "./Axios";
import { QUERY_FAILURE, QUERY_REQUEST, QUERY_SUCCESS } from "./actionTypes";

export const queryRequest = (namedType) => ({
  type: QUERY_REQUEST + `_${namedType}`,
});

export const querySuccess = (namedType, payload) => ({
  type: QUERY_SUCCESS + `_${namedType}`,
  payload,
});

export const queryFailure = (namedType, payload) => ({
  type: QUERY_FAILURE + `_${namedType}`,
  payload,
});

export const query = (namedType, url, payload, dispatch) => {
  queryRequest(namedType);
  axios
    .post(url + `/query`, payload)
    .then((response) => dispatch(querySuccess(namedType, response.data)))
    .catch((error) => dispatch(queryFailure(namedType, error.message)));
};
