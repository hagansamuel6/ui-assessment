import React from 'react'

function Navigation() {

  const menu_items = [
    'NBA',
    'Tracksuits',
    'Products Delivery  •  1 – 2 days'
  ]
  return (
    <nav id="navigation-menu" className="flex justify-between h-[72px] bg-[#F5F5F6]">
      <div className='lg:w-40 lg:h-[88px] lg:bg-[#F9DC38]'>

      </div>
      <div className='hidden lg:block flex-1 bg-white'>
        <div className='h-[56px] flex border-b'>
          <div className='w-44 h-full  flex justify-center items-center border-r '>
            <p className='font-semibold text-xs'>All Categories</p>
            <img className='ml-2' src="/assets/icons/dropdown_black.png" alt="" />
          </div>
          <div className='flex justify-between flex-1'>
            <input type="text" className='w-full h-full flex-1 bg-white font-light text-[16px] pl-6' placeholder='What are you looking for?' />
            <div className="flex justify-center items-center">
              <div className='flex justify-center items-center bg-[#F9DC38] w-20 h-10 font-semibold text-xs '>
                Search
              </div>
              <div className='bg-black mr-10 h-10 w-10 flex justify-center items-center'>
                <img src="/assets/icons/search_white.png" alt="" />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center border-x'>
            <img src="/assets/icons/cart.png" className='py-[18px] px-[42px]' alt="" />
          </div>
          <div className='flex justify-center items-center'>
            <img src="/assets/icons/user.png" className='py-[18px] pl-[34px]' alt="" />
            <img className='ml-[6px] mr-[36px]' src="/assets/icons/dropdown_black.png" alt="" />
          </div>
        </div>
        <div className='h-[32px] border-b'>
          <ul className='flex items-center justify-start list-none ml-10'>
            <li className='py-2 border-b-2 border-yellow-400 font-bold text-xs'>
              Home
            </li>
            <li className='flex justify-center items-center ml-14 font-bold text-[#666666]'>
              T-Shirts
              <img className='ml-2' src="/assets/icons/menu_dropdown.png" alt="" />
            </li>
            <li className='flex justify-center items-center ml-[60px] font-bold text-[#666666]'>
              NBA
              <img className='ml-2' src="/assets/icons/menu_dropdown.png" alt="" />
            </li>
            <li className='flex justify-center items-center ml-[60px] font-bold text-[#666666]'>
              Tracksuits
              <img className='ml-2' src="/assets/icons/menu_dropdown.png" alt="" />
            </li>
            <li className='flex justify-center items-center ml-[60px] font-bold text-[#666666]'>
              Products Delivery  •  1 – 2 days
            
            </li>
            <li className='flex justify-center items-center ml-[56px] font-bold text-[#666666]'>
              Contact
              
            </li>
            <li className='flex justify-center items-center ml-[56px] font-bold text-[#666666]'>
              Reviews
              
            </li>
          </ul>
        </div>
      </div>

      {/* menu to be shown on small devices */}
      <div className="lg:hidden flex items-center">
        <div className="ml-5">mm</div>
        <div>
          <img src="/assets/icons/search.png" alt="" srcset="" className="ml-8" />
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <div>
          <img src="/assets/icons/cart.png" alt="" className="mr-7" />
        </div>
        <div className="flex items-center">
          <img src="/assets/icons/user.png" alt="" className="mr-1.5" />
          <img src="/assets/icons/dropdown_black.png" alt="" srcset="" className="mr-[34px]" />
        </div>
      </div>
    </nav>
  )
}

export default Navigation