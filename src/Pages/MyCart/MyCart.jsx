import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import CartCard from "./CartCard";

const MyCart = () => {
    const {user} = useContext(AuthProvider);
    const [cartItems, setCartItems] = useState([]);
    const userEmail = user.email.toLowerCase();
    
    useEffect(() => {
        fetch("https://monaem-backend.vercel.app/user-cart")
        .then(response => response.json())
        .then(data => setCartItems(data))
      },[])
    
      const userCart = cartItems?.filter(data => data.userEmail.toLowerCase() === userEmail);
   
    return (
        <div className="max-w-screen-lg mx-auto py-10 grid items-center justify-center">
            {
                cartItems?userCart?.map(item => <CartCard key={item._id} item={item}></CartCard>):<h2 className="text-5xl text-center dark:text-white">Cart is empty</h2>
            }
        </div>
    );
};

export default MyCart;