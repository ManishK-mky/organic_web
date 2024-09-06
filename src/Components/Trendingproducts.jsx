import React from 'react';
import Mock from '../mock.json';
import { CiStar } from "react-icons/ci";

function Trendingproducts() {
  return (
    <div className='w-full h-full flex flex-col items-center mb-[90px]'>
      <div className='text-[45px] mt-6'>
        <h1>Trending Products</h1>
      </div>
      <div className='mt-4 mb-12'>
        <img
          src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png'
          alt='Logo'
          className='w-30'
        />
      </div>
      <div className='w-[100%] flex flex-wrap justify-center gap-3'>
        {Mock.map((item, index) => (
          <div key={index} className='w-[300px] h-[420px] flex flex-col items-center p-4'>
            <div className='w-full h-[100%] flex justify-center mb-4'>
              <img className='w-full h-full object-cover' src={item.image} alt='Product' />
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-gray-400 text-[14px]'>{item.category}</p>
              <p className='font-semibold'>Assorted Coffee</p>
              <div className='flex'>
                <CiStar className='' />
                <CiStar className='' />
              </div>
              <p className='text-gray-700 font-semibold'>$35.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trendingproducts