import React, { useState } from "react";
import { connect } from "react-redux";
import InvoiceForm from "./InvoiceForm";
import InvoiceList from "./InvoiceList";
import { deleteInvoice } from "../../redux/actions/invoiceActions";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

const Invoice = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState();

  const reset = () => {
    setShowForm(false);
    setSelectedInvoice();
  };
  return (
    <Container fluid="true">
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setShowForm(true)}>
            <FiPlus className="mb-1 mr-1" />
            Create Invoice
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <InvoiceList
            setSelectedInvoice={(invoice) => {
              setSelectedInvoice(invoice);
              setShowForm(true);
            }}
            deleteInvoice={props.deleteInvoice}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {showForm && (
            <div>
              <InvoiceForm selectedInvoice={selectedInvoice} reset={reset} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, { deleteInvoice })(Invoice);
