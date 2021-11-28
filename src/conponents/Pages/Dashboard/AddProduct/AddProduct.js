import React, { useRef } from 'react';
import useAuth from '../../Login/Hooks/useAuth';

const AddProduct = () => {
    // const { user,  } = useFirebase();
    const { user, scrWidth } = useAuth()
    const addedBy = user.email;

    const productNameRef = useRef();
    const quantityRef = useRef();
    const unitPriceRef = useRef();
    const descriptionRef = useRef();
    const imgUrlRef = useRef();

    const addProductToDB = e =>{
        e.preventDefault();
        const productName = productNameRef.current.value;
        const quantity = quantityRef.current.value;
        const unitPrice = unitPriceRef.current.value;
        const description = descriptionRef.current.value;
        const imgUrl = imgUrlRef.current.value;

        const newProduct = {productName, quantity, unitPrice, description, imgUrl, addedBy};

        // connect to server and stor in DB
        fetch("https://murmuring-anchorage-99546.herokuapp.com/products", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify( newProduct )
        })
        .then( res => res.json())
        .then( data => {
            if(data.insertedId){
                productNameRef.current.value="";
                quantityRef.current.value="";
                unitPriceRef.current.value="";
                imgUrlRef.current.value="";
                descriptionRef.current.value="";
                alert("Product add success")
            }
        })
        .catch(error => console.log(error));
    }
    return (
        <div className="flex flex-row">
            <div  className=" w-96 shadow-xl">
                <p className="text-2xl text-center mt-2">Add Product</p>
                <form onSubmit={addProductToDB} className="flex flex-col p-3">
                    <input className="border-b-2 p-2 border-blue-700" type="text" ref={ productNameRef } name="productName" placeholder="Prduct Name . . . "/>
                    <input className="border-b-2 p-2 border-blue-700" type="number" ref={ quantityRef } name="quantity" placeholder="Quantity Avalable . . . "/>
                    <input className="border-b-2 p-2 border-blue-700" type="number" ref={ unitPriceRef } name="unitPrice" placeholder="Unit Price . . . "/>
                    <input className="border-b-2 p-2 border-blue-700" type="text" ref={ imgUrlRef } name="imageUrl" placeholder="Image URL . . . "/>
                    <textarea rows="5" className="border-b-2 p-2 border-blue-700" type="text" ref={ descriptionRef } name="description" placeholder="Product Description . . . "/>
                    <input className="mt-4 py-2 hover:bg-indigo-900 rounded-full hover:text-white" type="submit" value="Add Product"/>
                </form>
            </div>
            {
                scrWidth || <div className="w-full h-screen" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/2076086.jpg")', backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"bottom"}}>
                <h1 className='w-full flex justify-around bg-black bg-opacity-50 h-screen items-center text-white text-4xl'>Add A Beautiful Product To Be Sold.</h1>
            </div>
            }
            
        </div>
    );
};

export default AddProduct;