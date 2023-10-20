import { PropTypes } from "prop-types";
import ProductCard from "../Card/ProductCard";

const Products = ({productData}) => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 justify-center items-center max-w-screen-xl mx-auto py-10">
            <div className="col-span-1 max-md:mb-4">
                <h1 className="text-6xl text-center pb-5 dark:text-white">#Latest</h1>
                <div className="h-full overflow-hidden">
                    <img src="https://cdn.pixabay.com/photo/2016/07/28/10/45/woman-1547507_1280.jpg" alt="women image" className="" />
                </div>
            </div>


            <div className="col-span-2 grid grid-cols-3">

                {
                    productData?.slice(productData.length-6,productData.length).map(data => <ProductCard key={data._id} data={data}></ProductCard>)
                }

            </div>


        </div>
    );
};

export default Products;

Products.propTypes = {
    productData: PropTypes.any
}