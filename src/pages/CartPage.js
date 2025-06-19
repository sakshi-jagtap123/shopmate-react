

import { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item, index) => index !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '15px' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px' }} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;

