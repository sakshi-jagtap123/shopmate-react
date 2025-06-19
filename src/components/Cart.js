
import CartItem from './CartItem';

const Cart = ({ cartItems }) => (
  <div>
    <h2>Your Cart</h2>
    {cartItems.map((item, index) => (
      <CartItem key={index} item={item} />
    ))}
  </div>
);

export default Cart;
