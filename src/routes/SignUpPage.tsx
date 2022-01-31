import { Link } from "react-router-dom";

const SignUpPage = () => {
    return (
        <>
            <div className="flex flex-col md:flex md:flex-row my-5">
                <div className="w-full md:w-1/2">
                    <img src="/src/assets/dl.beatsnoop 1 (1).png" alt="" />
                </div>
                <div className="w-full md:w-1/2 mt-5 md:mt-28 flex flex-col items-center">
                    <div className="flex flex-col space-y-5">
                        <div className="text-2xl md:text-4xl font-semibold">Create An Account</div>
                        <div className="">Enter your details below</div>
                        <input type="text" placeholder="Name" className="border-0 rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 p-2 focus:ring-2 ease-in duration-75" />
                        <input type="email" placeholder="Email or phone number" className="border-0 rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 p-2 focus:ring-2 ease-in duration-75" />
                        <input type="password" placeholder="Password" className="border-0 rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 p-2 focus:ring-2 ease-in duration-75" />

                        <div className="space-y-2">
                            <button className="w-full h-14 bg-[#DB4444] text-white rounded-md hover:bg-[#db4444cb]">Create Account</button>
                            <button className="w-full h-14 border border-black rounded-md hover:bg-[#d0d0d0] hover:text-white">Sign up with Google</button>
                            <div className="">Already have an account? <Link to="/signin" className="font-semibold hover:underline hover:font-bold ease-in duration-75">Log In</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpPage