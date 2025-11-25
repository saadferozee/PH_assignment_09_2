import React from 'react';
import { RotatingSquare } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='min-h-[40vh] flex justify-center items-center' >
            <RotatingSquare
                visible={true}
                height="150"
                width="150"
                color="#ff3600"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;