import CountryLeagues from "./components/CountryLeagues";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import OtherCollection from './components/other_collections/OtherCollection'
import Personalization from "./components/Personalization";
import Social from "./components/Social";
import { Link } from "react-router-dom";
import TopmostMenu from "./components/TopmostMenu";
import Products from "./components/Products";
import Herosection from "./components/Herosection";
import PromoFeatures from "./components/PromoFeatures";
import ProductListings from "./components/ProductListings";
import Rewards from "./components/Rewards";

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
      <Herosection/>
      {/* ./hero section */}

      {/* promo features */}
      <PromoFeatures/>
      {/* ./promo features */}

      {/* rewards logo */}
      <Rewards/>
      {/* ./rewards logo */}

      {/* most popular shirts */}
      <ProductListings/>

      {/* ./ just a divider */}
      <div className="lg:mt-20"></div>
      {/** */}

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
