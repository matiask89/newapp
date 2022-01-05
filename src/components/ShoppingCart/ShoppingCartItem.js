import React from "react";
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../assets/css/style.css';


export const ShoppingCartItem = ({ item }) => (
    <NavDropdown.Item>
        <Link to={`/product/${item.id}`} className="link_prod">
        {item.title} - ${item.price}
    </Link>
    </NavDropdown.Item >
)