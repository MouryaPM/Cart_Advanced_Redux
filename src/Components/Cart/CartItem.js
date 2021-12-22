import styles from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name: title,
        price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          X <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
