import { useContext } from "react";
import { Link } from "react-router-dom"
import { ItemContext } from "../providers/ItemProvider";

const Navbar = () => {
    const { itemCount } = useContext(ItemContext)
    return (
        <>
            <nav className="flex justify-between w-full mt-[40px] px-56">
                <Link to="/home">
                    <div className="flex gap-1">
                        <img src="/ecommerce-svgrepo-com (4).svg" alt="" className="w-8" />
                        <div className="font-bold text-3xl my-auto">
                            Everyone Shops
                        </div>
                    </div>
                </Link>
                <div className="flex space-x-5 items-center text-lg">
                    <div className="hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/home">Home</Link>
                    </div>
                    <div className="hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/contactus">Contact</Link>
                    </div>
                    <div className="hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="hover:underline cursor-pointer duration-300 ease-in">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-[#F5F5F5] p-2 mb-1 rounded-md">
                        <input type="text" placeholder="What are you looking for?" className="bg-inherit outline-none" />
                        <i className="fas fa-search text-lg cursor-pointer"></i>
                    </div>
                    <i className="far fa-heart ml-5 text-2xl"></i>
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