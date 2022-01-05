import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect } from "react";
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { ShoppingCartItem } from "./ShoppingCartItem";
import db from '../../app/db/db'
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/style.css';

export const ShoppingCart = () => {
  const [productsCart, setProductsCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {

      return totalPrice + currentProduct.price
    }, 0)
    setTotalPrice(total)
  }

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray()
    setProductsCart(productsDB)

  }, [])

  useEffect(() => {
    if (productsCart.length > 0) {
      getTotalPrice()
    }
  }, [productsCart])

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Carrito" id="basic-nav-dropdown">
            {productsCart?.map((product) => <ShoppingCartItem key={product.id} item={product} />)}
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to={"/purchase"} className="link_prod">
                Total: ${totalPrice}
              </Link>
              </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  )
}