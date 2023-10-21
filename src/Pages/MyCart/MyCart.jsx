import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import CartCard from "./CartCard";

const MyCart = () => {
    const {user} = useContext(AuthProvider);
    const [cartItems, setCartItems] = useState([]);
    const userEmail = user.email.toLowerCase();
    
    useEffect(() => {
        fetch("http://localhost:5000/user-cart")
        .then(response => response.json())
        .then(data => setCartItems(data))
      },[])
    
      const userCart = cartItems.filter(data => data.userEmail.toLowerCase() === userEmail);
   
    return (
        <div className="max-w-screen-lg mx-auto py-10">
            {
                userCart.map(item => <CartCard key={item._id} item={item}></CartCard>)
            }
        </div>
    );
};

export default MyCart;