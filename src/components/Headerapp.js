import React from "react";
import { Row,  Navbar, Container } from 'react-bootstrap';
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const Headerapp = () =>
(
  <Row>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mini e-commerce</Navbar.Brand>
        <ShoppingCart />
      </Container>
    </Navbar>
  </Row>
);

