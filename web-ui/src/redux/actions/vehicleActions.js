import { VEHICLE } from "./actionTypes";
import { add } from "./addActions";
import { deleteFn } from "./deleteActions";
import { fetch } from "./fetchActions";
import { update } from "./updateActions";

const url = "/vehicles";

/* Fetch Vehicle */

export const fetchVehicles = () => (dispatch) => fetch(VEHICLE, url, dispatch);

export const fetchAllVehicles = () => (dispatch) =>
  fetch(VEHICLE, url + `/all`, dispatch);
/* Add Vehicle */

export const addVehicle = (payload) => (dispatch) =>
  add(VEHICLE, url, payload, dispatch);

/* Update Vehicle*/
export const updateVehicle = (payload) => (dispatch) =>
  update(VEHICLE, url, payload, dispatch);

/* Delete Vehicle */

export const deleteVehicle = (payload) => (dispatch) =>
  deleteFn(VEHICLE, url, payload, dispatch);
