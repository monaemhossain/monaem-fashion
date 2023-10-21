import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
const BrandCard = ({data}) => {
    // const {brandName} = data
    // console.log(data);
    const navigate = useNavigate()
    const handleSingleBrand = (data) => {
        navigate('/shop-brand', { state: { data } })
        // console.log(data);
    }
    return (
        <div
        onClick={() => handleSingleBrand(data)} 
        className="h-48 w-full flex justify-center items-center border cursor-pointer dark:text-white dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
            <h1 className="text-2xl font-medium uppercase">{data}</h1>
        </div>
    );
};

export default BrandCard;
BrandCard.propTypes = {
    data: PropTypes.any
}