import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


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