import React, { useState } from 'react';
import useAuth from './../../Login/Hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail ] = useState();
    const { isAdmin }= useAuth()
    const admin = isAdmin.admin;

    console.log(admin)
    const emailValue =(e) =>{
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://murmuring-anchorage-99546.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail("")
                    alert("Admin Created")
                    console.log(data);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="md:flex justify-around md:p-8" >
            <form onSubmit={handleMakeAdmin} >
                <input type="email" className="border-b-2 border-indigo-700" name="email" onBlur={emailValue } placeholder="Enter Email ..." />
                <input type="submit" value="Make Admin" className=" bg-indigo-600 px-3 text-white rounded-full" />
            </form>
        </div>
    );
};

export default MakeAdmin;