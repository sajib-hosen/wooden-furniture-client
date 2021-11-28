import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Login/Hooks/useAuth';

const BuyNow = () => {
    const { user, scrWidth } = useAuth();
    const custEmail = user.email;
    const [product, setProduct] = useState({});
    const [payment, setPayment] = useState("");
 
    const { _id } = useParams();
    const url = `https://murmuring-anchorage-99546.herokuapp.com/products/${_id}`;
        useEffect(()=>{
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                // console.log(data);
                setProduct(data);
            })
        },[url])
       
        // collecting all the values 
        const { productName, quantity, unitPrice, imgUrl, description, addedBy} = product;
        const radioBtN = event =>{
            setPayment(event.target.value);
        }
        const nameRef = useRef();
        const contRef = useRef();
        const addRef = useRef();
        const reviewRaf = useRef();

        const handlePlaceOrder = e =>{
            e.preventDefault()
            const custName = nameRef.current.value;
            const contruct = contRef.current.value;
            const delAddress = addRef.current.value;
            const review = reviewRaf.current.value;
            console.log(window.screen.width)

            const newOrder = {productName, custName, contruct, delAddress, payment, imgUrl, review, unitPrice, custEmail }

        // connect to server and stor in DB
        fetch("https://murmuring-anchorage-99546.herokuapp.com/orders", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify( newOrder )
        })
        .then( res => res.json())
        .then( data => {
            if(data.insertedId){
                nameRef.current.value="";
                contRef.current.value="";
                addRef.current.value="";
                reviewRaf.current.value="";
                alert("Order Place Success")
            }
        })
        .catch(error => console.log(error));

        }
    return (
        <div className="md:flex">
            <div className="md:flex md:w-8/12 h-screen">
            <div className=" text-left p-2 md:w-2/4">
                <img src={imgUrl} alt={_id} />
                <p className="text-2xl">{productName}</p>
                <p>Price: TK {unitPrice}</p>
                <p>Avalable Quantity: {quantity}</p>
                <p>{description}</p>
                <p>Email: {addedBy}</p>
            </div>
            <div className="md:w-2/4 p-2">
                <p className="text-3xl text-center">Please Feel Out The Form</p> <br/>
                <form className="p-4" onSubmit={handlePlaceOrder}>
                    <input type="text" ref={nameRef} name="name" placeholder="Enter Your Name . . ." className="border-b-2 p-2 border-indigo-700 w-full" />
                    <input type="text" ref={contRef} name="number" placeholder="Enter Contruct Number . . ." className="border-b-2 p-2 border-indigo-700 w-full" />
                    <textarea rows="5" ref={addRef} className="border-b-2 p-2 border-blue-700 w-full" type="text"  name="description" placeholder="Enter Delivery Address . . . "/>
                    
                    <br/>
                    <p>Please Select the payment method</p>
                    <div onChange={radioBtN}>
                    <span className="mr-2"><input className="mr-2" type="radio" id="onDelivery" name="paymentTerms" value="onDelivery" /><label htmlFor="onDelivery">Cash On Delivery</label></span>
                    <span className="mr-2"><input className="mr-2" type="radio" id="visaCard" name="paymentTerms" value="visaCard" /><label htmlFor="visaCard">Visa Card</label></span>
                    <span className="mr-2"><input className="mr-2" type="radio" id="masterCard" name="paymentTerms" value="masterCard" /><label htmlFor="masterCard">Master Card</label></span>
                    <span className="mr-2"><input className="mr-2" type="radio" id="bKash" name="paymentTerms" value="bKash" /><label htmlFor="bKash">bKash</label></span>
                    <br/>
                    
                    </div>

                    <p>Plesde review the product : <input type="number" ref={reviewRaf} max="5" min="1" name="review" placeholder="1 to 5" /> </p>
                    <input type="submit" value="Place Order" className="p-1 px-2 text-white rounded-full bg-indigo-600 m-2" /><br/>
                    <Link className=" p-1 px-2 text-white rounded-full bg-indigo-600 m-2" to="/explore">Back To Explore</Link>
                </form>
            </div>
        </div>
        {
            scrWidth || <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80")`}} className="h-screen w-4/12 sticky top-0">
            <p className='w-full flex justify-around text-center bg-black bg-opacity-50 h-screen items-center text-white text-4xl'>Place Order, We Will Deliver As Soon As Possible</p>
        </div>
        }
            
        </div>
    );
};

export default BuyNow;