import { Alert } from "@mui/material";
import { Button, Label, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
    // const [successMsg, setSuccessMsg] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const photo = e.target.photoUrl.value;
        const productName = e.target.productName.value;
        const brandName = e.target.brandName.value;
        const productType = e.target.productType.value;
        const productPrice = e.target.productPrice.value;
        const productDescription = e.target.productDescription.value;
        
    }


    return (
        <section className='max-w-sm mx-auto md:py-30 py-20'>
            <div className='mb-5'>
                {/* {successMsg ? <Alert severity="success">{successMsg}</Alert> : ''} */}
            </div>
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoUrl"
                            value="Product photo url"
                        />
                    </div>
                    <TextInput
                        id="photoUrl"
                        placeholder="https://expample.com/yourphoto.jpg"
                        required
                        type="text"
                    />
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="productName"
                                value="Product Name"
                            />
                        </div>
                        <TextInput
                            id="productName"
                            placeholder="Tech not preach workout tee"
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="brandName"
                                value="Brand Name"
                            />
                        </div>
                        <TextInput
                            id="brandName"
                            placeholder="Nike, Adidas, Jack and Jones"
                            required
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="productType"
                            value="Product Type"
                        />
                    </div>
                    <TextInput
                        id="productType"
                        placeholder="Shoes, T-shirt, Jeans"
                        required
                        type="text"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="productPrice"
                            value="Product price"
                        />
                    </div>
                    <TextInput
                        id="productPrice"
                        required
                        type="number"
                        placeholder="$220"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="productDescription"
                            value="Product Description"
                        />
                    </div>
                    <TextInput
                        id="productDescription"
                        required
                        type="text"
                        placeholder="Describe your product"
                    />
                </div>

                <Button type="submit" className='dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black text-black border-2 border-black hover:bg-darkTheme hover:text-white transition-all'>
                    Add Product
                </Button>

                <div className="grid justify-end">
                    <p>Already Have Account? <NavLink to='/sign-in' className='text-blue-500'>Sign In Here</NavLink></p>
                </div>
            </form>
        </section>

    );
};

export default AddProduct;