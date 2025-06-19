


const CartItem = ({ item }) => (
  <div className="cart-item">
    <h4>{item.name}</h4>
    <p>₹{item.price}</p>
  </div>
);

export default CartItem;

