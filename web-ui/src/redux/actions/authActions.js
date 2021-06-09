import { basicAxiosIntance as axios } from "./Axios";
import { LOGIN, LOGOUT, LOGIN_FAILED } from "./actionTypes";

const url = "/authenticate";

export const login = () => ({
  type: LOGIN,
});
export const logout = () => ({
  type: LOGOUT,
});
export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});
export const authenticate = (payload) => (dispatch) => {
  console.log(process.env.REACT_APP_REST_URL);
  axios
    .post(url, payload)
    .then((response) => {
      dispatch(login());
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      dispatch(loginFailed("Invalid Username/Password"));
      console.log(error.message);
    });
};
