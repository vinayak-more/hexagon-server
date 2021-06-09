import {
  ADD_FAILURE,
  ADD_REQUEST,
  ADD_SUCCESS,
  CLEAR_REQUEST,
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  QUERY_FAILURE,
  QUERY_REQUEST,
  QUERY_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  items: [],
};

export default function reducer(namedType) {
  return function crudReducer(state = initialState, { type, payload }) {
    switch (type) {
      case `${FETCH_REQUEST}_${namedType}`:
      case `${QUERY_REQUEST}_${namedType}`:
        return {
          loading: true,
          items: [],
        };
      case `${FETCH_SUCCESS}_${namedType}`:
      case `${QUERY_SUCCESS}_${namedType}`:
        return {
          loading: false,
          items: [...payload],
        };
      case `${FETCH_FAILURE}_${namedType}`:
      case `${QUERY_FAILURE}_${namedType}`:
      case `${CLEAR_REQUEST}_${namedType}`:
        return {
          loading: false,
          items: [],
        };

      case `${ADD_REQUEST}_${namedType}`:
      case `${UPDATE_REQUEST}_${namedType}`:
      case `${DELETE_REQUEST}_${namedType}`:
        return {
          loading: true,
          items: [...state.items],
        };
      case `${ADD_SUCCESS}_${namedType}`:
        return {
          loading: false,
          items: [payload, ...state.items],
        };
      case `${ADD_FAILURE}_${namedType}`:
      case `${UPDATE_FAILURE}_${namedType}`:
      case `${DELETE_FAILURE}_${namedType}`:
        return {
          loading: false,
          items: [...state.items],
        };
      case `${UPDATE_SUCCESS}_${namedType}`:
        return {
          loading: false,
          items: [
            payload,
            ...state.items.filter((item) => item.id !== payload.id),
          ],
        };
      case `${DELETE_SUCCESS}_${namedType}`:
        return {
          loading: false,
          items: [...state.items.filter((item) => item.id !== payload.id)],
        };

      default:
        return { ...state };
    }
  };
}
