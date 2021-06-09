import React, { useEffect, useState } from "react";
import TripForm from "./TripForm";
import TripList from "./TripList";
import { Button, Col, Container, Row } from "react-bootstrap";
import { fetchTrips } from "../../redux/actions/tripActions";
import { connect } from "react-redux";
import { FiPlus } from "react-icons/fi";

const Trip = (props) => {
  const { fetchTrips } = props;
  useEffect(() => fetchTrips(), [fetchTrips]);
  const [showForm, setShowForm] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState();
  return (
    <Container fluid="true">
      <Row className="mt-3">
        <Col>
          <Button onClick={() => setShowForm(true)}>
            <FiPlus className="mb-1 mr-1" />
            Add Trip{" "}
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <TripList
            trips={props.trips}
            onEdit={(trip) => {
              setShowForm(true);
              setSelectedTrip(trip);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {showForm && (
            <TripForm
              trip={selectedTrip}
              reset={() => {
                setShowForm(false);
                setSelectedTrip();
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    trips: state.trip.items,
  };
};
export default connect(mapStateToProps, { fetchTrips })(Trip);
