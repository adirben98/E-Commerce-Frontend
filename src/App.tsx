
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Product from "./pages/Product";
 import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
 


function App() {
  const user=useSelector((state:RootState)=>state.user.user);
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/login" element={user?<Navigate to={"/"}/>:<Login/>}/>
      <Route path="/register" element={user?<Navigate to="/"/>:<Register/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
  );
}

export default App;
