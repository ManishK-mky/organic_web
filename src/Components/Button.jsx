import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Button() {
  return (
    <div>
        <div className="flex items-center bg-button py-2 px-4 rounded-[12px] cursor-pointer mt-[15px]">
            <FaArrowRight className='mr-2 text-white text-[15px]' />
            <button className='text-white text-[15px]'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Button