import { useState } from "react"
import Category from "./Category"

const CategorySection = () => {
    const categories = [
        { icon: "fas fa-mobile-alt", name: "Phones" },
        { icon: "fas fa-desktop", name: "Computers" },
        { icon: "fas fa-camera", name: "Camera" },
        { icon: "fas fa-headphones", name: "Headphones" },
        { icon: "fas fa-gamepad", name: "Gaming" },
        { icon: "fas fa-laptop", name: "Laptops" }
    ]
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)
    const handleCategory = (index: number) => {
        setSelectedCategoryIndex(index)
    }
    return (
        <section className="py-5 border-b-2 border-solid my-5 flex flex-col space-y-2 sm:space-y-5">
            <div className="h-[40px] w-full flex items-center gap-x-2 sm:mb-5 px-2 sm:px-0">
                <div className="h-[40px] w-[20px] bg-[#DB4444] rounded-md"></div>
                <div className="text-[#DB4444] font-bold">Categories</div>
            </div>
            <div className="flex px-2 sm:px-0">
                <div className="w-full h-[48px] text-2xl sm:text-4xl font-semibold">
                    Browse By Category
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-2">
                {categories.map((category, index) => (
                    <Category key={category.name} isSelected={selectedCategoryIndex === index} index={index} handleCategory={handleCategory}>
                        <i className={`text-5xl ${category.icon}`}></i>
                        <div className="text-lg">{category.name}</div>
                    </Category>
                ))}
            </div>
        </section>
    )
}

export default CategorySection