import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import Products from "../../Components/Products/Products";
// import ForHim from "../../Components/ForHim/ForHim";
import Banner from "../../Components/Header/Banner/Banner";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";

const Home = () => {

    const productData = useLoaderData()
    // console.log(data);

    return (
        <div>
            <Banner></Banner>
            <Brands productData={productData}></Brands>
            <Products productData={productData}></Products>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;