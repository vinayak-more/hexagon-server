import React from "react";
import Validators from "../common/validators";
import useForm from "../common/useForm";
import { connect } from "react-redux";
import { addDriver, updateDriver } from "../../redux/actions/driverActions";
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

const DriverForm = (props) => {
  const formValue = props.driver || {
    name: "",
    licenseNumber: "",
    mobile: "",
  };
  const mobileValidate = { fieldName: "Mobile", max: 10, min: 10 };
  const validators = {
    name: Validators().required.bind({ fieldName: "Name" }),
    licenseNumber: Validators().required.bind({ fieldName: "License Number" }),
    mobile: [
      Validators().required.bind(mobileValidate),
      Validators().number.bind(mobileValidate),
      Validators().min.bind(mobileValidate),
      Validators().max.bind(mobileValidate),
    ],
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    formValue,
    validators
  );
  const onSubmit = () => {
    if (values.id) {
      props.updateDriver(values);
    } else {
      props.addDriver(values);
    }
    props.reset();
  };
  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.name}
                    isInvalid={!!errors?.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors?.name}
                  </Form.Control.Feedback>
                </FormGroup>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>Licence Number</FormLabel>
                      <FormControl
                        type="text"
                        name="licenseNumber"
                        placeholder="Licence Number"
                        onChange={handleChange}
                        value={values.licenseNumber}
                        isInvalid={!!errors?.licenseNumber}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.licenseNumber}
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl
                        type="text"
                        name="mobile"
                        maxLength="10"
                        placeholder="Mobile"
                        onChange={handleChange}
                        value={values.mobile}
                        isInvalid={!!errors?.mobile}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.mobile}
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

export default connect(null, { addDriver, updateDriver })(DriverForm);
