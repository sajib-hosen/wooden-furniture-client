import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Login/Hooks/useAuth';

const Explore = () => {
    const { products, scrWidth } = useAuth();
    console.log(scrWidth)
    return (
        <div className="flex">
            <div className="grid md:grid-cols-2 gap-4 w-9/12 p-4">
                {
                    products.map(product => <ShowEacsPro product={product} key={product._id} />)
                }
            </div>
           {
               scrWidth || <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80")`}} className="h-screen sticky top-0 w-3/12">
               <p className='w-full flex justify-around text-center bg-black bg-opacity-50 h-screen items-center text-white text-4xl'>This Is All of Our Products</p>
           </div>
           }
            
        </div>
        
    );
};

export default Explore;

const ShowEacsPro = ( props ) =>{
    const { _id, productName, quantity, unitPrice, imgUrl, addedBy, description} = props.product;
    const url = `/buy-now/${_id}`
    return(
        <div className="md:flex md:p-4 border-2 rounded">
            <div className="w-72">
                <img src={imgUrl} alt={_id}/>
            </div>
            <div className="md:w-2/4 p-3">
                <p className="text-2xl">{productName}</p>
                <p>Quantity Avalable: {quantity}</p>
                <p>Price: TK {unitPrice}</p>
                {/* <p>{description}</p> */}
                <p>Email: {addedBy}</p>
                <Link to={url}><button className="border-2 bg-yellow-500 px-3 rounded-md">Bye Now</button></Link>
            </div>
        </div>
    )
}