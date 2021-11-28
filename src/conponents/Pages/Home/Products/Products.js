// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Login/Hooks/useAuth';

const Products = () => {
    const { products } = useAuth();
    const firsrSix = products.slice(0, 6)
    return (
        <div className="container md:w-11/12 mx-auto my-10 grid md:grid-cols-3 gap-4">
            {
                firsrSix.map( product => <ShowProduct product={product} key={product._id} /> )
            }
        </div>
    );
};

export default Products;

const ShowProduct = (props) =>{
    const { _id, productName, quantity, unitPrice, imgUrl, addedBy } = props.product;
    const url = `/buy-now/${_id}`
    return(
        <div className="border-2 transition duration-500 ease-in-out hover:shadow-2xl rounded text-left p-2">
            <img src={imgUrl} alt={_id} />
            <p className="text-2xl">{productName}</p>
            <p>Price: TK {unitPrice}</p>
            <p>Avalable Quantity: {quantity}</p>
            {/* <p>{description}</p> */}
            <p>Email: {addedBy}</p>
            <Link to={url}><button className="border-2 bg-yellow-500 px-3 rounded-md">Bye Now</button></Link>
            
        </div>
    )
}