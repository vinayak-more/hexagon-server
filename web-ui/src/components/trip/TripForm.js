import React, { useEffect } from "react";
import Validators from "../common/validators";
import useForm from "../common/useForm";
import { connect } from "react-redux";
import { addTrip, updateTrip } from "../../redux/actions/tripActions";
import { fetchClients } from "../../redux/actions/clientActions";
import { fetchVehicles } from "../../redux/actions/vehicleActions";
import { fetchDrivers } from "../../redux/actions/driverActions";
import Select from "../common/Select";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

const TripForm = (props) => {
  const { fetchDrivers, fetchVehicles, fetchClients, trip } = props;
  useEffect(() => {
    fetchClients();
    fetchDrivers();
    fetchVehicles();
  }, [fetchClients, fetchVehicles, fetchDrivers]);
  const formValue = (trip && {
    ...trip,
    tripDate: new Date(trip.tripDate).toISOString().substring(0, 10),
    client: trip.client.id,
    vehicle: trip.vehicle.id,
    driver: trip.driver.id,
  }) || {
    tripDate: "",
    shift: "",
    client: "",
    vehicle: "",
    driver: "",
    fromLocation: "",
    toLocation: "",
    startKm: "",
    endKm: "",
    cost: "",
  };
  const validators = {
    tripDate: Validators().required.bind({ fieldName: "TripDate" }),
    client: Validators().required.bind({ fieldName: "Client" }),
    vehicle: Validators().required.bind({ fieldName: "Vehicle" }),
    driver: Validators().required.bind({ fieldName: "Driver" }),
    startKm: [Validators().number.bind({ fieldName: "Start Kilometer" })],
    endKm: [Validators().number.bind({ fieldName: "To Kilometer" })],
    cost: [
      Validators().required.bind({ fieldName: "Cost" }),
      Validators().number.bind({ fieldName: "Cost" }),
    ],
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    formValue,
    validators
  );
  const onSubmit = () => {
    console.log(values);
    console.log(getFormValue());
    if (values.id) {
      props.updateTrip(getFormValue());
    } else {
      props.addTrip(getFormValue());
    }
    props.reset();
  };
  const getFormValue = () => {
    return {
      ...values,
      client: props.clients.find((item) => item.id === parseInt(values.client)),
      vehicle: props.vehicles.find(
        (item) => item.id === parseInt(values.vehicle)
      ),
      driver: props.drivers.find((item) => item.id === parseInt(values.driver)),
    };
  };

  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
                <Container>
                  <Row>
                    <Col>
                      <FormGroup>
                        <FormLabel>Trip Date</FormLabel>
                        <FormControl
                          type="date"
                          id="tripDate"
                          name="tripDate"
                          onChange={handleChange}
                          value={values.tripDate}
                          isInvalid={!!errors?.tripDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.tripDate}
                        </Form.Control.Feedback>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <FormLabel>Shift</FormLabel>
                        <Select
                          options={[{ name: "Day" }, { name: "Night" }]}
                          id="shift"
                          name="shift"
                          onChange={handleChange}
                          value={values.shift}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <FormLabel>Client</FormLabel>
                        <Select
                          options={props.clients}
                          id="client"
                          name="client"
                          onChange={handleChange}
                          value={values.client}
                          isInvalid={!!errors?.client}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.client}
                        </Form.Control.Feedback>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <FormLabel>Vehicle</FormLabel>
                        <Select
                          options={props.vehicles}
                          caption={(item) =>
                            item.name + " - " + item.registration
                          }
                          id="vehicle"
                          name="vehicle"
                          onChange={handleChange}
                          value={values.vehicle}
                          isInvalid={!!errors?.vehicle}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.vehicle}
                        </Form.Control.Feedback>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <FormLabel>Driver</FormLabel>
                        <Select
                          options={props.drivers}
                          id="driver"
                          name="driver"
                          onChange={handleChange}
                          value={values.driver}
                          isInvalid={!!errors?.driver}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.driver}
                        </Form.Control.Feedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <FormLabel>From Location</FormLabel>
                        <FormControl
                          type="text"
                          id="fromLocation"
                          name="fromLocation"
                          placeholder="From Location"
                          onChange={handleChange}
                          value={values.fromLocation}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <FormLabel>To Location</FormLabel>
                        <FormControl
                          type="text"
                          id="toLocation"
                          name="toLocation"
                          placeholder="To Location"
                          onChange={handleChange}
                          value={values.toLocation}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <FormLabel>Start Kilometer</FormLabel>
                        <FormControl
                          type="text"
                          name="startKm"
                          placeholder="Start Kilometer"
                          onChange={handleChange}
                          value={values.startKm}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <FormLabel>End Kilometer</FormLabel>
                        <FormControl
                          type="text"
                          id="endKm"
                          name="endKm"
                          placeholder="End Kilometer"
                          onChange={handleChange}
                          value={values.endKm}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <FormLabel>Cost</FormLabel>
                        <FormControl
                          type="text"
                          id="cost"
                          name="cost"
                          placeholder="Cost"
                          onChange={handleChange}
                          value={values.cost}
                          isInvalid={!!errors?.cost}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.cost}
                        </Form.Control.Feedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div>
                    <Button variant="primary" className="mr-2" type="submit">
                      Submit
                    </Button>

                    <Button variant="secondary" onClick={() => props.reset()}>
                      Cancel
                    </Button>
                  </div>
                </Container>
              </Form>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicle.items,
    drivers: state.driver.items,
    clients: state.client.items,
  };
};
export default connect(mapStateToProps, {
  addTrip,
  updateTrip,
  fetchClients,
  fetchVehicles,
  fetchDrivers,
})(TripForm);
