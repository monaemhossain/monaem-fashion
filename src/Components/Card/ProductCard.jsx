import { Rating } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ data }) => {
    const { _id, brandName, productName, productType, photo, productDescription, productPrice, productRating } = data;

    const navigate = useNavigate()

    const handleViewProduct = (data) => {
        navigate('/product-details', { state: { data } })
    }
    const handleUpdateProduct = (id) => {
        navigate(`/update-product/${id}`, { state: { data } })
        console.log(id);
    }

    return (

        <div className="lg:max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div className="grid items-center justify-center px-2" >
                <img className="rounded-t-lg w-full h-56 object-contain" src={photo} alt={brandName + ' image'} />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center">
                    <h5 className="mb-2 text-base font-medium tracking-tight text-gray-600 dark:text-white">Brand: {brandName}</h5>
                    <h5 className="mb-2 text-base font-medium tracking-tight text-gray-600 dark:text-white">{productType}</h5>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <p>Price: {productPrice}$</p>

                        <Rating name="read-only" value={productRating} readOnly />

                    </div>


                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName?.slice(0, 25) + "..."}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{productDescription?.slice(0, 80) + '...'}</p>
                <div className="flex justify-between">
                    <button
                        onClick={() => handleViewProduct(data)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        View Product
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    <button
                        onClick={() => handleUpdateProduct(_id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Update
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
ProductCard.propTypes = {
    data: PropTypes.any
}