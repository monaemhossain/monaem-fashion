import { PropTypes } from "prop-types";
import BrandCard from "../Card/BrandCard";

const Brands = ({ productData }) => {
const brandNameList = [...new Set(productData.map(product => product.brandName))]
// console.log(productData.photo);
productData
    return (
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-between my-10 pt-10">
            {
                brandNameList?.slice(0,6).map((product, index) => <BrandCard key={brandNameList.length-index} data={product}></BrandCard>)
            }
        </div>
    );
};

export default Brands;
Brands.propTypes = {
    productData: PropTypes.any
}