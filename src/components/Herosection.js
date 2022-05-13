import React from 'react'
import {Link} from 'react-router-dom'

function Herosection() {
    return (
        <div className="bg-sky-500 h-[390px] lg:h-[400px] mt-0 relative lg:mt-10 lg:mx-10 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/assets/sale_items/large_image.png")' }}>
            <h1 className="text-white text-2xl font-bold pt-6 pl-6 lg:p-0 lg:pt-20 lg:pl-20 lg:text-[40px] leading-[48px]">Your favorite customized <br /> <span className="text-[#F9DC38]">Club Jerseys.</span></h1>

            <div className="absolute flex justify-between bottom-0 left-0 right-0 mb-6">
                <div className="mr-6 flex justify-start">
                    <img src="/asset/icons/indicator_main.png" alt="" className="w-8 h-[2px]" />
                    <img src="/asset/icons/indicator.png" alt="" className="w-8 h-[2px]" />
                    <img src="/asset/icons/indicator.png" alt="" className="w-8 h-[2px]" />
                    <img src="/asset/icons/indicator.png" alt="" className="w-8 h-[2px]" />
                    <img src="/asset/icons/indicator.png" alt="" className="w-8 h-[2px]" />
                </div>
                <Link to="/sample-product">
                    <div className="flex justify-start items-center mr-6">
                        <button className="border-2 border-white text-white h-10 center-el font-normal text-3 pr-[23px] pl-4">Shop</button>
                        <div class="bg-white h-10 w-10 center-el">
                            <img src="/assets/icons/shopping_bag.png" alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Herosection