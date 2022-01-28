import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ItemProvider from "./providers/ItemProvider";


const App = () => {  
  return (
    <ItemProvider>
      <div className="bg-[#FFFFFF] w-full font-inter flex flex-col items-center">
        <div className="bg-black text-white w-full h-[48px] flex justify-evenly items-center">
          <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
          <div className="flex items-center space-x-1"><div>English</div> <i className="fas fa-chevron-down"></i></div>
        </div>


        <Navbar />

        <div className="bg-[#7D8184] w-full h-[0.25px]"></div>

        <Outlet />

        <Footer />
      </div>
    </ItemProvider>
  )
}

export default App
