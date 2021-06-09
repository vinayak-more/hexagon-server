import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import DriverForm from "./DriverForm";
import DriverList from "./DriverList";

const Driver = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState();
  const setDriver = (driver) => {
    setSelectedDriver(driver);
    setShowForm(true);
  };
  const reset = () => {
    setShowForm(false);
    setSelectedDriver();
  };
  return (
    <Container fluid="true">
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setShowForm(true)}>
            <FiPlus className="mb-1 mr-1" />
            Add Driver
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <DriverList setSelectedDriver={setDriver} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {showForm && (
            <div>
              <DriverForm driver={selectedDriver} reset={reset} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Driver;
