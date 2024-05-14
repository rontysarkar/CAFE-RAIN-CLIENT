import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TopFoods from "./TopFoods/TopFoods";
import MoreDishes from "./MoreDishes/MoreDishes";
import OurClient from "./OurClient/OurClient";
import Customer from "./Customer";

const Home = () => {
    return (
        <div className="bg-[#f4f1ea]" >
            <Helmet><title>CafeRain | Home</title></Helmet>
            <Banner />
            <TopFoods />
            <div className="container mx-auto my-10">
                <div className="text-center space-y-2 mb-10">
                    <h1 className="text-3xl lg:text-5xl font-semibold">MORE THAN 20,000 DISHES TO ORDER!</h1>
                    <p className="font-bold text-primary">Welcome to The Biggest Network of Food Ordering & Delivery</p>
                </div>
                <MoreDishes />
            </div>
            <OurClient/>
            <Customer/>
            
        </div>
    );
};

export default Home;