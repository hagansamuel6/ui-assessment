

function Personalization() {
  return (
    <div className="flex justify-between flex-wrap lg:flex-nowrap mt-20 lg:mt-40">
      <div className="lg:ml-20 w-full mx-4 lg:w-1/2 lg:mr-5">
        <div className="h-[218.29px] lg:h-[400px] pl-[21.83px] bg-black bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/assets/personalization/personalization_image.png")' }}>
          <h1 class="font-bold text-white text-[13.1px] lg:text-[24px] pt-[117.27px] lg:pt-[232px]">PERSONALIZATION</h1>
          <p className="mt-[13.1px] lg:mt-6 lg:text-xs text-white font-normal text-[8.71px] leading-6 mb-[21.83px]">Put a custom print on the football shirt of your choice with our Personalization service. Tell us what name, what number and we put it. <span className="font-bold">FREE!!!</span> </p>
        </div>
      </div>
      <div className="mt-[21.83px]  w-full mx-4 lg:mt-0 lg:w-1/2 lg:ml-5 lg:mr-20">
        <div className="h-[218.29px] lg:h-[400px] pl-[21.83px] bg-[#91A0C9] contrast-100 bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/assets/personalization/social.png")' }}>
          <h1 class="font-bold text-white text-[13.1px] lg:text-[24px] pt-[117.27px] lg:pt-[232px]">SOCIAL NETWORKS</h1>
          <p className="mt-[13.1px] lg:mt-6 lg:text-xs text-white font-normal text-[8.71px] mb-[21.83px]">Share your shirts with us with the #CamisetasFutbolSpainnn</p>
          <div id="social" className="flex justify-start mt-[13.1px] lg:mb-10">
            {/* these are hidden on large screens */}
            <img src="/assets/icons/Facebook.png" className="mr-[4.37px] lg:hidden" alt="" srcset="" />
            <img src="/assets/icons/Twitter.png" className="mr-[4.37px] lg:hidden" alt="" srcset="" />
            <img src="/assets/icons/Instagram.png" className="mr-[4.37px] lg:hidden" alt="" srcset="" />

          {/* these are shown on large screens */}
            <img src="/assets/icons/Facebook_large.png" className="mr-[4.37px] lg:mr-2 hidden lg:inline-block" alt="" srcset="" />
            <img src="/assets/icons/Twitter_large.png" className="mr-[4.37px]  lg:mr-2 hidden lg:inline-block" alt="" srcset="" />
            <img src="/assets/icons/Instagram_large.png" className="mr-[4.37px]  lg:mr-2 hidden lg:inline-block" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personalization