import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
const BrandCard = ({data}) => {
    const {brandName} = data
    // console.log(data);
    const navigate = useNavigate()
    const handleSingleBrand = (data) => {
        navigate('/shop-brand', { state: { data } })
        console.log(data.brandName);
    }
    return (
        <div
        onClick={() => handleSingleBrand(data)} 
        className="h-48 w-full flex justify-center items-center border cursor-pointer hover:bg-gray-300 transition-colors">
            <h1 className="text-3xl font-medium uppercase">{brandName}</h1>
        </div>
    );
};

export default BrandCard;
BrandCard.propTypes = {
    data: PropTypes.any
}