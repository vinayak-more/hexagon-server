import { CLIENT } from "./actionTypes";
import { add } from "./addActions";
import { deleteFn } from "./deleteActions";
import { fetch } from "./fetchActions";
import { update } from "./updateActions";

const url = "/clients";

export const fetchClients = () => (dispatch) => {
  fetch(CLIENT, url, dispatch);
};

export const fetchAllClients = () => (dispatch) =>
  fetch(CLIENT, url + `/all`, dispatch);

export const addClient = (payload) => (dispatch) => {
  add(CLIENT, url, payload, dispatch);
};

export const updateClient = (payload) => (dispatch) => {
  update(CLIENT, url, payload, dispatch);
};

export const deleteClient = (payload) => (dispatch) => {
  deleteFn(CLIENT, url, payload, dispatch);
};
