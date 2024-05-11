import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const MyAddFood = () => {
    const {user} = useAuth()
    const [data,setData] = useState()


    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_url}/foods?name=${user?.displayName}&&email=${user?.email}`)
        .then(res=>setData(res.data))
    },[user])

    return (
        <div className="overflow-x-auto xl:mx-10  my-10  ">
            
            <table className="table  ">
                {/* head */}
                <thead>
                    <tr>

                        <th className="text-base ">Foods Name</th>
                        <th className="text-base ">Foods Category</th>
                        <th className="text-base ">Quantity</th>
                        <th className="text-base ">Price</th>
                        <th className="text-base ">UPDATE</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        data?.map(food => <tr key={food._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={food.food_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{food.food_name}</div>
                                        <div className="text-sm opacity-50">{food.food_origin}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {food.food_category}
                                <br />

                            </td>
                            <td ><span className="text-xl ml-5">{food.quantity}</span></td>
                            <td><span className=" text-orange-600">{food.price}</span></td>
                            <th>
                                <Link to={`/update/${food._id}`} ><FaEdit  className="text-2xl ml-5 text-primary"/></Link>
                                {/* <Link to={`/updateData/${food._id}`}><button className="w-24 px-6 hover:bg-transparent hover:text-black bg-primary text-white py-1 rounded-sm border"></button></Link> */}
                            </th>
                            
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyAddFood;