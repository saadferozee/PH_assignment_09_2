import React, { useEffect, useState } from 'react';
import ServiceCard from '../Components/ServiceCard';
import { MdOutlinePets } from "react-icons/md";


const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('/pet-care-data.json')
            .then(response => response.json())
            .then(result => setServiceData(result))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className='bg-[#ff360025] py-6'>
            <div className='mx-[5%]'>
                <div className='my-6 w-fit mx-auto'>
                    <h1 className='font-stretched font-bold text-5xl text-[#ff3600] text-shadow-lg text-shadow-white flex items-center gap-6'>All Services from 
                        <span className="flex items-center gap-1.5">
                            <span><MdOutlinePets className='text-2xl sm:text-6xl' /></span>
                            <span className=''>WarmPaws</span>
                        </span>
                    </h1>
                </div>
                <div className='my-[3%] grid grid-cols-3 gap-8'>
                    {
                        serviceData.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;