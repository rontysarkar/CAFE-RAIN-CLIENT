// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const MoreDishes = () => {
    return (
        <>
            <Swiper

                slidesPerView={4}
                spaceBetween={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2000,

                }}
            >
                <SwiperSlide>
                    <article className="flex flex-col dark:bg-gray-50 ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-64 dark:bg-gray-500" src="https://i.ibb.co/s5KZnXS/delicious-burger-with-fresh-ingredients.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">BURGER</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">From Vegetarian to Three-Meat</h3>

                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-64 dark:bg-gray-500" src="https://i.ibb.co/74LsDg6/delicious-pasta-tray.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Eggplant Parmesan</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Mediterranean Melanzane Marvel</h3>
					
				</div>
			</article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-64 dark:bg-gray-500" src="https://i.ibb.co/vcG33F5/baked-sushi-with-wasabi-ginger-soy-sauce-bamboo-leaf.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Vegetarian Sushi Rolls</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Zen Garden Maki</h3>
					
				</div>
			</article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-64 dark:bg-gray-500" src="https://i.ibb.co/L96VrtX/chicken-roll-vegetables-greens-tomato-sauce-lettuce-side-view.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 text-primary">Bacon-Wrapped Scallops</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Swine and Sea Scallop Symphony</h3>
					
				</div>
			</article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-64 dark:bg-gray-500" src="https://i.ibb.co/QC3PqBp/high-angle-view-fresh-tasty-pizza-surrounded-with-vegetables-spices-herbs-kitchen-counter.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 text-primary">Three-Meat Pizza</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Triple Threat Meatza</h3>
					
				</div>
			</article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-64 dark:bg-gray-500" src="https://i.ibb.co/tQRk6rd/buckwheat-porridge-with-mushrooms-1.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 text-primary">Mushroom Risotto</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Savory Shroom Symphony</h3>
					
				</div>
			</article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-64 dark:bg-gray-500" src="https://i.ibb.co/yRT0FGQ/roasted-chicken.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 text-primary">Grilled Lemon Herb Chicken</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Citrus Herb Chicken Bliss</h3>
					
				</div>
			</article>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default MoreDishes;