import { Outlet } from "react-router-dom";
import NavMenu from "../Components/Header/NavMenu/NavMenu";
import SiteFooter from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="dark:bg-darkTheme dark:brightness-75">
            
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default Root;

