import React from 'react';
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Mock from '../mock.json'
import Data from '../Data.json'
import { AddToCartContext } from '../Context';
import { useContext } from 'react';
import { useState } from 'react';
import { ImCross } from "react-icons/im";
// import Groceries from '../Pages/Groceries';

function Header() {

    const {cart , removeFromCart} = useContext(AddToCartContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const total_price = cart
        .map(item => parseFloat(item.price.replace('$', ''))) // Remove $ and convert to number
        .reduce((total, price) => total + price, 0)
        .toFixed(2); // Convert back to string with 2 decimal places
    console.log(total_price);
    

// for modal
    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

//  remove from cart
    function removeItemFromCart(id){
        removeFromCart(id)
    }
    

  return (
    <div className='w-[100%] p-2 flex'>
        <div className="w-[100%] block lg:hidden text-white p-2">
            <div className="w-[100%] flex">
                    <div className="w-[100%] p-2 flex">
                        <img className="w-[130px]" src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="" />
                    </div>
                    <div className="w-[50%] p-2 flex justify-end">
                        <div className="w-[100%] flex justify-end items-center gap-x-6 text-gray-500">
                            <div className="">${total_price}</div>
                            <div className="w-[21px] relative cursor-pointer" onClick={handleModalToggle}>
                                <img className='w-[18px] h-[18px] object-cover' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJhc3QtYmFza2V0LWljb24tc3ZnIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjgyNiA4MjYgMTQwIDE0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyA4MjYgODI2IDE0MCAxNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJCQkJPHBhdGggZD0iTTk1NS40MTgsODg3LjUxMmMyLjM0NCwwLDQuMzQzLDAuODI5LDYuMDAyLDIuNDg2YzEuNjU3LDEuNjU5LDIuNDg2LDMuNjU5LDIuNDg2LDYuMDAyYzAsMi4zNDMtMC44MjksNC4zNDQtMi40ODYsNi4wMDEgIGMtMS42NTksMS42NTgtMy42NTgsMi40ODctNi4wMDIsMi40ODdoLTAuOTk0bC03LjYyNyw0My45Yy0wLjM1NCwyLjAzMy0xLjMyNiwzLjcxMy0yLjkxNyw1LjA0ICBjLTEuNTkzLDEuMzI2LTMuNDA1LDEuOTg5LTUuNDM4LDEuOTg5aC04NC44ODNjLTIuMDMzLDAtMy44NDYtMC42NjMtNS40MzgtMS45ODljLTEuNTkxLTEuMzI3LTIuNTY0LTMuMDA3LTIuOTE4LTUuMDRsLTcuNjI2LTQzLjkgIGgtMC45OTVjLTIuMzQzLDAtNC4zNDQtMC44MjktNi4wMDEtMi40ODdjLTEuNjU4LTEuNjU3LTIuNDg3LTMuNjU4LTIuNDg3LTYuMDAxYzAtMi4zNDMsMC44MjktNC4zNDMsMi40ODctNi4wMDIgIGMxLjY1OC0xLjY1OCwzLjY1OS0yLjQ4Niw2LjAwMS0yLjQ4Nkg5NTUuNDE4eiBNODYwLjI1Niw5NDAuNTYzYzEuMTQ5LTAuMDg5LDIuMTExLTAuNTg1LDIuODg1LTEuNDkxICBjMC43NzMtMC45MDcsMS4xMTYtMS45MzYsMS4wMjgtMy4wODVsLTIuMTIyLTI3LjU4NmMtMC4wODgtMS4xNS0wLjU4NS0yLjExMS0xLjQ5Mi0yLjg4NWMtMC45MDYtMC43NzQtMS45MzQtMS4xMTctMy4wODMtMS4wMjggIGMtMS4xNDksMC4wODgtMi4xMTEsMC41ODYtMi44ODUsMS40OTJzLTEuMTE2LDEuOTM0LTEuMDI4LDMuMDgzbDIuMTIyLDI3LjU4N2MwLjA4OCwxLjEwNSwwLjU0MiwyLjAzNCwxLjM1OSwyLjc4NSAgYzAuODE4LDAuNzUyLDEuNzgsMS4xMjgsMi44ODUsMS4xMjhIODYwLjI1NnogTTg4Ny41MTIsOTM2LjMxOXYtMjcuNTg3YzAtMS4xNDktMC40Mi0yLjk4NC0xLjI2LTIuOTg0ICBjLTAuODQtMC44NC0xLjgzNC0xLjI2LTIuOTg0LTEuMjZzLTIuMTQ0LDAuNDItMi45ODQsMS4yNmMtMC44NCwwLjg0MS0xLjI2LDEuODM1LTEuMjYsMi45ODR2MjcuNTg3YzAsMS4xNDksMC40MiwyLjE0NSwxLjI2LDIuOTg0ICBjMC44NCwwLjg0LDEuODM1LDEuMjYsMi45ODQsMS4yNnMyLjE0NC0wLjQyLDIuOTg0LTEuMjZDODg3LjA5Miw5MzguNDY0LDg4Ny41MTIsOTM3LjQ2OSw4ODcuNTEyLDkzNi4zMTl6IE05MTIuOTc3LDkzNi4zMTkgIHYtMjcuNTg3YzAtMS4xNDktMC40Mi0yLjk4NC0xLjI2LTIuOTg0Yy0wLjg0MS0wLjg0LTEuODM1LTEuMjYtMi45ODQtMS4yNnMtMi4xNDUsMC40Mi0yLjk4NCwxLjI2ICBjLTAuODQsMC44NDEtMS4yNiwxLjgzNS0xLjI2LDIuOTg0djI3LjU4N2MwLDEuMTQ5LDAuNDIsMi4xNDUsMS4yNiwyLjk4NHNxMS44MzUsMS4yNiwxLjI2LDIuOTg0LDEuMjZzMi4xNDQtMC40MiwyLjk4NC0xLjI2ICBDOTEyLjU1Nyw5MzguNDY0LDkxMi45NzcsOTM3LjQ2OSw5MTIuOTc3LDkzNi4zMTl6IE05MzYuMzE5LDkzNi42NWwyLjEyMi0yNy41ODdjMC4wODgtMS4xNDktMC4yNTQtMi4xNzctMS4wMjctMy4wODMgIHMtMS43MzUtMS40MDQtMi44ODUtMS40OTJjLTEuMTUtMC4wODktMi4xNzgsMC4yNTQtMy4wODQsMS4wMjhjLTAuOTA2LDAuNzczLTEuNDA0LDEuNzM0LTEuNDkyLDIuODg1bC0yLjEyMiwyNy41ODYgIGMtMC4wODgsMS4xNDksMC4yNTQsMi4xNzgsMS4wMjcsMy4wODVjMC43NzQsMC45MDYsMS43MzYsMS40MDIsMi44ODUsMS40OTFoMC4zMzJjMS4xMDUsMCwyLjA2Ni0wLjM3NiwyLjg4NS0xLjEyOCAgQzkzNS43NzcsOTM4LjY4NSw5MzYuMjMsOTM3Ljc1Niw5MzYuMzE5LDkzNi42NXogTTg1OS42Niw4NTUuOTQ2bC02LjE2NywyNy4zMjJoLTguNzUzbDYuNjk4LTI5LjI0NSAgYzAuODQtMy44OSwyLjgwNy03LjA2Miw1LjkwMi05LjUxNmMzLjA5NS0yLjQ1Myw2LjYzMi0zLjY4LDEwLjYxMS0zLjY4aDExLjA3NGMwLTEuMTQ5LDAuNDItMi4xNDQsMS4yNi0yLjk4NCAgYzAuODQtMC44NCwxLjgzNS0xLjI2LDIuOTg0LTEuMjZoMjUuNDY1YzEuMTQ5LDAsMi4xNDQsMC40MiwyLjk4NCwxLjI2YzAuODQsMC44NCwxLjI2LDEuODM0LDEuMjYsMi45ODRoMTEuMDc0ICBjMy45NzksMCw3LjUxNiwxLjIyNywxMC42MTEsMy42OGMzLjA5NCwyLjQ1NCw1LjA2Miw1LjYyNiw1LjkwMSw5LjUxNmw2LjY5NywyOS4yNDVoLTguNzUzbC02LjE2OC0yNy4zMjIgIGMtMC40ODYtMS45NDUtMS40OTEtMy41MzctMy4wMTctNC43NzRjLTEuNTI1LTEuMjM4LTMuMjgyLTEuODU3LTUuMjcyLTEuODU3aC0xMS4wNzRjMCwxLjE1LTAuNDIsMi4xNDQtMS4yNiwyLjk4NCAgYy0wLjg0MSwwLjg0LTEuODM1LDEuMjYtMi45ODQsMS4yNmgtMjUuNDY1Yy0xLjE0OSwwLTIuMTQ0LTAuNDItMi45ODQtMS4yNmMtMC44NC0wLjg0LTEuMjYtMS44MzQtMS4yNi0yLjk4NGgtMTEuMDc0ICBjLTEuOTksMC0zLjc0NywwLjYxOS01LjI3MiwxLjg1N0M4NjEuMTUyLDg1Mi40MDksODYwLjE0Niw4NTQsODU5LjY2LDg1NS45NDZ6Ii8+CgkJCQk8L3N2Zz4=" alt="" onClick={handleModalToggle} 
                                />
                                <div className="w-[21px] h-[21px] bg-red-400 text-white flex items-center justify-center absolute top-[-10px] right-[-10px] rounded-full text-xs">
                                    {cart.length}
                                </div>
                            </div>
                            <div className="">
                                <GiHamburgerMenu />
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[100%] hidden lg:block text-white p-2">
            <div className="w-[100%] flex">
                <div className="w-[100%] p-2 flex">
                    <Link to="/"><img className="w-[130px]" src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="" /></Link>
                    <div className="w-[50%] lg:w-[30%] flex justify-between items-center ml-[21px] text-gray-500">
                        <Link to="/everything"><div className="">Everything</div></Link>
                        <Link to="/product-category/groceries"><div className="">Groceries</div></Link>
                        <Link to="/product-category/juices"><div className="">Juice</div></Link>
                    </div>
                </div>
                <div className="w-[50%] p-4 flex justify-end">
                    <div className="w-[100%] flex justify-end items-center gap-x-6 text-gray-500">
                        <Link to="/about"><div className="">About</div></Link>
                        <Link to="/contact"><div className="">Contact</div></Link>
                        <div className="">${total_price}</div>
                        <div className="w-[21px] relative cursor-pointer">
                            <img 
                                className='w-[18px] h-[18px] object-cover' 
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJhc3QtYmFza2V0LWljb24tc3ZnIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjgyNiA4MjYgMTQwIDE0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyA4MjYgODI2IDE0MCAxNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJCQkJPHBhdGggZD0iTTk1NS40MTgsODg3LjUxMmMyLjM0NCwwLDQuMzQzLDAuODI5LDYuMDAyLDIuNDg2YzEuNjU3LDEuNjU5LDIuNDg2LDMuNjU5LDIuNDg2LDYuMDAyYzAsMi4zNDMtMC44MjksNC4zNDQtMi40ODYsNi4wMDEgIGMtMS42NTksMS42NTgtMy42NTgsMi40ODctNi4wMDIsMi40ODdoLTAuOTk0bC03LjYyNyw0My45Yy0wLjM1NCwyLjAzMy0xLjMyNiwzLjcxMy0yLjkxNyw1LjA0ICBjLTEuNTkzLDEuMzI2LTMuNDA1LDEuOTg5LTUuNDM4LDEuOTg5aC04NC44ODNjLTIuMDMzLDAtMy44NDYtMC42NjMtNS40MzgtMS45ODljLTEuNTkxLTEuMzI3LTIuNTY0LTMuMDA3LTIuOTE4LTUuMDRsLTcuNjI2LTQzLjkgIGgtMC45OTVjLTIuMzQzLDAtNC4zNDQtMC44MjktNi4wMDEtMi40ODdjLTEuNjU4LTEuNjU3LTIuNDg3LTMuNjU4LTIuNDg3LTYuMDAxYzAtMi4zNDMsMC44MjktNC4zNDMsMi40ODctNi4wMDIgIGMxLjY1OC0xLjY1OCwzLjY1OS0yLjQ4Niw2LjAwMS0yLjQ4Nkg5NTUuNDE4eiBNODYwLjI1Niw5NDAuNTYzYzEuMTQ5LTAuMDg5LDIuMTExLTAuNTg1LDIuODg1LTEuNDkxICBjMC43NzMtMC45MDcsMS4xMTYtMS45MzYsMS4wMjgtMy4wODVsLTIuMTIyLTI3LjU4NmMtMC4wODgtMS4xNS0wLjU4NS0yLjExMS0xLjQ5Mi0yLjg4NWMtMC45MDYtMC43NzQtMS45MzQtMS4xMTctMy4wODMtMS4wMjggIGMtMS4xNDksMC4wODgtMi4xMTEsMC41ODYtMi44ODUsMS40OTJzLTEuMTE2LDEuOTM0LTEuMDI4LDMuMDgzbDIuMTIyLDI3LjU4N2MwLjA4OCwxLjEwNSwwLjU0MiwyLjAzNCwxLjM1OSwyLjc4NSAgYzAuODE4LDAuNzUyLDEuNzgsMS4xMjgsMi44ODUsMS4xMjhIODYwLjI1NnogTTg4Ny41MTIsOTM2LjMxOXYtMjcuNTg3YzAtMS4xNDktMC40Mi0yLjk4NC0xLjI2LTIuOTg0ICBjLTAuODQtMC44NC0xLjgzNC0xLjI2LTIuOTg0LTEuMjZzLTIuMTQ0LDAuNDItMi45ODQsMS4yNmMtMC44NCwwLjg0MS0xLjI2LDEuODM1LTEuMjYsMi45ODR2MjcuNTg3YzAsMS4xNDksMC40MiwyLjE0NSwxLjI2LDIuOTg0ICBjMC44NCwwLjg0LDEuODM1LDEuMjYsMi45ODQsMS4yNnMyLjE0NC0wLjQyLDIuOTg0LTEuMjZDODg3LjA5Miw5MzguNDY0LDg4Ny41MTIsOTM3LjQ2OSw4ODcuNTEyLDkzNi4zMTl6IE05MTIuOTc3LDkzNi4zMTkgIHYtMjcuNTg3YzAtMS4xNDktMC40Mi0yLjk4NC0xLjI2LTIuOTg0Yy0wLjg0MS0wLjg0LTEuODM1LTEuMjYtMi45ODQtMS4yNnMtMi4xNDUsMC40Mi0yLjk4NCwxLjI2ICBjLTAuODQsMC44NDEtMS4yNiwxLjgzNS0xLjI2LDIuOTg0djI3LjU4N2MwLDEuMTQ5LDAuNDIsMi4xNDUsMS4yNiwyLjk4NHNxMS44MzUsMS4yNiwxLjI2LDIuOTg0LDEuMjZzMi4xNDQtMC40MiwyLjk4NC0xLjI2ICBDOTEyLjU1Nyw5MzguNDY0LDkxMi45NzcsOTM3LjQ2OSw5MTIuOTc3LDkzNi4zMTl6IE05MzYuMzE5LDkzNi42NWwyLjEyMi0yNy41ODdjMC4wODgtMS4xNDktMC4yNTQtMi4xNzctMS4wMjctMy4wODMgIHMtMS43MzUtMS40MDQtMi44ODUtMS40OTJjLTEuMTUtMC4wODktMi4xNzgsMC4yNTQtMy4wODQsMS4wMjhjLTAuOTA2LDAuNzczLTEuNDA0LDEuNzM0LTEuNDkyLDIuODg1bC0yLjEyMiwyNy41ODYgIGMtMC4wODgsMS4xNDksMC4yNTQsMi4xNzgsMS4wMjcsMy4wODVjMC43NzQsMC45MDYsMS43MzYsMS40MDIsMi44ODUsMS40OTFoMC4zMzJjMS4xMDUsMCwyLjA2Ni0wLjM3NiwyLjg4NS0xLjEyOCAgQzkzNS43NzcsOTM4LjY4NSw5MzYuMjMsOTM3Ljc1Niw5MzYuMzE5LDkzNi42NXogTTg1OS42Niw4NTUuOTQ2bC02LjE2NywyNy4zMjJoLTguNzUzbDYuNjk4LTI5LjI0NSAgYzAuODQtMy44OSwyLjgwNy03LjA2Miw1LjkwMi05LjUxNmMzLjA5NS0yLjQ1Myw2LjYzMi0zLjY4LDEwLjYxMS0zLjY4aDExLjA3NGMwLTEuMTQ5LDAuNDItMi4xNDQsMS4yNi0yLjk4NCAgYzAuODQtMC44NCwxLjgzNS0xLjI2LDIuOTg0LTEuMjZoMjUuNDY1YzEuMTQ5LDAsMi4xNDQsMC40MiwyLjk4NCwxLjI2YzAuODQsMC44NCwxLjI2LDEuODM0LDEuMjYsMi45ODRoMTEuMDc0ICBjMy45NzksMCw3LjUxNiwxLjIyNywxMC42MTEsMy42OGMzLjA5NCwyLjQ1NCw1LjA2Miw1LjYyNiw1LjkwMSw5LjUxNmw2LjY5NywyOS4yNDVoLTguNzUzbC02LjE2OC0yNy4zMjIgIGMtMC40ODYtMS45NDUtMS40OTEtMy41MzctMy4wMTctNC43NzRjLTEuNTI1LTEuMjM4LTMuMjgyLTEuODU3LTUuMjcyLTEuODU3aC0xMS4wNzRjMCwxLjE1LTAuNDIsMi4xNDQtMS4yNiwyLjk4NCAgYy0wLjg0MSwwLjg0LTEuODM1LDEuMjYtMi45ODQsMS4yNmgtMjUuNDY1Yy0xLjE0OSwwLTIuMTQ0LTAuNDItMi45ODQtMS4yNmMtMC44NC0wLjg0LTEuMjYtMS44MzQtMS4yNi0yLjk4NGgtMTEuMDc0ICBjLTEuOTksMC0zLjc0NywwLjYxOS01LjI3MiwxLjg1N0M4NjEuMTUyLDg1Mi40MDksODYwLjE0Niw4NTQsODU5LjY2LDg1NS45NDZ6Ii8+CgkJCQk8L3N2Zz4=" 
                                alt="" 
                                onClick={handleModalToggle}
                            />
                            <div className="w-[21px] h-[21px] bg-red-400 text-white flex items-center justify-center absolute top-[-10px] right-[-10px] rounded-full text-xs">
                                {cart.length}
                            </div>
                        </div>
                        <div className="">
                            <FaUser />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isModalOpen && (
                <div className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-lg z-50">
                    <div className="p-4">
                        <button onClick={handleModalToggle} className="absolute top-2 right-2 text-xl">&times;</button>
                        <h2 className="text-lg font-semibold">Cart Details</h2>

                        <ul className="divide-y divide-gray-200">
                            {cart.map(item => (
                                <li key={item.id} className="flex items-center p-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded-lg"/>
                                    <div className="flex-1">
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-gray-600">{item.price}</div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <ImCross className='' onClick={removeItemFromCart}/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Header