import React from 'react';
import { IoCart } from "react-icons/io5";

function Heropage() {
  return (
    <div className='w-[100%] h-[50vh] lg:h-[80vh] flex items-center'>
        <div className="w-[50%] h-[60%] lg:h-[100%] p-3">
            <div className="w-[100%] h-[90%] bg-white flex justify-end items-center ml-[12px]">
                <img className="w-[80%] h-[100%]" src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt="" />
            </div>
        </div>
        <div className="w-[50%] lg:h-[90%] h-[60%] flex flex-col justify-center ml-[30px]">
            <div className="">
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
            </div>
            <div className="mt-[9px]">
                <p>Best Quality Products</p>
            </div>
            <div className="text-[30px] lg:text-[60px] mb-[21px] mt-[15px]">
                <p>Join The Organic <br />Movement!</p>
            </div>
            <div className="text-gray-500 lg:w-[66%] w-[80%]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="w-[150px] bg-button p-3 rounded-[12px] mt-[21px]">
                <button className='flex gap-2 text-white'>
                    <IoCart className='text-[21px]'/>
                    <div className="text-[14px]">SHOP NOW</div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Heropage
