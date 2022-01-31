import { useEffect, useState } from "react";
import Cart from "./Cart";

interface TodaysSectionProps {
    countDownDate: number;
}

export const todays_items = [
    {
        img: "https://picsum.photos/seed/coat/270/250",
        name: "The North Coat",
        current_price: 260,
        previous_price: 360,
        stars: 5,
        review_count: 65,
        id: 1,
        discount_percentage: ((360 - 260) / 360 * 100),
        description: "A premium winter coat with excellent insulation."
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
        description: "A spacious and durable duffle bag for all your travel needs."
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
        description: "A high-performance RGB CPU cooler for gaming setups."
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
    {
        img: "https://picsum.photos/seed/product5/270/250",
        name: "Wireless Mouse",
        current_price: 45,
        previous_price: 60,
        stars: 4,
        review_count: 120,
        id: 5,
        discount_percentage: ((60 - 45) / 60 * 100),
        description: "An ergonomic wireless mouse with long battery life."
    },
    {
        img: "https://picsum.photos/seed/product6/270/250",
        name: "Bluetooth Speaker",
        current_price: 150,
        previous_price: 200,
        stars: 5,
        review_count: 80,
        id: 6,
        discount_percentage: ((200 - 150) / 200 * 100),
        description: "A portable Bluetooth speaker with superior sound quality."
    },
    {
        img: "https://picsum.photos/seed/product7/270/250",
        name: "Gaming Keyboard",
        current_price: 75,
        previous_price: 100,
        stars: 4,
        review_count: 150,
        id: 7,
        discount_percentage: ((100 - 75) / 100 * 100),
        description: "A mechanical gaming keyboard with customizable keys."
    },
    {
        img: "https://picsum.photos/seed/product8/270/250",
        name: "Running Shoes",
        current_price: 120,
        previous_price: 160,
        stars: 5,
        review_count: 200,
        id: 8,
        discount_percentage: ((160 - 120) / 160 * 100),
        description: "Comfortable and durable running shoes for daily workouts."
    },
    {
        img: "https://picsum.photos/seed/product9/270/250",
        name: "Fitness Tracker",
        current_price: 90,
        previous_price: 110,
        stars: 4,
        review_count: 95,
        id: 9,
        discount_percentage: ((110 - 90) / 110 * 100),
        description: "A sleek fitness tracker with multiple health monitoring features."
    },
    {
        img: "https://picsum.photos/seed/product10/270/250",
        name: "Smart Watch",
        current_price: 200,
        previous_price: 250,
        stars: 5,
        review_count: 130,
        id: 10,
        discount_percentage: ((250 - 200) / 250 * 100),
        description: "A smart watch with advanced features and stylish design."
    },
    {
        img: "https://picsum.photos/seed/product11/270/250",
        name: "Digital Camera",
        current_price: 300,
        previous_price: 400,
        stars: 5,
        review_count: 70,
        id: 11,
        discount_percentage: ((400 - 300) / 400 * 100),
        description: "A high-resolution digital camera for professional photography."
    },
    {
        img: "https://picsum.photos/seed/product12/270/250",
        name: "Noise Cancelling Headphones",
        current_price: 220,
        previous_price: 280,
        stars: 5,
        review_count: 85,
        id: 12,
        discount_percentage: ((280 - 220) / 280 * 100),
        description: "Headphones with superior noise cancellation and sound quality."
    },
    {
        img: "https://picsum.photos/seed/product13/270/250",
        name: "Leather Wallet",
        current_price: 40,
        previous_price: 60,
        stars: 4,
        review_count: 90,
        id: 13,
        discount_percentage: ((60 - 40) / 60 * 100),
        description: "A stylish leather wallet with multiple card slots."
    },
    {
        img: "https://picsum.photos/seed/product14/270/250",
        name: "Electric Kettle",
        current_price: 80,
        previous_price: 100,
        stars: 5,
        review_count: 110,
        id: 14,
        discount_percentage: ((100 - 80) / 100 * 100),
        description: "A fast-boiling electric kettle with auto shut-off feature."
    },
    {
        img: "https://picsum.photos/seed/product15/270/250",
        name: "Camping Tent",
        current_price: 150,
        previous_price: 200,
        stars: 4,
        review_count: 85,
        id: 15,
        discount_percentage: ((200 - 150) / 200 * 100),
        description: "A durable and weather-resistant camping tent for outdoor adventures."
    },
    {
        img: "https://picsum.photos/seed/product16/270/250",
        name: "Hiking Backpack",
        current_price: 180,
        previous_price: 220,
        stars: 5,
        review_count: 95,
        id: 16,
        discount_percentage: ((220 - 180) / 220 * 100),
        description: "A spacious hiking backpack with ergonomic design."
    },
    {
        img: "https://picsum.photos/seed/product17/270/250",
        name: "Yoga Mat",
        current_price: 30,
        previous_price: 50,
        stars: 4,
        review_count: 70,
        id: 17,
        discount_percentage: ((50 - 30) / 50 * 100),
        description: "A non-slip yoga mat for a comfortable workout experience."
    },
    {
        img: "https://picsum.photos/seed/product18/270/250",
        name: "Electric Toothbrush",
        current_price: 90,
        previous_price: 120,
        stars: 5,
        review_count: 140,
        id: 18,
        discount_percentage: ((120 - 90) / 120 * 100),
        description: "A powerful electric toothbrush with multiple brushing modes."
    },
    {
        img: "https://picsum.photos/seed/product19/270/250",
        name: "Espresso Machine",
        current_price: 350,
        previous_price: 450,
        stars: 4,
        review_count: 110,
        id: 19,
        discount_percentage: ((450 - 350) / 450 * 100),
        description: "A high-end espresso machine for making cafe-quality coffee at home."
    },
    {
        img: "https://picsum.photos/seed/product20/270/250",
        name: "Water Bottle",
        current_price: 25,
        previous_price: 35,
        stars: 5,
        review_count: 60,
        id: 20,
        discount_percentage: ((35 - 25) / 35 * 100),
        description: "A BPA-free water bottle with a leak-proof design."
    },
    {
        img: "https://picsum.photos/seed/product21/270/250",
        name: "Portable Charger",
        current_price: 50,
        previous_price: 70,
        stars: 4,
        review_count: 100,
        id: 21,
        discount_percentage: ((70 - 50) / 70 * 100),
        description: "A high-capacity portable charger for charging devices on the go."
    },
    {
        img: "https://picsum.photos/seed/product22/270/250",
        name: "Laptop Stand",
        current_price: 40,
        previous_price: 60,
        stars: 4,
        review_count: 90,
        id: 22,
        discount_percentage: ((60 - 40) / 60 * 100),
        description: "An adjustable laptop stand for ergonomic work setup."
    },
    {
        img: "https://picsum.photos/seed/product23/270/250",
        name: "Mechanical Keyboard",
        current_price: 120,
        previous_price: 150,
        stars: 5,
        review_count: 160,
        id: 23,
        discount_percentage: ((150 - 120) / 150 * 100),
        description: "A tactile mechanical keyboard with customizable backlighting."
    },
    {
        img: "https://picsum.photos/seed/product24/270/250",
        name: "Wireless Earbuds",
        current_price: 80,
        previous_price: 100,
        stars: 4,
        review_count: 130,
        id: 24,
        discount_percentage: ((100 - 80) / 100 * 100),
        description: "High-quality wireless earbuds with excellent sound clarity."
    }
];

const TodaySection = ({ countDownDate }: TodaysSectionProps) => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const scrollLeft = () => {
        var slider: HTMLElement | null = document.getElementById('slider');
        if (slider) slider.scrollLeft -= 500;
    }

    const scrollRight = () => {
        var slider: HTMLElement | null = document.getElementById('slider');
        if (slider) slider.scrollLeft += 500;
    }

    return (
        <section className="w-full">
            <div className="h-[40px] w-full flex items-center gap-x-2 px-2 sm:px-0 md:mb-5">
                <div className="h-[40px] w-[20px] bg-[#DB4444] rounded-md"></div>
                <div className="text-[#DB4444] font-bold">Today's</div>
            </div>
            <div className="flex flex-col md:flex md:flex-row mb-5">
                <div className="text-2xl md:text-4xl font-semibold mb-5 px-2 sm:px-0">
                    Flash Sales
                </div>
                <div className="w-80 h-[48px] flex justify-evenly gap-x-2 -mt-5 ml-5">
                    <div className="w-[46px] h-[28px] flex flex-col items-center">
                        <div className="text-sm">Days</div>
                        <div className="text-4xl font-bold">{day}</div>
                    </div>
                    <div className="text-[#DB4444] flex font-bold mt-5">:</div>
                    <div className="w-[46px] h-[28px]">
                        <div className="text-sm">Hours</div>
                        <div className="text-4xl font-bold">{hour}</div>
                    </div>
                    <div className="text-[#DB4444] flex font-bold mt-5">:</div>
                    <div className="w-[46px] h-[28px] flex flex-col items-center">
                        <div className="text-sm">Mins</div>
                        <div className="text-4xl font-bold">{minutes}</div>
                    </div>
                    <div className="text-[#DB4444] flex font-bold mt-5">:</div>
                    <div className="w-[46px] h-[28px] flex flex-col items-center">
                        <div className="text-sm">Seconds</div>
                        <div className="text-4xl font-bold">{seconds}</div>
                    </div>
                </div>
                <div className="hidden w-[100px] h-[48px] sm:flex -mt-2 ml-auto gap-1">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex justify-center items-center cursor-pointer" onClick={scrollLeft}><i className="fas fa-arrow-left"></i></div>
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex justify-center items-center cursor-pointer" onClick={scrollRight}><i className="fas fa-arrow-right"></i></div>
                </div>
            </div>

            <div className="relative flex items-center overflow-x-scroll scroll-smooth whitespace-nowrap gap-3 scrollbar-hide p-2" id="slider">
                {todays_items.map(item =>
                    <Cart key={item.id} item={item} />
                )}
            </div>
            <div className="w-full h[56px] flex justify-center">
                <button className="w-44 h-11 md:w-[234px] md:h-[56px] bg-[#DB4444] text-white text-sm md:text-md flex justify-center items-center rounded-md hover:bg-[#db4444d8] duration-75 ease-in">View All Products</button>
            </div>
        </section>
    )
}

export default TodaySection