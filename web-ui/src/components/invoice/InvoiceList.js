import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";
import {
  fetchInvoices,
  downloadInvoice,
} from "../../redux/actions/invoiceActions";
import { FiDownload, FiEdit, FiTrash2 } from "react-icons/fi";
import { getFormattedDate } from "../common/DateUtils";

const InvoiceList = (props) => {
  const { fetchInvoices, invoices } = props;
  useEffect(() => fetchInvoices(), [fetchInvoices]);

  const invoiceRows = invoices
    .sort((a, b) => (a.id < b.id ? -1 : a.id === b.id ? 0 : 1))
    .map((invoice, index) => {
      return (
        <tr key={index}>
          <td>{invoice.id}</td>
          <td>{invoice.invoiceNumber}</td>
          <td>{getFormattedDate(new Date(invoice.invoiceDate))}</td>
          <td>{getFormattedDate(new Date(invoice.fromDate))}</td>
          <td>{getFormattedDate(new Date(invoice.toDate))}</td>
          <td>{invoice.client?.name}</td>
          <td>
            <Button
              variant="outline-primary"
              className="mr-2"
              onClick={() => props.setSelectedInvoice(invoice)}
            >
              <FiEdit className="mb-1 mr-1" />
              Edit
            </Button>
            <Button
              variant="outline-danger"
              className="mr-2"
              onClick={() => props.deleteInvoice(invoice)}
            >
              <FiTrash2 className="mb-1 mr-1" />
              Delete
            </Button>
            <Button
              variant="outline-success"
              onClick={() => props.downloadInvoice(invoice)}
            >
              <FiDownload className="mb-1 mr-1" />
              Download
            </Button>
          </td>
        </tr>
      );
    });
  const tableHeaders = (
    <tr>
      <th>Id</th>
      <th>Invoice Number</th>
      <th>Invoice Date</th>
      <th>From</th>
      <th>To</th>
      <th>Client</th>
      <th>Actions</th>
    </tr>
  );
  return (
    <div>
      <div>
        <Table striped bordered hover responsive>
          <thead>{tableHeaders}</thead>
          <tbody>{invoiceRows}</tbody>
        </Table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    invoices: state.invoice.items,
  };
};
export default connect(mapStateToProps, { fetchInvoices, downloadInvoice })(
  InvoiceList
);
