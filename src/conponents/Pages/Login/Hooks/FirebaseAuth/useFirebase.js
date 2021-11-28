import FirebaseInit from "../fireBaseConfig/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
FirebaseInit();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const [isRegis, setIsRegis] = useState(false);
    const [orders, setOrders] = useState([]);
    const [scrWidth, setScrWidth ] = useState(false)

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // screen width ======
    useEffect(()=>{
        if( window.screen.width <= 414){
            setScrWidth(true)
        }
    },[])

    // For Google Sign In ============
    const googleSignIn = (location, history) =>{
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Creat User with Email and Password ================
    const creatAnUser = ( email, password, name, history) => {
        setIsLoading(true);
        console.log(  email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // alert("User Register Success 1")
            const newUser = { displayName: name, email }
            setUser(newUser);
            //send to Server to store in DB
            saveUser(email, name, 'POST');
            alert("User Register Success")
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch(error => {
            setError(error.message);
            alert(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    // send and save user to DB ==========================

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://murmuring-anchorage-99546.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    //Loding data about IsAdmin or Not =========================
    useEffect(()=>{
        fetch(`https://murmuring-anchorage-99546.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then( data=> setIsAdmin(data))
    },[ user.email ])


    //Login with Password and Email =============================
    const logInEmailPassword = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
            alert("login sccess")
        })
        .catch(error => {
            setError(error.message)
            alert(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    // Log Out =====================================
    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }



    // Loading my order data =====================
    
    useEffect(()=>{
        fetch("https://murmuring-anchorage-99546.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])

//==============================================
    const handleCheckBox = event => {
        setIsRegis(event.target.checked);
        console.log(isRegis);
    }


    //Monitoring Stage Change =================
    useEffect((user) => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
                logOut();
            }
        })
     }, [auth]);

     //LOADING ALL PRODUCTS ====================
     useEffect(() =>{
        fetch("https://murmuring-anchorage-99546.herokuapp.com/products")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setProducts(data)
        })
    } ,[])

    return{
        user,
        error,
        orders,
        isRegis,
        scrWidth,
        isLoading,
        isAdmin,
        products,
        handleCheckBox,
        logInEmailPassword,
        googleSignIn,
        creatAnUser,
        logOut
    }
}

export default useFirebase;