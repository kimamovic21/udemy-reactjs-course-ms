import React,{useContext} from 'react';
import './App29.css';
import Ingredients from './Ingredients/Ingredients';
import Auth from './Auth';
import { AuthContext } from './context/auth-context';

const App29 = (props) => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  };

  return content;
};

export default App29;
