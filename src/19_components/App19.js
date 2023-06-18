import React, { useEffect } from 'react';
import './App19.css';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart/Cart';
import Layout from './Layout/Layout';
import Products from './Shop/Products';
import Notification from './UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
