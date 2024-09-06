import React from 'react';
import Button from './Button';

function VegShop() {
  return (
    <div className='w-full h-full bg-backC flex flex-col items-center'>
      <div className="w-full flex justify-center mt-4 mb-4 relative">
        <img 
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" 
          alt="Shop Logo" 
          className="w-32 h-auto absolute top-[-36px]"
        />
      </div>
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between items-center my-[60px]">
        <div className="w-[100%] lg:w-[30%] h-[42vh]  bg-white mb-4 md:mb-0 relative rounded-[6px]">
            <img  className='relative w-[100%] h-[100%] object-contain' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg" alt="" />
            <div className="absolute top-2 pl-[24px] pt-[30px]">
                <div className="text-[27px] font-semibold">
                    <h1>Farm Fresh Fruits</h1>
                </div>
                <div className="text-gray-500 mb-6">
                    <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                </div>
                <div className="w-[150px]">
                    <Button />
                </div>
            </div>
        </div>
        <div className="w-[100%] lg:w-[30%] h-[42vh]  bg-white mb-4 md:mb-0 relative rounded-[6px]">
            <img  className='relative w-[100%] h-[100%] object-contain' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product13-free-img.jpg" alt="" />
            <div className="absolute top-2 pl-[24px] pt-[30px]">
                <div className="text-[27px] font-semibold">
                    <h1>Farm Fresh Fruits</h1>
                </div>
                <div className="text-gray-500 mb-6">
                    <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                </div>
                <div className="w-[150px]">
                    <Button />
                </div>
            </div>
        </div>
        <div className="w-[100%] lg:w-[30%] h-[42vh]  bg-white mb-4 md:mb-0 relative rounded-[6px]">
            <img  className='relative w-[100%] h-[100%] object-contain' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product17-free-img.jpg" alt="" />
            <div className="absolute top-2 pl-[24px] pt-[30px]">
                <div className="text-[27px] font-semibold">
                    <h1>Farm Fresh Fruits</h1>
                </div>
                <div className="text-gray-500 mb-6">
                    <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                </div>
                <div className="w-[150px]">
                    <Button />
                </div>
            </div>
        </div>
      </div>
      <div className="w-[100%] h-[18vh] bg-black flex justify-evenly items-center ">
        <h1 className='text-white text-[42px]'>Get 25% Off On Your First Purchase!</h1>
        <Button/>
      </div>
      <div className="w-[100%] bg-blackC flex justify-center items-center text-[27px] py-[36px]">
        Try It For Free. No Registration Needed.
      </div>
    </div>
  );
}

export default VegShop;
