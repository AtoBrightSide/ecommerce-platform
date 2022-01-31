import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../providers/ItemProvider";

enum Sizes {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = "XL"
}

const ProductDetailPage = () => {
    const { productId } = useParams()
    const { items, itemCount, handleItemCount, cartItems, handleCartItems } = useContext(ItemContext)
    const item = items.filter(item => item.id === Number(productId))[0]

    const [size, setSize] = useState<Sizes>(Sizes.XS)
    const [count, setCount] = useState(1)
    const [addedToCart, setAddedToCart] = useState(cartItems.includes(item))

    const handleItemAddition = () => {
        handleItemCount(Math.max((itemCount + (addedToCart ? -1 : 1)), 0))
        handleCartItems(item)
        setAddedToCart(!addedToCart)
    }

    return (
        <div className="flex flex-col md:flex md:flex-row w-full h-full px-5 md:px-56 my-10 gap-x-5">
            <div className="w-full md:w-2/3 flex gap-x-3">
                <div className="w-1/5 flex flex-col items-center gap-y-2">
                    <img src={item.img} alt="" className="w-full h-full object-scale-down" />
                    <img src={item.img} alt="" className="w-full h-full object-scale-down" />
                    <img src={item.img} alt="" className="w-full h-full object-scale-down" />
                    <img src={item.img} alt="" className="w-full h-full object-scale-down" />
                </div>
                <div className="w-4/5 h-full bg-red-200">
                    <img src={item.img} alt="" className="w-full h-full" />
                </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col mt-5 md:mt-0 gap-y-2">
                <div className="text-2xl md:text-3xl font-semibold">{item.name}</div>
                <div className="flex gap-x-1">
                    <div className="flex gap-x-1">
                        {Array.from([1, 2, 3, 4, 5]).map((_, idx) => (
                            <i className={`fas fa-star text-sm ${idx + 1 <= item.stars ? 'text-[#FFAD33]' : ''}`} key={idx}></i>
                        ))}
                    </div>
                    <div className="flex text-sm md:text-base">
                        ({item.review_count} reviews)
                    </div>
                </div>
                <div className="font-semibold text-lg">${item.current_price}.00</div>
                <div className="text-sm mt-2">{item.description}</div>
                <div className="w-full h-1 border-b-[1px] mt-5 border-black"></div>
                <div className="flex font-semibold items-center my-2">
                    <div className="mr-5">Colors:</div>
                    <div className="w-4 h-4 rounded-full bg-blue-200 mr-1"></div>
                    <div className="w-4 h-4 rounded-full bg-red-200"></div>
                </div>
                <div className="flex font-semibold items-center my-2">
                    <div className="mr-5">Size:</div>
                    {Object.values(Sizes).map((s, idx) => (
                        <div
                            className={`w-8 h-8 rounded mr-2 flex justify-center items-center text-xs border border-black p-2 ${size === s ? 'bg-[#DB4444]' : ''} hover:bg-[#DB4444] duration-75 ease-in cursor-pointer`}
                            key={idx}
                            onClick={() => setSize(s)}
                        >
                            <div>{s}</div>
                        </div>
                    ))}

                </div>
                <div className="flex gap-x-3 my-2">
                    <div className="w-1/3 h-10 flex border border-black">
                        <div className="w-1/4 h-10 border-r border-black text-3xl text-center cursor-pointer hover:bg-[#DB4444] duration-75 ease-in" onClick={() => setCount(Math.max(0, count - 1))}>-</div>
                        <div className="w-1/2 h-10 flex justify-center items-center">{count}</div>
                        <div className="w-1/4 h-10 border-l border-black text-3xl text-center cursor-pointer hover:bg-[#DB4444] duration-75 ease-in" onClick={() => setCount(count + 1)}>+</div>
                    </div>
                    <div className={`w-1/3 h-10 flex justify-center items-center ${addedToCart ? 'bg-green-200 text-black' : 'bg-[#DB4444]'} text-sm hover:bg-green-200 hover:text-black duration-75 ease-in rounded cursor-pointer`} onClick={handleItemAddition}>
                        {addedToCart ? "Remove from cart" : "Add to cart"}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage