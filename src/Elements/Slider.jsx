import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

const Slider = () => {

    const MySlider = () => {
        return (
            <div className='static z-0 my-[3%] mx-0 w-auto border-[#ff360095] overflow-hidden fredoka-normal'>
                <Swiper
                    effect={'coverflow'}
                    spaceBetween={0}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.25}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    pagination={{
                        clickable: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <div className='h-fit'>
                            <h1 className='mx-[2.11%] mb-1.5 pb-1.25 font-semibold font-stretched text-xs sm:text-2xl text-[#ff3600] text-shadow-lg text-shadow-[#00000010] text-center'>Clean moments build trust between pets and owners.</h1>
                            {/* <hr className='my-2 mx-[3%] text-shadow-lg' /> */}
                            <img className='m-[2%] my-0 h-[300px] md:h-[600px] w-[96%] object-cover rounded-lg' src="/pet-care-1.png" alt="dog taking shower with his master" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <div className='h-fit'>
                            <h1 className='mx-[2.11%] mb-1.5 pb-1.25 font-semibold font-stretched text-xs sm:text-2xl text-[#ff3600] text-shadow-lg text-shadow-[#00000010] text-center'>Playful moments strengthen the bond you share.</h1>
                            {/* <hr className='my-2 mx-[3%] text-shadow-lg' /> */}
                            <img className='m-[2%] my-0 h-[300px] md:h-[600px] w-[96%] object-cover rounded-lg' src="/pet-care-2.png" alt="young lady playing with dog" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <div className='h-fit'>
                            <h1 className='mx-[2.11%] mb-1.5 pb-1.25 font-semibold font-stretched text-xs sm:text-2xl text-[#ff3600] text-shadow-lg text-shadow-[#00000010] text-center'>A fresh bath brings comfort and happy paws.</h1>
                            {/* <hr className='my-2 mx-[3%] text-shadow-lg' /> */}
                            <img className='m-[2%] my-0 h-[300px] md:h-[600px] w-[96%] object-cover rounded-lg' src="/pet-care-3.png" alt="dog taking shower by car washer hose pipe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <div className='h-fit'>
                            <h1 className='mx-[2.11%] mb-1.5 pb-1.25 font-semibold font-stretched text-xs sm:text-2xl text-[#ff3600] text-shadow-lg text-shadow-[#00000010] text-center'>Active dogs stay healthy, cheerful, and confident.</h1>
                            {/* <hr className='my-2 mx-[3%] text-shadow-lg' /> */}
                            <img className='m-[2%] my-0 h-[300px] md:h-[600px] w-[96%] object-cover rounded-lg' src="/pet-care-4.png" alt="dog playing with a plastic bone in a field" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <div className='h-fit'>
                            <h1 className='mx-[2.11%] mb-1.5 pb-1.25 font-semibold font-stretched text-xs sm:text-2xl text-[#ff3600] text-shadow-lg text-shadow-[#00000010] text-center'>Vaccinated pets live safer, stronger, happier lives.</h1>
                            {/* <hr className='my-2 mx-[3%] text-shadow-lg' /> */}
                            <img className='m-[2%] my-0 h-[300px] md:h-[600px] w-[96%] object-cover rounded-lg' src="/pet-care-5.png" alt="Dog taking vaccine while playing" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <div className='h-fit'>
                            <h1 className='mx-[2.11%] mb-1.5 pb-1.25 font-semibold font-stretched text-xs sm:text-2xl text-[#ff3600] text-shadow-lg text-shadow-[#00000010] text-center'>Professional care keeps your beloved pet protected.</h1>
                            {/* <hr className='my-2 mx-[3%] text-shadow-lg' /> */}
                            <img className='m-[2%] my-0 h-[300px] md:h-[600px] w-[96%] object-cover rounded-lg' src="/pet-care-6.png" alt="lady doctor giving vaccine to dog" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }

    return (
        <div>
            {MySlider()}
        </div>
    );
};

export default Slider;