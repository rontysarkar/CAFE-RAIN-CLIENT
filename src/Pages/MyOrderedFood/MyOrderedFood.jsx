import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const MyOrderedFood = () => {
    const [data,setData] = useState()
    const {user} = useAuth()

    

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_url}/purchaseFoods?email=${user?.email}`,{withCredentials:true})
        .then(res=>setData(res.data))
    },[user])

    const handleDelete = (id)=>{

        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                 
                 axios.delete(`${import.meta.env.VITE_url}/purchaseFoods/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        const remainingData = data.filter(food=>food._id !== id)
                        setData(remainingData)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Order food has been deleted.",
                            icon: "success"
                          });
                    }
                })



              
            }
          });






        
    }

    return (
        <div className="overflow-x-auto xl:mx-10  my-10  ">
            
            <table className="table  ">
                {/* head */}
                <thead>
                    <tr>

                        <th className="text-base ">Foods Name</th>
                        <th className="text-base ">Food Owner</th>
                        <th className="text-base ">Added time</th>
                        <th className="text-base ">Quantity</th>
                        <th className="text-base ">Price</th>
                        <th className="text-base ">DELETE</th>
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
                                <span className="text-lg text-primary">{food.food_owner}</span>
                                <br />

                            </td>
                            <td>
                                <span className="text-lg text-primary">{food.buying_date}</span>
                                <br />

                            </td>
                            <td ><span className="text-xl ml-5 text-primary">{food.quantity}</span></td>
                            <td><span className=" text-orange-600">{food.price}</span></td>
                            <th>
                                <Link onClick={()=> handleDelete(food._id)}  ><RiDeleteBin6Fill  className="text-2xl ml-5 text-primary"/></Link>
                            </th>
                            
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyOrderedFood;