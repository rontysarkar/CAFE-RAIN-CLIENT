import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TopFoods from "./TopFoods/TopFoods";

const Home = () => {
    return (
        <div className="bg-[#f4f1ea]" >
            <Helmet><title>CafeRain | Home</title></Helmet>
            <Banner/>
            <TopFoods/>
        </div>
    );
};

export default Home;