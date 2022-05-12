

function collection() {
    const other_collections = [
        {
            image_url: "/assets/other_collections/kids.png",
            type: "Kids"
        },
        {
            image_url: "/assets/other_collections/large_sizes.png",
            type: "Large Sizes"
        },
        {
            image_url: "/assets/other_collections/goal_keeper.png",
            type: "Goalkeeper"
        },
        {
            image_url: "/assets/other_collections/pro_player.png",
            type: "Authentic / Pro Player"
        },
        {
            image_url: "/assets/other_collections/shorts.png",
            type: "Shorts"
        },
        {
            image_url: "/assets/other_collections/socks.png",
            type: "Socks"
        },
    ];
    return (
        <div className="mx-4 lg:mx-20 mt-40">
            <h1 className="font-extrabold text-2xl lg:mb-20 text-[32px]">OTHER COLLECTIONS</h1>
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4">
                {other_collections.map(oc => (<div className="h-[167.81px] lg:h-[240px] lg:w-[429px] relative bg-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${oc.image_url})` }}>
                    <div className="h-[33.56px] flex justify-between absolute bottom-0 left-0 right-0">
                        <div className="h-[33.56px] w-full bg-[#11111266] backdrop-blur-sm flex items-center">
                            <p className="font-semibold text-[9.79px] text-white ml-[16.78px]">{oc.type}</p>
                        </div>
                        <div className="bg-[#F9DC38] h-[33.56px] w-[33.56px] flex items-center justify-center">
                            <img src="/assets/icons/other_collections_right_indicator.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>))}
            </div>
        </div>

    )
}

export default collection