import { createContext, useState, ReactNode } from 'react';
import { todays_items } from '../components/TodaySection';

export interface ItemType {
    img: string,
    name: string,
    current_price: number,
    previous_price: number,
    stars: number,
    review_count: number,
    id: number,
    discount_percentage: number,
    description: string,
}

interface ItemContextType {
    itemCount: number;
    handleItemCount: (count: number) => void;
    items: ItemType[];
    handleItems: (item: ItemType) => void;
    handleCartItems: (item: ItemType) => void;
    cartItems: ItemType[]
}

export const ItemContext = createContext<ItemContextType>({
    itemCount: 0,
    handleItemCount: () => { },
    cartItems: [],
    handleCartItems: () => { },
    items: [],
    handleItems: () => { },
});

const ItemProvider = ({ children }: { children: ReactNode }) => {
    const [itemCount, setItemCount] = useState<number>(0);
    const handleItemCount = (count: number) => {
        setItemCount(count);
    };

    const [cartItems, setCartItems] = useState<ItemType[]>([])
    const handleCartItems = (item: ItemType) => {
        if (!cartItems.includes(item)) {
            setCartItems([...cartItems, item])
        } else {
            const newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
            setCartItems(newCartItems)
        }
    }
    const [items, setItems] = useState<ItemType[]>(todays_items)
    const handleItems = (item: ItemType) => {
        setItems([...items, item])
    }

    return (
        <ItemContext.Provider value={{ itemCount, handleItemCount, cartItems, items, handleCartItems, handleItems }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider
