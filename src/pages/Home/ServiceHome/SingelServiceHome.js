import React from 'react';

import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaStar } from "react-icons/fa";

const SingelServiceHome = ({singleService}) => {
    const {name, img, desc, price, rating} = singleService;
    return (
        <div className="rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
            <PhotoProvider>
                <PhotoView src={img}>
                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl text-yellow-400 font-semibold tracking-wide">{name}</h2>
                    <p className="dark:dark:text-gray-100">{desc.substring(0, 80)+'...'}</p>
                </div>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-xl'>Price: ${price} </h2>
                    <p className='text-lg flex items-center'><FaStar className='text-yellow-500 mr-4'></FaStar> {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default SingelServiceHome;