import { DRIVER } from "./actionTypes";
import { add } from "./addActions";
import { deleteFn } from "./deleteActions";
import { fetch } from "./fetchActions";
import { update } from "./updateActions";

const url = "/drivers";
export const fetchDrivers = () => (dispatch) => fetch(DRIVER, url, dispatch);

export const fetchAllDrivers = () => (dispatch) =>
  fetch(DRIVER, url + `/all`, dispatch);

export const addDriver = (payload) => (dispatch) =>
  add(DRIVER, url, payload, dispatch);

export const updateDriver = (payload) => (dispatch) =>
  update(DRIVER, url, payload, dispatch);

export const deleteDriver = (payload) => (dispatch) =>
  deleteFn(DRIVER, url, payload, dispatch);
