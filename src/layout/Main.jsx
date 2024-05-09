import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div>

            <NavBar />

            <div className="min-h-[calc(100vh-277px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;