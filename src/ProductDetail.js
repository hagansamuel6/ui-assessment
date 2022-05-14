import React from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { ProductInformation } from './components/ProductInformation'
import Breadcrumb from './components/product_detail_comps/Breadcrumb'
import Rewards from './components/Rewards'
import TopmostMenu from './components/TopmostMenu'

function ProductDetail() {
    return (
        <>
            <TopmostMenu />
            <Navigation />
            <Breadcrumb />
            <div className='mx-4 md:mx-40 mt-6'>
                <div className='flex flex-wrap md:flex-nowrap justify-between'>
                    <div className='grid grid-cols-5 w-full md:w-[560px]'>
                        <img className='h-[358px]  lg:h-[560px] w-full col-span-6 mb-[10.23px]' src="/assets/product_details/product_main_image.png" alt="" />
                        <img className='md:h-20 md:w-20 md:-mt-4' src="/assets/product_details/product_detail_one.png" alt="" />
                        <img className='md:h-20 md:w-20 md:-mt-4' src="/assets/product_details/pr_detail_faded.png" alt="" />
                        <img className='md:h-20 md:w-20 md:-mt-4' src="/assets/product_details/pr_detail_faded.png" alt="" />
                        <img className='md:h-20 md:w-20 md:-mt-4' src="/assets/product_details/pr_detail_faded.png" alt="" />
                        <img className='md:h-20 md:w-20 md:-mt-4' src="/assets/product_details/pr_detail_faded.png" alt="" />
                        <img className='md:h-20 md:w-20 md:-mt-4' src="/assets/product_details/pr_detail_faded.png" alt="" />
                    </div>

                    <div className='w-full md:w-1/2 md:ml-10'>
                        <ProductInformation />
                    </div>
                </div>
            </div>
            <div className="hidden md:block mt-[18.93px] md:mt-6">
                <img src="/assets/icons/rewards.png" alt="" />
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail