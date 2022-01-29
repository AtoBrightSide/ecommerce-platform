import { useContext, useState } from "react";
import { ItemContext, ItemType } from "../providers/ItemProvider";
import { Link } from "react-router-dom";

interface ItemProps {
    item: ItemType,
}


const Cart = (props: ItemProps) => {
    const { itemCount, handleItemCount, handleCartItems } = useContext(ItemContext);
    const { cartItems } = useContext(ItemContext)
    const [addedToCart, setAddedToCart] = useState(cartItems.includes(props.item))

    const handleItemAddition = (item: ItemType) => {
        handleItemCount(Math.max((itemCount + (addedToCart ? -1 : 1)), 0))
        handleCartItems(item)
        setAddedToCart(!addedToCart)
    }

    return (
        <>
            <div className="w-[270px] h-[350px] flex flex-col relative hover:scale-105 ease-in duration-75">
                {
                    (props.item.discount_percentage > 0) &&
                    <div className="bg-[#DB4444] w-[55px] h-[26px] absolute top-3 left-3 rounded-md text-white text-sm flex items-center justify-center">
                        {Math.round(props.item.discount_percentage)}%
                    </div>
                }
                <div className="bg-white w-8 h-8 absolute rounded-full top-3 right-3 flex justify-center items-center"><i className="far fa-heart text-sm"></i></div>
                <div className="bg-white w-8 h-8 absolute rounded-full top-12 right-3 flex justify-center items-center"><i className="far fa-eye"></i></div>
                <Link to={`/products/${props.item.id}`}>
                    <div className="w-[270px] h-[250px]">
                        <img src={props.item.img} alt="placeholder" className="rounded-md" />
                    </div>
                </Link>
                <div className={`h-min w-full ${addedToCart ? 'bg-green-300' : 'bg-black'} text-white text-center hover:bg-[#00000042] cursor-pointer duration-75 ease-in`} onClick={() => handleItemAddition(props.item)}>{addedToCart ? "Remove from cart" : "Add to cart"}</div>
                <div className="flex flex-col items-start">
                    <div>{props.item.name}</div>
                    <div className="text-[#DB4444] font-medium flex gap-5">
                        <div className="">${props.item.current_price}</div>
                        {
                            props.item.previous_price ?
                                <div className="line-through text-black">${props.item.previous_price}</div>
                                :
                                null
                        }
                    </div>
                    <div className="flex">
                        {Array.from([1, 2, 3, 4, 5], (_i, idx) =>
                            <i className={`fas fa-star text-sm ${idx + 1 <= props.item.stars ? 'text-[#FFAD33]' : ''}`} key={idx}></i>
                        )}
                        <div className="text-sm font-semibold ml-2">({props.item.review_count})</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart