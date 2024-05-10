// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../../assets/image/img1.jpg'
import img2 from '../../../assets/image/img2.jpg'
import img3 from '../../../assets/image/img3.jpg'
import img4 from '../../../assets/image/img4.jpg'
import img5 from '../../../assets/image/img5.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slider img = {img1} text = 'DISCOVER CULINARY DELIGHTS'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img = {img2} text = 'WE GET WHAT YOU LOVE'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img = {img3} text = 'ORDER FOOD DELIVERY'  />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img = {img4} text = 'EXPERIENCE GLOBAL FLAVORS' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img = {img5} text = 'FEAST YOUR SENSES' />
                </SwiperSlide>
               
                

            </Swiper>
        </>
    );
};

export default Banner;