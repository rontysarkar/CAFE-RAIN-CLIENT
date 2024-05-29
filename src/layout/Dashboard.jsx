import { FaHome } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-4 mt-10 font-bold uppercase">
                    <>
                     {
                        isAdmin && <><li >
                        <NavLink  to={"allFoodItems"}>
                        <IoFastFoodOutline />All Foods ITems
                        </NavLink>
                    </li>
                     <li >
                        <NavLink to={"allUsers"}>
                            <FaHome />All Users
                        </NavLink>
                    </li> </>
                     }
                     <li >
                        <NavLink to={"addFood"}>
                        <MdFoodBank />Add Food Items
                        </NavLink>
                    </li>
                     <li >
                        <NavLink to={"myAddedFood"}>
                        <IoFastFoodOutline />My Added Food Items
                        </NavLink>
                    </li>
                    
                    
                    
                    
                    
                    </>
                   


                    {/* common navLink */}
                    <div className="divider"></div>
                    <li >
                        <NavLink to={"/"}>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={'/allFoods'}>
                        <IoFastFoodOutline /> All Foods
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;