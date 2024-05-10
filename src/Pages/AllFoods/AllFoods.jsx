import useFoodsItems from '../../Hooks/useFoodsItems';
import allFoods from '../../assets/image/foods1.jpg'
import AllFoodsCard from './AllFoodsCard';

const AllFoods = () => {
    const foods = useFoodsItems()

    const handleSearch = e =>{
        e.preventDefault()
        console.log(e.target.name.value)
        e.target.name.reset()
        
    }

    return (
        <div>
            <div className={` w-full bg-center bg-cover h-[32rem] bg-no-repeat `}
                style={
                    {
                        backgroundImage: `url(${allFoods})`
                    }
                }
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-white lg:text-7xl"> All Popular Foods Items</h1>
                    </div>
                </div>
            </div>
            <div className="xl:px-56 py-24">
                <form onSubmit={handleSearch} className='w-52 flex relative mx-auto lg:mx-0 '>
                    <label className="input  flex items-center gap-2 ">
                        <input type="text" name='name' className='grow py-2'  placeholder="Search..." />
                        
                    </label>
                    <input type="submit" value="Enter" className='py-2 px-4 bg-primary rounded-xl font-bold absolute right-0 bottom-1' />
                </form>
                <h1 className=" font-bold text-3xl lg:text-4xl text-center py-6">The best Receipies</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4  mx-auto my-10 ">
                    {
                        foods?.map(food => <AllFoodsCard food={food} key={food._id} />)
                    }


                </div>
            </div>
        </div>
    );
};

export default AllFoods;