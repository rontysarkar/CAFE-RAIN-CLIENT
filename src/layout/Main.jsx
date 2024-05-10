import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div className="font-lato ">
            <ScrollRestoration />
            <NavBar />

            <div className="min-h-[calc(100vh-277px)]">
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Main;