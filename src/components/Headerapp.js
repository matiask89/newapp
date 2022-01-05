import React from "react";
import { Row,  Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const Headerapp = () =>
(
  <Row>
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to={"/"} style={{textDecoration: 'none'}}>
          <Navbar.Brand>Mini e-commerce</Navbar.Brand>
        </Link>
        <ShoppingCart />
      </Container>
    </Navbar>
  </Row>
);

