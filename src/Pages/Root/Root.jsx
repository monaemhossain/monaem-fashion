import { Outlet } from "react-router-dom";
import NavMenu from "../../Components/Header/NavMenu/NavMenu";

const Root = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;