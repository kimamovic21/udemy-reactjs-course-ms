import React, { useState } from 'react';
import './App11.css';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';

const App11 = () => {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler} />
        <main>
            <Meals />
        </main>
    </CartProvider>
  );
};

export default App11;
