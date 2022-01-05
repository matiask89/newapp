import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { DetailCart } from "../components/ShoppingCart/DetailCart";
import { MyButton } from "../components/cancelButton";

export const PurchaseView = () => {
    

    return (
       
        <div>
            <h2>Pagina del carrito de compras</h2>
            <DetailCart />
            <Row>
                <Col>
                    <MyButton />
                    <Button variant="success">Comprar</Button>
                </Col>
            </Row>
        </div>
        
    )
}