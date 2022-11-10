import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingelServiceHome from "./SingelServiceHome";

const ServiceHome = () => {
  const [service, setService] = useState([]);
  const { name, img, price, rating, desc } = service;
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="mb-20">
      <h2 className="text-center py-6 text-yellow-500 text-3xl font-bold">
        My Services
      </h2>
<div className='grid gap-10 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    
{
        service.map(singleService => <SingelServiceHome
            key={singleService.id}
            singleService={singleService}
        ></SingelServiceHome>)
      }
</div>

<Link to='/services' className="text-center block my-10">
<button className=" bg-yellow-500 py-3 px-6 font-bold text-white" > See More services</button>
</Link>
      
    </div>
  );
};

export default ServiceHome;
