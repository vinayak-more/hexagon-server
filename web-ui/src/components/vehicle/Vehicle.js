import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import VehicleForm from "./VehicleForm";
import VehicleList from "./VehicleList";

const Vehicle = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState();
  return (
    <Container fluid="true">
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={() => setShowForm(true)}>
            <FiPlus className="mb-1 mr-1" />
            Add Vehicle
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <VehicleList
            onEdit={(vehicle) => {
              setShowForm(true);
              setSelectedVehicle(vehicle);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {showForm && (
            <VehicleForm
              vehicle={selectedVehicle}
              reset={() => {
                setShowForm(false);
                setSelectedVehicle();
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Vehicle;
