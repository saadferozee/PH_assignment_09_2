import React from 'react';
import { MdOutlinePets } from 'react-icons/md';

const PetShop = () => {


    return (
        <div className='bg-[#ff360025] py-6'>
            <title>WarmPaws | All Services</title>
            <div className='mx-[5%]'>
                <div className='my-6 w-fit mx-auto'>
                    <h1 className='font-stretched text-center font-bold text-xl lg:text-3xl text-[#ff3600] text-shadow-lg text-shadow-white'>Shop Our Pet Food from <span className='ml-2 text-white italic text-shadow-lg text-shadow-[#ff3600] font-black text-2xl lg:text-5xl'>Kitter</span></h1>
                </div>
                <div className='min-h-[70vh] flex flex-col items-center'>
                    <iframe
                        src="https://codewithsadee.github.io/kitter/" // এখানে সেই ওয়েবসাইটের URL বসাও
                        title="External Website"
                        className='w-full h-[65vh] rounded-2xl shadow-lg'
                        style={{ border: "none" }}
                    ></iframe>
                    <button className='btn mt-4 rounded-full w-[60%] mx-auto border border-[#ff3600]' onClick={() => window.open('https://codewithsadee.github.io/kitter/')}>Expand <span className='italic font-black'>Kitter</span></button>
                </div>
            </div>
        </div>
    );
};

export default PetShop;