import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faHome, faUserCircle, faInfoCircle, faCartArrowDown, faStoreAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({navState, setNavState}) => {
    // console.log(navState)
    const handleIsTrue = () => {
        if(navState){
            setNavState(false);
        }
        else{
            setNavState(true);
        }
    }

    const iHome = <FontAwesomeIcon icon={faHome} />
    const iUser = <FontAwesomeIcon icon={faUserCircle} />
    const iInfo = <FontAwesomeIcon icon={faInfoCircle} />
    const iAdmin = <FontAwesomeIcon icon={faSlidersH} />
    const iCart = <FontAwesomeIcon icon={faCartArrowDown} />
    const iShop = <FontAwesomeIcon icon={faStoreAlt} />

    return (
        <div className="flex flex-col justify-between h-screen text-center bg-gray-700">
            <div className="">
                <ul>
                    <NavLink to="/" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Home" : iHome}</li></NavLink>
                    <NavLink to="/explore" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Explore" : iShop}</li></NavLink>
                    <NavLink to="/my-order" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "My Order" : iCart}</li></NavLink>
                    <NavLink to="/dashboard" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Dashboard" : iAdmin}</li></NavLink>
                    <NavLink to="/about" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "About Us" : iInfo}</li></NavLink>
                    <NavLink to="/login" ><li className="truncate p-3 hover:bg-gray-400 text-white">{ navState ? "Log In" : iUser}</li></NavLink>
                </ul>
            </div>
            <div  onClick={handleIsTrue} className="border-2">
                 <button className="text-xl text-white"><li>&#8644;</li></button>
            </div>
        </div>
    );
};

export default Navigation;