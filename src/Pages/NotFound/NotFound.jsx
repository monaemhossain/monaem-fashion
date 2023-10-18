import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701_1280.jpg')] h-screen w-full grid md:grid-cols-2 grid-cols-1 justify-center items-center text-center text-black font-semibold">
            <div>
                <h1 className="text-7xl">404</h1>
                <h2 className="text-4xl">Page not found</h2>
                <h3>Sorry, we couldn’t find the page you’re looking for.</h3>
                <p><NavLink to="/">Back to home</NavLink></p>
            </div>
            <div></div>
        </div>
    );
};

export default NotFound;