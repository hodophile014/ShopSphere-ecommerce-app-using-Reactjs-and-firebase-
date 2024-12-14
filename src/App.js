import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Welcome from "./Components/Welcome";
import Page1 from "./Components/Page1";
import Page3 from "./Components/Page3";
import Terms from "./Components/Terms";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Notifications from "./Components/Notifications";
import ProductDetails from "./Components/ProductDetails";
import Page2 from "./Components/Page2";
import Cart from "./Components/Cart";
import Signup from "./Components/Signup";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import Wishlist from "./Components/Wishlist";
import { NotificationsProvider } from "./Context/NotificationsContext";
import Payment from "./Components/Payment";
import OrderPlaced from "./Components/OrderPlaced";



function App() {
  return (
 <NotificationsProvider>
  <WishlistProvider>
   <CartProvider>
     <AuthProvider>
    <BrowserRouter>
 
 <Navbar/>
 <Routes>
  
  <Route path="/" element = {<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/products/:productId" element={<ProductDetails/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/wishlist" element={<Wishlist/>}/>
  <Route path="/notifications" element={<Notifications/>}/>
  <Route path="/payment" element={<Payment/>}/>
  <Route path="/order-placed" element={<OrderPlaced/>}/>
  <Route path="/terms" element={<Terms/>}/>
  <Route path="/page1" element={<Page1/>}/>
  <Route path="/page2" element={<Page2/>}/>
  <Route path="/page3" element={<Page3/>}/>
  <Route path="/welcome" element={<Welcome/>}/>
 </Routes>
   </BrowserRouter>
   
   </AuthProvider>
  </CartProvider>
 </WishlistProvider>
 </NotificationsProvider>
  );
}

export default App;
