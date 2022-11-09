import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='my-24'>
            <h2 className='text-4xl p-5 text-yellow-500 text-center font-bold'>My Services</h2>
            <p className='text-lg text-center mb-5'>I provide these services with affordable price</p>
            <div className='grid gap-10 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;