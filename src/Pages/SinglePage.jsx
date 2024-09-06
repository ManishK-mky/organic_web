import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import Data from '../Data.json'
import { AddToCartContext } from '../Context';

function SinglePage() {

    const {product_name} = useParams()
    // console.log(product_name);

    // const [added , setAdded] = useState()

    const filteredData = Data.filter((item) => item.name === product_name)
    // console.log(filteredData);
    
    // adding to fav.
    const {cart, addToCart , removeFromCart} = useContext(AddToCartContext)

    function handleCart(){
        if(filteredData.length > 0){
            addToCart(filteredData[0])
        }
    }

    console.log(filteredData[0].image);
    
    console.log(cart);

    const itemsId = [];
    itemsId.push(cart.map((item) => item.id))

    // console.log(itemsId[0]);
    const idsOfItems = itemsId[0]
    console.log(idsOfItems);
    
    function handleRemoveCart(){
        if(cart.length > 0){
            removeFromCart(filteredData[0].id)
        }
    }
    

  return (
    <div className='w-[100%] h-[100%] bg-backC'>
        <div className="w-[100%] h-[80%] lg:flex">
            <div className="flex lg:justify-end justify-center items-center w-[100%] lg:w-[50%] h-[70vh]">
                <img className="w-[90%] h-[90%] object-contain" src={filteredData[0].image} alt="" />
            </div>
            <div className="w-[100%] lg:w-[50%] h-[100%] ">
                <div className="w-[80%] h-[100%] flex flex-col items-centerjustify-center mt-[27px] ml-[27px]">
                    <h1 className='text-[36px]'>{filteredData[0].name}</h1>
                    <div className="flex justify-start items-center gap-x-3 mt-[12px]">
                        <p className='text-[30px]'>{filteredData[0].price}</p>
                        <p className='text-gray-500'>+ Free Shipping</p>
                    </div>
                    <p className='w-[60%] text-gray-500 mb-[21px]'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                    <div className="flex w-[60%] gap-x-3">
                        <div className="border p-3 rounded">1</div>
                        <div className="w-[300px] bg-button flex justify-center p-[6px] rounded-[12px] text-white">
                            {idsOfItems.includes(filteredData[0].id) ? <button onClick={handleRemoveCart}>REMOVE FROM CART</button> : <button onClick={handleCart}>ADD TO CART</button>}
                        </div>
                    </div>
                    <div className="border-[1px] mt-[12px]"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePage