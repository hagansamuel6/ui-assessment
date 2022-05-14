import React from 'react'

function Footer() {

    const main_menu_items = ['Home', 'T-Shirts', 'NBA', 'Tracksuits', 'Products Delivery  •  1 – 2 days', 'Contact', 'Reviews'];
    const secondary_menu_items = ['Search', 'Privacy Policy', 'Shipping Policy', 'Returns Policy', 'Terms of Service'];
    return (
        <footer className="bg-[#F5F5F6] lg:mt-20 mt-[82.76px] pt-10">
            <div className='mx-4 lg:mx-20 mt-10 lg:mt-20'>
                <div className="mx-4 lg:mx-0 flex flex-wrap lg:flex-wrap justify-between items-start">
                    <div className="w-full lg:w-1/4">
                        <h3 className="font-bold text-[16px] tracking-normal">Main Menu</h3>
                        <ul className="mt-2">
                            {main_menu_items.map(item => (<li className="font-normal text-sm mt-4"><p>{item}</p></li>))}
                        </ul>
                    </div>

                    <div className='mt-10 lg:mt-0 w-full lg:w-1/4'>
                        <h3 className="font-bold text-xl tracking-normal">Secondary Menu</h3>
                        <ul className="mt-2">
                            {secondary_menu_items.map(item => (<li className="font-normal text-sm mt-4">{item}</li>))}
                        </ul>
                    </div>

                    <div className='mt-10 lg:mt-0 w-full lg:w-1/4'>
                        <h1 className='text-normal font-bold'>Subscribe</h1>
                        <div className='mt-6'>
                            <p className='font-normal text-sm'>Subscribe to our mailing list to receive the latest news.</p>
                        </div>
                        <div className='mt-4 flex justify-start'>
                            <input type="" id="" name="" placeholder="Email Address" className='w-60 h-10 font-normal text-xs pl-5 py-3 '/>
                            <button className='w-10 h-10 bg-[#F9DC38] center-el'>
                                <img src="/assets/icons/subscribe_send_email.png" className='' alt="" />
                            </button>
                        </div>
                    </div>

                    <div className='mt-10 lg:mt-0 text-left w-full lg:w-1/4 lg:pl-[132px]'>
                        <h1 className='text-xl font-bold'>Follow Us</h1>
                        <div className='mt-4 flex justify-start'>
                            <img src="/assets/icons/Facebook_b.png" className='mr-2' alt="" />
                            <img src="/assets/icons/Twitter_b.png" className='mr-2' alt="" />
                            <img src="/assets/icons/Instagramb.png" className='mr-2' alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex  flex-col lg:flex-row justify-between lg:items-center lg:mx-20'>
                <div className='mt-10 mx-4 lg:mx-0  center-el lg:order-last'>
                    <img src="assets/payment/payment_methods.png" alt="" />
                </div>

                <div className='mt-10  border-t border-t-[#EAEAEC]'>
                    <div className='mx-4 lg:mx-0 h-16 flex justify-start items-center '>
                        <p className='font-normal text-xs text-[#111112]'>© 2022 CFSpainnn  •  All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer