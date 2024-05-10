import axios from "axios";
import { useEffect, useState } from "react";

const useFoodsItems = () => {
    const [foodsItems,setFoodsItems] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_url}/foods`)
        .then(res=>setFoodsItems(res.data))
    },[])

    return foodsItems
    
};

export default useFoodsItems;