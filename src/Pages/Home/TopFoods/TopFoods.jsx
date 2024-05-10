import { Link } from "react-router-dom";
import useFoodsItems from "../../../Hooks/useFoodsItems";
import TopFoodsCard from "./TopFoodsCard";

const TopFoods = () => {
    const foods = useFoodsItems()
    console.log(foods)



    return (
        <div className="xl:px-56 py-32">

            <div className=" text-center lg:text-start" >
                <p className="text-secondary font-bold py-2">Crispy, Every Bite Taste</p>
                <h1 className=" font-extrabold text-3xl lg:text-6xl ">Popular Food Items</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12  mx-auto my-10 ">
                {
                    foods?.map(food => <TopFoodsCard food={food} key={food._id} />).slice(0, 6)
                }
                

            </div>
            <div className=" px-6 flex justify-end items-center mr-10">
                
                <div >
                <Link to={'/allFoods'}><button className=" w-32 px-2  bg-primary text-white py-2 rounded-sm ">All Foods</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopFoods;