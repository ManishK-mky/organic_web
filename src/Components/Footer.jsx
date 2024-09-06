import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] h-[100vh] bg-black flex text-gray-400'>
      <div className="w-[45%] h-[100%] flex flex-col justify-center items-center">
        <div className="w-[50%]">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" alt="" />
        </div>
        <div className="w-[50%] h-[30vh] mt-[45px]">
          <p>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
        </div>
      </div>
      <div className="w-[15%] h-[100%] flex justify-center items-center">
        <div className="w-[60%] h-[60vh] flex flex-col gap-y-[100px]">
          <div className="w-[100%] h-[50%]">
            <div className="text-[27px] text-white">
              <h1>Quick Links</h1>
            </div>
            <div className="mt-[15px] text-[15px]">
              <p>About</p>
              <p>Cart</p>
              <p>Checkout</p>
              <p>Contact</p>
              <p>Home</p>
              <p>My account</p>
              <p>Shop</p>
            </div>
          </div>
          <div className="w-[100%] h-[50%]">
              <div className="text-[27px] text-white ">
                <h1>Site Links</h1>
              </div>
              <div className="mt-[15px] text-[15px]">
                <p>Privacy Policy</p>
                <p>Shipping Details</p>
                <p>Offers Coupons</p>
                <p>Terms & Conditions</p>
              </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-[100%] flex justify-center items-center">
        <div className="w-[60%] h-[60vh] flex flex-col gap-y-[100px]">
          <div className="w-[100%] h-[45%]">
            <div className="text-[27px] text-white">
              <h1>Download Our Mobile App</h1>
            </div>
            <div className="mt-[21px]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
            </div>
          </div>
          <div className="w-[100%] h-[35%]">
            <div className="text-[27px] text-white">
              <h1>Quick Links</h1>
            </div>
            <div className="mt-[21px]">
              <p>Know More About Us</p>
              <p>Visit Store</p>
              <p>Let's Connect</p>
              <p>Locate Store</p>
            </div>
          </div>
          <div className="w-[100%] h-[20%] flex mt-[12px]">
            <div className="">
              <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="" />
            </div>
            <div className="">
              <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
