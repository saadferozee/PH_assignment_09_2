import React, { useEffect, useState } from 'react';
import VetCard from '../Components/VetCard';

const VetData = () => {

    const [vetData, setVetData] = useState([]);

    useEffect(() => {
        fetch('/vet-data.json')
            .then(reference => reference.json())
            .then(result => setVetData(result))
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <h1 className='mb-4 text-center font-stretched font-bold text-4xl text-[#ff3600] text-shadow-lg text-shadow-[#ff360035]'>Meet Our Expert Vets</h1>
            <div className='m-[5%] mt-0 p-[3%] bg-[#ff360025] rounded-xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                        vetData.map(vet => <VetCard key={vet.doctorId} vet={vet}></VetCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default VetData;