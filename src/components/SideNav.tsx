import { useEffect, useState } from "react";

const SideNav = () => {
    const data = [
        {
            "src": "https://picsum.photos/seed/img1/1200/600",
            "id": 1
        },
        {
            "src": "https://picsum.photos/seed/glass/1200/600",
            "id": 2
        },
        {
            "src": "https://picsum.photos/seed/laptop/1200/600",
            "id": 3
        },
        {
            "src": "https://picsum.photos/seed/tech/1200/600",
            "id": 4
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToIndex = (index: number) => {
        setCurrentIndex(index);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % data.length)
        }, 3000)

        return () => clearInterval(interval);

    }, [])
    return (
        <>
            <div className="flex md:mt-[56px] w-full md:space-x-44 md:px-56">
                <div className="hidden md:w-1/6 sm:flex sm:flex-col border-r-2 border-solid border-[#00000011] gap-y-4">
                    <div className="flex space-x-5 items-center">
                        <div>Women's Fashion</div>
                        <i className="fas fa-chevron-right mr-2"></i>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <div>Men's Fashion</div>
                        <i className="fas fa-chevron-right mr-2"></i>
                    </div>
                    <div>Electronics</div>
                    <div>Home & Lifestyle</div>
                    <div>Medicine</div>
                    <div>Sports & Outdoor</div>
                    <div>Baby's toys</div>
                    <div>Groceries & Pets</div>
                    <div>Health & Beauty</div>
                </div>

                <div className="w-full md:w-3/5 h-96 flex flex-col items-center">
                    <div className="w-screen h-screen md:w-[1000px] md:h-[600px] bg-center bg-cover duration-500"
                        style={{ backgroundImage: `url(${data[currentIndex].src})` }}>
                    </div>
                    <div className="flex -mt-4 justify-center">
                        {data.map((item, idx) =>
                            <div className={`rounded-full ${idx === currentIndex ? 'bg-[#DB4444]' : 'bg-gray-400'} mx-1 w-3 h-3 cursor-pointer`} key={item.id} onClick={() => goToIndex(idx)}></div>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default SideNav;