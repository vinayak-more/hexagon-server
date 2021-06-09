import axios from "axios";

const baseUrl = `${process.env.REACT_APP_REST_URL}`;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
axiosInstance.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const basicAxiosIntance = axios.create({
  baseURL: baseUrl,
});
