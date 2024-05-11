import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
const Update = () => {
    const {user} = useAuth()
    const foodData = useLoaderData()
    const navigate = useNavigate()
    
    

    const { register, handleSubmit } = useForm()


    const onSubmit = (data) =>{
        data.added_by = {name:user?.displayName,email:user?.email}
        console.log(data)
        axios.put(`${import.meta.env.VITE_url}/foods/${foodData._id}`,data)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Update Product info Successfully ",
                    
                    icon: "success"
                  });
                  navigate('/myAddFood')
    
            }
        })
    }
   
    return (
        <section className="p-6    py-10  ">
        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 shadow-2xl w-1/2 ">
            <div className="  rounded-md shadow-sm     py-20  ">
                <h1 className="text-center text-3xl font-bold  opacity-80">Update Your  food Item</h1>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-10 px-20 ">

                    
                    <div className="col-span-full sm:col-span-3">
                        <label className="text-sm">Food Name</label>
                        <input defaultValue={foodData.food_name} {...register("food_name")} type="text" placeholder="Food Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label className="text-sm">Photo</label>
                        <input defaultValue={foodData.food_image} {...register("food_image")} type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label className="text-sm">Food Category</label>
                        <input defaultValue={foodData.food_category} {...register("food_category")} type="text" placeholder="Food Category" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                    </div>
                    
                    <div className="col-span-full sm:col-span-3">
                        <label className="text-sm">Price</label>
                        <input defaultValue={foodData.price} {...register("price")} type="text" placeholder="Price" className="w-full rounded-md focus:ring  h-14 px-4 border" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Short description</label>
                        <textarea defaultValue={foodData.description}  {...register("description")} type='text' placeholder="Short description" className="w-full rounded-md focus:ring  h-20 p-4 border " ></textarea>
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="city" className="text-sm">Origin</label>
                        <input defaultValue={foodData.food_origin} {...register("food_origin")} type="text" placeholder="Origin" className="w-full rounded-md focus:ring  h-14 px-4 border" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="zip" className="text-sm">Quantity</label>
                        <input defaultValue={foodData.quantity} {...register("quantity")} type="text" placeholder="Quantity" className="w-full rounded-md focus:ring  h-14 px-4 border" />
                    </div>
                   

                    <div className="col-span-full">
                        <input type="submit" value="Update Food" className="btn w-full mt-6 text-white  bg-primary" />
                    </div>



                </div>
            </div>

        </form>
    </section>
    );
};

export default Update;