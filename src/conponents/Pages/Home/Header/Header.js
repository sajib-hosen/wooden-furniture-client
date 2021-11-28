import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Login/Hooks/useAuth';

const Header = () => {
    const {logOut, googleSignIn, user, isAdmin, scrWidth } = useAuth()
    const admin = isAdmin.admin;
    // console.log( "user", user.user.email)
    return (
        <div className=" bg-indigo-800 p-1">

            <div className="md:flex md:justify-between items-center">

                <div className="flex items-center">
                    <h1 className="text-3xl text-bold px-2 text-yellow-300">Wooden Furniture</h1>
                    {
                        scrWidth || <Link to="explore" className="px-3 underline text-white" >Explore</Link>
                    }
                    {
                        admin && scrWidth || <Link to="dashboard" className="px-3 underline text-white" >Dashboard</Link>
                    }
                    
                </div>
                <div className="flex">
                    {
                        user?.email ? <button className="text-white px-2" onClick={ logOut }>Sign Out</button> : <button className="text-white px-2" onClick={ googleSignIn }>Sign In</button>
                    }
                    {
                        user?.email && <img className="rounded-full	" src={user?.photoURL} alt={user.email} width="35px"></img>
                    }
                </div>

            </div>

        </div>
    );
};

export default Header;