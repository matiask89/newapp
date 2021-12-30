import React from "react";
import {Col, Row} from 'react-bootstrap';
import '../assets/css/style.css'


export const Product = ({item}) => {
    const {title, image, price, description} = item;
    return(
        <Col xs={4}>
            <Row>
                <Col xs={8}>
                    <div className="font">{title}
                    </div>
                </Col>
                <Col xs={4}>
                    <div>${price}
                    </div>
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
            </Row>
        </Col>

    )
}