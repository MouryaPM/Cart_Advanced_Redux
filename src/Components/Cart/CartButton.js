import styles from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={styles.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
