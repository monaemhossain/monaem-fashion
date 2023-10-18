import { Outlet } from "react-router-dom";
import NavMenu from "../../Components/Header/NavMenu/NavMenu";
import SiteFooter from "../../Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default Root;

