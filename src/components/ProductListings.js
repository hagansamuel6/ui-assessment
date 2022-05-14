import React from 'react'
import {Link} from 'react-router-dom'

function ProductListings() {
    return (
        <div className="mt-[13px] lg:mt-20 ml-4 lg:mx-20">
            <div className="flex justify-between font-extrabold text-2xl lg:text-[32px]">
                <div >
                    <h1>MOST POPULAR <br className="lg:hidden" /> T-SHIRTS</h1>
                    <div className="flex justify-between">
                        <div className="h-4 bg-slate-600"></div>
                        <div className="h-4 bg-black"></div>
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    {/* left indicator */}
                    <div className="border-2 border-gray-200 h-10 w-10 center-el">
                        <img src="/assets/icons/left_indicator.png" alt="" />
                    </div>
                    {/* right indicator */}
                    <div className="border-2 border-gray-200 h-10 w-10 center-el ml-1">
                        <img src="/assets/icons/right_indicator.png" alt="" />
                    </div>
                </div>
            </div>

            
            <div className="mt-6 lg:mt-20">
                {/* sale item */}
                <Link to='/sample-product'>
                    <div className="inline-block w-60 h-60">
                        {/* <img className="w-full" src="/assets/sale_items/item_1.png" alt="" /> */}
                        <div className="w-full bg-no-repeat bg-cover h-60 relative" style={{ backgroundImage: "url('/assets/sale_items/item_1.png')" }}>
                            <div className="absolute bottom-0  left-0 bg-[#23C353] text-white font-normal text-[10px] m-4 py-1 px-2">Save 67%</div>
                        </div>

                        <div className="p-4 border-2">
                            <p className="text-sm font-normal leading-5">Manchester United 21-22</p>
                            <div className="flex items-center mt-2 ">
                                <p className="inline-block font-bold text-[#111112] text-xl mr-2">€30.00 </p>
                                <p className="inline-block font-normal text-[#EE503E] text-xs line-through">€89.95</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* <div className="inline-block w-60 h-60 ml-8"> */}
                    {/* <img className="w-full" src="/assets/sale_items/item_1.png" alt="" /> */}
                    {/* <div className="w-full bg-no-repeat bg-cover h-60 relative" style={{ backgroundImage: "url('/assets/sale_items/item_1.png')" }}>
                        <div className="absolute bottom-0  left-0 bg-[#23C353] text-white font-normal text-[10px] m-4 py-1 px-2">Save 67%</div>
                    </div>
                    <div className="p-4 border-2 overflow-hidden">
                        <p className="text-sm font-normal leading-5 overflow-hidden block">Manchester United 21-22</p>
                        <div className="flex items-center mt-2 ">
                            <p className="inline-block font-bold text-[#111112] text-xl mr-2">€30.00 </p>
                            <p className="inline-block font-normal text-[#EE503E] text-xs line-through">€89.95</p>
                        </div>
                    </div>
                </div> */}
                {/* {[1, 1, 1, 1].map(item => (<Products />))} */}
                {/* ./sale-item */}
            </div>
        </div>
    )
}

export default ProductListings