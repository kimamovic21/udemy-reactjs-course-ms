import React,{useContext} from 'react';
import './App28.css';
import Ingredients from './Ingredients/Ingredients';
import Auth from './Auth';
import { AuthContext } from './context/auth-context';

const App28 = (props) => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  };

  return content;
};

export default App28;
