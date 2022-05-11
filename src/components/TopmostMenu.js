

function TopmostMenu() {
    return (
        <div id="topmost-menu" className="h-8 flex justify-between items-stretch">
            <div id="language" className="flex items-center lg:w-40 lg:justify-center bg-[#0a0707a1] text-white ">
                <img src="/assets/icons/world_lang.png" alt="" className="w-3 h-3 mr-1.5 ml-2.5" />
                <div className="mr-1 lg:mr-[6px] font-semibold text-[11px]">EN</div>
                <img src="/assets/icons/Polygon_1.png" alt="" className="mr-3.5" />
            </div>
            <div id="announcement" className="flex items-center flex-1 lg:text-center text-white bg-black text-[11px] font-semibold font-montserrat">SALES BEGIN  •  FREE SHIPPING ON A</div>
            <div id="whatsapp-link" className="flex items-center md:w-[208px] lg:justify-center bg-[#27B03F] text-white font-bold text-[11px] text-right lg:pr-0 pr-3.5"> <img src="/assets/icons/whatsapp.png" className="h-4 w-4 mr-4 lg:mr-2 ml-3.5" alt="" /> <span className="lg:hidden">Chat</span> <span className="lg:visible">Chat with us</span> </div>
        </div>
    )
}

export default TopmostMenu