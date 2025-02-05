
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Banner = () => {
    const sliderData = [
        {
            image: "https://i.imgur.com/MbReRtM.jpeg",
            heading: "Gear Up for Victory",
            description: "Find top-quality equipment for every sport - from football to running, we've got you covered.",
            ctaText: "Shop Now",
            extraInfo: "Free shipping on orders over $50"
        },
        {
            image: "https://i.imgur.com/5PHW6wo.jpeg",
            heading: "Unleash Your Potential",
            description: "Get the gear that gives you the edge - shop the best equipment for athletes.",
            ctaText: "Explore Now",
            extraInfo: "Exclusive deals on select items"
        },
        {
            image: "https://i.imgur.com/4fZQrGh.jpeg",
            heading: "Reach New Heights",
            description: "Equip yourself with premium sports gear to take your game to the next level.",
            ctaText: "Shop Now",
            extraInfo: "Get 20% off your first order"
        },
        {
            image: "https://i.imgur.com/9F6BjUc.jpeg",
            heading: "Train Like a Pro",
            description: "Find everything you need for professional-level performance.",
            ctaText: "Browse Equipment",
            extraInfo: "Free returns on all orders"
        },
        {
            image: "https://i.imgur.com/a2VnqZd.jpeg",
            heading: "Every Athlete's Choice",
            description: "From beginners to pros, we have the gear for every sport.",
            ctaText: "Shop Now",
            extraInfo: "Free shipping on orders over $50"
        }
    ];

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                className="w-full h-full"
            >
                {sliderData.map((slider, ind) => (
                    <SwiperSlide key={ind}>
                        <div className="items-center gap-3 ">
                            <div className="w-full">
                                <div className=" w-full relative h-[260px] md:h-[450px] lg:h-[90vh]">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={slider.image}
                                        alt={`Slider ${ind}`}
                                    />
                                </div>


                                <div className="
                               h-full w-full
                                flex flex-col  justify-center  absolute top-0 left-0 z-10 text-center text-gray-100 bg-gray-500 bg-opacity-45  space-y-1">
                                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2">{slider.heading}</h1>
                                    <p className="text-lg leading-5 md:w-9/12 mx-auto md:leading-6
                                      mb-6 px-4">{slider.description}</p>
                                    <p className="text-xs md:text-sm">{slider.extraInfo}</p>
                                </div>



                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <button
                    className="custom-prev hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                >
                    <FaChevronLeft className='text-orange-400 size-8' />
                </button>
                <button
                    className="custom-next hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
                >
                    <FaChevronRight className='text-orange-400 size-8' />
                </button>
            </Swiper>
        </>
    );
};

export default Banner;
