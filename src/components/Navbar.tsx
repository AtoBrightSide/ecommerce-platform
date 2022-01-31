import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { ItemContext } from "../providers/ItemProvider";

const Navbar = () => {
    const { itemCount } = useContext(ItemContext)
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <>
            <nav className="w-full flex flex-col items-center py-5 md:py-0 md:mt-[40px] md:px-56 md:flex md:flex-row md:justify-between">
                <Link to="/home">
                    <div className="flex gap-1">
                        <img src="/ecommerce-svgrepo-com (4).svg" alt="" className="w-8" />
                        <div className="font-bold text-lg sm:text-3xl my-auto">
                            Everyone Shops
                        </div>
                    </div>
                </Link>
                <div className="w-full md:w-2/4 flex  md:flex md:justify-center my-5 md:my-0 space-x-5 items-center text-lg">
                    <div className="w-1/4 md:w-max flex justify-center hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/home" onClick={() => setActiveIndex(0)}>
                            <div className={`hidden sm:inline ${activeIndex === 0 ? 'text-[#DB4444]' : ''}`}>Home</div>
                            <i className={`fas fa-home text-2xl md:hidden ${activeIndex === 0 ? 'text-[#DB4444]' : ''}`}></i>
                        </Link>
                    </div>
                    <div className="w-1/4 md:w-max flex justify-center hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/contactus" onClick={() => setActiveIndex(1)}>
                            <div className={`hidden sm:inline ${activeIndex === 1 ? 'text-[#DB4444]' : ''}`}>Contact</div>
                            <i className={`fas fa-id-badge text-2xl md:hidden ${activeIndex === 1 ? 'text-[#DB4444]' : ''}`}></i>
                        </Link>
                    </div>
                    <div className="w-1/4 md:w-max flex justify-center hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/about" onClick={() => setActiveIndex(2)}>
                            <div className={`hidden sm:inline ${activeIndex === 2 ? 'text-[#DB4444]' : ''}`}>About</div>
                            <i className={`far fa-address-card text-2xl md:hidden ${activeIndex === 2 ? 'text-[#DB4444]' : ''}`}></i>
                        </Link>
                    </div>
                    <div className="w-1/4 md:w-max flex justify-center hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/signup" onClick={() => setActiveIndex(3)}>
                            <div className={`hidden sm:inline ${activeIndex === 3 ? 'text-[#DB4444]' : ''}`}>Sign Up</div>
                            <i className={`fas fa-user-plus text-2xl md:hidden ${activeIndex === 3 ? 'text-[#DB4444]' : ''}`}></i>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-max px-5 flex justify-between items-center">
                    <div className="bg-[#F5F5F5] p-2 mb-1 rounded-md">
                        <input type="text" placeholder="What are you looking for?" className="bg-inherit outline-none" />
                        <i className="fas fa-search text-lg cursor-pointer"></i>
                    </div>
                    <Link to="/wishlist">
                        <div className="relative">
                            <i className="fas fa-shopping-cart ml-5 text-2xl"></i>
                            <div className="w-4 h-4 bg-[#DB4444] rounded-full absolute -top-0.5 -right-2 text-xs text-white text-center">{itemCount}</div>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar