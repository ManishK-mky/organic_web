import React, { useState , useEffect} from 'react';
import Data from '../Data.json'
import { useContext } from 'react';
import { AddToCartContext } from '../Context';

function FilterSlider() {
  // const [value, setValue] = useState(10);
  // const [priceRange, setPriceRange] = useState([]);
  // const [productsToDisplay, setProductsToDisplay] = useState([]);


  const {value , setValue , priceRange , setPriceRange , productsToDisplay , setProductsToDisplay , allProducts , setAllProducts} = useContext(AddToCartContext);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);
  
  useEffect(() => {
    
    const filteredPriceRange = Data.reduce((acc, item) => {
     
      const priceFromData = parseFloat(item.price.replace('$', ''));

      if (priceFromData <= value) {
        acc.push(item.id);
      }
      return acc;
    }, []);

    setPriceRange(filteredPriceRange);
  }, [value, Data]);

  console.log(value);
  console.log(Data , "");
  console.log(priceRange, "price range hai");

  useEffect(() => {
    // Set the first three products to display based on the priceRange
    const productsToDisplayIds = priceRange.slice(0, 3);
    const products = Data.filter(item => productsToDisplayIds.includes(item.id));

    const productsToDisplay = priceRange.slice(0, 9);
    const pproducts = Data.filter(item => productsToDisplay.includes(item.id));
    setProductsToDisplay(products);
    setAllProducts(pproducts)
  }, [priceRange, Data]);
  
  console.log(productsToDisplay);
  

  return (
    <div className="w-[80%] max-w-md p-4 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-4">Filter by Price</h2>
      <div className="flex items-center justify-between mb-4 text-button">
        <input
          type="range"
          min="10"
          max="40"
          step=""
          value={value}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="flex gap-x-2">
        <div className="text-center border-[1px] w-[36%] p-2 rounded-[6px]">
            <p className="font-medium text-gray-500">$10</p>
        </div>
        <div className="text-center border-[1px] w-[36%] p-2 rounded-[6px]">
            <p className="font-medium text-gray-500">${value}</p>
        </div>
      </div>
    </div>
  );
}

export default FilterSlider;
