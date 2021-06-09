import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useForm from "../common/useForm";
import Validators from "../common/validators";
import { fetchClients } from "../../redux/actions/clientActions";
import { fetchVehicles } from "../../redux/actions/vehicleActions";
import { queryTrips, clearTrips } from "../../redux/actions/tripActions";
import { addInvoice, updateInvoice } from "../../redux/actions/invoiceActions";
import Select from "../common/Select";
import TripList from "../trip/TripList";
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

const InvoiceForm = (props) => {
  const [queried, setQueried] = useState(false);
  const {
    fetchClients,
    fetchVehicles,
    queryTrips,
    clearTrips,
    clients,
    vehicles,
    addInvoice,
    updateInvoice,
    selectedInvoice,
  } = props;
  useEffect(() => {
    fetchClients();
    fetchVehicles();
    clearTrips();
  }, [fetchClients, fetchVehicles, clearTrips, selectedInvoice]);
  const formValues = (selectedInvoice && {
    ...selectedInvoice,
    fromDate: new Date(selectedInvoice.fromDate).toISOString().substring(0, 10),
    toDate: new Date(selectedInvoice.toDate).toISOString().substring(0, 10),
    invoiceDate: new Date(selectedInvoice.invoiceDate)
      .toISOString()
      .substring(0, 10),
    client: selectedInvoice.client?.id,
    vehicle: selectedInvoice.vehicle?.id,
  }) || {
    fromDate: "",
    toDate: "",
    client: "",
    vehicle: "",
    fuelRate: "",
    trips: [],
    particulars: "",
    invoiceNumber: "",
    invoiceDate: new Date().toISOString().substring(0, 10),
  };
  const validators = {
    fromDate: Validators().required.bind({ fieldName: "From date" }),
    client: Validators().required.bind({ fieldName: "Client" }),
    fuelRate: Validators().number.bind({ fieldName: "Fuel Rate" }),
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    formValues,
    validators
  );

  const handleQuery = () => {
    const payload = getQueryPaylaod();
    console.log(payload);
    queryTrips(payload);
    setQueried(true);
  };
  const getQueryPaylaod = () => {
    return {
      ...values,
      toDate: values.toDate || values.fromDate,
      client: clients.find((item) => item.id === parseInt(values.client)),
      vehicle: vehicles.find((item) => item.id === parseInt(values.vehicle)),
    };
  };
  const onSubmit = () => {
    let payload = getQueryPaylaod();
    if (payload.id) {
      updateInvoice(payload);
    } else {
      addInvoice(payload);
    }
    props.reset();
  };
  const trips =
    queried || (props.trips && props.trips.length)
      ? props.trips
      : selectedInvoice?.trips;
  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={(event) => handleSubmit(event, onSubmit)}>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>From Date</FormLabel>
                      <FormControl
                        type="date"
                        id="fromDate"
                        name="fromDate"
                        onChange={handleChange}
                        value={values.fromDate}
                        isInvalid={!!errors?.fromDate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.fromDate}
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>To Date</FormLabel>
                      <FormControl
                        type="date"
                        id="toDate"
                        name="toDate"
                        onChange={handleChange}
                        value={values.toDate}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>Client</FormLabel>
                      <Select
                        options={clients}
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
                        options={vehicles}
                        caption={(item) =>
                          item.name + " - " + item.registration
                        }
                        id="vehicle"
                        name="vehicle"
                        onChange={handleChange}
                        value={values.vehicle}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  className="mr-3"
                  onClick={(event) => handleSubmit(event, handleQuery)}
                >
                  Fetch trips
                </Button>
                {(!trips || !trips?.length) && (
                  <>
                    <Button variant="secondary" onClick={() => props.reset()}>
                      Cancel
                    </Button>
                    {queried && (
                      <Row className="mt-3">
                        <Col>Not found any trips for selected criteria!!</Col>
                      </Row>
                    )}
                  </>
                )}
                {trips && !!trips.length && (
                  <div class="mt-3">
                    <FormGroup>
                      <TripList
                        trips={trips}
                        disableActions={true}
                        name="trips"
                        handleChange={handleChange}
                      />
                    </FormGroup>
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabel>Invoice Date</FormLabel>
                          <FormControl
                            type="date"
                            id="invoiceDate"
                            name="invoiceDate"
                            onChange={handleChange}
                            value={values.invoiceDate}
                            isInvalid={!!errors?.invoiceDate}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors?.invoiceDate}
                          </Form.Control.Feedback>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <FormLabel>Invoice Number</FormLabel>
                          <FormControl
                            id="invoiceNumber"
                            type="text"
                            name="invoiceNumber"
                            onChange={handleChange}
                            value={values.invoiceNumber}
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <FormLabel>Fuel Rate</FormLabel>
                          <FormControl
                            id="fuelRate"
                            type="text"
                            name="fuelRate"
                            onChange={handleChange}
                            value={values.fuelRate}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <FormLabel>Particulars</FormLabel>
                      <FormControl
                        id="particulars"
                        type="text"
                        name="particulars"
                        onChange={handleChange}
                        value={values.particulars}
                      />
                    </FormGroup>

                    <div>
                      <Button className="mr-3" variant="primary" type="submit">
                        Submit
                      </Button>
                      <Button variant="secondary" onClick={() => props.reset()}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
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
    clients: state.client.items,
    vehicles: state.vehicle.items,
    trips: state.trip.items,
  };
};
export default connect(mapStateToProps, {
  fetchClients,
  fetchVehicles,
  queryTrips,
  clearTrips,
  addInvoice,
  updateInvoice,
})(InvoiceForm);
