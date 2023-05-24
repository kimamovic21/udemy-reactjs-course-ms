import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  // console.log(props);
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  
  const cartRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1});
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

  return (
    <Modal onClose={props.onClose}>

        <ul className={classes['cart-items']}>
            {cartItems}
        </ul>
        <div className={classes.total}>
            <span>Total amount</span>
            <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
        
    </Modal>
  );
};

export default Cart;
