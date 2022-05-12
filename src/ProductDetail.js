import React from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Breadcrumb from './components/product_detail_comps/Breadcrumb'
import TopmostMenu from './components/TopmostMenu'

function ProductDetail() {
    return (
        <>
            <TopmostMenu />
            <Navigation />
            <Breadcrumb />
            <div className='mx-4 mt-6'>
                <div className='grid grid-cols-5 '>
                    <img className='h-[358px] w-full col-span-6 mb-[10.23px]' src="/assets/product_details/product_main_image.png" alt="" />
                    <img src="/assets/product_details/product_detail_one.png" alt="" />
                    <img src="/assets/product_details/pr_detail_faded.png" alt="" />
                    <img src="/assets/product_details/pr_detail_faded.png" alt="" />
                    <img src="/assets/product_details/pr_detail_faded.png" alt="" />
                    <img src="/assets/product_details/pr_detail_faded.png" alt="" />
                    <img src="/assets/product_details/pr_detail_faded.png" alt="" />
                </div>

                <div className='mt-[41px]'>
                    <p className='font-bold text-xl'>Manchester United 21-22 Home <br /> Shirt</p>
                </div>

                <div className='mt-4'>
                    <div className='flex items-center'>
                        <p className='font-bold text-[32px] font-montserrat'>€30.00</p>
                        <p className='text-normal text-[#EE503E] ml-4 line-through'>€89.95</p>
                        <div className='ml-4 bg-[#23C353] font-semibold text-white text-sm py-1 px-2'>
                            Save 67%
                        </div>

                        <div className='h-10 w-10 border ml-[41px] flex items-center justify-center'>
                            <img src="/assets/icons/heart.png" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <p className='font-normal text-xs leading-5 mt-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare,
                        dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit... <span className='font-bold  underline'>Read More</span>
                    </p>
                </div>

                <div className='mt-10'>
                    <div className='flex justify-between items-center h-10'>
                        <p className='font-semibold text-xs w-20'>Size <span className='text-orange-600'>*</span> </p>
                        <div className='flex w-full justify-between'>
                            <select name="" id="" className='border border-[#EAEAEC] w-[169px] py-3 px-4 ml-2 font-normal text-xs'>
                                <option value="">Select a shirt size</option>
                            </select>
                            <div className='bg-[#EAEAEC] flex justify-center items-center ml-2'>
                                <p className='my-3 mx-4 font-semibold text-xs'>Size Chart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between items-center h-10'>
                        <p className='font-semibold text-xs w-20'>Name</p>
                        <div className='w-full ml-2'>
                            <input type="text" id="" name="" placeholder="What name would you want in the shirt?" className='border w-full border-[#EAEAEC] py-3 px-4 font-normal text-xs' />
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between items-center h-10'>
                        <p className='font-semibold text-xs w-20'>Number on Shirt</p>
                        <div className='w-full ml-2'>
                            <input type="text" id="" name="" placeholder="Enter a number between 0 and 99" className='border w-full border-[#EAEAEC] py-3 px-4 font-normal text-xs' />
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between items-center h-10'>
                        <p className='font-semibold text-xs w-20'>Patch</p>
                        <div className='w-full ml-2'>
                            <select name="" id="" className='border border-[#EAEAEC] w-full py-3 px-4 font-normal text-xs bg-no-repeat bg-right-bottom' style={{ backgroundImage: 'url("/assets/icons/left_indicator.png")' }}>
                                <option value="">Select a patch</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-start items-center h-10'>
                        <p className='font-semibold text-xs w-20'>Quantity</p>
                        <div className=''>
                            <input type="number" id="" name="" className='w-20 h-10 border border-[#EAEAEC] py-3 font-normal text-xs' />
                        </div>
                    </div>
                </div>
                <div className='mt-10 flex justify-start items-center'>
                    <button className='bg-[#F9DC38] font-semibold text-[16.8px] w-[302px] h-14 text-left pl-6'>Add to Cart</button>
                    <div className='h-14 w-14 bg-black flex justify-center items-center'> <img src="/assets/icons/cart_white.png" alt="" /> </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail