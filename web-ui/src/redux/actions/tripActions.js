import { TRIP } from "./actionTypes";
import { add } from "./addActions";
import { clear } from "./clearActions";
import { deleteFn } from "./deleteActions";
import { fetch } from "./fetchActions";
import { query } from "./queryActions";
import { update } from "./updateActions";

const url = "/trips";
export const fetchTrips = () => (dispatch) => fetch(TRIP, url, dispatch);

export const addTrip = (payload) => (dispatch) =>
  add(TRIP, url, payload, dispatch);

export const updateTrip = (payload) => (dispatch) =>
  update(TRIP, url, payload, dispatch);

export const deleteTrip = (payload) => (dispatch) =>
  deleteFn(TRIP, url, payload, dispatch);

export const queryTrips = (payload) => (dispatch) =>
  query(TRIP, url, payload, dispatch);

export const clearTrips = () => clear(TRIP);
