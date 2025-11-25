import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const params = useParams();
    const { id } = params;

    const [serviceData, setServiceData] = useState('');

    useEffect(() => {
        fetch('/pet-care-data.json')
            .then(reference => reference.json())
            .then(result => setServiceData(result.find(service => service.serviceId == id)))
            .catch(error => console.log(error))
    }, [])

    // {
    //     "serviceId": 1,
    //     "serviceName": "Winter Grooming & Paw Treatment",
    //     "providerName": "CozyPets Grooming",
    //     "providerEmail": "hello@cozypets.com",
    //     "price": 3000,
    //     "rating": 4.8,
    //     "slotsAvailable": 3,
    //     "description": "Professional grooming with moisturizing paw balm and winter-safe shampoo.",
    //     "image": "https://i.postimg.cc/zvQ5L66c/Dog-grooming-tools-1024x1024.jpg",
    //     "category": "Grooming"
    // }

    const { serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = serviceData;

    return (
        <div>
            <div className='m-[3%] p-[2%] rounded-4xl bg-[#ff360025] min-h-[600px] flex gap-10'>
                <div className='w-[45%]'>
                    <img className='rounded-2xl w-full h-full object-cover' src={image} alt="" />
                </div>
                <div>
                    <h1>{serviceName}</h1>
                    <h3>{providerName}</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;