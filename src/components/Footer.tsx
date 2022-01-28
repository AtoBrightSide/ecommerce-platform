const Footer = () => {
    return (
        <div className="w-full h-max px-56 pt-20 bg-black">
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col text-white space-y-5">
                    <div className="text-4xl">Everyone Shops</div>
                    <div className="text-2xl">Subscribe</div>
                    <div className="">Get 10% off of your first order</div>
                    <div className="flex space-x-2">
                        <input type="email" placeholder="Enter your email" className="bg-[#c0c0c064] p-2 active:border active:border-[#DB4444]" />
                        <i className="fas fa-share text-3xl cursor-pointer hover:text-[#ffffffa6]"></i>
                    </div>
                </div>

                <div className="flex flex-col text-white space-y-5">
                    <div className="text-2xl mt-14">Address</div>
                    <div className="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh</div>
                    <div className="">everyoneshops@gmail.com</div>
                    <div className="">+88015-88888-9999</div>
                </div>

                <div className="flex flex-col text-white space-y-5">
                    <div className="text-2xl mt-14 cursor-pointer">Quick Links</div>
                    <div className="cursor-pointer">Privacy Policy</div>
                    <div className="cursor-pointer">Terms of use</div>
                    <div className="cursor-pointer">FAQ</div>
                </div>
            </div>
            <div className="flex justify-center text-white mt-10 mb-2">
                &copy; {new Date().getFullYear()} - EveryoneShops
            </div>
        </div>
    )
}

export default Footer