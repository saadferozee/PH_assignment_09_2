import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";


const Reviews = () => {
    return (
        <section className="review-container mb-[5%] px-[5%]">
            <h1 className='mb-4 text-center font-stretched font-bold text-4xl text-[#ff3600] text-shadow-lg text-shadow-[#ff360035]'>Some Reviews from Our Clients</h1>
            <div className="review-cards grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="review-card border-2 border-[#ff3600] p-4 rounded-2xl">
                    <h5 className='flex text-[#ff3600]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h5>
                    <h3 className="font-bold">Excellent Pet Nutrition Advice</h3>
                    <p className="font-sm text-justify opacity-85">My cat had several diet issues, and I was really worried. The team patiently guided me with a proper nutrition plan. Within a few weeks, her energy, coat quality, and overall behavior improved noticeably.</p>
                    <div className="reviewer flex">
                        <div className="">
                            <img src="https://img.icons8.com/dusk/64/user-female-circle--v4.png" alt="Picture of a redhead girl" />
                        </div>
                        <div className="reviewer-name flex flex-col justify-center">
                            <h3 className='font-stretch-110% font-semibold'>Amatullah</h3>
                            <h4 className="opacity-75">June 28, 2021</h4>
                        </div>
                    </div>
                </div>
                <div className="review-card border-2 border-[#ff3600] p-4 rounded-2xl">
                    <h5 className='flex text-[#ff3600]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></h5>
                    <h3 className="font-bold">Reliable Veterinary Support</h3>
                    <p className="font-sm text-justify opacity-85">I have taken my dog here for checkups several times, and each visit has been consistent. The doctors explain every detail clearly, maintain a clean environment, and provide highly dependable service overall.</p>
                    <div className="reviewer flex">
                        <div className="">
                            <img src="https://img.icons8.com/dusk/64/user-female-circle--v4.png" alt="Picture of a redhead girl" />
                        </div>
                        <div className="reviewer-name flex flex-col justify-center">
                            <h3 className='font-stretch-110% font-semibold'>Enaya</h3>
                            <h4 className="opacity-75">June 28, 2021</h4>
                        </div>
                    </div>
                </div>
                <div className="review-card border-2 border-[#ff3600] p-4 rounded-2xl">
                    <h5 className='flex text-[#ff3600]'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></h5>
                    <h3 className="font-bold">Outstanding Pet Grooming Service</h3>
                    <p className="font-sm text-justify opacity-85">Their grooming service is genuinely excellent. My cat usually gets nervous, but here she felt completely relaxed. The staff handled every step with care, making the entire experience smooth and comforting.</p>
                    <div className="reviewer flex">
                        <div className="">
                            <img src="https://img.icons8.com/dusk/64/user-female-circle--v4.png" alt="Picture of a redhead girl" />
                        </div>
                        <div className="reviewer-name flex flex-col justify-center">
                            <h3 className='font-stretch-110% font-semibold'>Anayra</h3>
                            <h4 className="opacity-75">June 28, 2021</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Reviews;