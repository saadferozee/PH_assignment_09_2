import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const VetCard = ({ vet }) => {

    const { name, email, specialties, servicesProvided, profileImage } = vet;

    useEffect(()=> {
        Aos.init({
            duration: 800,     // animation speed
            easing: 'ease-in-out',
            once: false,       // every scroll animate
        });
    },[])

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className='p-8 drop-shadow-2xl bg-[#ff360015] rounded-tl-full'>
                <div className='flex flex-col justify-between'>
                    <div className='w-fit'>
                        <img className='w-[100px] my-auto h-[100px] rounded-full object-cover' src={profileImage} alt="" />
                    </div>
                    <div className='w-full text-right flex flex-col justify-between'>
                        <div>
                            <h1 className='font-black font-stretch-120% text-3xl'>{name}</h1>
                            <h4 className='font-medium mt-0'>{email}</h4>
                        </div>
                        <fieldset className='border bg-[#ffffff45] text-left p-2'>
                            <legend className='font-stretch-200%'>Specialties</legend>
                            <div className='text-right'>
                                {
                                    specialties.map(value => <p className='font-light font-stretch-125% text-sm'>{value}</p>)
                                }
                            </div>
                        </fieldset>
                        <fieldset className='border bg-[#ffffff45] text-left p-2'>
                            <legend className='font-stretch-200%'>Treatments</legend>
                            <div className='text-right'>
                                {
                                    servicesProvided.map(value => <p className='font-light font-stretch-125% text-sm'>{value}</p>)
                                }
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VetCard;