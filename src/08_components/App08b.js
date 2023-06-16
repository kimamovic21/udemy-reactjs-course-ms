import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

const App08b = () => {

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
    <div>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
};

export default App08b;
