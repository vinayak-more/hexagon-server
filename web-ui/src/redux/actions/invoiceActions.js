import { axiosInstance as axios } from "./Axios";
import { INVOICE } from "./actionTypes";
import { add } from "./addActions";
import { deleteFn } from "./deleteActions";
import { fetch } from "./fetchActions";
import { update } from "./updateActions";

export const url = "/invoices";

export const fetchInvoices = () => (dispatch) => fetch(INVOICE, url, dispatch);

export const addInvoice = (payload) => (dispatch) =>
  add(INVOICE, url, payload, dispatch);

export const deleteInvoice = (payload) => (dispatch) =>
  deleteFn(INVOICE, url, payload, dispatch);

export const updateInvoice = (payload) => (dispatch) =>
  update(INVOICE, url, payload, dispatch);

export const downloadInvoice = (payload) => (dispatch) => {
  axios
    .get(`${url}/download/${payload.id}`, { responseType: "blob" })
    .then((response) => {
      console.log(response.headers);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${payload.id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.log(error));
};
