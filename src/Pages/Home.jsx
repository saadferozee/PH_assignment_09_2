import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Slider from '../Elements/Slider';
import PopularService from '../Elements/PopularService';
import VetData from '../Elements/VetData';
import Tips from '../Elements/Tips';


const Home = () => {
    return (
        <div className=''>
            <title>WarmPaws | Home</title>
            <div>
                <Slider></Slider>
                <PopularService></PopularService>
                <Tips></Tips>
                <VetData></VetData>
            </div>
        </div>
    );
};

export default Home;