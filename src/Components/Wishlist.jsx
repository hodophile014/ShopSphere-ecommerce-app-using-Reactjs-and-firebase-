import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext"
import EmptyWishlist from "./EmptyWishlist";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useContext(WishlistContext);

  return (
    <div className="flex justify-center items-center w-full h-[100dvh]">
  
      {wishlistItems.length === 0 ? (
        <EmptyWishlist/>
      ) : (
        <div classname="flex flex-col">
          <div className="flex flex-row gap-x-20 underline">
            <span><FaArrowLeftLong /></span>
            <span>My Favorite List</span>

          </div>
          <div>
            {wishlistItems.map((item) => (
              <div key={item.id} className="border-2 flex flex-row gap-x-4 rounded-md shadow-lg">
                <div>
                <img src={item.filename} alt={item.name} style={{ maxWidth: "100px" }} className="rounded-md " />
                </div>
               <div className="flex flex-col">
               <h2 className="text-xl text-green-500">{item.title}</h2>
               
               <p className="font-bold">Price: ${item.price}</p>
               </div>
                <div className="text-xl flex flex-col gap-y-4 m-1">
                <button onClick={() => removeFromWishlist(item.id)}><MdDeleteOutline /></button>
                <button><CiShoppingCart /></button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={clearWishlist} className="bg-green-500 text-white px-2 py-2 rounded-md m-1">Clear Wishlist</button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
