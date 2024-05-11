import { useEffect, useState } from 'react';
import allFoods from '../../assets/image/gallery3.jpg'
import axios from 'axios';
import GalleryCard from './GalleryCard';



const Gallery = () => {
    const [galleryItem,setGalleryItem] = useState()


    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_url}/gallery`)
        .then(res=>{
            setGalleryItem(res.data)
            console.log(res.data)
        })
    },[])




    const handleSubmit = () => {
        const name = document.getElementById('name')?.value;
        const feedback = document.getElementById('feedback')?.value;
        const image = document.getElementById('image')?.value;
        console.log(name,feedback,image)

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
                        <h1 className="text-3xl font-extrabold text-white lg:text-7xl">Gallery</h1>
                    </div>
                </div>
            </div>
            <div>
                <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        {
                            galleryItem?.map(item=><GalleryCard key={item._id} item={item} />)
                        }
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div className='flex justify-center my-6 '>
                    <button className="btn bg-primary text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Feedback</button>
                    </div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Share Your Experience: Submit Feedback and Images</p>
                            <div className="modal-action justify-center ">
                                <form  method="dialog" className=' w-full'>
                                    {/* if there is a button in form, it will close the modal */}
                                    <label className="block mt-3" >
                                        <input id='name'  type="text" name="name" defaultValue={'Ronty'}  className="block w-full px-4 py-3 text-sm border" />
                                    </label>
                                    <label className="block mt-3" >
                                        <input id='feedback' type="text"   placeholder="Feedback or experience"  className="block w-full px-4 py-3 text-sm border" />
                                    </label>
                                    <label className="block mt-3" >
                                        <input  type="text" id="image"  placeholder="Photo Url"  className="block  w-full px-4 py-3 text-sm border" />
                                    </label>
                                    <div className='flex justify-center my-4'>
                                    <button onClick={handleSubmit} className="btn bg-primary text-white w-full font-bold">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </section>
            </div>

        </div>
    );
};

export default Gallery;