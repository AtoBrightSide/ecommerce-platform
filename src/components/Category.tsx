import { ReactNode } from "react"

interface CategoryProps {
    isSelected: Boolean;
    children: ReactNode;
    handleCategory: Function;
    index: number;
}

const Category = ({ isSelected, handleCategory, index, children }: CategoryProps) => {
    return (
        <>
            <div className={`w-[170px] h-[170px] flex flex-col items-center justify-center border-2 border-solid ${isSelected ? 'bg-[#DB4444]' : ''}  hover:bg-[#DB4444] ease-in duration-75 cursor-pointer`} onClick={() => handleCategory(index)}>
                {children}
            </div>
        </>
    )
}

export default Category