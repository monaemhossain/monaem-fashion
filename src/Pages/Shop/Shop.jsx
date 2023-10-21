// import { useContext } from "react";
// import { AuthProvider } from "../../Context/AuthContext";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/Card/ProductCard";

const Shop = () => {
    // const {data} = useContext(AuthProvider)
    const data = useLoaderData()
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">

                {
                   data?.map(data => <ProductCard key={data._id} data={data}></ProductCard>)
                }

            </div>
    );
};

export default Shop;