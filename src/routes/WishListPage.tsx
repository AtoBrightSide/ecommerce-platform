import { useContext, useState } from "react"
import { ItemContext, ItemType } from "../providers/ItemProvider"

const WishListPage = () => {
    const { cartItems, handleCartItems, itemCount, handleItemCount } = useContext(ItemContext)

    const handleItems = (item: ItemType) => {
        handleCartItems(item)
        handleItemCount(itemCount - 1)
    }

    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="w-full px-56 ">
            <div className="text-sm font-light my-10 italic">Home / Cart</div>
            <div className="w-full">
                <div className="flex mb-5">
                    <div className="font-bold w-1/5 text-start">Product</div>
                    <div className="font-bold w-1/5 text-center">Price</div>
                    <div className="font-bold w-1/5 text-center">Quantity</div>
                    <div className="font-bold w-1/5 text-center">Subtotal</div>
                    <div className="font-bold w-1/5 text-center">Actions</div>
                </div>

                {cartItems.length > 0 ?
                    cartItems.map((item) => (
                        <div className="flex w-full h-11 my-2 p-2 shadow-md" key={item.id}>
                            <div className="w-1/5 h-full flex justify-start items-center space-x-5">
                                <img src={item.img} alt="placeholder" className="w-12 h-10" />
                                <div>{item.name}</div>
                            </div>
                            <div className="w-1/5 h-full text-center">${item.current_price}</div>
                            <div className="w-1/5 h-full flex justify-center">
                                <input type="number" className="w-10 ring-1 ring-black rounded" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
                            </div>
                            <div className="w-1/5 h-full text-center">${(item.current_price * quantity)}</div>
                            <div className="w-1/5 h-full flex justify-center">
                                <i className="fas fa-trash-alt text-red-700 hover:text-red-500 hover:scale-125 ease-in duration-75 cursor-pointer" onClick={() => handleItems(item)}></i>
                            </div>
                        </div>
                    )) 
                        : 
                    <div className="w-full h-full text-center">
                        No items in cart!
                    </div>
                }

            </div>
            <div className="w-52 h-16 flex justify-center items-center border border-black cursor-pointer rounded hover:bg-[#DB4444] hover:text-white duration-100">
                <button className="">Return to shop</button>
            </div>
            <div className="flex justify-between my-10">
                <div className="h-12 flex justify-between space-x-2">
                    <input type="text" placeholder="Coupon Code" className="outline-none ring-1 ring-gray-300 rounded-lg p-2 focus:ring-blue-200" />
                    <button className="w-48 h-12 rounded-md text-white bg-[#DB4444] hover:bg-[#db4444a0]">Apply Coupon</button>
                </div>
                <div className="w-96 p-5 flex flex-col border border-black space-y-3">
                    <div className="font-semibold text-lg">Cart Total</div>
                    <div className="flex justify-between">
                        <div className="">Subtotal:</div>
                        <div className="">XXXX</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Shipping:</div>
                        <div className="">XXXX</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Total:</div>
                        <div className="">XXXX</div>
                    </div>
                    <div className="w-52 h-12 mx-auto bg-[#DB4444] text-white text-sm flex justify-center items-center rounded-md hover:bg-[#db4444c2]">
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default WishListPage 