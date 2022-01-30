const AboutPage = () => {
    const boxes = [
        {
            icon: <i className="fas fa-user text-5xl"></i>,
            heading: "10.5K",
            second_heading: "Customers Daily",
        },
        {
            icon: <i className="fab fa-product-hunt text-5xl"></i>,
            heading: "33K",
            second_heading: "Monthly Product Sales",
        },
        {
            icon: <i className="fas fa-coins text-5xl"></i>,
            heading: "25K",
            second_heading: "Annual Gross",
        },
        {
            icon: <i className="fab fa-intercom text-5xl"></i>,
            heading: "24 / 7 ",
            second_heading: "Customer support day and night"
        },  
        {
            icon: <i className="fas fa-shipping-fast text-5xl"></i>,
            heading: "Free & Fast Delivery",
            second_heading: "Free delivery for all orders above $300"
        },
        {
            icon: <i className="fas fa-exchange-alt text-5xl"></i>,
            heading: "Money Back Guarantee",
            second_heading: "Return items within 30 days"
        },

    ]

    return (
        <div className="w-full px-56 py-16 flex flex-col gap-y-28">
            <div className="w-full flex gap-x-5">
                <div className="w-1/2 flex flex-col gap-y-5 justify-center">
                    <div className="text-5xl font-semibold">Our Story</div>
                    <div>Launched in 2015, EveryoneShops is South Asia’s premier online shopping marketplace with an active presense in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, it has 10,500 sellers and 300 brands and serves 3 million customers across the region.</div>
                    <div>EveryoneShops has 1M{'<'} products to offer, growing at a very fast rate.</div>
                </div>
                <div className="w-1/2">
                    <img
                        src="src\assets\portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
                        alt="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-around gap-5">
                {boxes.map((box, idx) =>
                    <div className="w-64 h-64 border border-gray-500 rounded-md p-5 flex flex-col items-center justify-center gap-2" key={idx}>
                        {box.icon}
                        <div className="text-2xl text-center font-semibold">{box.heading}</div>
                        <div className="text-center ">{box.second_heading}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AboutPage;