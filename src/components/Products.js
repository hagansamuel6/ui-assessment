import React from 'react'

function Products() {
  return (
    <div className="w-60 h-60 ml-8">
            {/* <img className="w-full" src="/assets/sale_items/item_1.png" alt="" /> */}
            <div className="w-full bg-no-repeat bg-cover h-60 relative" style={{backgroundImage: "url('/assets/sale_items/item_1.png')"}}>
              <div className="absolute bottom-0  left-0 bg-[#23C353] text-white font-normal text-[10px] m-4 py-1 px-2">Save 67%</div>
            </div>

            <div className="p-4 border-2 ">
              <p className="text-sm font-normal leading-5">Manchester United 21-22</p>
              <div className="flex items-center mt-2 ">
                <p className="inline-block font-bold text-[#111112] text-xl mr-2">€30.00 </p>
                <p className="inline-block font-normal text-[#EE503E] text-xs line-through">€89.95</p>
              </div>
            </div>
          </div>
  )
}

export default Products