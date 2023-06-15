import React from 'react';
import { useSelector } from 'react-redux';
import './App18.css';
import Counter from './Counter';
import Header from './Header';
import Auth from './Auth';
import UserProfile from './UserProfile';

const App18 = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  
  return (
    <React.Fragment>
      <Header />
      {!isAuth &&< Auth />} 
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
};

export default App18;
