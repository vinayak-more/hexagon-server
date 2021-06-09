import React from "react";
import { connect } from "react-redux";
import useForm from "../common/useForm";
import Validators from "../common/validators";
import { addVehicle, updateVehicle } from "../../redux/actions/vehicleActions";
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

const VehicleForm = (props) => {
  const formValue = props.vehicle || {
    name: "",
    registration: "",
  };

  const validators = {
    name: Validators().required.bind({ fieldName: "Name" }),
    registration: Validators().required.bind({ fieldName: "Registration" }),
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    formValue,
    validators
  );
  const onSubmit = () => {
    if (values.id) {
      props.updateVehicle(values);
    } else {
      props.addVehicle(values);
    }
    props.reset();
  };
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
                      <FormLabel>Name</FormLabel>
                      <FormControl
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={values?.name}
                        isInvalid={!!errors?.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.name}
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>Registration</FormLabel>
                      <FormControl
                        type="text"
                        id="registration"
                        name="registration"
                        placeholder="Registration"
                        onChange={handleChange}
                        value={values?.registration}
                        isInvalid={!!errors?.registration}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.registration && (
                          <span>{errors.registration}</span>
                        )}
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
              </Form>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { addVehicle, updateVehicle })(VehicleForm);
