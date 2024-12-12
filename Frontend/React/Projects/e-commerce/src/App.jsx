// src/App.jsx
import 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';
import './App.css';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <nav>
                        <Link to="/">Products</Link>
                        <Link to="/cart">Cart</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;