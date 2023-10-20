import { Button, Label, TextInput } from "flowbite-react";

import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const UpdateProduct = () => {
    const passDetails = useLocation();
    const data = passDetails.state?.data
    const {photo, productName, brandName, productDescription, productType, productPrice} = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        const photo = e.target.photoUrl;
        const productName = e.target.productName;
        const brandName = e.target.brandName;
        const productType = e.target.productType;
        const productPrice = e.target.productPrice;
        const productDescription = e.target.productDescription;
        const newProduct = { photo, productName, brandName, productType, productPrice, productDescription }

        photo.defaultValue = photo
        productName
        brandName
        productType
        productPrice
        // console.log(newProduct);
        
        // send data to server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(() => {
                toast.success(`${productName} added successfully`)
            })
            document.addProductForm.reset();
    }
    const clearField = () => {
        // reset form
        setTimeout(3000)
        // document.addProductForm.submit();
        document.addProductForm.reset();
        return;
    }

    return (
        <section className='max-w-lg mx-auto md:py-30 py-20'>
            <div className='mb-5'>
                {/* {addedSuccess ? toast(addedSuccess) : ''} */}
            </div>
            <div className='mb-5'>
                {/* {successMsg ? <Alert severity="success">{successMsg}</Alert> : ''} */}
            </div>
            <form className="flex max-w-lg flex-col gap-4" onSubmit={handleSubmit} name="addProductForm">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoUrl"
                            defaultValue="Product photo url"
                        />
                    </div>
                    <TextInput
                        id="photoUrl"
                        placeholder="https://expample.com/yourphoto.jpg"
                        required
                        type="text"
                        defaultValue={photo}
                    />
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="productName"
                                defaultValue="Product Name"
                            />
                        </div>
                        <TextInput
                            id="productName"
                            placeholder="Tech not preach workout tee"
                            required
                            type="text"
                            defaultValue={productName}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="brandName"
                                defaultValue="Brand Name"
                            />
                        </div>
                        <TextInput
                            id="brandName"
                            placeholder="Nike, Adidas, Jack and Jones"
                            required
                            type="text"
                            defaultValue={brandName}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="productType"
                            defaultValue="Product Type"
                        />
                    </div>
                    <TextInput
                        id="productType"
                        placeholder="Shoes, T-shirt, Jeans"
                        required
                        type="text"
                        defaultValue={productType}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="productPrice"
                            defaultValue="Product price"
                        />
                    </div>
                    <TextInput
                        id="productPrice"
                        required
                        type="number"
                        placeholder="$220"
                        defaultValue={productPrice}
                    />
                </div>
                <div>

                    <label htmlFor="productDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                    <textarea id="productDescription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Description" defaultValue={productDescription}></textarea>

                </div>

                <div className="flex gap-4">
                    <Button onClick={clearField} className='dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black text-black border-2 border-black hover:bg-red-300 hover:text-black transition-all w-full'>
                        Update Product
                    </Button>
                </div>
            </form>
            <Toaster />
        </section>

    );
};

export default UpdateProduct;