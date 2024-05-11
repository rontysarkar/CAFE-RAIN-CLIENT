import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import foodAi from '../../assets/foodAi.json'
import Lottie from "lottie-react";
import axios from "axios";
import Swal from "sweetalert2";

const FoodPurchase = () => {
    const {user} = useAuth()
    const food = useLoaderData()
    console.log(food)
    const newDate = new Date().toLocaleDateString('de-DE');

    const handlePurchase = e =>{
        e.preventDefault()
        const form = e.target ;
        const food_name = form.name.value;
        const price = form.price.value;
        const buyer_name = form.buyerName.value;
        const buyer_Email  = form.buyerEmail.value;
        const quantity = form.quantity.value;
        const buying_date = new Date().toLocaleDateString("de-DE");

        const foodInfo = {
            food_name,price,buyer_name,buyer_Email,quantity,buying_date
        }
        
        axios.post(`${import.meta.env.VITE_url}/purchaseFoods`,foodInfo)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: "Successfully Purchase ",
                    
                    icon: "success"
                  });
            }
        })


        

    }
    return (

        <section className="p-4 lg:p-8 dark:bg-gray-100 ">
            <div className="container mx-auto space-y-12 min-h-[calc(100vh-277px)] flex items-center justify-center ">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row w-full h-[600px]  ">
                    <div className="w-1/2">
                    <Lottie className="size-10/12" animationData={foodAi} />
                    </div>
                    
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-slate-500 ">
           <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white my-10">Purchase Now</h2>

           <form onSubmit={handlePurchase}>
             <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Food Name </label>
                <input defaultValue={food.food_name} name="name" type="text" className="block w-full px-4 py-2 mt-2  dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Price</label>
                <input defaultValue={food.price} name='price' type="text" className="block w-full px-4 py-2 mt-2  dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Quantity</label>
                <input placeholder="Quantity" name="quantity" type="text" className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Buyer Name</label>
                <input defaultValue={user?.displayName} name="buyerName" type="text" readOnly className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Buyer Email</label>
                <input defaultValue={user?.email} name="buyerEmail" type="email" readOnly className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Buying Date</label>
                <input name="buyingDate" type="text" defaultValue={newDate} readOnly className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-black bg-slate-300 hover:bg-primary hover:text-white rounded-xl ">Purchase</button>
        </div>
           </form>
           </section>
                    
                </div>

            </div>
        </section>
    
    );
};

export default FoodPurchase;



//     <section className="p-6    py-10  ">
    //     <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 shadow-2xl ">
    //         <div className="  rounded-md shadow-sm     py-20  ">
    //             <h1 className="text-center text-3xl font-bold  opacity-80">Add New Tourists Spot</h1>
    //             <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-10 px-20 ">

                    
    //                 <div className="col-span-full sm:col-span-3">
    //                     <label className="text-sm">Tourists Spot Name</label>
    //                     <input {...register("tourists_spot_name")} type="text" placeholder="Tourists Spot Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
    //                 </div>
    //                 <div className="col-span-full sm:col-span-3">
    //                     <label className="text-sm">Photo</label>
    //                     <input {...register("image")} type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
    //                 </div>
    //                 <div className="col-span-full sm:col-span-3">
    //                     <label className="text-sm">Country Name</label>
    //                     <select {...register("country_Name")} type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
    //                         <option defaultValue={"Select Country"}>Select Country</option>
    //                         <option value="Bangladesh">Bangladesh</option>
    //                         <option value="Thailand">Thailand</option>
    //                         <option value="Indonesia">Indonesia</option>
    //                         <option value="Malaysia">Malaysia</option>
    //                         <option value="Vietnam">Vietnam</option>
    //                         <option value="Cambodia">Cambodia</option>
    //                     </select>
    //                 </div>
    //                 <div className="col-span-full sm:col-span-3">
    //                     <label className="text-sm">Average Cost</label>
    //                     <input {...register("average_cost")} type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring  h-14 px-4 border" />
    //                 </div>
    //                 <div className="col-span-full">
    //                     <label htmlFor="address" className="text-sm">Short description</label>
    //                     <textarea  {...register("short_description")} type='text' placeholder="Short description" className="w-full rounded-md focus:ring  h-20 p-4 border " ></textarea>
    //                 </div>
    //                 <div className="col-span-full sm:col-span-2">
    //                     <label htmlFor="city" className="text-sm">Location</label>
    //                     <input {...register("location")} type="text" placeholder="Location" className="w-full rounded-md focus:ring  h-14 px-4 border" />
    //                 </div>
    //                 <div className="col-span-full sm:col-span-2">
    //                     <label htmlFor="zip" className="text-sm">Total Visitors Per Year</label>
    //                     <input {...register("totalVisitorsPerYear")} type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring  h-14 px-4 border" />
    //                 </div>
    //                 <div className="col-span-full sm:col-span-1">
    //                     <label htmlFor="state" className="text-sm">Travel time</label>
    //                     <input {...register("travel_time")} type='text' placeholder="Travel time" className="w-full rounded-md focus:ring  h-14 px-4 border" >
    //                     </input>
    //                 </div>
    //                 <div className="col-span-full sm:col-span-1">
    //                     <label htmlFor="state" className="text-sm">Seasonality</label>
    //                     <select {...register("seasonality")} type='text' placeholder="Select Season" className="w-full rounded-md focus:ring   h-14 px-4 border" >
    //                         <option defaultValue={"Select Season"}>Select Season</option>
    //                         <option value="Summer">Summer</option>
    //                         <option value="Winter">Winter</option>
    //                     </select>
    //                 </div>

    //                 <div className="col-span-full">
    //                     <input type="submit" value="Add Now" className="btn w-full mt-6 text-white  bg-primary" />
    //                 </div>



    //             </div>
    //         </div>

    //     </form>
    // </section>




    // <div className="container mx-auto space-y-12 min-h-[calc(100vh-277px)] flex items-center justify-center" >
    //         <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    //        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Purchase Now</h2>

    //        <form>
    //     <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
    //         <div>
    //             <label className="text-gray-700 dark:text-gray-200" >Username</label>
    //             <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
    //         </div>

    //         <div>
    //             <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
    //             <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
    //         </div>

    //         <div>
    //             <label className="text-gray-700 dark:text-gray-200" >Password</label>
    //             <input name="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
    //         </div>

    //         <div>
    //             <label className="text-gray-700 dark:text-gray-200" >Password Confirmation</label>
    //             <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
    //         </div>
    //     </div>

    //     <div className="flex justify-end mt-6">
    //         <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
    //     </div>
    //        </form>
    //    </section>
    //     </div>