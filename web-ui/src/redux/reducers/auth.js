import { LOGIN, LOGOUT, LOGIN_FAILED } from "../actions/actionTypes";

const initialState = {
  authenticated: false,
  loginFailed: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        loginFailed: null,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        loginFailed: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        authenticated: false,
        loginFailed: action.payload,
      };

    default:
      return state;
  }
}
