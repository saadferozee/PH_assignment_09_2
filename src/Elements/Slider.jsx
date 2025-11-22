import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

const Slider = () => {

    const MySlider = () => {
        return (
            <div className='static z-0 my-[3%] mx-0 w-auto border-[#ff360095] overflow-hidden'>
                <Swiper
                    effect={'coverflow'}
                    spaceBetween={0}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.25}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={4000}
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
                    <SwiperSlide className='w-[55%] flex flex-col justify-center items-center'>
                        <div>
                            <img className='m-[2%] mb-0 w-[96%] object-cover rounded-2xl border-4 border-[#ff360095]' src="../../public/photos/pet-care-1.png" alt="dog taking shower with his master" />
                            <h1 className='font-normal mt-[1%] mb-[4%] text-3xl text-[#ff3600] text-shadow-lg text-center'>Clean moments build trust between pets and owners.</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[55%] flex flex-col justify-center items-center'>
                        <div>
                            <img className='m-[2%] mb-0 w-[96%] object-cover rounded-2xl border-4 border-[#ff360095]' src="../../public/photos/pet-care-2.png" alt="young lady playing with dog" />
                            <h1 className='font-normal mt-[1%] mb-[4%] text-3xl text-[#ff3600] text-shadow-lg text-center'>Playful moments strengthen the bond you share.</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[55%] flex flex-col justify-center items-center'>
                        <div>
                            <img className='m-[2%] mb-0 w-[96%] object-cover rounded-2xl border-4 border-[#ff360095]' src="../../public/photos/pet-care-3.png" alt="dog taking shower by car washer hose pipe" />
                            <h1 className='font-normal mt-[1%] mb-[4%] text-3xl text-[#ff3600] text-shadow-lg text-center'>A fresh bath brings comfort and happy paws.</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[55%] flex flex-col justify-center items-center'>
                        <div>
                            <img className='m-[2%] mb-0 w-[96%] object-cover rounded-2xl border-4 border-[#ff360095]' src="../../public/photos/pet-care-4.png" alt="dog playing with a plastic bone in a field" />
                            <h1 className='font-normal mt-[1%] mb-[4%] text-3xl text-[#ff3600] text-shadow-lg text-center'>Active dogs stay healthy, cheerful, and confident.</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[55%] flex flex-col justify-center items-center'>
                        <div>
                            <img className='m-[2%] mb-0 w-[96%] object-cover rounded-2xl border-4 border-[#ff360095]' src="../../public/photos/pet-care-5.png" alt="Dog taking vaccine while playing" />
                            <h1 className='font-normal mt-[1%] mb-[4%] text-3xl text-[#ff3600] text-shadow-lg text-center'>Vaccinated pets live safer, stronger, happier lives.</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[55%] flex flex-col justify-center items-center'>
                        <div>
                            <img className='m-[2%] mb-0 w-[96%] object-cover rounded-2xl border-4 border-[#ff360095]' src="../../public/photos/pet-care-6.png" alt="lady doctor giving vaccine to dog" />
                            <h1 className='font-normal mt-[1%] mb-[4%] text-3xl text-[#ff3600] text-shadow-lg text-center'>Professional care keeps your beloved pet protected.</h1>
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