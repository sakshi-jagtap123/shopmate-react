import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider, CartContext } from './components/CartContext'; // ✅ correct import
import "./App.css";

// ✅ Move header inside a component so useContext is called inside CartProvider
const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <a href="/">Home</a> | <a href="/cart">Cart ({cartItems.length})</a>
    </header>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header /> {/* ✅ header placed inside CartProvider */}
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

