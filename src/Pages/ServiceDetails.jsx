import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const ServiceDetails = () => {

    const params = useParams();
    const { id } = params;

    const [serviceData, setServiceData] = useState('');

    useEffect(() => {
        fetch('/pet-care-data.json')
            .then(reference => reference.json())
            .then(result => setServiceData(result.find(service => service.serviceId == id)))
            .catch(error => console.log(error))
    }, [id])

    const handleFormSubmit = e => {
        e.preventDefault();
        Swal.fire(`Your Appointment Scheduled: Token Number ${(Math.random() * 10).toFixed(0)}`);
    }

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
        <div className=' min-h-[70vh] flex flex-col items-center'>
            <div className='m-[3%] p-[2%] rounded-4xl bg-[#ff360025] flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-[45%]'>
                    <img className='rounded-2xl w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className='w-full lg:w-[55%] flex flex-col justify-end'>
                    <h3 className='py-1 px-5 w-fit border rounded-full font-stretch-expanded text-sm text-[#ff3600]'>{category}</h3>
                    <h1 className='text-4xl font-stretched text-[#ff3600] text-shadow-lg'>{serviceName}</h1>
                    <h3 className='text-2xl font-bold opacity-70'>{providerName} <span className='textarea-sm'>{providerEmail}</span></h3>
                    <hr className='my-6 opacity-40 border' />
                    <h2 className='text-lg'>Price : <span className='font-bold'>{price}</span> <span className='text-sm'>BDT</span></h2>
                    <h2 className='text-lg'>Rating : <span className='font-bold'>{rating}</span> Star</h2>
                    <h4 className='text-lg'>Available Slots : <span className='font-bold'>{slotsAvailable}</span> <span className='text-sm'>(before tomorrow)</span></h4>
                    <hr className='my-6 opacity-40 border' />
                    <p className='font-semi-stretched text-lg'>{description}</p>
                </div>
            </div>
            <form onSubmit={handleFormSubmit} className='mb-[5vh] w-full'>
                <fieldset className="fieldset space-y-3 bg-[#ff3600] shadow-2xl shadow-[#ff3600] opacity-80 rounded-3xl lg:w-[600px] mx-auto px-12 py-8">
                    <h3 className='font-black text-white text-2xl text-center'></h3>

                    {/* <label className="label text-white text-lg">Email</label> */}
                    <input type="email" name='email' className="input w-full rounded-full p-2 px-5 text-sm" placeholder="Name" required />
                    <input type="email" name='email' className="input w-full rounded-full p-2 px-5 text-sm" placeholder="Email" required />

                    <button
                        type='submit'
                        className="btn bg-white hover:opacity-75 shadow-none text-[#ff3600] hover:text-gray-600 py-2 px-5 rounded-full text-sm"
                    >Register Appointment</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ServiceDetails;