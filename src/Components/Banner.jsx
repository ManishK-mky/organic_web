import React from 'react';
import { FaTruck } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";

function Banner() {

    const bannerThings = [
        {
            img : <FaTruck/>,
            heading : "Free Shipping",
            content : "Above 5$ Only"
        },
        {
            img : <RiContactsBookFill />,
            heading : "Free Shipping",
            content : "Above 5$ Only"
        },
        {
            img : <FaRegMoneyBillAlt />,
            heading : "Free Shipping",
            content : "Above 5$ Only"
        },
        {
            img : <FaRecycle />,
            heading : "Free Shipping",
            content : "Above 5$ Only"
        }
    ]

  return (
    <div className='w-[100%] h-[100%] bg-black mb-[90px]'>
        <div className="flex flex-wrap justify-center items-center">
            {bannerThings.map((item , index)=> (
                // <div className="flex j">
                    <div key={index} className="flex w-[240px] h-[14vh] bg-bannerColor justify-center items-center ml-[18px] mt-[30px] mb-[30px] gap-4">
                        <div className='text-button text-[40px]'>
                            {item.img}
                        </div>
                        <div className="text-white">
                            <h1 className='text-[21px]'>Free Shipping</h1>
                            <p className='font-[300] text-[15px]'>Above $5 Only</p>
                        </div>
                    </div>
                // </div>
            ))}
        </div>
    </div>
  )
}

export default Banner