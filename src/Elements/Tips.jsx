import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tips = () => {

    const [tipsData, setTipsData] = useState([]);

    useEffect(() => {
        fetch('/pet-care-tips-data.json')
            .then(ref => ref.json())
            .then(result => setTipsData(result))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 800,     // animation speed
            easing: 'ease-in-out',
            once: false,       // every scroll animate
        });
    }, [])

    return (
        <div className='px-[5%] pt-0 pb-10'>
            <h1 className='mb-3 text-center font-stretched font-bold text-4xl text-[#ff3600] text-shadow-lg text-shadow-[#ff360035]'>Tips for You...</h1>
            <div className='grid grid-cols-2 gap-3'>
                {
                    tipsData.map(tip =>
                        <div data-aos="zoom-out-down">
                            <div className='py-2 px-4 rounded-full bg-[#ff360025] shadow-lg' key={tip.id}>
                                <p className='text-center font-stretch-120% text-shadow-lg'>{tip.tip}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Tips;