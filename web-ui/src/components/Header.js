import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const handleSelect = (key) => {
    console.log("Selected Key is ", key);
    history.push(key);
  };
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand>Transport Invoice Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" onSelect={handleSelect}>
          <Nav.Link eventKey="/">Home</Nav.Link>
          <Nav.Link eventKey="/vehicle">Vehicle</Nav.Link>
          <Nav.Link eventKey="/driver">Driver</Nav.Link>
          <Nav.Link eventKey="/client">Client</Nav.Link>
          <Nav.Link eventKey="/trip">Trip</Nav.Link>
          <Nav.Link eventKey="/Invoice">Invoice</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
