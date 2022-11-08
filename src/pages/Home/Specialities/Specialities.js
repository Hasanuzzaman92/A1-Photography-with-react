import React from 'react';
import { FaCameraRetro, FaCamera, FaImage } from "react-icons/fa";

const Specialities = () => {
    return (
        <section className=" md:mb-8 bg-gray-500 text-gray-100">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">My Specialities</h2>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex  bg-yellow-800 m-4 flex-col items-center p-4">
			<FaCameraRetro className='text-5xl'></FaCameraRetro>
			<h3 className="my-3 text-2xl font-semibold  text-yellow-400">Black & white Photography</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex bg-yellow-500 flex-col m-4 items-center p-4">
			<FaCamera className='text-5xl'></FaCamera>
			<h3 className="my-3 text-2xl font-semibold  text-yellow-800">Fashion Photography</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex bg-yellow-800 m-4 flex-col items-center p-4">
			<FaImage className='text-5xl'></FaImage>
			<h3 className="my-3 text-2xl font-semibold  text-yellow-400">Advertorial Photography</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
				
	</div>
</section>
    );
};

export default Specialities;