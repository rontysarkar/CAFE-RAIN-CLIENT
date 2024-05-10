import { useEffect, useState } from 'react';
import allFoods from '../../assets/image/foods1.jpg'
import AllFoodsCard from './AllFoodsCard';
import axios from 'axios';

const AllFoods = () => {
    const [foods,setFoods] = useState([])
    const [searchValue,setSearchValue] = useState('')
    // const foods = useFoodsItems()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_url}/foods?food_name=${searchValue}`)
        .then(res=>setFoods(res.data))
    },[searchValue])




    const handleSearch = e =>{
        e.preventDefault()
        console.log(e.target.name.value)
        setSearchValue(e.target.name.value)
        e.target.reset()
        // document.getElementById('myForm').reset()
        
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
                <form id='myForm' onSubmit={handleSearch} className='w-52 flex relative mx-auto lg:mx-0 '>
                    <label className="input  flex items-center gap-2 ">
                        <input type="text" name='name' className='grow py-2'  placeholder="Search..." />
                        
                    </label>
                    <input type="submit" value="Enter" className='py-2 px-4 bg-primary rounded-xl font-bold absolute right-0 bottom-1' />
                </form>
                <h1 className=" font-bold text-3xl lg:text-4xl text-center py-6">The best Receipies</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4  mx-auto my-10 ">
                    {
                        foods?.map(food => <AllFoodsCard food={food} key={food._id} />)
                    }


                </div>
            </div>
        </div>
    );
};

export default AllFoods;