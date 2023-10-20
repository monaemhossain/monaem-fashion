import { PropTypes } from "prop-types";
import BrandCard from "../Card/BrandCard";

const Brands = ({ productData }) => {
// console.log(productData);
productData
    return (
        <div className="max-w-screen-xl mx-auto flex justify-between my-10 pt-10">
            {
                productData?.slice(0,4).map(product => <BrandCard key={product._id} data={product}></BrandCard>)
            }
        </div>
    );
};

export default Brands;
Brands.propTypes = {
    productData: PropTypes.any
}