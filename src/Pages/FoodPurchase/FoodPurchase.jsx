import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import foodAi from '../../assets/foodAi.json'
import Lottie from "lottie-react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const FoodPurchase = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const food = useLoaderData()
    const newDate = new Date().toLocaleDateString('de-DE');


    let purchaseBtn = ['px-8', 'py-2.5', 'leading-5', 'bg-primary', 'text-white', 'rounded-xl', 'hover:bg-slate-50', 'hover:text-black']

    if (food.quantity <= 0) {
        purchaseBtn.push('btn-disabled')
        Swal.fire({
            icon: "error",
            title: "Item is not available.    ",
            text: "We apologize, but the item you are looking for is currently unavailable. We are working diligently to restock it as soon as possible....",
            footer: '<a href="#"> Thank you for your patience and understanding</a>'
        });
    }

    const handlePurchase = e => {
        e.preventDefault()
        const form = e.target;
        const food_name = form.name.value;
        const price = form.price.value;
        const buyer_name = form.buyerName.value;
        const buyer_Email = form.buyerEmail.value;
        const quantity = parseInt(form.quantity.value);
        const food_owner = food.added_by.name;
        const food_image = food.food_image
        const buying_date = new Date().toLocaleDateString("de-DE");

        if (!quantity) {
            return Swal.fire({
                icon: "error",
                title: " Please specify the quantity you wish to purchase",

                footer: '<a href="#">  Thank you for your understanding</a>'
            });
        }



        if (food.added_by.email === buyer_Email) {
            return Swal.fire({
                icon: "error",
                title: " Sorry ",
                text: `We're sorry, but you cannot purchase your own added food items. ...`,
                footer: '<a href="#">  Thank you for your understanding</a>'
            });
        }



        if (quantity > food.quantity) {
            return Swal.fire({
                icon: "error",
                title: " Sorry ",
                text: `We're sorry, but you cannot purchase more than ${food.quantity} quantities of this food item at a time. The maximum quantity available for purchase is ${food.quantity}...`,
                footer: '<a href="#">  Thank you for your understanding</a>'
            });
        }
        // payment new future payment 





        const foodInfo = {
            food_name, price, buyer_name, buyer_Email, quantity, buying_date, food_owner, food_image
        }

        axios.post(`${import.meta.env.VITE_url}/purchaseFoods`, foodInfo)
            .then(res => {
                axios.patch(`${import.meta.env.VITE_url}/foods/${food._id}`, { quantity })
                    .then(res => console.log(res.data))

                if (res.data.insertedId) {
                    navigate('/allFoods')
                    Swal.fire({
                        title: "Successfully Purchase ",
                        icon: "success"
                    });
                }
            })




    }



    return (

        <section className="p-4 lg:p-8 dark:bg-gray-100  ">
            <Helmet><title>CafeRain | purchase</title></Helmet>
            <div className="container mx-auto space-y-12 min-h-[calc(100vh-277px)] flex items-center justify-center ">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row w-full lg:h-[600px] gap-10 ">
                    <div className="w-full flex justify-center ">
                        <Lottie className="size-10/12" animationData={foodAi} />
                    </div>

                    <section className="max-w-8xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-slate-500 xl:w-[1000px] ">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white my-10">Purchase Now</h2>

                        <form onSubmit={handlePurchase}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Food Name </label>
                                    <input defaultValue={food.food_name} name="name" type="text" className="block w-full px-4 py-2 mt-2  dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Price</label>
                                    <input defaultValue={food.price} name='price' type="text" className="block w-full px-4 py-2 mt-2  dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>



                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Your Name</label>
                                    <input defaultValue={user?.displayName} name="buyerName" type="text" readOnly className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Your Email</label>
                                    <input defaultValue={user?.email} name="buyerEmail" type="email" readOnly className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Buying Date</label>
                                    <input name="buyingDate" type="text" defaultValue={newDate} readOnly className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" >Quantity</label>
                                    <input placeholder="Please enter quantity" name="quantity" type="text" className="block w-full px-4 py-2 mt-2 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div className="flex justify-center mt-10">
                                
                                <button id="myBtn" className={purchaseBtn.join(" ")}>Purchase</button>
                            </div>
                            
                        </form>
                    </section>

                </div>

            </div>
        </section>

    );
};

export default FoodPurchase;


