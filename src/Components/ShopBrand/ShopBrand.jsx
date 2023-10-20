import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import ProductCard from "../Card/ProductCard";

const ShopBrand = () => {
    const passData = useLocation();
    const brandData = passData.state?.data
    const {data} = useContext(AuthProvider);
    const brand = data.filter(product => product.brandName == brandData.brandName)
    console.log(brand);
    
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
            {
                brand.map(product => <ProductCard key={product._id} data={product}></ProductCard>)
            }
        </div>
    );
};

export default ShopBrand;