import React from "react";
import {Col, Row, Badge, Button} from 'react-bootstrap';
import { saveLastInterestProduct } from "../../app/services/storageServices";
import '../../assets/css/style.css'
import db from '../../app/db/db'


export const Product = ({item}) => {
    const {title, image, price, description} = item;
    const addProductToCart = ({title,price}) => {
        db.cart.add({
            title : title,
            price : price,
            
        })
    }
    return(
        <Col xs={4}>
            <Row>
                <Col xs={8}>
                    <div className="font">{title}
                    </div>
                </Col>
                <Col xs={4}>
                <Button onClick={() => saveLastInterestProduct(title)} variant="success"><Badge bg="dark">${price}</Badge></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <img className="img-product" alt="" src={image}></img>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <div>
                        <p>{description}</p>
                    </div>
                </Col>
                <Col xs={4}>
                    <Button onClick={() => addProductToCart(item)} variant="success">Agregar al carrito</Button>
                </Col>
            </Row>
        </Col>

    )
}