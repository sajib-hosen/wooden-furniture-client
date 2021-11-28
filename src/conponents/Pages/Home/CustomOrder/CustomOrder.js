import React from 'react';

const CustomOrder = () => {
    return (
        <div>
            <h1 className="text-2xl underline ">Make a Custome Furniture Order</h1>
            <div className="grid md:grid-cols-3 gap-4 w-11/12 mx-auto m-4">

            <div style={{width: "300px", height: "360px"}} className="flex flex-col items-center border-indigo-600 border-2 p-4 rounded-2xl" >
                <img width="130px" className="rounded-full" src="https://www.familyhandyman.com/wp-content/uploads/2020/03/4e43e850-61u5vx9jfvl._ac_sl1000_.jpg" alt="carpenter" />
                <div>
                    <br/>
                    <h1 className="text-2xl underline" >Carpenter</h1><br/>
                    <p>Mr Carpenter</p>
                    <p>Email: mr@carpenter.com</p>
                    <p>Phone: +887 234567</p>
                    <button className=" bg-yellow-700 text-white rounded-full px-3">Hire</button>
                </div>
            </div>

            <div style={{width: "300px", height: "360px"}} className="flex flex-col items-center border-indigo-600 border-2 p-4 rounded-2xl" >
                <img width="130px" className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DLLNmSWN_IT2eE9ykvetUhxNB_NT4Hmreg&usqp=CAU" alt="carpenter" />
                <div>
                    <br/>
                    <h1 className="text-2xl underline" >Burnisher</h1><br/>
                    <p>Mr Burnisher</p>
                    <p>Email: mr@burnisher.com</p>
                    <p>Phone: +887 2345679</p>
                    <button className=" bg-yellow-700 text-white rounded-full px-3">Hire</button>
                </div>
            </div>

            <div style={{width: "300px", height: "360px"}} className="flex flex-col items-center border-indigo-600 border-2 p-4 rounded-2xl" >
                <img width="130px" height="130px" className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-TvPHOTYnNzn5_Nvx-j4Dm_w0DBJq2Trdw&usqp=CAU" alt="carpenter" />
                <div>
                    <br/>
                    <h1 className="text-2xl underline" >Designer</h1><br/>
                    <p>Mr Designer</p>
                    <p>Email: mr@designer.com</p>
                    <p>Phone: +887 234567</p>
                    <button className=" bg-yellow-700 text-white rounded-full px-3">Hire</button>
                </div>
            </div>

            </div>
        </div>
    );
};

export default CustomOrder;