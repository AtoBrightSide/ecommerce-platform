import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white space-y-9">
            <div className="text-4xl">Oops!</div>
            <div>Sorry, an unexpected error has occurred.</div>
            <div>
                {error.statusText || error.message}
            </div>
            <Link to="/home" className="hover:bg-red-200 hover:text-black ease-in duration-75 p-5 rounded-lg">Go to homepage</Link>
        </div>
    );
}

export default ErrorPage