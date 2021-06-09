import { axiosInstance as axios } from "./Axios";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes";

export const fetchRequest = (namedType) => ({
  type: `${FETCH_REQUEST}_${namedType}`,
});

export const fetchSuccess = (namedType, payload) => ({
  type: `${FETCH_SUCCESS}_${namedType}`,
  payload,
});

export const fetchFailure = (namedType, payload) => ({
  type: `${FETCH_FAILURE}_${namedType}`,
  payload,
});

export const fetch = (namedType, url, dispatch) => {
  dispatch(fetchRequest(namedType));
  axios
    .get(url)
    .then((response) => dispatch(fetchSuccess(namedType, response.data)))
    .catch((error) => dispatch(fetchFailure(namedType, error.message)));
};
