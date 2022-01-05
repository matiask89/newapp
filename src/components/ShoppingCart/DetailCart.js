import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productServices";

export const DetailCart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((allProductsFromDb) => setProducts(allProductsFromDb))
    }, []);

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    
                    <th>Title</th>
                    <th>Price</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((products, index) =>
                (<tr key={index}>
                    <td>{products.title}</td>
                    <td>${products.price}</td>
                    <td>{products.id}</td>
                </tr>))}
            </tbody>
        </Table>
    )
}