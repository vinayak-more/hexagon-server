import { combineReducers } from "redux";
import { CLIENT, DRIVER, INVOICE, TRIP, VEHICLE } from "../actions/actionTypes";
import auth from "./auth";
import reducer from "./crudReducer";

export default combineReducers({
  auth,
  vehicle: reducer(VEHICLE),
  driver: reducer(DRIVER),
  client: reducer(CLIENT),
  trip: reducer(TRIP),
  invoice: reducer(INVOICE),
});
