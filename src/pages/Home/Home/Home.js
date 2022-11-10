import React from 'react';
import Banner from '../Banner/Banner';
import ServiceHome from '../ServiceHome/ServiceHome';
import Specialities from '../Specialities/Specialities';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    
    return (
      <div>
        <Banner></Banner>
        <ServiceHome></ServiceHome>
        <Specialities></Specialities>
        <Testimonial></Testimonial>
      </div>
    );
};

export default Home;