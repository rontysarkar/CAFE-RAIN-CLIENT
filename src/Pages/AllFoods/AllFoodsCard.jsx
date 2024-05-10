import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import noImage from '../../assets/image/noImage.jpg'

const AllFoodsCard = ({ food }) => {
    return (
        <div className=" mx-auto lg:mx-0 w-[300px] rounded-2xl shadow-md dark:bg-gray-50   ">
            <img src={food.food_image ? food.food_image : noImage} alt="" className="object-cover object-center w-full rounded-2xl h-72 " />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="text-xl font-semibold tracking-wide">{food.food_name}</h2>
                            <p className=" text-primary">{food.food_category} </p>
                            <p className=" text-primary">Quantity : {food.quantity} </p>
                        </div>
                        <div >
                            <p className='text-primary py-2'>{food.price}</p>
                            <Link to={`/singleFoods/${food._id}`}><button className=" px-2  bg-secondary  hover:bg-primary text-white rounded-sm">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodsCard;

AllFoodsCard.propTypes = {
    food: PropTypes.object
}