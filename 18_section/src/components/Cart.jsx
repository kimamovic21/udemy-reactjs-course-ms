import { useContext } from 'react';
import { currencyFormatter } from '../util/formatting.js';

import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import Modal from './UI/Modal.jsx';
import Button from './UI/Button.jsx';
import CartItem from './CartItem.jsx';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  const handleCloseCart = () => userProgressContext.hideCart();
  const handleGoToCheckout = () => userProgressContext.showCheckout();

  return (
    <Modal
      className="cart"
      open={userProgressContext.progress === 'cart'}
      onClose={userProgressContext.progress === 'cart' ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => {  // console.log(item);
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartContext.addItem(item)}
              onDecrease={() => cartContext.removeItem(item.id)}
            />
          )
        })}
      </ul>

      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>

      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>

        {cartContext.items.length > 0 && (
            <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;