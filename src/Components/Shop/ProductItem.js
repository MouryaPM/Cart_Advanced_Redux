import React from "react";
import styles from "./ProductItem.module.css";
import Card from "../UI/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCartHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;
    // const updatedItems = cart.items.slice();
    // const existingItems = updatedItems.find((item) => item.id === id);
    // if (existingItems) {
    //   const updatedItem = { ...existingItems };
    //   updatedItem.quantity++;
    //   updatedItem.totalPrice = updatedItem.totalPrice + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }

    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   items: updatedItems,
    // };
    // dispatch(cartActions.replaceCart(newCart));

    dispatch(
      cartActions.addItemToCart({
        id,
        name: title,
        price,
      })
    );
  };
  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addToCartHandler}>Add To Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
