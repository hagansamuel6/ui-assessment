
function CountryLeagues() {
    return (
        <div className="mx-4 mt-60 lg:mx-20">
            <h1 className="font-extrabold text-2xl lg:text-[32px] lg:my-20 ">COUNTRY LEAGUES</h1>
            <div className="mt-6 grid grid-cols-2 gap-4  lg:flex lg:justify-start">
                <div className="">
                    <img className="lg:w-[257px] lg:h-[257px]" src="/assets/league_images/champions.png" alt="" />
                    <p className="font-bold text-[10.81px] lg:text-[16px] mt-[10.81px]">Champions League</p>
                </div>
                <div className="">
                    <img className="lg:w-[257px] lg:h-[257px]" src="/assets/league_images/europa.png" alt="" />
                    <p className="font-bold text-[10.81px] lg:text-[16px] mt-[10.81px]">Europe League</p>
                </div>
                <div className="">
                    <img className="lg:w-[257px] lg:h-[257px]" src="/assets/league_images/copa.png" alt="" />
                    <p className="font-bold text-[10.81px] lg:text-[16px] mt-[10.81px]">Copa America</p>
                </div>
                <div className="">
                    <img  className="lg:w-[257px] lg:h-[257px]"src="/assets/league_images/asian.png" alt="" />
                    <p className="font-bold text-[10.81px] lg:text-[16px] mt-[10.81px]">Asian Cup</p>
                </div>
                <div className="">
                    <img className="lg:w-[257px] lg:h-[257px]" src="/assets/league_images/africa.png" alt="" />
                    <p className="font-bold text-[10.81px] lg:text-[16px] mt-[10.81px]">African Nations Cup</p>
                </div>
            </div>
        </div>
    )
}

export default CountryLeagues