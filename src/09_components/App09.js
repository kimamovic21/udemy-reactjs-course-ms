import React, { useState } from 'react';
import './App09.css';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

const App09 = () => {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {
        name: userName, 
        age: userAge,
        id: Math.random().toString(),
      }];
    });
  };

  return (
    <React.Fragment>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </React.Fragment>
  );
};

export default App09;
