import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop";
import Product from "./Components/Pages/Product/Product"
// import ProductDetail from "./components/pages/ProductDetail";
// import Cart from "./components/pages/Cart";
// import Checkout from "./components/pages/Checkout";
// import Blog from "./components/pages/Blog";
// import About from "./components/pages/About";
// import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
       <Route path="/product" element={<Product/>} />
         {/* <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
