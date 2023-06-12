import React, { useState, useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  // console.log(props);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartContext = useContext(CartContext);

  const totalAmount = +`${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  
  const cartRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1});
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    console.log(userData);
    await fetch(`https://udemy-react-16-ms-meals-default-rtdb.firebaseio.com/orders.json`, { 
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  const cartItems = cartContext.items.map((item) => (
    <CartItem key={item.id} 
              name={item.name} 
              amount={item.amount}
              price={item.price}
              onRemove={cartRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const modalActions = (
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && 
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>}
    </div>);

    const cartModalContent = (
      <React.Fragment>
          <div className={classes.cartItems}>
            {cartItems} 
            <div className={classes.total}>
                <span>Total amount</span>
                <span>${totalAmount}</span>
            </div>
            {isCheckout && 
              (<Checkout 
                  onConfirm={submitOrderHandler} 
                  onCancel={props.onClose}/>)}
            {!isCheckout && modalActions}
          </div>
      </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
      <React.Fragment>
        <p>Successfully sent the order!</p>;
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>Close</button>
        </div>
      </React.Fragment>
    );

  return (
    <Modal onClose={props.onClose}>
       {!isSubmitting && !didSubmit && cartModalContent}
       {isSubmitting && isSubmittingModalContent}
       {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
