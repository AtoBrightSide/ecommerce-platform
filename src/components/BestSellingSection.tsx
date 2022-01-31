import Cart from "./Cart";

const bestSellingItems = [
    {
        img: "https://picsum.photos/seed/product1/270/250",
        name: "The North Coat",
        current_price: 260,
        previous_price: 360,
        stars: 5,
        review_count: 65,
        id: 1,
        discount_percentage: ((360 - 260) / 360 * 100),
        description: "A warm and stylish coat for winter."
    },
    {
        img: "https://picsum.photos/seed/product2/270/250",
        name: "Duffle Bag",
        current_price: 960,
        previous_price: 1160,
        stars: 4,
        review_count: 65,
        id: 2,
        discount_percentage: ((1160 - 960) / 1160 * 100),
        description: "A spacious and durable duffle bag for travel."
    },
    {
        img: "https://picsum.photos/seed/product3/270/250",
        name: "RGB CPU Cooler",
        current_price: 160,
        previous_price: 170,
        stars: 5,
        review_count: 65,
        id: 3,
        discount_percentage: ((170 - 160) / 170 * 100),
        description: "An efficient CPU cooler with RGB lighting."
    },
    {
        img: "https://picsum.photos/seed/product4/270/250",
        name: "Small Bookshelf",
        current_price: 360,
        previous_price: 0,
        stars: 4,
        review_count: 65,
        id: 4,
        discount_percentage: 0,
        description: "A compact bookshelf perfect for small spaces."
    },
];


const BestSellingSection = () => {
    return (
        <section className="my-5">
            <div className="h-[40px] w-full flex items-center gap-x-2 mb-5 px-2 sm:px-0">
                <div className="h-[40px] w-[20px] bg-[#DB4444] rounded-md"></div>
                <div className="text-[#DB4444] font-bold">This Month</div>
            </div>
            <div className="flex justify-between">
                <div className="w-full h-[48px] text-2xl sm:text-4xl font-semibold px-2 sm:px-0">
                    Best Selling Products
                </div>
                <div className="w-[159px] h[56px] flex justify-center">
                    <button className="w-20 h-9 md:w-[159px] md:h-[56px] bg-[#DB4444] text-white text-sm sm:text-md flex justify-center items-center rounded-md ease-in duration-75 hover:bg-[#db4444c8]">View All</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-5">
                {bestSellingItems.map(item => (
                    <Cart item={item} key={item.id}/>
                ))}
            </div>
        </section>
    );
}

export default BestSellingSection;