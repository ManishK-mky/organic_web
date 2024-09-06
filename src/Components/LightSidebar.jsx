import React, { useState } from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import Mock from '../mock.json';
import Data from '../Data.json';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AddToCartContext } from '../Context';

function LightSidebar() {

    const [searchTerm, setSearchTerm] = useState('');
    const {productsToDisplay} = useContext(AddToCartContext);

    const threeItems = productsToDisplay;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log(searchTerm);

  const filteredData = [];//
  filteredData.push(Data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())))
  console.log(filteredData);
  
  const searchItem = filteredData[0];
  console.log(searchItem[0] ,"from search");
  

  const handleSearch = () => {
    const category = searchItem[0].category;
    const product_name = searchItem[0].name;
    navigate(`/product-category/${category}/${product_name}`);
  };

    return (
        <div className="w-full h-full flex flex-col p-4">
            <div className="w-full flex flex-col items-end">
                <div className="flex items-center mb-4 space-x-4">
                    <input
                        className="p-3 border rounded-lg w-full max-w-[300px]"
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleChange}
                        onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                        }}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="w-full flex justify-end mb-4">
                    <Slider />
                </div>
                <div className="w-full max-w-[300px] flex flex-col text-button justify-start gap-y-2 mb-6">
                    <div>
                        <Link to="/groceries" className="block text-center md:text-left">Groceries (10)</Link>
                    </div>
                    <div>
                        <Link to="/juices" className="block text-center md:text-left">Juice (9)</Link>
                    </div>
                </div>
                <div className="w-full max-w-[300px] flex flex-col gap-y-6">
                    {threeItems.map((item , index) => (
                        <div key={index} className="flex flex-col items-center md:items-start w-full">
                            <div className="w-full mb-4">
                                <img src={item.image} alt={item.name} className="w-full h-auto" />
                            </div>
                            <div className="text-center md:text-left">
                                <p className='text-button font-semibold'>{item.name}</p>
                                <p className='text-gray-500'>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LightSidebar;
