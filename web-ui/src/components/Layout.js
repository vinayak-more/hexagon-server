import React from "react";
import { Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Client from "./client/Client";
import Driver from "./driver/Driver";
import Header from "./Header";
import Invoice from "./invoice/Invoice";
import Trip from "./trip/Trip";
import Vehicle from "./vehicle/Vehicle";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container style={{ marginTop: "10px" }}>
        <Row>
          <div>
            <Switch>
              <Route path="/vehicle" component={Vehicle} />
              <Route path="/driver" component={Driver} />
              <Route path="/client" component={Client} />
              <Route path="/trip" component={Trip} />
              <Route path="/invoice" component={Invoice} />
            </Switch>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
