import React from 'react';
import { FaStar, FaArrowRight } from "react-icons/fa";
import FeaturedBrands from './FeaturedBrands';
import Button from './Button';

function Reviewpage() {
  return (
    <div className='w-full h-[100%] relative bg-backC'>
      <img
        className="w-[36%] transform scale-x-[-1] absolute top-[50px] opacity-10"
        src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png"
        alt="Decorative leaves"
      />
      <div className="w-full h-full flex flex-col items-center p-6">
        <h1 className='text-[45px] mb-4'>Customers Reviews</h1>
        <div className='mb-12'>
          <img
            src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png'
            alt='Logo'
            className='w-30'
          />
        </div>
        <div className="w-full flex flex-wrap justify-center gap-6 items-end">
          {/* Review Card 1 */}
          <div className="w-[270px] h-[350px] bg-white flex flex-col justify-between items-center p-4 rounded-lg shadow-lg">
            <div className="flex text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-500 text-center mb-4">
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center">
              <img
                className="w-[50px] h-[50px] rounded-full object-cover mr-2"
                src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Reviewer"
              />
              <p>Mila Kunis</p>
            </div>
          </div>
          <div className="w-[330px] h-[420px] bg-gray-600 rounded-lg relative overflow-hidden flex flex-col justify-between">
            <img
              className='w-full h-full object-cover opacity-40'
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/sydney-rae-668606-unsplash.jpg"
              alt="Promotional Offer"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black bg-opacity-50">
              <h1 className='w-[80%] text-[30px] font-semibold mb-2'>Deal Of The Day 15% Off On All Vegetables!</h1>
              <p className='text-[14px] mb-16'>I am text block. Click edit button to change this text.</p>
              <Button />
            </div>
          </div>
          <div className="w-[270px] h-[350px] bg-white flex flex-col justify-between items-center p-4 rounded-lg shadow-lg">
            <div className="flex text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-500 text-center mb-4">
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center">
              <img
                className="w-[50px] h-[50px] rounded-full object-cover mr-2"
                src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Reviewer"
              />
              <p>Mila Kunis</p>
            </div>
          </div>
        </div>
      </div>
      <FeaturedBrands />
    </div>
  );
}

export default Reviewpage;
