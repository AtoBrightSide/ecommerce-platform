import Cart from "./Cart"

const products = [
    {
        "img": "https://picsum.photos/seed/product5/270/250",
        "name": "Wireless Mouse",
        "current_price": 45,
        "previous_price": 60,
        "stars": 4,
        "review_count": 120,
        "id": 5,
        "discount_percentage": (60 - 45) / 60 * 100,
        "description": "A smooth and responsive wireless mouse."
    },
    {
        "img": "https://picsum.photos/seed/product6/270/250",
        "name": "Bluetooth Speaker",
        "current_price": 150,
        "previous_price": 200,
        "stars": 5,
        "review_count": 80,
        "id": 6,
        "discount_percentage": (200 - 150) / 200 * 100,
        "description": "A portable Bluetooth speaker with great sound quality."
    },
    {
        "img": "https://picsum.photos/seed/product7/270/250",
        "name": "Gaming Keyboard",
        "current_price": 75,
        "previous_price": 100,
        "stars": 4,
        "review_count": 150,
        "id": 7,
        "discount_percentage": (100 - 75) / 100 * 100,
        "description": "A mechanical gaming keyboard with RGB lighting."
    },
    {
        "img": "https://picsum.photos/seed/product8/270/250",
        "name": "Running Shoes",
        "current_price": 120,
        "previous_price": 160,
        "stars": 5,
        "review_count": 200,
        "id": 8,
        "discount_percentage": (160 - 120) / 160 * 100,
        "description": "Comfortable and durable running shoes."
    },
    {
        "img": "https://picsum.photos/seed/product9/270/250",
        "name": "Fitness Tracker",
        "current_price": 90,
        "previous_price": 110,
        "stars": 4,
        "review_count": 95,
        "id": 9,
        "discount_percentage": (110 - 90) / 110 * 100,
        "description": "A fitness tracker to monitor your health and activities."
    },
    {
        "img": "https://picsum.photos/seed/product10/270/250",
        "name": "Smart Watch",
        "current_price": 200,
        "previous_price": 250,
        "stars": 5,
        "review_count": 130,
        "id": 10,
        "discount_percentage": (250 - 200) / 250 * 100,
        "description": "A feature-rich smart watch with various health tracking functions."
    },
    {
        "img": "https://picsum.photos/seed/product11/270/250",
        "name": "Digital Camera",
        "current_price": 300,
        "previous_price": 400,
        "stars": 5,
        "review_count": 70,
        "id": 11,
        "discount_percentage": (400 - 300) / 400 * 100,
        "description": "A high-quality digital camera for stunning photos."
    },
    {
        "img": "https://picsum.photos/seed/product12/270/250",
        "name": "Noise Cancelling Headphones",
        "current_price": 220,
        "previous_price": 280,
        "stars": 5,
        "review_count": 85,
        "id": 12,
        "discount_percentage": (280 - 220) / 280 * 100,
        "description": "Headphones with excellent noise cancellation and sound quality."
    },
    {
        "img": "https://picsum.photos/seed/product13/270/250",
        "name": "Leather Wallet",
        "current_price": 40,
        "previous_price": 60,
        "stars": 4,
        "review_count": 90,
        "id": 13,
        "discount_percentage": (60 - 40) / 60 * 100,
        "description": "A stylish and durable leather wallet."
    },
    {
        "img": "https://picsum.photos/seed/product14/270/250",
        "name": "Electric Kettle",
        "current_price": 80,
        "previous_price": 100,
        "stars": 5,
        "review_count": 110,
        "id": 14,
        "discount_percentage": (100 - 80) / 100 * 100,
        "description": "A fast and efficient electric kettle."
    }
];

const ProductSection = () => {
    return (
        <section className="my-10">
            <div className="h-[40px] w-full flex items-center gap-x-2 mb-5">
                <div className="h-[40px] w-[20px] bg-[#DB4444] rounded-md"></div>
                <div className="text-[#DB4444] font-bold">Our Products</div>
            </div>
            <div className="flex justify-between">
                <div className="w-full h-[48px] text-4xl font-semibold">
                    Explore Our Products
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-5">
                {products.map(product => (
                    <Cart item={product} key={product.id} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="w-[159px] h-[56px] bg-[#DB4444] text-white flex justify-center items-center rounded-md hover:bg-[#db4444c4]">View All Products</button>
            </div>
        </section>
    )
}

export default ProductSection