import styles from "./Cart.module.css";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={styles.cart}>
      <h2>You Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.itemId}
            item={{
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.itemId,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
