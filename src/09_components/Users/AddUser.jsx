import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(nameInputRef);
    console.log(nameInputRef.current.value);
    console.log(ageInputRef);
    console.log(ageInputRef.current.value);

    const enteredUsernameRef = nameInputRef.current.value;
    const enteredUserAgeRef = ageInputRef.current.value;

    if (enteredUsernameRef.trim().length === 0 || enteredUserAgeRef.trim().length === 0) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid name and age(non-empty)!',
        });
        return;
    };
    if (+enteredUserAgeRef< 1) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age ( > 0)!',
        });
        return;
    };

    props.onAddUser(enteredUsernameRef, enteredUserAgeRef);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>

      {error && (<ErrorModal 
                    title={error.title} 
                    message={error.message}
                    onConfirm={errorHandler}
                 />
      )}
      
      <Card className={classes.input}>

          <form onSubmit={addUserHandler}>
              <label htmlFor='username'>Username</label>
              <input id='username' 
                    type='text' 
                    ref={nameInputRef}
              />

              <label htmlFor='age'>Age (Years)</label>
              <input id='age'
                    type='number' 
                    ref={ageInputRef}
              />

              <Button type='submit'>Add User</Button>
          </form>

      </Card>
    </Wrapper>
  );
};

export default AddUser;




// Pisemo Button komponentu umjesto button elementa
// <button type='submit'>Add User</button>
