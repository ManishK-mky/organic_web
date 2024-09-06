import React from 'react';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LightSidebar'

function ProductsPage() {

  return (
    <div className='w-full h-full flex flex-col-reverse md:flex-row bg-backC'>
        <div className="w-full md:w-[30%] h-[100%] border-r border-gray-300 mt-[60px] pt-4 pr-4">
            <LeftSidebar />
        </div>
      <div className="w-full md:w-[70%] h-[100%] mt-[60px]">
        <RightSidebar />
      </div>
    </div>
  );
}

export default ProductsPage;
