import { useContext, useState } from "react"
import { ItemContext, ItemType } from "../providers/ItemProvider"
import { useNavigate } from "react-router-dom"
import Modal from "../components/Modal"

const WishListPage = () => {
    const { cartItems, handleCartItems, itemCount, handleItemCount } = useContext(ItemContext)

    const handleItems = (item: ItemType) => {
        handleCartItems(item)
        handleItemCount(itemCount - 1)
    }

    const [quantity, setQuantity] = useState<number[]>(new Array(cartItems.length).fill(1));
    const handleQuantity = (index: number, amount: number) => {
        const newQuantity = [...quantity];
        newQuantity[index] = amount;
        setQuantity(newQuantity)
    }

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }

    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentItem, setCurrentItem] = useState<number>(0);

    const handleSelection = (index: number) => {
        setShowModal(true)
        setCurrentItem(index)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const calculateSubtotal = (price: number, quantity: number) => price * quantity;
    const calculateTotal = () => cartItems.reduce((acc, item, index) => acc + calculateSubtotal(item.current_price, quantity[index]), 0);

    return (
        <div className="w-full px-2 md:px-56">
            <div className="hidden md:inline md:text-sm font-light my-10 italic">Home / Cart</div>
            <div className="w-full">
                <div className="flex mb-5">
                    <div className="w-3/5 md:w-1/5 font-bold text-start">Product</div>
                    <div className="font-bold w-1/5 text-center">Price</div>
                    <div className="hidden md:inline font-bold w-1/5 text-center">Quantity</div>
                    <div className="hidden md:inline font-bold w-1/5 text-center">Subtotal</div>
                    <div className="font-bold w-1/5 text-center">Actions</div>
                </div>
                {showModal && (
                    <Modal onClose={handleCloseModal} show={showModal}>
                        <div>
                            <div className="text-xl font-bold">{cartItems[currentItem].name}</div>
                            <div className="flex gap-2">
                                <img src={cartItems[currentItem].img} alt={cartItems[currentItem].name} className="w-32 h-32 object-cover my-4 rounded-md" />
                                <div className="flex flex-col mt-5 text-sm">
                                    <div className="flex space-x-1">
                                        <div className="font-semibold">Unit Price: </div>
                                        <div className="">${cartItems[currentItem].current_price}</div>
                                    </div>
                                    <div>{cartItems[currentItem].description}</div>
                                    <div className="flex space-x-3 mt-1">
                                        <div className="">Quantity: </div>
                                        <input type="number" className="w-10 ring-1 ring-black rounded" value={quantity[currentItem]} onChange={(event) => handleQuantity(currentItem, Number(event.target.value))} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                {cartItems.length > 0 ?
                    cartItems.map((item, index) => (
                        <div className="flex w-full h-11 my-2 p-2 shadow-md" key={item.id}>
                            <div className="w-3/5 md:w-1/5 h-full flex justify-start items-center space-x-5" onClick={() => handleSelection(index)}>
                                <img src={item.img} alt="placeholder" className="hidden md:inline w-12 h-10" />
                                <div>{item.name}</div>
                            </div>
                            <div className="w-1/5 h-full text-center">${item.current_price}</div>
                            <div className="w-1/5 h-full hidden md:flex justify-center">
                                <input type="number" className="w-10 ring-1 ring-black rounded" value={quantity[index]} onChange={(event) => handleQuantity(index, Number(event.target.value))} />
                            </div>
                            <div className="hidden md:inline w-1/5 h-full text-center">${(item.current_price * quantity[index])}</div>
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
            <div className="w-32 h-12 md:w-52 md:h-16 flex justify-center items-center text-sm md:text-base border border-black cursor-pointer rounded hover:bg-[#DB4444] hover:text-white duration-100">
                <button className="" onClick={handleGoBack}>Return to shop</button>
            </div>

            <div className="flex flex-col md:flex md:flex-row justify-between my-10">
                <div className="h-12 flex justify-between space-x-2">
                    <input type="text" placeholder="Coupon Code" className="outline-none ring-1 ring-gray-300 rounded-lg p-2 focus:ring-blue-200" />
                    <button className="w-48 h-12 rounded-md text-white bg-[#DB4444] hover:bg-[#db4444a0]">Apply Coupon</button>
                </div>
                <div className="w-full md:w-96 flex flex-col border border-black p-5 mt-5 md:mt-0 space-y-3">
                    <div className="font-semibold text-lg">Cart Total</div>
                    <div className="flex justify-between">
                        <div className="">Subtotal:</div>
                        <div className="">{calculateTotal()}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Shipping:</div>
                        <div className="">XXXX</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Total:</div>
                        <div className="">{calculateTotal()}</div>
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