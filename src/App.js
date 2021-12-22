import React, { useEffect, Fragment } from "react";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./Components/Notification/Notification";
import { sendCartData, fecthCartData } from "./store/cart-actions";
let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
//thunk