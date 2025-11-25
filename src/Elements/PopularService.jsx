import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import ServiceCard from '../Components/ServiceCard';
import Loading from '../Components/Loading';


const PopularService = () => {

    const nav = useNavigate();
    const [PopularServiceData, setPopularServiceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/pet-care-data.json')
            .then(response => response.json())
            .then(result => {
                const filteredService = result.filter(service => service.rating >= 4.7);
                setPopularServiceData(filteredService);
                setLoading(false);
            }).catch(error => console.log(error));
    }, [])

    return (
        <div className='bg-[#ff360025] my-[3%] py-6'>
            <div className='mx-[5%]'>
                <div className='mb-6'>
                    <h1 className='text-center font-stretched font-bold text-4xl text-[#ff3600] text-shadow-lg text-shadow-white'>Our Popular Services</h1>
                </div>
                {
                    loading ? (
                        <Loading></Loading>
                    ) : (
                            <div className='grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                            {
                                PopularServiceData.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)
                            }
                        </div>
                    )
                }
                <div className='flex justify-center mt-7'>
                    <button className='btn rounded-full w-[60%] border border-[#ff3600]' onClick={() => nav('/services')}>Show All Service</button>
                </div>
            </div>
        </div>
    );
};

export default PopularService;