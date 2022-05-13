import CountryLeagues from "./components/CountryLeagues";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import OtherCollection from './components/other_collections/OtherCollection'
import Personalization from "./components/Personalization";
import Social from "./components/Social";
import { Link } from "react-router-dom";
import TopmostMenu from "./components/TopmostMenu";
import Products from "./components/Products";

function App() {
  return (
    <>
      {/* topmost menu */}
      <TopmostMenu />
      {/* ./topmost menu */}

      {/* navigation */}
      <Navigation />
      {/* ./navigation */}

      {/* hero section */}
      <div className="bg-sky-500 h-[390px] lg:h-[400px] mt-0 relative lg:mt-10 lg:mx-10 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/assets/sale_items/large_image.png")' }}>
        <h1 className="text-white text-2xl font-bold pt-6 pl-6 lg:p-0 lg:pt-20 lg:pl-20 lg:text-[40px] leading-[48px]">Your favorite customized <br /> <span className="text-[#F9DC38]">Club Jerseys.</span></h1>

        <div className="absolute flex justify-between bottom-0">
          <div>
            indicators
          </div>
          <Link to="/sample-product">
            <button>Shop</button>
          </Link>
        </div>
      </div>
      {/* ./hero section */}

      {/* promo features */}
      <div className="grid grid-cols-2 gap-2 md:flex justify-between mt-4 md:mt-10 md:mx-10 mx-4">
        <img src="/assets/promotion/secure_shipping.png" alt="" />
        <img src="/assets/promotion/tel.png" alt="" />
        <img src="/assets/promotion/whatsapp.png" alt="" />
        <img src="/assets/promotion/quali.png" alt="" />
      </div>
      {/* ./promo features */}

      {/* rewards logo */}
      <div className="mt-[18.93px] md:mt-[28px]">
        <img src="/assets/icons/rewards.png" alt="" />
      </div>
      {/* ./rewards logo */}

      {/* most popular shirts */}
      <div className="mt-[13px] lg:mt-20 ml-4 lg:mx-20">
        <div className="flex justify-between font-extrabold text-2xl lg:text-[32px]">
          <div >
            <h1>MOST POPULAR <br className="lg:hidden" /> T-SHIRTS</h1>
            <div className="flex justify-between">
              <div className="h-4 bg-slate-600"></div>
              <div className="h-4 bg-black"></div>
            </div>
          </div>
          <div className="flex just">
            {/* left indicator */}
            <div className="border-2 border-gray-500"></div>
            {/* right indicator */}
            <div className="border-2 border-gray-500"></div>
          </div>
        </div>

        <div className="mt-6 lg:mt-20 flex ">
          {/* sale item */}
          <div className="w-60 h-60">
            {/* <img className="w-full" src="/assets/sale_items/item_1.png" alt="" /> */}
            <div className="w-full bg-no-repeat bg-cover h-60 relative" style={{ backgroundImage: "url('/assets/sale_items/item_1.png')" }}>
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
          {/* {[1, 1, 1, 1].map(item => (<Products />))} */}
          {/* ./sale-item */}
        </div>
      </div>
      {/* ./ most popular shirts */}
      <div className="lg:mt-20"></div>

      {/* country leagues */}
      <CountryLeagues />
      {/* ./ country leagues */}


      {/* other collections */}
      <OtherCollection />
      {/* ./other collections */}


      {/* personalization */}
      <Personalization />
      {/* ./personalization */}

      {/* social networks */}
      <Social />
      {/* ./social networks */}

      {/* footer nav */}
      <Footer />
      {/* ./footer nav */}
    </>
  );
}

export default App;
