import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaLongArrowAltLeft } from "react-icons/fa";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex justify-center flex-col items-center h-[100dvh] w-full">
      <span className="flex flexr-row gap-x-10">
        <h1 className="m-1 text-2xl"><FaLongArrowAltLeft /></h1>
      <h1 className="text-xl font-bold underline hover:text-green-500">Cart</h1>
      </span>
      {cartItems.length === 0 ? (
        <EmptyCart/>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-row justify-center gap-x-4">
                <div>
                <img src={item.filename} alt="" className="w-[200px] rounded-md"/>
                </div>
                <div>
                <h2>{item.name}</h2>
                <p className="text-xl">Price: <span className="text-green-500">${item.price}</span></p>
                <p className="text-xl">Quantity: <span className="text-green-500">{item.quantity}</span></p>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-xl px-2 rounded-md text-white">Remove</button>
                </div>
                
              </div>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center gap-y-4 m-1">
          <h3 className="text-xl">Total: <span className="text-green-400">${totalPrice.toFixed(2)}</span></h3>
          <button onClick={clearCart} className="bg-red-500 px-2 py-2 text-white rounded-md">Clear Cart</button>
          <button className="bg-green-500 px-2 py-2 text-white rounded-md" onClick={()=>{navigate("/payment")}}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
