import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shop from './components/pages/Shop/Shop';
import Product from './Components/Pages/Product/Product';
import Home from './Components/Pages/Home/Home';
import Layout from './Components/Layout/Layout';
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
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
