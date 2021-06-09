import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useForm from "./common/useForm";
import Validators from "./common/validators";
import { login, authenticate } from "../redux/actions/authActions";
import { useLocation } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";

const Login = (props) => {
  const { state } = useLocation();
  let formValues = {
    username: "",
    password: "",
  };
  let validators = {
    username: Validators().required.bind({ fieldName: "Username" }),
    password: Validators().required.bind({ fieldName: "Password" }),
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    formValues,
    validators
  );
  const onSubmit = () => {
    props.authenticate(values);
  };
  if (props.authenticated) {
    props.history.push(state.from || "/");
  }

  return (
    <>
      {props?.authenticated && props.history.push(state.from || "/")}
      <Card style={{ width: "18rem", margin: "auto", marginTop: "25px" }}>
        <Card.Body>
          <Container>
            <Row>
              <div>
                <Form
                  onSubmit={(event) => {
                    handleSubmit(event, onSubmit);
                  }}
                >
                  <div>
                    <Form.Group>
                      <FormLabel>Username</FormLabel>
                      <FormControl
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        onChange={handleChange}
                        isInvalid={!!errors?.username}
                        autoFocus
                      ></FormControl>
                      <Form.Control.Feedback type="invalid">
                        {errors?.username}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div>
                    <Form.Group>
                      <FormLabel>Password</FormLabel>
                      <FormControl
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        isInvalid={!!errors?.password}
                      ></FormControl>
                      <Form.Control.Feedback type="invalid">
                        {errors?.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Alert variant="danger" hidden={!props.loginFailed}>
                    {props.loginFailed}
                  </Alert>
                  <div>
                    <Button type="submit">Submit</Button>
                  </div>
                </Form>
              </div>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    authenticated: state.auth?.authenticated,
    loginFailed: state.auth?.loginFailed,
  };
};
export default connect(mapStateToProps, { login, authenticate })(Login);
