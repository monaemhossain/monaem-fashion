import { PropTypes } from 'prop-types'
const CartCard = ({ item }) => {
    const { productName, productDescription, photo } = item;
    return (
        <div className='grid justify-center items-center'>

            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl dark:border-gray-700 dark:bg-gray-800 ">
                <img className="object-cover w-full rounded-t-lg  h-auto md:w-52 px-2 md:rounded-none md:rounded-l-lg" src={photo} alt={productName + " image"} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{productDescription.slice(0, 100)}</p>
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove From Cart</button>

                </div>
            </div>

        </div>
    );
};

export default CartCard;

CartCard.propTypes = {
    item: PropTypes.any
}