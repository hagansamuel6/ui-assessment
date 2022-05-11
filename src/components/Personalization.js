

function Personalization() {
  return (
    <div className="flex justify-center lg:mt-20">
      <div className="ml-4 lg:ml-20 lg:w-1/2  lg:mr-5">
        <div className="h-[218.29px] lg:h-[400px] pl-[21.83px] bg-black bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/assets/personalization/personalization_image.png")' }}>
          <h1 class="font-bold text-white text-[13.1px] pt-[117.27px]">PERSONALIZATION</h1>
          <p className="mt-[13.1px] text-white font-normal text-[8.71px] mb-[21.83]">Put a custom print on the football shirt of your choice with our Personalization service. Tell us what name, what number and we put it. <span className="font-bold">FREE!!!</span> </p>
        </div>
      </div>
      <div className="mr-4 mt-[21.83px] lg:mt-0 lg:w-1/2 lg:ml-5 lg:mr-20">
        <div className="h-[218.29px] lg:h-[400px] pl-[21.83px] bg-blue-200 bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/assets/personalization/social.png")' }}>
          <h1 class="font-bold text-white text-[13.1px] pt-[117.27px]">SOCIAL NETWORKS</h1>
          <p className="mt-[13.1px] text-white font-normal text-[8.71px] mb-[21.83]">Share your shirts with us with the #CamisetasFutbolSpainnn</p>
          <div id="social" className="flex justify-start mt-[13.1px]">
            <img src="/assets/icons/Facebook.png" className="mr-[4.37px]" alt="" srcset="" />
            <img src="/assets/icons/Twitter.png" className="mr-[4.37px]" alt="" srcset="" />
            <img src="/assets/icons/Instagram.png" className="mr-[4.37px]" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personalization