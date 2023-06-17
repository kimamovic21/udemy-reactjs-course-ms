import React from 'react';
import './App19.css';
import Layout from './Layout/Layout';
import Cart from './Cart/Cart';
import Products from './Shop/Products';
import { useSelector } from 'react-redux';

const App19 = () => {
  const showCart = useSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart/>}
       <Products />
    </Layout>
  );
};

export default App19;
