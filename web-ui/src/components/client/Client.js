import React, { useState } from "react";
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

const Client = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState();
  const setClient = (client) => {
    setSelectedClient(client);
    setShowForm(true);
  };
  const reset = () => {
    setShowForm(false);
    setSelectedClient();
  };
  return (
    <Container fluid="true">
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setShowForm(true)}>
            <FiPlus className="mb-1 mr-1" />
            Add Client
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <ClientList setSelectedClient={setClient} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {showForm && (
            <div>
              <ClientForm client={selectedClient} reset={reset} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Client;
