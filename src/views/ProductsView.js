import React, { useEffect, useState } from "react";
import { getProductById } from "../app/services/productServices";
import { useParams } from "react-router-dom";


export const ProductsView = () => {
    
    let params = useParams();
    const [productDetail, setProductDetail] = useState(null);

    useEffect( ()=> {
       
       getProductById(params.id)
            .then((productFromDb)=> setProductDetail(productFromDb))
            .catch((err)=>console.log(err))
    },[params]);

    return (
        <div>
            <h2>{productDetail && JSON.stringify(productDetail)}</h2>
        </div>
    )
}