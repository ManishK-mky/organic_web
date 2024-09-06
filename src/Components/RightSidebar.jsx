import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import Data from'../Data.json';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useContext } from 'react';
import { AddToCartContext } from '../Context';


function RightSidebar({category}) {

  const {productsToDisplay , allProducts} = useContext(AddToCartContext)

  console.log(productsToDisplay , "from rightsude bar");
  
  var para = "";
  var name = "Shop"

  if(category === "groceries"){
    para = "Explore our wide range of fresh and organic groceries, including fruits, vegetables, and pantry staples.Explore our wide range of fresh and organic groceries, including fruits, vegetables, and pantry staples."
    name = "Groceries";
  }else if(category === "juices"){
    para = "Discover a variety of refreshing juices made from the finest ingredients. Perfect for a healthy lifestyle.Discover a variety of refreshing juices made from the finest ingredients. Perfect for a healthy lifestyle.";
    name = "Juices"
  }

  return (
    <div>
        <div className="w-full h-full ">
          <div className="py-2 px-4 text-[14px]">
            <p className='text-gray-400'>Home/{name}</p>
          </div>
          <div className="py-2 px-4 mb-[12px]">
            <p className='text-button text-[45px] font-semibold'>{name}</p>
          </div>
          <div className="w-[80%] h-[100%] px-[12px] py-[21px]">
            <p>{para}</p>
          </div>
          <div className="flex justify-between py-2 px-4 text-gray-600">
            <div className="">
              <p>Showing 1-9 of 12 results</p>
            </div>
            <div className="flex items-centerw">
              <p className="mr-2">Default Sorting</p>
              <RiArrowDropDownLine size={24} />
            </div>
          </div>
          <div className="py-2 px-4">
            <div className='w-[100%] flex flex-wrap justify-start gap-3 '>
                {allProducts.map((item, index) => (
                    <Link key={index} to={`/product-category/${item.category}/${item.name}`}>
                      <div key={index} className='w-[300px] h-[420px] flex flex-col items-center p-4'>
                          <div className='w-full h-[100%] flex justify-center mb-4 border-[1px]'>
                              <img className='w-full h-full object-cover' src={item.image} alt='Product' />
                          </div>
                          <div className='flex flex-col items-center'>
                          <p className='text-gray-400 text-[14px]'>{item.category}</p>
                          <p className='font-semibold'>{item.name}</p>
                          <div className='flex'>
                              <CiStar className='' />
                              <CiStar className='' />
                          </div>
                          <p className='text-gray-700 font-semibold'>{item.price}</p>
                        </div>
                      </div>
                </Link>
                ))}
            </div>
            <div className="w-[400px] flex gap-x-3">
              <button className='w-[40px] h-[40px] border-[2px] border-button text-button'>1</button>
              <button className='w-[40px] h-[40px] border-[2px] border-button text-button'>2</button>
              <button className='w-[40px] h-[40px] border-[2px] border-button flex justify-center items-center'><FaLongArrowAltLeft className='text-button' /></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightSidebar