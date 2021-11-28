import React from 'react';
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import AdminRoute from '../AdminRoute/AdminRoute';
import useFirebase from '../Login/Hooks/FirebaseAuth/useFirebase';
import useAuth from '../Login/Hooks/useAuth';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';

const Dashboard = () => {
    const { isAdmin, user }= useAuth()
    const admin = isAdmin.admin;
    // console.log(admin)

    const { path, url } = useRouteMatch();
    const {logOut} = useFirebase();
    return (
        <div>
            <div className="md:flex justify-between bg-gray-500 text-white">
                <div>
                <ul className="md:flex">
                    {
                        admin && <Link to={`${url}/manage-all-orders`} ><li className="truncate py-1 px-2  hover:bg-gray-400 text-white">Manage Orders</li></Link>
                    }
                    <Link to={`${url}/add-a-product`} ><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Add product</li></Link>
                    {
                        admin && <Link to={`${url}/make-admin`} ><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Make Admin</li></Link>
                    }
                    {
                        admin && <Link to={`${url}/manageProducts`} ><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Manage Products</li></Link>
                    }
                    
                    </ul>
                </div>
                {/* <div>
                    <p><input onChange="" type="search" name="search" id="search" placeholder="search" className="bg-transparent border-b-2  text-center" /></p>
                </div> */}
                <div>
                    <p onClick={logOut} className="px-3">Sign Out</p>
                </div>
            </div>
            <div>
                <Switch>
                    <Route exact path={`${path}/`} >
                        <div style={{ backgroundImage: `url("https://m.media-amazon.com/images/I/61JLG9VEm8S._SL1173_.jpg")`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"bottom" }} className='w-full flex bg-black bg-opacity-50 h-screen items-center text-white text-4xl' >
                            <div className="flex items-center border-2 mx-auto">
                            <img className="rounded-full p-4" src={user?.photoURL} alt={user.email}></img>
                            <p className="p-3">Welcome To Dashboard</p>
                            </div>
                        </div>

                    </Route>
                    <AdminRoute exact path={`${path}/manage-all-orders`} >
                        <ManageOrders/>
                    </AdminRoute>
                    <Route exact path={`${path}/add-a-product`} >
                        <AddProduct/>
                    </Route>
                    <AdminRoute exact path={`${path}/make-admin`} >
                        <MakeAdmin/>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageProducts`} >
                        <ManageProducts/>
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;