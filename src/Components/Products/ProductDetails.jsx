
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const passDetails = useLocation();
    const data = passDetails.state?.data
    const { photo, productName, brandName, productDescription, productType, productPrice } = data;
    
    return (

        <div className='max-w-screen-lg mx-auto py-16 px-4'>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 px-5 py-20">
                <div className='col-span-1'>
                    <img className="object-cover w-full rounded-t-lg md:h-auto md:w-full md:rounded-none md:rounded-l-lg" src={photo} alt="" />
                </div>
                <div className="col-span-2 flex flex-col justify-between p-4 leading-normal">
                    <div className="text-gray-500">
                        <h5 className="mb-2 text-base font-medium tracking-tight text-gray-500 dark:text-white">Brand: {brandName}</h5>
                        <h5 className="mb-2 text-base font-medium tracking-tight text-gray-500 dark:text-white">Type: {productType}</h5>
                    </div>
                    <p className='font-semibold'>Price: {productPrice}$</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{productDescription}</p>
                    <div>
                        <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'>add to cart</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProductDetails;