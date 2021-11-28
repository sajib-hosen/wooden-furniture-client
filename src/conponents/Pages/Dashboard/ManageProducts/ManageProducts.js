import React, { useState } from 'react';
import useAuth from '../../Login/Hooks/useAuth';

const ManageProducts = () => {
    const { products } = useAuth();
    const [allProducts, setAllProducts] = useState(products);

    console.log(window.screen.width)

    const deleteHandeler = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete the products?");
        if( proceed ){
            const url = `https://murmuring-anchorage-99546.herokuapp.com/products/${id}`;
            console.log(url)
            fetch( url, {method: 'DELETE'})
            .then( res => res.json())
            .then( data => {
                if(data.acknowledged){
                    alert("Delete success");
                    const remainingProducts = allProducts.filter( product => product._id !== id);
                    setAllProducts(remainingProducts)
                }
            })
        }
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:w-9/12 mx-auto p-4">
                {
                    allProducts.map(product => 
                        <div className="md:flex p-4 border-2 rounded">
                            <div className="w-60">
                                <img height="100px" src={product.imgUrl} alt={product._id}/>
                            </div>
                            <div className=" p-3">
                                <p className="text-2xl">{product.productName}</p>
                                <p>Quantity Avalable: {product.quantity}, Price: TK {product.unitPrice}, Added By: {product.addedBy}</p>
                                <p>Description: {product.description}</p>
                                <button onClick={() => deleteHandeler(product._id)} className="border-2 bg-yellow-500 px-3 rounded-md">Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProducts;
