import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllFoodItems = () => {
    const {data : allFoods = [],refetch} =useQuery({
        queryKey:['allFoodsItems'],
        queryFn:async()=>{
            const {data} = await axios(`${import.meta.env.VITE_url}/allFoods`)
            return data
        }
    })



    const handleDelete = (id) =>{
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

                axios.delete(`${import.meta.env.VITE_url}/foods/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `deleted item successfully`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
                
                
           
            }
          });

    }

    return (
        <div>
            
            <div className="">
                <h1 className="text-2xl font-bold uppercase">All Users :</h1>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-base uppercase bg-orange-300">
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allFoods.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.food_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </th>
                                <td>{item.food_name}</td>
                                <td>{item.price}</td>

                                <th>
                                    <Link to={`/dashboard/manageItems/${item._id}`}><button className="btn btn-ghost btn-xs text-2xl text-orange-300"><FaRegEdit /></button></Link>
                                </th>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-xl text-red-600"><FaTrashAlt/></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFoodItems;