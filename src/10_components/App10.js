import React, { useEffect, useState, useContext } from 'react';
import './App10.css';
import MainHeader from './MainHeader/MainHeader';
import Login from './Login/Login';
import Home from './Home/Home';
import AuthContext from './store/auth-context';

function App10() {
  const context = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
};

export default App10;
