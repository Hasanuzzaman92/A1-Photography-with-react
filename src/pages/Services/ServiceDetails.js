import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);

  const { name, img, price, desc, rating, userName, userPhoto, review } =
    service;

    
  return (
    <div className="max-w-[90%] mx-auto my-20">
      <h2 className="text-3xl font-bold text-yellow-500 text-center py-4">
        {" "}
        {name}
      </h2>
      <div className="flex ">
        <div className="w-1/2 border-2">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="w-full" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
          <div className="p-4">
            <p className="text-justify py-10">{desc}</p>
            <div className="flex justify-between">
              <h2 className="font-bold text-xl">Price: ${price} </h2>
              <p className="text-lg flex items-center">
                <FaStar className="text-yellow-500 mr-4"></FaStar> {rating}
              </p>
            </div>
          </div>
        </div>

        {/*===================
         review section
         ==================== */}
        <div className="w-1/2 border-2">
          <h2 className="text-3xl font-bold text-yellow-500 text-center py-4 mb-10">
            Reviews
          </h2>

          <>
            {user?.uid ? (
              <>
                <div className=" flex flex-col items-center">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src={userPhoto}
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{userName}</h4>
                      <span className="text-xs dark:dark:text-gray-400">
                        2 days ago
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 text-lg dark:dark:text-gray-600">
                    <p>{review} ohh! it's a great experience</p>
                  </div>
                </div>

                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                  <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">
                      Your opinion matters!
                    </h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                      <span className="text-center">
                        How was your experience?
                      </span>
                    </div>
                    <div className="flex flex-col w-full">
                      <textarea
                        rows="3"
                        placeholder="Message..."
                        className="p-4 border-2 rounded-md resize-none dark:dark:text-gray-100 dark:dark:bg-gray-900"
                      ></textarea>
                      <button
                        type="button"
                        className="py-4 my-8 font-semibold rounded-md bg-yellow-500"
                      >
                        Leave feedback
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src={userPhoto}
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{userName}</h4>
                        <span className="text-xs dark:dark:text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">4.5</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-lg dark:dark:text-gray-600">
                    <p>{review} ohh! it's a great experience</p>
                  </div>
                </div>
                <p className=" text-lg text-center">
                  Please login to add a review.{" "}
                  <Link to="/login">
                    <span className="text-yellow-500 underline">Login now</span>
                  </Link>
                </p>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
