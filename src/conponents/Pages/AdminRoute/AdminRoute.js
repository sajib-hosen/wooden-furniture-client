import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Login/Hooks/useAuth';



const AdminRoute = ({children, ...rest}) => {
    const { user, isAdmin } = useAuth();
    const admin = isAdmin.admin;

    return (
        <Route 
            {...rest}
            render = {({ location }) => user.email && admin ? children : <Redirect
                to = {{
                    pathname: '/login',
                    state: { from: location }
                }}
            ></Redirect> }
        >  
        </Route>
    );
};

export default AdminRoute;