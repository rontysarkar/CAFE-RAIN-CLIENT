import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineProductionQuantityLimits, MdPersonPin } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const SingleFoods = () => {
    const singleFoods = useLoaderData()
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 ">
            <Helmet><title>CafeRain | Details</title></Helmet>
            <div className="container mx-auto space-y-12 min-h-[calc(100vh-277px)] flex items-center justify-center ">
                <div className="flex flex-col  rounded-md shadow-sm lg:flex-row  ">
                    <div className="lg:w-8/12 h-[600px]">
                        <img src={singleFoods?.food_image} alt="" className=" object-cover h-full w-full" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration='1000' className="  xl:w-1/2 mx-auto rounded-lg  grid items-center ">

                        <div className="flex flex-col justify-between p-6 space-y-8 ">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{singleFoods.food_name}</h2>
                                <h3 className="text-xl font-bold flex items-center  gap-2"><span className='text-primary opacity-80'>
                                    {singleFoods.food_category}</span></h3>
                                <p className=" opacity-80">{singleFoods.description}......</p>
                                <h1 data-aos='fade-up-right' data-aos-duration='100' className='py-2  flex items-center gap-1 font-medium text-xs lg:text-sm '><IoLocationOutline className="text-primary" />Food Origin : <span >{singleFoods?.food_origin}</span></h1>

                                
                                    <h1 className='  flex items-center gap-1 font-medium'><MdOutlineProductionQuantityLimits className="text-primary" />Available : <span className="text-primary">{singleFoods.quantity}</span>quantity</h1>
                                    <h1 className='font-medium flex items-center gap-1 '><MdPersonPin className="text-primary" />Name :{singleFoods?.added_by.name}</h1>
                                    <h4 className='font-semibold flex items-center gap-1   '><MdOutlineMailOutline className="text-primary" /><span>Email :{singleFoods?.added_by.email}</span></h4>
                                    <h4 className='font-bold flex items-center gap-1   '>TOTAL PURCHASE :<span className="text-primary">{singleFoods?.purchase_count} </span></h4>

                                
                                {/* <h4 className='font-bold text-lg pl-2 text-[#1db2ff]'>{1200}</h4> */}
                            </div>
                            <div className="flex justify-between">
                                <Link to={`/foodPurchase/${singleFoods._id}`} ><button className=" px-4 py-2 text-primary bg-transparent font-semibold  rounded-lg border border-primary hover:bg-primary hover:text-white ">Purchase</button></Link>
                                <div>
                                    <h1 className='font-bold text-xl  text-primary'>{singleFoods?.price}</h1>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SingleFoods;


// {/* <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
//     {/* <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span> */}
//     <h3 className="text-3xl font-bold">{singleFoods?.food_name}</h3>
//     <p className="my-6 dark:text-gray-600">{singleFoods.description}</p>
//     <h1 className="text-xl">Food Origin : {singleFoods?.food_origin}</h1>
//     <h1 className="text-xl">Name : {singleFoods?.added_by.name}</h1>
//     <h1 className="text-xl">Email : {singleFoods?.added_by.email}</h1>
//     <button type="button" className="self-start btn">Purchase</button>
// </div> */}