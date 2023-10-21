
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails = () => {
    const passDetails = useLocation();
    const {user} = useContext(AuthProvider);
    const data = passDetails.state?.data
    const { photo, productName, brandName, productDescription, productType, productPrice } = data;
    console.log(user.email);

    data.userEmail = user.email
    // console.log(data);

    const cartData = {userEmail: user.email, photo, productName, brandName, productDescription, productType, productPrice}
    
    const handleAddToCart = (data) => {
        const cartData = data
        
        console.log(cartData);
        // send data to server
        fetch('https://monaem-backend.vercel.app/user-cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(() => {
                toast.success(`${productName} added successfully to your cart`)
            })
    }

return (

    <div className='max-w-screen-lg mx-auto py-16 px-4'>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 px-5">
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
                    <button onClick={() => handleAddToCart(cartData)} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'>Add to cart</button>
                </div>
            </div>
        </div>
        <Toaster />
    </div>

);
};

export default ProductDetails;