const SignInPage = () => {
    return (
        <>
            <div className="flex flex-col md:flex md:flex-row my-5">
                <div className="w-full md:w-1/2">
                    <img src="/dl.beatsnoop 1 (1).png" alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-28 px-5 md:px-0">
                    <div className="flex flex-col space-y-5">
                        <div className="text-4xl font-semibold">Login to Everyone Shops</div>
                        <div className="">Enter your details below</div>
                        <input type="email" placeholder="Email or phone number" className="border-0 rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 p-2 focus:ring-2 ease-in duration-75" />
                        <input type="password" placeholder="Password" className="border-0 rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 p-2 focus:ring-2 ease-in duration-75" />

                        <div className="flex justify-between items-center">
                            <button className="w-1/3 h-14 bg-[#DB4444] text-white rounded-md hover:bg-[#db4444cb]">Login</button>
                            <div className="text-[#DB4444] cursor-pointer hover:text-[#db4444bd]">Forget Password?</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInPage