import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ItemProvider from "./providers/ItemProvider";


const App = () => {  
  return (
    <ItemProvider>
      <div className="bg-[#FFFFFF] w-full font-inter flex flex-col items-center">
        <div className="w-full bg-black text-white flex md:justify-center md:space-x-5 text-sm md:text-base">
          <div className="text-center overflow-auto text-nowrap">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
          <div className="flex items-center space-x-1"><div>English</div> <i className="fas fa-chevron-down"></i></div>
        </div>


        <Navbar />

        <div className="hidden md:inline h-[0.25px] w-full bg-[#7D8184]"></div>

        <Outlet />

        <Footer />
      </div>
    </ItemProvider>
  )
}

export default App
