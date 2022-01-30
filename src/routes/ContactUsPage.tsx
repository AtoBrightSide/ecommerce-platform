const ContactUsPage = () => {
    const PHONE_NUMBER = "8801611112222"
    return (
        <div className="w-full px-56 py-5 flex my-10 gap-8">
            <div className="w-1/3 h-96 p-10 flex flex-col gap-y-4 shadow-lg">
                <div className="flex gap-x-3">
                    <div className="flex gap-x-5 items-center">
                        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#DB4444]">
                            <i className="fas fa-phone-alt text-white"></i>
                        </div>
                        <div className="font-semibold">
                            Call Us
                        </div>
                    </div>
                </div>
                <div className="">We are available 24/7, 7 days a week.</div>
                <div className="">Phone: +{PHONE_NUMBER}</div>

                <div className="w-full h-1 border-b border-black"></div>

                <div className="flex flex-col gap-y-5">
                    <div className="flex gap-x-5">
                        <div className="w-8 h-8 rounded-full bg-[#DB4444] flex justify-center items-center">
                            <i className="fas fa-envelope text-white"></i>
                        </div>
                        <div className="font-semibold">Write to Us</div>
                    </div>
                    <div className="">Fill out our form and we will contact you within 24 hours</div>
                    <div>customer@exclusive.com</div>
                    <div>support@exclusive.com</div>
                </div>
            </div>
            <div className="w-2/3 h-full flex flex-col p-10 shadow-lg">
                <form action="" className="h-full flex flex-col gap-y-10">
                    <div className="flex gap-x-5">
                        <input type="text" placeholder="Your Name" className="bg-gray-200 outline-none focus:ring-2 p-3 rounded-md"/>
                        <input type="text" placeholder="Your Email" className="bg-gray-200 outline-none focus:ring-2  p-3 rounded-md" />
                        <input type="text" placeholder="Your Phone" className="bg-gray-200 outline-none focus:ring-2  p-3 rounded-md"/>
                    </div>
                    <div className="w-full h-28">
                        <input type="text" placeholder="Your Message" className="w-full bg-gray-200 outline-none focus:ring-2 p-3 rounded-md"/>
                    </div>
                </form>
                <div className="w-52 h-14 bg-[#DB4444] text-white flex justify-center items-center rounded-md self-end cursor-pointer hover:bg-[#db4444de]">
                    <div>Send Message</div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage