import React from 'react'

function Footer() {

    const main_menu_items = ['Home', 'T-Shirts', 'NBA', 'Tracksuits', 'Products Delivery  •  1 – 2 days', 'Contact', 'Reviews'];
    const secondary_menu_items = ['Search', 'Privacy Policy', 'Shipping Policy', 'Returns Policy', 'Terms of Service'];
    return (
        <footer className="bg-[#F5F5F6] mt-[81.76px] pt-10">
            <div className='mx-20'>
                <div className="mx-4 lg:mx-0 flex">
                    <div className="">
                        <h3 className="font-bold text-xl tracking-normal">Main Menu</h3>
                        <ul className="mt-2">
                            {main_menu_items.map(item => (<li className="font-normal text-sm mt-4">{item}</li>))}
                        </ul>
                    </div>

                    <div className='mt-10 lg:mt-0'>
                        <h3 className="font-bold text-xl tracking-normal">Secondary Menu</h3>
                        <ul className="mt-2">
                            {secondary_menu_items.map(item => (<li className="font-normal text-sm mt-4">{item}</li>))}
                        </ul>
                    </div>
                </div>

                <div className='mt-10 mx-4'>
                    <h1 className='text-normal font-bold'>Subscribe</h1>
                    <div className='mt-6'>
                        <p className='font-normal text-sm'>Subscribe to our mailing list to receive the latest news.</p>
                    </div>
                    <div className='mt-4'>
                        <input type="" id="" name="" placeholder="" />
                    </div>
                </div>

                <div className='mt-10 mx-4'>
                    <h1 className='text-xl font-bold'>Follow Us</h1>
                    <div className='mt-4 flex justify-start'>
                        <img src="/assets/icons/Facebook_b.png" className='mr-2' alt="" />
                        <img src="/assets/icons/Twitter_b.png" className='mr-2' alt="" />
                        <img src="/assets/icons/Instagramb.png" className='mr-2' alt="" />
                    </div>
                </div>



            </div>

            <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
                <div className='mt-10 mx-4'>
                    <img src="assets/payment/payment_methods.png" alt="" />
                </div>

                <div className='mt-10  border-t border-t-[#EAEAEC]'>
                    <div className='mx-4 h-16 flex justify-start items-center '>
                        <p className='font-normal text-xs text-[#111112]'>© 2022 CFSpainnn  •  All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer