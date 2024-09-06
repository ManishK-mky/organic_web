import React from 'react';
import LeftSidebar from '../Components/LightSidebar';
import RightSidebar from '../Components/RightSidebar';
import { useParams } from 'react-router-dom';

function Groceries() {
    const { name } = useParams();

    // Determine the category based on the `name` parameter
    const category = name === "groceries" ? "groceries" : "juices";

    return (
        <div className='w-full h-full flex flex-col-reverse md:flex-row bg-backC'>
            <div className="w-full md:w-[30%] h-full border-r border-gray-300 mt-[60px] pt-4 pr-4">
                <LeftSidebar />
            </div>
            <div className="w-full md:w-[70%] h-full mt-[60px]">
                <RightSidebar category={category} />
            </div>
        </div>
    );
}

export default Groceries;
