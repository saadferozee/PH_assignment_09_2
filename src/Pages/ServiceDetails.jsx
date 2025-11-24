import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const params = useParams();
    const {id} = params;

    const [serviceData, setServiceData] = useState('');

    useEffect(()=> {
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
            <h1>{serviceName}</h1>
        </div>
    );
};

export default ServiceDetails;