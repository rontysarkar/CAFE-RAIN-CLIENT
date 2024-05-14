import AllFoods from '../../../assets/image/banner.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const OurClient = () => {
    return (
        <div>
            <div className={` w-full bg-center bg-cover h-[32rem] bg-no-repeat  my-20 `}
                style={
                    {
                        backgroundImage: `url(${AllFoods})`
                    }
                }
            >
                <div className="">
                    <div className='py-4 lg:py-16 '>
                    <h1 className='text-white text-center text-2xl lg:text-5xl font-semibold  '>CLIENTS ABOUT US</h1>
                    <p className='font-bold opacity-70 text-white text-center'>Testimonials</p>
                    </div>
                    <Swiper

                        slidesPerView={1}
                        // spaceBetween={}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        className="mySwiper"
                        autoplay={{
                            delay: 2000,

                        }}
                    >
                        <SwiperSlide>
                            <div className='w-1/2 mx-auto text-white font-bold  '>
                                <h1 className='text-center'>We been a regular at Cafe Rain for years now, and it never disappoints! From their delicious vegetarian options to their mouthwatering meat dishes, theres something for everyone. The cozy ambiance and friendly staff make it my go-to spot for any occasion</h1>
                                <div className='flex justify-center my-10'>
                                <div className="avatar flex flex-col justify-center items-center gap-4">
                                    <div className="w-16  rounded-full  ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/JRqgWT6/young-beautiful-girl-posing-black-leather-jacket-park.jpg" />
                                    </div>
                                    <h1 className='text-lg'>FlameMaster Grillhouse</h1>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-1/2 mx-auto text-white font-bold  '>
                                <h1 className='text-center'>I stumbled upon CAFE RAIN while exploring the neighborhood, and Im so glad I did! Their diverse menu impressed me, and the quality of ingredients shines through in every dish. Whether youre a meat lover or prefer plant-based options, this place has you covered. Cant wait to come back!</h1>
                                <div className='flex justify-center my-10'>
                                <div className="avatar flex flex-col justify-center items-center gap-4">
                                    <div className="w-16  rounded-full  ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/DM4h8Z5/portrait-blonde-woman-looking-photographer.jpg" />
                                    </div>
                                    <h1 className='text-lg'>SizzleWorks Grill & Bar</h1>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-1/2 mx-auto text-white font-bold  '>
                                <h1 className='text-center'>I recently celebrated my birthday at CAFE RAIN, and it was a memorable experience! The staff went above and beyond to ensure everything was perfect, and the food was absolutely delicious. Whether youre looking for a casual dinner or a special occasion, this place always delivers excellenc</h1>
                                <div className='flex justify-center my-10'>
                                <div className="avatar flex flex-col justify-center items-center gap-4">
                                    <div className="w-16  rounded-full  ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/m0bkHg0/portrait-beautiful-brunette-with-long-hair.jpg" />
                                    </div>
                                    <h1 className='text-lg'>EmberEats BBQ</h1>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-1/2 mx-auto text-white font-bold  '>
                                <h1 className='text-center'>My friends and I had a fantastic dining experience at CAFE RAIN. The ambiance is trendy yet inviting, and the service is top-notch. We sampled a variety of dishes, from their creative vegetarian options to their indulgent meat platters, and each one exceeded our expectations. Highly recommend</h1>
                                <div className='flex justify-center my-10'>
                                <div className="avatar flex flex-col justify-center items-center gap-4">
                                    <div className="w-16  rounded-full  ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/KjZSJL4/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-mod.jpg" />
                                    </div>
                                    <h1 className='text-lg'>Michael Chen</h1>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurClient;