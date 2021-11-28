import React, { createContext } from 'react';
import useFirebase from '../conponents/Pages/Login/Hooks/FirebaseAuth/useFirebase';


export const AuthContext = createContext();

const AuthProvider = (props) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={ allContext }>
            { props.children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;