import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './Hooks/useAuth';

const Login = () => {
    const { googleSignIn, handleCheckBox, creatAnUser, logInEmailPassword, isLoading, user, scrWidth, isRegis } = useAuth()
    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleName = event => {
        setName(event.target.value)
     }
    const handleEmail = event => {
        setEmail(event.target.value)
     }
     const handlePassword = event => {
        setPassword(event.target.value)
     }

    const handleGoogleSignIn = () => {
        googleSignIn( location, history)
    }


    const handleCreatUser = e =>{
        creatAnUser(email, password, name, history )
        e.preventDefault()
    }

    const handlePassSignIn = e =>{
        logInEmailPassword(email, password, location, history)
        e.preventDefault()
    }
    return (
        <div className="flex" >
            <div className=" border-2 shadow-2xl rounded w-96 h-screen">
                <div className="flex justify-around ">
                    <h1 onClick={handleGoogleSignIn} className="px-1.5 w-40 rounded-full border-2 mt-10  hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer">Google Sign In</h1>
                </div><br/>
                <div className=" flex flex-col items-center p-2">
                    <h1 className="font-bold">{ isRegis ?  "SIGN UP" : "SIGN IN"}</h1>
                    <form onSubmit={ isRegis ? handleCreatUser : handlePassSignIn } className="flex flex-col items-center my-1">
                        { isRegis && <input type="text" onBlur={ handleName } name="name" id="name" placeholder="Enter Your Name" required className="bg-transparent border-b-2 text-center border-blue-700" /> } <br />
                        <input onBlur={ handleEmail } type="email" name="email" id="email" placeholder="Enter Your Email" required className="bg-transparent border-b-2 text-center border-blue-700" /> <br />
                        <input onBlur={ handlePassword } type="password" name="password" id="password" placeholder="Enter Password" required className="bg-transparent border-b-2  text-center border-blue-700" /> <br />
                        <input type="submit" value={ isRegis ?  "Sign Up" : "Sign In"} className="px-2 rounded-full border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer" />
                    </form>
                    <p ><label htmlFor="register" className="px-2">Sign Up</label>
                     <input onChange={handleCheckBox} type="checkbox" name="register" id="register" /></p>
                </div>
            </div>
            {
                scrWidth || <div style={{ backgroundImage: `url("https://m.media-amazon.com/images/I/61JLG9VEm8S._SL1173_.jpg")`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"bottom" }} className='w-full flex justify-around items-center text-white text-4xl'>
                <h1 className='w-full flex justify-around bg-black bg-opacity-50 h-screen items-center text-white text-4xl'>Buy The Best Furniture For Your Home</h1>
            </div>
            }
            
        </div>
    );
};

export default Login;