import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import personLogo from '../../assets/image/people.png'
import logo from '../../../public/logo.png'
import axios from "axios";

const NavBar = () => {
    const { user, LogOut, loading } = useAuth()

    
    const pageLink = <>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold  text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"/"}
        >
            <li>
                <span>Home</span>
            </li>
        </NavLink>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"allFoods"}
        >
            <li>
                <span>All Foods</span>
            </li>
        </NavLink>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold  text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"gallery"}
        >
            <li>
                <span>Gallery</span>
            </li>
        </NavLink>
    </>

    const handleLogout = () =>{
        axios.get(`${import.meta.env.VITE_url}/logout`,{withCredentials:true})
        .then(res=>console.log(res.data))
        LogOut()
        
    }
    return (
        <div className="navbar bg-transparent 2xl:px-32 lg:h-[64px] shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* mobile page link */}

                        {pageLink}
                    </ul>
                </div>
                <div className="">
                    
                <a className="font-extrabold text-xl flex justify-center">CAFE <img className="w-7" src={logo} alt="" /> <span className="text-orange-500">RAIN</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {pageLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    loading ? <span className="loading loading-ring loading-lg"></span> : user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border ">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL ? user.photoURL : personLogo}
                                />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 ">
                            
                            <li className="font-bold hover:bg-primary hover:text-white hover:rounded-3xl"><Link to={'/dashboard'}>Dashboard</Link></li>
                            {/* <li className="font-bold hover:bg-primary hover:text-white hover:rounded-3xl"><Link to={'/myAddFood'}>My added food items</Link></li> */}
                            {/* <li className="font-bold hover:bg-primary hover:text-white hover:rounded-3xl"><Link to={'/addFood'}>Add a food item</Link></li> */}
                            <li className="font-bold hover:bg-primary hover:text-white hover:rounded-3xl"><Link to={'/myOrderedFood'}>My Ordered food items</Link></li>
                            <li className="font-bold hover:bg-primary hover:text-white hover:rounded-3xl" onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div> : <Link to={'/login'}><button className="w-20 px-4 bg-primary text-white py-1 rounded-sm">Login</button></Link>
                }



            </div>
        </div>
    );
};

export default NavBar;