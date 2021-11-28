import React, { useState } from 'react';
import useAuth from '../Login/Hooks/useAuth';

const MyOrder = () => {
    const { user, orders, scrWidth } = useAuth();
    const myOrders = orders.filter( order => user.email === order.custEmail);
    console.log(myOrders)
    const [allOfMyOrders, setMyOrders] = useState(myOrders);

    const HandelCancle = (id) => {
        const proceed = window.confirm("Are you sure, you want to cancle the order?");
        if( proceed ){
            const url = `https://murmuring-anchorage-99546.herokuapp.com/orders/${id}`;
            console.log(url)
            fetch( url, {method: 'DELETE'})
            .then( res => res.json())
            .then( data => {
                if(data.acknowledged){
                    alert("Delete success");
                    const remainingOrders = allOfMyOrders.filter( product => product._id !== id);
                    setMyOrders(remainingOrders)
                }
            })
        }
    }
    
    return (
        <div className="flex">
            <div className="grid md:grid-cols-2 gap-4 md:w-9/12 p-4">
                {
                    allOfMyOrders.map( myOrder => <div key={myOrder._id} className="p-4 border-2 rounded">
                        <div>
                            <img src={ myOrder.imgUrl} alt={myOrder.id} />
                        </div>
                        <div>
                            <h1 className="text-3xl">{myOrder.productName}</h1>
                            <h1>Price: TK {myOrder.unitPrice}</h1> 
                            <h1>Delivery Address: {myOrder.delAddress}</h1> 
                            <h1>Review: {myOrder.review} out of 5</h1> 
                            <button className="bg-yellow-500 px-2 rounded" onClick={ ()=> HandelCancle(myOrder._id) } >Cancle Order</button>
                        </div>
                        
                    </div>
                 )
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

export default MyOrder;

