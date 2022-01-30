import BestSellingSection from "../components/BestSellingSection";
import CategorySection from "../components/CategorySection";
import HeroSection from "../components/Herosection";
import ProductSection from "../components/ProductsSection";
import SideNav from "../components/SideNav";
import TodaySection from "../components/TodaySection";

const HomePage = () => {
    return (
        <>
            <SideNav />

            <div className="w-full mt-[140px] px-56">
                <TodaySection countDownDate={new Date("Jul 10, 2024 15:37:25").getTime()} />

                <CategorySection />

                <BestSellingSection />

                <HeroSection countDownDate={new Date("Jan 10, 2025 15:37:25").getTime()} />

                <ProductSection />
            </div>
        </>
    );
}

export default HomePage