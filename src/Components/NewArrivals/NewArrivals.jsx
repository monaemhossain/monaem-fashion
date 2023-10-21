import { NavLink } from "react-router-dom";

const NewArrivals = () => {
    return (
        <section className="bg-center bg-cover bg-no-repeat h-80 bg-[url('https://media.istockphoto.com/id/1404894296/photo/woman-with-stylish-bag-on-grey-background-closeup.jpg?s=2048x2048&w=is&k=20&c=ciYErPB2dWwm3PZRMM3RrV_MOgRY5Vm_dqRjlHPaUms=')] bg-gray-700">
            <div className="max-w-screen-xl mx-auto grid justify-center items-center h-full">
                <div className="grid justify-center items-center h-auto text-center gap-8">
                    <p className="bg-darkTheme text-white p-1 text-xl rounded w-fit mx-auto">#new-arrivals</p>
                    <h2 className="tracking-[10px] text-white font-bold">MONAEM FASHION STORE</h2>
                    <NavLink to="/shop" className='text-white font-bold underline text-2xl'>Shop now</NavLink>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;