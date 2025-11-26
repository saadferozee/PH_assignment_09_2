import React, { useEffect } from 'react';
import { FaRegStar } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from 'react-router';

import 'aos/dist/aos.css';
import Aos from 'aos';


const ServiceCard = ({ service }) => {

    const nav = useNavigate();
    const { serviceId, serviceName, image, rating, price } = service;

    useEffect(() => {
        Aos.init({
            duration: 800,     // animation speed
            easing: 'ease-in-out',
            once: false,       // every scroll animate
        });
    }, [])

    return (
        <div data-aos="zoom-in">
            <div className='w-auto bg-white rounded-xl p-4 flex flex-col justify-between gap-3'>
                <img className='w-full h-[300px] rounded-lg object-cover' src={image} alt="" />
                <h1 className='font-stretched\ font-semibold font-semi-stretched text-2xl text-[#ff3600]'>{serviceName}</h1>
                <div className='flex flex-col justify-between font-stretched'>
                    <h4 className='flex items-center gap-1 font-extralight'>
                        Price :
                        <span className='font-normal flex items-center'>{' '}{price} <TbCurrencyTaka /></span>
                    </h4>
                    <h4 className='flex items-center font-extralight gap-1'>
                        Rating :
                        <span className='font-normal'>{rating}</span>
                        <span><FaRegStar /></span>
                    </h4>
                </div>
                <div>
                    <button className='w-full py-2 border border-[#ff360040] hover:bg-[#ff360025] rounded-lg font-stretched text-sm' onClick={() => nav(`/services/${serviceId}`)}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;