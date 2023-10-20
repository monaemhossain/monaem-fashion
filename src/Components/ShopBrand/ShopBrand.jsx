import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import ProductCard from "../Card/ProductCard";

const ShopBrand = () => {
    const passData = useLocation();
    const brandData = passData.state?.data
    const { data } = useContext(AuthProvider);
    const brand = data.filter(product => product.brandName == brandData.brandName)
    console.log(brand);

    return (

        <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4 py-10">
                {
                    data?.slice(0, 3).map(add => <div key={add._id} className="w-full h-60 bg-gray-400 grid justify-center items-center text-3xl"> Advertise </div>)
                }
            </div>
            <div className="max-w-screen-xl mx-auto grid grid-cols-4">
                {
                    brand.map(product => <ProductCard key={product._id} data={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ShopBrand;